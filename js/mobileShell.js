/**
 * OLD TESTAMENT GEOGRAPHY - MOBILE SHELL CONTROLLER
 * Full Dynamic Pill & 3-State Sheet Mobile Architecture:
 * - 1. Top Floating Era Capsule (.floating-era-badge): ~34px pill [🟢 ERA: ~Year • Title ▾]
 *      Collapsible #floatingEraBody with historical summary and clickable featured location chips.
 * - 2. Floating Timeline Capsule (.app-timeline-footer): Glassmorphic pill resting ~60px from bottom.
 *      Smooth slide transitions (.timeline-hidden) with zero layer collision.
 * - 3. 3-State Codex Bottom Sheet (.detail-sidebar):
 *      - State 1: Closed on Startup (transform: translateY(115%))
 *      - State 2: Peek (~195px) on pin/search selection with ⌃ Full Codex toggle & auto timeline tuck
 *      - State 3: Expanded (82dvh) with horizontally scrollable tab strip
 *      - Dismissal (✕): Closes sheet and restores floating timeline capsule
 * - 4. 5-Button Touch Navigation Bar (.mobile-bottom-bar, 52px, z-index: 1000):
 *      [🗺️ Map], [🔍 Search], [⚙️ Filters], [📜 Codex], [☰ Menu]
 */

class MobileShell {
  constructor() {
    this.isMobile = false;
    this.navSheet = null;
    this.filtersSheet = null;
    this.pickerSheet = null;
    this.backdrop = null;
    this.sidebar = null;
    this.timelineFooter = null;
    this.floatingEraBadge = null;
    this.mobileExpandCodexBtn = null;
    this.mobileDragHandle = null;
    this.touchStartY = 0;
    this.touchCurrentY = 0;
  }

  init() {
    console.log("📱 Initializing Old Testament Mobile Shell Controller (Dynamic Pill & 3-State Sheet)...");

    this.sidebar = document.getElementById("detailSidebar");
    this.navSheet = document.getElementById("mobileNavSheet");
    this.filtersSheet = document.getElementById("mobileFiltersSheet");
    this.pickerSheet = document.getElementById("mobilePickerSheet");
    this.backdrop = document.getElementById("mobileSheetBackdrop");
    this.timelineFooter = document.querySelector(".app-timeline-footer") || document.getElementById("timelineBar");
    this.floatingEraBadge = document.getElementById("floatingEraBadge");
    this.mobileExpandCodexBtn = document.getElementById("mobileExpandCodexBtn");
    this.mobileDragHandle = document.getElementById("mobileDragHandle");

    this.checkMobile();
    this.setupViewportHeight();
    this.setupFloatingEraCapsule();
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

    // Initial era capsule sync
    if (window.app && window.app.timeline) {
      const curYear = window.app.timeline.currentYear || -1000;
      const era = window.app.timeline.getEraInfo(curYear);
      this.updateEraCapsule(curYear, era);
    }
  }

  checkMobile() {
    this.isMobile = window.matchMedia("(max-width: 768px)").matches || /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent);
    document.documentElement.classList.toggle("layout-mobile", this.isMobile);
    document.body.classList.toggle("layout-mobile", this.isMobile);

    if (this.isMobile && this.sidebar) {
      // State 1: By default closed on mobile so map canvas is completely unobstructed
      if (!this.sidebar.classList.contains("open") && !this.sidebar.classList.contains("expanded") && !this.sidebar.classList.contains("peek")) {
        this.closeCodexSheet();
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

  /* --------------------------------------------------------------------------
     1. Specification 1: Top Floating Era Capsule (.floating-era-badge)
     -------------------------------------------------------------------------- */
  setupFloatingEraCapsule() {
    if (!this.floatingEraBadge) return;

    // Toggle dropdown card on badge click
    this.floatingEraBadge.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        if (e.target.closest(".era-featured-chip")) return;
        this.floatingEraBadge.classList.toggle("is-expanded");
      }
    });

    // Dismiss when tapping outside on map canvas
    const mapElement = document.getElementById("map");
    if (mapElement) {
      mapElement.addEventListener("click", (e) => {
        if (this.floatingEraBadge && !e.target.closest("#floatingEraBadge")) {
          this.floatingEraBadge.classList.remove("is-expanded");
        }
      });
    }

    document.addEventListener("click", (e) => {
      if (window.innerWidth <= 768 && this.floatingEraBadge) {
        if (!e.target.closest("#floatingEraBadge")) {
          this.floatingEraBadge.classList.remove("is-expanded");
        }
      }
    });
  }

  updateEraCapsule(year, era) {
    if (!era) return;
    const tagEl = document.getElementById("floatingEraTag");
    const titleEl = document.getElementById("floatingEraTitle");
    const descEl = document.getElementById("floatingEraDesc");
    const chipsEl = document.getElementById("floatingEraChips");

    if (tagEl) tagEl.textContent = "ERA:";
    if (titleEl) titleEl.textContent = `~${Math.abs(year)} BC • ${era.name}`;
    if (descEl) descEl.textContent = era.summary;

    if (chipsEl && era.featured && era.featured.length && typeof CITIES_DATA !== "undefined") {
      chipsEl.innerHTML = "";
      era.featured.forEach(cityId => {
        const city = CITIES_DATA.find(c => c.id === cityId);
        if (city) {
          const chip = document.createElement("span");
          chip.className = "era-featured-chip";
          chip.textContent = city.name;
          chip.setAttribute("data-city-id", city.id);
          chip.addEventListener("click", (e) => {
            e.stopPropagation();
            if (this.floatingEraBadge) this.floatingEraBadge.classList.remove("is-expanded");
            if (window.app && window.app.ui) {
              window.app.ui.openDossier(city.id);
            }
            if (window.app && window.app.map) {
              window.app.map.flyTo([city.lat, city.lng], 9);
              window.app.map.highlightSite(city.id, [city.lat, city.lng]);
            }
          });
          chipsEl.appendChild(chip);
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
     2. Specification 3: 3-State Codex Bottom Sheet (.detail-sidebar)
     -------------------------------------------------------------------------- */
  setupBottomSheetSidebar() {
    if (!this.sidebar) return;

    // Expand / Collapse toggle button in header
    if (this.mobileExpandCodexBtn) {
      this.mobileExpandCodexBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleCodexMode();
      });
    }

    // Drag handle tap to toggle
    if (this.mobileDragHandle) {
      this.mobileDragHandle.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleCodexMode();
      });
    }

    // Dismissal (✕): Closes completely and restores floating timeline capsule
    const closeBtns = document.querySelectorAll("#closeSidebarBtn, #sidebarCloseBtn, .sidebar-close-btn");
    closeBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (window.innerWidth <= 768) {
          this.closeCodexSheet();
        } else if (window.app && window.app.ui) {
          window.app.ui.closeDossier();
        }
      });
    });

    // Touch drag / swipe down gestures
    const setupSwipe = (element, onSwipeDown) => {
      if (!element) return;
      let startY = 0;
      let startX = 0;

      element.addEventListener("touchstart", (e) => {
        if (e.touches && e.touches[0]) {
          startY = e.touches[0].clientY;
          startX = e.touches[0].clientX;
        }
      }, { passive: true });

      element.addEventListener("touchend", (e) => {
        if (e.changedTouches && e.changedTouches[0]) {
          const deltaY = e.changedTouches[0].clientY - startY;
          const deltaX = Math.abs(e.changedTouches[0].clientX - startX);
          if (deltaY > 35 && deltaY > deltaX) {
            onSwipeDown();
          }
        }
      }, { passive: true });
    };

    const handleSidebarSwipeDown = () => {
      if (!this.sidebar || window.innerWidth > 768) return;
      if (this.sidebar.classList.contains("expanded")) {
        this.openPeekSheet();
      } else if (this.sidebar.classList.contains("peek")) {
        this.closeCodexSheet();
      }
    };

    if (this.mobileDragHandle) setupSwipe(this.mobileDragHandle, handleSidebarSwipeDown);
    const sidebarHeader = document.querySelector("#detailSidebar .sidebar-header");
    if (sidebarHeader) setupSwipe(sidebarHeader, handleSidebarSwipeDown);
  }

  /**
   * State 1: Closed on Startup or Dismissed (✕)
   * Leaves map 100% visible and floating timeline fully usable.
   */
  closeCodexSheet() {
    if (!this.sidebar) return;
    this.sidebar.classList.add("closed");
    this.sidebar.classList.remove("peek", "expanded", "open");

    // Smoothly restore timeline capsule
    const timeline = this.timelineFooter || document.querySelector(".app-timeline-footer") || document.getElementById("timelineBar");
    if (timeline) {
      timeline.classList.remove("timeline-hidden");
    }

    if (this.mobileExpandCodexBtn) {
      this.mobileExpandCodexBtn.textContent = "⌃ Full Codex";
    }

    if (window.app && window.app.map) {
      window.app.map.clearHighlight();
    }

    this.updateBottomNavState();
  }

  /**
   * State 2: Peek (~195px)
   * Triggered when marker pin or search result is selected.
   * CRITICAL: Automatically adds .timeline-hidden to timeline footer for zero collision.
   */
  openPeekSheet() {
    if (!this.sidebar) return;
    this.sidebar.classList.remove("closed", "expanded");
    this.sidebar.classList.add("peek", "open");

    // Smoothly tuck timeline off-screen
    const timeline = this.timelineFooter || document.querySelector(".app-timeline-footer") || document.getElementById("timelineBar");
    if (timeline) {
      timeline.classList.add("timeline-hidden");
    }

    if (this.mobileExpandCodexBtn) {
      this.mobileExpandCodexBtn.textContent = "⌃ Full Codex";
    }

    this.updateBottomNavState();
  }

  /**
   * State 3: Expanded (82dvh)
   * Triggered by tapping ⌃ Full Codex or dragging drag handle up.
   */
  openExpandedSheet() {
    if (!this.sidebar) return;
    this.sidebar.classList.remove("closed", "peek");
    this.sidebar.classList.add("expanded", "open");

    const timeline = this.timelineFooter || document.querySelector(".app-timeline-footer") || document.getElementById("timelineBar");
    if (timeline) {
      timeline.classList.add("timeline-hidden");
    }

    if (this.mobileExpandCodexBtn) {
      this.mobileExpandCodexBtn.textContent = "⌄ Collapse";
    }

    this.updateBottomNavState();
  }

  toggleCodexMode() {
    if (!this.sidebar) return;
    if (this.sidebar.classList.contains("expanded")) {
      this.openPeekSheet();
    } else {
      this.openExpandedSheet();
    }
  }

  /* --------------------------------------------------------------------------
     3. Specification 4: Mobile Bottom Navigation Bar (52px, z-index: 1000)
     [🗺️ Map], [🔍 Search], [⚙️ Filters], [📜 Codex], [☰ Menu]
     -------------------------------------------------------------------------- */
  setupBottomBar() {
    const mapBtn = document.getElementById("mobBottomMapBtn");
    const searchBtn = document.getElementById("mobBottomSearchBtn");
    const filtersBtn = document.getElementById("mobBottomFiltersBtn");
    const codexBtn = document.getElementById("mobBottomCodexBtn");
    const menuBtn = document.getElementById("mobBottomMenuBtn") || document.getElementById("mobBottomToolsBtn");

    // [🗺️ Map]: Primary return button: closes all modals/drawers and restores the clear map view
    if (mapBtn) {
      mapBtn.addEventListener("click", () => {
        this.closeAllSheets();
        this.closeCodexSheet();
        this.updateBottomNavState();
      });
    }

    // [🔍 Search]
    if (searchBtn) {
      searchBtn.addEventListener("click", () => {
        const isOpen = this.pickerSheet && this.pickerSheet.classList.contains("open");
        this.closeAllSheets();
        if (!isOpen) {
          this.openPickerSheet();
        }
        this.updateBottomNavState();
      });
    }

    // [⚙️ Filters]
    if (filtersBtn) {
      filtersBtn.addEventListener("click", () => {
        const isOpen = this.filtersSheet && this.filtersSheet.classList.contains("open");
        this.closeAllSheets();
        if (!isOpen) {
          this.openFiltersSheet();
        }
        this.updateBottomNavState();
      });
    }

    // [📜 Codex]
    if (codexBtn) {
      codexBtn.addEventListener("click", () => {
        this.closeAllSheets();
        if (!this.sidebar) return;
        if (this.sidebar.classList.contains("closed")) {
          this.openPeekSheet();
        } else if (this.sidebar.classList.contains("peek")) {
          this.openExpandedSheet();
        } else {
          this.closeCodexSheet();
        }
      });
    }

    // [☰ Menu]
    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        const isOpen = this.navSheet && this.navSheet.classList.contains("open");
        this.closeAllSheets();
        if (!isOpen) {
          this.openNavSheet();
        }
        this.updateBottomNavState();
      });
    }
  }

  updateBottomNavState() {
    const mapBtn = document.getElementById("mobBottomMapBtn");
    const searchBtn = document.getElementById("mobBottomSearchBtn");
    const filtersBtn = document.getElementById("mobBottomFiltersBtn");
    const codexBtn = document.getElementById("mobBottomCodexBtn");
    const menuBtn = document.getElementById("mobBottomMenuBtn") || document.getElementById("mobBottomToolsBtn");

    document.querySelectorAll(".mobile-bottom-btn").forEach(b => b.classList.remove("active"));

    if (this.filtersSheet && this.filtersSheet.classList.contains("open")) {
      if (filtersBtn) filtersBtn.classList.add("active");
    } else if (this.pickerSheet && this.pickerSheet.classList.contains("open")) {
      if (searchBtn) searchBtn.classList.add("active");
    } else if (this.navSheet && this.navSheet.classList.contains("open")) {
      if (menuBtn) menuBtn.classList.add("active");
    } else if (this.sidebar && !this.sidebar.classList.contains("closed") && (this.sidebar.classList.contains("peek") || this.sidebar.classList.contains("expanded"))) {
      if (codexBtn) codexBtn.classList.add("active");
    } else {
      if (mapBtn) mapBtn.classList.add("active");
    }
  }

  // Mobile Left Slide-out Drawer Menu
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
    this.updateBottomNavState();
  }

  closeNavSheet() {
    if (this.navSheet) this.navSheet.classList.remove("open");
    if (this.backdrop) this.backdrop.classList.remove("active");
    this.updateBottomNavState();
  }

  closeAllSheets(hideBackdrop = true) {
    if (this.navSheet) this.navSheet.classList.remove("open");
    if (this.filtersSheet) this.filtersSheet.classList.remove("open");
    if (this.pickerSheet) this.pickerSheet.classList.remove("open");
    if (hideBackdrop && this.backdrop) this.backdrop.classList.remove("active");

    const modals = document.querySelectorAll(".modal-backdrop.open");
    modals.forEach(m => m.classList.remove("open"));

    this.updateBottomNavState();
  }

  setupMobileHeaderActions() {
    const searchBtn = document.getElementById("mobileSearchToggleBtn");
    const codexBtn = document.getElementById("mobileCodexToggleBtn");

    if (searchBtn) {
      searchBtn.addEventListener("click", () => this.openPickerSheet());
    }

    if (codexBtn) {
      codexBtn.addEventListener("click", () => {
        if (!this.sidebar) return;
        if (this.sidebar.classList.contains("closed")) {
          this.openPeekSheet();
        } else {
          this.closeCodexSheet();
        }
      });
    }
  }

  // 142+ Biblical Locations Quick Picker Sheet
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
    this.updateBottomNavState();
  }

  closePickerSheet() {
    if (this.pickerSheet) this.pickerSheet.classList.remove("open");
    if (this.backdrop) this.backdrop.classList.remove("active");
    this.updateBottomNavState();
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
      listContainer.innerHTML = `<div class="mobile-picker-empty">No biblical sites matching "${filterText}"</div>`;
      return;
    }

    listContainer.innerHTML = filtered.map(city => `
      <div class="mobile-picker-item" data-id="${city.id}">
        <div class="mobile-picker-item-left">
          <div class="mobile-picker-name">${city.name}</div>
          <div class="mobile-picker-meta">${city.transliteration} • ${city.region}</div>
        </div>
        <div class="mobile-picker-hebrew">${city.hebrew}</div>
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
        if (window.innerWidth <= 768) {
          this.openPeekSheet();
        }
      });
    });
  }

  // Mobile Layers & Filters Bottom Sheet
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
            document.querySelectorAll(".layer-filter-bar .filter-chip").forEach(c => c.classList.toggle("active", newState));
            if (window.app && window.app.map) window.app.map.toggleLayer("all", newState);
            return;
          }

          chip.classList.toggle("active");
          const activeNow = chip.classList.contains("active");

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
    this.updateBottomNavState();
  }

  closeFiltersSheet() {
    if (this.filtersSheet) this.filtersSheet.classList.remove("open");
    if (this.backdrop) this.backdrop.classList.remove("active");
    this.updateBottomNavState();
  }

  // Drawer Action Handlers
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
        if (window.innerWidth <= 768) {
          this.openPeekSheet();
        }
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
        if (window.innerWidth <= 768) {
          this.openExpandedSheet();
        }
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
