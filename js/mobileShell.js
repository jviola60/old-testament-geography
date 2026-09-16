/**
 * OLD TESTAMENT GEOGRAPHY - MOBILE SHELL
 * Adaptive bottom sheet, touch gestures, and responsive mobile interactions.
 */

class MobileShell {
  constructor() {
    this.isMobile = false;
  }

  init() {
    this.isMobile = window.matchMedia("(max-width: 768px)").matches;
    this.setupViewportHeight();
    this.setupMobileMenu();

    window.addEventListener("resize", () => {
      this.isMobile = window.matchMedia("(max-width: 768px)").matches;
      this.setupViewportHeight();
    });
  }

  setupViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  setupMobileMenu() {
    const menuBtn = document.getElementById("mobileMenuBtn");
    const sidebar = document.getElementById("detailSidebar");

    if (menuBtn && sidebar) {
      menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("closed");
      });
    }
  }
}

if (typeof window !== "undefined") {
  window.MobileShell = MobileShell;
}
