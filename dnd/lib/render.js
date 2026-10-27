// (character, node) → HTML string. Pure: no DOM access.
import { GROUPS, NODES, MORE, hasMorePage } from '../rules/tree.js';
import { ABILITIES, ABILITY_NAMES, SKILLS, SAVE_TRIGGERS, STANDARD_ACTIONS } from '../rules/common.js';
import { glossaryEntry } from '../rules/glossary.js';
import { featuresFor, activeFeatures, visibleNodes, characterSpells, oathSpells, findSpell, spellLine, spellPlacement, slug } from './features.js';
import {
  vars, hpMax, armorClass, speed, initiative, passivePerception, profBonus, signed, d20, saves, skills,
  weaponRows, toolBonus, resistances, stealthDisadvantage, spellSlots,
} from './engine.js';
import { playbookFor, roleFor, weaponLine, resolveText } from './playbook.js';

export const ATTRIBUTION = 'This work includes material taken from the System Reference Document 5.1 ("SRD 5.1") by Wizards of the Coast LLC, available at https://dnd.wizards.com/resources/systems-reference-document. The SRD 5.1 is licensed under the Creative Commons Attribution 4.0 International License, available at https://creativecommons.org/licenses/by/4.0/legalcode.';

export const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// Escape, then turn **bold** into <b>.
export const md = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
const linkify = s => s.replace(/https:\/\/[^\s,]+[^\s,.]/g, u => `<a href="${u}" rel="noopener">${u}</a>`);

// What a page shows before the collapsed Additional details, tags stripped
// (the Other actions button counts; the turn page should fit about one phone
// screen; tools/check.js reports this length).
export function visibleText(html) {
  const start = html.indexOf('<main>');
  const end = html.indexOf('<details class="other"');
  return html.slice(start, end < 0 ? undefined : end).replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

// Red banner for a private file that failed to load, or a character the
// loaded library can't place (a broken extension). Empty when all is well.
export function renderBanner(problems) {
  if (!problems?.length) return '';
  return `<div class="banner" role="alert"><p><b>Something failed to load:</b></p>${problems.map(p => `<p>${esc(p)}</p>`).join('')}</div>`;
}

export function renderFooter() {
  return `<footer><p>${linkify(esc(ATTRIBUTION))}</p><p>Role playbooks and app text are original writing. Any non-SRD content shown here comes from private files that are not part of the open-source repository.</p></footer>`;
}

// A page section the tour can point at: data-tour="<key>" on its outer tag.
// On a tour step (ctx.tour = {focus, bubble}) the focused section also gets
// data-focus, and the step's bubble goes directly after it.
function part(key, html, ctx) {
  const focused = ctx?.tour?.focus === key;
  const out = html.replace(/^<([a-z0-9]+)/, `<$1 data-tour="${key}"${focused ? ' data-focus' : ''}`);
  return focused ? out + ctx.tour.bubble : out;
}

// `returns`: the back link goes back to whichever page opened this one
// (data-return, handled in app.js), with `back.href` as the fallback.
export function bar(title, back, ctx, returns = false) {
  const link = back ? `<a class="back" href="${esc(back.href)}"${returns ? ' data-return' : ''}>‹ ${esc(back.label)}</a>` : '<span class="back"></span>';
  return part('bar', `<header class="bar">${link}<h1>${esc(title)}</h1><span class="back"></span></header>`, ctx);
}

export const page = (barHtml, body) => `${barHtml}<main>${body}</main>${renderFooter()}`;

function classLine(ch, lib) {
  const cls = lib.classes[ch.class];
  const sub = cls?.subclasses.find(s => s.id === ch.subclass);
  const role = roleFor(ch, lib);
  return `${cls?.name ?? ch.class} ${ch.level}${sub ? ` (${sub.name})` : ''}${role ? ` · ${role.label}` : ''}`;
}

// Feature text with whatever vars resolve; anything unresolved reads "(not set)".
export function featureText(text, ch, lib, ctx, v) {
  const full = resolveText(text, ch, lib, ctx, v);
  if (full != null) return full;
  return String(text).replace(/\{([^}]+)\}/g, (m) => resolveText(m, ch, lib, ctx, v) ?? '(not set)');
}

function usesText(f, v) {
  if (!f.uses) return '';
  const n = String(f.uses.n).replace(/\{([^}]+)\}/g, (m, k) => v[k] ?? '?');
  return `${n}/${f.uses.per}`;
}

export function featureCard(f, ch, lib, ctx, v) {
  const uses = usesText(f, v);
  return `<div class="card" data-id="${esc(f.id)}"><h3>${esc(f.name)}${uses ? ` <span class="uses">${esc(uses)}</span>` : ''}</h3>${f.text ? `<p>${md(featureText(f.text, ch, lib, ctx, v))}</p>` : ''}</div>`;
}

// The bottom of every page but the help page and tour steps: the "Look up a
// word" button, then (`tourLink`: the list and homes) "How this page works".
// It comes after Additional details, so the turn-page measure skips it.
function pageEnd(helpHref, ctx, tourLink = false) {
  if (ctx?.tour) return '';
  return `<div class="page-end"><ul class="buttons"><li><a class="btn small" href="${esc(helpHref)}">Look up a word</a></li></ul>`
    + `${tourLink ? '<p class="tour-link"><a href="#/tour/1">How this page works</a></p>' : ''}</div>`;
}

export function renderLanding(characters, lib, ctx = {}) {
  const items = characters.map(ch =>
    `<li><a class="btn" href="#/${esc(ch.id)}"><b>${esc(ch.name)}</b><span>${esc(classLine(ch, lib))}</span></a></li>`).join('');
  const tour = '<li><a class="btn intro" href="#/tour/1"><b>New here?</b><span>How this page works</span><span class="arrow" aria-hidden="true">›</span></a></li>';
  const note = ctx.fallback ? '<p class="muted">Showing the built-in example characters (no private character file found).</p>' : '';
  return page(bar('Characters'), `${note}<ul class="buttons">${tour}${items}</ul>${pageEnd('#/help', ctx, true)}`);
}

export function renderHome(ch, lib, ctx = {}) {
  const v = vars(ch, lib);
  const role = roleFor(ch, lib);
  const stats = [
    `HP <b>${hpMax(ch, lib)}</b>`, `AC <b>${armorClass(ch, lib)}</b>`, `Speed <b>${speed(ch, lib)} ft</b>`,
    `Init <b>${d20(initiative(ch, lib))}</b>`, `Passive Perc <b>${passivePerception(ch, lib)}</b>`, `Prof <b>${signed(profBonus(ch.level))}</b>`,
  ].join(' · ');
  const uses = activeFeatures(ch, lib).filter(f => f.uses).map(f => `${esc(f.name)} ${esc(usesText(f, v))}`);
  uses.push(`Hit dice ${esc(v.hitDice)}`);
  const slots = spellSlots(ch, lib);
  const casting = slots.length ? `<p class="stats">Spell slots <b>${slots.join('/')}</b> · Spell DC <b>${v.spellDC}</b> · Spell attack <b>${v.spellAttack}</b></p>` : '';
  const visible = new Set(visibleNodes(ch, lib));
  const groups = GROUPS.map(g => {
    const buttons = g.nodes.filter(n => visible.has(n))
      .map(n => `<li><a class="btn" href="#/${esc(ch.id)}/${n}">${esc(NODES[n].label)}</a></li>`).join('');
    return `<section class="group"><h2>${esc(g.label)}</h2><ul class="buttons">${buttons}</ul></section>`;
  }).join('');
  const body = `<p class="sub">${esc(classLine(ch, lib))}</p>`
    + (role ? part('job', `<p class="job"><b>Your job:</b> ${esc(role.job)}</p>`, ctx) : '')
    + part('stats', `<div class="numbers"><p class="stats">${stats}</p><p class="stats">${uses.join(' · ')}</p>${casting}</div>`, ctx)
    + part('groups', `<div class="groups">${groups}</div>`, ctx)
    + pageEnd(`#/help/${ch.id}`, ctx, true);
  return page(bar(ch.name, { href: '#/', label: 'Characters' }, ctx), body);
}

// ---- node bodies ----
// A page is Do this → If… → [Other actions] → Additional details ▸.
// Other actions: the alternatives Do this / If… don't already use (by id),
// with numbers; a sub-page #/<char>/<node>/more, except on turn (its detail
// buttons) and the turn/* pages (inline). Additional details: Your features,
// Weapons, Spells, Rules basics, each a collapsed subsection when non-empty.

export function spellCard(rec, name) {
  return rec
    ? `<div class="card spell" data-id="spell:${esc(slug(rec.name))}"><h3>${esc(rec.name)}</h3><p class="line">${esc(spellLine(rec))}</p>`
      + `<details><summary>Full text</summary>${(rec.details ?? []).map(p => `<p>${esc(p)}</p>`).join('')}</details></div>`
    : `<div class="card spell" data-id="spell:${esc(slug(name))}"><h3>${esc(name)}</h3><p class="muted">Spell text not loaded.</p></div>`;
}

function spellCards(ch, lib, ctx, filter = () => true, names = characterSpells(ch, lib)) {
  const cards = [];
  for (const name of names) {
    const rec = findSpell(ctx.spells, name);
    if (rec && !filter(rec)) continue;
    if (!rec && filter !== ALL) continue;
    cards.push(spellCard(rec, name));
  }
  return cards.join('');
}
const ALL = () => true;

const list = items => `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
const idList = items => (items.length ? `<ul>${items.map(([id, h]) => `<li data-id="${esc(id)}">${h}</li>`).join('')}</ul>` : '');
const skillLine = s => `<b>${esc(s.name)} ${d20(s.bonus)}</b>${s.expertise ? ' (expertise)' : s.prof ? ' (proficient)' : ''}`;
// A skill in an Other actions list: its line, then what it's for (D24).
const skillNote = s => `${skillLine(s)}: ${esc(SKILLS[s.id].when)}`;
// A glossary entry as the help page words it: the term in bold, then its text.
const rule = term => { const e = glossaryEntry(term); return `<p><b>${esc(e.term)}</b>: ${md(e.text)}</p>`; };
const subsection = (title, html, open) => (html ? `<details class="sub"${open ? ' open' : ''}><summary>${esc(title)}</summary>${html}</details>` : '');

// A feature you choose to use (an action, bonus action or reaction, a limited
// use, a weapon add-on), as opposed to one that just applies. `action: true`
// marks one whose text doesn't start with the action it takes.
function isAction(f) {
  return !!(f.uses || f.addon || f.action) || /^(Action|Bonus action|Reaction|Channel Divinity)\b/.test(f.text ?? '');
}


// The Other actions list for (character, node): [[data-id, html]] blocks.
// `pb` is the node's playbook; turn/other also leaves out what `turn` uses,
// since it is the turn page's Other actions.
function otherActions(ch, node, lib, ctx, v, pb) {
  const used = { ...pb.used };
  let feats = featuresFor(ch, node, lib);
  if (node === 'turn/other') {
    const turn = playbookFor(ch, 'turn', lib, ctx).used;
    for (const k of Object.keys(used)) used[k] = [...used[k], ...turn[k]];
    feats = [...feats, ...featuresFor(ch, 'turn', lib).filter(f => !feats.some(g => g.id === f.id))];
  }
  const has = (kind, id) => used[kind].includes(id);
  const sk = skills(ch, lib);
  const rows = weaponRows(ch, lib);
  const out = [];
  const skillItems = ids => idList(ids.filter(id => sk[id] && !has('skills', id)).map(id => [`skill:${id}`, skillNote(sk[id])]));
  const toolItems = () => (ch.tools ?? []).filter(t => !has('tools', t))
    .map(t => [`tool:${t}`, `<b>${esc(lib.tools[t]?.name ?? t)} ${d20(toolBonus(ch, t, lib) ?? 0)}</b>`]);
  const weaponItems = (list, usage) => idList(list.filter(r => !has('weapons', r.id)).map(r => [`weapon:${r.id}`, md(weaponLine(r, usage(r), ch, lib, v))]));

  switch (node) {
    case 'turn/melee': out.push(weaponItems(rows.filter(r => r.kind === 'melee'), () => 'melee')); break;
    case 'turn/ranged': out.push(weaponItems(rows.filter(r => r.ranged || r.thrown), () => 'ranged')); break;
    case 'turn/other': out.push(idList(STANDARD_ACTIONS.map(([n, t]) => [`action:${slug(n)}`, `<b>${esc(n)}</b>: ${esc(t)}`]))); break;
    case 'defend': {
      const melee = rows.find(r => r.kind === 'melee');
      if (melee && !has('weapons', melee.id)) out.push(idList([[`weapon:${melee.id}`, `Opportunity attack (reaction, when an enemy leaves your reach): ${md(weaponLine(melee, 'melee', ch, lib, v))}`]]));
      break;
    }
    case 'explore': out.push(skillItems(['perception', 'survival'])); break;
    case 'social': out.push(skillItems(['persuasion', 'deception', 'intimidation', 'performance', 'insight'])); break;
    case 'sneak':
      if (!has('skills', 'stealth')) out.push(idList([['skill:stealth', `${skillNote(sk.stealth)}${stealthDisadvantage(ch, lib) ? ' · <b>disadvantage</b> in your armor' : ''}`]]));
      break;
    case 'search': out.push(skillItems(['perception', 'investigation']), idList(toolItems())); break;
    case 'save': {
      const sv = saves(ch, lib);
      out.push(idList(ABILITIES.map(a => [`save:${a}`, `<b>${ABILITY_NAMES[a]} ${d20(sv[a].bonus)}</b>${sv[a].prof ? ' (proficient)' : ''}: ${esc(SAVE_TRIGGERS[a])}`])));
      break;
    }
    case 'check': {
      out.push(ABILITIES.map(a => {
        const these = Object.values(sk).filter(s => s.ability === a && !has('skills', s.id));
        return these.length ? `<h3>${ABILITY_NAMES[a]}</h3>${idList(these.map(s => [`skill:${s.id}`, skillNote(s)]))}` : '';
      }).join(''));
      const tools = toolItems();
      if (tools.length) out.push(`<h3>Tools</h3>${idList(tools)}`);
      break;
    }
    case 'help': out.push(skillItems(['medicine'])); break;
    default:
  }
  // Spells placed on this node that Do this / If… don't cast.
  const spellFilter = {
    'turn/bonus': s => spellPlacement(s).includes('turn/bonus'),
    defend: s => spellPlacement(s).includes('defend'),
    sneak: s => s.name.toLowerCase() === 'pass without trace',
  }[node];
  if (spellFilter) out.push(spellCards(ch, lib, ctx, s => spellFilter(s) && !has('spells', slug(s.name))));
  out.push(feats.filter(f => isAction(f) && !has('features', f.id)).map(f => featureCard(f, ch, lib, ctx, v)).join(''));
  // Ifs past the cap.
  out.push(pb.overflow.map((i, k) => `<div class="card" data-id="if:${k}"><p><b>${md(i.when)}</b> → ${md(i.then)}</p></div>`).join(''));
  return out.join('');
}

function additionalDetails(ch, node, lib, ctx, v, pb) {
  const usedF = new Set(pb.used.features);
  const features = [
    ...activeFeatures(ch, lib).filter(f => usedF.has(f.id) && f.text),
    ...featuresFor(ch, node, lib).filter(f => !isAction(f) && !usedF.has(f.id)),
  ];
  const seen = new Set();
  const featureHtml = features.filter(f => !seen.has(f.id) && seen.add(f.id)).map(f => featureCard(f, ch, lib, ctx, v)).join('');

  const rows = weaponRows(ch, lib);
  const shown = node === 'turn' ? rows : rows.filter(r => pb.used.weapons.includes(r.id));
  // A thrown weapon shows its range, unless it is also the melee weapon.
  const melee = rows.find(r => r.kind === 'melee');
  const usage = node === 'turn/melee' ? () => 'melee' : node === 'turn/ranged' ? () => 'ranged'
    : r => (r.ranged || (r.thrown && r !== melee) ? 'ranged' : 'melee');
  const weaponHtml = shown.length ? list(shown.map(r => md(weaponLine(r, usage(r), ch, lib, v)))) : '';

  const names = node === 'turn/spell' ? [] : characterSpells(ch, lib).filter(n => pb.used.spells.includes(slug(n)));
  const spellHtml = names.map(n => spellCard(findSpell(ctx.spells, n), n)).join('');

  // Rules basics: the character's numbers, and each general rule as its
  // glossary entry, worded exactly as on the help page.
  const rules = [];
  const entries = (...terms) => terms.map(rule);
  switch (node) {
    case 'turn/ranged': rules.push(...entries('Ranged')); break;
    case 'defend':
      if (characterSpells(ch, lib).length) rules.push(...entries('Concentration'), `<p>Your Con save: <b>${d20(saves(ch, lib).con.bonus)}</b>.</p>`);
      break;
    case 'hurt': rules.push(`<p>HP max <b>${hpMax(ch, lib)}</b> · Hit dice <b>${esc(v.hitDice)}</b></p>`, ...entries('Death saving throws', 'Instant death', 'Stabilize')); break;
    case 'explore': rules.push(`<p>Speed <b>${speed(ch, lib)} ft</b> · Passive Perception <b>${passivePerception(ch, lib)}</b></p>`, ...entries('Travel pace')); break;
    case 'search': rules.push(...entries('Help')); break;
    case 'rest': {
      const per = p => activeFeatures(ch, lib).filter(f => f.uses?.per === p).map(f => esc(f.name));
      const sr = per('SR'), lr = per('LR');
      rules.push(...entries('Short rest', 'Long rest', 'Hit dice'));
      if (sr.length) rules.push(`<p>Back after a short rest: ${sr.join(', ')}.</p>`);
      if (lr.length || v.slots) rules.push(`<p>Back after a long rest: ${[...lr, ...(v.slots ? ['spell slots'] : [])].join(', ')}.</p>`);
      break;
    }
    case 'check': rules.push(`<p>Passive Perception <b>${passivePerception(ch, lib)}</b></p>`); break;
    case 'help': rules.push(...entries('Help', 'Stabilize')); break;
    default:
  }
  // The tour's Additional details step shows it, and its first subsection, open.
  const open = ctx.tour?.focus === 'details';
  const subs = [['Your features', featureHtml], ['Weapons', weaponHtml], ['Spells', spellHtml], ['Rules basics', rules.join('')]]
    .filter(([, html]) => html).map(([title, html], i) => subsection(title, html, open && i === 0)).join('');
  return subs ? part('details', `<div class="details"><details class="other"${open ? ' open' : ''}><summary>Additional details</summary>${subs}</details></div>`, ctx) : '';
}


const buttons = links => `<nav class="children"><ul class="buttons">${links.map(([href, label]) => `<li><a class="btn small" href="${esc(href)}">${esc(label)}</a></li>`).join('')}</ul></nav>`;

export function renderNode(ch, node, lib, ctx = {}) {
  const info = NODES[node];
  const v = vars(ch, lib);
  const pb = playbookFor(ch, node, lib, ctx);
  const back = info.parent
    ? { href: `#/${ch.id}/${info.parent}`, label: NODES[info.parent].label }
    : { href: `#/${ch.id}`, label: ch.name };
  let body = `<p class="sub">${esc(ch.name)} · ${esc(classLine(ch, lib))}</p>`;
  if (node === 'defend') {
    const res = resistances(ch, lib);
    body += `<p class="stats">AC <b>${armorClass(ch, lib)}</b>${res.length ? ` · Resistant to ${esc(res.join(', '))}` : ''}</p>`;
  }
  if (pb.notes) body += `<p class="note">${md(pb.notes)}</p>`;
  if (pb.first.length) body += part('first', `<section class="first"><h2>First turn</h2>${list(pb.first.map(md))}</section>`, ctx);
  body += part('do', `<section class="do"><h2>Do this</h2>${pb.do.length ? `<ol>${pb.do.map(s => `<li>${md(s)}</li>`).join('')}</ol>` : '<p class="muted">Nothing here for this character.</p>'}</section>`, ctx);
  if (pb.if.length) body += part('if', `<section class="if"><h2>If…</h2><ul>${pb.if.map(i => `<li><b>${md(i.when)}</b> → ${md(i.then)}</li>`).join('')}</ul></section>`, ctx);

  if (info.children) {
    const visible = new Set(visibleNodes(ch, lib));
    body += part('children', buttons(info.children.filter(c => visible.has(c)).map(c => [`#/${ch.id}/${c}`, NODES[c].label])), ctx);
  }
  if (node === 'turn/spell') {
    const head = v.spellDC ? `<p class="stats">Spell DC <b>${v.spellDC}</b> · Spell attack <b>${v.spellAttack}</b> · Slots ${md(v.slots)}</p>` : '';
    const oath = new Set(oathSpells(ch, lib).map(n => n.toLowerCase()));
    const own = characterSpells(ch, lib).filter(n => !oath.has(n.toLowerCase()));
    const oathCards = oath.size ? spellCards(ch, lib, ctx, ALL, oathSpells(ch, lib)) : '';
    const yours = `<section class="spells"><h2>Your spells</h2>${head}${spellCards(ch, lib, ctx, ALL, own) || (oathCards ? '' : '<p class="muted">No spells.</p>')}</section>`;
    body += part('spells', `<div class="spell-list">${yours}${oathCards ? `<section class="spells"><h2>Always prepared (oath)</h2>${oathCards}</section>` : ''}</div>`, ctx);
  }
  if (info.parent) {
    // turn/* pages list their Other actions inline.
    const more = otherActions(ch, node, lib, ctx, v, pb);
    if (more) body += `<section class="more"><h2>Other actions</h2>${more}</section>`;
  } else if (hasMorePage(node) && otherActions(ch, node, lib, ctx, v, pb)) {
    body += part('more', buttons([[`#/${ch.id}/${node}/${MORE}`, 'Other actions']]), ctx);
  }
  body += additionalDetails(ch, node, lib, ctx, v, pb) + pageEnd(`#/help/${ch.id}`, ctx);
  return page(bar(info.label, back, ctx), body);
}

// #/<char>/<node>/more: the node's Other actions (two taps from home).
export function renderMore(ch, node, lib, ctx = {}) {
  const v = vars(ch, lib);
  const pb = playbookFor(ch, node, lib, ctx);
  const more = otherActions(ch, node, lib, ctx, v, pb);
  const body = `<p class="sub">${esc(ch.name)} · ${esc(NODES[node].label)}</p>`
    + (more || '<p class="muted">Nothing else here for this character.</p>') + pageEnd(`#/help/${ch.id}`, ctx);
  return page(bar('Other actions', { href: `#/${ch.id}/${node}`, label: NODES[node].label }), body);
}
