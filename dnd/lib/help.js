// #/help and #/help/<char>: "Look up a word" → HTML string. Pure.
// #/help searches the glossary; #/help/<char> also searches that character's
// own feature cards and spells, which come first.
import GLOSSARY, { TOPICS } from '../rules/glossary.js';
import { activeFeatures, characterSpells, findSpell, spellLine, slug } from './features.js';
import { vars } from './engine.js';
import { esc, md, featureCard, featureText, spellCard, bar, page } from './render.js';

export const YOUR_FEATURES = 'Your features';
export const YOUR_SPELLS = 'Your spells';
export const NOTHING = 'Nothing found. Try a shorter word.';

// Lowercase, single spaces, and a leading "d20" and/or "+" dropped (unless
// that leaves nothing): "d20+5" and "+5" both search for "5".
function norm(s) {
  const q = String(s ?? '').toLowerCase().replace(/\s+/g, ' ').trim();
  const stripped = q.replace(/^d20(?=[+\-−\s]|$)/, '').replace(/^[+\-−]/, '').trim();
  return stripped || q;
}
// For exact matches only, numbers also stand for any number: "+5" matches
// the alias "d20+N", "2d6+1" matches "1d8+3".
const anyNumber = s => s.replace(/\d+/g, 'n');
const forms = s => {
  const out = new Set([String(s).toLowerCase().replace(/\s+/g, ' ').trim(), norm(s)]);
  for (const f of [...out]) out.add(anyNumber(f));
  return out;
};

// Matching entries in order: exact term or alias, then a term or alias that
// starts with the query, then the query anywhere in term, aliases or text.
// Within each tier, entries keep their order. An empty query returns all.
export function searchHelp(query, entries) {
  const q = norm(query);
  if (!q) return [...entries];
  const qForms = forms(query);
  const tiers = [[], [], []];
  for (const e of entries) {
    const names = [e.term, ...(e.aliases ?? [])];
    if (names.some(n => [...forms(n)].some(f => qForms.has(f)))) tiers[0].push(e);
    else if (names.some(n => norm(n).startsWith(q) || String(n).toLowerCase().startsWith(q))) tiers[1].push(e);
    else if ([...names, e.text ?? ''].some(n => String(n).toLowerCase().includes(q))) tiers[2].push(e);
  }
  return tiers.flat();
}

// The character's feature cards and spells (name + one-liner, full text
// collapsed), then the glossary. `html`: a ready-made card.
export function helpEntries(ch, lib, ctx = {}) {
  if (!ch) return GLOSSARY;
  const v = vars(ch, lib);
  const seen = new Set();
  const features = activeFeatures(ch, lib).filter(f => f.text && !seen.has(f.id) && seen.add(f.id)).map(f => ({
    term: f.name, topic: YOUR_FEATURES, text: featureText(f.text, ch, lib, ctx, v).replace(/\*\*/g, ''), html: featureCard(f, ch, lib, ctx, v),
  }));
  const spells = characterSpells(ch, lib).map(name => {
    const rec = findSpell(ctx.spells, name);
    return { term: rec?.name ?? name, topic: YOUR_SPELLS, text: rec ? spellLine(rec) : '', html: spellCard(rec, name) };
  });
  return [...features, ...spells, ...GLOSSARY];
}

function card(e) {
  if (e.html) return e.html;
  const aka = e.aliases?.length ? `<p class="aka">Also: ${e.aliases.map(esc).join(', ')}</p>` : '';
  return `<div class="card" data-id="term:${esc(slug(e.term))}"><h3>${esc(e.term)}</h3>${aka}<p>${md(e.text)}</p></div>`;
}

// The results list: grouped by topic when the box is empty, otherwise a flat
// list in searchHelp order. app.js re-renders only this on each keystroke.
export function renderHelpResults(query, entries) {
  if (!norm(query)) {
    const order = [YOUR_FEATURES, YOUR_SPELLS, ...TOPICS];
    return order.map(topic => {
      const these = entries.filter(e => e.topic === topic);
      return these.length ? `<section class="help-group"><h2>${esc(topic)}</h2>${these.map(card).join('')}</section>` : '';
    }).join('');
  }
  const found = searchHelp(query, entries);
  return found.length ? found.map(card).join('') : `<p class="muted">${esc(NOTHING)}</p>`;
}

// The back link returns to the page help was opened from (app.js); with no
// such page it goes to the character's home, or the list.
export function renderHelp(ch, lib, ctx = {}) {
  const back = ch ? { href: `#/${ch.id}`, label: 'Back' } : { href: '#/', label: 'Back' };
  const sub = ch ? `${esc(ch.name)} · game words, your features and spells` : 'Game words, explained';
  const body = `<p class="sub">${sub}</p>`
    + '<input type="search" id="help-q" class="search" placeholder="Type a word: AC, prone, save…" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Look up a word">'
    + `<div id="help-results">${renderHelpResults('', helpEntries(ch, lib, ctx))}</div>`;
  return page(bar('Look up a word', back, ctx, true), body);
}
