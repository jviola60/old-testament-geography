/**
 * OLD TESTAMENT GEOGRAPHY - MAJOR BIBLICAL JOURNEYS & ROUTES
 * GeoJSON and Polyline coordinate tracks with historical waypoints,
 * scripture references, and thematic cartographic styling.
 */

const JOURNEYS_DATA = [
  {
    id: "abraham-journey",
    name: "Abraham's Journey of Faith (Ur to Canaan & Egypt)",
    hebrew: "מַסְעוֹת אַבְרָהָם אָבִינוּ",
    color: "#C5A059",
    dashArray: null,
    weight: 3.5,
    era: "Patriarchal Era (~2000 BC)",
    scriptures: "Abraham 1-2; Genesis 11:31-32; Genesis 12:1-10; Genesis 13:1-18; Genesis 22:1-14",
    description: "Obeying the divine call to leave idolatrous Ur of the Chaldees, Abraham traveled over 1,500 miles through Haran to the land of Canaan, sojourned in Egypt during famine, returned to Bethel and Hebron, and offered Isaac on Mount Moriah.",
    waypoints: [
      { name: "Ur of the Chaldees", coords: [30.9628, 46.1042], note: "Deliverance from the altar of Elkenah (Abraham 1:15-20)" },
      { name: "Babylon", coords: [32.5422, 44.4211], note: "Waystation north along the Euphrates" },
      { name: "Mari", coords: [34.5492, 40.8931], note: "Ancient trade corridor" },
      { name: "Haran", coords: [36.8667, 39.0333], note: "Where Terah died; covenant received (Abr 2:6-11; Gen 12:1-4)" },
      { name: "Damascus", coords: [33.5138, 36.2765], note: "Northern oasis route; Eliezer's home" },
      { name: "Shechem", coords: [32.2133, 35.2817], note: "Oak of Moreh; first altar built in Canaan (Gen 12:6-7)" },
      { name: "Bethel", coords: [31.9314, 35.2217], note: "Pitched tent with Bethel on west and Ai on east (Gen 12:8)" },
      { name: "Hebron (Mamre)", coords: [31.5247, 35.1107], note: "Oaks of Mamre; purchased Machpelah cave (Gen 13:18; 23:1-20)" },
      { name: "Egypt (Nile Delta)", coords: [30.5000, 31.5000], note: "Sojourn in Egypt during famine; taught astronomy to Pharaoh's court (Abr 3; Gen 12:10)" },
      { name: "Beersheba", coords: [31.2444, 34.8406], note: "Dug covenant well; planted tamarisk tree (Gen 21:22-33)" },
      { name: "Mount Moriah (Jerusalem)", coords: [31.7780, 35.2354], note: "The Akedah / Binding of Isaac in similitude of the Savior (Gen 22:1-14)" }
    ]
  },
  {
    id: "exodus-route",
    name: "The Exodus & 40-Year Wilderness Wanderings",
    hebrew: "יְצִיאַת מִצְרַיִם וּמַסְעֵי הַמִּדְבָּר",
    color: "#A32822",
    dashArray: "6, 6",
    weight: 4,
    era: "Exodus & Conquest (~1446 – 1406 BC)",
    scriptures: "Exodus 12-19; Numbers 10-14, 20-21, 33; Deuteronomy 1-2, 34",
    description: "The miraculous deliverance of Israel from Egyptian bondage through the Red Sea, the reception of the Law at Mount Sinai, forty years of chastening wandering in the wilderness, and the final approach to the Jordan across the Plains of Moab.",
    waypoints: [
      { name: "Rameses (Goshen)", coords: [30.7878, 31.8319], note: "Passover night departure (Exodus 12:37)" },
      { name: "Succoth", coords: [30.5833, 32.1000], note: "First encampment in booths" },
      { name: "Etham", coords: [30.3500, 32.3500], note: "Edge of the wilderness with pillar of cloud and fire" },
      { name: "Pi-hahiroth & Red Sea", coords: [29.9500, 32.5500], note: "Parting of the waters of the Red Sea / Yam Suph (Exodus 14)" },
      { name: "Marah", coords: [29.5500, 32.9000], note: "Bitter waters healed by the cast tree (Exodus 15:23-25)" },
      { name: "Elim", coords: [29.3000, 33.1500], note: "Twelve wells of water and seventy palm trees (Exodus 15:27)" },
      { name: "Wilderness of Sin", coords: [28.9500, 33.3500], note: "Manna from heaven and quails provided (Exodus 16)" },
      { name: "Rephidim", coords: [28.7000, 33.6500], note: "Water from the smitten rock; hands of Moses upheld in battle (Exodus 17)" },
      { name: "Mount Sinai (Horeb)", coords: [28.5394, 33.9753], note: "The Ten Commandments; Law of Moses; Tabernacle constructed (Exodus 19-40)" },
      { name: "Kibroth-hattaavah", coords: [28.8500, 34.2000], note: "Graves of longing (Numbers 11)" },
      { name: "Hazeroth", coords: [29.1000, 34.4000], note: "Miriam struck with leprosy and healed (Numbers 12)" },
      { name: "Ezion-geber", coords: [29.5333, 34.9500], note: "Port on Gulf of Aqaba" },
      { name: "Kadesh-barnea", coords: [30.6450, 34.4250], note: "Twelve spies dispatched; rebellion and 38-year wandering sentence (Num 13-14)" },
      { name: "Mount Hor", coords: [30.3167, 35.4167], note: "Death and burial of Aaron the High Priest (Num 20:22-29)" },
      { name: "Arnon River Gorge", coords: [31.4667, 35.8000], note: "Border between Moab and the Amorites (Num 21:13)" },
      { name: "Plains of Moab & Mount Nebo", coords: [31.7683, 35.7253], note: "Moses views the Promised Land and is translated (Deut 34)" },
      { name: "Jordan River Crossing", coords: [31.8500, 35.5300], note: "Waters of the Jordan parted before the Ark of the Covenant (Joshua 3)" },
      { name: "Jericho", coords: [31.8708, 35.4439], note: "Walls fall down after seven days of circling (Joshua 6)" }
    ]
  },
  {
    id: "ark-covenant-journey",
    name: "Journeys of the Ark of the Covenant",
    hebrew: "מַסְעוֹת אֲרוֹן הַבְּרִית",
    color: "#D97706",
    dashArray: "3, 5",
    weight: 3.5,
    era: "Exodus to United Monarchy (~1446 – 960 BC)",
    scriptures: "Exodus 25; Joshua 3-6; 1 Samuel 4-7; 2 Samuel 6; 1 Kings 8",
    description: "The sacred vessel containing the stone tablets, pot of manna, and Aaron's rod; carried through the wilderness, crossed the Jordan, rested at Shiloh for 300+ years, captured by Philistines, retrieved by David, and enthroned in Solomon's Temple.",
    waypoints: [
      { name: "Mount Sinai", coords: [28.5394, 33.9753], note: "Constructed of acacia wood overlaid with pure gold by Bezalel (Exodus 25)" },
      { name: "Jordan River", coords: [31.8500, 35.5300], note: "Priests' feet stood in the dry riverbed while Israel passed over (Joshua 3)" },
      { name: "Gilgal", coords: [31.8700, 35.4800], note: "First camp in Canaan; twelve memorial stones set up (Joshua 4)" },
      { name: "Jericho", coords: [31.8708, 35.4439], note: "Carried around the walls seven times on the seventh day (Joshua 6)" },
      { name: "Shiloh", coords: [32.0556, 35.2894], note: "Tabernacle sanctuary for over three centuries until Eli (Joshua 18:1; 1 Sam 4)" },
      { name: "Ebenezer (Aphek)", coords: [32.1000, 34.9300], note: "Captured in battle by the Philistines; Eli fell and died (1 Sam 4:11)" },
      { name: "Ashdod", coords: [31.8000, 34.6500], note: "Placed in temple of Dagon; idol fell smashed before the Ark (1 Sam 5:1-5)" },
      { name: "Gath", coords: [31.7000, 34.8500], note: "Plagues of emerods afflicted the Philistine inhabitants (1 Sam 5:8-9)" },
      { name: "Ekron", coords: [31.7800, 34.8600], note: "Philistine city lords pleaded to send the Ark away (1 Sam 5:10-12)" },
      { name: "Beth-shemesh", coords: [31.7500, 34.9800], note: "Returned on a cart pulled by two kine without a driver (1 Sam 6:12)" },
      { name: "Kiriath-jearim", coords: [31.8100, 35.1000], note: "Abode in the house of Abinadab for twenty years (1 Sam 7:1-2)" },
      { name: "Jerusalem (City of David)", coords: [31.7767, 35.2345], note: "Brought up by King David with rejoicing, shouting, and dancing (2 Sam 6)" },
      { name: "Solomon's Temple (Mount Moriah)", coords: [31.7780, 35.2354], note: "Installed in the Holy of Holies beneath the wings of the cherubim (1 Kings 8:1-11)" }
    ]
  },
  {
    id: "elijah-ministry",
    name: "Elijah & Elisha Prophetic Journeys",
    hebrew: "מַסְעוֹת אֵלִיָּהוּ וֶאֱלִישָׁע",
    color: "#5B6B38",
    dashArray: "4, 4",
    weight: 3,
    era: "Divided Kingdom (~875 – 840 BC)",
    scriptures: "1 Kings 17-19; 2 Kings 2",
    description: "The courageous ministry of Elijah the Tishbite against royal idolatry, his confrontation on Mount Carmel, flight to Horeb to hear the still small voice, and translation into heaven by a chariot of fire.",
    waypoints: [
      { name: "Tishbe (Gilead)", coords: [32.3500, 35.7500], note: "Birthplace in Transjordan highlands (1 Kings 17:1)" },
      { name: "Samaria", coords: [32.2772, 35.1906], note: "Prophesied drought before King Ahab (1 Kings 17:1)" },
      { name: "Brook Cherith", coords: [31.8500, 35.4000], note: "Fed by ravens morning and evening; drank from the brook (1 Kings 17:3-6)" },
      { name: "Zarephath (Sidon)", coords: [33.4500, 35.3000], note: "Miracle of the barrel of meal and cruse of oil; widow's son raised (1 Kings 17:9-24)" },
      { name: "Mount Carmel", coords: [32.7380, 35.0340], note: "Fire descended from heaven consuming sacrifice; 450 priests of Baal slain (1 Kings 18)" },
      { name: "Jezreel", coords: [32.5500, 35.3300], note: "Elijah outran Ahab's chariot ahead of the torrential rain (1 Kings 18:46)" },
      { name: "Beersheba", coords: [31.2444, 34.8406], note: "Fled from Jezebel's death threat; left servant here (1 Kings 19:3)" },
      { name: "Mount Horeb (Sinai)", coords: [28.5394, 33.9753], note: "Wind, earthquake, fire, followed by the 'still small voice' (1 Kings 19:8-13)" },
      { name: "Damascus", coords: [33.5138, 36.2765], note: "Anointed Hazael king over Syria; anointed Jehu and Elisha (1 Kings 19:15-16)" },
      { name: "Jordan River (Jericho)", coords: [31.8500, 35.5300], note: "Parted Jordan with his mantle; translated by chariot of fire (2 Kings 2:8-12)" }
    ]
  }
];

if (typeof window !== "undefined") {
  window.JOURNEYS_DATA = JOURNEYS_DATA;
}
