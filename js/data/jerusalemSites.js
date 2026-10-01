/**
 * OLD TESTAMENT GEOGRAPHY - FIRST TEMPLE JERUSALEM SITES
 * Landmarks, holy spaces, springs, and defensive topography
 * of Jerusalem during the United Monarchy and Prophetic Eras.
 */

const JERUSALEM_SITES = [
  {
    id: "solomons-temple",
    name: "Solomon's Temple (First Temple)",
    hebrew: "בֵּית הַמִּקְדָּשׁ הָרִאשׁוֹן",
    transliteration: "Beit HaMikdash HaRishon",
    lat: 31.7780,
    lng: 35.2354,
    category: "temple",
    description: "Built upon the summit of Mount Moriah (the threshing floor of Araunah). Adorned with cedar of Lebanon, cypress, olivewood, and pure gold. Housed the Ark of the Covenant, golden table of shewbread, menorahs, and the bronze altar of sacrifice.",
    scripture: "1 Kings 6-8; 2 Chronicles 3-5"
  },
  {
    id: "city-of-david",
    name: "City of David (Zion)",
    hebrew: "עִיר דָּוִד (מְצֻדַת צִיּוֹן)",
    transliteration: "Ir David (Metzudat Tziyon)",
    lat: 31.7733,
    lng: 35.2360,
    category: "palace",
    description: "The original narrow southern limestone ridge conquered by David from the Jebusites via the water conduit. Contained David's royal palace, administrative quarters, and royal tombs.",
    scripture: "2 Samuel 5:6-9; 1 Chronicles 11:4-9"
  },
  {
    id: "gihon-spring",
    name: "Gihon Spring",
    hebrew: "מַעְיַן הַגִּיחוֹן",
    transliteration: "Ma'ayan HaGichon",
    lat: 31.7730,
    lng: 35.2372,
    category: "water",
    description: "The sole perennial freshwater spring in ancient Jerusalem, issuing from a subterranean cave in the Kidron Valley. Where Solomon was anointed king by Zadok the Priest (1 Kings 1:38-40).",
    scripture: "1 Kings 1:38-40; 2 Chronicles 32:30"
  },
  {
    id: "hezekiahs-tunnel",
    name: "Hezekiah's Tunnel",
    hebrew: "נִקְבַּת חִזְקִיָּהוּ",
    transliteration: "Nikbat Chizkiyahu",
    lat: 31.7715,
    lng: 35.2358,
    category: "water",
    description: "Carved 1,750 feet through solid bedrock under King Hezekiah to divert the waters of the Gihon Spring into the city walls before the Assyrian siege in 701 BC.",
    scripture: "2 Kings 20:20; 2 Chronicles 32:30"
  },
  {
    id: "pool-of-siloam",
    name: "Pool of Siloam (Shiloah)",
    hebrew: "בְּרֵכַת הַשִּׁלֹחַ",
    transliteration: "Berechat HaShilo'ach",
    lat: 31.7700,
    lng: 35.2345,
    category: "water",
    description: "Southern reservoir fed by the waters of Shiloah that go softly (Isaiah 8:6). Gathered water inside the fortified southern walls of the City of David.",
    scripture: "Isaiah 8:6; Nehemiah 3:15"
  },
  {
    id: "kidron-valley",
    name: "Kidron Valley (Valley of Jehoshaphat)",
    hebrew: "נַחַל קִדְרוֹן / עֵמֶק יְהוֹשָׁפָט",
    transliteration: "Nachal Kidron / Emek Yehoshafat",
    lat: 31.7760,
    lng: 35.2385,
    category: "topography",
    description: "Deep gorge separating the Temple Mount and City of David from the Mount of Olives. Cross point for King David when fleeing Absalom (2 Samuel 15:23); site of royal tombs.",
    scripture: "2 Samuel 15:23; 1 Kings 15:13; Joel 3:2"
  },
  {
    id: "hinnom-valley",
    name: "Valley of Hinnom (Gehenna)",
    hebrew: "גֵּיא בֶן־הִנֹּם",
    transliteration: "Gey Ben-Hinnom",
    lat: 31.7705,
    lng: 35.2280,
    category: "topography",
    description: "Deep ravine curving along the west and south of the ancient city. Where apostate kings burned incense and sacrificed children to Molech at Tophet, later defiled by King Josiah.",
    scripture: "Jeremiah 7:31-32; 2 Kings 23:10"
  },
  {
    id: "mount-of-olives",
    name: "Mount of Olives",
    hebrew: "הַר הַזֵּיתִים",
    transliteration: "Har HaZeitim",
    lat: 31.7785,
    lng: 35.2440,
    category: "topography",
    description: "Prominent limestone ridge east of Jerusalem overlooking the Temple Mount. Where David wept with his head covered during Absalom's rebellion; prophetic scene of Zechariah's apocalyptic prophecy.",
    scripture: "2 Samuel 15:30; Zechariah 14:4"
  },
  {
    id: "zedekiah-palace",
    name: "Palace of King Zedekiah",
    hebrew: "אַרְמוֹן צִדְקִיָּהוּ הַמֶּלֶךְ",
    transliteration: "Armon Tzidkiyahu HaMelekh",
    lat: 31.7745,
    lng: 35.2355,
    category: "palace",
    description: "The royal seat of King Zedekiah, the last king of Judah (reigned 597–586 BC), appointed by Nebuchadnezzar. Where Jeremiah was interrogated in the court of the prison, and where prophets warned of imminent Babylonian destruction unless the nation repented.",
    scripture: "Jeremiah 37:17-21; 38:14-28; 2 Kings 24:17-20; 1 Nephi 1:4"
  },
  {
    id: "laban-estate",
    name: "Upper City & Estate of Laban",
    hebrew: "בֵּית לָבָן בָּעִיר הָעֶלְיוֹנָה",
    transliteration: "Beit Lavan Ba'Ir HaElyonah",
    lat: 31.7755,
    lng: 35.2315,
    category: "fortress",
    description: "The affluent estate of Laban, an influential military leader and custodian of sacred genealogical records in Jerusalem (~600 BC). Laban commanded fifty soldiers and possessed the sacred Plates of Brass containing the Law of Moses and prophecies of Isaiah. Here Nephi returned by night, was led by the Spirit, and obtained the brass plates for Lehi's colony.",
    scripture: "1 Nephi 3:1-31; 1 Nephi 4:1-38"
  },
  {
    id: "broad-wall",
    name: "The Broad Wall (Western Hill / Mishneh)",
    hebrew: "הַחוֹמָה הָרְחָבָה",
    transliteration: "HaChomah HaRechavah",
    lat: 31.7758,
    lng: 35.2308,
    category: "fortress",
    description: "Massive 23-foot-thick defensive stone fortification built under King Hezekiah to enclose the expanding western residential quarter (Mishneh) where refugees from the Northern Kingdom and affluent merchants like Lehi's family resided in late First Temple Jerusalem.",
    scripture: "Nehemiah 3:8; 12:38; Isaiah 22:9-10; 2 Kings 22:14"
  }
];

if (typeof window !== "undefined") {
  window.JERUSALEM_SITES = JERUSALEM_SITES;
}
