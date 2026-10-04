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
    this.setupWelcomeModal();
    this.setupTravelCalculator();
    this.setupAncientLifeModal();
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
      
      // Check for matching Bible & Pearl of Great Price Videos banner
      const matchingVideos = (typeof CHURCH_BIBLE_VIDEOS !== "undefined")
        ? CHURCH_BIBLE_VIDEOS.filter(v => v.locations && v.locations.includes(siteId))
        : [];

      let videoBannerHtml = "";
      if (matchingVideos.length > 0) {
        videoBannerHtml = `
          <div style="margin-top:1.15rem; padding:10px 12px; background:rgba(27,54,93,0.06); border:1px solid rgba(27,54,93,0.22); border-radius:6px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; transition:all 0.2s ease;" onclick="document.getElementById('tabBtn-videos').click();" title="Click to view Bible Videos for ${city.name}">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:1.15rem;">🎬</span>
              <div>
                <div style="font-size:0.8rem; font-weight:700; color:var(--color-lapis);">Church Bible Videos Available</div>
                <div style="font-size:0.72rem; color:var(--text-secondary);">${matchingVideos.length} official Church presentation${matchingVideos.length > 1 ? 's' : ''} for ${city.name}</div>
              </div>
            </div>
            <span style="font-size:0.74rem; font-weight:700; color:var(--color-crimson); display:flex; align-items:center; gap:3px;">
              <span>Watch Tab</span>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </span>
          </div>
        `;
      }

      let zedekiahBannerHtml = "";
      if (siteId === "jerusalem") {
        zedekiahBannerHtml = `
          <div class="zedekiah-alert-box">
            <div class="zedekiah-alert-title">
              <span>👑</span>
              <span>Reign of King Zedekiah, Lehi & Laban (~600 BC)</span>
            </div>
            <div class="zedekiah-alert-body">
              In the 1st year of King Zedekiah (~597 BC), Lehi saw a Pillar of Fire and the coming Messiah. Commanded by God, Lehi fled Jerusalem with Sariah, Nephi, Sam, Laman, and Lemuel into the wilderness. Nephi returned on a perilous night mission to retrieve the sacred <strong>Plates of Brass</strong> from Laban’s estate in the Upper City (1 Nephi 1–4; 2 Kings 24:17–20).
            </div>
          </div>
        `;
      }

      overviewPane.innerHTML = `
        ${zedekiahBannerHtml}
        <div class="dossier-lead">${overviewText.replace(/\n\n/g, "<br><br>")}</div>
        <div class="dossier-section">
          <div class="dossier-section-title">📍 Geographic & Scriptural Coordinates</div>
          <p style="font-size:0.8rem; color:var(--text-secondary); line-height:1.6;">
            <strong>Region:</strong> ${city.region}<br>
            <strong>Biblical Era:</strong> ${city.era} (${city.startYear < 0 ? Math.abs(city.startYear) + ' BC' : city.startYear})<br>
            <strong>Key Passages:</strong> <em>${city.scriptureHighlight}</em>
          </p>
        </div>
        ${videoBannerHtml}
      `;
    }

    // 3. Tab 2: Teachings & Covenants
    const teachingsPane = document.getElementById("tab-teachings");
    if (teachingsPane) {
            if (dossier && dossier.teachings) {
        const t = dossier.teachings;
        let messianicHtml = "";
        if (dossier.messianicProphecy) {
          const mp = dossier.messianicProphecy;
          messianicHtml = `
            <div class="messianic-card">
              <div class="messianic-card-header">
                <span class="messianic-badge">✝️ Messianic Typology & Prophecy</span>
              </div>
              <div class="messianic-card-title">${mp.title}</div>
              <div class="messianic-prophecy-ref">📜 Prophecy: ${mp.prophecy}</div>
              <div class="messianic-typology-body">${mp.typology}</div>
              <div class="messianic-fulfillment-box">
                <strong>Fulfilled in Jesus Christ:</strong> ${mp.fulfillment}
              </div>
            </div>
          `;
        }

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
          ${messianicHtml}
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

    // Tab 4: Life Back Then
    this.renderLifeTab(city, dossier);

    // 5. Tab 4: Bible Videos (Dedicated Tab)
    this.renderVideosTab(city, dossier);

    // 6. Tab 5: Patriarchs & Prophets
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

    // 7. Tab 6: Archaeology & History
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
    this.sidebar.classList.remove("closed", "peek");
    this.sidebar.classList.add("open");
    if (window.innerWidth <= 768) {
      this.sidebar.classList.add("expanded");
    }
  }

  // Render Dedicated Bible Videos Tab (Matching New Testament Geography)
  renderVideosTab(city, dossier) {
    const videosPane = document.getElementById("tab-videos");
    if (!videosPane) return;

    const siteId = city ? city.id : "";
    const allVideos = (typeof CHURCH_BIBLE_VIDEOS !== "undefined") ? CHURCH_BIBLE_VIDEOS : [];

    // 1. Direct location matches
    const directMatches = allVideos.filter(v => v.locations && v.locations.includes(siteId));

    // 2. Secondary matches: same era or region, excluding direct matches
    const secondaryMatches = allVideos.filter(v => {
      if (directMatches.some(dm => dm.id === v.id)) return false;
      if (city && city.era && v.category && v.category.toLowerCase().includes(city.era.toLowerCase())) return true;
      return false;
    });

    let displayVideos = [...directMatches];
    if (displayVideos.length === 0) {
      displayVideos = allVideos.slice(0, 4);
    } else if (displayVideos.length < 3 && secondaryMatches.length > 0) {
      displayVideos = [...displayVideos, ...secondaryMatches.slice(0, 3 - displayVideos.length)];
    }

    videosPane.innerHTML = `
      <div class="video-tab-header">
        <div class="video-tab-title">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          <span>Church Scripture & Bible Videos</span>
        </div>
        <div class="video-tab-subtitle">
          Official dramatizations, Old Testament media, and Pearl of Great Price presentations from ChurchofJesusChrist.org.
        </div>
      </div>

      <div class="video-cards-list">
        ${displayVideos.map(vid => `
          <div class="video-card">
            <div class="video-card-top">
              <span class="video-badge">🎬 ${vid.category}</span>
              ${directMatches.some(dm => dm.id === vid.id) ? '<span style="font-size:0.68rem; font-weight:700; color:var(--color-gold-dark); background:rgba(197,160,89,0.15); padding:2px 6px; border-radius:3px;">⭐ Featured Location</span>' : ''}
            </div>
            <div class="video-title">${vid.title}</div>
            <div class="video-scripture-ref">📖 ${vid.scriptureRef}</div>
            <div class="video-desc">${vid.description}</div>
            <a href="${vid.churchUrl}" target="_blank" rel="noopener" class="video-church-btn">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              <span>Watch Video on ChurchofJesusChrist.org</span>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:auto;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        `).join("")}
      </div>

      <div class="video-church-portal-box">
        <div class="video-portal-title">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
          <span>Official Church Scripture Media Libraries</span>
        </div>
        <p style="font-size:0.75rem; color:var(--text-secondary); margin:4px 0 8px 0; line-height:1.4;">
          Access hundreds of high-definition dramatizations and educational videos created by The Church of Jesus Christ of Latter-day Saints:
        </p>
        <div class="video-portal-links">
          <a href="https://www.churchofjesuschrist.org/media/collection/old-testament-bible-videos?lang=eng" target="_blank" rel="noopener" class="video-portal-link-item">
            <span>🎥 Old Testament Bible Videos Library</span>
            <span>↗</span>
          </a>
          <a href="https://www.churchofjesuschrist.org/media/collection/pearl-of-great-price-videos?lang=eng" target="_blank" rel="noopener" class="video-portal-link-item">
            <span>📜 Pearl of Great Price Video Collection</span>
            <span>↗</span>
          </a>
          <a href="https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026?lang=eng" target="_blank" rel="noopener" class="video-portal-link-item">
            <span>📖 Come, Follow Me — Old Testament Learning</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    `;
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

    this.sidebar.classList.remove("closed", "peek");
    this.sidebar.classList.add("open");
    if (window.innerWidth <= 768) {
      this.sidebar.classList.add("expanded");
    }
  }

  // Show Divided Kingdom Dossier (Northern Kingdom of Israel or Southern Kingdom of Judah)
  showKingdomDossier(kingdom) {
    if (!this.sidebar || !kingdom) return;

    const titleElem = document.getElementById("sidebarTitle");
    const hebrewScriptElem = document.getElementById("sidebarHebrewScript");
    const hebrewTranslitElem = document.getElementById("sidebarHebrewTranslit");
    const hebrewMeaningElem = document.getElementById("sidebarHebrewMeaning");

    if (titleElem) titleElem.textContent = kingdom.name;
    if (hebrewScriptElem) hebrewScriptElem.textContent = kingdom.hebrew;
    if (hebrewTranslitElem) hebrewTranslitElem.textContent = kingdom.transliteration;
    if (hebrewMeaningElem) hebrewMeaningElem.textContent = `Capital: ${kingdom.capital}`;

    // 1. Overview Tab
    const overviewPane = document.getElementById("tab-overview");
    if (overviewPane) {
      overviewPane.innerHTML = `
        <div class="dossier-lead">${kingdom.description}</div>
        <div class="dossier-section">
          <div class="dossier-section-title">📍 Kingdom Coordinates & Vital Facts</div>
          <p style="font-size:0.8rem; color:var(--text-secondary); line-height:1.6;">
            <strong>Era:</strong> ${kingdom.era}<br>
            <strong>Royal Capital:</strong> ${kingdom.capital}<br>
            <strong>Constituent Tribes:</strong> ${kingdom.tribes.join(", ")}<br>
            <strong>Key Monarchs:</strong> ${kingdom.kings.join(", ")}<br>
            <strong>Prophets Sent by Jehovah:</strong> ${kingdom.prophets.join(", ")}
          </p>
        </div>
      `;
    }

    // 2. Covenants Tab
    const teachingsPane = document.getElementById("tab-teachings");
    if (teachingsPane) {
      teachingsPane.innerHTML = `
        <div class="covenant-box">
          <div class="covenant-box-title">Kingdom Identity & Historical Setting</div>
          <div>${kingdom.name} (${kingdom.hebrew}) — ${kingdom.era}</div>
        </div>
        <div class="covenant-box">
          <div class="covenant-box-title">Prophetic Voices & Calling to Repentance</div>
          <div>Prophets: ${kingdom.prophets.join(", ")}</div>
        </div>
        <div class="covenant-box">
          <div class="covenant-box-title">Covenant Stewardship & Historical Destiny</div>
          <div>${kingdom.id === "northern-kingdom" 
            ? "Rebelled against the House of David (~930 BC). Jeroboam erected golden calves at Dan and Bethel to prevent pilgrimages to Jerusalem. Elijah and Elisha performed miracles demonstrating that Jehovah alone is God. Rejection of prophetic warnings led to Assyrian captivity in 722 BC and the scattering of the Ten Tribes."
            : "Preserved the Davidic Covenant and Solomon's Temple. Despite periodic apostasy, righteous kings (Asa, Jehoshaphat, Hezekiah, Josiah) reinstituted the Passover and cleansed the land. Miraculously preserved against Sennacherib under Isaiah. Fallen in 586 BC to Babylon, followed by 70 years of exile and prophetic restoration under Zerubbabel, Ezra, and Nehemiah."}</div>
        </div>
      `;
    }

    // 3. Scriptures Tab
    const scripturesPane = document.getElementById("tab-scriptures");
    if (scripturesPane) {
      const kingdomPassages = kingdom.id === "northern-kingdom"
        ? [
            { ref: "1 Kings 12:16", text: "So when all Israel saw that the king hearkened not unto them, the people answered the king, saying, What portion have we in David? neither have we inheritance in the son of Jesse: to your tents, O Israel!", churchLink: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-kgs/12?lang=eng#16" },
            { ref: "1 Kings 12:28-29", text: "Whereupon the king took counsel, and made two calves of gold, and said unto them, It is too much for you to go up to Jerusalem: behold thy gods, O Israel, which brought thee up out of the land of Egypt. And he set the one in Beth-el, and the other put he in Dan.", churchLink: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-kgs/12?lang=eng#28" },
            { ref: "2 Kings 17:6", text: "In the ninth year of Hoshea the king of Assyria took Samaria, and carried Israel away into Assyria, and placed them in Halah and in Habor by the river of Gozan, and in the cities of the Medes.", churchLink: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-kgs/17?lang=eng#6" }
          ]
        : [
            { ref: "2 Samuel 7:16", text: "And thine house and thy kingdom shall be established for ever before thee: thy throne shall be established for ever.", churchLink: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-sam/7?lang=eng#16" },
            { ref: "1 Kings 8:10-11", text: "And it came to pass, when the priests were come out of the holy place, that the cloud filled the house of the Lord, So that the priests could not stand to minister because of the cloud: for the glory of the Lord had filled the house of the Lord.", churchLink: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-kgs/8?lang=eng#10" },
            { ref: "2 Kings 19:34-35", text: "For I will defend this city, to save it, for mine own sake, and for my servant David's sake. And it came to pass that night, that the angel of the Lord went out, and smote in the camp of the Assyrians an hundred fourscore and five thousand.", churchLink: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-kgs/19?lang=eng#34" }
          ];

      this.renderCustomScriptureCards(scripturesPane, kingdomPassages);
    }

    // 4. Videos Tab
    this.renderVideosTab({ id: kingdom.id === 'northern-kingdom' ? 'samaria' : 'jerusalem', name: kingdom.name, era: kingdom.era });

    // 5. Patriarchs & Kings Tab
    const peoplePane = document.getElementById("tab-people");
    if (peoplePane) {
      peoplePane.innerHTML = `
        <div style="font-weight:700; font-size:0.88rem; color:var(--color-crimson); margin-bottom:10px;">👑 Notable Monarchs & Prophets of ${kingdom.name}</div>
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${kingdom.kings.map(k => `
            <div class="patriarch-card">
              <div class="patriarch-avatar">👑</div>
              <div class="patriarch-details">
                <div class="patriarch-name">King ${k}</div>
                <div class="patriarch-bio">Reigned in ${kingdom.capital} over ${kingdom.shortName}.</div>
              </div>
            </div>
          `).join("")}
          ${kingdom.prophets.map(p => `
            <div class="patriarch-card">
              <div class="patriarch-avatar">📜</div>
              <div class="patriarch-details">
                <div class="patriarch-name">${p}</div>
                <div class="patriarch-bio">Prophet of Jehovah sent to summon ${kingdom.shortName} to covenant righteousness.</div>
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }

    // 6. Archaeology Tab
    const historyPane = document.getElementById("tab-history");
    if (historyPane) {
      historyPane.innerHTML = kingdom.id === "northern-kingdom" ? `
        <div class="timeline-item">
          <div class="timeline-date">c. 930 BC</div>
          <div class="timeline-desc">Secession of the Ten Northern Tribes under Jeroboam I; royal capitals established at Shechem and Tirzah.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">c. 880 BC</div>
          <div class="timeline-desc">King Omri purchases the hill of Samaria and constructs the royal capital; renowned for the famous Phoenician-style Samaria Ivories.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">c. 841 BC</div>
          <div class="timeline-desc">Jehu anoints himself king and pays tribute to Assyria, famously recorded on the Black Obelisk of Shalmaneser III in the British Museum.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">722 BC</div>
          <div class="timeline-desc">Fall of Samaria to Sargon II after a three-year siege; twenty-seven thousand Israelites deported into Assyrian exile (the Lost Ten Tribes).</div>
        </div>
      ` : `
        <div class="timeline-item">
          <div class="timeline-date">c. 1000 BC</div>
          <div class="timeline-desc">King David establishes Jerusalem as the capital of the united monarchy, followed by Solomon erecting the First Temple on Mount Moriah.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">701 BC</div>
          <div class="timeline-desc">Sennacherib invades Judah, destroying Lachish; King Hezekiah carves the 1,750-foot Siloam water tunnel and Jerusalem is miraculously delivered.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">c. 600 BC</div>
          <div class="timeline-desc">Prophets Jeremiah and Lehi warn Jerusalem of impending doom; Lehi departs into the wilderness; Ketef Hinnom silver amulets inscribed with the Priestly Blessing.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">586 BC</div>
          <div class="timeline-desc">Nebuchadnezzar of Babylon sacks Jerusalem, burns Solomon's Temple, and exiles the citizens to Babylon for 70 years.</div>
        </div>
      `;
    }

    // Open sidebar and set to overview tab
    const overviewTabBtn = document.getElementById("tabBtn-overview");
    if (overviewTabBtn) overviewTabBtn.click();
    this.sidebar.classList.remove("closed", "peek");
    this.sidebar.classList.add("open");
    if (window.innerWidth <= 768) {
      this.sidebar.classList.add("expanded");
    }
  }

  renderCustomScriptureCards(pane, list) {
    pane.innerHTML = `
      <div class="scripture-version-selector">
        <button class="scripture-version-btn ${this.currentScriptureVersion === 'kjv' ? 'active' : ''}" data-version="kjv">KJV</button>
        <button class="scripture-version-btn ${this.currentScriptureVersion === 'niv' ? 'active' : ''}" data-version="niv">NIV</button>
        <button class="scripture-version-btn ${this.currentScriptureVersion === 'hebrew' ? 'active' : ''}" data-version="hebrew">Hebrew</button>
        <button class="scripture-version-btn ${this.currentScriptureVersion === 'jst' ? 'active' : ''}" data-version="jst">JST / PGP</button>
        <button class="scripture-version-btn ${this.currentScriptureVersion === 'insight' ? 'active' : ''}" data-version="insight">Insight</button>
      </div>
      <div id="scriptureCardsContainer">
        ${list.map(item => {
          const translation = (typeof SCRIPTURE_TRANSLATIONS !== "undefined")
            ? SCRIPTURE_TRANSLATIONS.get(item.ref, item.text)
            : null;
          let text = item.text;
          let cls = "";
          let badge = '<span class="version-badge kjv-badge">King James Version</span>';
          if (this.currentScriptureVersion === "niv") {
            text = (translation && translation.niv) ? translation.niv : item.text;
            badge = '<span class="version-badge niv-badge">NIV</span>';
          } else if (this.currentScriptureVersion === "hebrew") {
            if (translation && translation.hebrew) {
              text = `${translation.hebrew}<span class="hebrew-translit-line"><strong>Translit:</strong> ${translation.translit || ''}</span>`;
              cls = "hebrew-mode";
            }
            badge = '<span class="version-badge hebrew-badge">Hebrew</span>';
          } else if (this.currentScriptureVersion === "jst") {
            text = (translation && translation.jst) ? translation.jst : item.text;
            badge = '<span class="version-badge jst-badge">JST / PGP</span>';
          } else if (this.currentScriptureVersion === "insight") {
            text = (translation && translation.insight) ? translation.insight : item.text;
            badge = '<span class="version-badge insight-badge">Insight</span>';
          }
          return `
            <div class="scripture-card">
              <div class="scripture-header">
                <div class="scripture-header-title">
                  <span class="scripture-ref">${item.ref}</span>
                  ${badge}
                </div>
                <a href="${item.churchLink}" target="_blank" rel="noopener" class="scripture-link-church">
                  <span>Church Study Link</span>
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
              <div class="scripture-text ${cls}">${text}</div>
            </div>
          `;
        }).join("")}
      </div>
    `;

    pane.querySelectorAll(".scripture-version-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.currentScriptureVersion = btn.getAttribute("data-version");
        this.renderCustomScriptureCards(pane, list);
      });
    });
  }

  // Welcome to Old Testament Geography Modal
  setupWelcomeModal() {
    const modal = document.getElementById("welcomeModalBackdrop");
    const openBtn = document.getElementById("welcomeGuideBtn");
    const closeBtn = document.getElementById("welcomeModalCloseBtn");
    const getStartedBtn = document.getElementById("welcomeGetStartedBtn");
    const doNotShowCheckbox = document.getElementById("welcomeDoNotShowAgain");

    if (!modal) return;

    const showModal = () => {
      modal.classList.add("open");
    };

    const closeModal = () => {
      modal.classList.remove("open");
      if (doNotShowCheckbox && doNotShowCheckbox.checked) {
        localStorage.setItem("ot_atlas_welcomed", "true");
      }
    };

    if (openBtn) {
      openBtn.addEventListener("click", () => showModal());
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => closeModal());
    }

    if (getStartedBtn) {
      getStartedBtn.addEventListener("click", () => closeModal());
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });

    // Auto-show on first visit if not dismissed
    const hasSeen = localStorage.getItem("ot_atlas_welcomed");
    if (!hasSeen) {
      setTimeout(() => showModal(), 400);
    }
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
    if (this.sidebar) {
      this.sidebar.classList.add("closed");
      this.sidebar.classList.remove("open", "expanded", "peek");
    }
    if (window.app && window.app.map) {
      window.app.map.clearHighlight();
    }
    if (window.app && window.app.mobileShell) {
      window.app.mobileShell.closeAllSheets();
    }
  }

  isDossierOpen() {
    if (!this.sidebar) return false;
    return !this.sidebar.classList.contains("closed");
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

    const CATEGORY_NAMES = {
      "patriarchs": "📜 Patriarchs & Origins",
      "exodus": "🔥 Exodus & Wilderness",
      "judges": "⚔️ Judges & Early Israel",
      "monarchy": "👑 United & Divided Monarchy",
      "prophets": "✨ Prophets of Fire & Mercy",
      "sanctuary": "🏛️ Holy Sanctuaries & Ark",
      "messianic": "✝️ Messianic Typology",
      "exile": "📜 Lehi & The Exile",
      "culture": "🏺 Biblical Daily Life"
    };

    container.innerHTML = TOURS_DATA.map(tour => {
      const catBadge = CATEGORY_NAMES[tour.category] || "📜 Scripture Tour";
      return `
        <div class="tour-card" data-id="${tour.id}">
          <div class="tour-card-header">
            <div class="tour-card-title">${tour.title}</div>
            <span class="tour-card-stops">${tour.stopsCount} Stops</span>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin:3px 0 2px;">
            <span style="font-size:0.72rem; color:var(--color-gold); font-weight:700; text-transform:uppercase; letter-spacing:0.04em;">${catBadge}</span>
            <span style="font-family:'Frank Ruhl Libre', serif; direction:rtl; color:var(--color-crimson-deep); font-size:1.05rem; font-weight:700;">${tour.hebrew}</span>
          </div>
          <div style="font-size:0.76rem; color:#856404; font-weight:600; margin-bottom:4px; font-style:italic;">${tour.subtitle || ''}</div>
          <div class="tour-card-desc">${tour.description}</div>
        </div>
      `;
    }).join("");

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
        <div class="tour-hud-scripture" style="font-size:0.74rem; color:var(--color-gold); font-weight:700; margin-top:2px;">📖 ${stop.scripture}</div>
        <div class="tour-hud-narrative" style="font-size:0.77rem; color:#EFE7D5; margin-top:2px; max-width:540px; line-height:1.35;">${stop.narrative}</div>
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
    this.positionTourHUD();
  }

  // Place the HUD just below the header/filter-bar stack (its real height varies
  // with the companion-atlas bar and wrapping), so it never hides under them.
  positionTourHUD() {
    const hud = document.getElementById("tourHud");
    if (!hud) return;
    const anchor = document.getElementById("filterBar") || document.querySelector(".app-header");
    if (anchor) {
      const bottom = anchor.getBoundingClientRect().bottom;
      if (bottom > 0) hud.style.top = `${Math.round(bottom + 10)}px`;
    }
    if (!this._tourHudResizeBound) {
      this._tourHudResizeBound = true;
      window.addEventListener("resize", () => {
        if (this.activeTour) this.positionTourHUD();
      });
    }
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


  // Render Tab 4: Life Back Then (Ancient Israel Daily Life, Housing, Diet, Culture)
  renderLifeTab(city, dossier) {
    const lifePane = document.getElementById("tab-life");
    if (!lifePane) return;

    const lb = (dossier && dossier.lifeBackThen) ? dossier.lifeBackThen : null;
    if (lb) {
      lifePane.innerHTML = `
        <div class="life-tab-intro">
          <strong>🏺 Ancient Culture & Daily Life at ${city.name}</strong><br>
          How Israelites, prophets, families, and tradesmen lived, ate, worked, and worshiped in Old Testament times.
        </div>
        <div class="life-card">
          <div class="life-card-header">
            <span class="life-card-icon">🏡</span>
            <div class="life-card-title">Israelite Four-Room House & Dwellings</div>
          </div>
          <div class="life-card-body">${lb.housing}</div>
        </div>
        <div class="life-card">
          <div class="life-card-header">
            <span class="life-card-icon">🍇</span>
            <div class="life-card-title">The Biblical Diet & The Seven Species</div>
          </div>
          <div class="life-card-body">${lb.foodAndDiet}</div>
        </div>
        <div class="life-card">
          <div class="life-card-header">
            <span class="life-card-icon">⚖️</span>
            <div class="life-card-title">City Gates, Justice & The Elders</div>
          </div>
          <div class="life-card-body">${lb.cityGatesAndJustice}</div>
        </div>
        <div class="life-card">
          <div class="life-card-header">
            <span class="life-card-icon">🧶</span>
            <div class="life-card-title">Clothing, Weaving, Tools & Crafts</div>
          </div>
          <div class="life-card-body">${lb.clothingAndTrades}</div>
        </div>
        <div class="life-card">
          <div class="life-card-header">
            <span class="life-card-icon">🎺</span>
            <div class="life-card-title">Sacred Feasts & Pilgrimage Festivals</div>
          </div>
          <div class="life-card-body">${lb.sacredFeasts}</div>
        </div>
      `;
    } else {
      lifePane.innerHTML = `
        <div class="life-tab-intro">
          <strong>🏺 Ancient Culture & Daily Life at ${city.name}</strong>
        </div>
        <div class="life-card">
          <div class="life-card-header">
            <span class="life-card-icon">🏡</span>
            <div class="life-card-title">Life in Biblical ${city.region}</div>
          </div>
          <div class="life-card-body">
            Inhabitants of ${city.name} lived in stone and mudbrick dwellings, relying on cisterns for water and terraced agriculture for wheat, barley, olives, and grapes. Civic matters and legal contracts were settled before village elders at the city gate.
          </div>
        </div>
      `;
    }
  }

  // Setup Biblical Distances & Travel Times Calculator Modal
  setupTravelCalculator() {
    const modal = document.getElementById("travelCalcModalBackdrop");
    const openBtn = document.getElementById("travelCalcBtn");
    const closeBtn = document.getElementById("travelCalcCloseBtn");
    const fromSelect = document.getElementById("calcFromSelect");
    const toSelect = document.getElementById("calcToSelect");

    if (!modal || !fromSelect || !toSelect) return;

    if (openBtn) {
      openBtn.addEventListener("click", () => modal.classList.add("open"));
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => modal.classList.remove("open"));
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });

    if (typeof CITIES_DATA !== "undefined") {
      const sorted = [...CITIES_DATA].sort((a, b) => a.name.localeCompare(b.name));
      sorted.forEach(c => {
        const opt1 = document.createElement("option");
        opt1.value = c.id;
        opt1.textContent = `${c.name} (${c.region})`;
        fromSelect.appendChild(opt1);

        const opt2 = document.createElement("option");
        opt2.value = c.id;
        opt2.textContent = `${c.name} (${c.region})`;
        toSelect.appendChild(opt2);
      });

      fromSelect.value = "jerusalem";
      toSelect.value = "bethlehem";
    }

    const updateCalc = () => {
      const fromId = fromSelect.value;
      const toId = toSelect.value;
      const c1 = CITIES_DATA.find(c => c.id === fromId);
      const c2 = CITIES_DATA.find(c => c.id === toId);
      if (!c1 || !c2) return;

      const haversineMiles = (lat1, lon1, lat2, lon2) => {
        const R = 3958.8;
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      };

      const straightMiles = haversineMiles(c1.lat, c1.lng, c2.lat, c2.lng);
      const roadMiles = Math.max(1, Math.round(straightMiles * 1.3 * 10) / 10);
      const roadKm = Math.round(roadMiles * 1.60934 * 10) / 10;

      const routeNameElem = document.getElementById("calcRouteName");
      const distMilesElem = document.getElementById("calcDistMiles");
      const distKmElem = document.getElementById("calcDistKm");
      const daysFootElem = document.getElementById("calcDaysFoot");
      const daysDonkeyElem = document.getElementById("calcDaysDonkey");
      const daysCamelElem = document.getElementById("calcDaysCamel");
      const daysChariotElem = document.getElementById("calcDaysChariot");
      const routeContextElem = document.getElementById("calcRouteContext");

      if (routeNameElem) routeNameElem.textContent = `${c1.name} → ${c2.name}`;
      if (distMilesElem) distMilesElem.textContent = roadMiles;
      if (distKmElem) distKmElem.textContent = `(${roadKm} km road estimate)`;

      const formatTime = (dist, dailyRate, speedMph) => {
        if (dist < dailyRate * 0.75) {
          const hours = Math.round((dist / speedMph) * 10) / 10;
          return `~${hours} hrs`;
        }
        const days = Math.round((dist / dailyRate) * 10) / 10;
        return `${days} ${days === 1 ? 'day' : 'days'}`;
      };

      if (daysFootElem) daysFootElem.textContent = formatTime(roadMiles, 19, 2.8);
      if (daysDonkeyElem) daysDonkeyElem.textContent = formatTime(roadMiles, 16, 2.3);
      if (daysCamelElem) daysCamelElem.textContent = formatTime(roadMiles, 22, 3.2);
      if (daysChariotElem) daysChariotElem.textContent = formatTime(roadMiles, 32, 4.5);

      if (routeContextElem) {
        routeContextElem.innerHTML = `
          <strong>Terrain & Trade Routes:</strong> Connecting <em>${c1.region}</em> and <em>${c2.region}</em> across biblical mountain ridges and valleys. Ancient travelers used the King's Highway, Way of the Patriarchs, or coastal Way of the Sea (Via Maris).
        `;
      }
    };

    fromSelect.addEventListener("change", updateCalc);
    toSelect.addEventListener("change", updateCalc);
    updateCalc();
  }

  // Setup Life in the Old Testament World (Culture & Daily Life) Modal
  setupAncientLifeModal() {
    const modal = document.getElementById("lifeBackThenModalBackdrop");
    const openBtn = document.getElementById("lifeBackThenBtn");
    const closeBtn = document.getElementById("lifeBackThenCloseBtn");

    if (!modal) return;

    if (openBtn) {
      openBtn.addEventListener("click", () => modal.classList.add("open"));
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => modal.classList.remove("open"));
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });

    const tabBtns = modal.querySelectorAll(".culture-tab-btn");
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetKey = btn.getAttribute("data-culture-tab");
        tabBtns.forEach(b => {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");

        modal.querySelectorAll(".culture-content-pane").forEach(pane => {
          pane.classList.remove("active");
        });

        const targetPane = document.getElementById(`culturePane-${targetKey}`);
        if (targetPane) targetPane.classList.add("active");
      });
    });
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
