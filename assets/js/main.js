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
  mobile.addEventListener("change", () => setMenu(false));
  setMenu(false);

  const inspection = select(".inspect-button");
  const quote = select("#inspection-quote");
  inspection.hidden = false;
  inspection.addEventListener("click", () => {
    const open = inspection.getAttribute("aria-expanded") !== "true";
    inspection.setAttribute("aria-expanded", String(open));
    quote.hidden = !open;
    inspection.querySelector("span").textContent = open
      ? "Back to photo"
      : "Personal note";
  });

  const entries = [...document.querySelectorAll(".project-entry")];
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
  function openHashTarget() {
    const target = document
      .getElementById(window.location.hash.slice(1))
      ?.closest("details");
    if (target) {
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
    openHashTarget();
  });
  window.addEventListener("hashchange", openHashTarget);
  document.addEventListener("click", (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;
    const target = document.getElementById(
      anchor.getAttribute("href").slice(1),
    );
    const disclosure = target?.closest("details");
    if (disclosure) disclosure.open = true;
  });
  readFilters();
  openHashTarget();

  if ("IntersectionObserver" in window) {
    const navLinks = [...navigation.querySelectorAll('a[href^="#"]')];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!visible.length) return;
        navLinks.forEach((link) => {
          if (link.hash === `#${visible[0].target.id}`)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("main>section[id]")
      .forEach((section) => observer.observe(section));
  }
  select("#footer-year").textContent = new Date().getFullYear();

  const copy = select(".copy-email");
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
        copy.textContent = "Copy email";
      }, 3500);
    });
  }

  const form = select("#contactForm");
  const submit = form.querySelector('button[type="submit"]');
  const status = form.querySelector(".form-status");
  const originalLabel = submit.innerHTML;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (submit.disabled || !form.reportValidity()) return;
    if (form.elements._gotcha.value) return;
    submit.disabled = true;
    form.setAttribute("aria-busy", "true");
    submit.textContent = "Sending…";
    status.dataset.state = "sending";
    status.textContent = "Sending your message…";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      const receipt = await response.json();
      if (!response.ok || receipt.ok !== true)
        throw new Error("The message could not be delivered.");
      status.dataset.state = "success";
      status.textContent = "Message sent. Thanks for writing.";
      form.reset();
    } catch {
      status.dataset.state = "error";
      status.textContent =
        "Couldn’t confirm delivery. Your message is still here. Try again or email ";
      const fallback = document.createElement("a");
      fallback.href = "mailto:javiergc100@protonmail.com";
      fallback.textContent = "javiergc100@protonmail.com";
      status.append(fallback, ".");
    } finally {
      clearTimeout(timeout);
      submit.disabled = false;
      submit.innerHTML = originalLabel;
      form.removeAttribute("aria-busy");
    }
  });
})();
