// Barbarian + Path of the Berserker (SRD 5.1, paraphrased).

export default {
  id: 'barbarian', name: 'Barbarian', hitDie: 12, saves: ['str', 'con'],
  weapons: { simple: true, martial: true }, armor: ['light', 'medium', 'shield'],
  subclasses: [{ id: 'berserker', name: 'Path of the Berserker' }],
  choices: {},
  features: [
    {
      id: 'rage', name: 'Rage', class: 'barbarian', level: 1,
      nodes: ['turn', 'turn/bonus', 'turn/melee', 'defend', 'save', 'check'],
      text: 'Bonus action, lasts 1 minute (not in heavy armor). While raging: **{rageDamage}** damage with Str melee weapon attacks; resistance to bludgeoning, piercing and slashing damage; advantage on Str checks and Str saves; no spellcasting or concentration. It ends early if a turn passes without you attacking or taking damage.',
      uses: { n: '{rageUses}', per: 'LR' },
      addon: { on: 'str-melee', text: '**{rageDamage}** rage' },
    },
    { id: 'unarmored-defense', name: 'Unarmored Defense', class: 'barbarian', level: 1, nodes: ['defend'], text: 'With no armor your AC is 10 + Dex + Con; a shield still counts (already in your AC).' },
    { id: 'reckless-attack', name: 'Reckless Attack', class: 'barbarian', level: 2, nodes: ['turn/melee', 'defend'], text: 'On your first attack of a turn you can choose: advantage on Str melee attacks this turn, but attacks against you have advantage until your next turn.' },
    { id: 'danger-sense', name: 'Danger Sense', class: 'barbarian', level: 2, nodes: ['save'], text: "Advantage on Dex saves against effects you can see, such as traps and spells (not while blinded, deafened or incapacitated)." },
    { id: 'extra-attack', name: 'Extra Attack', class: 'barbarian', level: 5, nodes: ['turn/melee'], text: 'The Attack action lets you attack **{attacks}** (counted in your turn).' },
    { id: 'fast-movement', name: 'Fast Movement', class: 'barbarian', level: 5, nodes: ['explore'], text: '+10 ft speed when not in heavy armor (already in your speed).' },
    { id: 'feral-instinct', name: 'Feral Instinct', class: 'barbarian', level: 7, nodes: ['turn'], text: 'Advantage on initiative. If you are surprised, you can still act on your first turn as long as you rage first.' },
    { id: 'brutal-critical', name: 'Brutal Critical', class: 'barbarian', level: 9, nodes: ['turn/melee'], text: 'On a melee critical hit, roll one extra weapon damage die.', addon: { on: 'melee', text: 'crit: **+1 die** (Brutal Critical)' } },
    { id: 'frenzy', name: 'Frenzy', class: 'barbarian', subclass: 'berserker', level: 3, nodes: ['turn', 'turn/bonus', 'rest'], text: 'When you rage you can choose to frenzy: on each of your turns after this one, while the rage lasts, one melee weapon attack as a bonus action. When the rage ends you gain one level of exhaustion.' },
    { id: 'mindless-rage', name: 'Mindless Rage', class: 'barbarian', subclass: 'berserker', level: 6, nodes: ['save'], text: "While raging you can't be charmed or frightened; a charm or fear already on you is paused for the rage." },
    { id: 'intimidating-presence', name: 'Intimidating Presence', class: 'barbarian', subclass: 'berserker', level: 10, nodes: ['turn/other', 'social'], text: 'Action: one creature within 30 ft that can see or hear you makes a Wis save (DC **{intimidateDC}**) or is frightened until the end of your next turn. Use your action each turn to extend it.' },
  ],
};
