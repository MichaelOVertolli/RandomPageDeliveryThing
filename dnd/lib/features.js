// The library (committed rules + loaded extensions) and the features a
// character has, per node. Pure.
import { CLASSES } from '../rules/classes/index.js';
import { SPECIES } from '../rules/species.js';
import { WEAPONS, ARMOR, TOOLS } from '../rules/equipment.js';
import { SPELL_ADDONS } from '../rules/common.js';
import { NODES } from '../rules/tree.js';
import ROLES from '../rules/roles.js';

export function slug(name) {
  return String(name).toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function makeLibrary(extensions = []) {
  const classes = {};
  for (const [id, c] of Object.entries(CLASSES)) classes[id] = { ...c, subclasses: [...c.subclasses] };
  const species = { ...SPECIES };
  const feats = {};
  const features = [...SPELL_ADDONS];
  const roleSteps = [];
  for (const c of Object.values(classes)) features.push(...c.features);
  for (const s of Object.values(SPECIES)) features.push(...s.traits.map(t => ({ ...t, species: s.id })));
  for (const ext of extensions) {
    for (const sc of ext.subclasses ?? []) classes[sc.class]?.subclasses.push({ id: sc.id, name: sc.name, ext: ext.id });
    for (const s of ext.species ?? []) {
      species[s.id] = { traits: [], ...s };
      features.push(...(s.traits ?? []).map(t => ({ ...t, species: s.id })));
    }
    for (const f of ext.feats ?? []) {
      feats[f.id] = f;
      features.push({ ...f, feat: f.id });
    }
    features.push(...(ext.features ?? []));
    roleSteps.push(...(ext.roleSteps ?? []));
  }
  return {
    classes, species, feats, features, roleSteps, roles: ROLES,
    weapons: WEAPONS, armor: ARMOR, tools: TOOLS,
    extensions: extensions.map(e => e.id),
  };
}

export function choiceValues(ch, key) {
  const v = ch.choices?.[key];
  return v == null ? [] : Array.isArray(v) ? v : [v];
}

// Oath spells the character has at their level (always prepared).
export function oathSpells(ch, lib) {
  const oath = lib.classes[ch.class]?.oathSpells?.[ch.subclass] ?? {};
  return Object.entries(oath).filter(([lvl]) => ch.level >= Number(lvl)).flatMap(([, names]) => names);
}

export function characterSpells(ch, lib) {
  const out = [...(ch.spells ?? []), ...oathSpells(ch, lib)];
  const seen = new Set();
  return out.filter(n => !seen.has(n.toLowerCase()) && seen.add(n.toLowerCase()));
}

export function knowsSpell(ch, nameOrSlug, lib) {
  const want = slug(nameOrSlug);
  return characterSpells(ch, lib).some(n => slug(n) === want);
}

function featureActive(f, ch, lib) {
  if (f.class && (f.class !== ch.class || ch.level < (f.level ?? 1))) return false;
  if (f.subclass && f.subclass !== ch.subclass) return false;
  if (f.species && f.species !== ch.species) return false;
  if (f.feat && !(ch.extras ?? []).includes(f.feat)) return false;
  if (f.spell && !knowsSpell(ch, f.spell, lib)) return false;
  if (f.choice && !choiceValues(ch, f.choice.key).includes(f.choice.value)) return false;
  return true;
}

export function activeFeatures(ch, lib) {
  const inline = (ch.extras ?? [])
    .filter(e => typeof e === 'object')
    .map(e => ({ id: slug(e.name), nodes: [], text: '', ...e, inline: true }));
  return [...lib.features.filter(f => featureActive(f, ch, lib)), ...inline];
}

export function hasFeature(ch, id, lib) {
  return activeFeatures(ch, lib).some(f => f.id === id);
}

// The character's class already gives this armor training ('light', 'medium', ...).
export function classArmor(ch, lib, kind) {
  return (lib.classes[ch.class]?.armor ?? []).includes(kind);
}

// `hideIf: ['class-armor:medium']` hides a card that changes nothing at the
// table for this character (e.g. armor training the class already gives).
function changesNothing(f, ch, lib) {
  return (f.hideIf ?? []).some(r => r.startsWith('class-armor:') && classArmor(ch, lib, r.slice(12)));
}

export function featuresFor(ch, node, lib) {
  return activeFeatures(ch, lib).filter(f => (f.nodes ?? []).includes(node) && !changesNothing(f, ch, lib));
}

function weaponKinds(ch, lib) {
  const kinds = new Set();
  for (const w of ch.weapons ?? []) {
    const base = lib.weapons[typeof w === 'string' ? w : w.id];
    if (!base) continue;
    kinds.add(base.kind);
    if (base.props.includes('thrown')) kinds.add('ranged');
  }
  return kinds;
}

// Node ids (top-level and detail pages) that have something for this character.
export function visibleNodes(ch, lib) {
  const kinds = weaponKinds(ch, lib);
  const spells = characterSpells(ch, lib);
  const has = n => featuresFor(ch, n, lib).length > 0;
  return Object.keys(NODES).filter(n => {
    switch (n) {
      case 'turn/melee': return kinds.has('melee') || has(n);
      case 'turn/ranged': return kinds.has('ranged');
      case 'turn/spell': return spells.length > 0 || has(n);
      case 'turn/bonus': return spells.length > 0 || has(n);
      default: return true;
    }
  });
}

// ---- spells (records from the user's spell list; the data itself is private) ----

const ORD = ['cantrip', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'];

function castTime(s) {
  return String(s.castingTime ?? '').replace(/\*/g, '').trim().toLowerCase().replace(/^1 (action|bonus action|reaction)$/, '$1');
}

export function spellLine(s) {
  const parts = [s.level ? `${ORD[s.level]} level` : 'cantrip', castTime(s)];
  if (s.range) parts.push(String(s.range).toLowerCase());
  if (s.duration) parts.push(String(s.duration).toLowerCase());
  if (s.concentration) parts.push('concentration');
  if (s.save) parts.push(String(s.save).replace(/^(\w)(\w+) save$/i, (_, a, b) => `${a.toUpperCase()}${b.toLowerCase()} save`));
  if (s.attack) parts.push(`${String(s.attack).toLowerCase()} attack`);
  if (s.ritual) parts.push('ritual');
  return parts.join(' · ');
}

export function spellPlacement(s) {
  const t = castTime(s);
  const out = ['turn/spell'];
  if (t.includes('bonus action')) out.push('turn/bonus');
  else if (t.includes('reaction')) out.push('defend');
  return out;
}

export function findSpell(spells, name) {
  const want = String(name).toLowerCase();
  return (spells ?? []).find(s => String(s.name).toLowerCase() === want);
}
