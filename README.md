# Old Testament Geography - Interactive Biblical Atlas (~4000 BC – 400 BC)

[![Live Demo](https://img.shields.io/badge/Live_Atlas-GitHub_Pages-gold.svg?style=for-the-badge&logo=github)](https://jviola60.github.io/old-testament-geography/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Scripture Source](https://img.shields.io/badge/Scriptures-ChurchofJesusChrist.org-blue.svg?style=for-the-badge)](https://www.churchofjesuschrist.org/study/scriptures)

An immersive, interactive cartographic atlas and historical timeline exploring the sacred geography of the **Old Testament** and the **Pearl of Great Price** (Book of Moses & Book of Abraham) across Canaan, Sinai, Egypt, and Mesopotamia (~4000 BC – 400 BC).

Modeled directly after the [New Testament Geography Interactive Atlas](https://jviola60.github.io/new-testament-geography/).

---

## 🌟 Key Features

### 1. Authentic Biblical Hebrew Engine
- **Full Vocalization (Niqqud)**: Every biblical city, mountain, altar, and sanctuary is presented with authentic Hebrew script (e.g., יְרוּשָׁלַיִם, חֶבְרוֹן, בֵּית־אֵל, שְׁכֶם, הַר סִינַי).
- **Linguistic Precision**: Romanized phonetic transliteration, etymological root analysis, and spiritual meanings.
- **Strong's Concordance**: Numbered reference tags (e.g., `H3389`, `H2275`, `H425`).
- **Audio Pronunciation**: Web Speech API audio engine pronouncing authentic Hebrew place names aloud (`he-IL`).

### 2. Multi-Version Scripture Comparison
Switch instantly between five distinct translations with direct study links to [ChurchofJesusChrist.org](https://www.churchofjesuschrist.org/study/scriptures):
1. **KJV (Bible)**: King James Version (The Church of Jesus Christ of Latter-day Saints edition).
2. **NIV (Modern)**: Clear, accessible modern English translation.
3. **Hebrew (עִבְרִית)**: Masoretic Text with vowel pointing, right-to-left layout, and transliteration.
4. **JST / Pearl of Great Price**: Joseph Smith Translation and prophetic restorations from the Book of Moses and Book of Abraham.
5. **Doctrinal Insight**: Theological context connecting covenant altars to the eternal Plan of Salvation.

### 3. Five-Tab Deep Biblical Research Dossiers
Selecting any location opens a rich 5-tab dossier drawer:
- **1. Overview**: Physical geography, terrain, biblical narrative, and integrated Church Bible videos.
- **2. Covenants & Teachings**: Prophet/teacher, covenant revealed, eternal purpose, and how the people received it.
- **3. Scriptures**: Multi-version translation viewer with direct links to Church scripture study tools.
- **4. Patriarchs & Matriarchs**: Profiles of righteous leaders, prophets, and matriarchs.
- **5. Archaeology & History**: Excavations, ancient stelae, seals, bullae, and Paleo-Hebrew inscriptions.

### 4. Interactive Thematic Overlays
- **Twelve Tribes Allotments**: Border polygons and patriarchal blessings from Jacob (Genesis 49) and Moses (Deuteronomy 33).
- **Abraham's Journey of Faith**: Ur of the Chaldees → Haran → Shechem → Bethel → Hebron → Egypt → Mount Moriah.
- **The Exodus & Wilderness Wanderings**: Rameses → Red Sea → Marah → Mount Sinai → Kadesh-barnea → Plains of Moab.
- **Journeys of the Ark of the Covenant**: Mount Sinai → Jordan River → Jericho → Shiloh → Philistia → Jerusalem.
- **Elijah & Elisha Prophetic Trails**: Samaria → Brook Cherith → Zarephath → Mount Carmel → Beersheba → Mount Horeb.
- **First Temple Jerusalem Inset**: Solomon's Temple, City of David, Gihon Spring, and Hezekiah's Tunnel.

### 5. Historical Timeline Scrubber (~4000 BC – 400 BC)
- Scrub continuously across biblical history or jump instantly between major epochs:
  - **4000 BC**: Creation & Patriarchs (Adam, Enoch, Noah)
  - **2000 BC**: Abrahamic Covenant & Patriarchs
  - **1446 BC**: The Exodus & Mount Sinai
  - **1400 BC**: Conquest & Judges
  - **1000 BC**: United Monarchy (David & Solomon)
  - **722 BC**: Divided Kingdoms & Fall of Israel
  - **586 BC**: Babylonian Exile
  - **445 BC**: Restoration & Ministry of Malachi
- Automated **Play / Pause** timeline animation mode.

### 6. Guided Scripture Tours
- Curated step-by-step biblical journeys with interactive camera transitions and floating HUD controls.

---

## 🛠️ Technology Stack
- **Core**: Vanilla HTML5, CSS3, ES6+ JavaScript.
- **Mapping**: [Leaflet.js](https://leafletjs.com/) with high-performance raster tile rendering.
- **Basemap**: Esri World Shaded Relief with warm antique parchment filter (100% free, permanent, no API keys required).
- **Typography**: Google Fonts (*Cinzel*, *Amiri*, *David Libre*, *Inter*).
- **Speech**: Web Speech API (`speechSynthesis`).
- **Zero Build Dependencies**: Runs directly in any modern web browser or static hosting environment.

---

## 🚀 Running Locally

Clone the repository and serve it with any local static HTTP server:

```bash
git clone https://github.com/jviola60/old-testament-geography.git
cd old-testament-geography
python -m http.server 8092
```

Navigate to `http://localhost:8092` in your browser.

---

## 📖 Scripture Sources & References
- Holy Bible (King James Version, LDS Edition)
- The Pearl of Great Price (Book of Moses, Book of Abraham)
- [The Church of Jesus Christ of Latter-day Saints - Scriptures](https://www.churchofjesuschrist.org/study/scriptures)
- Westminster Leningrad Codex & Masoretic Text (Niqqud & Transliteration)
- Strong's Exhaustive Hebrew Concordance
