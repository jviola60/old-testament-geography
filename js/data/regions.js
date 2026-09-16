/**
 * OLD TESTAMENT GEOGRAPHY - TRIBAL ALLOTMENTS & ANCIENT KINGDOMS
 * Polygons and regional boundaries for the Twelve Tribes of Israel
 * and Ancient Near Eastern Empires (Egypt, Assyria, Babylon, Persia, Edom, Moab).
 */

const REGIONS_DATA = {
  tribes: [
    {
      id: "tribe-judah",
      name: "Tribe of Judah",
      hebrew: "שֵׁבֶט יְהוּדָה",
      transliteration: "Shevet Yehudah",
      color: "#A32822",
      symbol: "Lion of Judah (Gur Aryeh)",
      blessing: "Judah is a lion's whelp... The sceptre shall not depart from Judah, nor a lawgiver from between his feet, until Shiloh come (Genesis 49:9-10).",
      center: [31.55, 35.15],
      coordinates: [
        [31.80, 34.95],
        [31.78, 35.25],
        [31.75, 35.45],
        [31.25, 35.40],
        [31.10, 35.20],
        [31.20, 34.80],
        [31.60, 34.80],
        [31.80, 34.95]
      ],
      description: "The royal tribe allotted the southern hill country, wilderness of Judea, and Shephelah foothills. Encompassed Bethlehem, Hebron, and Jerusalem's southern borders. From Judah came King David and the lineage of the Messiah."
    },
    {
      id: "tribe-benjamin",
      name: "Tribe of Benjamin",
      hebrew: "שֵׁבֶט בִּנְיָמִן",
      transliteration: "Shevet Binyamin",
      color: "#C45B38",
      symbol: "Ravenous Wolf",
      blessing: "The beloved of the Lord shall dwell in safety by him; and the Lord shall cover him all the day long (Deuteronomy 33:12).",
      center: [31.85, 35.22],
      coordinates: [
        [31.95, 35.05],
        [31.95, 35.40],
        [31.78, 35.45],
        [31.75, 35.22],
        [31.78, 35.00],
        [31.95, 35.05]
      ],
      description: "A compact, highly strategic mountainous buffer territory between Judah and Ephraim. Included Jerusalem (Jebusite border), Jericho, Bethel, Gibeon, and Ramah. Notable for skilled slingers and warriors."
    },
    {
      id: "tribe-ephraim",
      name: "Tribe of Ephraim",
      hebrew: "שֵׁבֶט אֶפְרַיִם",
      transliteration: "Shevet Efrayim",
      color: "#1D4E89",
      symbol: "Ox / Fruitful Bough",
      blessing: "Joseph is a fruitful bough, even a fruitful bough by a well... Blessed of the Lord be his land (Genesis 49:22; Deut 33:13).",
      center: [32.10, 35.20],
      coordinates: [
        [32.25, 35.00],
        [32.25, 35.45],
        [31.95, 35.40],
        [31.95, 35.05],
        [32.25, 35.00]
      ],
      description: "Received the primary birthright blessing through Joseph from Jacob. Controlled the lush, rolling central hill country including Shiloh (home of the Tabernacle for over three centuries) and Shechem."
    },
    {
      id: "tribe-manasseh-west",
      name: "Tribe of Manasseh (West)",
      hebrew: "שֵׁבֶט מְנַשֶּׁה (מַעֲרָב)",
      transliteration: "Shevet Menasheh (Ma'arav)",
      color: "#2D6CB5",
      symbol: "Wild Bull / Thousands of Manasseh",
      blessing: "They are the ten thousands of Ephraim, and they are the thousands of Manasseh (Deut 33:17).",
      center: [32.40, 35.15],
      coordinates: [
        [32.55, 34.90],
        [32.55, 35.40],
        [32.25, 35.45],
        [32.25, 35.00],
        [32.55, 34.90]
      ],
      description: "Spanned fertile valleys from the Mediterranean coast through Samaria to Mount Gilboa and the Beth-shean Valley. Later included the northern royal capital of Samaria."
    },
    {
      id: "tribe-manasseh-east",
      name: "Tribe of Manasseh (East / Bashan & Gilead)",
      hebrew: "שֵׁבֶט מְנַשֶּׁה (מִזְרָח)",
      transliteration: "Shevet Menasheh (Mizrach)",
      color: "#3B82F6",
      symbol: "Oaks of Bashan",
      blessing: "Half-tribe allotted the northern Transjordan by Moses after defeating Og King of Bashan.",
      center: [32.70, 35.90],
      coordinates: [
        [33.10, 35.65],
        [33.10, 36.25],
        [32.35, 36.20],
        [32.35, 35.60],
        [33.10, 35.65]
      ],
      description: "Expansive fertile pastoral plateau east of the Sea of Galilee and Upper Jordan, renowned for massive herds of cattle and tall oak forests."
    },
    {
      id: "tribe-dan",
      name: "Tribe of Dan",
      hebrew: "שֵׁבֶט דָּן",
      transliteration: "Shevet Dan",
      color: "#84532B",
      symbol: "Serpent / Scales of Justice",
      blessing: "Dan shall judge his people, as one of the tribes of Israel (Genesis 49:16).",
      center: [31.90, 34.85],
      coordinates: [
        [32.10, 34.75],
        [32.10, 35.00],
        [31.80, 35.00],
        [31.80, 34.70],
        [32.10, 34.75]
      ],
      description: "Originally allotted coastal land around Joppa; fought Philistine resistance (Samson); later migrated northward to capture Laish near the foot of Mount Hermon, renaming it Dan."
    },
    {
      id: "tribe-simeon",
      name: "Tribe of Simeon",
      hebrew: "שֵׁבֶט שִׁמְעוֹן",
      transliteration: "Shevet Shim'on",
      color: "#B45309",
      symbol: "Sword / City Gate",
      blessing: "I will divide them in Jacob, and scatter them in Israel (Genesis 49:7).",
      center: [31.25, 34.80],
      coordinates: [
        [31.40, 34.65],
        [31.40, 35.00],
        [31.10, 35.00],
        [31.10, 34.65],
        [31.40, 34.65]
      ],
      description: "Encompassed Beersheba and the arid southern Negev; its towns were an enclave within the larger southern inheritance of Judah."
    },
    {
      id: "tribe-reuben",
      name: "Tribe of Reuben",
      hebrew: "שֵׁבֶט רְאוּבֵן",
      transliteration: "Shevet Re'uven",
      color: "#977329",
      symbol: "Mandrake / Rushing Waters",
      blessing: "Reuben, thou art my firstborn, my might, and the beginning of my strength... Unstable as water (Genesis 49:3-4).",
      center: [31.65, 35.80],
      coordinates: [
        [31.85, 35.60],
        [31.85, 36.10],
        [31.40, 36.00],
        [31.40, 35.50],
        [31.85, 35.60]
      ],
      description: "Located east of the Dead Sea along the Arnon Gorge and Mount Nebo. Chose fertile pastureland in Transjordan prior to the crossing of the Jordan."
    },
    {
      id: "tribe-gad",
      name: "Tribe of Gad",
      hebrew: "שֵׁבֶט גָּד",
      transliteration: "Shevet Gad",
      color: "#5B6B38",
      symbol: "Troop / Camp of Tents",
      blessing: "Gad, a troop shall overcome him: but he shall overcome at the last (Genesis 49:19).",
      center: [32.15, 35.75],
      coordinates: [
        [32.35, 35.55],
        [32.35, 36.15],
        [31.85, 36.10],
        [31.85, 35.60],
        [32.35, 35.55]
      ],
      description: "Occupied the central Transjordan valley and highlands of Gilead along the Jabbok River, famed for courageous warriors and rugged hill defenses."
    },
    {
      id: "tribe-asher",
      name: "Tribe of Asher",
      hebrew: "שֵׁבֶט אָשֵׁר",
      transliteration: "Shevet Asher",
      color: "#0D9488",
      symbol: "Olive Tree / Royal Dainties",
      blessing: "Out of Asher his bread shall be fat, and he shall yield royal dainties... Let him dip his foot in oil (Gen 49:20; Deut 33:24).",
      center: [32.95, 35.15],
      coordinates: [
        [33.25, 35.10],
        [33.25, 35.35],
        [32.70, 35.30],
        [32.70, 35.00],
        [33.25, 35.10]
      ],
      description: "Stretched along the northwest Mediterranean coast including Mount Carmel, the Plain of Acre, and north toward Tyre and Sidon. Renowned for olive oil production."
    },
    {
      id: "tribe-naphtali",
      name: "Tribe of Naphtali",
      hebrew: "שֵׁבֶט נַפְתָּלִי",
      transliteration: "Shevet Naftali",
      color: "#0284C7",
      symbol: "Hind Let Loose",
      blessing: "Naphtali is a hind let loose: he giveth goodly words (Genesis 49:21).",
      center: [32.90, 35.50],
      coordinates: [
        [33.25, 35.35],
        [33.25, 35.70],
        [32.65, 35.60],
        [32.65, 35.35],
        [33.25, 35.35]
      ],
      description: "Encircled the western shore of the Sea of Galilee and the Upper Galilee mountains up to the base of Mount Hermon."
    },
    {
      id: "tribe-zebulun",
      name: "Tribe of Zebulun",
      hebrew: "שֵׁבֶט זְבוּלֻן",
      transliteration: "Shevet Zevulun",
      color: "#D97706",
      symbol: "Ship / Harbor",
      blessing: "Zebulun shall dwell at the haven of the sea; and he shall be for an haven of ships (Genesis 49:13).",
      center: [32.75, 35.25],
      coordinates: [
        [32.85, 35.10],
        [32.85, 35.40],
        [32.65, 35.40],
        [32.65, 35.15],
        [32.85, 35.10]
      ],
      description: "Situated in Lower Galilee spanning from the Jezreel Valley toward the Mediterranean maritime trade corridors."
    },
    {
      id: "tribe-issachar",
      name: "Tribe of Issachar",
      hebrew: "שֵׁבֶט יִשָּׂשכָר",
      transliteration: "Shevet Yissakhar",
      color: "#78350F",
      symbol: "Strong Donkey",
      blessing: "Issachar is a strong ass couching down between two burdens (Genesis 49:14).",
      center: [32.55, 35.35],
      coordinates: [
        [32.65, 35.20],
        [32.65, 35.55],
        [32.45, 35.50],
        [32.45, 35.20],
        [32.65, 35.20]
      ],
      description: "Centered upon the immensely fertile Jezreel Valley, Mount Tabor, and the northern approaches to Mount Gilboa."
    }
  ],

  ancientEmpires: [
    {
      id: "egypt",
      name: "Land of Egypt (Mizraim)",
      hebrew: "מִצְרַיִם",
      transliteration: "Mizraim",
      center: [29.5, 31.2],
      description: "Superpower of the Nile. Provided refuge during famine for Abraham, Jacob, and Joseph; enslaved Israel for over four centuries; struck by the Ten Plagues before the Exodus."
    },
    {
      id: "assyria",
      name: "Assyrian Empire (Ashur)",
      hebrew: "אַשּׁוּר",
      transliteration: "Ashur",
      center: [36.0, 43.5],
      description: "Fierce northern military empire based at Nineveh and Calah. Conquered the Northern Kingdom of Israel in 722 BC, leading to the scattering of the Lost Ten Tribes."
    },
    {
      id: "babylon",
      name: "Babylonian Empire (Chaldea)",
      hebrew: "בָּבֶל וְכַשְׂדִּים",
      transliteration: "Bavel v'Kasdim",
      center: [32.5, 44.4],
      description: "Golden kingdom of Nebuchadnezzar. Besieged and destroyed Jerusalem and Solomon's Temple in 586 BC, exiling Judah to Babylon for 70 years."
    },
    {
      id: "persia",
      name: "Persian Empire (Paras)",
      hebrew: "פָּרַס וּמָדַי",
      transliteration: "Paras u'Madai",
      center: [32.0, 50.0],
      description: "Overthrew Babylon in 539 BC under Cyrus the Great, who issued the royal decree permitting Jewish exiles under Zerubbabel, Ezra, and Nehemiah to return and rebuild the Temple and city walls."
    }
  ]
};

if (typeof window !== "undefined") {
  window.REGIONS_DATA = REGIONS_DATA;
}
