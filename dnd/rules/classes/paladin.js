// Paladin + Oath of Devotion (SRD 5.1, paraphrased).
import { styleFeatures } from './styles.js';

const STYLE_IDS = ['defense', 'dueling', 'great-weapon-fighting', 'protection'];

export default {
  id: 'paladin', name: 'Paladin', hitDie: 10, saves: ['wis', 'cha'],
  weapons: { simple: true, martial: true }, armor: ['light', 'medium', 'heavy', 'shield'],
  casting: { ability: 'cha', kind: 'prepared', from: 2 },
  subclasses: [{ id: 'devotion', name: 'Oath of Devotion' }],
  oathSpells: {
    devotion: {
      3: ['Protection from Evil and Good', 'Sanctuary'],
      5: ['Lesser Restoration', 'Zone of Truth'],
      9: ['Beacon of Hope', 'Dispel Magic'],
    },
  },
  choices: { fightingStyle: { values: STYLE_IDS, max: () => 1 } },
  features: [
    { id: 'divine-sense', name: 'Divine Sense', class: 'paladin', level: 1, nodes: ['explore', 'search', 'turn/other'], text: 'Action: until the end of your next turn you know where every celestial, fiend and undead within 60 ft is (unless behind total cover), and any consecrated or desecrated place.', uses: { n: '{divineSense}', per: 'LR' } },
    { id: 'lay-on-hands', name: 'Lay on Hands', class: 'paladin', level: 1, nodes: ['help', 'hurt', 'turn/other', 'rest'], text: 'Action: touch a creature and restore HP from your pool of **{layOnHands}**, or spend 5 points to cure one disease or neutralize one poison. No effect on undead or constructs.', uses: { n: '{layOnHands} HP', per: 'LR' } },
    ...styleFeatures('paladin', 2, STYLE_IDS),
    { id: 'spellcasting', name: 'Spellcasting', class: 'paladin', level: 2, nodes: ['turn/spell', 'rest'], text: 'Spell save DC **{spellDC}**, spell attack **{spellAttack}**. Slots: {slots}. Prepare **{preparedCount}** spells after a long rest (oath spells are extra).' },
    { id: 'divine-smite', name: 'Divine Smite', class: 'paladin', level: 2, nodes: ['turn/melee'], text: 'When you hit with a melee weapon, spend a spell slot: +2d8 radiant with a 1st-level slot, +1d8 per slot level above 1st (max 5d8), and +1d8 more against undead or fiends.', addon: { on: 'melee', text: 'Smite: **2d8** radiant (1st-level slot), +1d8 per higher slot, +1d8 vs undead/fiends' } },
    { id: 'divine-health', name: 'Divine Health', class: 'paladin', level: 3, nodes: ['save'], text: 'You are immune to disease.' },
    { id: 'channel-divinity', name: 'Channel Divinity', class: 'paladin', subclass: 'devotion', level: 3, nodes: ['turn/other', 'rest'], text: 'Use it for Sacred Weapon or Turn the Unholy.', uses: { n: 1, per: 'SR' } },
    { id: 'sacred-weapon', name: 'Sacred Weapon', class: 'paladin', subclass: 'devotion', level: 3, nodes: ['turn', 'turn/other'], text: 'Channel Divinity, action: for 1 minute add **{mod.cha}** to attack rolls with one weapon, which also sheds bright light for 20 ft.' },
    { id: 'turn-the-unholy', name: 'Turn the Unholy', class: 'paladin', subclass: 'devotion', level: 3, nodes: ['turn', 'turn/other'], text: 'Channel Divinity, action: each fiend or undead within 30 ft that can see or hear you makes a Wis save (DC **{spellDC}**) or is turned for 1 minute or until it takes damage: it must move away and can only Dash or try to escape.' },
    { id: 'oath-spells', name: 'Oath Spells', class: 'paladin', subclass: 'devotion', level: 3, nodes: ['turn/spell'], text: 'Your oath spells are always prepared and do not count against your prepared spells.' },
    { id: 'extra-attack', name: 'Extra Attack', class: 'paladin', level: 5, nodes: ['turn/melee'], text: 'The Attack action lets you attack **{attacks}** (counted in your turn).' },
    { id: 'aura-of-protection', name: 'Aura of Protection', class: 'paladin', level: 6, nodes: ['save', 'help'], text: 'While you are conscious, you and friendly creatures within {auraRange} ft add **{auraBonus}** to saving throws (already in your saves).' },
    { id: 'aura-of-devotion', name: 'Aura of Devotion', class: 'paladin', subclass: 'devotion', level: 7, nodes: ['save', 'help'], text: "While you are conscious, you and friendly creatures within {auraRange} ft can't be charmed." },
    { id: 'aura-of-courage', name: 'Aura of Courage', class: 'paladin', level: 10, nodes: ['save', 'help'], text: "While you are conscious, you and friendly creatures within {auraRange} ft can't be frightened." },
  ],
};
