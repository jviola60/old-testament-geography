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
    this.yearDisplay = document.getElementById("timelineYearDisplay") || document.getElementById("displayYear");
    this.eraDisplay = document.getElementById("timelineEraDisplay") || document.getElementById("displaySeason");
    this.playBtn = document.getElementById("timelinePlayBtn") || document.getElementById("playPauseBtn");
    this.playIcon = document.getElementById("timelinePlayIcon") || document.getElementById("playIcon");
    this.pauseIcon = document.getElementById("timelinePauseIcon") || document.getElementById("pauseIcon");

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

    const stepBackBtn = document.getElementById("timelineStepBackBtn") || document.getElementById("stepBackBtn");
    if (stepBackBtn) {
      stepBackBtn.addEventListener("click", () => this.stepYear(-100));
    }

    const stepFwdBtn = document.getElementById("timelineStepForwardBtn") || document.getElementById("stepForwardBtn");
    if (stepFwdBtn) {
      stepFwdBtn.addEventListener("click", () => this.stepYear(100));
    }

    // Keyboard Shortcuts (Arrow keys & Spacebar)
    document.addEventListener("keydown", (e) => {
      if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) return;
      if (e.code === "Space") {
        e.preventDefault();
        this.togglePlay();
      } else if (e.code === "ArrowLeft") {
        this.stepYear(-100);
      } else if (e.code === "ArrowRight") {
        this.stepYear(100);
      }
    });

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

  stepYear(amount) {
    let nextYear = this.currentYear + amount;
    if (nextYear < this.minYear) nextYear = this.minYear;
    if (nextYear > this.maxYear) nextYear = this.maxYear;
    this.setYear(nextYear);
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
        summary: "Creation, Adam & Eve, Enoch's Zion, Noah's Ark (Moses 1-8)",
        featured: ["ararat", "eden", "ur"]
      };
    } else if (year <= -1600) {
      return {
        name: "Patriarchal Covenant Era",
        summary: "Abraham in Ur & Canaan, Isaac, Jacob/Israel, Joseph in Egypt (Genesis 12-50; Abraham 1-3)",
        featured: ["hebron", "bethel", "shechem", "beersheba", "ur", "haran"]
      };
    } else if (year <= -1400) {
      return {
        name: "The Exodus & Wilderness",
        summary: "Deliverance from Egypt, Red Sea, Law at Sinai, 40-Year Wanderings (Exodus; Numbers)",
        featured: ["sinai", "kadesh-barnea", "rephidim", "mount-nebo"]
      };
    } else if (year <= -1050) {
      return {
        name: "Conquest & Era of the Judges",
        summary: "Crossing the Jordan, Jericho, Shiloh Tabernacle, Gideon, Deborah, Samson (Joshua; Judges)",
        featured: ["jericho", "shiloh", "ai", "hazor"]
      };
    } else if (year <= -930) {
      return {
        name: "United Monarchy (Saul, David, Solomon)",
        summary: "Jerusalem as Capital, Golden Age, First Temple on Mount Moriah (1 & 2 Samuel; 1 Kings)",
        featured: ["jerusalem", "bethlehem", "gezer", "megiddo", "ezion-geber"]
      };
    } else if (year <= -610) {
      return {
        name: "Divided Kingdoms (Israel & Judah)",
        summary: "Elijah & Mount Carmel, Isaiah's Prophecies, Fall of Samaria (1 & 2 Kings)",
        featured: ["samaria", "dan", "mount-carmel", "lachish", "jezreel"]
      };
    } else if (year <= -586) {
      return {
        name: "Reign of King Zedekiah • Lehi & Laban (~600 BC)",
        summary: "King Zedekiah rules Judah; Lehi & Jeremiah warn Jerusalem; Lehi departs into the wilderness; Brass Plates obtained from Laban (1 Nephi 1–4; 2 Kings 24)",
        featured: ["jerusalem", "valley-of-lemuel", "lachish"]
      };
    } else if (year <= -538) {
      return {
        name: "Babylonian Exile",
        summary: "Destruction of Jerusalem, Ezekiel & Daniel in Babylon (2 Kings 25; Daniel)",
        featured: ["babylon", "susa", "jerusalem"]
      };
    } else {
      return {
        name: "Persian Restoration & Return",
        summary: "Cyrus Edict, Rebuilding the Temple & Walls, Ezra, Nehemiah, Malachi",
        featured: ["jerusalem", "susa", "jericho"]
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

    // Sync with Top Floating Era Capsule
    if (window.app && window.app.mobile && typeof window.app.mobile.updateEraCapsule === "function") {
      window.app.mobile.updateEraCapsule(this.currentYear, era);
    }
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
    if (this.playIcon && this.pauseIcon) {
      this.playIcon.style.display = "none";
      this.pauseIcon.style.display = "block";
    } else if (this.playBtn) {
      this.playBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      `;
    }
    if (this.playBtn) this.playBtn.title = "Pause Timeline Animation";

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
    if (this.playIcon && this.pauseIcon) {
      this.playIcon.style.display = "block";
      this.pauseIcon.style.display = "none";
    } else if (this.playBtn) {
      this.playBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      `;
    }
    if (this.playBtn) this.playBtn.title = "Play Timeline Animation";
  }
}

if (typeof window !== "undefined") {
  window.TimelineController = TimelineController;
}
