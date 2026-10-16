
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll("nav ul li a");

  function showSection(id) {
    const targetSection = document.getElementById(id);

    // Geçersiz bir bölüm istenirse Home sayfasına dön.
    if (!targetSection || !targetSection.matches("main section")) {
      id = "Home";
    }

    sections.forEach((section) => {
      section.classList.toggle("active", section.id === id);
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;

      link.classList.toggle("active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      if (!href || !href.startsWith("#")) return;

      const id = href.slice(1);
      const target = document.getElementById(id);

      if (!target || !target.matches("main section")) return;

      event.preventDefault();

      if (window.location.hash !== href) {
        history.pushState(null, "", href);
      }

      showSection(id);
    });
  });

  // Tarayıcının geri ve ileri düğmeleri.
  window.addEventListener("popstate", () => {
    showSection(decodeURIComponent(window.location.hash.slice(1)) || "Home");
  });

  // Sayfa bir sekme bağlantısıyla açılırsa o sekmeyi göster.
  const initialId = decodeURIComponent(window.location.hash.slice(1)) || "Home";
  showSection(initialId);
});
