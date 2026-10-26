// Router + DOM glue only. Routes: #/ (characters), #/<charId>, #/<charId>/<node>,
// #/<charId>/<node>/more (that node's Other actions).
// Private files are optional: a missing one is not an error, a broken one is.
//
// VERSION busts the Pages cache: bump it on every publish, and use the same
// stamp in index.html's <script src="app.js?v=...">.
const VERSION = '2026-10-26c';

const { makeLibrary } = await import(`./lib/features.js?v=${VERSION}`);
const { renderLanding, renderHome, renderNode, renderMore, renderBanner } = await import(`./lib/render.js?v=${VERSION}`);
const { libraryGaps } = await import(`./lib/validate.js?v=${VERSION}`);
const { NODES, MORE, hasMorePage } = await import(`./rules/tree.js?v=${VERSION}`);
const { default: fixtures } = await import(`./fixtures.js?v=${VERSION}`);

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
  let html;
  if (!ch) {
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
  window.scrollTo(0, scrollAt.get(current) ?? 0);
}

// The in-app Back link: go back in history when we came from that page (so
// the phone's Back button doesn't then return here); otherwise replace this
// entry with the parent.
document.addEventListener('click', e => {
  const a = e.target.closest?.('a.back[href]');
  if (!a) return;
  e.preventDefault();
  const parent = norm(a.getAttribute('href'));
  if (previous === parent) history.back();
  else location.replace(parent);
});

window.addEventListener('hashchange', route);
route();
