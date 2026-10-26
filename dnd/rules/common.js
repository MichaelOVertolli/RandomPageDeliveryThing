// Generic rules cards (SRD 5.1, paraphrased) and the basic-action fallbacks
// every role drops back to when none of its own steps fits the character.

export const ABILITIES = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
export const ABILITY_NAMES = { str: 'Strength', dex: 'Dexterity', con: 'Constitution', int: 'Intelligence', wis: 'Wisdom', cha: 'Charisma' };
export const ABILITY_SHORT = { str: 'Str', dex: 'Dex', con: 'Con', int: 'Int', wis: 'Wis', cha: 'Cha' };

export const SKILLS = {
  acrobatics: { name: 'Acrobatics', ability: 'dex', when: 'keep your balance, tumble, escape a grapple' },
  'animal-handling': { name: 'Animal Handling', ability: 'wis', when: 'calm or steer an animal' },
  arcana: { name: 'Arcana', ability: 'int', when: 'recall lore about magic' },
  athletics: { name: 'Athletics', ability: 'str', when: 'climb, jump, swim, grapple, shove, force' },
  deception: { name: 'Deception', ability: 'cha', when: 'lie convincingly' },
  history: { name: 'History', ability: 'int', when: 'recall past events, people, places' },
  insight: { name: 'Insight', ability: 'wis', when: 'tell whether someone is lying' },
  intimidation: { name: 'Intimidation', ability: 'cha', when: 'threaten someone into doing something' },
  investigation: { name: 'Investigation', ability: 'int', when: 'work out how something works, find a hidden catch' },
  medicine: { name: 'Medicine', ability: 'wis', when: 'stabilize a dying friend, diagnose' },
  nature: { name: 'Nature', ability: 'int', when: 'recall lore about plants, animals, weather' },
  perception: { name: 'Perception', ability: 'wis', when: 'notice something: spot, hear, smell' },
  performance: { name: 'Performance', ability: 'cha', when: 'entertain a crowd' },
  persuasion: { name: 'Persuasion', ability: 'cha', when: 'convince someone honestly' },
  religion: { name: 'Religion', ability: 'int', when: 'recall lore about gods, rites, undead' },
  'sleight-of-hand': { name: 'Sleight of Hand', ability: 'dex', when: 'pick a pocket, palm an object' },
  stealth: { name: 'Stealth', ability: 'dex', when: 'move unseen and unheard' },
  survival: { name: 'Survival', ability: 'wis', when: 'track, hunt, find the way' },
};

export const SAVE_TRIGGERS = {
  str: 'being pushed, pinned or grabbed by force',
  dex: 'dodging traps, explosions, breath weapons',
  con: 'poison, disease, exhaustion; keeping concentration',
  int: 'mind-bending illusions and psychic attacks',
  wis: 'charm, fear and other attacks on your will',
  cha: 'possession, banishment, being cursed out of yourself',
};

// Actions anyone can take (turn/other).
export const STANDARD_ACTIONS = [
  ['Dash', 'Double your movement this turn.'],
  ['Disengage', "Your movement doesn't provoke opportunity attacks this turn."],
  ['Dodge', 'Attacks against you have disadvantage and you make Dex saves with advantage, until your next turn.'],
  ['Help', 'Give an ally advantage on their next check, or on their next attack against an enemy within 5 ft of you.'],
  ['Hide', 'Make a Stealth check while out of sight.'],
  ['Ready', 'Choose a trigger and an action; use your reaction to act when it happens.'],
  ['Search', 'Look for something (Perception or Investigation).'],
  ['Use an object', 'Drink a potion, open a door, pull a lever.'],
  ['Grapple / Shove', 'Replace one attack: Athletics against their Athletics or Acrobatics. Grappled = speed 0; shoved = prone or 5 ft away.'],
];

export const DEATH_SAVES = [
  'At 0 HP you are unconscious. At the start of each of your turns, roll a d20: 10 or more is a success, less is a failure.',
  'Three successes: you are stable at 0 HP. Three failures: you die. A natural 1 counts as two failures; a natural 20 brings you back with 1 HP.',
  'Taking damage at 0 HP is a failed death save (a critical hit is two). Damage of your full HP maximum or more in one go kills you outright.',
  'Any healing brings you back conscious with that many HP.',
];

export const TRAVEL_PACE = [
  'Fast: 4 miles an hour, −5 to passive Perception.',
  'Normal: 3 miles an hour.',
  'Slow: 2 miles an hour, and you can move stealthily.',
];

export const RESTS = [
  'Short rest (1 hour): spend hit dice, each heals one roll + your Con modifier.',
  'Long rest (8 hours): regain all HP and half your hit dice (minimum 1); long-rest features and spell slots come back.',
];

export const HELP_RULES = [
  'Help action: an ally gets advantage on their next check for the task, or on their next attack against an enemy within 5 ft of you.',
  'Stabilize a dying ally: action, Medicine DC 10.',
];

export const CONCENTRATION = 'Concentrating on a spell and you take damage: Con save, DC 10 or half the damage (whichever is higher), or the spell ends.';

// Fallbacks: the first that resolves for the character fills an empty "Do this".
export const BASIC = {
  turn: [
    { text: 'Attack **{attacks}** with {weapon.melee}.' },
    { text: 'Attack **{attacks}** with {weapon.ranged}.' },
    { text: 'Take the **Dodge** action and stay close to your allies.' },
  ],
  defend: [
    { text: 'If an enemy leaves your reach, make an opportunity attack with {weapon.melee}.' },
    { text: 'Nothing to react with: keep your reaction for an opportunity attack.' },
  ],
  hurt: [
    { text: 'Step back behind an ally and take the **Dodge** action, or drink a potion if you have one.' },
  ],
  explore: [{ text: 'Keep to the middle of the marching order and watch your side.' }],
  social: [{ text: 'Let the best talker lead; read the person you are talking to: {skill.insight}.' }],
  sneak: [{ text: 'Stay with the group and move quietly: {skill.stealth}.' }],
  search: [{ text: 'Search the room with your eyes first: {skill.perception}; for a mechanism, {skill.investigation}.' }],
  rest: [{ text: 'Short rest: spend hit dice (**{hitDice}**, each one {mod.con}) to heal.' }],
  save: [{ text: 'Roll the save the DM names. Your best: {bestSaves}.' }],
  check: [{ text: 'Your best skills: {bestSkills}.' }],
  help: [{ text: 'Take the **Help** action: your ally gets advantage on their next attack or check.' }],
  'turn/melee': [{ text: 'Attack **{attacks}** with {weapon.melee}.' }],
  'turn/ranged': [{ text: 'Attack **{attacks}** with {weapon.ranged}.' }],
  'turn/spell': [{ text: 'Pick a spell below; the one-liner tells you cost and range.' }],
  'turn/bonus': [{ text: 'Use one bonus action from the list below, if any fits.' }],
  'turn/other': [{ text: 'Pick an action below when attacking is not the right move.' }],
};

// Weapon-line add-ons that come from knowing a spell rather than a class feature.
export const SPELL_ADDONS = [
  { id: 'hunters-mark-addon', name: "Hunter's Mark", spell: "Hunter's Mark", nodes: [], text: '', addon: { on: 'weapon', text: "Hunter's Mark **1d6** (marked target)" } },
];
