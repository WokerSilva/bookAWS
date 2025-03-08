document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const body = document.body;
  
    navToggle?.addEventListener("click", (e) => {
      e.preventDefault();
      body.classList.toggle("menu-open");
      navToggle.textContent = body.classList.contains("menu-open") ? "✕" : "☰";
    });
  
    // Cerrar menú al hacer click fuera en móviles
    document.addEventListener("click", (e) => {
      if (
        window.innerWidth < 769 &&
        !e.target.closest("header") &&
        body.classList.contains("menu-open")
      ) {
        body.classList.remove("menu-open");
        navToggle.textContent = "☰";
      }
    });
  
    // Cerrar menú al redimensionar
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 769 && body.classList.contains("menu-open")) {
        body.classList.remove("menu-open");
        navToggle.textContent = "☰";
      }
    });
  });  