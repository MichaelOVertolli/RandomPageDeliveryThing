// Character, role and extension checks. Pure: every function returns a list of
// error strings that name the character (or role/extension) and the field.
import { ABILITIES, SKILLS } from '../rules/common.js';
import { NODES, GROUPS } from '../rules/tree.js';
import { SHIELD } from '../rules/equipment.js';
import { findSpell, slug } from './features.js';
import { VAR_NAMES, rangerSpellsKnown, paladinPrepared } from './engine.js';
import { MAX_IF, unknownRequirement } from './playbook.js';

const REQUIRED = ['id', 'name', 'class', 'level', 'species', 'abilities'];
const TOP_NODES = GROUPS.flatMap(g => g.nodes);
const asList = v => (v == null ? [] : Array.isArray(v) ? v : [v]);

export function validateCharacter(ch, lib, opts = {}) {
  const tag = `${ch?.name ?? '?'} (${ch?.id ?? '?'})`;
  const errors = [];
  const err = (field, msg) => errors.push(`${tag}: ${field}: ${msg}`);

  for (const f of REQUIRED) if (ch[f] == null || ch[f] === '') err(f, 'is required');
  const cls = lib.classes[ch.class];
  if (ch.class != null && !cls) { err('class', `unknown class "${ch.class}"`); return errors; }

  if (ch.level != null && !(Number.isInteger(ch.level) && ch.level >= 1 && ch.level <= 10)) err('level', `must be 1-10, got ${ch.level}`);
  if (cls) {
    if (ch.subclass != null && !cls.subclasses.some(s => s.id === ch.subclass)) err('subclass', `unknown ${cls.id} subclass "${ch.subclass}"`);
    if (ch.subclass == null && ch.level >= 3) err('subclass', 'is required from level 3');
  }
  const species = lib.species[ch.species];
  if (ch.species != null && !species) err('species', `unknown species "${ch.species}"`);

  if (ch.abilities) {
    for (const a of ABILITIES) {
      const v = ch.abilities[a];
      if (!(Number.isInteger(v) && v >= 1 && v <= 30)) err(`abilities.${a}`, `must be 1-30, got ${v}`);
    }
  }

  for (const s of ch.skills ?? []) if (!SKILLS[s]) err('skills', `unknown skill "${s}"`);
  for (const t of ch.tools ?? []) if (!lib.tools[t]) err('tools', `unknown tool "${t}"`);
  for (const e of ch.expertise ?? []) {
    if (!(ch.skills ?? []).includes(e) && !(ch.tools ?? []).includes(e)) err('expertise', `"${e}" is not one of the character's skills or tools`);
  }
  for (const w of ch.weapons ?? []) {
    const id = typeof w === 'string' ? w : w?.id;
    if (!lib.weapons[id]) err('weapons', `unknown weapon "${id}"`);
  }
  if (ch.armor && !lib.armor[ch.armor.type ?? 'none']) err('armor', `unknown armor "${ch.armor.type}"`);

  if (ch.role != null) {
    const role = lib.roles[ch.role];
    if (!role) err('role', `unknown role "${ch.role}"`);
    else if (role.class !== ch.class) err('role', `"${ch.role}" is a ${role.class} role, not ${ch.class}`);
  }

  const allowed = { ...(cls?.choices ?? {}), ...(species?.choices ?? {}) };
  for (const [key, value] of Object.entries(ch.choices ?? {})) {
    const spec = allowed[key];
    if (!spec) { err(`choices.${key}`, 'not a choice for this class or species'); continue; }
    const vals = asList(value);
    for (const v of vals) if (!spec.values.includes(v)) err(`choices.${key}`, `"${v}" is not one of ${spec.values.join(', ')}`);
    const max = spec.max ? spec.max(ch.level, ch.subclass) : 1;
    if (vals.length > max) err(`choices.${key}`, `${vals.length} picked, at most ${max} at level ${ch.level}`);
  }

  for (const x of ch.extras ?? []) {
    if (typeof x === 'string') { if (!lib.feats[x]) err('extras', `unknown feat or extra "${x}"`); }
    else if (!x?.name || !Array.isArray(x.nodes)) err('extras', 'inline extras need a name and nodes[]');
  }
  for (const n of Object.keys(ch.notes ?? {})) if (!NODES[n]) err('notes', `unknown node "${n}"`);
  for (const n of Object.keys(ch.overrides?.playbook ?? {})) if (!NODES[n]) err('overrides.playbook', `unknown node "${n}"`);

  const spells = ch.spells ?? [];
  if (opts.spells) for (const s of spells) if (!findSpell(opts.spells, s)) err('spells', `unknown spell "${s}"`);
  if (cls?.casting && ch.level != null) {
    const max = cls.casting.kind === 'known' ? rangerSpellsKnown(ch.level) : paladinPrepared(ch);
    if (spells.length > max) err('spells', `${spells.length} spells, at most ${max} for a level ${ch.level} ${cls.id}`);
  }
  return errors;
}

// ---- roles ----

function itemNames(lib) {
  const names = [
    ...Object.values(lib.weapons).map(w => w.name),
    ...Object.values(lib.armor).filter(a => a.id !== 'none').map(a => a.name),
    SHIELD.name,
    ...Object.values(lib.tools).map(t => t.name),
  ];
  return [...new Set(names)];
}

const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const wordRe = name => new RegExp(`(^|[^\\w])${esc(name)}([^\\w]|$)`, 'i');

// A spell id ("hunters-mark") is checked against the spell data when it is loaded.
const spellKnown = (id, spells) => /^[a-z0-9-]+$/.test(id) && (!spells?.length || spells.some(s => slug(s.name) === id));

function tokenOk(tok, lib) {
  if (tok.startsWith('weapon.')) return ['melee', 'ranged', 'thrown', 'sneak'].includes(tok.slice(7));
  if (tok.startsWith('skill.')) return !!SKILLS[tok.slice(6)];
  if (tok.startsWith('save.')) return ABILITIES.includes(tok.slice(5));
  if (tok.startsWith('tool.')) return !!lib.tools[tok.slice(5)];
  if (tok.startsWith('spell:')) return /^[a-z0-9-]+$/.test(tok.slice(6));
  return VAR_NAMES.includes(tok);
}

// Checks one step/if entry's text and requirements.
function checkEntry(entry, where, ctx, err) {
  const { lib, items, people, spells } = ctx;
  const texts = 'text' in entry ? [entry.text] : [entry.when, entry.then];
  for (const t of texts) {
    if (typeof t !== 'string' || !t) { err(where, 'missing text'); continue; }
    for (const [, tok] of t.matchAll(/\{([^}]*)\}/g)) {
      if (!tokenOk(tok, lib)) err(where, `unknown slot {${tok}}`);
      else if (tok.startsWith('spell:') && !spellKnown(tok.slice(6), spells)) err(where, `unknown spell "${tok.slice(6)}"`);
    }
    const bare = t.replace(/\{[^}]*\}/g, ' ');
    for (const n of items) if (wordRe(n).test(bare)) err(where, `names an item "${n}"; use a slot instead`);
    for (const n of people) if (wordRe(n).test(bare)) err(where, `names a character "${n}"`);
  }
  for (const r of entry.requires ?? []) checkRequirement(r, where, ctx, err);
}

function checkRequirement(r, where, { lib, spells }, err) {
  const id = r.replace(/^!/, '');
  if (!id.startsWith('spell:')) { if (unknownRequirement(r, lib)) err(where, `unknown requirement "${r}"`); }
  else if (!/^[a-z0-9-]+$/.test(id.slice(6))) err(where, `unknown requirement "${r}"`);
  else if (!spellKnown(id.slice(6), spells)) err(where, `unknown spell "${id.slice(6)}"`);
}

function checkSteps(block, prefix, ctx, err) {
  for (const key of ['first', 'do', 'if', 'more']) {
    (block[key] ?? []).forEach((e, i) => checkEntry(e, `${prefix}: ${key}[${i}]`, ctx, err));
  }
}

export function validateRole(role, lib, opts = {}) {
  const errors = [];
  const tag = `role ${role?.id ?? '?'}`;
  const err = (field, msg) => errors.push(`${tag}: ${field}: ${msg}`);
  for (const f of ['id', 'class', 'label', 'job']) if (!role[f]) err(f, 'is required');
  if (role.class && !lib.classes[role.class]) err('class', `unknown class "${role.class}"`);
  const ctx = { lib, items: itemNames(lib), people: (opts.characters ?? []).map(c => c.name).filter(Boolean), spells: opts.spells };
  for (const n of TOP_NODES) if (!role.playbook?.[n]?.do?.length) err(n, 'missing from the playbook (every top-level node needs a Do this)');
  for (const [node, block] of Object.entries(role.playbook ?? {})) {
    if (!NODES[node]) { err(node, 'unknown node'); continue; }
    if ((block.if ?? []).length > MAX_IF) err(node, `if: ${block.if.length} entries (max ${MAX_IF})`);
    checkSteps(block, node, ctx, err);
  }
  return errors;
}

// ---- extensions ----

export function validateExtension(ext) {
  const errors = [];
  const tag = `extension ${ext?.id ?? '?'}`;
  const err = (field, msg) => errors.push(`${tag}: ${field}: ${msg}`);
  if (!ext?.id) err('id', 'is required');
  const need = (list, field, keys) => (list ?? []).forEach((x, i) => {
    for (const k of keys) if (x?.[k] == null) err(`${field}[${i}].${k}`, 'is required');
  });
  need(ext.subclasses, 'subclasses', ['class', 'id', 'name']);
  need(ext.species, 'species', ['id', 'name', 'speed']);
  need(ext.feats, 'feats', ['id', 'name', 'nodes', 'text']);
  need(ext.features, 'features', ['id', 'name', 'nodes', 'text']);
  need(ext.roleSteps, 'roleSteps', ['role', 'node']);
  const nodeCheck = (list, field) => (list ?? []).forEach((x, i) => {
    for (const n of x?.nodes ?? []) if (!NODES[n]) err(`${field}[${i}].nodes`, `unknown node "${n}"`);
  });
  nodeCheck(ext.features, 'features');
  nodeCheck(ext.feats, 'feats');
  (ext.species ?? []).forEach((s, i) => nodeCheck(s.traits, `species[${i}].traits`));
  return errors;
}

// ---- everything at once ----

export function validateAll({ lib, characters = [], spells, extensions = [] }) {
  const errors = [];
  for (const e of extensions) errors.push(...validateExtension(e));
  for (const r of Object.values(lib.roles)) errors.push(...validateRole(r, lib, { characters, spells }));
  const ctx = { lib, items: itemNames(lib), people: characters.map(c => c.name).filter(Boolean), spells };
  for (const rs of lib.roleSteps ?? []) {
    const err = (field, msg) => errors.push(`role steps ${rs.role}/${rs.node}: ${field}: ${msg}`);
    if (!lib.roles[rs.role]) err('role', `unknown role "${rs.role}"`);
    if (!NODES[rs.node]) err('node', `unknown node "${rs.node}"`);
    for (const r of rs.requires ?? []) checkRequirement(r, `${rs.node}: requires`, ctx, err);
    checkSteps(rs, rs.node, ctx, err);
  }
  const seen = new Set();
  for (const ch of characters) {
    if (seen.has(ch.id)) errors.push(`${ch.name} (${ch.id}): id: duplicate id`);
    seen.add(ch.id);
    errors.push(...validateCharacter(ch, lib, { spells }));
  }
  return errors;
}

// ---- library gaps (the app shows these in a red banner) ----

// A character whose species or subclass the loaded library lacks: usually a
// private extension that failed to load.
export function libraryGaps(characters, lib) {
  const gaps = [];
  for (const ch of characters) {
    if (ch.species != null && !lib.species[ch.species]) gaps.push(`${ch.name}: species "${ch.species}" is not in the loaded library`);
    const cls = lib.classes[ch.class];
    if (cls && ch.subclass != null && !cls.subclasses.some(s => s.id === ch.subclass)) gaps.push(`${ch.name}: subclass "${ch.subclass}" is not in the loaded library`);
  }
  return gaps;
}
