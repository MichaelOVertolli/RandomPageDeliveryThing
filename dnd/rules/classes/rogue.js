// Rogue base class (SRD 5.1, paraphrased). The committed library has no rogue
// subclass; extensions may add one.

export default {
  id: 'rogue', name: 'Rogue', hitDie: 8, saves: ['dex', 'int'],
  weapons: { simple: true, martial: false, list: ['hand-crossbow', 'longsword', 'rapier', 'shortsword'] }, armor: ['light'],
  subclasses: [],
  choices: {},
  features: [
    { id: 'expertise', name: 'Expertise', class: 'rogue', level: 1, nodes: ['check'], text: 'Double proficiency on your chosen skills and tools (already in your numbers).' },
    {
      id: 'sneak-attack', name: 'Sneak Attack', class: 'rogue', level: 1, nodes: ['turn/melee', 'turn/ranged'],
      text: "Once per turn, deal **+{sneakDice}** extra damage when you hit with a finesse or ranged weapon, if you have advantage or another enemy of the target is within 5 ft of it (and you don't have disadvantage).",
      addon: { on: 'sneak', text: 'Sneak Attack **{sneakDice}** (once per turn)' },
    },
    { id: 'cunning-action', name: 'Cunning Action', class: 'rogue', level: 2, nodes: ['turn/bonus', 'turn/other', 'sneak'], text: 'Bonus action: Dash, Disengage or Hide.' },
    { id: 'uncanny-dodge', name: 'Uncanny Dodge', class: 'rogue', level: 5, nodes: ['defend'], text: 'Reaction: when an attacker you can see hits you, halve the damage.' },
    { id: 'evasion', name: 'Evasion', class: 'rogue', level: 7, nodes: ['save'], text: 'When a Dex save would halve the damage: on a success you take none, on a failure only half.' },
  ],
};
