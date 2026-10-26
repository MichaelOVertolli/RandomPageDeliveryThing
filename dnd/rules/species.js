// SRD 5.1 species (paraphrased). Ability bonuses are not modelled: character
// files carry final scores. Each trait is a feature placed on nodes.

const darkvision = { id: 'darkvision', name: 'Darkvision', nodes: ['explore', 'sneak'], text: 'You see in dim light within 60 ft as if it were bright, and in darkness as if it were dim (shades of grey only).' };
const feyAncestry = { id: 'fey-ancestry', name: 'Fey Ancestry', nodes: ['save'], text: "Advantage on saves against being charmed; magic can't put you to sleep." };

const DRACONIC = {
  black: { type: 'acid', shape: '5 by 30 ft line', save: 'Dex' },
  blue: { type: 'lightning', shape: '5 by 30 ft line', save: 'Dex' },
  brass: { type: 'fire', shape: '5 by 30 ft line', save: 'Dex' },
  bronze: { type: 'lightning', shape: '5 by 30 ft line', save: 'Dex' },
  copper: { type: 'acid', shape: '5 by 30 ft line', save: 'Dex' },
  gold: { type: 'fire', shape: '15 ft cone', save: 'Dex' },
  green: { type: 'poison', shape: '15 ft cone', save: 'Con' },
  red: { type: 'fire', shape: '15 ft cone', save: 'Dex' },
  silver: { type: 'cold', shape: '15 ft cone', save: 'Con' },
  white: { type: 'cold', shape: '15 ft cone', save: 'Con' },
};
export { DRACONIC };

export const SPECIES = {
  human: { id: 'human', name: 'Human', speed: 30, size: 'Medium', traits: [] },
  'hill-dwarf': {
    id: 'hill-dwarf', name: 'Hill Dwarf', speed: 25, size: 'Medium', heavyArmorNoPenalty: true, hpPerLevel: 1,
    resist: ['poison'], weaponProf: ['battleaxe', 'handaxe', 'light-hammer', 'warhammer'],
    traits: [
      darkvision,
      { id: 'dwarven-resilience', name: 'Dwarven Resilience', nodes: ['save', 'defend'], text: 'Advantage on saves against poison; resistance to poison damage.' },
      { id: 'stonecunning', name: 'Stonecunning', nodes: ['search', 'check'], text: 'History checks about stonework: you count as proficient and add double your proficiency bonus.' },
      { id: 'dwarven-toughness', name: 'Dwarven Toughness', nodes: ['hurt'], text: '+1 HP per level (counted in your HP).' },
    ],
  },
  'high-elf': {
    id: 'high-elf', name: 'High Elf', speed: 30, size: 'Medium',
    weaponProf: ['longsword', 'shortsword', 'shortbow', 'longbow'],
    traits: [
      darkvision, feyAncestry,
      { id: 'keen-senses', name: 'Keen Senses', nodes: ['explore'], text: 'Proficient in Perception.' },
      { id: 'trance', name: 'Trance', nodes: ['rest'], text: 'You meditate 4 hours instead of sleeping 8, and get the same benefit.' },
    ],
  },
  'lightfoot-halfling': {
    id: 'lightfoot-halfling', name: 'Lightfoot Halfling', speed: 25, size: 'Small',
    traits: [
      { id: 'lucky', name: 'Lucky', nodes: ['turn', 'save', 'check'], text: 'When you roll a 1 on the d20 for an attack, check or save, reroll it and use the new roll.' },
      { id: 'brave', name: 'Brave', nodes: ['save'], text: 'Advantage on saves against being frightened.' },
      { id: 'halfling-nimbleness', name: 'Halfling Nimbleness', nodes: ['turn/other'], text: 'You can move through the space of any creature larger than you.' },
      { id: 'naturally-stealthy', name: 'Naturally Stealthy', nodes: ['sneak'], text: 'You can try to hide when only a creature at least one size larger than you blocks the view.' },
    ],
  },
  'half-elf': {
    id: 'half-elf', name: 'Half-Elf', speed: 30, size: 'Medium',
    traits: [darkvision, feyAncestry],
  },
  'half-orc': {
    id: 'half-orc', name: 'Half-Orc', speed: 30, size: 'Medium',
    traits: [
      darkvision,
      { id: 'relentless-endurance', name: 'Relentless Endurance', nodes: ['hurt'], text: "When you drop to 0 HP but aren't killed outright, drop to 1 HP instead.", uses: { n: 1, per: 'LR' } },
      { id: 'savage-attacks', name: 'Savage Attacks', nodes: ['turn/melee'], text: 'On a melee weapon critical hit, roll one of the weapon damage dice once more and add it.', addon: { on: 'melee', text: 'crit: **+1 die** (Savage Attacks)' } },
    ],
  },
  dragonborn: {
    id: 'dragonborn', name: 'Dragonborn', speed: 30, size: 'Medium',
    choices: { ancestry: { values: Object.keys(DRACONIC) } },
    traits: [
      { id: 'breath-weapon', name: 'Breath Weapon', nodes: ['turn', 'turn/other'], text: 'Action: {breathShape} of {breathType}. {breathSave} save DC **{breathDC}**: **{breathDamage}** damage, half on a success.', uses: { n: 1, per: 'SR' } },
      { id: 'draconic-resistance', name: 'Damage Resistance', nodes: ['defend'], text: 'Resistance to {breathType} damage.' },
    ],
  },
  'rock-gnome': {
    id: 'rock-gnome', name: 'Rock Gnome', speed: 25, size: 'Small',
    traits: [
      darkvision,
      { id: 'gnome-cunning', name: 'Gnome Cunning', nodes: ['save'], text: 'Advantage on Int, Wis and Cha saves against magic.' },
      { id: 'artificers-lore', name: "Artificer's Lore", nodes: ['check'], text: 'History checks about magic items, alchemical objects or technological devices: add double your proficiency bonus.' },
      { id: 'tinker', name: 'Tinker', nodes: ['turn/other', 'rest'], text: "With tinker's tools, spend 1 hour to build a tiny clockwork toy, fire starter or music box." },
    ],
  },
  tiefling: {
    id: 'tiefling', name: 'Tiefling', speed: 30, size: 'Medium', resist: ['fire'],
    traits: [
      darkvision,
      { id: 'hellish-resistance', name: 'Hellish Resistance', nodes: ['defend'], text: 'Resistance to fire damage.' },
      { id: 'infernal-legacy', name: 'Infernal Legacy', action: true, nodes: ['turn/spell', 'turn/other'], text: 'You know the thaumaturgy cantrip. From 3rd level, cast hellish rebuke (as 2nd level) once per long rest; from 5th, darkness once per long rest. Cha is your spellcasting ability.' },
    ],
  },
};
