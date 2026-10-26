// (character, node) → HTML string. Pure: no DOM access.
import { GROUPS, NODES } from '../rules/tree.js';
import {
  ABILITIES, ABILITY_NAMES, SKILLS, SAVE_TRIGGERS, STANDARD_ACTIONS, DEATH_SAVES, TRAVEL_PACE, RESTS,
  HELP_RULES, CONCENTRATION,
} from '../rules/common.js';
import { featuresFor, activeFeatures, visibleNodes, characterSpells, oathSpells, findSpell, spellLine, spellPlacement } from './features.js';
import {
  vars, hpMax, armorClass, speed, initiative, passivePerception, profBonus, signed, saves, skills,
  weaponRows, toolBonus, resistances, stealthDisadvantage, spellSlots,
} from './engine.js';
import { playbookFor, roleFor, weaponLine, resolveText } from './playbook.js';

export const ATTRIBUTION = 'This work includes material taken from the System Reference Document 5.1 ("SRD 5.1") by Wizards of the Coast LLC, available at https://dnd.wizards.com/resources/systems-reference-document. The SRD 5.1 is licensed under the Creative Commons Attribution 4.0 International License, available at https://creativecommons.org/licenses/by/4.0/legalcode.';

export const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// Escape, then turn **bold** into <b>.
export const md = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
const linkify = s => s.replace(/https:\/\/[^\s,]+[^\s,.]/g, u => `<a href="${u}" rel="noopener">${u}</a>`);

// What a page shows before Other options, tags stripped (the turn page should
// fit about one phone screen; tools/check.js reports this length).
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

function bar(title, back) {
  const link = back ? `<a class="back" href="${esc(back.href)}">‹ ${esc(back.label)}</a>` : '<span class="back"></span>';
  return `<header class="bar">${link}<h1>${esc(title)}</h1><span class="back"></span></header>`;
}

const page = (barHtml, body) => `${barHtml}<main>${body}</main>${renderFooter()}`;

function classLine(ch, lib) {
  const cls = lib.classes[ch.class];
  const sub = cls?.subclasses.find(s => s.id === ch.subclass);
  const role = roleFor(ch, lib);
  return `${cls?.name ?? ch.class} ${ch.level}${sub ? ` (${sub.name})` : ''}${role ? ` · ${role.label}` : ''}`;
}

// Feature text with whatever vars resolve; anything unresolved reads "(not set)".
function featureText(text, ch, lib, ctx, v) {
  const full = resolveText(text, ch, lib, ctx, v);
  if (full != null) return full;
  return String(text).replace(/\{([^}]+)\}/g, (m) => resolveText(m, ch, lib, ctx, v) ?? '(not set)');
}

function usesText(f, v) {
  if (!f.uses) return '';
  const n = String(f.uses.n).replace(/\{([^}]+)\}/g, (m, k) => v[k] ?? '?');
  return `${n}/${f.uses.per}`;
}

function featureCard(f, ch, lib, ctx, v) {
  const uses = usesText(f, v);
  return `<div class="card"><h3>${esc(f.name)}${uses ? ` <span class="uses">${esc(uses)}</span>` : ''}</h3>${f.text ? `<p>${md(featureText(f.text, ch, lib, ctx, v))}</p>` : ''}</div>`;
}

export function renderLanding(characters, lib, ctx = {}) {
  const items = characters.map(ch =>
    `<li><a class="btn" href="#/${esc(ch.id)}"><b>${esc(ch.name)}</b><span>${esc(classLine(ch, lib))}</span></a></li>`).join('');
  const note = ctx.fallback ? '<p class="muted">Showing the built-in example characters (no private character file found).</p>' : '';
  return page(bar('Characters'), `${note}<ul class="buttons">${items}</ul>`);
}

export function renderHome(ch, lib, ctx = {}) {
  const v = vars(ch, lib);
  const role = roleFor(ch, lib);
  const stats = [
    `HP <b>${hpMax(ch, lib)}</b>`, `AC <b>${armorClass(ch, lib)}</b>`, `Speed <b>${speed(ch, lib)} ft</b>`,
    `Init <b>${signed(initiative(ch, lib))}</b>`, `Passive Perc <b>${passivePerception(ch, lib)}</b>`, `Prof <b>${signed(profBonus(ch.level))}</b>`,
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
    + (role ? `<p class="job"><b>Your job:</b> ${esc(role.job)}</p>` : '')
    + `<p class="stats">${stats}</p><p class="stats">${uses.join(' · ')}</p>${casting}${groups}`;
  return page(bar(ch.name, { href: '#/', label: 'Characters' }), body);
}

// ---- node bodies ----

function spellCards(ch, lib, ctx, filter = () => true, names = characterSpells(ch, lib)) {
  const cards = [];
  for (const name of names) {
    const rec = findSpell(ctx.spells, name);
    if (rec && !filter(rec)) continue;
    if (!rec && filter !== ALL) continue;
    cards.push(rec
      ? `<div class="card spell"><h3>${esc(rec.name)}</h3><p class="line">${esc(spellLine(rec))}</p>`
        + `<details><summary>Full text</summary>${(rec.details ?? []).map(p => `<p>${esc(p)}</p>`).join('')}</details></div>`
      : `<div class="card spell"><h3>${esc(name)}</h3><p class="muted">Spell text not loaded.</p></div>`);
  }
  return cards.join('');
}
const ALL = () => true;

const list = items => `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
const skillLine = s => `<b>${esc(s.name)} ${signed(s.bonus)}</b>${s.expertise ? ' (expertise)' : s.prof ? ' (proficient)' : ''}`;

function nodeExtras(ch, node, lib, ctx, v) {
  const sk = skills(ch, lib);
  const rows = weaponRows(ch, lib);
  const out = [];
  switch (node) {
    case 'turn':
      out.push(list(rows.map(r => md(weaponLine(r, r.ranged ? 'ranged' : 'melee', ch, lib, v)))));
      break;
    case 'turn/melee':
      out.push(list(rows.filter(r => r.kind === 'melee').map(r => md(weaponLine(r, 'melee', ch, lib, v)))));
      break;
    case 'turn/ranged':
      out.push(list(rows.filter(r => r.ranged || r.thrown).map(r => md(weaponLine(r, 'ranged', ch, lib, v)))));
      out.push('<p>Disadvantage when an enemy is within 5 ft of you, or beyond the first range number.</p>');
      break;
    case 'turn/bonus':
      out.push(spellCards(ch, lib, ctx, s => spellPlacement(s).includes('turn/bonus')));
      break;
    case 'turn/other':
      out.push(list(STANDARD_ACTIONS.map(([n, t]) => `<b>${esc(n)}</b>: ${esc(t)}`)));
      break;
    case 'defend': {
      const melee = rows.find(r => r.kind === 'melee');
      if (melee) out.push(`<p>Opportunity attack (reaction, when an enemy leaves your reach): ${md(weaponLine(melee, 'melee', ch, lib, v))}</p>`);
      if (characterSpells(ch, lib).length) out.push(`<p>${esc(CONCENTRATION)} Your Con save: <b>${signed(saves(ch, lib).con.bonus)}</b>.</p>`);
      out.push(spellCards(ch, lib, ctx, s => spellPlacement(s).includes('defend')));
      break;
    }
    case 'hurt':
      out.push(`<p>HP max <b>${hpMax(ch, lib)}</b> · Hit dice <b>${esc(v.hitDice)}</b></p>`, list(DEATH_SAVES.map(esc)));
      break;
    case 'explore':
      out.push(`<p>Speed <b>${speed(ch, lib)} ft</b> · ${skillLine(sk.perception)} · ${skillLine(sk.survival)} · Passive Perception <b>${passivePerception(ch, lib)}</b></p>`, list(TRAVEL_PACE.map(esc)));
      break;
    case 'social':
      out.push(list(['persuasion', 'deception', 'intimidation', 'performance', 'insight'].map(id => skillLine(sk[id]))));
      break;
    case 'sneak':
      out.push(`<p>${skillLine(sk.stealth)}${stealthDisadvantage(ch, lib) ? ' · <b>disadvantage</b> in your armor' : ''}</p>`);
      out.push(spellCards(ch, lib, ctx, s => s.name.toLowerCase() === 'pass without trace'));
      break;
    case 'search': {
      const tools = (ch.tools ?? []).map(t => `<b>${esc(lib.tools[t]?.name ?? t)} ${signed(toolBonus(ch, t, lib) ?? 0)}</b>`);
      out.push(list([skillLine(sk.perception), skillLine(sk.investigation), ...tools]), `<p>${esc(HELP_RULES[0])}</p>`);
      break;
    }
    case 'rest': {
      const per = p => activeFeatures(ch, lib).filter(f => f.uses?.per === p).map(f => esc(f.name));
      const sr = per('SR'), lr = per('LR');
      out.push(list(RESTS.map(esc)));
      if (sr.length) out.push(`<p>Back after a short rest: ${sr.join(', ')}.</p>`);
      if (lr.length || v.slots) out.push(`<p>Back after a long rest: ${[...lr, ...(v.slots ? ['spell slots'] : [])].join(', ')}.</p>`);
      break;
    }
    case 'save': {
      const sv = saves(ch, lib);
      out.push(list(ABILITIES.map(a => `<b>${ABILITY_NAMES[a]} ${signed(sv[a].bonus)}</b>${sv[a].prof ? ' (proficient)' : ''}: ${esc(SAVE_TRIGGERS[a])}`)));
      break;
    }
    case 'check': {
      const byAbility = ABILITIES.map(a => {
        const these = Object.values(sk).filter(s => s.ability === a);
        if (!these.length) return '';
        return `<h3>${ABILITY_NAMES[a]}</h3>${list(these.map(s => `${skillLine(s)}: ${esc(SKILLS[s.id].when)}`))}`;
      }).join('');
      const tools = (ch.tools ?? []).map(t => `<b>${esc(lib.tools[t]?.name ?? t)} ${signed(toolBonus(ch, t, lib) ?? 0)}</b>`);
      out.push(byAbility, tools.length ? `<h3>Tools</h3>${list(tools)}` : '', `<p>Passive Perception <b>${passivePerception(ch, lib)}</b></p>`);
      break;
    }
    case 'help':
      out.push(list(HELP_RULES.map(esc)), `<p>${skillLine(sk.medicine)}</p>`);
      break;
    default:
  }
  return out.join('');
}

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
  if (pb.first.length) body += `<section class="first"><h2>First turn</h2>${list(pb.first.map(md))}</section>`;
  body += `<section class="do"><h2>Do this</h2>${pb.do.length ? `<ol>${pb.do.map(s => `<li>${md(s)}</li>`).join('')}</ol>` : '<p class="muted">Nothing here for this character.</p>'}</section>`;
  if (pb.if.length) body += `<section class="if"><h2>If…</h2><ul>${pb.if.map(i => `<li><b>${md(i.when)}</b> → ${md(i.then)}</li>`).join('')}</ul></section>`;

  if (info.children) {
    const visible = new Set(visibleNodes(ch, lib));
    const links = info.children.filter(c => visible.has(c))
      .map(c => `<li><a class="btn small" href="#/${esc(ch.id)}/${c}">${esc(NODES[c].label)}</a></li>`).join('');
    body += `<nav class="children"><ul class="buttons">${links}</ul></nav>`;
  }
  if (node === 'turn/spell') {
    const head = v.spellDC ? `<p class="stats">Spell DC <b>${v.spellDC}</b> · Spell attack <b>${v.spellAttack}</b> · Slots ${md(v.slots)}</p>` : '';
    const oath = new Set(oathSpells(ch, lib).map(n => n.toLowerCase()));
    const own = characterSpells(ch, lib).filter(n => !oath.has(n.toLowerCase()));
    const oathCards = oath.size ? spellCards(ch, lib, ctx, ALL, oathSpells(ch, lib)) : '';
    body += `<section class="spells"><h2>Your spells</h2>${head}${spellCards(ch, lib, ctx, ALL, own) || (oathCards ? '' : '<p class="muted">No spells.</p>')}</section>`;
    if (oathCards) body += `<section class="spells"><h2>Always prepared (oath)</h2>${oathCards}</section>`;
  }

  const cards = featuresFor(ch, node, lib).map(f => featureCard(f, ch, lib, ctx, v)).join('');
  body += `<details class="other"><summary>Other options</summary>${nodeExtras(ch, node, lib, ctx, v)}${cards}</details>`;
  return page(bar(info.label, back), body);
}
