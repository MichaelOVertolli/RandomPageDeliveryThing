// Router + DOM glue only. Routes: #/ (characters), #/<charId>, #/<charId>/<node>,
// #/<charId>/<node>/more (that node's Other actions), #/tour/<n> (How this page works),
// #/help and #/help/<charId> (Look up a word; `help` is also a node id, so the
// character's help page puts the character after it).
// Private files are optional: a missing one is not an error, a broken one is.
//
// VERSION busts the Pages cache: bump it on every publish, and use the same
// stamp in index.html's <script src="app.js?v=...">.
const VERSION = '2026-10-26e';

const { makeLibrary } = await import(`./lib/features.js?v=${VERSION}`);
const { renderLanding, renderHome, renderNode, renderMore, renderBanner } = await import(`./lib/render.js?v=${VERSION}`);
const { libraryGaps } = await import(`./lib/validate.js?v=${VERSION}`);
const { NODES, MORE, hasMorePage } = await import(`./rules/tree.js?v=${VERSION}`);
const { default: fixtures } = await import(`./fixtures.js?v=${VERSION}`);
const { renderTour } = await import(`./lib/tour.js?v=${VERSION}`);
const { TOUR_CHARACTER } = await import(`./rules/tour.js?v=${VERSION}`);
const { renderHelp, renderHelpResults, helpEntries } = await import(`./lib/help.js?v=${VERSION}`);

const problems = [];

// Absent only when the server says the file isn't there (404); any other
// failure (a syntax error, a missing default export) goes in the red banner.
async function optional(path, url) {
  try {
    const mod = await import(url);
    if (mod.default === undefined) throw new Error('no default export');
    return mod.default;
  } catch (e) {
    let missing = false;
    try { missing = (await fetch(path, { method: 'HEAD', cache: 'no-store' })).status === 404; } catch { /* unknown: report it */ }
    if (!missing) problems.push(`${path}: ${e.message}`);
    return undefined;
  }
}

const [extensions, privateCharacters, spells] = await Promise.all([
  optional('private/extensions.js', `./private/extensions.js?v=${VERSION}`),
  optional('private/characters.js', `./private/characters.js?v=${VERSION}`),
  optional('private/spells.js', `./private/spells.js?v=${VERSION}`),
]);

const lib = makeLibrary(extensions ? [extensions].flat() : []);
const usePrivate = Array.isArray(privateCharacters) && privateCharacters.length > 0;
const characters = usePrivate ? privateCharacters : fixtures;
problems.push(...libraryGaps(characters, lib));
const ctx = { spells: spells ?? [], fallback: !usePrivate };
const app = document.getElementById('app');

// '' / '#' / '#/' all mean the character list.
const norm = h => `#/${String(h).replace(/^#\/?/, '')}`;
const scrollAt = new Map();
let current = null;
let previous = null;
// The tour always shows the committed example character, even when private
// characters are loaded. `tourFrom`: the in-app route the tour was opened
// from (null when the tour was the first page loaded).
const tourCharacter = fixtures.find(c => c.id === TOUR_CHARACTER);
const isTour = h => /^#\/tour(\/|$)/.test(h ?? '');
let tourFrom = null;
// Help: `helpFrom` is the in-app route it was opened from (its back link
// returns there); `helpList` is what the search box filters.
const isHelp = h => /^#\/help(\/|$)/.test(h ?? '');
let helpFrom = null;
let helpList = [];

function parts() {
  try {
    return location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
  } catch {
    return [];
  }
}

function route() {
  if (current) scrollAt.set(current, window.scrollY);
  previous = current;
  current = norm(location.hash);
  const [id, ...rest] = parts();
  const more = rest.at(-1) === MORE && hasMorePage(rest.slice(0, -1).join('/'));
  const node = (more ? rest.slice(0, -1) : rest).join('/');
  const ch = characters.find(c => c.id === id);
  const tour = id === 'tour';
  if (tour && !isTour(previous)) tourFrom = previous;
  const help = id === 'help';
  if (help && !isHelp(previous)) helpFrom = previous;
  let html;
  if (help) {
    const hc = characters.find(c => c.id === rest[0]) ?? null;
    helpList = helpEntries(hc, lib, ctx);
    html = renderHelp(hc, lib, ctx);
    document.title = 'Look up a word';
  } else if (tour) {
    html = renderTour(rest[0], tourCharacter, lib, ctx);
    document.title = 'How this page works';
  } else if (!ch) {
    html = renderLanding(characters, lib, ctx);
    document.title = 'Characters';
  } else if (more) {
    html = renderMore(ch, node, lib, ctx);
    document.title = `Other actions · ${NODES[node].label} · ${ch.name}`;
  } else if (!NODES[node]) {
    html = renderHome(ch, lib, ctx);
    document.title = ch.name;
  } else {
    html = renderNode(ch, node, lib, ctx);
    document.title = `${NODES[node].label} · ${ch.name}`;
  }
  app.innerHTML = renderBanner(problems) + html;
  if (tour) showTourFocus();
  else window.scrollTo(0, help ? 0 : scrollAt.get(current) ?? 0);
}

// A tour step: the page underneath is inert (no taps or keyboard focus
// outside the bubble), and the focused section's top sits just below the
// sticky bar.
function showTourFocus() {
  for (const el of app.querySelectorAll('.touring a, .touring summary')) {
    if (!el.closest('.bubble')) el.tabIndex = -1;
  }
  const el = app.querySelector('[data-focus]');
  const barHeight = app.querySelector('.bar')?.offsetHeight ?? 0;
  const top = el && !el.matches('.bar') ? el.getBoundingClientRect().top + window.scrollY - barHeight - 8 : 0;
  window.scrollTo(0, Math.max(0, top));
}

// The in-app Back link: go back in history when we came from that page (so
// the phone's Back button doesn't then return here); otherwise replace this
// entry with the parent.
document.addEventListener('click', e => {
  // Tour: Next/Back replace this history entry, so the tour takes one; Skip
  // and Done return to where it started. The page under the bubble is inert.
  const t = e.target.closest?.('a[data-tour-step], a[data-tour-exit]');
  if (t) {
    e.preventDefault();
    if (t.hasAttribute('data-tour-step')) location.replace(t.getAttribute('href'));
    else if (tourFrom && !isTour(tourFrom)) history.back();
    else location.replace('#/');
    return;
  }
  if (e.target.closest?.('.touring') && !e.target.closest('.bubble')) {
    e.preventDefault();
    return;
  }
  const a = e.target.closest?.('a.back[href]');
  if (!a) return;
  e.preventDefault();
  const parent = norm(a.getAttribute('href'));
  // Help's back link: to the page help was opened from, else its fallback.
  if (a.hasAttribute('data-return')) {
    if (helpFrom && !isTour(helpFrom)) history.back();
    else location.replace(parent);
    return;
  }
  if (previous === parent) history.back();
  else location.replace(parent);
});

// Help search: re-render only the results on each keystroke, so the box keeps
// its focus and cursor.
document.addEventListener('input', e => {
  if (e.target.id !== 'help-q') return;
  const out = document.getElementById('help-results');
  if (out) out.innerHTML = renderHelpResults(e.target.value, helpList);
});

window.addEventListener('hashchange', route);
route();
