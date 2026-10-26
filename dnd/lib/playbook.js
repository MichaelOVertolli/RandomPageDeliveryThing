// Role → "Do this" / "If…" for (character, node): requires-filtering, slot and
// var resolution, extension steps, character overrides. Pure.
// Output strings use **bold** markup; render.js escapes and converts it.
import { BASIC, ABILITY_SHORT } from '../rules/common.js';
import { activeFeatures, hasFeature, knowsSpell, characterSpells, findSpell, spellLine, slug, classArmor } from './features.js';
import { weaponRows, vars, skills, saves, toolBonus, signed, heavyArmor, stealthDisadvantage } from './engine.js';

export const MAX_IF = 3;

export function roleFor(ch, lib) {
  if (ch.role) return lib.roles[ch.role];
  return Object.values(lib.roles).find(r => r.class === ch.class && r.default);
}

// ---- weapon slots ----

function pickWeapon(slot, rows) {
  switch (slot) {
    case 'melee': { const r = rows.find(x => x.kind === 'melee'); return r && [r, 'melee']; }
    case 'ranged': {
      const r = rows.find(x => x.ranged) ?? rows.find(x => x.thrown);
      return r && [r, 'ranged'];
    }
    case 'thrown': { const r = rows.find(x => x.thrown); return r && [r, 'ranged']; }
    case 'sneak': {
      const r = rows.find(x => x.finesse || x.ranged);
      return r && [r, r.ranged ? 'ranged' : 'melee'];
    }
    default: return undefined;
  }
}

function addonApplies(on, row, usage, ch) {
  switch (on) {
    case 'weapon': return true;
    case 'melee': return usage === 'melee';
    case 'str-melee': return usage === 'melee' && row.ability === 'str';
    case 'sneak': return row.finesse || row.ranged;
    case 'two-hand-melee': return usage === 'melee' && (row.twoHanded || (row.versatile && !ch.armor?.shield));
    default: return false;
  }
}

// "**Longsword** +9 to hit, **1d8+5** slashing (two hands: 1d10+5) · crit on **19–20**"
// `addons` limits the add-ons to these feature ids (Do this / If… show only the
// role's signature one); omitted = every add-on (the detail pages).
export function weaponLine(row, usage, ch, lib, v = vars(ch, lib), addons) {
  let s = `**${row.name}**`;
  if (row.count > 1) s += ` ×${row.count}`;
  if (usage === 'ranged' && !row.ranged) s += ` (thrown ${row.range})`;
  else if (row.ranged) s += ` (${row.range})`;
  s += ` ${signed(row.toHit)} to hit, **${row.damage}** ${row.type}`;
  if (usage === 'melee' && row.versatileDamage && !ch.armor?.shield) s += ` (two hands: ${row.versatileDamage})`;
  for (const f of activeFeatures(ch, lib)) {
    if (addons && !addons.includes(f.id)) continue;
    if (f.addon && addonApplies(f.addon.on, row, usage, ch)) {
      const t = fill(f.addon.text, v);
      if (t != null) s += ` · ${t}`;
    }
  }
  return s;
}

function fill(text, v) {
  let ok = true;
  const out = String(text).replace(/\{([^}]+)\}/g, (m, k) => {
    if (v[k] === undefined) { ok = false; return m; }
    return String(v[k]);
  });
  return ok ? out : null;
}

// `short`: the name only (the turn page; the one-liner is on its spell card).
function spellSlot(name, ch, lib, ctx, short) {
  if (!knowsSpell(ch, name, lib)) return undefined;
  const real = characterSpells(ch, lib).find(n => slug(n) === slug(name));
  const rec = findSpell(ctx?.spells, real);
  return rec && !short ? `**${rec.name}** (${spellLine(rec)})` : `**${rec?.name ?? real}**`;
}

// Resolve one {token}; undefined = the character can't fill it. `page` (one
// per playbook) keeps each weapon's full line to its first mention and limits
// add-ons to the role's signature one.
function resolveToken(tok, ch, lib, ctx, v, page) {
  if (tok.startsWith('weapon.')) {
    const pick = pickWeapon(tok.slice(7), weaponRows(ch, lib));
    if (!pick) return undefined;
    if (!page) return weaponLine(pick[0], pick[1], ch, lib, v);
    const key = `${pick[0].id}/${pick[1]}`;
    if (page.shown.has(key)) return `**${pick[0].name}**`;
    for (const f of activeFeatures(ch, lib)) {
      if (page.addons.includes(f.id) && f.addon && addonApplies(f.addon.on, pick[0], pick[1], ch)) page.pendingAddons.add(f.id);
    }
    page.pending.add(key);
    return weaponLine(pick[0], pick[1], ch, lib, v, page.addons.filter(a => !page.addonsShown.has(a)));
  }
  if (tok.startsWith('skill.')) {
    const s = skills(ch, lib)[tok.slice(6)];
    if (!s) return undefined;
    const dis = s.id === 'stealth' && stealthDisadvantage(ch, lib) ? ' (disadvantage in your armor)' : '';
    return `**${s.name} ${signed(s.bonus)}**${dis}`;
  }
  if (tok.startsWith('save.')) {
    const a = tok.slice(5);
    const s = saves(ch, lib)[a];
    return s && `**${ABILITY_SHORT[a]} save ${signed(s.bonus)}**`;
  }
  if (tok.startsWith('tool.')) {
    const id = tok.slice(5);
    if (!(ch.tools ?? []).includes(id)) return undefined;
    return `**${lib.tools[id].name} ${signed(toolBonus(ch, id, lib))}**`;
  }
  if (tok.startsWith('spell:')) return spellSlot(tok.slice(6), ch, lib, ctx, page?.shortSpells);
  return v[tok] === undefined ? undefined : String(v[tok]);
}

export function resolveText(text, ch, lib, ctx = {}, v = vars(ch, lib), page) {
  let ok = true;
  const out = String(text).replace(/\{([^}]+)\}/g, (m, tok) => {
    const r = resolveToken(tok, ch, lib, ctx, v, page);
    if (r === undefined) { ok = false; return m; }
    return r;
  });
  return ok ? out : null;
}

// ---- requirements ----

export const REQUIREMENT_KEYWORDS = ['shield', 'heavy-armor', 'stealth-disadvantage', 'caster', 'weapon.melee', 'weapon.ranged', 'weapon.thrown', 'weapon.sneak'];
export const ARMOR_KINDS = ['light', 'medium', 'heavy', 'shield'];

export function meets(req, ch, lib) {
  if (req.startsWith('!')) return !meets(req.slice(1), ch, lib);
  if (req.startsWith('spell:')) return knowsSpell(ch, req.slice(6), lib);
  if (req.startsWith('tool.')) return (ch.tools ?? []).includes(req.slice(5));
  if (req.startsWith('weapon.')) return !!pickWeapon(req.slice(7), weaponRows(ch, lib));
  // the character's class already gives this armor training
  if (req.startsWith('class-armor:')) return classArmor(ch, lib, req.slice(12));
  switch (req) {
    case 'shield': return !!ch.armor?.shield;
    case 'heavy-armor': return heavyArmor(ch, lib);
    case 'stealth-disadvantage': return stealthDisadvantage(ch, lib);
    case 'caster': return characterSpells(ch, lib).length > 0;
    default: return hasFeature(ch, req, lib);
  }
}

export function meetsRequires(requires, ch, lib) {
  return (requires ?? []).every(r => meets(r, ch, lib));
}

// A requirement the library cannot know about (a misspelled feature id, a tool
// or spell that does not exist). Spells are checked only when spell data is loaded.
export function unknownRequirement(req, lib, spells) {
  const r = req.replace(/^!/, '');
  if (REQUIREMENT_KEYWORDS.includes(r)) return false;
  if (r.startsWith('class-armor:')) return !ARMOR_KINDS.includes(r.slice(12));
  if (r.startsWith('weapon.')) return true;
  if (r.startsWith('tool.')) return !lib.tools[r.slice(5)];
  if (r.startsWith('spell:')) return !!spells?.length && !spells.some(s => slug(s.name) === r.slice(6));
  return !lib.features.some(f => f.id === r);
}

// ---- assembly ----

function gather(ch, node, lib) {
  const role = roleFor(ch, lib);
  const base = role?.playbook?.[node] ?? {};
  let first = base.first ?? [], doS = base.do ?? [], ifS = base.if ?? [];
  for (const rs of lib.roleSteps ?? []) {
    if (rs.role !== role?.id || rs.node !== node) continue;
    if (rs.class && rs.class !== ch.class) continue;
    if (rs.subclass && rs.subclass !== ch.subclass) continue;
    if (ch.level < (rs.minLevel ?? 1)) continue;
    if (!meetsRequires(rs.requires, ch, lib)) continue;
    const mode = rs.mode ?? 'append';
    const join = (cur, add) => (add ? (mode === 'replace' ? add : mode === 'prepend' ? [...add, ...cur] : [...cur, ...add]) : cur);
    first = join(first, rs.first);
    doS = join(doS, rs.do);
    ifS = join(ifS, rs.if);
  }
  const ov = ch.overrides?.playbook?.[node];
  if (ov) {
    first = ov.first ?? first;
    doS = ov.do ?? doS;
    ifS = ov.if ?? ifS;
  }
  return { role, first, doS, ifS };
}

// { role, first, do, if, notes, steps (kept), dropped: [{step, reason}],
//   fallback (true when "Do this" is the basic action because no role step fit) }.
// Reasons: 'unknown id' (a requirement the library doesn't know: a typo),
// 'level', 'unmet requirement', 'unfilled slot', 'if cap'.
export function playbookFor(ch, node, lib, ctx = {}) {
  const v = vars(ch, lib);
  const { role, first, doS, ifS } = gather(ch, node, lib);
  const steps = [];
  const dropped = [];
  // The turn page should fit about one phone screen: spells by name only there.
  const page = {
    shown: new Set(), pending: new Set(), addonsShown: new Set(), pendingAddons: new Set(),
    addons: role?.signature ? [role.signature] : [], shortSpells: node === 'turn',
  };
  const whyNot = s => {
    if ((s.requires ?? []).some(r => unknownRequirement(r, lib, ctx.spells))) return 'unknown id';
    if ((s.minLevel ?? 1) > ch.level) return 'level';
    if (!meetsRequires(s.requires, ch, lib)) return 'unmet requirement';
    return null;
  };
  // Resolve all texts of one entry; weapon lines count as shown only if it is kept.
  const resolveAll = texts => {
    page.pending = new Set();
    page.pendingAddons = new Set();
    const out = texts.map(t => resolveText(t, ch, lib, ctx, v, page));
    if (out.some(t => t == null)) return null;
    for (const k of page.pending) page.shown.add(k);
    for (const a of page.pendingAddons) page.addonsShown.add(a);
    return out;
  };

  const lines = (list, record = true) => {
    const out = [];
    for (const s of list) {
      const reason = whyNot(s);
      const t = reason ? null : resolveAll([s.text]);
      if (reason || t == null) {
        if (record) dropped.push({ step: s, reason: reason ?? 'unfilled slot' });
        continue;
      }
      steps.push(s);
      out.push(t[0]);
    }
    return out;
  };

  const firstOut = lines(first);
  let doOut = lines(doS);
  const fallback = doOut.length === 0;
  if (fallback) doOut = lines(BASIC[node] ?? [], false).slice(0, 1);

  const ifOut = [];
  for (const i of ifS) {
    const reason = ifOut.length >= MAX_IF ? 'if cap' : whyNot(i);
    const t = reason ? null : resolveAll([i.when, i.then]);
    if (reason || t == null) { dropped.push({ step: i, reason: reason ?? 'unfilled slot' }); continue; }
    steps.push(i);
    ifOut.push({ when: t[0], then: t[1] });
  }

  const notes = ch.notes?.[node];
  return { role, first: firstOut, do: doOut, if: ifOut, notes, steps, dropped, fallback };
}
