// PRIVATE (gitignored): non-SRD content. Published only to the Pages repo.
// Assassin subclass, Wood Elf and Mountain Dwarf traits, the Sentinel feat,
// and the Assassin's steps for the Skirmisher role. Paraphrased.

const darkvision = { id: 'darkvision', name: 'Darkvision', nodes: ['explore', 'sneak'], text: 'You see in dim light within 60 ft as if it were bright, and in darkness as if it were dim (shades of grey only).' };

export default {
  id: 'private',
  subclasses: [{ class: 'rogue', id: 'assassin', name: 'Assassin' }],
  species: [
    {
      id: 'wood-elf', name: 'Wood Elf', speed: 35, size: 'Medium',
      weaponProf: ['longsword', 'shortsword', 'shortbow', 'longbow'],
      traits: [
        darkvision,
        { id: 'fey-ancestry', name: 'Fey Ancestry', nodes: ['save'], text: "Advantage on saves against being charmed; magic can't put you to sleep." },
        { id: 'keen-senses', name: 'Keen Senses', nodes: ['explore'], text: 'Proficient in Perception.' },
        { id: 'trance', name: 'Trance', nodes: ['rest'], text: 'You meditate 4 hours instead of sleeping 8, and get the same benefit.' },
        { id: 'fleet-of-foot', name: 'Fleet of Foot', nodes: ['explore'], text: 'Your base walking speed is 35 ft (already in your speed).' },
        { id: 'mask-of-the-wild', name: 'Mask of the Wild', nodes: ['sneak'], text: 'You can try to hide when only lightly obscured by foliage, heavy rain, falling snow, mist or similar natural cover.' },
      ],
    },
    {
      id: 'mountain-dwarf', name: 'Mountain Dwarf', speed: 25, size: 'Medium', heavyArmorNoPenalty: true,
      resist: ['poison'], weaponProf: ['battleaxe', 'handaxe', 'light-hammer', 'warhammer'],
      traits: [
        darkvision,
        { id: 'dwarven-resilience', name: 'Dwarven Resilience', nodes: ['save', 'defend'], text: 'Advantage on saves against poison; resistance to poison damage.' },
        { id: 'stonecunning', name: 'Stonecunning', nodes: ['search', 'check'], text: 'History checks about stonework: you count as proficient and add double your proficiency bonus.' },
        { id: 'dwarven-armor-training', name: 'Dwarven Armor Training', nodes: ['defend'], text: 'Proficient with light and medium armor.', hideIf: ['class-armor:medium'] },
      ],
    },
  ],
  feats: [
    {
      id: 'sentinel', name: 'Sentinel', nodes: ['defend', 'help'],
      text: "When you hit with an opportunity attack, the creature's speed drops to 0 for the rest of the turn. Creatures provoke opportunity attacks from you even if they Disengage. Reaction: when a creature within 5 ft of you attacks someone other than you, make a melee weapon attack against it.",
    },
  ],
  features: [
    { id: 'assassinate', name: 'Assassinate', class: 'rogue', subclass: 'assassin', level: 3, nodes: ['turn', 'turn/melee', 'turn/ranged'], text: "Advantage on attack rolls against any creature that hasn't taken a turn in this combat yet. Any hit you score against a surprised creature is a critical hit." },
    { id: 'assassin-proficiencies', name: 'Bonus Proficiencies', class: 'rogue', subclass: 'assassin', level: 3, nodes: ['check', 'social'], text: "Proficient with the disguise kit and the poisoner's kit." },
    { id: 'infiltration-expertise', name: 'Infiltration Expertise', class: 'rogue', subclass: 'assassin', level: 9, nodes: ['social'], text: 'Spend seven days and 25 gp to build a false identity (history, profession, contacts) that people accept until given an obvious reason not to.' },
  ],
  roleSteps: [
    {
      role: 'skirmisher', class: 'rogue', subclass: 'assassin', node: 'turn', mode: 'replace', requires: ['assassinate'],
      first: [{ text: 'Roll initiative **{initiative}**. **Assassinate**: advantage vs anyone yet to act; open hidden or at range with {weapon.sneak}.', requires: ['assassinate'] }],
    },
    {
      role: 'skirmisher', class: 'rogue', subclass: 'assassin', node: 'turn', mode: 'prepend',
      if: [{ when: 'Surprised enemy', then: 'Every hit crits.', requires: ['assassinate'] }],
    },
    {
      role: 'skirmisher', class: 'rogue', subclass: 'assassin', node: 'sneak', mode: 'append',
      do: [{ text: 'Set up the ambush: if the party surprises the enemy, your first hits are critical hits (**Assassinate**).', requires: ['assassinate'] }],
    },
    {
      role: 'skirmisher', class: 'rogue', subclass: 'assassin', node: 'social', mode: 'append',
      if: [{ when: 'You need to get inside', then: 'Go in disguise: {tool.disguise-kit}.', requires: ['tool.disguise-kit'] }],
    },
    {
      // One reaction, in priority order (plan R8): Sentinel first, then Protection, then the opportunity attack.
      role: 'defender', node: 'defend', mode: 'replace', requires: ['sentinel'],
      do: [
        { text: 'Reaction, first choice: an enemy next to you attacks someone else → **Sentinel**: attack it with {weapon.melee}.', requires: ['sentinel'] },
        { text: 'Otherwise: an enemy you can see attacks an ally within 5 ft of you → **Protection** gives that attack disadvantage. Failing that, an enemy leaves your reach (even by Disengaging) → opportunity attack; a hit stops it (speed 0).', requires: ['sentinel', 'style-protection', 'shield'] },
        { text: 'Otherwise: an enemy leaves your reach (even by Disengaging) → opportunity attack; a hit stops it (speed 0).', requires: ['sentinel', '!style-protection'] },
        { text: 'Otherwise: an enemy leaves your reach (even by Disengaging) → opportunity attack; a hit stops it (speed 0).', requires: ['sentinel', 'style-protection', '!shield'] },
        { text: 'Let the hits land on you, not on your allies.' },
      ],
    },
  ],
};
