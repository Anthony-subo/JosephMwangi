document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("hamburger");
  const navList = document.querySelector("nav ul");
  const themeToggle = document.getElementById("themeToggle");

  // Mobile nav toggle
  burger.addEventListener("click", () => {
    navList.classList.toggle("open");
  });

  // Theme toggle icon and logic
  const updateThemeIcon = () => {
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "🌞" : "🌓";
  };

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    updateThemeIcon();
  });

  updateThemeIcon(); // Set initial icon state on load

  // Swahili proverb logic
  const proverbs = [
    "Haraka haraka haina baraka. – Hurry hurry has no blessing.",
    "Bahati haiji mara mbili. – Luck doesn't come twice.",
    "Asiyesikia la mkuu huvunjika guu. – He who ignores advice breaks a leg.",
    "Mti hauangushwi na nyoka mdogo. – A big tree is not felled by a small snake."
  ];
  const proverbEl = document.getElementById("proverb");
  if (proverbEl) {
    const index = new Date().getDate() % proverbs.length;
    proverbEl.textContent = proverbs[index];
  }

  // Scroll reveal for cards
  const revealElements = document.querySelectorAll(".card");
  const revealOnScroll = () => {
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 100;
      if (top < triggerPoint) el.classList.add("active");
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Auto-close nav menu on link click (mobile only)
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 769) {
        navList.classList.remove("open");
      }
    });
  });

  // Remove .open class when resizing to large screen
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 769) {
      navList.classList.remove("open");
    }
  });

  // Scroll to top button
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

