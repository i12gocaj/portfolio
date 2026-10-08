(() => {
  "use strict";
  const bug = document.querySelector(".tiny-bug");
  const note = document.getElementById("bug-note");
  if (!bug || !note) return;
  bug.hidden = false;
  bug.addEventListener("click", () => {
    const open = bug.getAttribute("aria-expanded") !== "true";
    bug.setAttribute("aria-expanded", String(open));
    note.hidden = !open;
  });
})();
