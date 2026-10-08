/* Progressive enhancements; all work and background content is in the HTML. */
(() => {
  "use strict";
  document.documentElement.classList.add("js");
  const select = (selector) => document.querySelector(selector);
  const menu = select(".menu-toggle");
  const navigation = select("#main-nav");
  const mobile = window.matchMedia("(max-width: 600px)");
  menu.hidden = false;
  function setMenu(open) {
    menu.setAttribute("aria-expanded", String(open));
    navigation.classList.toggle("is-open", open);
    navigation.inert = mobile.matches && !open;
    menu
      .querySelector("use")
      .setAttribute(
        "href",
        `assets/img/analysis-symbols.svg#${open ? "minus" : "plus"}`,
      );
  }
  menu.addEventListener("click", () =>
    setMenu(menu.getAttribute("aria-expanded") !== "true"),
  );
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menu.getAttribute("aria-expanded") === "true"
    ) {
      setMenu(false);
      menu.focus();
    }
  });
  mobile.addEventListener("change", () => {
    const focusWasInNavigation = navigation.contains(document.activeElement);
    setMenu(false);
    if (mobile.matches && focusWasInNavigation) menu.focus();
  });
  document.addEventListener("focusin", (event) => {
    if (
      mobile.matches &&
      event.target !== menu &&
      !navigation.contains(event.target)
    )
      setMenu(false);
  });
  setMenu(false);

  const inspection = select(".inspect-button");
  const quote = select("#inspection-quote");
  inspection.hidden = false;
  inspection.addEventListener("click", () => {
    const open = inspection.getAttribute("aria-expanded") !== "true";
    inspection.setAttribute("aria-expanded", String(open));
    quote.hidden = !open;
    inspection
      .querySelector("use")
      .setAttribute(
        "href",
        `assets/img/analysis-symbols.svg#${open ? "back" : "speech"}`,
      );
    inspection.querySelector("span").textContent = open
      ? "Back to photo"
      : "Personal note";
  });

  const entries = [...document.querySelectorAll(".project-entry")];
  entries.forEach((entry) =>
    entry.addEventListener("toggle", () => {
      if (
        !entry.open ||
        document.documentElement.classList.contains("printing")
      )
        return;
      entries.forEach((other) => {
        if (other !== entry) other.open = false;
      });
    }),
  );
  const historyPanels = [...document.querySelectorAll("[data-history-group]")];
  const historyTabs = [...document.querySelectorAll("[data-history-tab]")];
  const historyKeys = new Set(historyTabs.map((tab) => tab.dataset.historyTab));
  function readHistory() {
    const key = new URL(window.location.href).searchParams.get("background");
    return historyKeys.has(key) ? key : "experience";
  }
  function writeHistory(key, push = true) {
    const url = new URL(window.location.href);
    key === "experience"
      ? url.searchParams.delete("background")
      : url.searchParams.set("background", key);
    const linkedPanel = document
      .getElementById(url.hash.slice(1))
      ?.closest("[data-history-group]");
    if (linkedPanel && linkedPanel.dataset.historyGroup !== key) url.hash = "";
    if (url.href !== window.location.href)
      window.history[push ? "pushState" : "replaceState"](null, "", url);
  }
  function selectHistory(key, focus = false) {
    historyPanels.forEach((panel) => {
      panel.hidden = panel.dataset.historyGroup !== key;
    });
    historyTabs.forEach((tab) => {
      const active = tab.dataset.historyTab === key;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active && focus) tab.focus();
    });
  }
  if (historyTabs.length) {
    select(".history-tabs").hidden = false;
    historyPanels.forEach((panel) => {
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute(
        "aria-labelledby",
        `tab-${panel.dataset.historyGroup}`,
      );
      panel.querySelector("h3").hidden = true;
    });
    selectHistory(readHistory());
    historyTabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        selectHistory(tab.dataset.historyTab);
        writeHistory(tab.dataset.historyTab);
      });
      tab.addEventListener("keydown", (event) => {
        let next;
        if (event.key === "ArrowRight") next = (index + 1) % historyTabs.length;
        else if (event.key === "ArrowLeft")
          next = (index + historyTabs.length - 1) % historyTabs.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = historyTabs.length - 1;
        else return;
        event.preventDefault();
        selectHistory(historyTabs[next].dataset.historyTab, true);
        writeHistory(historyTabs[next].dataset.historyTab, false);
      });
    });
  }
  function revealHistory(target) {
    const panel = target.closest("[data-history-group]");
    if (panel) selectHistory(panel.dataset.historyGroup);
  }
  const filters = [...document.querySelectorAll("[data-filter]")];
  const search = select("#project-search");
  const count = select("#project-results");
  const empty = select(".empty-results");
  const params = () => new URL(window.location.href).searchParams;
  const categories = new Set(filters.map((button) => button.dataset.filter));
  let category = "all";
  let searchTimer;
  const normalize = (value) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const searchable = new Map(
    entries.map((entry) => [entry, normalize(entry.textContent)]),
  );
  select(".archive-tools").hidden = false;
  count.hidden = false;
  function filterProjects() {
    const query = normalize(search.value.trim());
    let visible = 0;
    entries.forEach((entry) => {
      entry.hidden =
        !(category === "all" || entry.dataset.category === category) ||
        !searchable.get(entry).includes(query);
      if (!entry.hidden) visible++;
    });
    filters.forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.filter === category),
      ),
    );
    count.textContent = `${visible} of ${entries.length} projects`;
    empty.hidden = visible !== 0;
  }
  function writeFilters(push = false) {
    const url = new URL(window.location.href);
    category === "all"
      ? url.searchParams.delete("category")
      : url.searchParams.set("category", category);
    search.value.trim()
      ? url.searchParams.set("q", search.value.trim())
      : url.searchParams.delete("q");
    const linkedProject = document
      .getElementById(url.hash.slice(1))
      ?.closest(".project-entry");
    if (linkedProject?.hidden) url.hash = "";
    if (url.href !== window.location.href)
      window.history[push ? "pushState" : "replaceState"](null, "", url);
  }
  function readFilters() {
    category = categories.has(params().get("category"))
      ? params().get("category")
      : "all";
    search.value = params().get("q") || "";
    filterProjects();
  }
  filters.forEach((button) =>
    button.addEventListener("click", () => {
      clearTimeout(searchTimer);
      category = button.dataset.filter;
      filterProjects();
      writeFilters(true);
    }),
  );
  search.addEventListener("input", () => {
    filterProjects();
    clearTimeout(searchTimer);
    searchTimer = setTimeout(writeFilters, 200);
  });
  function openHashTarget(restore = false) {
    const target = document
      .getElementById(window.location.hash.slice(1))
      ?.closest("details");
    if (restore)
      entries.forEach((entry) => {
        if (entry !== target) entry.open = false;
      });
    if (target) {
      revealHistory(target);
      const panel = target.closest("[data-history-group]");
      if (panel) writeHistory(panel.dataset.historyGroup, false);
      if (target.hidden) {
        category = "all";
        search.value = "";
        filterProjects();
        writeFilters();
      }
      target.open = true;
    }
  }
  window.addEventListener("popstate", () => {
    readFilters();
    selectHistory(readHistory());
    openHashTarget(true);
  });
  window.addEventListener("hashchange", () => openHashTarget());
  const ordinaryClick = (event) =>
    event.button === 0 &&
    !event.ctrlKey &&
    !event.metaKey &&
    !event.shiftKey &&
    !event.altKey;
  document
    .querySelectorAll(".project-entry > summary, .history-entry > summary")
    .forEach((summary) => {
      summary.addEventListener("click", (event) => {
        if (!ordinaryClick(event)) return;
        requestAnimationFrame(() => {
          const entry = summary.parentElement;
          const url = new URL(window.location.href);
          const linkedEntry = document
            .getElementById(url.hash.slice(1))
            ?.closest("details");
          if (entry.open) url.hash = entry.id;
          else if (linkedEntry === entry) url.hash = "";
          if (url.href !== window.location.href)
            window.history[entry.open ? "pushState" : "replaceState"](
              null,
              "",
              url,
            );
        });
      });
    });
  document.addEventListener("click", (event) => {
    if (!ordinaryClick(event) || event.defaultPrevented) return;
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;
    const target = document.getElementById(
      anchor.getAttribute("href").slice(1),
    );
    const disclosure = target?.closest("details");
    if (disclosure) {
      revealHistory(disclosure);
      disclosure.open = true;
    }
  });
  readFilters();
  openHashTarget();

  const navLinks = [...navigation.querySelectorAll('a[href^="#"]')];
  const navSections = [...document.querySelectorAll("main>section[id]")];
  let navigationFrame;
  function updateCurrentSection() {
    navigationFrame = undefined;
    const readingLine = select(".site-header").offsetHeight + 80;
    let current = navSections[0];
    for (const section of navSections) {
      if (section.getBoundingClientRect().top <= readingLine) current = section;
    }
    // The short final section may never reach the reading line on a tall screen.
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 2
    )
      current = navSections.at(-1);
    navLinks.forEach((link) => {
      if (link.hash === `#${current.id}`)
        link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }
  function scheduleNavigationUpdate() {
    if (navigationFrame === undefined)
      navigationFrame = requestAnimationFrame(updateCurrentSection);
  }
  window.addEventListener("scroll", scheduleNavigationUpdate, {
    passive: true,
  });
  window.addEventListener("resize", scheduleNavigationUpdate);
  window.addEventListener("load", scheduleNavigationUpdate);
  if (document.readyState === "complete") scheduleNavigationUpdate();

  let printState;
  window.addEventListener("beforeprint", () => {
    if (printState) return;
    printState = [...document.querySelectorAll("details")].map((entry) => [
      entry,
      entry.open,
    ]);
    document.documentElement.classList.add("printing");
    printState.forEach(([entry]) => {
      entry.open = true;
    });
  });
  window.addEventListener("afterprint", () => {
    printState?.forEach(([entry, open]) => {
      entry.open = open;
    });
    printState = undefined;
    document.documentElement.classList.remove("printing");
  });
  const findingTabs = [...document.querySelectorAll("[data-finding-tab]")];
  const findingViews = [...document.querySelectorAll("[data-finding-view]")];
  function selectFinding(key, focus = false) {
    findingViews.forEach((view) => {
      view.hidden = view.dataset.findingView !== key;
    });
    findingTabs.forEach((tab) => {
      const active = tab.dataset.findingTab === key;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active && focus) tab.focus();
    });
  }
  if (findingTabs.length) {
    select(".finding-tabs").hidden = false;
    findingViews.forEach((view) => {
      view.setAttribute("role", "tabpanel");
      view.setAttribute(
        "aria-labelledby",
        "finding-tab-" + view.dataset.findingView,
      );
      view.querySelector(".finding-nojs-label").hidden = true;
    });
    selectFinding("interface");
    findingTabs.forEach((tab, index) => {
      tab.addEventListener("click", () =>
        selectFinding(tab.dataset.findingTab),
      );
      tab.addEventListener("keydown", (event) => {
        let next;
        if (event.key === "ArrowRight" || event.key === "ArrowLeft")
          next = 1 - index;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = 1;
        else return;
        event.preventDefault();
        selectFinding(findingTabs[next].dataset.findingTab, true);
      });
    });
  }
  select("#footer-year").textContent = new Date().getFullYear();

  const copy = select(".copy-email");
  const copyLabel = copy.innerHTML;
  if (navigator.clipboard && window.isSecureContext) {
    copy.hidden = false;
    let resetTimer;
    copy.addEventListener("click", async () => {
      clearTimeout(resetTimer);
      try {
        await navigator.clipboard.writeText("javiergc100@protonmail.com");
        copy.textContent = "Email copied";
        select(".copy-status").textContent = "Email copied.";
      } catch {
        copy.textContent = "Select the address to copy it";
        select(".copy-status").textContent =
          "Copying is unavailable. Select the address to copy it.";
      }
      resetTimer = setTimeout(() => {
        copy.innerHTML = copyLabel;
      }, 3500);
    });
  }
})();
