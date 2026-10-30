(function () {
  const data = window.TDO;
  const stage = document.getElementById("stage");
  if (!data || !stage) return;

  const domains = data.domains;
  const sopCount = domains.reduce((sum, domain) => sum + domain.processes.length, 0);
  const layerName = {
    Common: "Layer 1 · Common",
    Governance: "Layer 3 · Governance",
  };

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function range(processes) {
    return processes[0].id + " – " + processes[processes.length - 1].id;
  }

  function buildRegister() {
    const tiles = document.getElementById("register-tiles");
    if (tiles) {
      tiles.innerHTML =
        domains
          .map(
            (domain) =>
              '<button type="button" class="tile' +
              (domain.layer === "Governance" ? " is-gov" : "") +
              '" data-goto="domain-' +
              domain.id +
              '"><span class="t-no">' +
              domain.id +
              "</span><strong>" +
              esc(domain.title) +
              "</strong><em>" +
              domain.processes.length +
              " SOPs · " +
              esc(range(domain.processes)) +
              "</em></button>"
          )
          .join("") +
        '<div class="tile is-note"><span class="t-no">' +
        sopCount +
        "</span><strong>One template for every SOP</strong><em>Owner · approver · evidence · escalation</em></div>";
    }

    const anchor = document.getElementById("s-register");
    if (!anchor) return;
    const html = domains
      .map((domain) => {
        const items = domain.processes
          .map(
            (process) =>
              "<li><span>" + esc(process.id) + "</span><strong>" + esc(process.title) + "</strong></li>"
          )
          .join("");
        return (
          '<section class="slide slide-domain" id="domain-' +
          domain.id +
          '" data-section="Register" data-title="' +
          esc(domain.id + " · " + domain.title) +
          '"><div class="domain-side" data-stagger><p class="kicker">Register · ' +
          esc(layerName[domain.layer]) +
          '</p><div class="domain-no">' +
          domain.id +
          '</div><h2 class="domain-title">' +
          esc(domain.title) +
          '</h2><p class="domain-summary">' +
          esc(domain.summary) +
          '</p><p class="domain-meta"><strong>' +
          domain.processes.length +
          " SOPs</strong> · " +
          esc(range(domain.processes)) +
          '</p></div><ol class="domain-list" data-stagger>' +
          items +
          "</ol></section>"
        );
      })
      .join("");
    anchor.insertAdjacentHTML("afterend", html);
  }

  function setStats() {
    const stats = { sops: sopCount, domains: domains.length };
    document.querySelectorAll("[data-stat]").forEach((node) => {
      const value = stats[node.getAttribute("data-stat")];
      if (value != null) node.textContent = String(value);
    });
  }

  function buildGlows() {
    document.querySelectorAll(".glow").forEach((glow, g) => {
      const cols = Number(glow.dataset.cols) || 32;
      let html = "";
      for (let i = 0; i < cols; i++) {
        const t = i / (cols - 1);
        const arch = Math.sin(t * Math.PI);
        const noise = (((i + 3) * (g + 7) * 9301 + 49297) % 233280) / 233280;
        const h = Math.min(98, 48 + arch * 38 + noise * 16);
        const o = 0.78 + noise * 0.22;
        html +=
          '<span style="--h:' +
          h.toFixed(1) +
          "%;--o:" +
          o.toFixed(2) +
          ";--d:" +
          Math.round(Math.abs(t - 0.5) * 500) +
          '"></span>';
      }
      glow.innerHTML = html;
    });
  }

  function staggerIndexes(root) {
    root.querySelectorAll("[data-stagger]").forEach((group) => {
      [...group.children].forEach((child, i) => child.style.setProperty("--i", String(i)));
    });
  }

  buildRegister();
  setStats();
  buildGlows();
  staggerIndexes(stage);

  const slides = [...stage.querySelectorAll(".slide")];
  const total = slides.length;

  slides.forEach((slide, i) => {
    if (slide.hasAttribute("data-plain")) return;
    const foot = document.createElement("footer");
    foot.className = "s-foot";
    foot.innerHTML =
      "<span>Technology Delivery &amp; Operations<b>" +
      esc(slide.dataset.section || "") +
      "</b></span><span>" +
      String(i + 1).padStart(2, "0") +
      " / " +
      total +
      "</span>";
    slide.appendChild(foot);
  });

  const countNow = document.getElementById("count-now");
  const countAll = document.getElementById("count-all");
  const countSection = document.getElementById("count-section");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const bar = document.querySelector(".progress span");
  let current = -1;

  countAll.textContent = String(total);

  function fit() {
    const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    stage.style.setProperty("--s", String(scale));
  }

  function show(index, fromHash) {
    const next = Math.max(0, Math.min(total - 1, index));
    if (next === current) return;
    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === next);
      slide.classList.toggle("is-past", i < next);
      slide.setAttribute("aria-hidden", i === next ? "false" : "true");
    });
    current = next;
    const slide = slides[next];
    countNow.textContent = String(next + 1);
    countSection.textContent = slide.dataset.section || "";
    prevBtn.disabled = next === 0;
    nextBtn.disabled = next === total - 1;
    bar.style.transform = "scaleX(" + (total > 1 ? next / (total - 1) : 1) + ")";
    document.title = (slide.dataset.title || "Slide") + " · Technology Delivery & Operations";
    if (!fromHash) history.replaceState(null, "", "#" + (next + 1));
    markSorter();
  }

  function go(delta) {
    show(current + delta);
  }

  function goTo(id) {
    const index = slides.findIndex((slide) => slide.id === id);
    if (index >= 0) show(index);
  }

  function fromHash() {
    const n = parseInt(location.hash.replace("#", ""), 10);
    return Number.isFinite(n) ? n - 1 : 0;
  }

  const sorter = document.getElementById("sorter");
  const sorterGrid = document.getElementById("sorter-grid");
  let sorterBuilt = false;

  function buildSorter() {
    if (sorterBuilt) return;
    sorterBuilt = true;
    slides.forEach((slide, i) => {
      const thumb = document.createElement("button");
      thumb.type = "button";
      thumb.className = "thumb";
      thumb.dataset.index = String(i);
      const frame = document.createElement("span");
      frame.className = "thumb-frame";
      const canvas = document.createElement("span");
      canvas.className = "thumb-canvas";
      const clone = slide.cloneNode(true);
      clone.removeAttribute("id");
      clone.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"));
      clone.classList.add("is-active");
      clone.classList.remove("is-past");
      clone.removeAttribute("aria-hidden");
      clone.setAttribute("inert", "");
      canvas.appendChild(clone);
      frame.appendChild(canvas);
      const label = document.createElement("span");
      label.className = "thumb-label";
      label.innerHTML = "<b>" + String(i + 1).padStart(2, "0") + "</b>" + esc(slide.dataset.title || "");
      thumb.appendChild(frame);
      thumb.appendChild(label);
      sorterGrid.appendChild(thumb);
    });
    sorterGrid.addEventListener("click", (event) => {
      const thumb = event.target.closest(".thumb");
      if (!thumb) return;
      show(Number(thumb.dataset.index));
      closeSorter();
    });
  }

  function markSorter() {
    if (!sorterBuilt) return;
    sorterGrid.querySelectorAll(".thumb").forEach((thumb, i) => {
      thumb.classList.toggle("is-current", i === current);
    });
  }

  function openSorter() {
    buildSorter();
    markSorter();
    sorter.hidden = false;
    const active = sorterGrid.querySelector(".is-current");
    if (active) active.scrollIntoView({ block: "center" });
    document.getElementById("close-sorter").focus();
  }

  function closeSorter() {
    sorter.hidden = true;
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  }

  document.addEventListener("keydown", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    const key = event.key;
    if (!sorter.hidden) {
      if (key === "Escape" || key === "s" || key === "S") {
        event.preventDefault();
        closeSorter();
      }
      return;
    }
    if (["ArrowRight", "ArrowDown", "PageDown", " ", "Enter"].includes(key)) {
      if (key === "Enter" && event.target.closest("button, a")) return;
      event.preventDefault();
      go(1);
    } else if (["ArrowLeft", "ArrowUp", "PageUp", "Backspace"].includes(key)) {
      event.preventDefault();
      go(-1);
    } else if (key === "Home") {
      event.preventDefault();
      show(0);
    } else if (key === "End") {
      event.preventDefault();
      show(total - 1);
    } else if (key === "s" || key === "S" || key === "g" || key === "G") {
      event.preventDefault();
      openSorter();
    } else if (key === "f" || key === "F") {
      event.preventDefault();
      toggleFullscreen();
    }
  });

  stage.addEventListener("click", (event) => {
    const target = event.target.closest("[data-goto]");
    if (target) goTo(target.dataset.goto);
  });

  prevBtn.addEventListener("click", () => go(-1));
  nextBtn.addEventListener("click", () => go(1));
  document.getElementById("open-sorter").addEventListener("click", openSorter);
  document.getElementById("close-sorter").addEventListener("click", closeSorter);
  document.getElementById("fullscreen").addEventListener("click", toggleFullscreen);

  let touchX = null;
  let touchY = null;
  stage.addEventListener(
    "touchstart",
    (event) => {
      touchX = event.touches[0].clientX;
      touchY = event.touches[0].clientY;
    },
    { passive: true }
  );
  stage.addEventListener("touchend", (event) => {
    if (touchX == null) return;
    const dx = event.changedTouches[0].clientX - touchX;
    const dy = event.changedTouches[0].clientY - touchY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
    touchX = null;
  });

  const hud = document.querySelector(".hud");
  let idleTimer = null;
  function wake() {
    hud.classList.remove("is-idle");
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      if (!hud.matches(":hover")) hud.classList.add("is-idle");
    }, 2600);
  }
  ["mousemove", "touchstart", "keydown"].forEach((name) =>
    document.addEventListener(name, wake, { passive: true })
  );

  window.addEventListener("resize", fit);
  window.addEventListener("hashchange", () => show(fromHash(), true));

  fit();
  show(fromHash(), true);
  wake();
})();
