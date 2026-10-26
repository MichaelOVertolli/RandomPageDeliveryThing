// Fighter + Champion (SRD 5.1, paraphrased).
import { styleFeatures } from './styles.js';

const STYLE_IDS = ['archery', 'defense', 'dueling', 'great-weapon-fighting', 'protection', 'two-weapon-fighting'];

export default {
  id: 'fighter', name: 'Fighter', hitDie: 10, saves: ['str', 'con'],
  weapons: { simple: true, martial: true }, armor: ['light', 'medium', 'heavy', 'shield'],
  subclasses: [{ id: 'champion', name: 'Champion' }],
  choices: {
    // a second style at Champion 10
    fightingStyle: { values: STYLE_IDS, max: (lvl, sub) => (lvl >= 10 && sub === 'champion' ? 2 : 1) },
  },
  features: [
    ...styleFeatures('fighter', 1, STYLE_IDS),
    { id: 'second-wind', name: 'Second Wind', class: 'fighter', level: 1, nodes: ['turn/bonus', 'hurt'], text: 'Bonus action: regain **{secondWind}** HP.', uses: { n: 1, per: 'SR' } },
    { id: 'action-surge', name: 'Action Surge', class: 'fighter', level: 2, nodes: ['turn'], text: 'Take one extra action this turn (for example, attack {attacks} more).', uses: { n: 1, per: 'SR' } },
    { id: 'extra-attack', name: 'Extra Attack', class: 'fighter', level: 5, nodes: ['turn/melee', 'turn/ranged'], text: 'The Attack action lets you attack **{attacks}** (counted in your turn).' },
    { id: 'indomitable', name: 'Indomitable', class: 'fighter', level: 9, nodes: ['save'], text: 'Reroll a saving throw you fail. You must use the new roll.', uses: { n: 1, per: 'LR' } },
    { id: 'improved-critical', name: 'Improved Critical', class: 'fighter', subclass: 'champion', level: 3, nodes: ['turn/melee', 'turn/ranged'], text: 'Your weapon attacks score a critical hit on a roll of 19 or 20.', addon: { on: 'weapon', text: 'crit on **19–20**' } },
    { id: 'remarkable-athlete', name: 'Remarkable Athlete', class: 'fighter', subclass: 'champion', level: 7, nodes: ['check'], text: 'Add **+{halfProf}** to Str, Dex and Con checks you are not proficient in, initiative included (already in your numbers); running long jump {mod.str} ft.' },
  ],
};
