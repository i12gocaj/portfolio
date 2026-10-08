(() => {
  "use strict";
  const button = document.querySelector(".tiny-bug");
  const specimen = document.querySelector(".analysis-specimen");
  const note = document.getElementById("bug-note");
  if (!button || !specimen || !note) return;
  button.hidden = false;
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute(
      "aria-label",
      open ? "Reset illustration" : "Inspect illustration",
    );
    button.querySelector("span").textContent = open
      ? "Reset view"
      : "Inspect the bug";
    specimen.classList.toggle("is-open", open);
    note.hidden = !open;
  });
})();
