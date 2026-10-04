/**
 * OLD TESTAMENT GEOGRAPHY - CURATED GUIDED SCRIPTURE TOURS
 * Interactive step-by-step cartographic journeys with camera focus,
 * scripture narratives, and doctrinal insights.
 * Spans Patriarchs, Exodus, Judges, Kings, Prophets & Covenant Journeys.
 */

const TOURS_DATA = [
  {
    id: "tour-abraham",
    title: "Abraham's Journey of Covenant Faith",
    subtitle: "From Ur of the Chaldees to Mount Moriah (~2000 BC)",
    hebrew: "מַסַּע הָאֱמוּנָה שֶׁל אַבְרָהָם אָבִינוּ",
    category: "patriarchs",
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
    id: "tour-isaac",
    title: "Isaac: Child of the Promise & Well-Digger of Peace",
    subtitle: "From Mount Moriah to the Waters of Rehoboth (~1900 BC)",
    hebrew: "יִצְחָק: בֶּן הַהַבְטָחָה וּבְאֵרוֹת הַשָּׁלוֹם",
    category: "patriarchs",
    stopsCount: 6,
    description: "Trace the serene, faithful life of the miraculous son of Abraham and Sarah: his submission upon Mount Moriah, praying in the Negev at eventide when Rebekah arrives, and digging wells of peace in Gerar.",
    stops: [
      {
        siteId: "beersheba",
        name: "1. Beersheba: The Home of Covenant Laughter",
        coords: [31.2456, 34.7978],
        zoom: 11,
        scripture: "Genesis 21:1-14",
        narrative: "Born in the old age of Abraham and Sarah according to the promise of Jehovah, Isaac is named Yitzchak ('He Laughs') in sacred joy, growing up beneath the tamarisk trees of Beersheba."
      },
      {
        siteId: "mount-moriah",
        name: "2. Mount Moriah: The Willing Sacrifice (Akedah)",
        coords: [31.7780, 35.2354],
        zoom: 13,
        scripture: "Genesis 22:1-19; Hebrews 11:17-19",
        narrative: "Bearing the firewood upon his shoulders, Isaac asks: 'Where is the lamb for a burnt offering?' With meek submission, he yields his life upon the altar in profound similitude of Jesus Christ."
      },
      {
        siteId: "beersheba",
        name: "3. Beer-lahai-roi: Evening Prayer & Rebekah's Arrival",
        coords: [30.9000, 34.6000],
        zoom: 10,
        scripture: "Genesis 24:62-67",
        narrative: "Coming from the way of the well Beer-lahai-roi, Isaac walks out into the Negev to meditate at eventide. He lifts his eyes and sees the camel caravan bringing Rebekah from Haran; he loves her and is comforted after his mother's death."
      },
      {
        siteId: "gerar",
        name: "4. Gerar: Sowing in Famine with a Hundredfold Blessing",
        coords: [31.3800, 34.6000],
        zoom: 11,
        scripture: "Genesis 26:1-14",
        narrative: "During severe famine, the Lord appears to Isaac: 'Go not down into Egypt; dwell in the land which I shall tell thee of... for unto thee and thy seed I will give all these countries.' Isaac sows in Gerar and reaps a hundredfold in the same year."
      },
      {
        siteId: null,
        name: "5. Valley of Gerar: Rehoboth ('Room for Us')",
        coords: [31.1000, 34.6000],
        zoom: 11,
        scripture: "Genesis 26:17-22",
        narrative: "When Philistines quarrel over the wells Esek ('Contention') and Sitnah ('Hostility'), Isaac refuses retaliation and digs another well. For this one they strive not, naming it Rehoboth: 'For now the Lord hath made room for us, and we shall be fruitful in the land.'"
      },
      {
        siteId: "hebron",
        name: "6. Hebron: Restoring the Altar & Resting in Machpelah",
        coords: [31.5247, 35.1107],
        zoom: 11,
        scripture: "Genesis 26:23-25; 35:27-29",
        narrative: "At Beersheba Jehovah renews the covenant: 'Fear not, for I am with thee.' Isaac builds an altar and pitches his tent. Living 180 years, he passes peacefully and is buried by his sons Jacob and Esau in the Cave of Machpelah."
      }
    ]
  },
  {
    id: "tour-jacob",
    title: "Jacob: The Ladder of Heaven & Wrestler with God",
    subtitle: "From Bethel to Haran and the Waters of the Jabbok (~1750 BC)",
    hebrew: "יַעֲקֹב: סֻלָּם מֻצָּב אַרְצָה וּמַאֲבָק בִּפְנִיאֵל",
    category: "patriarchs",
    stopsCount: 7,
    description: "Follow the epic transformation of Jacob: fleeing Esau, beholding the heavenly ladder at Bethel, laboring twenty years in Haran, wrestling through the night at Peniel, and becoming Israel—a Prince with God.",
    stops: [
      {
        siteId: "beersheba",
        name: "1. Beersheba: The Flight from Esau",
        coords: [31.2456, 34.7978],
        zoom: 11,
        scripture: "Genesis 28:1-10",
        narrative: "Charged by Isaac with the blessing of Abraham, Jacob departs his home in Beersheba to seek a covenant wife among his mother's kin in Paddan-aram, carrying only his staff."
      },
      {
        siteId: "bethel",
        name: "2. Bethel (Luz): The Ladder Reaching to Heaven",
        coords: [31.9314, 35.2217],
        zoom: 12,
        scripture: "Genesis 28:11-22",
        narrative: "Sleeping with a stone for his pillow, Jacob dreams of a ladder set upon the earth whose top reached to heaven, with the angels of God ascending and descending. Jehovah stands above it, promising: 'I will not leave thee.' Jacob anoints the stone pillar, naming the place Beth-El ('House of God')."
      },
      {
        siteId: "haran",
        name: "3. Haran: The Well of Rachel & Twenty Years of Labor",
        coords: [36.8667, 39.0333],
        zoom: 8,
        scripture: "Genesis 29:1-30; 30:22-43",
        narrative: "Jacob rolls the great stone from the well mouth to water Rachel's flock. Serving Laban twenty years in heat and frost, he marries Leah and Rachel, and eleven sons are born unto him along with great wealth in speckled flocks."
      },
      {
        siteId: null,
        name: "4. Mount Gilead: The Covenant Heap of Galeed",
        coords: [32.3000, 35.8000],
        zoom: 10,
        scripture: "Genesis 31:21-55",
        narrative: "Pursued by Laban across the Euphrates, they meet in the hill country of Gilead. God warns Laban in a dream, and they erect a pillar and heap of witness stones (Mizpah): 'The Lord watch between me and thee, when we are absent one from another.'"
      },
      {
        siteId: null,
        name: "5. Peniel (River Jabbok): Wrestling until the Dawn",
        coords: [32.2300, 35.7500],
        zoom: 11,
        scripture: "Genesis 32:24-32; Genesis 33:1-11",
        narrative: "Left alone at the ford of Jabbok on the eve of meeting Esau, Jacob wrestles with a divine messenger until daybreak: 'I will not let thee go, except thou bless me.' His name is changed to Israel ('One who prevails with God'). He crosses the river and reconciles tearfully with Esau."
      },
      {
        siteId: "shechem",
        name: "6. Shechem: Purging the Strange Gods",
        coords: [32.2133, 35.2817],
        zoom: 11,
        scripture: "Genesis 33:18-20; 35:1-7",
        narrative: "Jacob buys a parcel of field from Hamor, building the altar El-Elohe-Israel. Commanded to return to Bethel, he instructs his household to put away foreign idols and bury them beneath the oak tree of Shechem."
      },
      {
        siteId: "hebron",
        name: "7. Hebron: Reunited with Isaac & Preserved in Joseph",
        coords: [31.5247, 35.1107],
        zoom: 11,
        scripture: "Genesis 35:27-29; 46:1-7",
        narrative: "Jacob arrives home to Isaac at Mamre. Decades later, mourning his lost son Joseph, Jacob hears that Joseph lives as ruler in Egypt. At Beersheba God reassures him: 'Fear not to go down into Egypt... I will surely bring thee up again.'"
      }
    ]
  },
  {
    id: "tour-noah",
    title: "Noah: Faith, The Ark & The Covenant of the Bow",
    subtitle: "From the Pre-Flood World to the Heights of Ararat",
    hebrew: "נֹחַ: הַתֵּבָה, הַמַּבּוּל וּבְרִית הַקֶּשֶׁת",
    category: "patriarchs",
    stopsCount: 5,
    description: "Witness the monumental faith of Noah, a preacher of righteousness who walked with God: the divine pattern for the Ark of Gopher wood, the catastrophic Deluge, the resting atop Mount Ararat, and the eternal rainbow covenant.",
    stops: [
      {
        siteId: null,
        name: "1. Plains of Shinar: Building the Ark in Faith",
        coords: [32.0000, 44.5000],
        zoom: 7,
        scripture: "Genesis 6:8-22; Moses 8:19-30; Hebrews 11:7",
        narrative: "Amid universal corruption, Noah finds grace in the eyes of the Lord. Commanded to construct an immense three-tiered vessel of gopher wood pitched within and without, Noah obeys every word, moved with fear to the saving of his house."
      },
      {
        siteId: null,
        name: "2. The Fountains of the Deep Broken Up",
        coords: [34.0000, 42.0000],
        zoom: 7,
        scripture: "Genesis 7:11-24",
        narrative: "All the fountains of the great subterranean deep break up, and the windows of heaven are opened. Torrential rains pour for forty days, submerging every high hill under the heavens by fifteen cubits while the Ark rides upon the waves."
      },
      {
        siteId: null,
        name: "3. Mount Ararat: The Ark Rests on the Peaks",
        coords: [39.7025, 44.2992],
        zoom: 9,
        scripture: "Genesis 8:1-14",
        narrative: "God remembers Noah. The waters abate before a divine wind, and the Ark rests on the seventeenth day of the seventh month upon the mountains of Ararat. Noah sends forth a raven and a dove, which returns bearing a fresh olive leaf."
      },
      {
        siteId: null,
        name: "4. The Altar of Thanksgiving",
        coords: [39.6500, 44.2500],
        zoom: 10,
        scripture: "Genesis 8:20-22",
        narrative: "Stepping onto the cleansed earth, Noah builds an altar unto Jehovah and offers burnt offerings of every clean beast and fowl. The Lord smells a sweet savour and promises never again to curse the ground for man's sake."
      },
      {
        siteId: null,
        name: "5. The Everlasting Covenant of the Rainbow",
        coords: [39.7500, 44.3500],
        zoom: 9,
        scripture: "Genesis 9:8-17; JST Genesis 9:21-25",
        narrative: "God establishes His covenant with Noah and all living creatures: 'I do set my bow in the cloud, and it shall be for a token of a covenant between me and the earth.' Whenever the rainbow appears, God remembers the everlasting covenant."
      }
    ]
  },
  {
    id: "tour-exodus",
    title: "The Exodus: From Bondage to Mount Sinai",
    subtitle: "Deliverance of Israel under Moses (~1446 BC)",
    hebrew: "יְצִיאַת מִצְרַיִם: מֵעַבְדוּת לְהַר סִינַי",
    category: "exodus",
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
    id: "tour-wilderness-40-years",
    title: "Moses & The Children of Israel: 40 Years in the Wilderness",
    subtitle: "From Mount Sinai to Mount Nebo (~1446 – 1406 BC)",
    hebrew: "אַרְבָּעִים שְׁנוֹת נְדוּדִים בַּמִּדְבָּר",
    category: "exodus",
    stopsCount: 8,
    description: "Follow the 40-year testing of Israel: the cloud and fire, the graves of lust, the crisis of faith at Kadesh-barnea, water from the rock of Meribah, the Brazen Serpent in the Arabah, and Moses beholding Canaan from Mount Nebo.",
    stops: [
      {
        siteId: "mount-sinai",
        name: "1. Mount Sinai: Departs in Holy Order",
        coords: [28.5394, 33.9753],
        zoom: 10,
        scripture: "Numbers 10:11-36",
        narrative: "On the twentieth day of the second month, the cloud lifts from off the Tabernacle. Silver trumpets sound, and the camp of Israel marches forth through the great and terrible wilderness."
      },
      {
        siteId: null,
        name: "2. Taberah & Kibroth-hattaavah: The Graves of Lust",
        coords: [28.8500, 34.2000],
        zoom: 9,
        scripture: "Numbers 11:1-34",
        narrative: "The mixed multitude lusts for the meats, leeks, and onions of Egypt. In response, a wind from Jehovah brings quail from the sea three feet deep upon the camp, but a severe plague strikes those who lusted."
      },
      {
        siteId: "kadesh-barnea",
        name: "3. Kadesh-barnea: The Twelve Spies & Forty Years Decreed",
        coords: [30.6450, 34.4250],
        zoom: 10,
        scripture: "Numbers 13:1-33; Numbers 14:1-35",
        narrative: "Moses sends twelve leaders to scout Canaan. Ten return weeping of giants (Anakim) and walled fortresses, inciting rebellion. Only Joshua and Caleb urge faith: 'The Lord is with us: fear them not.' Israel is decreed to wander forty years."
      },
      {
        siteId: "kadesh-barnea",
        name: "4. Waters of Meribah: Moses Strikes the Rock",
        coords: [30.6400, 34.4200],
        zoom: 11,
        scripture: "Numbers 20:1-13",
        narrative: "In the desert of Zin, Miriam dies. Israel contends with Moses for lack of water. Commanded to speak unto the rock, Moses strikes it twice: 'Hear now, ye rebels; must we fetch you water?' Water flows abundantly, but Moses is barred from entering Canaan."
      },
      {
        siteId: null,
        name: "5. Mount Hor: The Passing of Aaron the High Priest",
        coords: [30.3167, 35.4000],
        zoom: 10,
        scripture: "Numbers 20:22-29",
        narrative: "Moses, Aaron, and Eleazar ascend Mount Hor in the sight of all the congregation. Moses strips Aaron of the sacred garments and places them upon Eleazar. Aaron dies upon the mount, and Israel mourns thirty days."
      },
      {
        siteId: null,
        name: "6. The Arabah: The Brazen Serpent on the Pole",
        coords: [30.0000, 35.1500],
        zoom: 9,
        scripture: "Numbers 21:4-9; John 3:14-15; Alma 33:19-22",
        narrative: "Discouraged along the road around Edom, the people speak against God. Fiery serpents bite them, and many die. Moses fashions a serpent of brass and raises it upon a pole: all who look upon it live, typifying faith in Jesus Christ."
      },
      {
        siteId: null,
        name: "7. Plains of Moab (Shittim): Balaam's Oracle of the Star",
        coords: [31.8200, 35.6000],
        zoom: 10,
        scripture: "Numbers 22-24; Numbers 24:17",
        narrative: "Balak king of Moab hires Balaam to curse Israel, but Jehovah commands him only to bless: 'How goodly are thy tents, O Jacob, and thy tabernacles, O Israel!... There shall come a Star out of Jacob, and a Sceptre shall rise out of Israel.'"
      },
      {
        siteId: "mount-nebo",
        name: "8. Mount Nebo: Moses Views the Promised Land",
        coords: [31.7675, 35.7258],
        zoom: 11,
        scripture: "Deuteronomy 34:1-12; Alma 45:19",
        narrative: "Moses climbs to the top of Pisgah. The Lord shows him all the land of Gilead unto Dan, Judah unto the western sea, and the valley of Jericho. Moses dies according to the word of the Lord, translated into the heavenly realms."
      }
    ]
  },
  {
    id: "tour-samson",
    title: "Samson: Nazirite Strength & Final Triumph",
    subtitle: "The Judge of Dan and the Wars with the Philistines (~1100 BC)",
    hebrew: "שִׁמְשׁוֹן: גְּבוּרַת נְזִיר אֱלֹהִים וְנִצָּחוֹן אַחֲרוֹן",
    category: "judges",
    stopsCount: 6,
    description: "Follow the legendary Judge of Israel from his miraculous birth in Zorah, through daring exploits in the Philistine plains, to his heartbreaking betrayal in Sorek and supreme sacrifice in the temple of Dagon at Gaza.",
    stops: [
      {
        siteId: null,
        name: "1. Zorah: The Angelic Promise to Manoah's Wife",
        coords: [31.7770, 34.9850],
        zoom: 12,
        scripture: "Judges 13:1-25",
        narrative: "The Angel of Jehovah appears to Manoah's barren wife, promising a son consecrated as a Nazirite from the womb: no razor shall touch his head, and he shall begin to deliver Israel from Philistine oppression."
      },
      {
        siteId: null,
        name: "2. Timnah: Tearing the Lion & The Riddle",
        coords: [31.7820, 34.9350],
        zoom: 12,
        scripture: "Judges 14:1-20",
        narrative: "Walking through the vineyards of Timnah, a young lion roars against Samson. The Spirit of the Lord comes mightily upon him, and he tears the beast as one would tear a kid. Later he poses his famous riddle: 'Out of the eater came forth meat, and out of the strong came forth sweetness.'"
      },
      {
        siteId: null,
        name: "3. Rock of Etam & Lehi: The Jawbone of a Donkey",
        coords: [31.7200, 34.9900],
        zoom: 12,
        scripture: "Judges 15:9-20",
        narrative: "Bound with new ropes by men of Judah, Samson snaps his bonds like burnt flax. Finding a fresh jawbone of a donkey, he strikes down a thousand Philistine warriors. In thirst, God cleaves a hollow in the ground, and the spring En-hakkore gushes forth."
      },
      {
        siteId: "gaza",
        name: "4. Gaza: Carrying the City Gates to Hebron",
        coords: [31.5000, 34.4667],
        zoom: 11,
        scripture: "Judges 16:1-3",
        narrative: "Lying in wait all night at Gaza's fortified gates to slay him at dawn, the Philistines are astonished when Samson arises at midnight, pulls up both gateposts with bar and all, and carries them upon his shoulders forty miles up the steep hill before Hebron."
      },
      {
        siteId: null,
        name: "5. Valley of Sorek: Delilah & The Lost Covenant",
        coords: [31.7700, 34.9200],
        zoom: 12,
        scripture: "Judges 16:4-21",
        narrative: "In the blooming valley of Sorek, Delilah entices Samson daily for Philistine silver. At last he discloses his whole heart: 'If I be shaven, then my strength will go from me.' Shorn of his seven locks while sleeping on her knees, his strength departs as the Lord leaves him."
      },
      {
        siteId: "gaza",
        name: "6. Temple of Dagon (Gaza): The Final Cry of Faith",
        coords: [31.5050, 34.4600],
        zoom: 13,
        scripture: "Judges 16:22-31",
        narrative: "Blinded and grinding corn in the Gaza prison, Samson is brought before 3,000 mocking Philistines. Placing his hands upon the two central pillars, he prays: 'O Lord God, remember me, I pray thee, and strengthen me... only this once.' He bows with all his might, crashing the temple down in righteous victory."
      }
    ]
  },
  {
    id: "tour-ruth-naomi",
    title: "Ruth & Naomi: Covenant Loyalty (Hesed) & The Redeemer",
    subtitle: "From the Fields of Moab to the Threshing Floor of Bethlehem (~1150 BC)",
    hebrew: "רוּת וְנָעֳמִי: חֶסֶד וּגְאוּלָה בְּבֵית לֶחֶם",
    category: "judges",
    stopsCount: 6,
    description: "Experience the immortal love story of covenant faithfulness: Naomi's grief, Ruth's steadfast devotion, gleaning barley in the fields of Boaz, and the kinsman-redeemer who gave rise to King David and Jesus Christ.",
    stops: [
      {
        siteId: "bethlehem",
        name: "1. Bethlehem: Departure during the Great Famine",
        coords: [31.7054, 35.2024],
        zoom: 12,
        scripture: "Ruth 1:1-5",
        narrative: "In the days when the judges ruled, famine grips the highlands of Judah. Elimelech, his wife Naomi, and their sons Mahlon and Chilion leave the 'House of Bread' (Bethlehem) to sojourn across the Dead Sea in the fertile plateau of Moab."
      },
      {
        siteId: null,
        name: "2. Plains of Moab: Ruth's Immortal Covenant Vow",
        coords: [31.5000, 35.7500],
        zoom: 10,
        scripture: "Ruth 1:6-18",
        narrative: "Bereaved of husband and both sons, Naomi bids her daughters-in-law return to their mothers. While Orpah kisses her, Ruth clings fast with the golden vow: 'Intreat me not to leave thee... for whither thou goest, I will go; and where thou lodgest, I will lodge: thy people shall be my people, and thy God my God.'"
      },
      {
        siteId: null,
        name: "3. The Road of Return: Naomi & Ruth Arrive in Judah",
        coords: [31.6500, 35.4000],
        zoom: 11,
        scripture: "Ruth 1:19-22",
        narrative: "All the city is moved about them, saying: 'Is this Naomi?' But she answers: 'Call me not Naomi [Pleasant], call me Mara [Bitter]: for the Almighty hath dealt very bitterly with me.' They arrive in Bethlehem at the beginning of the barley harvest."
      },
      {
        siteId: "bethlehem",
        name: "4. The Barley Fields of Boaz: Protected by the Wing",
        coords: [31.7080, 35.2150],
        zoom: 13,
        scripture: "Ruth 2:1-23",
        narrative: "Ruth happens upon the field of Boaz, a wealthy relative of Elimelech. Boaz commands his reapers to drop handfuls on purpose for her, praying: 'The Lord recompense thy work, and a full reward be given thee of the Lord God of Israel, under whose wings thou art come to trust.'"
      },
      {
        siteId: "bethlehem",
        name: "5. Threshing Floor of Bethlehem: The Mantle of the Redeemer",
        coords: [31.7040, 35.2060],
        zoom: 13,
        scripture: "Ruth 3:1-18",
        narrative: "Instructed by Naomi, Ruth approaches the threshing floor at midnight after the winnowing of barley, uncovering Boaz's feet. When he awakes, she asks him to spread his skirt over his handmaid, for he is a near kinsman-redeemer (Go'el)."
      },
      {
        siteId: "bethlehem",
        name: "6. City Gate of Bethlehem: The Covenant Lineage of David & Christ",
        coords: [31.7054, 35.2024],
        zoom: 13,
        scripture: "Ruth 4:1-22; Matthew 1:5-16",
        narrative: "Before ten city elders in the gate, Boaz buys back the land of Elimelech and takes Ruth as his wife. She bears Obed, who fathers Jesse, the father of King David—securing the genealogical line of Jesus Christ, the ultimate Redeemer."
      }
    ]
  },
  {
    id: "tour-samuel",
    title: "Samuel: Dedicated from the Womb & Prophet of Israel",
    subtitle: "From Hannah's Prayer at Shiloh to the Anointing of David (~1100 – 1010 BC)",
    hebrew: "שְׁמוּאֵל הַנָּבִיא: מִשִּׁילֹה וְעַד מְשִׁיחַת דָּוִד",
    category: "judges",
    stopsCount: 6,
    description: "Follow the beloved prophet-judge of Israel: Hannah's desperate prayer at the Tabernacle doorpost, the voice of Jehovah in the dark, the victory at Ebenezer, and the anointing of King David in Bethlehem.",
    stops: [
      {
        siteId: null,
        name: "1. Ramah: Hannah's Vow & Dedication",
        coords: [31.8900, 35.2100],
        zoom: 12,
        scripture: "1 Samuel 1:1-20",
        narrative: "In the hill country of Ephraim, Hannah suffers bitter grief over childlessness. Her soul pours out silent tears before the Lord, vowing that if God gives her a man child, she will give him unto Jehovah all the days of his life."
      },
      {
        siteId: "shiloh",
        name: "2. Shiloh: 'For This Child I Prayed'",
        coords: [32.0556, 35.2894],
        zoom: 12,
        scripture: "1 Samuel 1:24-28; 2:1-10",
        narrative: "When the child is weaned, Hannah brings Samuel to Eli the high priest at the Shiloh Tabernacle with a sacrifice and her immortal psalm of praise: 'The Lord killeth, and maketh alive: he bringeth down to the grave, and bringeth up.'"
      },
      {
        siteId: "shiloh",
        name: "3. Shiloh Sanctuary: 'Speak, Lord; For Thy Servant Heareth'",
        coords: [32.0560, 35.2890],
        zoom: 13,
        scripture: "1 Samuel 3:1-21",
        narrative: "Before the lamp of God goes out in the temple of the Lord where the Ark is, the Lord calls Samuel three times. Eli discerns it is Jehovah. The boy responds: 'Speak; for thy servant heareth.' All Israel from Dan to Beersheba knows Samuel is established as a prophet."
      },
      {
        siteId: null,
        name: "4. Mizpah & Ebenezer: 'Hitherto Hath the Lord Helped Us'",
        coords: [31.8350, 35.1850],
        zoom: 12,
        scripture: "1 Samuel 7:3-12",
        narrative: "Samuel gathers all Israel to Mizpah to put away foreign gods. As Philistine armies advance, Samuel offers a suckling lamb; Jehovah thunders with great confusion upon the enemy. Samuel erects a monument stone, naming it Ebenezer: 'Hitherto hath the Lord helped us.'"
      },
      {
        siteId: "bethlehem",
        name: "5. Bethlehem: Anointing David the Shepherd",
        coords: [31.7054, 35.2024],
        zoom: 12,
        scripture: "1 Samuel 16:1-13",
        narrative: "Grieving for Saul, Samuel is sent with a horn of oil to the house of Jesse. Passing by the seven tall elder brothers, Jehovah reveals: 'The Lord seeth not as man seeth; for man looketh on the outward appearance, but the Lord looketh on the heart.' Samuel anoints the youngest shepherd, David."
      },
      {
        siteId: null,
        name: "6. Ramah: The School of the Prophets & Samuel's Rest",
        coords: [31.8900, 35.2100],
        zoom: 12,
        scripture: "1 Samuel 19:18-24; 25:1",
        narrative: "At Naioth in Ramah, Samuel presides over a holy school of the prophets where the Spirit falls even on Saul's messengers. When Samuel dies, all Israel gathers to lament him, burying him in his house at Ramah."
      }
    ]
  },
  {
    id: "tour-saul",
    title: "King Saul: Rise, Tragic Fall & Battle on Mount Gilboa",
    subtitle: "The First King of Israel (~1050 – 1010 BC)",
    hebrew: "שָׁאוּל הַמֶּלֶךְ: מֵעֲלִיָּה לִנְפִילָה בְּהַר הַגִּלְבֹּעַ",
    category: "monarchy",
    stopsCount: 7,
    description: "Follow the dramatic rise and tragic descent of Israel's first anointed king: chosen while seeking lost donkeys, courageous at Jabesh-gilead, self-willed at Gilgal, troubled by an evil spirit, and falling on Mount Gilboa.",
    stops: [
      {
        siteId: "gibeah",
        name: "1. Gibeah of Benjamin: The Choice Young Man",
        coords: [31.8236, 35.2319],
        zoom: 12,
        scripture: "1 Samuel 9:1-5",
        narrative: "Saul son of Kish stands head and shoulders taller than any in Israel. Sent to search for his father's stray donkeys through Mount Ephraim, his search leads him to the seer Samuel."
      },
      {
        siteId: null,
        name: "2. Ramah: The Secret Anointing upon the Housetop",
        coords: [31.8900, 35.2100],
        zoom: 12,
        scripture: "1 Samuel 9:22-27; 10:1",
        narrative: "Samuel honors Saul with the shoulder of the sacrifice, communes with him on the flat roof of his house, and at morning pours a vial of olive oil upon his head: 'Is it not because the Lord hath anointed thee to be captain over his inheritance?'"
      },
      {
        siteId: null,
        name: "3. Mizpah: Chosen by Lot among the Tribes",
        coords: [31.8350, 35.1850],
        zoom: 12,
        scripture: "1 Samuel 10:17-27",
        narrative: "The sacred lot falls upon the tribe of Benjamin and the family of Matri. Saul is found hiding humbly among the baggage. When brought forth, all the people shout: 'God save the king!'"
      },
      {
        siteId: null,
        name: "4. Jabesh-gilead: Righteous Anger & Deliverance",
        coords: [32.3800, 35.6300],
        zoom: 10,
        scripture: "1 Samuel 11:1-15",
        narrative: "Nahash the Ammonite threatens to gouge out the right eye of every citizen of Jabesh. The Spirit of God comes upon Saul; he hews a yoke of oxen in pieces and sends them throughout Israel. 330,000 warriors rally, shattering Ammon at dawn."
      },
      {
        siteId: null,
        name: "5. Gilgal: Presumption, Disobedience & The Lost Kingdom",
        coords: [31.8700, 35.4900],
        zoom: 11,
        scripture: "1 Samuel 13:8-14; 15:1-23",
        narrative: "Fearing the Philistine multitude, Saul usurps the priestly office by offering burnt sacrifices without waiting for Samuel. Samuel declares: 'To obey is better than sacrifice... because thou hast rejected the word of the Lord, he hath also rejected thee from being king.'"
      },
      {
        siteId: null,
        name: "6. Endor: The Shadow of Despair on Eve of Battle",
        coords: [32.6170, 35.3830],
        zoom: 11,
        scripture: "1 Samuel 28:3-25",
        narrative: "Forsaken by Jehovah and receiving no answer by dreams, Urim, or prophets, Saul disguises himself at night to consult the medium at Endor. The spirit of Samuel proclaims: 'Tomorrow shalt thou and thy sons be with me: the Lord also shall deliver the host of Israel into the hand of the Philistines.'"
      },
      {
        siteId: null,
        name: "7. Mount Gilboa: The Tragic Fall of Israel's Anointed",
        coords: [32.5000, 35.4200],
        zoom: 11,
        scripture: "1 Samuel 31:1-13; 2 Samuel 1:17-27",
        narrative: "Philistine archers press heavily upon the slopes of Mount Gilboa. Jonathan and his brothers are slain. Badly wounded by arrows, Saul falls upon his own sword. The loyal men of Jabesh-gilead march all night through enemy lines to rescue his body for honorable burial."
      }
    ]
  },
  {
    id: "tour-david-goliath",
    title: "David and Goliath: Triumph of Faith in the Valley of Elah",
    subtitle: "A Shepherd Boy's Courage Against the Philistine Giant (~1020 BC)",
    hebrew: "דָּוִד וְגָלְיָת: נִצָּחוֹן שֶׁל אֱמוּנָה בְּעֵמֶק הָאֵלָה",
    category: "monarchy",
    stopsCount: 5,
    description: "Walk the historic ground of 1 Samuel 17: the rocky pastures of Bethlehem, the opposing hilltops of the Valley of Elah, the dry wadi where David chose five smooth stones, and the single-combat victory that inspired all Israel.",
    stops: [
      {
        siteId: "bethlehem",
        name: "1. Pastures of Bethlehem: Anointed Shepherd Boy",
        coords: [31.7054, 35.2024],
        zoom: 12,
        scripture: "1 Samuel 16:11-13; 17:12-20",
        narrative: "While keeping his father's sheep against lions and bears in Bethlehem, young David is called from the pastures and sent by Jesse with roasted grain, ten loaves, and ten cheeses to his brothers in the army."
      },
      {
        siteId: "valley-of-elah",
        name: "2. Valley of Elah (Socoh & Azekah): The Challenge",
        coords: [31.6850, 34.9890],
        zoom: 12,
        scripture: "1 Samuel 17:1-16",
        narrative: "The Philistines pitch camp between Socoh and Azekah, while Saul and the men of Israel encamp on the opposite hill. For forty days morning and evening, the nine-foot champion Goliath of Gath steps forward, defying the armies of the Living God."
      },
      {
        siteId: "valley-of-elah",
        name: "3. Brook of Elah (Wadi es-Sunt): Five Smooth Stones",
        coords: [31.6840, 34.9910],
        zoom: 14,
        scripture: "1 Samuel 17:38-40",
        narrative: "David declines King Saul's heavy bronze armor and helmet. Taking only his shepherd's staff in hand, he walks down to the dry streambed, selects five smooth limestone stones from the brook, and puts them into his shepherd's pouch."
      },
      {
        siteId: "valley-of-elah",
        name: "4. The Center of the Valley: The Battle Is the Lord's",
        coords: [31.6860, 34.9870],
        zoom: 13,
        scripture: "1 Samuel 17:41-51",
        narrative: "Goliath disdains the youth, cursing him by his gods. David proclaims: 'Thou comest to me with a sword, and with a spear, and with a shield: but I come to thee in the name of the Lord of hosts... and all this assembly shall know that the Lord saveth not with sword and spear: for the battle is the Lord's!' David runs toward the giant, slings a stone into his forehead, and fells Goliath."
      },
      {
        siteId: "gath",
        name: "5. Way of Shaaraim to Gath & Ekron: The Great Rout",
        coords: [31.6980, 34.8480],
        zoom: 11,
        scripture: "1 Samuel 17:52-54",
        narrative: "Seeing their champion dead, the Philistines flee in panic. The men of Israel and Judah arise with a mighty shout, pursuing them down the Valley of Elah past Shaaraim all the way to Gath and the fortified gates of Ekron."
      }
    ]
  },
  {
    id: "tour-david-jonathan",
    title: "David & Jonathan: The Covenant of Unfailing Friendship",
    subtitle: "Love Stronger Than Death in the Mountains of Judea (~1015 BC)",
    hebrew: "דָּוִד וִיהוֹנָתָן: בְּרִית אַהֲבַת אֱמֶת",
    category: "monarchy",
    stopsCount: 5,
    description: "Follow the sacred covenant between the crown prince Jonathan and the shepherd-king David: the royal robe gift at Gibeah, the secret arrow code at the Stone Ezel, encouragement in the desert wilderness, and David's tender mercy to Mephibosheth.",
    stops: [
      {
        siteId: "gibeah",
        name: "1. Gibeah of Saul: Souls Knit in Holy Covenant",
        coords: [31.8236, 35.2319],
        zoom: 12,
        scripture: "1 Samuel 18:1-4",
        narrative: "After the defeat of Goliath, the soul of Jonathan is knit with the soul of David, and Jonathan loves him as his own soul. In royal covenant, Jonathan strips himself of his prince's robe, his armor, his sword, his bow, and his girdle, placing them upon David."
      },
      {
        siteId: "gibeah",
        name: "2. The Stone Ezel: The Three Arrows of Warning",
        coords: [31.8250, 35.2350],
        zoom: 13,
        scripture: "1 Samuel 20:18-42",
        narrative: "When King Saul seeks David's life, Jonathan risks his own safety, shooting three arrows into the field to signal danger to David hiding behind the Stone Ezel. They weep together, kissing and making peace: 'The Lord be between me and thee, and between my seed and thy seed forever.'"
      },
      {
        siteId: null,
        name: "3. Wilderness of Ziph (Wood of Horesh): Strengthening Hands in God",
        coords: [31.4900, 35.1500],
        zoom: 11,
        scripture: "1 Samuel 23:14-18",
        narrative: "While David is hunted like a partridge in the rocky desert caves of Ziph, Jonathan seeks him out in the dense thicket of Horesh, 'and strengthened his hand in God': 'Fear not: for the hand of Saul my father shall not find thee; and thou shalt be king over Israel, and I shall be next unto thee.'"
      },
      {
        siteId: null,
        name: "4. Mount Gilboa: The Lament of the Bow",
        coords: [32.5000, 35.4200],
        zoom: 11,
        scripture: "2 Samuel 1:17-27",
        narrative: "Upon hearing of Jonathan's heroic death in battle on Mount Gilboa, David tears his clothes and composes the immortal Song of the Bow: 'The beauty of Israel is slain upon thy high places... I am distressed for thee, my brother Jonathan: very pleasant hast thou been unto me: thy love to me was wonderful, passing the love of women.'"
      },
      {
        siteId: "jerusalem",
        name: "5. Jerusalem: Covenant Mercy to Mephibosheth",
        coords: [31.7767, 35.2345],
        zoom: 13,
        scripture: "2 Samuel 9:1-13",
        narrative: "Established as King in Jerusalem, David asks: 'Is there yet any that is left of the house of Saul, that I may shew him kindness for Jonathan's sake?' Finding Jonathan's crippled son Mephibosheth in Lo-debar, David restores all his ancestral lands and gives him an honored seat at the royal table continually."
      }
    ]
  },
  {
    id: "tour-elijah",
    title: "Elijah: Prophet of Fire & The Still Small Voice",
    subtitle: "Confronting Idolatry from Mount Carmel to Mount Horeb (~860 BC)",
    hebrew: "אֵלִיָּהוּ הַנָּבִיא: אֵשׁ מִשָּׁמַיִם וְקוֹל דְּמָמָה דַקָּה",
    category: "prophets",
    stopsCount: 7,
    description: "Travel with the fiery prophet Elijah: shutting up heaven from rain, ravens at the Brook Cherith, raising the widow's son at Zarephath, calling down fire atop Mount Carmel, the still small voice at Sinai, and ascending in a chariot of fire.",
    stops: [
      {
        siteId: null,
        name: "1. Tishbe of Gilead: Shutting Heaven from Rain",
        coords: [32.3500, 35.7000],
        zoom: 10,
        scripture: "1 Kings 17:1",
        narrative: "Elijah the Tishbite suddenly confronts King Ahab in Samaria: 'As the Lord God of Israel liveth, before whom I stand, there shall not be dew nor rain these years, but according to my word.'"
      },
      {
        siteId: null,
        name: "2. Brook Cherith: Bread and Flesh from Ravens",
        coords: [31.8500, 35.5000],
        zoom: 11,
        scripture: "1 Kings 17:2-7",
        narrative: "Jehovah commands Elijah to hide by the ravine of Cherith east of Jordan. Ravens bring him bread and meat morning and evening, and he drinks of the wadi until the brook dries up for lack of rain."
      },
      {
        siteId: null,
        name: "3. Zarephath: The Cruse of Oil & Raising the Widow's Son",
        coords: [33.4500, 35.2800],
        zoom: 11,
        scripture: "1 Kings 17:8-24",
        narrative: "In Gentile Phoenicia, a starving widow gathers two sticks to prepare a final morsel for herself and her son. Elijah promises: 'The barrel of meal shall not waste, neither shall the cruse of oil fail.' When the boy dies, Elijah stretches himself upon him three times, raising him back to life."
      },
      {
        siteId: "mount-carmel",
        name: "4. Mount Carmel: Fire from Heaven Consumes the Altar",
        coords: [32.7380, 35.0340],
        zoom: 12,
        scripture: "1 Kings 18:17-46",
        narrative: "Showdown on the heights: 450 prophets of Baal against one prophet of Jehovah. Elijah rebuilds the altar of the Lord with twelve stones, douses it three times with water, and prays. Fire from heaven consumes sacrifice, wood, stones, and dust. The people cry: 'The Lord, he is the God!' Heavy rain falls."
      },
      {
        siteId: "beersheba",
        name: "5. Wilderness of Beersheba: The Juniper Tree & Angelic Food",
        coords: [31.2000, 34.7500],
        zoom: 10,
        scripture: "1 Kings 19:1-8",
        narrative: "Threatened by Queen Jezebel, Elijah flees into the Negev, sitting down beneath a broom bush praying to die. An angel touches him twice: 'Arise and eat, because the journey is too great for thee.' Strengthened by a hearth cake and jar of water, he travels forty days to Horeb."
      },
      {
        siteId: "mount-sinai",
        name: "6. Mount Horeb (Sinai Cave): The Still Small Voice",
        coords: [28.5394, 33.9753],
        zoom: 11,
        scripture: "1 Kings 19:9-18",
        narrative: "Lodging in a cave, a mighty wind rends the mountain, an earthquake shakes the rock, and fire sweeps past—but the Lord is not in the wind, earthquake, or fire. Then comes a Still Small Voice (Qol d'mamah daqqah), sending him to anoint Elisha to carry on the work."
      },
      {
        siteId: "jericho",
        name: "7. River Jordan at Jericho: Chariot of Fire to Heaven",
        coords: [31.8500, 35.5300],
        zoom: 11,
        scripture: "2 Kings 2:1-14; Malachi 4:5-6",
        narrative: "Elijah strikes the Jordan waters with his mantle, dividing them so he and Elisha cross on dry ground. As they speak, a chariot of fire and horses of fire appear, parting them both, and Elijah ascends by a whirlwind into heaven. His mantle falls upon Elisha."
      }
    ]
  },
  {
    id: "tour-hosea-gomer",
    title: "Hosea & Gomer: Redeeming Love & The Covenant of Mercy",
    subtitle: "A Prophet's Heartbreaking Marriage Mirroring God's Everlasting Love (~750 BC)",
    hebrew: "הוֹשֵׁעַ וְגֹמֶר: אַהֲבָה גּוֹאֶלֶת וּבְרִית חֶסֶד",
    category: "prophets",
    stopsCount: 6,
    description: "Walk the deeply emotional path of the prophet Hosea in the Northern Kingdom of Israel: commanded to marry the unfaithful Gomer as a living portrait of Israel's covenant unfaithfulness, buying her back from slavery, and God's promise of eternal betrothal.",
    stops: [
      {
        siteId: "samaria",
        name: "1. Samaria: The Prophetic Command to Marry",
        coords: [32.2770, 35.1890],
        zoom: 12,
        scripture: "Hosea 1:1-3",
        narrative: "Amid the wealth, idolatry, and luxury of the Northern Kingdom, the word of Jehovah comes to Hosea: 'Go, take unto thee a wife of whoredoms... for the land hath committed great whoredom, departing from the Lord.' Hosea takes Gomer daughter of Diblaim."
      },
      {
        siteId: null,
        name: "2. Valley of Jezreel: Prophetic Children of Warning",
        coords: [32.5590, 35.2900],
        zoom: 11,
        scripture: "Hosea 1:4-9",
        narrative: "Three children are born with prophetic names: Jezreel ('God Scatters'), Lo-ruhamah ('Not Pitied'), and Lo-ammi ('Not My People'), foretelling the catastrophic Assyrian exile of the Northern Kingdom."
      },
      {
        siteId: "bethel",
        name: "3. High Places of Bethel: Forgotten Blessings of God",
        coords: [31.9314, 35.2217],
        zoom: 12,
        scripture: "Hosea 2:5-13; Hosea 4:15",
        narrative: "Israel attributes her grain, sweet wine, and olive oil to the golden calves and Baal worship at Bethel. The Lord declares: 'She did not know that I gave her corn, and wine, and oil, and multiplied her silver and gold, which they prepared for Baal.'"
      },
      {
        siteId: null,
        name: "4. Wilderness of Judea: The Valley of Achor as a Door of Hope",
        coords: [31.8400, 35.4100],
        zoom: 11,
        scripture: "Hosea 2:14-17",
        narrative: "Instead of abandoning his bride, God reveals His boundless mercy: 'Therefore, behold, I will allure her, and bring her into the wilderness, and speak comfortably unto her... and I will give her the valley of Achor for a door of hope: and she shall sing there, as in the days of her youth.'"
      },
      {
        siteId: "samaria",
        name: "5. The Slave Market: Buying Back the Wayward Bride",
        coords: [32.2800, 35.1950],
        zoom: 12,
        scripture: "Hosea 3:1-3",
        narrative: "Gomer abandons Hosea, descending into adultery, debt, and enslavement. The Lord commands Hosea: 'Go yet, love a woman beloved of her friend, yet an adulteress.' Hosea goes to the slave market, paying fifteen shekels of silver and a homer of barley to redeem her."
      },
      {
        siteId: null,
        name: "6. Mount Ephraim: The Eternal Betrothal",
        coords: [32.1500, 35.2500],
        zoom: 10,
        scripture: "Hosea 2:19-20; Hosea 14:4-9",
        narrative: "Jehovah pronounces the sublime covenant of redemption: 'I will betroth thee unto me forever; yea, I will betroth thee unto me in righteousness, and in judgment, and in lovingkindness, and in mercies... I will heal their backsliding, I will love them freely.'"
      }
    ]
  },
  {
    id: "tour-ark",
    title: "The Ark of the Covenant: Sacred Sanctuary Trail",
    subtitle: "From Mount Sinai to Solomon's Holy of Holies",
    hebrew: "מַסְעוֹת אֲרוֹן הַבְּרִית",
    category: "sanctuary",
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
    category: "exile",
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
    category: "messianic",
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
    category: "culture",
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
