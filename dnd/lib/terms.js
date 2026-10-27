// Tappable keywords (D23): game words, and a character's own feature and
// spell names, in a page's text become links to their "Look up a word"
// entry (#/help/<char>/<slug>). Pure: HTML string in, HTML string out.
import { slug } from './features.js';
import { helpEntries } from './help.js';
import { esc } from './render.js';

// Glossary words that are too common to link (still searchable).
export const NEVER_LINKED = [
  'dice', 'd20', 'roll a d20', 'd20+N', 'damage', 'check', 'skill', 'save', 'saves', 'proficient', 'proficiency', 'passive',
  'armor', 'shield', 'ft', 'feet', 'turn', 'round', 'your turn', 'actions', 'move', 'moving', 'slot', 'slots', 'prepared',
  'known', 'touch', 'self', 'V', 'S', 'M', 'verbal', 'somatic', 'material', 'fear', 'afraid', 'blind', 'deaf', 'stable',
  'surprise', 'poison', 'fire', 'cold', 'force', 'lightning', 'thunder', 'acid', 'psychic', 'mod', 'target number', 'unseen',
  'two hands', '1st level', '2nd level', '3rd level',
];
// Glossary words that are also everyday words: linked only when they are the
// whole text of a <b> ("<b>Help</b>: …", not "help an ally").
export const BOLD_ONLY = [
  'Attack', 'Help', 'Ready', 'Search', 'Hide', 'Cover', 'Light', 'Heavy', 'Range', 'Reach', 'Dash', 'Dodge', 'Disengage',
  'Level', 'Hidden', 'Ritual', 'Movement', 'Nature', 'History',
];
const never = new Set(NEVER_LINKED.map(w => w.toLowerCase()));
const boldOnly = new Set(BOLD_ONLY.map(w => w.toLowerCase()));

// Text inside these is never linked: links and buttons, headings, summaries,
// the bar, the footer and the page-end fragment.
const SKIP = new Set(['a', 'button', 'h1', 'h2', 'h3', 'summary', 'header', 'footer', 'script', 'style']);
const VOID = new Set(['input', 'br', 'img', 'hr', 'meta', 'link', 'wbr']);
const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const hasClass = (tag, c) => new RegExp(`\\sclass="[^"]*\\b${c}\\b`).test(tag);

// Every name an entry can be found by, longest first. A glossary entry's
// names are its term and aliases minus NEVER_LINKED; a character's features
// and spells (entries with `html`) are linked by name. A name shared by two
// entries goes to the first.
function names(entries) {
  const out = new Map();
  for (const e of entries) {
    const all = e.html ? [e.term] : [e.term, ...(e.aliases ?? [])];
    for (const n of all) {
      const k = String(n).toLowerCase().replace(/\s+/g, ' ').trim();
      if (!k || out.has(k) || (!e.html && never.has(k))) continue;
      out.set(k, { entry: e, bold: !e.html && boldOnly.has(k) });
    }
  }
  return out;
}

// Wraps the first eligible mention of each entry in `html` in
// <a class="term" href="#/help/<charId>/<slug>">. Matches are on text between
// tags only, longest phrase first, whole words, case-insensitive.
export function linkTerms(html, entries, charId) {
  const byName = names(entries);
  if (!byName.size) return html;
  const alts = [...byName.keys()].sort((a, b) => b.length - a.length).map(k => reEsc(k).replace(/ /g, '\\s+'));
  const re = new RegExp(`(?<![A-Za-z0-9])(?:${alts.join('|')})(?![A-Za-z0-9])`, 'gi');
  const done = new Set();
  const tokens = html.split(/(<[^>]*>)/);
  // Open elements: [name, skipped].
  const stack = [];
  const skipping = () => stack.length > 0 && stack[stack.length - 1][1];
  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    if (!tok) continue;
    if (tok.startsWith('<')) {
      const m = tok.match(/^<(\/?)([a-zA-Z0-9]+)/);
      if (!m) continue;
      const name = m[2].toLowerCase();
      if (m[1]) {
        const at = stack.map(s => s[0]).lastIndexOf(name);
        if (at >= 0) stack.length = at;
      } else if (!VOID.has(name) && !tok.endsWith('/>')) {
        // A spell card's own <details> is its Full text.
        const inSpell = stack.some(s => s[2]);
        const skip = skipping() || SKIP.has(name) || (name === 'div' && hasClass(tok, 'page-end')) || (name === 'details' && inSpell);
        stack.push([name, skip, name === 'div' && hasClass(tok, 'spell')]);
      }
      continue;
    }
    if (skipping()) continue;
    // The whole text of a <b>: bold-only words may link here.
    const wholeBold = tokens[i - 1]?.toLowerCase() === '<b>' && tokens[i + 1]?.toLowerCase() === '</b>';
    tokens[i] = tok.replace(re, word => {
      const hit = byName.get(word.toLowerCase().replace(/\s+/g, ' '));
      if (!hit || done.has(hit.entry)) return word;
      if (hit.bold && !(wholeBold && tok.trim().toLowerCase() === word.toLowerCase())) return word;
      done.add(hit.entry);
      return `<a class="term" href="#/help/${esc(charId)}/${esc(slug(hit.entry.term))}">${word}</a>`;
    });
  }
  return tokens.join('');
}

// A character's home, node, more or turn/* page with its <main> linked to
// that character's help entries. The bar and footer stay as they are.
export function linkPage(html, ch, lib, ctx = {}) {
  const start = html.indexOf('<main>');
  const end = html.lastIndexOf('</main>');
  if (start < 0 || end < start) return html;
  return html.slice(0, start) + linkTerms(html.slice(start, end), helpEntries(ch, lib, ctx), ch.id) + html.slice(end);
}
