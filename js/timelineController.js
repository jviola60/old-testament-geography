/**
 * OLD TESTAMENT GEOGRAPHY - TIMELINE CONTROLLER
 * Manages Chronological Scrubber spanning ~4000 BC to 400 BC,
 * Animation playback, Era labeling, and Epoch filtering.
 */

class TimelineController {
  constructor() {
    this.currentYear = -1000; // Default ~1000 BC (Reign of King David)
    this.minYear = -4000;
    this.maxYear = -400;
    this.isPlaying = false;
    this.playInterval = null;
    this.playbackSpeed = 1200; // ms per step
  }

  init() {
    console.log("⏳ Initializing Old Testament Timeline Controller...");

    this.slider = document.getElementById("timelineSlider");
    this.yearDisplay = document.getElementById("timelineYearDisplay");
    this.eraDisplay = document.getElementById("timelineEraDisplay");
    this.playBtn = document.getElementById("timelinePlayBtn");

    if (!this.slider) return;

    this.slider.min = this.minYear;
    this.slider.max = this.maxYear;
    this.slider.value = this.currentYear;

    // Event listeners
    this.slider.addEventListener("input", (e) => {
      this.setYear(parseInt(e.target.value, 10));
    });

    if (this.playBtn) {
      this.playBtn.addEventListener("click", () => this.togglePlay());
    }

    // Quick epoch jump buttons
    document.querySelectorAll(".epoch-jump-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const year = parseInt(btn.getAttribute("data-year"), 10);
        if (!isNaN(year)) {
          this.setYear(year);
        }
      });
    });

    this.updateDisplay();
  }

  setYear(year) {
    this.currentYear = year;
    if (this.slider) this.slider.value = year;
    this.updateDisplay();

    // Notify MapController & UI
    if (window.app && window.app.map) {
      window.app.map.currentYear = year;
    }
  }

  getEraInfo(year) {
    if (year <= -2300) {
      return {
        name: "Antediluvian & Patriarchal Era",
        summary: "Creation, Adam & Eve, Enoch's Zion, Noah's Ark (Moses 1-8)"
      };
    } else if (year <= -1600) {
      return {
        name: "Patriarchal Covenant Era",
        summary: "Abraham in Ur & Canaan, Isaac, Jacob/Israel, Joseph in Egypt (Genesis 12-50; Abraham 1-3)"
      };
    } else if (year <= -1400) {
      return {
        name: "The Exodus & Wilderness",
        summary: "Deliverance from Egypt, Red Sea, Law at Sinai, 40-Year Wanderings (Exodus; Numbers)"
      };
    } else if (year <= -1050) {
      return {
        name: "Conquest & Era of the Judges",
        summary: "Crossing the Jordan, Jericho, Shiloh Tabernacle, Gideon, Deborah, Samson (Joshua; Judges)"
      };
    } else if (year <= -930) {
      return {
        name: "United Monarchy (Saul, David, Solomon)",
        summary: "Jerusalem as Capital, Golden Age, First Temple on Mount Moriah (1 & 2 Samuel; 1 Kings)"
      };
    } else if (year <= -586) {
      return {
        name: "Divided Kingdoms (Israel & Judah)",
        summary: "Elijah & Mount Carmel, Isaiah's Prophecies, Fall of Samaria (1 & 2 Kings)"
      };
    } else if (year <= -538) {
      return {
        name: "Babylonian Exile",
        summary: "Destruction of Jerusalem, Ezekiel & Daniel in Babylon (2 Kings 25; Daniel)"
      };
    } else {
      return {
        name: "Persian Restoration & Return",
        summary: "Cyrus Edict, Rebuilding the Temple & Walls, Ezra, Nehemiah, Malachi"
      };
    }
  }

  updateDisplay() {
    const formattedYear = Math.abs(this.currentYear) + " BC";
    const era = this.getEraInfo(this.currentYear);

    if (this.yearDisplay) {
      this.yearDisplay.textContent = formattedYear;
    }

    if (this.eraDisplay) {
      this.eraDisplay.textContent = `${era.name} • ${era.summary}`;
    }

    // Highlight active quick epoch button
    document.querySelectorAll(".epoch-jump-btn").forEach(btn => {
      const bYear = parseInt(btn.getAttribute("data-year"), 10);
      const isNearby = Math.abs(bYear - this.currentYear) < 150;
      btn.classList.toggle("active", isNearby);
    });
  }

  togglePlay() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.play();
    }
  }

  play() {
    this.isPlaying = true;
    if (this.playBtn) {
      this.playBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      `;
      this.playBtn.title = "Pause Timeline Animation";
    }

    this.playInterval = setInterval(() => {
      let nextYear = this.currentYear + 100;
      if (nextYear > this.maxYear) {
        nextYear = this.minYear;
      }
      this.setYear(nextYear);
    }, this.playbackSpeed);
  }

  stop() {
    this.isPlaying = false;
    if (this.playInterval) clearInterval(this.playInterval);
    if (this.playBtn) {
      this.playBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      `;
      this.playBtn.title = "Play Timeline Animation";
    }
  }
}

if (typeof window !== "undefined") {
  window.TimelineController = TimelineController;
}
