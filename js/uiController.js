/**
 * OLD TESTAMENT GEOGRAPHY - UI CONTROLLER
 * Manages Global Search, 5-Tab Detail Drawer, Hebrew Pronunciation Engine,
 * Scripture Version Comparisons, Guided Tours HUD, and Dropdowns.
 */

class UIController {
  constructor() {
    this.sidebar = null;
    this.currentDossierId = null;
    this.currentScriptureVersion = "kjv"; // 'kjv', 'hebrew', 'jst', 'insight'
    this.activeTour = null;
    this.currentTourStopIndex = 0;
  }

  init() {
    console.log("📜 Initializing Old Testament UI Controller...");

    this.sidebar = document.getElementById("detailSidebar");
    this.setupDropdowns();
    this.setupSearch();
    this.setupFilterChips();
    this.setupSidebarTabs();
    this.setupToursModal();
    this.populateQuickJumpSelect();
  }

  // Header Dropdowns (Regions, Map Themes)
  setupDropdowns() {
    const regionBtn = document.getElementById("regionSelectBtn");
    const regionDropdown = document.getElementById("regionDropdown");
    const mapStyleBtn = document.getElementById("mapStyleToggle");
    const mapStyleDropdown = document.getElementById("mapStyleDropdown");

    if (regionBtn && regionDropdown) {
      regionBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        regionDropdown.classList.toggle("show");
        if (mapStyleDropdown) mapStyleDropdown.classList.remove("show");
      });

      regionDropdown.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", () => {
          const region = item.getAttribute("data-region");
          if (region && window.app && window.app.map) {
            window.app.map.zoomToRegion(region);
          }
          regionDropdown.classList.remove("show");
        });
      });
    }

    if (mapStyleBtn && mapStyleDropdown) {
      mapStyleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        mapStyleDropdown.classList.toggle("show");
        if (regionDropdown) regionDropdown.classList.remove("show");
      });

      mapStyleDropdown.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", () => {
          const style = item.getAttribute("data-style");
          if (style && window.app && window.app.map) {
            window.app.map.setMapTheme(style);

            const mapStyleText = document.getElementById("mapStyleText");
            const mapStyleIcon = document.getElementById("mapStyleIcon");
            if (style === "parchment") {
              if (mapStyleText) mapStyleText.textContent = "Ancient Relief";
              if (mapStyleIcon) mapStyleIcon.textContent = "📜";
            } else if (style === "satellite") {
              if (mapStyleText) mapStyleText.textContent = "Satellite Earth";
              if (mapStyleIcon) mapStyleIcon.textContent = "🛰️";
            } else if (style === "modern") {
              if (mapStyleText) mapStyleText.textContent = "Modern Roads";
              if (mapStyleIcon) mapStyleIcon.textContent = "🗺️";
            }
          }
          mapStyleDropdown.classList.remove("show");
        });
      });
    }

    // Close dropdowns on outside click
    document.addEventListener("click", () => {
      if (regionDropdown) regionDropdown.classList.remove("show");
      if (mapStyleDropdown) mapStyleDropdown.classList.remove("show");
    });
  }

  // Global Search Engine with Hebrew & English Support
  setupSearch() {
    const searchInput = document.getElementById("globalSearchInput");
    const clearBtn = document.getElementById("clearSearchBtn");
    const resultsDropdown = document.getElementById("searchResultsDropdown");

    if (!searchInput || !resultsDropdown) return;

    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (query.length > 0) {
        if (clearBtn) clearBtn.style.display = "block";
        this.renderSearchResults(query, resultsDropdown);
      } else {
        if (clearBtn) clearBtn.style.display = "none";
        resultsDropdown.style.display = "none";
      }
    });

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        clearBtn.style.display = "none";
        resultsDropdown.style.display = "none";
        searchInput.focus();
      });
    }

    document.addEventListener("click", (e) => {
      if (!searchInput.contains(e.target) && !resultsDropdown.contains(e.target)) {
        resultsDropdown.style.display = "none";
      }
    });
  }

  renderSearchResults(query, container) {
    if (typeof CITIES_DATA === "undefined") return;

    const matches = CITIES_DATA.filter(city => {
      return city.name.toLowerCase().includes(query) ||
             city.hebrew.includes(query) ||
             city.transliteration.toLowerCase().includes(query) ||
             city.meaning.toLowerCase().includes(query) ||
             city.significance.toLowerCase().includes(query);
    });

    if (matches.length === 0) {
      container.innerHTML = `
        <div style="padding:12px; text-align:center; color:var(--text-muted); font-size:0.8rem;">
          No matching biblical places or scriptures found.
        </div>
      `;
      container.style.display = "block";
      return;
    }

    container.innerHTML = matches.slice(0, 8).map(city => `
      <div class="search-result-item" data-id="${city.id}">
        <div class="search-result-left">
          <div class="search-result-title">
            <span>${city.name}</span>
            <span class="search-result-hebrew">${city.hebrew}</span>
          </div>
          <div class="search-result-sub"><em>${city.transliteration}</em> • ${city.meaning}</div>
        </div>
        <span class="search-result-tag">${city.category}</span>
      </div>
    `).join("");

    container.querySelectorAll(".search-result-item").forEach(item => {
      item.addEventListener("click", () => {
        const id = item.getAttribute("data-id");
        const foundCity = CITIES_DATA.find(c => c.id === id);
        if (foundCity && window.app && window.app.map) {
          window.app.map.flyTo([foundCity.lat, foundCity.lng], 11);
          window.app.map.highlightSite(foundCity.id, [foundCity.lat, foundCity.lng]);
          this.openDossier(foundCity.id);
        }
        container.style.display = "none";
      });
    });

    container.style.display = "block";
  }

  // Quick Jump Select Box
  populateQuickJumpSelect() {
    const select = document.getElementById("quickJumpSelect");
    if (!select || typeof CITIES_DATA === "undefined") return;

    select.innerHTML = '<option value="" disabled selected>Jump to Biblical Location...</option>';
    
    // Sort alphabetically
    const sorted = [...CITIES_DATA].sort((a, b) => a.name.localeCompare(b.name));
    sorted.forEach(city => {
      const opt = document.createElement("option");
      opt.value = city.id;
      opt.textContent = `${city.name} (${city.hebrew})`;
      select.appendChild(opt);
    });

    select.addEventListener("change", (e) => {
      const cityId = e.target.value;
      const city = CITIES_DATA.find(c => c.id === cityId);
      if (city && window.app && window.app.map) {
        window.app.map.flyTo([city.lat, city.lng], 11);
        window.app.map.highlightSite(city.id, [city.lat, city.lng]);
        this.openDossier(city.id);
      }
      select.value = "";
    });
  }

  // Filter Chips Bar
  setupFilterChips() {
    const chips = document.querySelectorAll(".filter-chip");
    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        const key = chip.getAttribute("data-filter");
        const isActive = chip.classList.contains("active");

        if (key === "all") {
          const newState = !isActive;
          chips.forEach(c => c.classList.toggle("active", newState));
          if (window.app && window.app.map) window.app.map.toggleLayer("all", newState);
          return;
        }

        chip.classList.toggle("active");
        const activeNow = chip.classList.contains("active");
        if (window.app && window.app.map) {
          window.app.map.toggleLayer(key, activeNow);
        }
      });
    });
  }

  // 5-Tab Sidebar Setup
  setupSidebarTabs() {
    const tabBtns = document.querySelectorAll(".sidebar-tab-btn");
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-tab");
        tabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        document.querySelectorAll(".tab-pane").forEach(pane => {
          pane.classList.remove("active");
        });

        const activePane = document.getElementById(`tab-${targetTab}`);
        if (activePane) activePane.classList.add("active");
      });
    });

    const closeBtn = document.getElementById("sidebarCloseBtn");
    const toggleBtn = document.getElementById("sidebarToggleBtn");

    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closeDossier());
    }

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        if (this.sidebar) this.sidebar.classList.toggle("closed");
      });
    }
  }

  // Open & Render 5-Tab Dossier
  openDossier(siteId) {
    this.currentDossierId = siteId;
    if (!this.sidebar) return;

    const city = (typeof CITIES_DATA !== "undefined") ? CITIES_DATA.find(c => c.id === siteId) : null;
    const dossier = (typeof window.getPlaceDossier === "function") 
      ? window.getPlaceDossier(siteId) 
      : ((typeof PLACE_DOSSIERS !== "undefined") ? PLACE_DOSSIERS[siteId] : null);

    if (!city) return;

    this.currentCity = city;
    this.currentDossier = dossier;

    // 1. Header Information
    const titleElem = document.getElementById("sidebarTitle");
    const hebrewScriptElem = document.getElementById("sidebarHebrewScript");
    const hebrewTranslitElem = document.getElementById("sidebarHebrewTranslit");
    const hebrewMeaningElem = document.getElementById("sidebarHebrewMeaning");

    if (titleElem) titleElem.textContent = city.name;
    if (hebrewScriptElem) hebrewScriptElem.textContent = city.hebrew;
    if (hebrewTranslitElem) hebrewTranslitElem.textContent = city.transliteration;
    if (hebrewMeaningElem) {
      if (city.strongs) {
        hebrewMeaningElem.innerHTML = `<span>${city.meaning}</span> <span style="font-size:0.68rem; background:rgba(197,160,89,0.25); padding:1px 5px; border-radius:3px; margin-left:4px; font-family:'Inter', sans-serif; font-weight:700;">${city.strongs}</span>`;
      } else {
        hebrewMeaningElem.textContent = city.meaning;
      }
    }

    // Attach audio pronunciation click
    const pronounceBtn = document.getElementById("btnPronounceHebrew");
    if (pronounceBtn) {
      pronounceBtn.onclick = () => this.pronounceHebrew(city.hebrew, city.transliteration);
    }

    // 2. Tab 1: Overview
    const overviewPane = document.getElementById("tab-overview");
    if (overviewPane) {
      const overviewText = dossier ? dossier.overview : city.significance;
      
      // Check for matching Bible & Pearl of Great Price Videos
      const matchingVideos = (typeof CHURCH_BIBLE_VIDEOS !== "undefined")
        ? CHURCH_BIBLE_VIDEOS.filter(v => v.locations && v.locations.includes(siteId))
        : [];

      let videosHtml = "";
      if (matchingVideos.length > 0) {
        videosHtml = `
          <div class="dossier-section" style="margin-top:1.25rem;">
            <div class="dossier-section-title">🎬 Church Scripture & Bible Videos</div>
            ${matchingVideos.map(vid => `
              <div style="background:var(--bg-parchment-card); border:1px solid var(--border-gold); border-radius:6px; padding:10px; margin-bottom:8px; box-shadow:var(--shadow-sm);">
                <div style="font-weight:700; font-size:0.86rem; color:var(--color-crimson);">${vid.title}</div>
                <div style="font-size:0.72rem; color:var(--text-muted); margin:2px 0;">${vid.scriptureRef} • ${vid.category}</div>
                <div style="font-size:0.78rem; color:var(--text-secondary); line-height:1.45;">${vid.description}</div>
                <a href="${vid.churchUrl}" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:5px; margin-top:6px; font-size:0.75rem; font-weight:700; color:var(--color-lapis); text-decoration:none;">
                  <span>▶ Watch Video on ChurchofJesusChrist.org</span>
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            `).join("")}
          </div>
        `;
      }

      overviewPane.innerHTML = `
        <div class="dossier-lead">${overviewText.replace(/\n\n/g, "<br><br>")}</div>
        <div class="dossier-section">
          <div class="dossier-section-title">📍 Geographic & Scriptural Coordinates</div>
          <p style="font-size:0.8rem; color:var(--text-secondary);">
            <strong>Region:</strong> ${city.region}<br>
            <strong>Biblical Era:</strong> ${city.era} (${city.startYear < 0 ? Math.abs(city.startYear) + ' BC' : city.startYear})<br>
            <strong>Key Passages:</strong> <em>${city.scriptureHighlight}</em>
          </p>
        </div>
        ${videosHtml}
      `;
    }

    // 3. Tab 2: Teachings & Covenants
    const teachingsPane = document.getElementById("tab-teachings");
    if (teachingsPane) {
      if (dossier && dossier.teachings) {
        const t = dossier.teachings;
        teachingsPane.innerHTML = `
          <div class="covenant-box">
            <div class="covenant-box-title">Prophet & Teacher</div>
            <div>${t.teacher}</div>
          </div>
          <div class="covenant-box">
            <div class="covenant-box-title">What Was Taught & Covenant Revealed</div>
            <div>${t.whatWasTaught}</div>
          </div>
          <div class="covenant-box">
            <div class="covenant-box-title">Why Taught / Eternal Purpose</div>
            <div>${t.whyTaught}</div>
          </div>
          <div class="covenant-box">
            <div class="covenant-box-title">Response of the People</div>
            <div>${t.howAccepted}</div>
          </div>
        `;
      } else {
        teachingsPane.innerHTML = `
          <div class="covenant-box">
            <div class="covenant-box-title">Scriptural Significance</div>
            <div>${city.significance}</div>
          </div>
        `;
      }
    }

    // 4. Tab 3: Scriptures (Multi-Version Engine)
    this.renderScripturesTab(city, dossier);

    // 5. Tab 4: Patriarchs & Prophets
    const peoplePane = document.getElementById("tab-people");
    if (peoplePane) {
      if (dossier && dossier.peopleAndCovenant) {
        const sections = dossier.peopleAndCovenant.split("\n\n");
        peoplePane.innerHTML = sections.map(sec => {
          const parts = sec.split(":");
          const name = parts[0] ? parts[0].replace("•", "").trim() : "";
          const bio = parts[1] ? parts[1].trim() : "";
          return `
            <div class="patriarch-card">
              <div class="patriarch-avatar">${name.charAt(0)}</div>
              <div class="patriarch-details">
                <div class="patriarch-name">${name}</div>
                <div class="patriarch-bio">${bio}</div>
              </div>
            </div>
          `;
        }).join("");
      } else {
        peoplePane.innerHTML = `<p style="font-size:0.85rem;">Key figures include prophets and patriarchs associated with ${city.name}.</p>`;
      }
    }

    // 6. Tab 5: Archaeology & History
    const historyPane = document.getElementById("tab-history");
    if (historyPane) {
      if (dossier && dossier.archaeologyAndHistory) {
        const items = dossier.archaeologyAndHistory.split("\n\n");
        historyPane.innerHTML = items.map(item => `
          <div class="timeline-item">
            <div class="timeline-desc">${item.replace("•", "").trim()}</div>
          </div>
        `).join("");
      } else {
        historyPane.innerHTML = `<p style="font-size:0.85rem;">Archaeological excavations verify the Middle Bronze and Iron Age Israelite occupation of ${city.name}.</p>`;
      }
    }

    // Open drawer
    this.sidebar.classList.remove("closed");
  }

  // Render Scriptures with Multi-Version Selector (KJV, NIV, Hebrew, JST/PGP, Insight)
  renderScripturesTab(city, dossier) {
    const scripturesPane = document.getElementById("tab-scriptures");
    if (!scripturesPane) return;

    if (city) this.currentCity = city;
    if (dossier) this.currentDossier = dossier;
    const activeCity = city || this.currentCity;
    const activeDossier = dossier || this.currentDossier;

    const list = (activeDossier && activeDossier.scriptures) ? activeDossier.scriptures : [];

    scripturesPane.innerHTML = `
      <div class="scripture-version-selector">
        <button class="scripture-version-btn ${this.currentScriptureVersion === 'kjv' ? 'active' : ''}" data-version="kjv">KJV</button>
        <button class="scripture-version-btn ${this.currentScriptureVersion === 'niv' ? 'active' : ''}" data-version="niv">NIV</button>
        <button class="scripture-version-btn ${this.currentScriptureVersion === 'hebrew' ? 'active' : ''}" data-version="hebrew">Hebrew</button>
        <button class="scripture-version-btn ${this.currentScriptureVersion === 'jst' ? 'active' : ''}" data-version="jst">JST / PGP</button>
        <button class="scripture-version-btn ${this.currentScriptureVersion === 'insight' ? 'active' : ''}" data-version="insight">Insight</button>
      </div>
      <div id="scriptureCardsContainer"></div>
    `;

    // Bind version buttons
    scripturesPane.querySelectorAll(".scripture-version-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.currentScriptureVersion = btn.getAttribute("data-version");
        this.renderScripturesTab(activeCity, activeDossier);
      });
    });

    const cardsContainer = document.getElementById("scriptureCardsContainer");
    if (!cardsContainer) return;

    if (list.length === 0) {
      cardsContainer.innerHTML = `<p style="font-size:0.85rem; color:var(--text-muted);">See key scriptures: ${activeCity ? activeCity.scriptureHighlight : ''}</p>`;
      return;
    }

    cardsContainer.innerHTML = list.map(item => {
      const translation = (typeof SCRIPTURE_TRANSLATIONS !== "undefined")
        ? SCRIPTURE_TRANSLATIONS.get(item.ref, item.text)
        : null;

      let verseText = item.text;
      let textClass = "";
      let versionBadge = "";

      if (this.currentScriptureVersion === "niv") {
        verseText = (translation && translation.niv) ? translation.niv : item.text;
        versionBadge = '<span class="version-badge niv-badge">NIV (Modern)</span>';
      } else if (this.currentScriptureVersion === "hebrew") {
        if (translation && translation.hebrew) {
          verseText = `${translation.hebrew}<span class="hebrew-translit-line"><strong>Transliteration:</strong> ${translation.translit || ''}</span>`;
          textClass = "hebrew-mode";
        }
        versionBadge = '<span class="version-badge hebrew-badge">Hebrew (עִבְרִית)</span>';
      } else if (this.currentScriptureVersion === "jst") {
        verseText = (translation && translation.jst) ? translation.jst : item.text;
        versionBadge = '<span class="version-badge jst-badge">JST / Pearl of Great Price</span>';
      } else if (this.currentScriptureVersion === "insight") {
        verseText = (translation && translation.insight) ? translation.insight : item.text;
        versionBadge = '<span class="version-badge insight-badge">Doctrinal Insight</span>';
      } else {
        // default kjv
        verseText = (translation && translation.kjv) ? translation.kjv : item.text;
        versionBadge = '<span class="version-badge kjv-badge">King James Version</span>';
      }

      const studyLink = (translation && translation.churchLink) ? translation.churchLink : item.churchLink;

      return `
        <div class="scripture-card">
          <div class="scripture-header">
            <div class="scripture-header-title">
              <span class="scripture-ref">${item.ref}</span>
              ${versionBadge}
            </div>
            <a href="${studyLink}" target="_blank" rel="noopener" class="scripture-link-church" title="Open on ChurchofJesusChrist.org">
              <span>Church Study Link</span>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
          <div class="scripture-text ${textClass}">${verseText}</div>
        </div>
      `;
    }).join("");
  }

  // Show 12 Tribe Allotment Dossier
  showTribeDossier(tribe) {
    if (!this.sidebar) return;

    const titleElem = document.getElementById("sidebarTitle");
    const hebrewScriptElem = document.getElementById("sidebarHebrewScript");
    const hebrewTranslitElem = document.getElementById("sidebarHebrewTranslit");
    const hebrewMeaningElem = document.getElementById("sidebarHebrewMeaning");

    if (titleElem) titleElem.textContent = tribe.name;
    if (hebrewScriptElem) hebrewScriptElem.textContent = tribe.hebrew;
    if (hebrewTranslitElem) hebrewTranslitElem.textContent = tribe.transliteration;
    if (hebrewMeaningElem) hebrewMeaningElem.textContent = tribe.symbol;

    const overviewPane = document.getElementById("tab-overview");
    if (overviewPane) {
      overviewPane.innerHTML = `
        <div class="dossier-lead">${tribe.description}</div>
        <div class="dossier-section">
          <div class="dossier-section-title">📜 Patriarchal Blessing</div>
          <div class="covenant-box">${tribe.blessing}</div>
        </div>
      `;
    }

    const teachingsPane = document.getElementById("tab-teachings");
    if (teachingsPane) {
      teachingsPane.innerHTML = `
        <div class="covenant-box">
          <div class="covenant-box-title">Patriarch & Prophet</div>
          <div>Jacob (Israel) and Moses pronouncing prophetic tribal blessings</div>
        </div>
        <div class="covenant-box">
          <div class="covenant-box-title">Prophetic Covenant Blessing</div>
          <div>${tribe.blessing}</div>
        </div>
        <div class="covenant-box">
          <div class="covenant-box-title">Tribal Symbol & Calling</div>
          <div>${tribe.symbol} — Allotted inheritance in the Promised Land under Joshua</div>
        </div>
      `;
    }

    const peoplePane = document.getElementById("tab-people");
    if (peoplePane) {
      peoplePane.innerHTML = `
        <div class="patriarch-card">
          <div class="patriarch-avatar">${tribe.name.charAt(0)}</div>
          <div class="patriarch-details">
            <div class="patriarch-name">${tribe.name} (${tribe.hebrew})</div>
            <div class="patriarch-bio">Son of Jacob. Founder and patriarchal forefather of the Tribe of ${tribe.name}.</div>
          </div>
        </div>
        <div class="patriarch-card">
          <div class="patriarch-avatar">J</div>
          <div class="patriarch-details">
            <div class="patriarch-name">Jacob (Israel)</div>
            <div class="patriarch-bio">Conferred the eternal patriarchal blessing upon ${tribe.name} in Egypt before his passing (Genesis 49).</div>
          </div>
        </div>
      `;
    }

    const historyPane = document.getElementById("tab-history");
    if (historyPane) {
      historyPane.innerHTML = `
        <div class="timeline-item">
          <div class="timeline-desc">~1800 BC: Birth of ${tribe.name} to Jacob in Paddan-Aram / Canaan.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-desc">~1400 BC: Allotment of tribal territory by Joshua and Eleazar the priest by casting lots at the Tabernacle in Shiloh (Joshua 13–21).</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-desc">~1000 BC: United Monarchy of David and Solomon incorporates the territory of ${tribe.name}.</div>
        </div>
      `;
    }

    const tribeDossier = {
      scriptures: [
        { ref: "Genesis 49:1-2", text: "And Jacob called unto his sons, and said, Gather yourselves together, that I may tell you that which shall befall you in the last days.", churchLink: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/49?lang=eng#1" },
        { ref: "Deuteronomy 33:1", text: "And this is the blessing, wherewith Moses the man of God blessed the children of Israel before his death.", churchLink: "https://www.churchofjesuschrist.org/study/scriptures/ot/deut/33?lang=eng#1" },
        { ref: "Joshua 18:10", text: "And Joshua cast lots for them in Shiloh before the Lord: and there Joshua divided the land unto the children of Israel according to their divisions.", churchLink: "https://www.churchofjesuschrist.org/study/scriptures/ot/josh/18?lang=eng#10" }
      ]
    };
    const tribeCity = { name: tribe.name, scriptureHighlight: "Genesis 49; Deuteronomy 33; Joshua 13-21" };
    this.renderScripturesTab(tribeCity, tribeDossier);

    // Switch to Overview tab
    document.querySelectorAll(".sidebar-tab-btn").forEach(b => b.classList.remove("active"));
    const firstTab = document.querySelector(".sidebar-tab-btn[data-tab='overview']");
    if (firstTab) firstTab.classList.add("active");

    document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
    if (overviewPane) overviewPane.classList.add("active");

    this.sidebar.classList.remove("closed");
  }

  // Audio Pronunciation Engine (Web Speech API)
  pronounceHebrew(hebrewText, transliteration) {
    if ("speechSynthesis" in window) {
      // Cancel previous
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(hebrewText);
      utterance.lang = "he-IL"; // Hebrew
      utterance.rate = 0.85;

      // Check if Hebrew voice is installed, else use default
      const voices = window.speechSynthesis.getVoices();
      const heVoice = voices.find(v => v.lang.startsWith("he"));
      if (heVoice) utterance.voice = heVoice;

      window.speechSynthesis.speak(utterance);
    } else {
      alert(`Pronunciation: ${transliteration} (${hebrewText})`);
    }
  }

  closeDossier() {
    if (this.sidebar) this.sidebar.classList.add("closed");
  }

  // Guided Tours Modal & HUD
  setupToursModal() {
    const toursBtn = document.getElementById("storyToursBtn");
    const modalBackdrop = document.getElementById("toursModalBackdrop");
    const closeBtn = document.getElementById("toursModalCloseBtn");
    const toursList = document.getElementById("toursGridContainer");

    if (!toursBtn || !modalBackdrop) return;

    toursBtn.addEventListener("click", () => {
      this.populateToursList(toursList);
      modalBackdrop.classList.add("open");
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modalBackdrop.classList.remove("open");
      });
    }

    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove("open");
      }
    });
  }

  populateToursList(container) {
    if (!container || typeof TOURS_DATA === "undefined") return;

    container.innerHTML = TOURS_DATA.map(tour => `
      <div class="tour-card" data-id="${tour.id}">
        <div class="tour-card-header">
          <div class="tour-card-title">${tour.title}</div>
          <span class="tour-card-stops">${tour.stopsCount} Sacred Stops</span>
        </div>
        <div style="font-family:'Frank Ruhl Libre', serif; direction:rtl; color:var(--color-crimson-deep); font-size:1rem;">${tour.hebrew}</div>
        <div class="tour-card-desc">${tour.description}</div>
      </div>
    `).join("");

    container.querySelectorAll(".tour-card").forEach(card => {
      card.addEventListener("click", () => {
        const tourId = card.getAttribute("data-id");
        this.startTour(tourId);
        document.getElementById("toursModalBackdrop").classList.remove("open");
      });
    });
  }

  startTour(tourId) {
    const tour = TOURS_DATA.find(t => t.id === tourId);
    if (!tour) return;

    this.activeTour = tour;
    this.currentTourStopIndex = 0;
    this.renderTourHUD();
    this.goToTourStop(0);
  }

  renderTourHUD() {
    let hud = document.getElementById("tourHud");
    if (!hud) {
      hud = document.createElement("div");
      hud.id = "tourHud";
      hud.className = "tour-hud";
      document.body.appendChild(hud);
    }

    const stop = this.activeTour.stops[this.currentTourStopIndex];

    hud.innerHTML = `
      <div class="tour-hud-info">
        <div class="tour-hud-title">${this.activeTour.title}</div>
        <div class="tour-hud-step">Stop ${this.currentTourStopIndex + 1} of ${this.activeTour.stops.length}: <b>${stop.name}</b></div>
      </div>
      <div class="tour-hud-nav">
        <button id="tourPrevBtn" class="tour-hud-btn" ${this.currentTourStopIndex === 0 ? 'disabled style="opacity:0.4;"' : ''}>◀</button>
        <button id="tourNextBtn" class="tour-hud-btn" ${this.currentTourStopIndex === this.activeTour.stops.length - 1 ? 'disabled style="opacity:0.4;"' : ''}>▶</button>
        <button id="tourExitBtn" class="tour-hud-exit">Exit Tour</button>
      </div>
    `;

    document.getElementById("tourPrevBtn").onclick = () => {
      if (this.currentTourStopIndex > 0) {
        this.goToTourStop(this.currentTourStopIndex - 1);
      }
    };

    document.getElementById("tourNextBtn").onclick = () => {
      if (this.currentTourStopIndex < this.activeTour.stops.length - 1) {
        this.goToTourStop(this.currentTourStopIndex + 1);
      }
    };

    document.getElementById("tourExitBtn").onclick = () => {
      this.endTour();
    };

    hud.style.display = "flex";
  }

  goToTourStop(index) {
    this.currentTourStopIndex = index;
    const stop = this.activeTour.stops[index];

    if (window.app && window.app.map) {
      window.app.map.flyTo(stop.coords, stop.zoom || 10);
      window.app.map.highlightSite("tour-stop", stop.coords);
    }

    if (stop.siteId) {
      this.openDossier(stop.siteId);
    }

    this.renderTourHUD();
  }

  endTour() {
    this.activeTour = null;
    const hud = document.getElementById("tourHud");
    if (hud) hud.style.display = "none";
  }
}

if (typeof window !== "undefined") {
  window.UIController = UIController;
}
