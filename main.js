const app = document.querySelector(".app");
const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

if (app && menuToggle && sidebar) {
  const closeMenu = () => {
    app.classList.remove("nav-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const opened = app.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(opened));
  });

  document.addEventListener("click", (event) => {
    if (!app.classList.contains("nav-open")) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (!sidebar.contains(target) && !menuToggle.contains(target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMenu();
  });
}
