/**
 * OLD TESTAMENT GEOGRAPHY - MOBILE SHELL CONTROLLER
 * Full Phone UI Architecture matching Book of Mormon & New Testament Geography:
 * - 52px thumb-friendly bottom navigation bar
 * - Collapsible bottom sheet dossier with thin 44px peek & drag handle
 * - Slide-out left navigation drawer (Cross-Atlas Trilogy, utilities, map styles, regions)
 * - Mobile layer & filter bottom sheet
 * - 142+ biblical locations quick picker with live search
 * - Touch swipe gestures & visual viewport management
 */

class MobileShell {
  constructor() {
    this.isMobile = false;
    this.navSheet = null;
    this.filtersSheet = null;
    this.pickerSheet = null;
    this.backdrop = null;
    this.sidebar = null;
    this.touchStartY = 0;
    this.touchCurrentY = 0;
  }

  init() {
    console.log("📱 Initializing Old Testament Mobile Shell Controller...");

    this.sidebar = document.getElementById("detailSidebar");
    this.navSheet = document.getElementById("mobileNavSheet");
    this.filtersSheet = document.getElementById("mobileFiltersSheet");
    this.pickerSheet = document.getElementById("mobilePickerSheet");
    this.backdrop = document.getElementById("mobileSheetBackdrop");

    this.checkMobile();
    this.setupViewportHeight();
    this.setupMobileMenu();
    this.setupMobileHeaderActions();
    this.setupBottomBar();
    this.setupBottomSheetSidebar();
    this.setupMobilePicker();
    this.setupMobileFilters();
    this.setupMobileNavActions();

    window.addEventListener("resize", () => {
      this.checkMobile();
      this.setupViewportHeight();
    });

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", () => this.setupViewportHeight());
    }
  }

  checkMobile() {
    this.isMobile = window.matchMedia("(max-width: 768px)").matches || /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent);
    document.documentElement.classList.toggle("layout-mobile", this.isMobile);
    document.body.classList.toggle("layout-mobile", this.isMobile);

    if (this.isMobile && this.sidebar) {
      // By default keep closed so map is completely clean and visible
      if (!this.sidebar.classList.contains("open") && !this.sidebar.classList.contains("expanded")) {
        this.sidebar.classList.add("closed");
        this.sidebar.classList.remove("peek");
      }
    }
  }

  setupViewportHeight() {
    const vv = window.visualViewport;
    const h = Math.round((vv && vv.height) || window.innerHeight);
    if (h) {
      document.documentElement.style.setProperty("--app-vh", h + "px");
      document.documentElement.style.setProperty("--vh", (h * 0.01) + "px");
    }
  }

  // 1. Mobile Left Slide-out Drawer
  setupMobileMenu() {
    const menuBtn = document.getElementById("mobileMenuBtn");
    const closeBtn = document.getElementById("closeMobileNavBtn");

    if (menuBtn) {
      menuBtn.addEventListener("click", () => this.openNavSheet());
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closeNavSheet());
    }

    if (this.backdrop) {
      this.backdrop.addEventListener("click", () => this.closeAllSheets());
    }
  }

  openNavSheet() {
    this.closeAllSheets(false);
    if (this.navSheet) this.navSheet.classList.add("open");
    if (this.backdrop) this.backdrop.classList.add("active");
  }

  closeNavSheet() {
    if (this.navSheet) this.navSheet.classList.remove("open");
    if (this.backdrop) this.backdrop.classList.remove("active");
  }

  closeAllSheets(hideBackdrop = true) {
    if (this.navSheet) this.navSheet.classList.remove("open");
    if (this.filtersSheet) this.filtersSheet.classList.remove("open");
    if (this.pickerSheet) this.pickerSheet.classList.remove("open");
    if (hideBackdrop && this.backdrop) this.backdrop.classList.remove("active");

    // Clear active states on bottom nav
    document.querySelectorAll(".mobile-bottom-btn").forEach(btn => btn.classList.remove("active"));
  }

  // 2. Mobile Header Quick Action Buttons
  setupMobileHeaderActions() {
    const searchBtn = document.getElementById("mobileSearchToggleBtn");
    const codexBtn = document.getElementById("mobileCodexToggleBtn");

    if (searchBtn) {
      searchBtn.addEventListener("click", () => this.openPickerSheet());
    }

    if (codexBtn) {
      codexBtn.addEventListener("click", () => this.toggleSidebarCodex());
    }
  }

  // 3. Thumb-Friendly Bottom Navigation Bar
  setupBottomBar() {
    const searchBtn = document.getElementById("mobBottomSearchBtn");
    const jumpBtn = document.getElementById("mobBottomJumpBtn");
    const toursBtn = document.getElementById("mobBottomToursBtn");
    const filtersBtn = document.getElementById("mobBottomFiltersBtn");
    const codexBtn = document.getElementById("mobBottomCodexBtn");

    if (searchBtn) {
      searchBtn.addEventListener("click", () => {
        this.setActiveBottomBtn(searchBtn);
        this.openPickerSheet();
      });
    }

    if (jumpBtn) {
      jumpBtn.addEventListener("click", () => {
        this.setActiveBottomBtn(jumpBtn);
        this.openPickerSheet();
      });
    }

    if (toursBtn) {
      toursBtn.addEventListener("click", () => {
        this.setActiveBottomBtn(toursBtn);
        this.closeAllSheets();
        const toursModal = document.getElementById("toursModalBackdrop");
        if (toursModal && window.app && window.app.ui) {
          const toursList = document.getElementById("toursGridContainer");
          window.app.ui.populateToursList(toursList);
          toursModal.classList.add("open");
        }
      });
    }

    if (filtersBtn) {
      filtersBtn.addEventListener("click", () => {
        this.setActiveBottomBtn(filtersBtn);
        this.openFiltersSheet();
      });
    }

    if (codexBtn) {
      codexBtn.addEventListener("click", () => {
        this.setActiveBottomBtn(codexBtn);
        this.toggleSidebarCodex();
      });
    }
  }

  setActiveBottomBtn(activeBtn) {
    document.querySelectorAll(".mobile-bottom-btn").forEach(b => b.classList.remove("active"));
    if (activeBtn) activeBtn.classList.add("active");
  }

  // 4. Collapsible Bottom Sheet Detail Sidebar
  setupBottomSheetSidebar() {
    const dragHandle = document.getElementById("mobileDragHandle");
    if (!this.sidebar) return;

    if (dragHandle) {
      dragHandle.addEventListener("click", () => {
        this.toggleSidebarExpand();
      });

      // Touch drag gestures
      dragHandle.addEventListener("touchstart", (e) => {
        this.touchStartY = e.touches[0].clientY;
      }, { passive: true });

      dragHandle.addEventListener("touchmove", (e) => {
        this.touchCurrentY = e.touches[0].clientY;
      }, { passive: true });

      dragHandle.addEventListener("touchend", () => {
        const delta = this.touchCurrentY - this.touchStartY;
        if (delta < -30) {
          // Swiped up -> expand
          this.expandSidebar();
        } else if (delta > 30) {
          // Swiped down -> collapse to peek
          this.peekSidebar();
        }
      });
    }
  }

  toggleSidebarCodex() {
    if (!this.sidebar) return;
    if (this.sidebar.classList.contains("expanded") || (!this.sidebar.classList.contains("peek") && !this.sidebar.classList.contains("closed"))) {
      this.peekSidebar();
    } else {
      this.expandSidebar();
    }
  }

  toggleSidebarExpand() {
    if (!this.sidebar) return;
    if (this.sidebar.classList.contains("expanded") || (!this.sidebar.classList.contains("peek") && !this.sidebar.classList.contains("closed"))) {
      this.peekSidebar();
    } else {
      this.expandSidebar();
    }
  }

  expandSidebar() {
    if (!this.sidebar) return;
    this.closeAllSheets();
    this.sidebar.classList.remove("closed", "peek");
    this.sidebar.classList.add("expanded");
  }

  peekSidebar() {
    if (!this.sidebar) return;
    this.sidebar.classList.remove("closed", "expanded");
    this.sidebar.classList.add("peek");
  }

  closeSidebar() {
    if (!this.sidebar) return;
    this.sidebar.classList.remove("expanded", "peek", "open");
    this.sidebar.classList.add("closed");
  }

  // 5. Mobile Location Quick Jump Picker Sheet
  setupMobilePicker() {
    const closeBtn = document.getElementById("closeMobilePickerBtn");
    const searchInput = document.getElementById("mobilePickerSearchInput");

    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closePickerSheet());
    }

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.renderPickerList(e.target.value.trim().toLowerCase());
      });
    }

    this.renderPickerList("");
  }

  openPickerSheet() {
    this.closeAllSheets(false);
    if (this.pickerSheet) this.pickerSheet.classList.add("open");
    if (this.backdrop) this.backdrop.classList.add("active");

    const searchInput = document.getElementById("mobilePickerSearchInput");
    if (searchInput) {
      searchInput.value = "";
      this.renderPickerList("");
      setTimeout(() => searchInput.focus(), 150);
    }
  }

  closePickerSheet() {
    if (this.pickerSheet) this.pickerSheet.classList.remove("open");
    if (this.backdrop) this.backdrop.classList.remove("active");
  }

  renderPickerList(filterText = "") {
    const listContainer = document.getElementById("mobilePickerList");
    if (!listContainer || typeof CITIES_DATA === "undefined") return;

    const filtered = CITIES_DATA.filter(city => {
      if (!filterText) return true;
      return city.name.toLowerCase().includes(filterText) ||
             city.hebrew.includes(filterText) ||
             city.transliteration.toLowerCase().includes(filterText) ||
             city.meaning.toLowerCase().includes(filterText) ||
             city.region.toLowerCase().includes(filterText);
    });

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div style="padding:1.5rem; text-align:center; color:var(--text-muted); font-size:0.85rem;">
          No matching biblical locations found.
        </div>
      `;
      return;
    }

    // Sort alphabetically
    filtered.sort((a, b) => a.name.localeCompare(b.name));

    listContainer.innerHTML = filtered.map(city => `
      <div class="mobile-picker-item" data-id="${city.id}">
        <div>
          <div class="mobile-picker-name">
            <span>${city.name}</span>
            <span class="mobile-picker-hebrew">${city.hebrew}</span>
          </div>
          <div class="mobile-picker-meta">${city.transliteration} • ${city.region}</div>
        </div>
        <span class="mobile-picker-badge">${city.category}</span>
      </div>
    `).join("");

    listContainer.querySelectorAll(".mobile-picker-item").forEach(item => {
      item.addEventListener("click", () => {
        const id = item.getAttribute("data-id");
        const found = CITIES_DATA.find(c => c.id === id);
        if (found && window.app && window.app.map) {
          window.app.map.flyTo([found.lat, found.lng], 11);
          window.app.map.highlightSite(found.id, [found.lat, found.lng]);
          if (window.app.ui) window.app.ui.openDossier(found.id);
        }
        this.closePickerSheet();
        this.expandSidebar();
      });
    });
  }

  // 6. Mobile Layers & Filters Bottom Sheet
  setupMobileFilters() {
    const closeBtn = document.getElementById("closeMobileFiltersBtn");
    const doneBtn = document.getElementById("mobFiltersDoneBtn");

    if (closeBtn) closeBtn.addEventListener("click", () => this.closeFiltersSheet());
    if (doneBtn) doneBtn.addEventListener("click", () => this.closeFiltersSheet());

    if (this.filtersSheet) {
      this.filtersSheet.querySelectorAll(".filter-chip").forEach(chip => {
        chip.addEventListener("click", () => {
          const filterKey = chip.getAttribute("data-filter");
          const isActive = chip.classList.contains("active");

          if (filterKey === "all") {
            const newState = !isActive;
            this.filtersSheet.querySelectorAll(".filter-chip").forEach(c => c.classList.toggle("active", newState));
            // Also sync desktop filter chips
            document.querySelectorAll(".layer-filter-bar .filter-chip").forEach(c => c.classList.toggle("active", newState));
            if (window.app && window.app.map) window.app.map.toggleLayer("all", newState);
            return;
          }

          chip.classList.toggle("active");
          const activeNow = chip.classList.contains("active");

          // Sync matching desktop chip
          const desktopChip = document.querySelector(`.layer-filter-bar .filter-chip[data-filter="${filterKey}"]`);
          if (desktopChip) desktopChip.classList.toggle("active", activeNow);

          if (window.app && window.app.map) {
            window.app.map.toggleLayer(filterKey, activeNow);
          }
        });
      });
    }
  }

  openFiltersSheet() {
    this.closeAllSheets(false);
    if (this.filtersSheet) this.filtersSheet.classList.add("open");
    if (this.backdrop) this.backdrop.classList.add("active");
  }

  closeFiltersSheet() {
    if (this.filtersSheet) this.filtersSheet.classList.remove("open");
    if (this.backdrop) this.backdrop.classList.remove("active");
  }

  // 7. Mobile Navigation Drawer Action Handlers
  setupMobileNavActions() {
    const searchNavBtn = document.getElementById("mobNavSearchBtn");
    const jumpNavBtn = document.getElementById("mobNavJumpBtn");
    const toursNavBtn = document.getElementById("mobNavToursBtn");
    const codexNavBtn = document.getElementById("mobNavCodexBtn");
    const recenterNavBtn = document.getElementById("mobNavRecenterBtn");

    const travelCalcNavBtn = document.getElementById("mobNavTravelCalcBtn");
    const lifeNavBtn = document.getElementById("mobNavLifeBtn");
    const videosNavBtn = document.getElementById("mobNavVideosBtn");
    const welcomeNavBtn = document.getElementById("mobNavWelcomeBtn");

    if (searchNavBtn) {
      searchNavBtn.addEventListener("click", () => {
        this.closeNavSheet();
        this.openPickerSheet();
      });
    }

    if (jumpNavBtn) {
      jumpNavBtn.addEventListener("click", () => {
        this.closeNavSheet();
        this.openPickerSheet();
      });
    }

    if (toursNavBtn) {
      toursNavBtn.addEventListener("click", () => {
        this.closeNavSheet();
        const toursModal = document.getElementById("toursModalBackdrop");
        if (toursModal && window.app && window.app.ui) {
          const toursList = document.getElementById("toursGridContainer");
          window.app.ui.populateToursList(toursList);
          toursModal.classList.add("open");
        }
      });
    }

    if (codexNavBtn) {
      codexNavBtn.addEventListener("click", () => {
        this.closeNavSheet();
        this.expandSidebar();
      });
    }

    if (recenterNavBtn) {
      recenterNavBtn.addEventListener("click", () => {
        this.closeNavSheet();
        if (window.app && window.app.map) {
          window.app.map.flyTo([31.77, 35.23], 7);
        }
      });
    }

    if (travelCalcNavBtn) {
      travelCalcNavBtn.addEventListener("click", () => {
        this.closeNavSheet();
        const modal = document.getElementById("travelCalcModalBackdrop");
        if (modal) modal.classList.add("open");
      });
    }

    if (lifeNavBtn) {
      lifeNavBtn.addEventListener("click", () => {
        this.closeNavSheet();
        const modal = document.getElementById("lifeBackThenModalBackdrop");
        if (modal) modal.classList.add("open");
      });
    }

    if (videosNavBtn) {
      videosNavBtn.addEventListener("click", () => {
        this.closeNavSheet();
        this.expandSidebar();
        const tabVideos = document.getElementById("tabBtn-videos");
        if (tabVideos) tabVideos.click();
      });
    }

    if (welcomeNavBtn) {
      welcomeNavBtn.addEventListener("click", () => {
        this.closeNavSheet();
        const modal = document.getElementById("welcomeModalBackdrop");
        if (modal) modal.classList.add("open");
      });
    }

    // Map Base Styles in Drawer (with checkmarks)
    ["Parchment", "Satellite", "Modern"].forEach(style => {
      const btn = document.getElementById(`mobStyle${style}`);
      if (btn) {
        btn.addEventListener("click", () => {
          const styleKey = btn.getAttribute("data-style");
          if (styleKey && window.app && window.app.map) {
            window.app.map.setMapTheme(styleKey);
            // Update checkmarks in drawer
            ["Parchment", "Satellite", "Modern"].forEach(s => {
              const b = document.getElementById(`mobStyle${s}`);
              const check = document.getElementById(`check${s}`);
              if (b) b.classList.toggle("active", s === style);
              if (check) check.style.display = (s === style) ? "inline-block" : "none";
            });
          }
          this.closeNavSheet();
        });
      }
    });

    // Map Layers & Visibility in Drawer
    const drawerFiltersSection = document.getElementById("mobileNavFiltersSection");
    if (drawerFiltersSection) {
      drawerFiltersSection.querySelectorAll(".filter-chip").forEach(chip => {
        chip.addEventListener("click", () => {
          const filterKey = chip.getAttribute("data-filter");
          const isActive = chip.classList.contains("active");

          if (filterKey === "all") {
            const newState = !isActive;
            drawerFiltersSection.querySelectorAll(".filter-chip").forEach(c => c.classList.toggle("active", newState));
            if (this.filtersSheet) this.filtersSheet.querySelectorAll(".filter-chip").forEach(c => c.classList.toggle("active", newState));
            document.querySelectorAll(".filter-chips-bar .filter-chip").forEach(c => c.classList.toggle("active", newState));
            if (window.app && window.app.map) window.app.map.toggleLayer("all", newState);
            return;
          }

          chip.classList.toggle("active");
          const activeNow = chip.classList.contains("active");
          if (this.filtersSheet) {
            const sheetChip = this.filtersSheet.querySelector(`.filter-chip[data-filter="${filterKey}"]`);
            if (sheetChip) sheetChip.classList.toggle("active", activeNow);
          }
          const desktopChip = document.querySelector(`.filter-chips-bar .filter-chip[data-filter="${filterKey}"]`);
          if (desktopChip) desktopChip.classList.toggle("active", activeNow);

          if (window.app && window.app.map) {
            window.app.map.toggleLayer(filterKey, activeNow);
          }
        });
      });
    }

    const resetFiltersBtn = document.getElementById("mobNavResetFiltersBtn");
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener("click", () => {
        if (drawerFiltersSection) drawerFiltersSection.querySelectorAll(".filter-chip").forEach(c => c.classList.add("active"));
        if (this.filtersSheet) this.filtersSheet.querySelectorAll(".filter-chip").forEach(c => c.classList.add("active"));
        document.querySelectorAll(".filter-chips-bar .filter-chip").forEach(c => c.classList.add("active"));
        if (window.app && window.app.map) window.app.map.toggleLayer("all", true);
      });
    }

    // Timeline & Biblical Eras Chips in Drawer
    if (this.navSheet) {
      this.navSheet.querySelectorAll(".mob-era-chip").forEach(chip => {
        chip.addEventListener("click", () => {
          const year = parseInt(chip.getAttribute("data-year"), 10);
          if (!isNaN(year) && window.app && window.app.timeline) {
            window.app.timeline.setYear(year);
          }
          this.closeNavSheet();
        });
      });
    }

    // Quick Region Focus in Drawer
    if (this.navSheet) {
      this.navSheet.querySelectorAll(".region-item").forEach(item => {
        item.addEventListener("click", () => {
          const region = item.getAttribute("data-region");
          if (region && window.app && window.app.map) {
            window.app.map.zoomToRegion(region);
          }
          this.closeNavSheet();
        });
      });
    }
  }
}

if (typeof window !== "undefined") {
  window.MobileShell = MobileShell;
}
