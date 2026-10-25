// Dropdown menus in the site's style, shared by the student dashboard (index.html) and the tutor page (tutor.html).
// Every <select> on the page (including ones added later) gets a button and a list drawn in the site's colours.
// The real <select> stays in the page, hidden: the page's code keeps reading and setting its value and listening
// for "change" as before, and the button follows along (value, disabled, the "invalid" class, form reset).
const TelaDropdown = (() => {
  const css = `
  .dd { position: relative; display: block; min-width: 0; }
  .dd > select { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0; pointer-events: none; }
  .dd-btn {
    width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 10px; text-align: left;
    font: inherit; font-weight: 500; font-size: 15px; color: var(--ink, #13261e); background: var(--white, #fff);
    border: 1.5px solid var(--line, #dce7e1); border-radius: 10px; padding: 9px 12px; cursor: pointer;
    transition: border-color .15s, box-shadow .15s, background .15s;
  }
  .dd-btn:hover { border-color: var(--green-600, #198754); }
  .dd-btn:focus-visible, .dd.open .dd-btn { outline: none; border-color: var(--green-600, #198754); box-shadow: 0 0 0 4px rgba(25,135,84,.12); }
  .dd-btn.invalid { border-color: #b42318; }
  .dd-btn:disabled { background: var(--green-50, #f2f8f5); color: var(--muted, #5f7369); cursor: not-allowed; border-color: var(--line, #dce7e1); }
  .dd-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .dd-label.placeholder { color: var(--muted, #5f7369); font-weight: 400; }
  .dd-chev { flex: none; color: var(--green-700, #146c43); transition: transform .15s; }
  .dd.open .dd-chev { transform: rotate(180deg); }
  .dd-list {
    position: fixed; z-index: 1000; list-style: none; margin: 0; padding: 6px; overflow-y: auto; overscroll-behavior: contain;
    background: var(--white, #fff); border: 1px solid var(--line, #dce7e1); border-radius: 12px;
    box-shadow: 0 14px 34px rgba(10,61,44,.18), 0 2px 6px rgba(10,61,44,.08); animation: ddIn .12s ease;
    font-family: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
  }
  @keyframes ddIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
  .dd-group {
    padding: 10px 10px 4px; font-size: 11px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; color: var(--muted, #5f7369);
  }
  .dd-group:first-child { padding-top: 4px; }
  .dd-opt {
    display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 8px 10px; border-radius: 8px;
    font-size: 14px; color: var(--ink, #13261e); cursor: pointer;
  }
  .dd-opt.active { background: var(--green-50, #f2f8f5); }
  .dd-opt[aria-selected="true"] { background: var(--green-100, #e3f2ea); color: var(--green-800, #0f5132); font-weight: 600; }
  .dd-opt[aria-disabled="true"] { color: var(--muted, #5f7369); cursor: default; }
  .dd-opt svg { flex: none; color: var(--green-700, #146c43); }`;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  const CHEVRON = `<svg class="dd-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`;
  const TICK = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>`;
  const proto = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, "value");
  const protoIndex = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, "selectedIndex");
  let openDd = null, uid = 0;

  function enhance(select) {
    if (select.closest(".dd") || select.multiple || select.size > 1) return;
    const dd = document.createElement("span");
    dd.className = "dd";
    select.parentNode.insertBefore(dd, select);
    dd.appendChild(select);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "dd-btn";
    btn.setAttribute("aria-haspopup", "listbox");
    btn.setAttribute("aria-expanded", "false");
    dd.appendChild(btn);
    select.tabIndex = -1;
    select.setAttribute("aria-hidden", "true");
    // The button is what people use; it takes the select's name for screen readers.
    const label = select.getAttribute("aria-label") || (select.labels && select.labels[0] ? select.labels[0].firstChild.textContent.trim() : "");
    if (label) btn.setAttribute("aria-label", label);

    const sync = () => {
      const opt = select.options[select.selectedIndex];
      const text = opt ? opt.textContent : "";
      btn.innerHTML = `<span class="dd-label${!opt || opt.value === "" ? " placeholder" : ""}"></span>${CHEVRON}`;
      btn.firstChild.textContent = text;
      if (label) btn.setAttribute("aria-label", `${label}: ${text}`);
      btn.disabled = select.disabled;
      btn.classList.toggle("invalid", select.classList.contains("invalid"));
    };
    // Setting the value from code doesn't fire any event, so the button is told directly.
    Object.defineProperty(select, "value", { configurable: true, get() { return proto.get.call(this); }, set(v) { proto.set.call(this, v); sync(); } });
    Object.defineProperty(select, "selectedIndex", { configurable: true, get() { return protoIndex.get.call(this); }, set(v) { protoIndex.set.call(this, v); sync(); } });
    select.addEventListener("change", sync);
    // Options filled in later, disabled, or marked invalid by the page's form checks.
    new MutationObserver(sync).observe(select, { childList: true, subtree: true, attributes: true, attributeFilter: ["class", "disabled"] });
    if (select.form) select.form.addEventListener("reset", () => setTimeout(sync));
    // Clicking the select's label, or the page focusing the select, moves to the button.
    select.addEventListener("focus", () => btn.focus());
    select.focus = options => btn.focus(options);
    btn.addEventListener("click", () => openDd && openDd.dd === dd ? close() : open(dd, select, btn));
    btn.addEventListener("keydown", e => {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) { e.preventDefault(); open(dd, select, btn); }
    });
    sync();
  }

  function open(dd, select, btn) {
    close();
    const list = document.createElement("ul");
    list.className = "dd-list";
    list.id = "dd-list-" + (++uid);
    list.setAttribute("role", "listbox");
    if (btn.getAttribute("aria-label")) list.setAttribute("aria-label", btn.getAttribute("aria-label"));
    let html = "";
    [...select.children].forEach(node => {
      if (node.tagName === "OPTGROUP") {
        html += `<li class="dd-group" role="presentation"></li>`;
        [...node.children].forEach(o => { html += `<li class="dd-opt" role="option"></li>`; });
      } else if (node.tagName === "OPTION") html += `<li class="dd-opt" role="option"></li>`;
    });
    list.innerHTML = html;
    // Fill in the text afterwards, so option names never get read as HTML.
    const opts = [...select.options], items = [...list.querySelectorAll(".dd-opt")], groups = [...list.querySelectorAll(".dd-group")];
    [...select.querySelectorAll("optgroup")].forEach((g, i) => { groups[i].textContent = g.label; });
    items.forEach((li, i) => {
      li.id = list.id + "-" + i;
      li.textContent = opts[i].textContent;
      li.dataset.index = i;
      if (opts[i].disabled) li.setAttribute("aria-disabled", "true");
      if (i === select.selectedIndex) { li.setAttribute("aria-selected", "true"); li.insertAdjacentHTML("beforeend", TICK); }
    });
    document.body.appendChild(list);
    place(list, btn);
    dd.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-controls", list.id);
    openDd = { dd, select, btn, list, items, active: -1, typed: "", typedAt: 0 };
    setActive(Math.max(0, select.selectedIndex), true);

    list.addEventListener("mousemove", e => { const li = e.target.closest(".dd-opt"); if (li) setActive(+li.dataset.index); });
    list.addEventListener("mousedown", e => e.preventDefault());   // keep focus on the button
    list.addEventListener("click", e => { const li = e.target.closest(".dd-opt"); if (li) choose(+li.dataset.index); });
  }

  // Under the button, or above it when there isn't room below; as wide as the button (or its longest option).
  function place(list, btn) {
    const r = btn.getBoundingClientRect(), gap = 6, margin = 12;
    const below = window.innerHeight - r.bottom - gap - margin, above = r.top - gap - margin;
    const up = below < 220 && above > below;
    list.style.maxHeight = Math.min(320, up ? above : below) + "px";
    list.style.minWidth = r.width + "px";
    list.style.maxWidth = Math.max(r.width, Math.min(360, window.innerWidth - 2 * margin)) + "px";
    const left = Math.min(r.left, window.innerWidth - margin - list.offsetWidth);
    list.style.left = Math.max(margin, left) + "px";
    if (up) list.style.top = (r.top - gap - list.offsetHeight) + "px";
    else list.style.top = (r.bottom + gap) + "px";
  }

  function setActive(i, center) {
    const o = openDd;
    if (!o || i < 0 || i >= o.items.length) return;
    if (o.items[o.active]) o.items[o.active].classList.remove("active");
    o.active = i;
    o.items[i].classList.add("active");
    o.btn.setAttribute("aria-activedescendant", o.items[i].id);
    const li = o.items[i], list = o.list;
    if (center) list.scrollTop = li.offsetTop - list.clientHeight / 2 + li.offsetHeight / 2;
    else if (li.offsetTop < list.scrollTop) list.scrollTop = li.offsetTop - 6;
    else if (li.offsetTop + li.offsetHeight > list.scrollTop + list.clientHeight) list.scrollTop = li.offsetTop + li.offsetHeight - list.clientHeight + 6;
  }
  // The next option (in direction step) that isn't disabled.
  function step(from, dir) {
    const items = openDd.items;
    for (let i = from + dir; i >= 0 && i < items.length; i += dir) if (!items[i].hasAttribute("aria-disabled")) return i;
    return from;
  }
  function choose(i) {
    const o = openDd;
    if (!o || o.items[i].hasAttribute("aria-disabled")) return;
    const changed = o.select.selectedIndex !== i;
    close();
    o.select.selectedIndex = i;
    if (changed) {
      o.select.dispatchEvent(new Event("input", { bubbles: true }));
      o.select.dispatchEvent(new Event("change", { bubbles: true }));
    }
    if (o.btn.isConnected) o.btn.focus();
  }
  function close() {
    if (!openDd) return;
    const o = openDd;
    openDd = null;
    o.list.remove();
    o.dd.classList.remove("open");
    o.btn.setAttribute("aria-expanded", "false");
    o.btn.removeAttribute("aria-activedescendant");
    o.btn.removeAttribute("aria-controls");
  }

  // Keys while a list is open. Escape only closes the list (not the panel or window behind it).
  document.addEventListener("keydown", e => {
    const o = openDd;
    if (!o) return;
    const last = o.items.length - 1;
    if (e.key === "Escape") { e.preventDefault(); e.stopImmediatePropagation(); close(); o.btn.focus(); }
    else if (e.key === "ArrowDown") { e.preventDefault(); setActive(step(o.active, 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive(step(o.active, -1)); }
    else if (e.key === "Home") { e.preventDefault(); setActive(step(-1, 1)); }
    else if (e.key === "End") { e.preventDefault(); setActive(step(last + 1, -1)); }
    else if (e.key === "PageDown") { e.preventDefault(); setActive(Math.min(last, o.active + 8)); }
    else if (e.key === "PageUp") { e.preventDefault(); setActive(Math.max(0, o.active - 8)); }
    else if (e.key === "Enter" || (e.key === " " && !o.typed)) { e.preventDefault(); choose(o.active); }
    else if (e.key === "Tab") close();
    else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      // Typing jumps to the first option starting with what's been typed.
      e.preventDefault();
      const now = Date.now();
      o.typed = (now - o.typedAt > 800 ? "" : o.typed) + e.key.toLowerCase();
      o.typedAt = now;
      const i = o.items.findIndex(li => li.textContent.trim().toLowerCase().startsWith(o.typed));
      if (i >= 0) setActive(i, true);
    }
  }, true);
  document.addEventListener("mousedown", e => { if (openDd && !openDd.list.contains(e.target) && !openDd.btn.contains(e.target)) close(); }, true);
  window.addEventListener("resize", close);
  document.addEventListener("scroll", e => { if (openDd && !openDd.list.contains(e.target)) close(); }, true);

  // Selects already on the page, and ones the page adds later (e.g. when a panel is redrawn).
  const enhanceAll = root => root.querySelectorAll && (root.tagName === "SELECT" ? [root] : root.querySelectorAll("select")).forEach(enhance);
  enhanceAll(document.body);
  new MutationObserver(records => {
    if (openDd && !openDd.btn.isConnected) close();
    records.forEach(r => r.addedNodes.forEach(n => n.nodeType === 1 && enhanceAll(n)));
  }).observe(document.body, { childList: true, subtree: true });

  return { enhance, close };
})();
