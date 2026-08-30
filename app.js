(function () {
  "use strict";

  const SPELLS = window.SPELLS || [];
  const LISTS = window.SPELL_LISTS || [{ name: "All spells", spells: null }];
  const app = document.getElementById("app");
  const searchState = {}; // listIndex -> last query, so Back keeps your search
  let keyHandler = null;

  // ---------- helpers ----------
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function levelLabel(level) {
    if (level === 0) return "Cantrip";
    const suf = level === 1 ? "st" : level === 2 ? "nd" : level === 3 ? "rd" : "th";
    return level + suf + " level";
  }

  function components(c) {
    const parts = [];
    if (c.v) parts.push("V");
    if (c.s) parts.push("S");
    if (c.m) parts.push("M" + (c.material ? " (" + c.material + ")" : ""));
    return parts.join(", ") || "—";
  }

  function resolveList(listIndex) {
    const list = LISTS[listIndex];
    if (!list) return [];
    if (!list.spells) return SPELLS;
    const byName = new Map(SPELLS.map((s) => [s.name.toLowerCase(), s]));
    const found = [];
    list.spells.forEach((n) => {
      const s = byName.get(String(n).trim().toLowerCase());
      if (s) found.push(s);
      else console.warn('Spell not found in spells.js: "' + n + '"');
    });
    // same level -> name ordering as the full list
    return found.sort((a, b) => a.level - b.level || a.name.localeCompare(b.name));
  }

  function filter(spells, q) {
    q = (q || "").trim().toLowerCase();
    if (!q) return spells;
    return spells.filter((s) => s.name.toLowerCase().includes(q));
  }

  // ---------- routing ----------
  // #/                     -> list picker
  // #/list/<i>             -> spell list i with search
  // #/list/<i>/spell/<id>  -> one spell, swipe/arrow to neighbours within list i
  function parseHash() {
    const m = /^#\/list\/(\d+)(?:\/spell\/(\d+))?$/.exec(location.hash);
    if (!m) return { view: "picker" };
    const list = +m[1];
    if (!LISTS[list]) return { view: "picker" };
    if (m[2] === undefined) return { view: "list", list };
    return { view: "spell", list, spell: +m[2] };
  }

  function go(hash) { location.hash = hash; }

  // ---------- views ----------
  function renderPicker() {
    document.title = "Spells";
    app.innerHTML =
      '<header class="bar"><h1>Spell lists</h1></header>' +
      '<ul class="menu">' +
      LISTS.map((l, i) =>
        '<li><a href="#/list/' + i + '">' + esc(l.name) +
        '<span class="count">' + resolveList(i).length + "</span></a></li>").join("") +
      "</ul>";
  }

  function renderList(listIndex) {
    const list = LISTS[listIndex];
    const spells = resolveList(listIndex);
    const q = searchState[listIndex] || "";
    document.title = list.name;
    app.innerHTML =
      '<header class="bar">' +
      '<a class="back" href="#/">&#8249; Lists</a>' +
      "<h1>" + esc(list.name) + "</h1>" +
      "</header>" +
      '<div class="search"><input id="q" type="search" placeholder="Search spells…" ' +
      'autocomplete="off" value="' + esc(q) + '"></div>' +
      '<ul class="menu" id="results"></ul>';
    const input = document.getElementById("q");
    const results = document.getElementById("results");

    function draw() {
      const shown = filter(spells, input.value);
      searchState[listIndex] = input.value;
      results.innerHTML = shown.length
        ? shown.map((s) =>
            '<li><a href="#/list/' + listIndex + "/spell/" + s.id + '">' +
            '<span class="name">' + esc(s.name) + "</span>" +
            '<span class="meta">' + esc(levelLabel(s.level)) + " · " + esc(s.school) + "</span>" +
            "</a></li>").join("")
        : '<li class="empty">No spells match.</li>';
    }
    input.addEventListener("input", draw);
    draw();
  }

  function renderSpell(listIndex, spellId) {
    const spells = resolveList(listIndex);
    const pos = spells.findIndex((s) => s.id === spellId);
    if (pos < 0) { go("#/list/" + listIndex); return; }
    const s = spells[pos];
    const prev = pos > 0 ? spells[pos - 1] : null;
    const next = pos < spells.length - 1 ? spells[pos + 1] : null;
    const link = (sp) => "#/list/" + listIndex + "/spell/" + sp.id;
    document.title = s.name;

    const tags = [];
    if (s.ritual) tags.push("Ritual");
    if (s.concentration) tags.push("Concentration");

    const row = (k, v) => (v ? "<dt>" + esc(k) + "</dt><dd>" + esc(v) + "</dd>" : "");

    app.innerHTML =
      '<header class="bar">' +
      '<a class="back" href="#/list/' + listIndex + '">&#8249; ' + esc(LISTS[listIndex].name) + "</a>" +
      '<span class="pos">' + (pos + 1) + " / " + spells.length + "</span>" +
      "</header>" +
      '<article class="spell" id="spell">' +
      "<h1>" + esc(s.name) + "</h1>" +
      '<p class="sub">' + esc(levelLabel(s.level)) + " " + esc(s.school) +
      (tags.length ? ' <span class="tags">' + tags.map(esc).join(" · ") + "</span>" : "") + "</p>" +
      "<dl>" +
      row("Casting time", s.castingTime) +
      row("Range", (s.range || "") + (s.area ? " (" + s.area + ")" : "")) +
      row("Components", components(s.components)) +
      row("Duration", s.duration) +
      row("Attack / Save", [s.attack, s.save].filter(Boolean).join(" / ")) +
      row("Effect", s.effect) +
      "</dl>" +
      s.details.map((p) => "<p>" + esc(p) + "</p>").join("") +
      (s.extra ? "<pre>" + esc(s.extra) + "</pre>" : "") +
      '<p class="source">' + esc(s.source) + "</p>" +
      "</article>" +
      '<nav class="pager">' +
      (prev ? '<a href="' + link(prev) + '">&#8249; ' + esc(prev.name) + "</a>" : "<span></span>") +
      (next ? '<a href="' + link(next) + '">' + esc(next.name) + " &#8250;</a>" : "<span></span>") +
      "</nav>";

    // swipe left/right on the spell body
    let x0 = null, y0 = null;
    const el = document.getElementById("spell");
    el.addEventListener("touchstart", (e) => {
      x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
    }, { passive: true });
    el.addEventListener("touchend", (e) => {
      if (x0 == null) return;
      const dx = e.changedTouches[0].clientX - x0;
      const dy = e.changedTouches[0].clientY - y0;
      x0 = y0 = null;
      if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return; // too short or mostly vertical
      if (dx < 0 && next) go(link(next));
      if (dx > 0 && prev) go(link(prev));
    }, { passive: true });

    // keyboard for desktop
    keyHandler = (e) => {
      if (e.key === "ArrowRight" && next) go(link(next));
      else if (e.key === "ArrowLeft" && prev) go(link(prev));
      else if (e.key === "Escape") go("#/list/" + listIndex);
    };
  }

  document.addEventListener("keydown", (e) => { if (keyHandler) keyHandler(e); });

  function render() {
    keyHandler = null;
    const r = parseHash();
    if (r.view === "picker") renderPicker();
    else if (r.view === "list") renderList(r.list);
    else renderSpell(r.list, r.spell);
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", render);
  render();
})();
