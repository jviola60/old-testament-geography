/**
 * OLD TESTAMENT GEOGRAPHY - APPLICATION ENTRY POINT
 * Master Coordinator connecting Map, Timeline, UI, and Mobile Shell.
 */

class App {
  constructor() {
    this.map = new MapController();
    this.timeline = new TimelineController();
    this.ui = new UIController();
    this.mobile = new MobileShell();
  }

  init() {
    console.log("📜 Initializing Old Testament Geography Atlas (~4000 BC – 400 BC)...");

    // 1. Initialize Map
    this.map.init("map");

    // 2. Initialize Timeline Scrubber
    this.timeline.init();

    // 3. Initialize UI & Search
    this.ui.init();

    // 4. Initialize Mobile Shell
    this.mobile.init();

    console.log("✨ Old Testament Geography Atlas Ready.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.app = new App();
  window.app.init();
});
