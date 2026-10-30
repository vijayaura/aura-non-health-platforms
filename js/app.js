(function () {
  const data = window.TDO;
  if (!data) return;

  const domains = data.domains;
  const platforms = data.platforms;
  const sopCount = domains.reduce((sum, domain) => sum + domain.processes.length, 0);
  const platformCount = platforms.reduce((sum, platform) => sum + platform.sops.length, 0);
  const open = new Set();

  const layerName = {
    Governance: "Layer 3 · Governance",
    Common: "Layer 1 · Common",
  };

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function setStats() {
    const stats = {
      domains: domains.length,
      sops: sopCount,
      platform: platformCount,
    };
    document.querySelectorAll("[data-stat]").forEach((node) => {
      const key = node.getAttribute("data-stat");
      if (stats[key] != null) node.textContent = String(stats[key]);
    });
  }

  function rangeLabel(processes) {
    return processes[0].id + "–" + processes[processes.length - 1].id;
  }

  function renderToc() {
    const root = document.getElementById("toc");
    if (!root) return;
    root.innerHTML = domains
      .map((domain) => {
        return (
          '<button type="button" data-open="' +
          domain.id +
          '"><span class="n">' +
          esc(layerName[domain.layer]) +
          " · " +
          domain.processes.length +
          ' SOPs</span><strong>' +
          esc(domain.id) +
          "  " +
          esc(domain.title) +
          "</strong><em>" +
          esc(rangeLabel(domain.processes)) +
          "</em></button>"
        );
      })
      .join("");

    root.addEventListener("click", (event) => {
      const button = event.target.closest("[data-open]");
      if (!button) return;
      openDomain(button.getAttribute("data-open"), true);
    });
  }

  function renderRegister() {
    const root = document.getElementById("register-root");
    if (!root) return;
    root.innerHTML = domains
      .map((domain) => {
        const processes = domain.processes
          .map((process) => {
            const hay = (process.id + " " + process.title + " " + process.detail + " " + domain.title)
              .toLowerCase();
            return (
              '<li class="process" id="' +
              esc(process.id.toLowerCase()) +
              '" data-search="' +
              esc(hay) +
              '"><a class="pid" href="#' +
              esc(process.id.toLowerCase()) +
              '">' +
              esc(process.id) +
              "</a><div><h4>" +
              esc(process.title) +
              "</h4><p>" +
              esc(process.detail) +
              "</p></div></li>"
            );
          })
          .join("");

        return (
          '<article class="domain" id="domain-' +
          domain.id +
          '" data-count="' +
          domain.processes.length +
          '"><button class="domain-toggle" type="button" aria-expanded="false" aria-controls="panel-' +
          domain.id +
          '"><span class="d-no">' +
          domain.id +
          '</span><span><span class="d-kicker">' +
          esc(layerName[domain.layer]) +
          " · " +
          esc(rangeLabel(domain.processes)) +
          '</span><span class="d-title">' +
          esc(domain.title) +
          '</span></span><span class="chevron" aria-hidden="true"></span></button><div class="process-wrap" id="panel-' +
          domain.id +
          '"><div class="process-inner"><p class="domain-summary">' +
          esc(domain.summary) +
          '</p><ol class="processes">' +
          processes +
          "</ol></div></div></article>"
        );
      })
      .join("");

    root.addEventListener("click", (event) => {
      const toggle = event.target.closest(".domain-toggle");
      if (!toggle) return;
      const domain = toggle.closest(".domain");
      setOpen(domain, !domain.classList.contains("is-open"));
    });
  }

  function renderPlatforms() {
    const root = document.getElementById("platform-grid");
    if (!root) return;
    root.innerHTML = platforms
      .map((platform) => {
        const items = platform.sops
          .map((sop) => {
            return (
              '<li class="process" id="' +
              esc(sop.id.toLowerCase()) +
              '"><a class="pid" href="#' +
              esc(sop.id.toLowerCase()) +
              '">' +
              esc(sop.id) +
              "</a><div><h4>" +
              esc(sop.title) +
              "</h4><p>" +
              esc(sop.detail) +
              "</p></div></li>"
            );
          })
          .join("");
        return (
          '<article class="platform" data-tone="' +
          esc(platform.tone) +
          '" id="platform-' +
          esc(platform.tone) +
          '"><p class="kicker">Layer 2 · ' +
          esc(platform.kicker) +
          " · " +
          platform.sops.length +
          " SOPs</p><h3>" +
          esc(platform.name) +
          '</h3><p class="summary">' +
          esc(platform.summary) +
          '</p><ol class="processes">' +
          items +
          '</ol><p class="validates"><strong>Validate. </strong>' +
          esc(platform.validates) +
          "</p></article>"
        );
      })
      .join("");
  }

  function setOpen(domain, shouldOpen, remember) {
    domain.classList.toggle("is-open", shouldOpen);
    const toggle = domain.querySelector(".domain-toggle");
    if (toggle) toggle.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
    if (remember === false) return;
    if (shouldOpen) open.add(domain.id);
    else open.delete(domain.id);
  }

  function openDomain(id, scroll) {
    const domain = document.getElementById("domain-" + id);
    if (!domain) return;
    setOpen(domain, true);
    if (scroll) domain.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function applyFilter(query) {
    const q = query.trim().toLowerCase();
    let shown = 0;
    let domainsShown = 0;
    document.querySelectorAll("#register-root .domain").forEach((domain) => {
      let matches = 0;
      domain.querySelectorAll(".process").forEach((process) => {
        const hit = !q || process.dataset.search.includes(q);
        process.hidden = !hit;
        if (hit) matches += 1;
      });
      const visible = !q || matches > 0;
      domain.hidden = !visible;
      if (visible) domainsShown += 1;
      shown += q ? matches : domain.dataset.count * 1;
      setOpen(domain, q ? matches > 0 : open.has(domain.id), false);
    });

    const status = document.getElementById("search-status");
    const empty = document.getElementById("empty");
    if (status) {
      status.textContent = q
        ? shown + (shown === 1 ? " SOP matches" : " SOPs match") + " across " + domainsShown + (domainsShown === 1 ? " domain." : " domains.")
        : sopCount + " common SOPs across " + domains.length + " domains.";
    }
    if (empty) empty.hidden = shown !== 0;
  }

  function bindSearch() {
    const input = document.getElementById("q");
    if (!input) return;
    input.addEventListener("input", () => applyFilter(input.value));
    document.getElementById("expand-all")?.addEventListener("click", () => {
      document.querySelectorAll("#register-root .domain").forEach((domain) => {
        if (!domain.hidden) setOpen(domain, true);
      });
    });
    document.getElementById("collapse-all")?.addEventListener("click", () => {
      document.querySelectorAll("#register-root .domain").forEach((domain) => setOpen(domain, false));
    });
    applyFilter("");
  }

  function bindSpy() {
    const links = [...document.querySelectorAll(".nav a[href^='#']")];
    const sections = links
      .map((link) => document.getElementById(link.getAttribute("href").slice(1)))
      .filter(Boolean);

    if (!sections.length) return;

    const mark = () => {
      const line = 140;
      let current = sections[0].id;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= line) current = section.id;
      });
      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === "#" + current);
      });
      updatePager(current);
    };

    window.addEventListener("scroll", mark, { passive: true });
    mark();
  }

  const sectionIds = [...document.querySelectorAll("[data-nav]")].map((node) => node.id);

  function updatePager(current) {
    const index = sectionIds.indexOf(current);
    const prev = document.getElementById("prev-section");
    const next = document.getElementById("next-section");
    if (prev) prev.disabled = index <= 0;
    if (next) next.disabled = index === sectionIds.length - 1 || index < 0;
  }

  function go(delta) {
    const links = [...document.querySelectorAll(".nav a.is-active")];
    const current = links[0] ? links[0].getAttribute("href").slice(1) : sectionIds[0];
    const index = Math.max(0, sectionIds.indexOf(current));
    const next = sectionIds[index + delta];
    if (!next) return;
    document.getElementById(next)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", "#" + next);
  }

  function bindPager() {
    document.getElementById("prev-section")?.addEventListener("click", () => go(-1));
    document.getElementById("next-section")?.addEventListener("click", () => go(1));
  }

  function bindProgress() {
    const bar = document.querySelector(".progress span");
    if (!bar) return;
    const paint = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const value = height > 0 ? window.scrollY / height : 0;
      bar.style.transform = "scaleX(" + value + ")";
    };
    window.addEventListener("scroll", paint, { passive: true });
    paint();
  }

  function bindMenu() {
    const nav = document.querySelector(".nav");
    const button = document.getElementById("menu");
    const backdrop = document.querySelector(".backdrop");
    if (!nav || !button || !backdrop) return;

    const set = (openNav) => {
      nav.classList.toggle("is-open", openNav);
      backdrop.classList.toggle("is-on", openNav);
      button.setAttribute("aria-expanded", openNav ? "true" : "false");
    };

    button.addEventListener("click", () => set(!nav.classList.contains("is-open")));
    backdrop.addEventListener("click", () => set(false));
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) set(false);
    });
  }

  function openFromHash() {
    const id = location.hash.replace("#", "");
    if (!id) return;
    if (id.startsWith("sop-") || id.startsWith("pnc-") || id.startsWith("slv-") || id.startsWith("mtr-")) {
      const el = document.getElementById(id);
      const domain = el && el.closest(".domain");
      if (domain) setOpen(domain, true);
      if (el) {
        window.setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
      }
    }
    if (id.startsWith("domain-")) {
      const domain = document.getElementById(id);
      if (domain) setOpen(domain, true);
    }
  }

  setStats();
  renderToc();
  renderRegister();
  renderPlatforms();
  bindSearch();
  bindSpy();
  bindPager();
  bindProgress();
  bindMenu();
  openFromHash();
  window.addEventListener("hashchange", openFromHash);
})();
