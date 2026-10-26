// The "How this page works" tour (#/tour/<n>): one step per page section,
// shown on the example character's real pages. Our own writing.
// `page`: 'home' or a node id; `focus`: the section's data-tour key;
// `text`: at most 220 characters, **bold** allowed, no {vars}.

// The committed SRD paladin fixture (site/fixtures.js), used even when
// private characters are loaded.
export const TOUR_CHARACTER = 'aldric';

export default [
  { page: 'home', focus: 'job', text: "This is Aldric, an example paladin. Every character's page works the same way. **Your job** says how to play them in one line." },
  { page: 'home', focus: 'stats', text: 'Your numbers: hit points, armour class, speed and more. Below them: what you can use a limited number of times, and your spell slots.' },
  { page: 'home', focus: 'groups', text: 'When something happens at the table, find it here and tap it. **Fight** is combat, **Explore** is everything else, **Any time** is saves, checks and helping a friend.' },
  { page: 'turn', focus: 'first', text: "Tapping **It's my turn** opens this page. **First turn** only matters at the start of a fight." },
  { page: 'turn', focus: 'do', text: '**Do this** every turn, in order. The numbers are already worked out: **+7 to hit** means roll a d20 and add 7; **1d8+3** is the damage you roll if it hits.' },
  { page: 'turn', focus: 'if', text: 'Glance at **If…** before you act. When one of these is true, do that.' },
  { page: 'turn', focus: 'children', text: 'Need something else? These buttons list every option of each kind. Your spells are under **Cast a spell**.' },
  { page: 'turn/spell', focus: 'spells', text: 'Your save DC, spell attack and slots, then every spell with a one-line summary. Tap **Full text** for the exact rules.' },
  { page: 'help', focus: 'more', text: "Other situations work the same way. If Do this doesn't fit the moment, **Other actions** lists everything else you could do." },
  { page: 'help', focus: 'details', text: '**Additional details** explains the rules: your features, weapons, spells and the basics. Open it when you want to check how something works.' },
  { page: 'turn', focus: 'bar', text: "Tap **‹** at the top, or your phone's Back, to go back a page. That's everything. Tap **Done** and pick your character." },
];
