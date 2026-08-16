document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
  });
});

// Efecto de escribir

document.addEventListener("DOMContentLoaded", () => {

  // ===== MENÚ HAMBURGUESA =====
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // ===== TEXTO ANIMADO (escribir y borrar) =====
  const words = [
    "Productor Musical",
    "Cantante",
    "Creador de Contenido Audiovisual",
    "Editor de Videos",
    "Guionista"
  ];

  const el = document.querySelector(".typing-text span");

  if (el) {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {
      const currentWord = words[wordIndex];

      if (!deleting) {
        el.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
          deleting = true;
          setTimeout(type, 1200);
          return;
        }
      } else {
        el.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      const speed = deleting ? 40 : 80;
      setTimeout(type, speed);
    }

    type();
  }

});

document.addEventListener("DOMContentLoaded", () => {

  // ===== MENÚ HAMBURGUESA (ya lo tenías) =====
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // ===== TEXTO ANIMADO (ya lo tenías) =====
  // ... tu código del typing-text va aquí sin cambios ...

  // ===== TRANSICIÓN ENTRE PÁGINAS =====
  document.body.classList.add("fade-in");

  const internalLinks = document.querySelectorAll('a[href$=".html"]');

  internalLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const destino = link.getAttribute("href");

      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = destino;
      }, 400); // debe coincidir con el tiempo de la transición CSS
    });
  });

});