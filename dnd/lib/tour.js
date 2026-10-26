// #/tour/<n>: step n of the "How this page works" tour → HTML string. Pure.
// Each step is the example character's real page with one section focused
// and a speech bubble directly after it (render.js places it by data-tour).
import TOUR from '../rules/tour.js';
import { renderHome, renderNode, md } from './render.js';

// "3" → 3; anything that isn't a step number (0, 12, "x", "2.5") → 1.
export function tourStep(raw) {
  const n = Number(raw);
  return Number.isInteger(n) && n >= 1 && n <= TOUR.length ? n : 1;
}

// Next/Back replace the history entry (data-tour-step); Skip/Done leave the
// tour (data-tour-exit). app.js handles both.
function bubble(n) {
  const last = n === TOUR.length;
  const btns = [
    n > 1 ? `<a class="tbtn" href="#/tour/${n - 1}" data-tour-step>Back</a>` : '',
    last ? '<a class="tbtn next" href="#/" data-tour-exit>Done</a>' : `<a class="tbtn next" href="#/tour/${n + 1}" data-tour-step>Next</a>`,
    last ? '' : '<a class="tbtn skip" href="#/" data-tour-exit>Skip tour</a>',
  ].join('');
  return `<aside class="bubble" aria-live="polite"><p class="count">${n} / ${TOUR.length}</p><p>${md(TOUR[n - 1].text)}</p><nav class="tour-nav">${btns}</nav></aside>`;
}

export function renderTour(raw, ch, lib, ctx = {}) {
  const n = tourStep(raw);
  const { page, focus } = TOUR[n - 1];
  const c = { ...ctx, tour: { focus, bubble: bubble(n) } };
  const html = page === 'home' ? renderHome(ch, lib, c) : renderNode(ch, page, lib, c);
  return `<div class="touring">${html}</div>`;
}
