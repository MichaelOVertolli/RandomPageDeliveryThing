// Situation tree: three groups of top-level nodes; `turn` has detail pages.

export const GROUPS = [
  { id: 'fight', label: 'Fight', nodes: ['turn', 'defend', 'hurt'] },
  { id: 'explore', label: 'Explore', nodes: ['explore', 'social', 'sneak', 'search', 'rest'] },
  { id: 'any', label: 'Any time', nodes: ['save', 'check', 'help'] },
];

export const NODES = {
  turn: { label: "It's my turn", group: 'fight', children: ['turn/melee', 'turn/ranged', 'turn/spell', 'turn/bonus', 'turn/other'] },
  'turn/melee': { label: 'Melee attack', parent: 'turn' },
  'turn/ranged': { label: 'Ranged attack', parent: 'turn' },
  'turn/spell': { label: 'Cast a spell', parent: 'turn' },
  'turn/bonus': { label: 'Bonus action', parent: 'turn' },
  'turn/other': { label: 'Other actions', parent: 'turn' },
  defend: { label: 'Not my turn (hit / react)', group: 'fight' },
  hurt: { label: "I'm hurt / dropping to 0", group: 'fight' },
  explore: { label: 'Travelling & exploring', group: 'explore' },
  social: { label: 'Talking to someone', group: 'explore' },
  sneak: { label: 'Sneaking & scouting', group: 'explore' },
  search: { label: 'Searching, traps & locks', group: 'explore' },
  rest: { label: 'Resting', group: 'explore' },
  save: { label: 'Saving throw', group: 'any' },
  check: { label: 'Other ability check', group: 'any' },
  help: { label: 'A friend needs help', group: 'any' },
};

export const NODE_IDS = Object.keys(NODES);

// Every top-level node except `turn` has an Other actions sub-page,
// #/<char>/<node>/more. `turn` links its detail pages instead, and those have none.
export const MORE = 'more';
export function hasMorePage(node) {
  return !!NODES[node] && node !== 'turn' && !NODES[node].parent;
}
