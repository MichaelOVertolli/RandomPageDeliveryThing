// Ranger + Hunter (SRD 5.1, paraphrased).
import { styleFeatures } from './styles.js';

const STYLE_IDS = ['archery', 'defense', 'dueling', 'two-weapon-fighting'];
const ENEMIES = ['aberrations', 'beasts', 'celestials', 'constructs', 'dragons', 'elementals', 'fey', 'fiends', 'giants', 'monstrosities', 'oozes', 'plants', 'undead', 'humanoids'];
const TERRAINS = ['arctic', 'coast', 'desert', 'forest', 'grassland', 'mountain', 'swamp', 'underdark'];

export default {
  id: 'ranger', name: 'Ranger', hitDie: 10, saves: ['str', 'dex'],
  weapons: { simple: true, martial: true }, armor: ['light', 'medium', 'shield'],
  casting: { ability: 'wis', kind: 'known', from: 2 },
  subclasses: [{ id: 'hunter', name: 'Hunter' }],
  choices: {
    fightingStyle: { values: STYLE_IDS, max: () => 1 },
    favoredEnemy: { values: ENEMIES, max: lvl => (lvl >= 14 ? 3 : lvl >= 6 ? 2 : 1) },
    naturalExplorer: { values: TERRAINS, max: lvl => (lvl >= 10 ? 3 : lvl >= 6 ? 2 : 1) },
    hunterPrey: { values: ['colossus-slayer', 'giant-killer', 'horde-breaker'], max: () => 1 },
    defensiveTactics: { values: ['escape-the-horde', 'multiattack-defense', 'steel-will'], max: () => 1 },
  },
  features: [
    { id: 'favored-enemy', name: 'Favored Enemy', class: 'ranger', level: 1, nodes: ['explore', 'check'], text: 'Favored enemies: **{favoredEnemy}**. Advantage on Survival checks to track them and on Int checks to recall what you know about them.' },
    { id: 'natural-explorer', name: 'Natural Explorer', class: 'ranger', level: 1, nodes: ['explore'], text: "Favored terrain: **{terrain}**. There: Int and Wis checks about the terrain get double proficiency for skills you're proficient in; difficult terrain doesn't slow the group; you can't get lost except by magic; you stay alert to danger while doing other things; alone, you move stealthily at a normal pace; you find twice the food; when tracking you learn the creatures' number, size and how long ago they passed." },
    ...styleFeatures('ranger', 2, STYLE_IDS),
    { id: 'spellcasting', name: 'Spellcasting', class: 'ranger', level: 2, nodes: ['turn/spell', 'rest'], text: 'Spell save DC **{spellDC}**, spell attack **{spellAttack}**. Slots: {slots}. You know {spellsKnown} spells.' },
    { id: 'colossus-slayer', name: 'Colossus Slayer', class: 'ranger', subclass: 'hunter', level: 3, choice: { key: 'hunterPrey', value: 'colossus-slayer' }, nodes: ['turn/melee', 'turn/ranged'], text: 'Once per turn, +1d8 damage when you hit a creature that is already below its hit point maximum.', addon: { on: 'weapon', text: 'Colossus Slayer **1d8** (target already hurt, once per turn)' } },
    { id: 'giant-killer', name: 'Giant Killer', class: 'ranger', subclass: 'hunter', level: 3, choice: { key: 'hunterPrey', value: 'giant-killer' }, nodes: ['defend'], text: 'Reaction: when a Large or larger creature within 5 ft attacks you, attack it right after (if you can see it).' },
    { id: 'horde-breaker', name: 'Horde Breaker', class: 'ranger', subclass: 'hunter', level: 3, choice: { key: 'hunterPrey', value: 'horde-breaker' }, nodes: ['turn/melee', 'turn/ranged'], text: 'Once per turn, when you attack, make one more attack with the same weapon against a different creature within 5 ft of the first target.', addon: { on: 'weapon', text: 'Horde Breaker: one more attack on a creature next to the target' } },
    { id: 'primeval-awareness', name: 'Primeval Awareness', class: 'ranger', level: 3, nodes: ['explore'], text: 'Action, spend a spell slot: for 1 minute per slot level, sense whether aberrations, celestials, dragons, elementals, fey, fiends or undead are within 1 mile (6 miles in favored terrain). You learn the type, not where or how many.' },
    { id: 'extra-attack', name: 'Extra Attack', class: 'ranger', level: 5, nodes: ['turn/melee', 'turn/ranged'], text: 'The Attack action lets you attack **{attacks}** (counted in your turn).' },
    { id: 'escape-the-horde', name: 'Escape the Horde', class: 'ranger', subclass: 'hunter', level: 7, choice: { key: 'defensiveTactics', value: 'escape-the-horde' }, nodes: ['defend'], text: 'Opportunity attacks against you have disadvantage.' },
    { id: 'multiattack-defense', name: 'Multiattack Defense', class: 'ranger', subclass: 'hunter', level: 7, choice: { key: 'defensiveTactics', value: 'multiattack-defense' }, nodes: ['defend'], text: 'When a creature hits you, you get +4 AC against its other attacks this turn.' },
    { id: 'steel-will', name: 'Steel Will', class: 'ranger', subclass: 'hunter', level: 7, choice: { key: 'defensiveTactics', value: 'steel-will' }, nodes: ['save'], text: 'Advantage on saves against being frightened.' },
    { id: 'lands-stride', name: "Land's Stride", class: 'ranger', level: 8, nodes: ['explore', 'save'], text: "Nonmagical difficult terrain costs you no extra movement and nonmagical plants don't slow or hurt you. Advantage on saves against magically created plants that impede movement." },
    { id: 'hide-in-plain-sight', name: 'Hide in Plain Sight', class: 'ranger', level: 10, nodes: ['sneak'], text: 'Spend 1 minute making camouflage. While you stay still against a solid surface, you get +10 to Stealth.' },
  ],
};
