/**
 * OLD TESTAMENT GEOGRAPHY - CURATED GUIDED SCRIPTURE TOURS
 * Interactive step-by-step cartographic journeys with camera focus,
 * scripture narratives, and doctrinal insights.
 */

const TOURS_DATA = [
  {
    id: "tour-abraham",
    title: "Abraham's Journey of Covenant Faith",
    subtitle: "From Ur of the Chaldees to Mount Moriah (~2000 BC)",
    hebrew: "מַסַּע הָאֱמוּנָה שֶׁל אַבְרָהָם אָבִינוּ",
    stopsCount: 6,
    description: "Follow the Father of the Faithful as Jehovah delivers him from idolatry in Mesopotamia, leads him through Haran to the Promised Land, establishes the eternal Abrahamic Covenant, and tests him upon Mount Moriah.",
    stops: [
      {
        siteId: "ur-of-chaldees",
        name: "1. Ur of the Chaldees: Deliverance from Elkenah",
        coords: [30.9628, 46.1042],
        zoom: 7,
        scripture: "Abraham 1:15-18",
        narrative: "In the plains of Olishem, pagan priests bind Abraham upon the altar of Elkenah. Jehovah sends the angel of His presence to unloose his bands, commanding him to depart his father's house."
      },
      {
        siteId: "haran",
        name: "2. Haran: The Abrahamic Covenant",
        coords: [36.8667, 39.0333],
        zoom: 7,
        scripture: "Abraham 2:9-11; Genesis 12:1-4",
        narrative: "Abraham halts at Haran until his father Terah dies. Here Jehovah confers the eternal covenant: Land, Priesthood, Posterity, and a blessing unto all the families of the earth."
      },
      {
        siteId: "shechem",
        name: "3. Shechem: First Altar in Canaan",
        coords: [32.2133, 35.2817],
        zoom: 10,
        scripture: "Genesis 12:6-7",
        narrative: "Entering the Promised Land under the Oak of Moreh, the Lord appears to Abraham, saying: 'Unto thy seed will I give this land.' Abraham builds his first altar in Canaan."
      },
      {
        siteId: "bethel",
        name: "4. Bethel: Calling upon the Name of the Lord",
        coords: [31.9314, 35.2217],
        zoom: 11,
        scripture: "Genesis 12:8; Genesis 13:3-4",
        narrative: "Pitching his tent between Bethel and Ai, Abraham builds an altar and calls upon Jehovah. He returns here after sojourning in Egypt during the famine, dividing the land amicably with Lot."
      },
      {
        siteId: "hebron",
        name: "5. Hebron: Oaks of Mamre & Machpelah",
        coords: [31.5247, 35.1107],
        zoom: 11,
        scripture: "Genesis 13:18; Genesis 23:1-20",
        narrative: "Abraham settles beneath the Oaks of Mamre, receives angelic visitors promising Isaac, and later purchases the Cave of Machpelah as the family covenant burial tomb."
      },
      {
        siteId: "mount-moriah",
        name: "6. Mount Moriah: The Akedah (Similitude of the Son)",
        coords: [31.7780, 35.2354],
        zoom: 13,
        scripture: "Genesis 22:1-14; Jacob 4:5",
        narrative: "Abraham's supreme test of faith: offering Isaac upon Mount Moriah. God provides a sacrificial ram in the thicket, promising: 'In blessing I will bless thee, and in multiplying I will multiply thy seed.'"
      }
    ]
  },
  {
    id: "tour-exodus",
    title: "The Exodus: From Bondage to Mount Sinai",
    subtitle: "Deliverance of Israel under Moses (~1446 BC)",
    hebrew: "יְצִיאַת מִצְרַיִם: מֵעַבְדוּת לְהַר סִינַי",
    stopsCount: 5,
    description: "Experience the miraculous emancipation of the Children of Israel from Egyptian slavery, through the waters of the Red Sea, across the harsh desert, to the foot of Mount Sinai.",
    stops: [
      {
        siteId: "rameses-goshen",
        name: "1. Rameses (Goshen): The Passover Night",
        coords: [30.7878, 31.8319],
        zoom: 8,
        scripture: "Exodus 12:21-37",
        narrative: "With the blood of the unblemished paschal lamb upon their doorposts, Israel partakes of the first Passover and marches out of Egyptian slavery under the leadership of Moses."
      },
      {
        siteId: null,
        name: "2. The Red Sea: Parting of the Waters",
        coords: [29.9500, 32.5500],
        zoom: 9,
        scripture: "Exodus 14:13-31",
        narrative: "Trapped between Pharaoh's elite chariots and the sea, Moses lifts his rod. The east wind divides the waters, allowing Israel to pass through on dry ground while Egypt is swallowed."
      },
      {
        siteId: null,
        name: "3. Marah & Elim: Bitter Waters Healed",
        coords: [29.4000, 33.0000],
        zoom: 9,
        scripture: "Exodus 15:23-27",
        narrative: "At Marah, God instructs Moses to cast a tree into the bitter water, making it sweet. They journey to Elim, finding twelve freshwater springs and seventy palm trees."
      },
      {
        siteId: null,
        name: "4. Rephidim: Water from the Rock",
        coords: [28.7000, 33.6500],
        zoom: 9,
        scripture: "Exodus 17:1-13",
        narrative: "Moses smites the rock at Horeb, and living water gushes forth to quench Israel's thirst. Aaron and Hur hold up Moses' arms until victory is won over Amalek."
      },
      {
        siteId: "mount-sinai",
        name: "5. Mount Sinai: Thunder, Lightnings & The Law",
        coords: [28.5394, 33.9753],
        zoom: 11,
        scripture: "Exodus 19-20; Moses 1",
        narrative: "Jehovah descends upon Mount Sinai in fire. Amid the blare of trumpets, God proclaims the Ten Commandments and delivers the stone tablets and Tabernacle pattern to Moses."
      }
    ]
  },
  {
    id: "tour-ark",
    title: "The Ark of the Covenant: Sacred Sanctuary Trail",
    subtitle: "From Mount Sinai to Solomon's Holy of Holies",
    hebrew: "מַסְעוֹת אֲרוֹן הַבְּרִית",
    stopsCount: 5,
    description: "Follow the holiest object in ancient Israel—the Ark of the Covenant—from its creation at Sinai, across the dry Jordan, through 300 years at Shiloh, its capture and return, to its final rest in the Temple.",
    stops: [
      {
        siteId: "mount-sinai",
        name: "1. Mount Sinai: Crafting the Sacred Ark",
        coords: [28.5394, 33.9753],
        zoom: 9,
        scripture: "Exodus 25:10-22",
        narrative: "Bezalel crafts the Ark of acacia wood overlaid with pure gold, crowned by the Mercy Seat and golden cherubim where God's presence will commune with Moses."
      },
      {
        siteId: "jericho",
        name: "2. The Jordan & Jericho: Conquering the Land",
        coords: [31.8708, 35.4439],
        zoom: 11,
        scripture: "Joshua 3:14-17; Joshua 6:6-20",
        narrative: "Priests carrying the Ark stand firm in the dry riverbed of the parted Jordan. At Jericho, the Ark circles the fortress seven times before the walls fall flat."
      },
      {
        siteId: "shiloh",
        name: "3. Shiloh: The Tabernacle Resting Place",
        coords: [32.0556, 35.2894],
        zoom: 12,
        scripture: "Joshua 18:1; 1 Samuel 1-4",
        narrative: "For over three centuries, the Ark dwells in the Tabernacle at Shiloh. Here Hannah weeps and prays, and the child Samuel hears the voice of the Lord calling his name."
      },
      {
        siteId: "en-gedi",
        name: "4. Kiriath-jearim & City of David",
        coords: [31.7767, 35.2345],
        zoom: 12,
        scripture: "1 Samuel 7:1-2; 2 Samuel 6:1-15",
        narrative: "After being recovered from Philistine captivity, King David brings the Ark into the City of David with rejoicing, trumpets, and sacred dancing."
      },
      {
        siteId: "mount-moriah",
        name: "5. Solomon's Temple: The Holy of Holies",
        coords: [31.7780, 35.2354],
        zoom: 14,
        scripture: "1 Kings 8:1-11; 2 Chronicles 5",
        narrative: "Solomon and the priests bear the Ark into the innermost sanctuary of the newly built Temple on Mount Moriah. The glory of the Lord fills the house as a cloud."
      }
    ]
  },
  {
    id: "tour-zedekiah-lehi",
    title: "King Zedekiah's Jerusalem & Lehi's Departure (~600 BC)",
    subtitle: "The Warning Prophets, Laban's Treasury & Flight into the Wilderness",
    hebrew: "מַלְכוּת צִדְקִיָּהוּ וִיצִיאַת לֶחִי מִירוּשָׁלַיִם",
    stopsCount: 6,
    description: "Step into Jerusalem during the turbulent first year of King Zedekiah (~600 BC). Witness the prophetic warnings of Jeremiah and Lehi, Lehi's vision of the Pillar of Fire and the coming Messiah, the trek into the desert borders, and Nephi obtaining the Brass Plates from Laban.",
    stops: [
      {
        siteId: "jerusalem",
        name: "1. Jerusalem: The Reign of King Zedekiah",
        coords: [31.7767, 35.2345],
        zoom: 13,
        scripture: "1 Nephi 1:4; 2 Kings 24:17-20; Jeremiah 37",
        narrative: "In the first year of King Zedekiah, many prophets warn Jerusalem of impending destruction. Lehi prays for his people and beholds a pillar of fire dwelling upon a rock, receiving a heavenly book foretelling the coming Messiah and Jerusalem's doom."
      },
      {
        siteId: "jerusalem",
        name: "2. Upper City: The Fortress & Treasury of Laban",
        coords: [31.7755, 35.2315],
        zoom: 15,
        scripture: "1 Nephi 3:1-31; 1 Nephi 4:1-38",
        narrative: "Laban, an influential military commander of fifty soldiers, refuses to relinquish the sacred Brass Plates, steals Lehi's gold and silver, and seeks to execute his sons. Led by the Spirit, Nephi slays Laban, secures the sacred records, and invites Zoram to join their colony."
      },
      {
        siteId: "red-sea",
        name: "3. Red Sea Borders: Three Days into the Wilderness",
        coords: [29.5000, 34.9500],
        zoom: 9,
        scripture: "1 Nephi 2:4-5",
        narrative: "Leaving behind gold, silver, and precious possessions in Jerusalem, Lehi departs with his family—Sariah, Laman, Lemuel, Sam, and Nephi—traveling south through the Judean wilderness toward the Gulf of Aqaba."
      },
      {
        siteId: "valley-of-lemuel",
        name: "4. Valley of Lemuel: Altar of Stones & The Liahona",
        coords: [28.5667, 34.8000],
        zoom: 11,
        scripture: "1 Nephi 2:6-14; 1 Nephi 16:10",
        narrative: "Pitched tents in a valley near a continually flowing river emptying into the Red Sea. Lehi builds an altar of stones, offering sacrifice and thanksgiving. Outside his tent, he discovers the Liahona, a brass director of curious workmanship."
      },
      {
        siteId: "nahom",
        name: "5. Nahom: The Ancient Burial of Ishmael",
        coords: [15.8600, 44.7500],
        zoom: 9,
        scripture: "1 Nephi 16:34-39",
        narrative: "Traveling south-southeast through the harsh desert, Ishmael dies and is buried at Nahom (archaeologically verified by ancient NHM altar inscriptions in Yemen). The daughters of Ishmael mourn exceedingly before turning eastward."
      },
      {
        siteId: "bountiful-arabia",
        name: "6. Bountiful: Building the Ocean-Going Ship",
        coords: [17.0300, 54.4300],
        zoom: 10,
        scripture: "1 Nephi 17:5-18; 1 Nephi 18:1-4",
        narrative: "Arriving at the verdant Arabian coast filled with fruit and wild honey, Nephi is commanded by the Lord: 'Thou shalt construct a ship, after the manner which I shall show thee.' Directed by divine revelation, Nephi builds the vessel that carries them to the Promised Land."
      }
    ]
  },
  {
    id: "tour-messianic-prophecy",
    title: "Messianic Typology: All Things Testify of Christ",
    subtitle: "Sacred Altars, Covenants & Types Pointing to the Coming Redeemer",
    hebrew: "נְבוּאוֹת הַמָּשִׁיחַ: כָּל הַדְּבָרִים מְעִידִים עַל הַמָּשִׁיחַ",
    stopsCount: 6,
    description: "Journey across the holy geography of the Old Testament to discover how every covenant altar, high priest, sacrifice, and prophetic vision testified of Jesus Christ, the promised Messiah and Redeemer of the world.",
    stops: [
      {
        siteId: "mount-moriah",
        name: "1. Mount Moriah: Abraham & Isaac (Similitude of the Father & Son)",
        coords: [31.7780, 35.2354],
        zoom: 13,
        scripture: "Genesis 22:1-14; Jacob 4:5; John 3:16",
        narrative: "Abraham offering his beloved son Isaac was an explicit similitude of Heavenly Father offering His Only Begotten Son. Upon this very ridge, God provided the Lamb for sacrifice, declaring: 'In the mount of the Lord it shall be seen.'"
      },
      {
        siteId: "mount-sinai",
        name: "2. Mount Sinai: The Tabernacle & The Mercy Seat",
        coords: [28.5394, 33.9753],
        zoom: 10,
        scripture: "Exodus 25:17-22; Leviticus 16; Hebrews 9:11-14",
        narrative: "The Tabernacle stood as an architectural prophecy of Christ. The blood of the unblemished sacrificial lamb sprinkled upon the Mercy Seat (Kapporet) prefigured the infinite Atonement and propitiation wrought by Jesus Christ."
      },
      {
        siteId: "kadesh-barnea",
        name: "3. Kadesh-barnea: The Brazen Serpent Lifted Up",
        coords: [30.6450, 34.4250],
        zoom: 10,
        scripture: "Numbers 21:8-9; John 3:14-15; Alma 33:19-22",
        narrative: "When fiery serpents bit the camp, Moses fashioned a serpent of brass and raised it on a pole. Even as all who looked lived, so all who look upon Christ with faith may have everlasting life."
      },
      {
        siteId: "bethlehem",
        name: "4. Bethlehem: Out of Thee Shall He Come Forth",
        coords: [31.7054, 35.2024],
        zoom: 12,
        scripture: "Micah 5:2; Ruth 4:14; Matthew 2:1-6",
        narrative: "The prophet Micah foretold: 'But thou, Bethlehem Ephratah... out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting.' Here Boaz acted as the kinsman-redeemer (Go'el), typifying Christ."
      },
      {
        siteId: "mount-carmel",
        name: "5. Mount Carmel: Elijah & The Restoration of Priesthood",
        coords: [32.7380, 35.0340],
        zoom: 11,
        scripture: "1 Kings 18:36-39; Malachi 4:5-6; D&C 110:13-16",
        narrative: "Elijah defended the true worship of Jehovah over Baal, calling down heavenly fire upon the altar. Malachi prophesied Elijah's return before the great and dreadful day of the Lord to seal families to Christ."
      },
      {
        siteId: "jerusalem",
        name: "6. Jerusalem: The Suffering Servant & The King of Zion",
        coords: [31.7767, 35.2345],
        zoom: 13,
        scripture: "Isaiah 53:3-5; Zechariah 9:9; Psalm 22",
        narrative: "Isaiah foretold the Messiah as the Suffering Servant: 'He was wounded for our transgressions, he was bruised for our iniquities... and with his stripes we are healed.' Zechariah prophesied the King coming lowly, riding upon an ass into Jerusalem."
      }
    ]
  },
  {
    id: "tour-ancient-life",
    title: "Life in Ancient Israel: Homes, Agriculture & Sacred Feasts",
    subtitle: "Understanding Daily Existence, Work & Faith in the Biblical World",
    hebrew: "חַיֵּי הַיּוֹם־יוֹם בְּאֶרֶץ יִשְׂרָאֵל הַמִּקְרָאִית",
    stopsCount: 5,
    description: "Step into the sandals of an ancient Israelite. Experience the four-room stone home, grain grinding, the olive harvest, city gate justice, and the grand pilgrimage feasts to Jerusalem.",
    stops: [
      {
        siteId: "hebron",
        name: "1. The Hill Country: Terraces, Vineyards & Olive Groves",
        coords: [31.5247, 35.1107],
        zoom: 11,
        scripture: "Deuteronomy 8:7-8; Isaiah 5:1-2",
        narrative: "Families carved stone terraces into limestone hills to cultivate the 'Seven Species'—wheat, barley, vines, figs, pomegranates, olives, and date honey. Olive oil fueled household clay lamps and sanctified temple priests."
      },
      {
        siteId: "shechem",
        name: "2. The Four-Room House & Domestic Hearth",
        coords: [32.2133, 35.2817],
        zoom: 12,
        scripture: "Proverbs 24:3-4; Joshua 24:15",
        narrative: "Archaeological excavations reveal the classic Israelite four-room house: a central courtyard for cooking in the clay tabun oven, side rooms for livestock and storage jars, and flat roofs for sleeping beneath cool desert breezes."
      },
      {
        siteId: "dan",
        name: "3. The City Gate: Elders, Commerce & Justice",
        coords: [33.2486, 35.6522],
        zoom: 12,
        scripture: "Ruth 4:1-2; Proverbs 31:23; Amos 5:15",
        narrative: "The multi-chambered city gate was the heart of civic life. Here city elders sat on stone benches, legal disputes were adjudicated, contracts were witnessed, and merchants weighed silver shekels in balances."
      },
      {
        siteId: "megiddo",
        name: "4. The Water Systems: Surviving Ancient Sieges",
        coords: [32.5856, 35.1847],
        zoom: 12,
        scripture: "2 Chronicles 32:3-4; 2 Kings 20:20",
        narrative: "Water was survival. Ancient engineers dug immense vertical shafts and tunnels through bedrock (like Megiddo, Hazor, and Hezekiah's Tunnel in Jerusalem) to reach subterranean springs secretly during warfare."
      },
      {
        siteId: "jerusalem",
        name: "5. The Pilgrimage Feasts: Gathering to Mount Zion",
        coords: [31.7767, 35.2345],
        zoom: 13,
        scripture: "Exodus 23:14-17; Psalm 122:1-4",
        narrative: "Three times a year—for Passover (Pesach), Weeks (Shavuot), and Tabernacles (Sukkot)—families from Dan to Beersheba traveled along the ridge routes singing Songs of Ascents to celebrate the goodness of God at the Temple."
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.TOURS_DATA = TOURS_DATA;
}
