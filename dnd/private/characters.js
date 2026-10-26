// PRIVATE (gitignored): real character sheets, starting with the six level-9
// precons (plan D10). Same format as site/fixtures.js. Published only to the
// Pages repo. After editing, run: node tools/extract_spells.js && node tools/check.js

export default [
  {
    // Defender. Standard array + Mountain Dwarf; ASIs: Sentinel (4), Str/Con (6), Str (8).
    id: 'dorrin', name: 'Dorrin Stonevow', class: 'fighter', subclass: 'champion', level: 9,
    species: 'mountain-dwarf',
    abilities: { str: 20, dex: 13, con: 17, int: 8, wis: 12, cha: 10 },
    skills: ['athletics', 'intimidation', 'perception', 'insight'], expertise: [], tools: ['smiths-tools'],
    armor: { type: 'plate', shield: true },
    weapons: ['longsword', { id: 'handaxe', count: 2 }],
    choices: { fightingStyle: 'protection' },
    spells: [], extras: ['sentinel'],
  },
  {
    // Striker. Half-Orc; ASIs: Str +2 (4), Str/Con (6), Con +2 (8).
    id: 'ursa', name: 'Ursa Grimtusk', class: 'fighter', subclass: 'champion', level: 9, role: 'striker',
    species: 'half-orc',
    abilities: { str: 20, dex: 13, con: 18, int: 8, wis: 12, cha: 10 },
    skills: ['athletics', 'intimidation', 'perception', 'survival'], expertise: [], tools: [],
    armor: { type: 'plate', shield: false },
    weapons: ['greatsword', { id: 'handaxe', count: 2 }],
    choices: { fightingStyle: 'great-weapon-fighting' },
    spells: [], extras: [],
  },
  {
    // Rager. Half-Orc; ASIs: Str +2 (4), Str/Con (8).
    id: 'mok', name: 'Mok the Unbowed', class: 'barbarian', subclass: 'berserker', level: 9,
    species: 'half-orc',
    abilities: { str: 20, dex: 14, con: 15, int: 8, wis: 12, cha: 10 },
    skills: ['athletics', 'intimidation', 'perception', 'survival', 'animal-handling'], expertise: [], tools: [],
    armor: { type: 'none', shield: false },
    weapons: ['greataxe', { id: 'javelin', count: 4 }],
    choices: {},
    spells: [], extras: [],
  },
  {
    // Skirmisher. Wood Elf Assassin; ASIs: Dex +2 (4), Dex/Con (8).
    id: 'sylvie', name: 'Sylvie Nightbriar', class: 'rogue', subclass: 'assassin', level: 9,
    species: 'wood-elf',
    abilities: { str: 8, dex: 20, con: 15, int: 12, wis: 14, cha: 10 },
    skills: ['perception', 'stealth', 'investigation', 'acrobatics', 'insight', 'deception', 'sleight-of-hand'],
    expertise: ['stealth', 'perception', 'investigation', 'thieves-tools'],
    tools: ['thieves-tools', 'disguise-kit', 'poisoners-kit'],
    armor: { type: 'studded-leather', shield: false },
    weapons: ['shortbow', { id: 'shortsword', count: 2 }],
    choices: {},
    spells: [], extras: [],
  },
  {
    // Archer. Wood Elf Hunter; ASIs: Dex +2 (4), Dex/Con (8).
    id: 'tavian', name: 'Tavian Ashleaf', class: 'ranger', subclass: 'hunter', level: 9,
    species: 'wood-elf',
    abilities: { str: 12, dex: 20, con: 15, int: 10, wis: 14, cha: 8 },
    skills: ['perception', 'stealth', 'survival', 'nature', 'athletics', 'animal-handling'], expertise: [], tools: [],
    armor: { type: 'studded-leather', shield: false },
    weapons: ['longbow', { id: 'shortsword', count: 2 }],
    choices: {
      fightingStyle: 'archery', favoredEnemy: ['undead', 'beasts'], naturalExplorer: ['forest', 'mountain'],
      hunterPrey: 'colossus-slayer', defensiveTactics: 'steel-will',
    },
    spells: ["Hunter's Mark", 'Cure Wounds', 'Goodberry', 'Lesser Restoration', 'Pass without Trace', 'Lightning Arrow'],
    extras: [],
  },
  {
    // Protector. Half-Elf (Str, Con +1); ASIs: Cha +2 (4), Cha +2 (8).
    id: 'celandine', name: 'Celandine Vey', class: 'paladin', subclass: 'devotion', level: 9,
    species: 'half-elf',
    abilities: { str: 16, dex: 10, con: 14, int: 8, wis: 12, cha: 20 },
    skills: ['athletics', 'persuasion', 'insight', 'religion', 'perception', 'medicine'], expertise: [], tools: [],
    armor: { type: 'plate', shield: true },
    weapons: ['longsword', { id: 'javelin', count: 5 }],
    choices: { fightingStyle: 'defense' },
    spells: ['Bless', 'Cure Wounds', 'Shield of Faith', 'Command', 'Aid', 'Magic Weapon', 'Revivify', 'Aura of Vitality', 'Remove Curse'],
    extras: [],
  },
];
