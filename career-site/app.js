(() => {
  const D = window.CAREER;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Hero
  $("#hero-headline").innerHTML = esc(D.profile.headline).replace("new-logo engines", "<em>new-logo engines</em>");
  $("#hero-summary").textContent = D.profile.summary;
  $("#hero-stats").innerHTML = D.heroStats
    .map((s) => `<div class="stat reveal"><dd data-count="${s.value}" data-prefix="${esc(s.prefix || "")}" data-suffix="${esc(s.suffix || "")}">${esc(s.prefix || "")}${s.value}${esc(s.suffix || "")}</dd><dt>${esc(s.label)}</dt></div>`)
    .join("");

  // Trajectory
  const MAX = 160;
  const chart = $("#traj-chart");
  chart.style.setProperty("--target", 100 / MAX);
  chart.innerHTML = D.trajectory
    .map((t) => {
      const peak = t.value === Math.max(...D.trajectory.map((x) => x.value || 0));
      const h = t.value ? (t.value / MAX) * 100 : 38;
      return `<button class="traj-bar ${peak ? "peak" : ""} ${t.value && !t.projected ? "" : "tbc"}" role="listitem" data-year="${t.year}" aria-label="${t.year}: ${esc(t.label)} ${esc(t.note)}">
        <span class="traj-note">${esc(t.note)}</span>
        <span class="traj-val">${esc(t.label)}</span>
        <span class="fill" data-h="${h}"></span>
      </button>`;
    })
    .join("");
  chart.insertAdjacentHTML("afterend", `<div class="traj-labels">${D.trajectory.map((t) => `<span>${t.year}</span>`).join("")}</div>`);
  chart.querySelectorAll(".traj-bar").forEach((b) =>
    b.addEventListener("click", () => {
      select(D.years.findIndex((y) => y.year === +b.dataset.year));
      $("#career").scrollIntoView({ behavior: "smooth" });
    })
  );

  // Career explorer
  const tabs = $("#year-tabs");
  tabs.innerHTML = D.years
    .map((y, i) => `<button class="year-tab" role="tab" id="tab-${y.year}" aria-controls="year-panel" data-i="${i}"><span class="y">${y.year}</span><span class="c">${esc(y.company)}</span></button>`)
    .join("");
  tabs.addEventListener("click", (e) => {
    const t = e.target.closest(".year-tab");
    if (t) select(+t.dataset.i);
  });
  tabs.addEventListener("keydown", (e) => {
    if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
    e.preventDefault();
    select(current + (e.key === "ArrowRight" ? 1 : -1), true);
  });
  $("#prev-year").onclick = () => select(current - 1);
  $("#next-year").onclick = () => select(current + 1);

  const renderChart = (c) => {
    if (!c) return "";
    const max = Math.max(160, ...c.bars.map((b) => b.value));
    return `<div class="card mini-chart"><h4>${esc(c.title)}</h4>${c.bars
      .map(
        (b) => `<div class="hbar"><span class="lbl">${esc(b.label)}</span><span class="track" style="--target-pos:${(100 / max) * 100}%"><span class="bar ${b.partial ? "partial" : ""} ${b.muted ? "muted" : ""}" data-w="${(b.value / max) * 100}"></span></span><span class="val">${b.value}${esc(c.unit)}</span></div>`
      )
      .join("")}</div>`;
  };

  let current = 0;
  function select(i, focus) {
    if (i < 0 || i >= D.years.length) return;
    current = i;
    const y = D.years[i];
    tabs.querySelectorAll(".year-tab").forEach((t, j) => {
      t.setAttribute("aria-selected", j === i);
      t.tabIndex = j === i ? 0 : -1;
    });
    if (focus) tabs.children[i].focus();
    const panel = $("#year-panel");
    panel.setAttribute("aria-labelledby", `tab-${y.year}`);
    panel.classList.remove("anim");
    void panel.offsetWidth;
    panel.classList.add("anim");
    panel.innerHTML = `
      <div class="card yp-left">
        <div class="yp-meta"><span class="chip accent">${y.year}</span><span class="chip">${esc(y.period)}</span><span class="chip">${esc(y.theme)}</span></div>
        <h3 class="yp-role">${esc(y.role)}</h3>
        <div class="yp-company">${esc(y.company)}</div>
        <p class="yp-context">${esc(y.context)}</p>
        <div class="yp-headline"><div class="v">${esc(y.headline.value)}</div><div class="l">${esc(y.headline.label)}</div></div>
        ${y.next ? `<div class="yp-next">↳ ${esc(y.next)}</div>` : ""}
      </div>
      <div class="yp-right">
        <div class="metrics">${y.metrics
          .map((m) => `<div class="metric"><div class="v ">${esc(m.value)}</div><div class="l">${esc(m.label)}</div>${m.note ? `<div class="n">${esc(m.note)}</div>` : ""}</div>`)
          .join("")}</div>
        ${renderChart(y.chart)}
        <div class="card wins"><h4>Key results &amp; responsibilities</h4><ul>${y.wins.map((w) => `<li>${esc(w)}</li>`).join("")}</ul>
          <div class="skills">${y.skills.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div></div>
      </div>`;
    requestAnimationFrame(() => panel.querySelectorAll(".bar").forEach((b) => (b.style.width = b.dataset.w + "%")));
    $("#prev-year").disabled = i === 0;
    $("#next-year").disabled = i === D.years.length - 1;
    $("#year-pos").textContent = `${String(i + 1).padStart(2, "0")} / ${String(D.years.length).padStart(2, "0")}`;
    history.replaceState(null, "", `#${y.year}`);
  }
  const fromHash = D.years.findIndex((y) => `#${y.year}` === location.hash);
  select(fromHash >= 0 ? fromHash : D.years.length - 2);
  if (fromHash >= 0) setTimeout(() => $("#career").scrollIntoView(), 50);

  // Approach
  $("#principles").innerHTML = D.principles
    .map((p) => `<div class="principle reveal"><span class="k">${p.k}</span><h3>${esc(p.title)}</h3><p>${esc(p.body)}</p></div>`)
    .join("");
  $("#education").innerHTML = D.education.map((e) => `<li>${esc(e)}</li>`).join("");
  $("#certs").innerHTML = D.certifications.map((e) => `<li>${esc(e)}</li>`).join("");

  // Why Cognition
  const why = $("#why-body");
  why.textContent = D.whyCognition.body;
  $("#why-checks").innerHTML = [
    "Sells technical platforms to engineering leaders",
    "Built digital native, new-logo teams in ANZ",
    "Founded multiple new teams that overachieved in quick succession",
    "Rebuilt a team of 8 (6 new) and still tracking 75%+",
    "Developed talent: 4 of 6 AEs promoted",
    "152% · President's Club · Top 5 of 150 globally",
  ]
    .map((c) => `<li><b>✓</b>${esc(c)}</li>`)
    .join("");

  // Contact
  const p = D.profile;
  $("#contact-links").innerHTML = [
    `<a href="mailto:${esc(p.email)}">${esc(p.email)}</a>`,
    p.linkedin ? `<a href="${esc(p.linkedin)}" target="_blank" rel="noopener">LinkedIn ↗</a>` : "",
    `<a href="Oliver-Godwin-CV.pdf" download>Download CV ↓</a>`,
    `<span>${esc(p.location)}</span>`,
  ].join("");
  $("#yr").textContent = new Date().getFullYear();

  // Reveal + count-up + trajectory grow
  const countUp = (el) => {
    const end = +el.dataset.count, pre = el.dataset.prefix, suf = el.dataset.suffix, t0 = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - t0) / 1100), e = 1 - Math.pow(1 - k, 3);
      el.textContent = pre + Math.round(end * e) + suf;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        const c = en.target.querySelector("[data-count]");
        if (c) countUp(c);
        if (en.target === chart) chart.querySelectorAll(".fill").forEach((f) => (f.style.height = f.dataset.h + "%"));
        io.unobserve(en.target);
      }),
    { threshold: 0.2 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  io.observe(chart);

  // Active nav
  const links = [...document.querySelectorAll(".nav nav a")];
  const navIo = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting) links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${en.target.id}`));
      }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  ["overview", "career", "approach", "why", "contact"].forEach((id) => navIo.observe(document.getElementById(id)));
})();
