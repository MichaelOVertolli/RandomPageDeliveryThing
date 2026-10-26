// SRD fighting styles, shared by fighter, ranger and paladin.
// The engine computes Archery, Defense and Dueling into the numbers.

const STYLES = {
  archery: { name: 'Archery', nodes: ['turn/ranged'], text: '+2 to hit with ranged weapons (already in your numbers).' },
  defense: { name: 'Defense', nodes: ['defend'], text: '+1 AC while you wear armor (already in your AC).' },
  dueling: { name: 'Dueling', nodes: ['turn/melee'], text: '+2 damage with a melee weapon in one hand and no other weapon (already in your numbers).' },
  'great-weapon-fighting': {
    name: 'Great Weapon Fighting', nodes: ['turn/melee'],
    text: 'With a two-handed or versatile melee weapon held in two hands, reroll 1s and 2s on the damage dice and keep the new roll.',
    addon: { on: 'two-hand-melee', text: 'reroll damage 1s and 2s' },
  },
  protection: {
    name: 'Protection', nodes: ['defend', 'help'],
    text: 'Reaction: when a creature you can see attacks an ally within 5 ft of you, give that attack disadvantage. You must be wielding a shield.',
  },
  'two-weapon-fighting': {
    name: 'Two-Weapon Fighting', nodes: ['turn/bonus', 'turn/melee'],
    text: 'When you attack with a second light weapon as a bonus action, add your ability modifier to its damage.',
  },
};

export function styleFeatures(cls, level, ids) {
  return ids.map(id => ({
    id: `style-${id}`, class: cls, level, choice: { key: 'fightingStyle', value: id }, ...STYLES[id],
  }));
}
