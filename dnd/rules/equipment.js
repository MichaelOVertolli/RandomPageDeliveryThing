// SRD 5.1 weapons, armor and tools (numbers only).
// kind: 'melee' | 'ranged'. props: finesse, light, heavy, two-handed, thrown,
// versatile, reach, ammunition, loading.

const w = (id, name, category, kind, damage, type, props = [], extra = {}) =>
  [id, { id, name, category, kind, damage, type, props, ...extra }];

export const WEAPONS = Object.fromEntries([
  // simple melee
  w('club', 'Club', 'simple', 'melee', '1d4', 'bludgeoning', ['light']),
  w('dagger', 'Dagger', 'simple', 'melee', '1d4', 'piercing', ['finesse', 'light', 'thrown'], { range: '20/60' }),
  w('greatclub', 'Greatclub', 'simple', 'melee', '1d8', 'bludgeoning', ['two-handed']),
  w('handaxe', 'Handaxe', 'simple', 'melee', '1d6', 'slashing', ['light', 'thrown'], { range: '20/60' }),
  w('javelin', 'Javelin', 'simple', 'melee', '1d6', 'piercing', ['thrown'], { range: '30/120' }),
  w('light-hammer', 'Light hammer', 'simple', 'melee', '1d4', 'bludgeoning', ['light', 'thrown'], { range: '20/60' }),
  w('mace', 'Mace', 'simple', 'melee', '1d6', 'bludgeoning'),
  w('quarterstaff', 'Quarterstaff', 'simple', 'melee', '1d6', 'bludgeoning', ['versatile'], { versatile: '1d8' }),
  w('sickle', 'Sickle', 'simple', 'melee', '1d4', 'slashing', ['light']),
  w('spear', 'Spear', 'simple', 'melee', '1d6', 'piercing', ['thrown', 'versatile'], { range: '20/60', versatile: '1d8' }),
  // simple ranged
  w('light-crossbow', 'Light crossbow', 'simple', 'ranged', '1d8', 'piercing', ['ammunition', 'loading', 'two-handed'], { range: '80/320' }),
  w('dart', 'Dart', 'simple', 'ranged', '1d4', 'piercing', ['finesse', 'thrown'], { range: '20/60' }),
  w('shortbow', 'Shortbow', 'simple', 'ranged', '1d6', 'piercing', ['ammunition', 'two-handed'], { range: '80/320' }),
  w('sling', 'Sling', 'simple', 'ranged', '1d4', 'bludgeoning', ['ammunition'], { range: '30/120' }),
  // martial melee
  w('battleaxe', 'Battleaxe', 'martial', 'melee', '1d8', 'slashing', ['versatile'], { versatile: '1d10' }),
  w('flail', 'Flail', 'martial', 'melee', '1d8', 'bludgeoning'),
  w('glaive', 'Glaive', 'martial', 'melee', '1d10', 'slashing', ['heavy', 'reach', 'two-handed']),
  w('greataxe', 'Greataxe', 'martial', 'melee', '1d12', 'slashing', ['heavy', 'two-handed']),
  w('greatsword', 'Greatsword', 'martial', 'melee', '2d6', 'slashing', ['heavy', 'two-handed']),
  w('halberd', 'Halberd', 'martial', 'melee', '1d10', 'slashing', ['heavy', 'reach', 'two-handed']),
  w('lance', 'Lance', 'martial', 'melee', '1d12', 'piercing', ['reach']),
  w('longsword', 'Longsword', 'martial', 'melee', '1d8', 'slashing', ['versatile'], { versatile: '1d10' }),
  w('maul', 'Maul', 'martial', 'melee', '2d6', 'bludgeoning', ['heavy', 'two-handed']),
  w('morningstar', 'Morningstar', 'martial', 'melee', '1d8', 'piercing'),
  w('pike', 'Pike', 'martial', 'melee', '1d10', 'piercing', ['heavy', 'reach', 'two-handed']),
  w('rapier', 'Rapier', 'martial', 'melee', '1d8', 'piercing', ['finesse']),
  w('scimitar', 'Scimitar', 'martial', 'melee', '1d6', 'slashing', ['finesse', 'light']),
  w('shortsword', 'Shortsword', 'martial', 'melee', '1d6', 'piercing', ['finesse', 'light']),
  w('trident', 'Trident', 'martial', 'melee', '1d6', 'piercing', ['thrown', 'versatile'], { range: '20/60', versatile: '1d8' }),
  w('war-pick', 'War pick', 'martial', 'melee', '1d8', 'piercing'),
  w('warhammer', 'Warhammer', 'martial', 'melee', '1d8', 'bludgeoning', ['versatile'], { versatile: '1d10' }),
  w('whip', 'Whip', 'martial', 'melee', '1d4', 'slashing', ['finesse', 'reach']),
  // martial ranged
  w('blowgun', 'Blowgun', 'martial', 'ranged', '1', 'piercing', ['ammunition', 'loading'], { range: '25/100' }),
  w('hand-crossbow', 'Hand crossbow', 'martial', 'ranged', '1d6', 'piercing', ['ammunition', 'light', 'loading'], { range: '30/120' }),
  w('heavy-crossbow', 'Heavy crossbow', 'martial', 'ranged', '1d10', 'piercing', ['ammunition', 'heavy', 'loading', 'two-handed'], { range: '100/400' }),
  w('longbow', 'Longbow', 'martial', 'ranged', '1d8', 'piercing', ['ammunition', 'heavy', 'two-handed'], { range: '150/600' }),
]);

// base AC; dexCap: null = full Dex, 0 = none; strReq for heavy armor.
export const ARMOR = {
  none: { id: 'none', name: 'No armor', type: 'none', base: 10, dexCap: null },
  padded: { id: 'padded', name: 'Padded armor', type: 'light', base: 11, dexCap: null, stealthDis: true },
  leather: { id: 'leather', name: 'Leather armor', type: 'light', base: 11, dexCap: null },
  'studded-leather': { id: 'studded-leather', name: 'Studded leather', type: 'light', base: 12, dexCap: null },
  hide: { id: 'hide', name: 'Hide armor', type: 'medium', base: 12, dexCap: 2 },
  'chain-shirt': { id: 'chain-shirt', name: 'Chain shirt', type: 'medium', base: 13, dexCap: 2 },
  'scale-mail': { id: 'scale-mail', name: 'Scale mail', type: 'medium', base: 14, dexCap: 2, stealthDis: true },
  breastplate: { id: 'breastplate', name: 'Breastplate', type: 'medium', base: 14, dexCap: 2 },
  'half-plate': { id: 'half-plate', name: 'Half plate', type: 'medium', base: 15, dexCap: 2, stealthDis: true },
  'ring-mail': { id: 'ring-mail', name: 'Ring mail', type: 'heavy', base: 14, dexCap: 0, stealthDis: true },
  'chain-mail': { id: 'chain-mail', name: 'Chain mail', type: 'heavy', base: 16, dexCap: 0, strReq: 13, stealthDis: true },
  splint: { id: 'splint', name: 'Splint armor', type: 'heavy', base: 17, dexCap: 0, strReq: 15, stealthDis: true },
  plate: { id: 'plate', name: 'Plate armor', type: 'heavy', base: 18, dexCap: 0, strReq: 15, stealthDis: true },
};

export const SHIELD = { id: 'shield', name: 'Shield', bonus: 2 };

export const TOOLS = {
  'thieves-tools': { id: 'thieves-tools', name: "Thieves' tools", ability: 'dex' },
  'herbalism-kit': { id: 'herbalism-kit', name: 'Herbalism kit', ability: 'wis' },
  'disguise-kit': { id: 'disguise-kit', name: 'Disguise kit', ability: 'cha' },
  'poisoners-kit': { id: 'poisoners-kit', name: "Poisoner's kit", ability: 'int' },
  'navigators-tools': { id: 'navigators-tools', name: "Navigator's tools", ability: 'wis' },
  'smiths-tools': { id: 'smiths-tools', name: "Smith's tools", ability: 'str' },
  'tinkers-tools': { id: 'tinkers-tools', name: "Tinker's tools", ability: 'int' },
  'cartographers-tools': { id: 'cartographers-tools', name: "Cartographer's tools", ability: 'int' },
  'land-vehicles': { id: 'land-vehicles', name: 'Vehicles (land)', ability: 'str' },
  'gaming-set': { id: 'gaming-set', name: 'Gaming set', ability: 'wis' },
  'musical-instrument': { id: 'musical-instrument', name: 'Musical instrument', ability: 'cha' },
};
