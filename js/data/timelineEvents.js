/**
 * OLD TESTAMENT GEOGRAPHY - TIMELINE EVENTS & EPOCHS
 * Spanning ~4000 BC to ~400 BC from Adam/Moses through Abraham,
 * the Exodus, Monarchy, Divided Kingdoms, Exile, and Restoration.
 */

const TIMELINE_EVENTS = [
  {
    year: -4000,
    title: "Creation, Adam & Eve, and the Fall",
    hebrew: "בְּרִיאַת הָעוֹלָם וְאָדָם",
    epoch: "Antediluvian & Patriarchal Era",
    location: "Garden of Eden / Adam-ondi-Ahman",
    coords: [32.0, 44.0],
    summary: "The divine creation of heaven, earth, and mankind in the image of God. Adam and Eve offer sacrifice in similitude of the Only Begotten (Moses 2-5; Genesis 1-3).",
    scriptures: "Moses 1-5; Genesis 1-3"
  },
  {
    year: -3000,
    title: "Enoch & the City of Zion",
    hebrew: "חֲנוֹךְ וְעִיר צִיּוֹן",
    epoch: "Antediluvian & Patriarchal Era",
    location: "Zion",
    coords: [33.0, 42.0],
    summary: "Enoch gathers the righteous and builds Zion, a people of one heart and one mind, having no poor among them. The city of Zion is taken up into heaven (Moses 7).",
    scriptures: "Moses 7:1-69; Genesis 5:21-24"
  },
  {
    year: -2348,
    title: "Noah, the Ark & Mount Ararat",
    hebrew: "נֹחַ וְתֵבַת הַמַּבּוּל",
    epoch: "Antediluvian & Patriarchal Era",
    location: "Mount Ararat",
    coords: [39.7025, 44.2992],
    summary: "Noah preaches repentance for 120 years. The Great Flood cleanses the earth, and the Ark rests upon the mountains of Ararat. God establishes the rainbow covenant (Genesis 6-9; Moses 8).",
    scriptures: "Moses 8:19-30; Genesis 6-9"
  },
  {
    year: -2200,
    title: "Tower of Babel & Confounding of Tongues",
    hebrew: "מִגְדַּל בָּבֶל",
    epoch: "Antediluvian & Patriarchal Era",
    location: "Babylon (Babel)",
    coords: [32.5422, 44.4211],
    summary: "Prideful builders attempt to reach heaven with a tower. The Lord confounds languages and scatters the families across the earth (Genesis 11; Ether 1).",
    scriptures: "Genesis 11:1-9; Ether 1:33"
  },
  {
    year: -2000,
    title: "Deliverance of Abraham & Abrahamic Covenant",
    hebrew: "בְּרִית אַבְרָהָם",
    epoch: "Patriarchal Era",
    location: "Ur of the Chaldees & Haran",
    coords: [30.9628, 46.1042],
    summary: "Jehovah delivers Abraham from the altar of Elkenah in Ur. In Haran, God confers the Abrahamic Covenant: Land, Priesthood, Posterity, and blessing to all nations (Abraham 1-2; Genesis 12).",
    scriptures: "Abraham 1-2; Genesis 12:1-4"
  },
  {
    year: -1900,
    title: "The Akedah / Offering of Isaac",
    hebrew: "עֲקֵדַת יִצְחָק",
    epoch: "Patriarchal Era",
    location: "Mount Moriah (Jerusalem)",
    coords: [31.7780, 35.2354],
    summary: "Abraham obeys God's command to offer Isaac upon Mount Moriah. God provides a ram caught in a thicket, swearing by Himself to multiply Abraham's seed as the stars of heaven (Genesis 22).",
    scriptures: "Genesis 22:1-18; Jacob 4:5"
  },
  {
    year: -1750,
    title: "Jacob Becomes Israel & Father of 12 Tribes",
    hebrew: "יַעֲקֹב נִקְרָא יִשְׂרָאֵל",
    epoch: "Patriarchal Era",
    location: "Peniel & Bethel",
    coords: [32.19, 35.65],
    summary: "Jacob wrestles with an angel at Peniel and prevails; his name is changed to Israel ('he who prevails with God'). His twelve sons become the heads of the Twelve Tribes of Israel (Genesis 32, 35).",
    scriptures: "Genesis 32:24-30; Genesis 35:9-12"
  },
  {
    year: -1700,
    title: "Joseph in Egypt Saves His Household",
    hebrew: "יוֹסֵף בְּמִצְרַיִם",
    epoch: "Patriarchal Era",
    location: "Egypt (Goshen)",
    coords: [30.7878, 31.8319],
    summary: "Sold into Egypt, Joseph interprets Pharaoh's dreams, is elevated to ruler over Egypt, and preserves his family from famine, settling Israel in the fertile land of Goshen (Genesis 37-50).",
    scriptures: "Genesis 37-50"
  },
  {
    year: -1446,
    title: "The Exodus & Parting of the Red Sea",
    hebrew: "יְצִיאַת מִצְרַיִם",
    epoch: "Exodus & Wilderness",
    location: "Red Sea / Pi-hahiroth",
    coords: [29.95, 32.55],
    summary: "Moses leads Israel out of Egyptian bondage after the Tenth Plague (Passover). The Lord parts the Red Sea, drowning Pharaoh's chariots and delivering Israel (Exodus 12-14).",
    scriptures: "Exodus 12-14"
  },
  {
    year: -1445,
    title: "Giving of the Law on Mount Sinai",
    hebrew: "מַתַּן תּוֹרָה בְּהַר סִינַי",
    epoch: "Exodus & Wilderness",
    location: "Mount Sinai (Horeb)",
    coords: [28.5394, 33.9753],
    summary: "Amid thunder and lightnings, God speaks the Ten Commandments and reveals the pattern of the Tabernacle. Moses brings down the tables of stone (Exodus 19-24, 32-34).",
    scriptures: "Exodus 19-24; Moses 1"
  },
  {
    year: -1406,
    title: "Crossing the Jordan & Conquest of Jericho",
    hebrew: "כִּבּוּשׁ יְרִיחוֹ וַחֲצִיַּת הַיַּרְדֵּן",
    epoch: "Conquest & Judges",
    location: "Jordan River & Jericho",
    coords: [31.8708, 35.4439],
    summary: "Joshua leads Israel across the parted Jordan River. The walls of Jericho fall after the Ark circles the city for seven days (Joshua 3, 6).",
    scriptures: "Joshua 3-6"
  },
  {
    year: -1380,
    title: "The Tabernacle Set Up at Shiloh",
    hebrew: "הַמִּשְׁכָּן בְּשִׁילֹה",
    epoch: "Conquest & Judges",
    location: "Shiloh",
    coords: [32.0556, 35.2894],
    summary: "The Tabernacle of the congregation is established at Shiloh, where it serves as the spiritual home of the Ark of the Covenant for over three hundred years (Joshua 18:1).",
    scriptures: "Joshua 18:1; 1 Samuel 1-3"
  },
  {
    year: -1010,
    title: "King David Anointed & Captures Jerusalem",
    hebrew: "דָּוִד מֶלֶךְ יִשְׂרָאֵל בִּירוּשָׁלַיִם",
    epoch: "United Monarchy",
    location: "Hebron & Jerusalem",
    coords: [31.7767, 35.2345],
    summary: "David is anointed king over all Israel, captures the Jebusite stronghold of Zion (City of David), and brings the Ark of the Covenant to Jerusalem with dancing (2 Samuel 5-6).",
    scriptures: "2 Samuel 5-6"
  },
  {
    year: -960,
    title: "Dedication of Solomon's Temple on Mount Moriah",
    hebrew: "חֲנֻכַּת בֵּית הַמִּקְדָּשׁ",
    epoch: "United Monarchy",
    location: "Mount Moriah (Jerusalem)",
    coords: [31.7780, 35.2354],
    summary: "King Solomon completes and dedicates the magnificent First Temple. The cloud of the Lord's glory fills the Holy of Holies as fire consumes the offerings (1 Kings 6-8; 2 Chronicles 7).",
    scriptures: "1 Kings 6-8; 2 Chronicles 7:1-3"
  },
  {
    year: -930,
    title: "Division into Northern (Israel) & Southern (Judah) Kingdoms",
    hebrew: "פִּלּוּג הַמַּמְלָכָה: יִשְׂרָאֵל וִיהוּדָה",
    epoch: "Divided Kingdom",
    location: "Shechem & Bethel",
    coords: [32.2133, 35.2817],
    summary: "Ten tribes rebel against Solomon's son Rehoboam, forming the Northern Kingdom under Jeroboam, while Judah and Benjamin remain loyal to the House of David (1 Kings 12).",
    scriptures: "1 Kings 12:1-24"
  },
  {
    year: -860,
    title: "Elijah's Contest on Mount Carmel",
    hebrew: "אֵלִיָּהוּ בְּהַר הַכַּרְמֶל",
    epoch: "Divided Kingdom",
    location: "Mount Carmel",
    coords: [32.7380, 35.0340],
    summary: "Elijah challenges 450 prophets of Baal. Fire from heaven consumes the water-drenched altar, proving 'Jehovah, He is the God' and ending the 3.5-year drought (1 Kings 18).",
    scriptures: "1 Kings 18:17-46"
  },
  {
    year: -722,
    title: "Fall of Samaria & Scattering of the Lost 10 Tribes",
    hebrew: "חֻרְבַּן שֹׁמְרוֹן וְגָלוּת עֲשֶׂרֶת הַשְּׁבָטִים",
    epoch: "Divided Kingdom",
    location: "Samaria & Assyria",
    coords: [32.2772, 35.1906],
    summary: "The Assyrian Empire under Sargon II captures Samaria and carries the Northern Kingdom into captivity, leading to the scattering of the Lost Ten Tribes (2 Kings 17).",
    scriptures: "2 Kings 17:1-23"
  },
  {
    year: -701,
    title: "Deliverance of Jerusalem from Sennacherib",
    hebrew: "הַצָּלַת יְרוּשָׁלַיִם מִיַּד סַנְחֵרִיב",
    epoch: "Divided Kingdom",
    location: "Jerusalem",
    coords: [31.7767, 35.2345],
    summary: "King Hezekiah carves the water tunnel and prays with Isaiah. The angel of the Lord slays 185,000 Assyrian soldiers besieging Jerusalem overnight (2 Kings 19; Isaiah 37).",
    scriptures: "2 Kings 19:14-37; Isaiah 36-37"
  },
  {
    year: -586,
    title: "Fall of Jerusalem & Babylonian Exile",
    hebrew: "חֻרְבַּן יְרוּשָׁלַיִם וְגָלוּת בָּבֶל",
    epoch: "Babylonian Exile",
    location: "Jerusalem & Babylon",
    coords: [32.5422, 44.4211],
    summary: "Nebuchadnezzar destroys Jerusalem, burns Solomon's Temple, and carries the citizens of Judah captive to Babylon for seventy years (2 Kings 25; 2 Chronicles 36).",
    scriptures: "2 Kings 25:1-21; Psalm 137"
  },
  {
    year: -538,
    title: "Edict of Cyrus & Return of Exiles to Jerusalem",
    hebrew: "הַכְרָזַת כּוֹרֶשׁ וְשִׁיבַת צִיּוֹן",
    epoch: "Persian Restoration",
    location: "Susa & Jerusalem",
    coords: [31.7767, 35.2345],
    summary: "Cyrus the Great decrees that Jewish exiles may return to Jerusalem to rebuild the house of the Lord under Zerubbabel and Joshua the High Priest (Ezra 1-3).",
    scriptures: "Ezra 1:1-4; 2 Chronicles 36:22-23"
  },
  {
    year: -445,
    title: "Nehemiah Rebuilds the Walls of Jerusalem",
    hebrew: "נְחֶמְיָה בּוֹנֶה אֶת חוֹמוֹת יְרוּשָׁלַיִם",
    epoch: "Persian Restoration",
    location: "Jerusalem",
    coords: [31.7767, 35.2345],
    summary: "Nehemiah, cupbearer to the Persian king, inspires the people to rebuild Jerusalem's broken stone walls in just 52 days despite fierce regional opposition (Nehemiah 1-6).",
    scriptures: "Nehemiah 2-6"
  },
  {
    year: -400,
    title: "Ministry of Malachi: Prophecy of Elijah",
    hebrew: "נְבוּאַת מַלְאָכִי: בּוֹא אֵלִיָּהוּ הַנָּבִיא",
    epoch: "Persian Restoration",
    location: "Jerusalem",
    coords: [31.7767, 35.2345],
    summary: "The final Old Testament prophet promises: 'Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the Lord: And he shall turn the heart of the fathers to the children' (Malachi 4:5-6).",
    scriptures: "Malachi 4:5-6; D&C 110:13-16"
  }
];

if (typeof window !== "undefined") {
  window.TIMELINE_EVENTS = TIMELINE_EVENTS;
}
