// Derived numbers for a character (2014 rules). Pure: (character, library) in, numbers out.
import { ABILITIES, SKILLS, ABILITY_SHORT } from '../rules/common.js';
import { DRACONIC } from '../rules/species.js';
import { hasFeature, choiceValues } from './features.js';

export const mod = score => Math.floor((score - 10) / 2);
export const profBonus = level => 2 + Math.floor((level - 1) / 4);
export const signed = n => (n >= 0 ? `+${n}` : `${n}`);
const plus = (dice, n) => (n === 0 ? dice : `${dice}${signed(n)}`);
const abil = (ch, a) => mod(ch.abilities?.[a] ?? 10);

// ---- class tables (levels 1-10) ----
const HALF_CASTER = [[], [], [2], [3], [3], [4, 2], [4, 2], [4, 3], [4, 3], [4, 3, 2], [4, 3, 2]];
export const halfCasterSlots = level => [...(HALF_CASTER[level] ?? HALF_CASTER[10])];
export const rageUses = level => (level >= 17 ? 6 : level >= 12 ? 5 : level >= 6 ? 4 : level >= 3 ? 3 : 2);
export const rageDamage = level => (level >= 16 ? 4 : level >= 9 ? 3 : 2);
export const sneakDice = level => `${Math.ceil(level / 2)}d6`;
const RANGER_KNOWN = [0, 0, 2, 3, 3, 4, 4, 5, 5, 6, 6];
export const rangerSpellsKnown = level => RANGER_KNOWN[level] ?? 6;
export const paladinPrepared = ch => (ch.level < 2 ? 0 : Math.max(1, abil(ch, 'cha') + Math.floor(ch.level / 2)));

const remarkable = (ch, lib) => hasFeature(ch, 'remarkable-athlete', lib);
const halfProf = ch => Math.ceil(profBonus(ch.level) / 2);

export function saves(ch, lib) {
  const pb = profBonus(ch.level);
  const profs = lib.classes[ch.class]?.saves ?? [];
  const aura = hasFeature(ch, 'aura-of-protection', lib) ? Math.max(1, abil(ch, 'cha')) : 0;
  return Object.fromEntries(ABILITIES.map(a => {
    const prof = profs.includes(a);
    return [a, { prof, bonus: abil(ch, a) + (prof ? pb : 0) + aura, aura }];
  }));
}

export function skills(ch, lib) {
  const pb = profBonus(ch.level);
  const ra = remarkable(ch, lib);
  return Object.fromEntries(Object.entries(SKILLS).map(([id, s]) => {
    const prof = (ch.skills ?? []).includes(id);
    const expertise = prof && (ch.expertise ?? []).includes(id);
    let extra = expertise ? 2 * pb : prof ? pb : 0;
    if (!prof && ra && ['str', 'dex', 'con'].includes(s.ability)) extra = halfProf(ch);
    return [id, { id, name: s.name, ability: s.ability, when: s.when, prof, expertise, bonus: abil(ch, s.ability) + extra }];
  }));
}

export function toolBonus(ch, toolId, lib) {
  const t = lib.tools[toolId];
  if (!t) return undefined;
  const pb = profBonus(ch.level);
  const prof = (ch.tools ?? []).includes(toolId);
  const exp = prof && (ch.expertise ?? []).includes(toolId);
  return abil(ch, t.ability) + (exp ? 2 * pb : prof ? pb : 0);
}

export function initiative(ch, lib) {
  if (ch.overrides?.initiative != null) return ch.overrides.initiative;
  return abil(ch, 'dex') + (remarkable(ch, lib) ? halfProf(ch) : 0);
}

const armorOf = (ch, lib) => lib.armor[ch.armor?.type ?? 'none'] ?? lib.armor.none;

export function armorClass(ch, lib) {
  if (ch.overrides?.ac != null) return ch.overrides.ac;
  const armor = armorOf(ch, lib);
  const dex = abil(ch, 'dex');
  let ac;
  if (armor.type === 'none') {
    ac = 10 + dex + (hasFeature(ch, 'unarmored-defense', lib) ? abil(ch, 'con') : 0);
  } else {
    ac = armor.base + (armor.dexCap == null ? dex : Math.min(dex, armor.dexCap));
    if (hasFeature(ch, 'style-defense', lib)) ac += 1;
  }
  if (ch.armor?.shield) ac += 2;
  return ac;
}

export function heavyArmor(ch, lib) {
  return armorOf(ch, lib).type === 'heavy';
}

export function stealthDisadvantage(ch, lib) {
  return !!armorOf(ch, lib).stealthDis;
}

export function speed(ch, lib) {
  if (ch.overrides?.speed != null) return ch.overrides.speed;
  const sp = lib.species[ch.species] ?? {};
  let s = ch.speed ?? sp.speed ?? 30;
  const armor = armorOf(ch, lib);
  if (armor.strReq && (ch.abilities?.str ?? 10) < armor.strReq && !sp.heavyArmorNoPenalty) s -= 10;
  if (hasFeature(ch, 'fast-movement', lib) && armor.type !== 'heavy') s += 10;
  return s;
}

export function hpMax(ch, lib) {
  if (ch.hpMax != null) return ch.hpMax;
  const die = lib.classes[ch.class]?.hitDie ?? 8;
  const con = abil(ch, 'con');
  const perLevel = lib.species[ch.species]?.hpPerLevel ?? 0;
  return die + con + (ch.level - 1) * (die / 2 + 1 + con) + perLevel * ch.level;
}

export const passivePerception = (ch, lib) => 10 + skills(ch, lib).perception.bonus;

export function attacksPerTurn(ch, lib) {
  if (!hasFeature(ch, 'extra-attack', lib)) return 1;
  if (ch.class === 'fighter') return ch.level >= 20 ? 4 : ch.level >= 11 ? 3 : 2;
  return 2;
}

function proficientWith(ch, base, lib) {
  const w = lib.classes[ch.class]?.weapons ?? {};
  if (w[base.category]) return true;
  if ((w.list ?? []).includes(base.id)) return true;
  if ((lib.species[ch.species]?.weaponProf ?? []).includes(base.id)) return true;
  return (ch.overrides?.weaponProf ?? []).includes(base.id);
}

// One row per weapon in the character file, in slot order.
export function weaponRows(ch, lib) {
  const pb = profBonus(ch.level);
  const archery = hasFeature(ch, 'style-archery', lib);
  const dueling = hasFeature(ch, 'style-dueling', lib);
  const rows = [];
  for (const entry of ch.weapons ?? []) {
    const e = typeof entry === 'string' ? { id: entry } : entry;
    const base = lib.weapons[e.id];
    if (!base) continue;
    const finesse = base.props.includes('finesse');
    const ranged = base.kind === 'ranged';
    const ability = finesse ? (abil(ch, 'dex') >= abil(ch, 'str') ? 'dex' : 'str') : ranged ? 'dex' : 'str';
    const m = abil(ch, ability);
    const bonus = e.bonus ?? 0;
    const twoHanded = base.props.includes('two-handed');
    const toHit = m + (proficientWith(ch, base, lib) ? pb : 0) + bonus + (archery && ranged ? 2 : 0);
    const duel = dueling && !ranged && !twoHanded ? 2 : 0;
    rows.push({
      id: base.id, name: e.name ?? base.name, count: e.count ?? 1, kind: base.kind, ranged,
      thrown: base.props.includes('thrown'), finesse, twoHanded, versatile: !!base.versatile,
      props: base.props, range: base.range, type: base.type, ability, toHit,
      damage: plus(base.damage, m + bonus + duel),
      versatileDamage: base.versatile ? plus(base.versatile, m + bonus) : undefined,
    });
  }
  return rows;
}

export function spellSlots(ch, lib) {
  const casting = lib.classes[ch.class]?.casting;
  return casting ? halfCasterSlots(ch.level) : [];
}

const ORD = ['', '1st', '2nd', '3rd', '4th', '5th'];
const listAnd = xs => (xs.length <= 1 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`);

// Every var name vars() can produce (the validator checks role text against it).
export const VAR_NAMES = [
  'level', 'prof', 'halfProf', 'attacks', 'initiative', 'ac', 'speed', 'hp', 'hitDice', 'passivePerception',
  'mod.str', 'mod.dex', 'mod.con', 'mod.int', 'mod.wis', 'mod.cha', 'bestSkills', 'bestSaves',
  'secondWind', 'rageUses', 'rageDamage', 'intimidateDC', 'sneakDice', 'layOnHands', 'divineSense',
  'auraBonus', 'auraRange', 'favoredEnemy', 'terrain', 'spellDC', 'spellAttack', 'slots', 'spellsKnown',
  'preparedCount', 'breathType', 'breathShape', 'breathSave', 'breathDC', 'breathDamage',
];

// Values for {vars} in feature and role text. A var that does not apply to the
// character is left undefined, so text that needs it drops out.
export function vars(ch, lib) {
  const pb = profBonus(ch.level);
  const v = {
    level: ch.level, prof: signed(pb), halfProf: halfProf(ch),
    attacks: ['once', 'twice', 'three times', 'four times'][attacksPerTurn(ch, lib) - 1],
    initiative: signed(initiative(ch, lib)), ac: armorClass(ch, lib), speed: speed(ch, lib), hp: hpMax(ch, lib),
    hitDice: `${ch.level}d${lib.classes[ch.class]?.hitDie ?? 8}`,
    passivePerception: passivePerception(ch, lib),
  };
  for (const a of ABILITIES) v[`mod.${a}`] = signed(abil(ch, a));

  const sk = Object.values(skills(ch, lib)).sort((a, b) => b.bonus - a.bonus || b.prof - a.prof || a.name.localeCompare(b.name));
  v.bestSkills = sk.slice(0, 3).map(s => `**${s.name} ${signed(s.bonus)}**`).join(', ');
  const sv = Object.entries(saves(ch, lib)).sort((a, b) => b[1].bonus - a[1].bonus || b[1].prof - a[1].prof);
  v.bestSaves = sv.slice(0, 2).map(([a, s]) => `**${ABILITY_SHORT[a]} ${signed(s.bonus)}**`).join(', ');

  if (hasFeature(ch, 'second-wind', lib)) v.secondWind = `1d10+${ch.level}`;
  if (hasFeature(ch, 'rage', lib)) { v.rageUses = rageUses(ch.level); v.rageDamage = signed(rageDamage(ch.level)); }
  if (hasFeature(ch, 'intimidating-presence', lib)) v.intimidateDC = 8 + pb + abil(ch, 'cha');
  if (hasFeature(ch, 'sneak-attack', lib)) v.sneakDice = sneakDice(ch.level);
  if (hasFeature(ch, 'lay-on-hands', lib)) v.layOnHands = 5 * ch.level;
  if (hasFeature(ch, 'divine-sense', lib)) v.divineSense = 1 + Math.max(0, abil(ch, 'cha'));
  if (hasFeature(ch, 'aura-of-protection', lib)) { v.auraBonus = signed(Math.max(1, abil(ch, 'cha'))); v.auraRange = ch.level >= 18 ? 30 : 10; }
  const enemies = choiceValues(ch, 'favoredEnemy');
  if (enemies.length) v.favoredEnemy = listAnd(enemies);
  const terrain = choiceValues(ch, 'naturalExplorer');
  if (terrain.length) v.terrain = listAnd(terrain);

  const casting = lib.classes[ch.class]?.casting;
  if (casting && ch.level >= casting.from) {
    const m = abil(ch, casting.ability);
    v.spellDC = 8 + pb + m;
    v.spellAttack = signed(pb + m);
    v.slots = halfCasterSlots(ch.level).map((n, i) => `**${n}** × ${ORD[i + 1]}`).join(', ');
    if (casting.kind === 'known') v.spellsKnown = rangerSpellsKnown(ch.level);
    if (casting.kind === 'prepared') v.preparedCount = paladinPrepared(ch);
  }

  const ancestry = DRACONIC[ch.choices?.ancestry];
  if (ch.species === 'dragonborn' && ancestry) {
    v.breathType = ancestry.type;
    v.breathShape = ancestry.shape;
    v.breathSave = ancestry.save;
    v.breathDC = 8 + abil(ch, 'con') + pb;
    v.breathDamage = `${ch.level >= 16 ? 5 : ch.level >= 11 ? 4 : ch.level >= 6 ? 3 : 2}d6`;
  }
  return v;
}

export function resistances(ch, lib) {
  const out = [...(lib.species[ch.species]?.resist ?? [])];
  const anc = DRACONIC[ch.choices?.ancestry];
  if (ch.species === 'dragonborn' && anc) out.push(anc.type);
  return out;
}
