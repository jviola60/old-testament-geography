/**
 * OLD TESTAMENT GEOGRAPHY - HYDROGRAPHY & ANCIENT WATERS
 * Major biblical rivers, seas, and springs that shaped civilization,
 * covenants, and miraculous crossings in the Old World.
 */

const HYDROGRAPHY_DATA = [
  {
    id: "jordan-river",
    name: "Jordan River (Yarden)",
    hebrew: "נְהַר הַיַּרְדֵּן",
    transliteration: "N'har HaYarden",
    meaning: "The Descender",
    type: "river",
    color: "#2563EB",
    weight: 3.5,
    coordinates: [
      [33.25, 35.65],
      [33.05, 35.62],
      [32.90, 35.61],
      [32.82, 35.58], // Sea of Galilee enter
      [32.71, 35.57], // Sea of Galilee exit
      [32.55, 35.55],
      [32.35, 35.56],
      [32.10, 35.53],
      [31.95, 35.52],
      [31.85, 35.53], // Crossing of Israel opposite Jericho
      [31.76, 35.51]  // Enter Dead Sea
    ],
    significance: "Main arterial river of Canaan. Parted for Joshua and Israel (Joshua 3); parted for Elijah and Elisha (2 Kings 2); where Naaman the Syrian dipped seven times to be cleansed of leprosy (2 Kings 5)."
  },
  {
    id: "sea-of-galilee",
    name: "Sea of Chinnereth (Sea of Galilee)",
    hebrew: "יָם כִּנֶּרֶת",
    transliteration: "Yam Kinneret",
    meaning: "Harp-Shaped Sea",
    type: "waterbody",
    color: "#1D4E89",
    fillColor: "#60A5FA",
    fillOpacity: 0.35,
    coordinates: [
      [32.88, 35.57],
      [32.86, 35.64],
      [32.80, 35.65],
      [32.70, 35.59],
      [32.71, 35.54],
      [32.78, 35.51],
      [32.85, 35.52],
      [32.88, 35.57]
    ],
    significance: "Northern freshwater boundary named after its harp-like shape (Numbers 34:11; Joshua 12:3; 13:27), bordering the tribal inheritances of Naphtali, Zebulun, and Manasseh."
  },
  {
    id: "dead-sea",
    name: "Salt Sea (Sea of the Arabah / Dead Sea)",
    hebrew: "יָם הַמֶּלַח / יָם הָעֲרָבָה",
    transliteration: "Yam HaMelach / Yam HaAravah",
    meaning: "The Salt Sea",
    type: "waterbody",
    color: "#0F325E",
    fillColor: "#3B82F6",
    fillOpacity: 0.3,
    coordinates: [
      [31.76, 35.51],
      [31.75, 35.56],
      [31.55, 35.52],
      [31.35, 35.48],
      [31.10, 35.42],
      [31.05, 35.37],
      [31.15, 35.36],
      [31.40, 35.38],
      [31.65, 35.44],
      [31.76, 35.51]
    ],
    significance: "Lowest body of water on earth (1,400 feet below sea level). Site of the ancient Vale of Siddim and the destroyed cities of Sodom and Gomorrah (Genesis 14:3; 19:24-28); eastern boundary of Judah."
  },
  {
    id: "nile-river",
    name: "Nile River (Ye'or)",
    hebrew: "נְהַר נִילוּס / הַיְאוֹר",
    transliteration: "N'har Nilus / HaYe'or",
    meaning: "The Great River",
    type: "river",
    color: "#1E40AF",
    weight: 4,
    coordinates: [
      [27.18, 31.18],
      [28.10, 30.75],
      [29.07, 31.10],
      [30.05, 31.23], // Cairo / Memphis
      [30.50, 31.00], // Delta branch 1
      [31.50, 31.84]  // Damietta mouth
    ],
    significance: "Lifeblood of ancient Egypt. Where the infant Moses was placed in an ark of bulrushes (Exodus 2:3); turned to blood during the first plague (Exodus 7:20)."
  },
  {
    id: "euphrates-river",
    name: "Euphrates River (Perat)",
    hebrew: "נְהַר פְּרָת",
    transliteration: "N'har P'rat",
    meaning: "Fruitful / Breaking Forth",
    type: "river",
    color: "#2563EB",
    weight: 3.5,
    coordinates: [
      [38.00, 39.00],
      [36.80, 38.00],
      [35.90, 39.00],
      [34.50, 41.00],
      [33.30, 44.00],
      [32.50, 44.40], // Babylon
      [31.00, 46.10]  // Ur
    ],
    significance: "One of the four rivers flowing out of Eden (Moses 3:14; Genesis 2:14); designated as the ultimate northeastern border of the Promised Land granted to Abraham's seed (Genesis 15:18; Joshua 1:4)."
  },
  {
    id: "tigris-river",
    name: "Tigris River (Hiddekel)",
    hebrew: "נְהַר חִדֶּקֶל",
    transliteration: "N'har Chidekel",
    meaning: "Rapid Arrow / Swift Stream",
    type: "river",
    color: "#1D4E89",
    weight: 3.5,
    coordinates: [
      [38.50, 40.00],
      [37.50, 41.50],
      [36.35, 43.15], // Nineveh
      [35.00, 44.00],
      [33.30, 44.40],
      [31.00, 47.40]
    ],
    significance: "River of Eden flowing toward the east of Assyria (Moses 3:14; Genesis 2:14); riverbank setting of Daniel's glorious apocalyptic vision (Daniel 10:4)."
  }
];

if (typeof window !== "undefined") {
  window.HYDROGRAPHY_DATA = HYDROGRAPHY_DATA;
}
