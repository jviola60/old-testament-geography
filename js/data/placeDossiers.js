/**
 * OLD TESTAMENT GEOGRAPHY - COMPREHENSIVE FIVE-TAB PLACE DOSSIERS
 * Deeply researched dossiers for biblical cities, sanctuaries, mountains, and valleys.
 * Features:
 * 1. Overview (Terrain, biblical setting, salvation history)
 * 2. Teachings & Covenants (Who taught, audience, what was taught, why taught, context, reception)
 * 3. Scriptures (Direct links to ChurchofJesusChrist.org)
 * 4. Patriarchs & Who Lived There (Bulleted character profiles)
 * 5. Archaeology & History (Excavations, ancient stelae, inscriptions, timeline)
 * 6. Church Media & Bible Videos
 */

(function applyOTPlaceDossiers() {
  const ot = (book, chapter, verse) =>
    `https://www.churchofjesuschrist.org/study/scriptures/ot/${book}/${chapter}?lang=eng#${verse || "1"}`;
  const pgp = (book, chapter, verse) =>
    `https://www.churchofjesuschrist.org/study/scriptures/pgp/${book}/${chapter}?lang=eng#${verse || "1"}`;

  const v = (ref, text, link) => ({ ref, text, churchLink: link });

  const PLACE_DOSSIERS = {
    jerusalem: {
      overview: "Jerusalem was anciently known as Salem ('Peace') in the days of Melchizedek and later fortified by the Jebusites as Jebus before King David conquered its subterranean water conduit to establish it as the royal capital and religious sanctuary of the United Kingdom of Israel. Situated 2,500 feet above sea level in the Judean hill country, the Holy City is naturally defended on three sides by precipitous gorges: the Kidron Valley to the east, the Valley of Hinnom (Gehenna) to the south and west, and the Central (Tyropoeon) Valley dividing its ancient ridges. To the north rises Mount Moriah, where Abraham offered Isaac and where King Solomon erected the magnificent First Temple to house the Ark of the Covenant.\n\nJerusalem stands as the spiritual center of the Old Testament. Here David danced before the Ark as it entered Zion; here Solomon dedicated the Temple with an outpouring of divine glory (1 Kings 8); here Isaiah beheld the Lord high and lifted up; here King Hezekiah carved an 1,750-foot tunnel through solid limestone to secure the Gihon Spring against the Assyrian siege; and here the prophets Jeremiah and Lehi wept over its impending destruction by Babylon.\n\n⚔️ THE REIGN OF KING ZEDEKIAH & LEHI'S DEPARTURE (~600 BC):\nIn the commencement of the first year of the reign of King Zedekiah (~597–586 BC), appointed as a tributary monarch over Judah by Nebuchadnezzar of Babylon, Jerusalem reached a spiritual and political crisis. While false prophets assured the royal court that God would never permit Jerusalem to fall, true prophets—Jeremiah, Habakkuk, Zephaniah, Urijah, and Lehi—cried repentance, prophesying that unless the people turned from their iniquities, the great city Jerusalem would be destroyed and its inhabitants carried away captive to Babylon (1 Nephi 1:4; 2 Kings 24:17–20).\n\nLehi, a devout and wealthy merchant of the tribe of Manasseh living in Jerusalem, prayed with all his heart on behalf of his people. He was granted an awe-inspiring vision of a Pillar of Fire dwelling upon a rock, followed by an open heaven wherein he beheld God upon His throne, surrounded by concourses of angels, and the Messiah descending with twelve others whose brightness exceeded the stars. Lehi was handed a celestial book foretelling the coming of the Redeemer and the doom of Jerusalem (1 Nephi 1:5–19). When Lehi boldly testified of these things, the inhabitants of Jerusalem sought to slay him. The Lord commanded Lehi in a dream to take his family—his wife Sariah and sons Laman, Lemuel, Sam, and Nephi—and depart into the wilderness, leaving behind their stone house, gold, silver, and precious riches.\n\nSoon thereafter, the Lord commanded Lehi's sons to return to Jerusalem to obtain the sacred Plates of Brass from Laban, an influential military leader, elder, and custodian of the records who commanded fifty soldiers and lived in an affluent estate in the Upper City. When Laban twice refused, stole the brothers' gold and silver, and sent his guards to execute them, Nephi was led by the Spirit by night into Jerusalem. Finding Laban drunken with wine in the streets near his house, Nephi was constrained by the Spirit: 'It is better that one man should perish than that a nation should dwindle and perish in unbelief.' Nephi slew Laban with his own sword of precious steel, put on Laban's armor, commanded the servant Zoram, and secured the Plates of Brass containing the Five Books of Moses, the prophecies of Isaiah, Jeremiah, and the genealogy of Joseph.",
      teachings: {
        teacher: "Melchizedek, King David, King Solomon, the Prophet Isaiah, Jeremiah, and Lehi",
        audience: "The tribes of Israel, royal courts of the House of David, priests and Levites, and worldwide visiting pilgrims",
        whatWasTaught: "Holiness to the Lord (Kodesh La-Adonai); the sanctity of temple worship; righteousness over empty ritual; the coming of the Suffering Servant and Messiah; the gathering of Israel in the last days from all nations to the mountain of the Lord's house; and the warnings of judgment for breaking covenant with Jehovah.",
        whyTaught: "To preserve Israel as a kingdom of priests, establish a central sanctuary for sacrificial similitudes pointing toward the Redeemer, and warn the covenant people against the spiritual adultery of idolatry.",
        context: "The royal temple-city of the Davidic dynasty and center of the Levitical sacrificial system during the United Monarchy, Divided Kingdoms, and the reign of King Zedekiah.",
        howAccepted: "Righteous kings (David, Hezekiah, Josiah) led national covenants of repentance and celebrated massive Passovers. However, apostate rulers (Ahaz, Manasseh, Zedekiah) rejected prophetic warnings, resulting in the Babylonian destruction in 586 BC.",
        passages: ["Genesis 14:18-20","2 Samuel 7:12-16","1 Kings 8:22-53","Isaiah 2:2-4","Isaiah 53:1-12","Jeremiah 7:1-15","1 Nephi 1:4","1 Nephi 3:7","1 Nephi 4:6-14"]
      },
      messianicProphecy: {
        title: "All Temples, Sacrifices & Prophecies in Jerusalem Point to Jesus Christ",
        prophecy: "Isaiah 53:3–5; Isaiah 7:14; Isaiah 9:6; Psalm 22:16–18; Zechariah 9:9; 1 Nephi 10:4",
        typology: "• The Daily Morning & Evening Burnt Offerings (Tamid): An unblemished male lamb was slain twice daily on the great altar, pointing to the Lamb of God who taketh away the sins of the world.\n\n• The Holy of Holies & The Mercy Seat (Kapporet): The High Priest entered once a year on the Day of Atonement (Yom Kippur) with the blood of the sacrifice, typifying the infinite and eternal Atonement of Jesus Christ entering heaven with His own blood.\n\n• Melchizedek King of Salem: Brought forth bread and wine unto Abraham (Genesis 14:18), prefiguring the Holy Sacrament instituted by Christ the Great High Priest after the Order of Melchizedek.\n\n• Lehi's Prophecy in Jerusalem: Foretold that exactly six hundred years from the time he departed Jerusalem, the Lord God would raise up a prophet among the Jews—even a Messiah, the Savior and Redeemer of the world (1 Nephi 10:4).\n\n• Isaiah's Suffering Servant: Foretold upon the heights of Zion: 'He was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed' (Isaiah 53:5).",
        fulfillment: "Fulfilled when Jesus Christ entered Jerusalem as the King of Zion (Zechariah 9:9), instituted the Sacrament of bread and wine, suffered in the Garden of Gethsemane across the Kidron Valley, and offered His infinite atoning sacrifice outside the city walls at Golgotha."
      },
      lifeBackThen: {
        housing: "Late First Temple Jerusalem featured compact multi-story stone houses built along narrow limestone alleys. Following King Hezekiah's expansion after the fall of Samaria (722 BC), the city expanded westward onto the Western Hill (the Mishneh), enclosed by the 23-foot-thick 'Broad Wall'. Families lived in 'four-room houses' with stone pillar courtyards for cooking, animal pens on the ground floor, living quarters above, and flat whitewashed plaster roofs used for drying figs and flax, sleeping during summer heat, and prayer.",
        foodAndDiet: "Inhabitants lived upon the 'Seven Species' (Deut 8:8): wheat and barley bread baked daily in clay tabun ovens; fresh and dried grapes, raisins, and wine; dried summer figs; pomegranates; olive oil for cooking and clay lamps (nerot); and date honey. Goats and sheep supplied fresh milk, yogurt, and firm salty cheeses. Meat was consumed primarily during holy feast days and peace offerings at the Temple.",
        cityGatesAndJustice: "The city gates (such as the Valley Gate, Fountain Gate, and Water Gate) were the bustling hubs of civic life and commerce. Elders and judges sat on stone benches beneath the gate archway to settle disputes, witness land transfers, and formalize marriage contracts. Merchants weighed silver bars and pieces on handheld balances against inscribed stone weights (shekels, pim, beka) before minted coinage existed. Official contracts were sealed by pressing personal stone or hematite seals into wet clay lumps (bullae).",
        clothingAndTrades: "Men and women wore unbleached wool or linen tunics (kethonet) tied with woven girdles, covered outdoors by a heavier woolen cloak (me'il) that doubled as bedding for the poor. In accordance with Numbers 15:38, men wore fringes (tzitzit) with a cord of blue (tekhelet) on the corners of their garments to remember all the commandments of the Lord. Craftsmen clustered by trade: potters worked near the clay deposits outside the gates, weavers spun goat hair, and blacksmiths forged iron tools and weapons.",
        sacredFeasts: "Three times a year—at Passover (Pesach), Pentecost (Shavuot), and Tabernacles (Sukkot)—tens of thousands of pilgrims ascended from across Israel to Jerusalem. The streets echoed with Psalms of Ascents (Psalms 120–134) as families erected temporary palm booths (sukkot) on flat rooftops and in courtyards, celebrated with harvest offerings, and rejoiced before the presence of the Lord."
      },
      scriptures: [
        v("Genesis 14:18", "And Melchizedek king of Salem brought forth bread and wine: and he was the priest of the most high God.", ot("gen", "14", "18")),
        v("2 Samuel 5:7", "Nevertheless David took the strong hold of Zion: the same is the city of David.", ot("2-sam", "5", "7")),
        v("1 Kings 8:10-11", "And it came to pass, when the priests were come out of the holy place, that the cloud filled the house of the Lord, So that the priests could not stand to minister because of the cloud: for the glory of the Lord had filled the house of the Lord.", ot("1-kgs", "8", "10")),
        v("Psalm 122:6", "Pray for the peace of Jerusalem: they shall prosper that love thee.", ot("ps", "122", "6")),
        v("Isaiah 2:3", "And many people shall go and say, Come ye, and let us go up to the mountain of the Lord, to the house of the God of Jacob; and he will teach us of his ways, and we will walk in his paths: for out of Zion shall go forth the law, and the word of the Lord from Jerusalem.", ot("isa", "2", "3")),
        v("Isaiah 53:3-5", "He was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.", ot("isa", "53", "3")),
        v("1 Nephi 1:4", "For it came to pass in the commencement of the first year of the reign of Zedekiah, king of Judah... there came many prophets, prophesying unto the people that they must repent, or the great city Jerusalem must be destroyed.", "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/1?lang=eng#4"),
        v("1 Nephi 3:7", "And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded...", "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/3?lang=eng#7"),
        v("1 Nephi 4:6-14", "And I was led by the Spirit, not knowing beforehand the things which I should do. Nevertheless I went forth... and I found Laban... And the Spirit said unto me again: Slay him... for it is better that one man should perish than that a nation should dwindle and perish in unbelief.", "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/4?lang=eng#6"),
        v("2 Kings 24:17", "And the king of Babylon made Mattaniah his father's brother king in his stead, and changed his name to Zedekiah.", ot("2-kgs", "24", "17"))
      ],
      peopleAndCovenant: "• Melchizedek: Great high priest and King of Salem to whom Abraham paid tithes; served bread and wine.\n\n• King David: Conquered the Jebusite fortress, established Jerusalem as Israel's united capital, bought the threshing floor of Araunah, and prepared materials for the Temple.\n\n• King Solomon: Built the magnificent First Temple on Mount Moriah, establishing Israel at the zenith of international wisdom and prosperity.\n\n• The Prophet Isaiah: Preached in the royal courts, foretelling the Virgin Birth (Isa 7:14), the Prince of Peace (Isa 9:6), and the Suffering Servant (Isa 53).\n\n• King Hezekiah & Prophet Isaiah: Led miraculous defense against Sennacherib's Assyrian army and carved the water tunnel from the Gihon Spring.\n\n• King Zedekiah: The last king of Judah (597–586 BC), appointed by Nebuchadnezzar. Rebelled against Babylon, ignored the warnings of Jeremiah and Lehi, and saw Jerusalem destroyed.\n\n• The Prophet Lehi & Sariah: Devout family living in Jerusalem (~600 BC). Lehi received visions of the Pillar of Fire and the coming Messiah; warned the wicked city and was commanded by the Lord to flee into the desert.\n\n• Nephi, Sam, Laman & Lemuel: Sons of Lehi who returned to Jerusalem on a perilous divine mission to retrieve the sacred Plates of Brass from Laban.\n\n• Laban: An influential military leader, elder, and custodian of genealogical records in Jerusalem (~600 BC). Commanded fifty soldiers, possessed ancestral brass plates, robbed Lehi's sons of their gold, and was slain by Nephi under divine command.\n\n• Jeremiah: Wept over Jerusalem's impending destruction, was cast into a miry dungeon under King Zedekiah, and foretold the seventy-year exile.\n\n• Ezra & Nehemiah: Inspired leaders who guided returning Jewish exiles to rebuild the Second Temple and restore Jerusalem's fortified stone walls.",
      archaeologyAndHistory: "• Ketef Hinnom Silver Scrolls (~600 BC): Discovered in a late First Temple burial cave overlooking the Hinnom Valley; contain the oldest known surviving biblical text in Paleo-Hebrew: the Priestly Blessing of Numbers 6:24–26.\n\n• The Broad Wall (~701 BC): A 23-foot-wide stone defense wall unearthed in Jerusalem's Jewish Quarter built by Hezekiah, enclosing the Western Hill (Mishneh) where Lehi's family lived.\n\n• Clay Bullae with Biblical Names (~600 BC): Excavations in the City of David have uncovered official clay seals bearing the exact Paleo-Hebrew names of biblical officials in Jeremiah's day: Gemariah son of Shaphan, Jehucal son of Shelemiah, and Gedaliah son of Pashhur.\n\n• Hezekiah's Tunnel & Siloam Inscription (~701 BC): An 1,750-foot water channel carved through bedrock connecting the Gihon Spring to the Pool of Siloam; commemorative inscription records miners meeting in the dark.\n\n• 586 BC: Fall of Jerusalem to Nebuchadnezzar of Babylon; burning of Solomon's Temple, blinding and capture of King Zedekiah.\n\n• 538 BC: Edict of Cyrus the Great permitting Jews to return; Second Temple dedicated 516 BC; walls rebuilt by Nehemiah in 445 BC.",
      hebrewInfo: {
        root: "ירש / שלם (Yarah / Shalom)",
        strongs: "H3389",
        vocalized: "יְרוּשָׁלַיִם",
        translit: "Yerushalayim",
        significance: "Reflects the dual grammatical form (-ayim), denoting two heights/hills (Mount Zion and Mount Moriah) and pointing to the earthly and heavenly Jerusalem."
      }
    },

    hebron: {
      overview: "Hebron (anciently Kirjath-arba), nestled 3,040 feet above sea level in the Judean hills nineteen miles south of Jerusalem, is one of the world's oldest continually inhabited cities. Surrounded by fertile terraced vineyards that yielded the massive grape clusters of Eshcol brought back by the twelve spies (Numbers 13:23), Hebron is sacred as the ancestral sanctuary of the Patriarchs.\n\nHere Abraham pitched his tent beneath the venerable Oaks of Mamre, building an altar unto Jehovah and receiving the angelic visitors who promised the birth of Isaac (Genesis 18). Following Sarah's death, Abraham purchased the Cave of Machpelah from Ephron the Hittite for 400 shekels of silver, creating the first legal landholding of Israel in the Promised Land. In this cave were buried Abraham, Sarah, Isaac, Rebekah, Jacob, and Leah. Centuries later, Caleb drove out the giants (Anakim) to claim Hebron as his inheritance; here David was anointed king over Judah, ruling for seven and a half years before moving his capital to Jerusalem.",
      teachings: {
        teacher: "The Lord Jehovah to Abraham; the Three Holy Messengers; Caleb; King David",
        audience: "Abraham and Sarah; the tribes of Judah",
        whatWasTaught: "The promise of an heir through Sarah in her old age ('Is any thing too hard for the Lord?'); the covenant of the land of promise; wholehearted faith and courage in overcoming giants; and righteous servant-leadership.",
        whyTaught: "To prove that God keeps His covenant promises despite human impossibility and establish the enduring burial memorial of the Patriarchs.",
        context: "The pastoral encampment of Mamre and the sacred rock-hewn tomb of Machpelah.",
        howAccepted: "Sarah laughed at first in wonder, then brought forth Isaac in joy; Caleb boldly declared: 'Give me this mountain, whereof the Lord spake in that day... if so be the Lord will be with me, then I shall be able to drive them out' (Joshua 14:12).",
        passages: ["Genesis 13:18","Genesis 18:1-15","Genesis 23:1-20","Joshua 14:6-15","2 Samuel 2:1-4"]
      },
      scriptures: [
        v("Genesis 13:18", "Then Abram removed his tent, and came and dwelt in the plain of Mamre, which is in Hebron, and built there an altar unto the Lord.", ot("gen", "13", "18")),
        v("Genesis 23:19", "And after this, Abraham buried Sarah his wife in the cave of the field of Machpelah before Mamre: the same is Hebron in the land of Canaan.", ot("gen", "23", "19")),
        v("Joshua 14:14", "Hebron therefore became the inheritance of Caleb the son of Jephunneh the Kenezite unto this day, because that he wholly followed the Lord God of Israel.", ot("josh", "14", "14")),
        v("2 Samuel 2:4", "And the men of Judah came, and there they anointed David king over the house of Judah.", ot("2-sam", "2", "4"))
      ],
      peopleAndCovenant: "• Abraham & Sarah: Lived under the oaks of Mamre; established the patriarchal family and covenant burial vault.\n\n• Isaac & Rebekah: Maintained the family altar and inheritance; buried in Machpelah.\n\n• Jacob & Leah: Jacob returned from Paddan-Aram to be reunited with Isaac; Jacob's body was embalmed in Egypt and brought here in a great royal funeral cortege.\n\n• Caleb the son of Jephunneh: Faith-filled spy who wholly followed Jehovah and conquered the fortress of the Anakim at age eighty-five.\n\n• King David: Reigned seven years in Hebron over Judah; his first six sons were born here, including Absalom and Adonijah.",
      archaeologyAndHistory: "• Cave of the Patriarchs (Machpelah): Massive monumental Herodian enclosure walls with classical drafted margins, preserved intact for over 2,000 years over the subterranean twin caves.\n\n• Middle Bronze Age City Walls (Tel Rumeida): Cyclopean stone ramparts dating to the era of Abraham (~2000–1800 BC).\n\n• Royal Judean LMLK Jar Handles: Discovered extensively in excavations, bearing the stamp 'Belonging to the King: Hebron' from King Hezekiah's era (~700 BC).",
      hebrewInfo: {
        root: "חבר (Chavar - to join, bind, associate)",
        strongs: "H2275",
        vocalized: "חֶבְרוֹן",
        translit: "Chevron",
        significance: "Conveys covenant friendship and alliance; Abraham is commemorated as 'Khalil al-Rahman' (Friend of the Merciful God)."
      }
    },

    bethel: {
      overview: "Bethel ('House of God'), originally named Luz, crowns a rocky limestone ridge ten miles north of Jerusalem on the watershed highway. Set among stark, stepped gray limestone terraces that naturally resemble a celestial stairway ascending to the sky, Bethel was the pivotal spiritual turning point for Jacob as he fled from his brother Esau toward Haran.\n\nAt Bethel, Abraham had earlier pitched his tent and built an altar between Bethel and Ai (Genesis 12:8; 13:3–4). When Jacob lay down with a stone for his pillow, he dreamed of a ladder set upon the earth whose top reached heaven, with angels of God ascending and descending. Above it stood Jehovah, who spoke to Jacob and renewed the Abrahamic covenant of land, seed, and divine presence. Jacob awoke in holy awe, exclaiming: 'Surely the Lord is in this place; and I knew it not... this is none other but the house of God, and this is the gate of heaven' (Genesis 28:16–17). He anointed the stone with oil, naming it Bethel. Years later, God commanded Jacob to return to Bethel, where his name was reaffirmed as Israel.",
      teachings: {
        teacher: "Jehovah to Jacob; later the Prophet Amos",
        audience: "Jacob; the Northern Kingdom of Israel",
        whatWasTaught: "The ladder of covenant progression linking earth and heaven; the renewal of the Abrahamic promises of land and posterity; God's unwavering promise: 'I am with thee, and will keep thee in all places whither thou goest' (Gen 28:15); later, Amos denounced its idolatrous royal golden calf shrine.",
        whyTaught: "To transform Jacob from a lonely, fearful fugitive into a covenant patriarch anchored in God's promises.",
        context: "Open wilderness ridge at night; later a sanctuary city; corrupted under Jeroboam I.",
        howAccepted: "Jacob vowed a vow of faithful tithes and dedication; centuries later, King Jeroboam perverted Bethel into a counterfeit rival shrine with a golden calf, sparking the severe rebuke of prophets (1 Kings 12–13; Amos 4:4).",
        passages: ["Genesis 12:8","Genesis 28:10-22","Genesis 35:1-15","1 Kings 12:28-33","Amos 5:4-6"]
      },
      scriptures: [
        v("Genesis 28:12-13", "And he dreamed, and behold a ladder set up on the earth, and the top of it reached to heaven: and behold the angels of God ascending and descending on it. And, behold, the Lord stood above it, and said, I am the Lord God of Abraham thy father, and the God of Isaac...", ot("gen", "28", "12")),
        v("Genesis 28:17", "And he was afraid, and said, How dreadful is this place! this is none other but the house of God, and this is the gate of heaven.", ot("gen", "28", "17")),
        v("Genesis 35:7", "And he built there an altar, and called the place El-beth-el: because there God appeared unto him, when he fled from the face of his brother.", ot("gen", "35", "7")),
        v("1 Kings 12:28-29", "Whereupon the king took counsel, and made two calves of gold... And he set the one in Beth-el, and the other put he in Dan.", ot("1-kgs", "12", "28"))
      ],
      peopleAndCovenant: "• Abraham: Built an altar here twice, calling on the name of the Lord upon entering Canaan.\n\n• Jacob (Israel): Received the vision of Jacob's Ladder, anointed the stone pillar, and later returned with his whole household, commanding them to put away all strange gods and be clean.\n\n• Deborah (Rebekah's nurse): Died and was buried under an oak below Bethel, called Allon-bachuth ('Oak of Weeping').\n\n• Jeroboam I: First king of divided Israel who instituted the golden calf cult at Bethel to stop Israelites from journeying to the Temple in Jerusalem.\n\n• Josiah of Judah: Righteous king who defiled and demolished Jeroboam's altar, fulfilling prophecy made three centuries prior (2 Kings 23:15).",
      archaeologyAndHistory: "• Excavations at Beitin (Bethel): Extensive excavations by W.F. Albright and J.L. Kelso revealed Late Bronze Age destruction layers corresponding to the Israelite conquest, followed by Iron Age Israelite masonry.\n\n• Seal of Ashtoreth & Cultic Remains: Discovered evidencing the pagan syncretism condemned by the prophet Amos and Hosea.\n\n• Ancient Stepped Limestone Formations: Topography matching the geological inspiration of Jacob's 'stairway to heaven'.",
      hebrewInfo: {
        root: "בית / אל (Bayit / El)",
        strongs: "H1008",
        vocalized: "בֵּית־אֵל",
        translit: "Bet-El",
        significance: "Literally 'House of God'. In Latter-day Saint temple theology, Bethel serves as a primary archetype of the temple gate connecting heaven and earth."
      }
    },

    shechem: {
      overview: "Shechem occupies a strategic mountain pass between Mount Gerizim and Mount Ebal in the central hill country of Samaria, controlling the east-west crossroads between the Mediterranean coast and the Jordan Valley. With copious freshwater springs and rich agricultural plains, Shechem was the geographic gateway through which Abraham first entered the Promised Land.\n\nUnder the great Oak of Moreh at Shechem, the Lord appeared to Abraham, saying: 'Unto thy seed will I give this land' (Genesis 12:7), where Abraham erected his first altar in Canaan. Jacob later purchased a parcel of ground here from Hamor for a hundred pieces of silver, pitched his tent, built an altar named El-Elohe-Israel ('God, the God of Israel'), and dug Jacob's Well. Here the bones of Joseph, carried out of Egypt during the Exodus, were buried. Following the conquest, Joshua gathered all Israel to the natural amphitheater of Shechem, where six tribes stood on Mount Gerizim to pronounce blessings and six on Mount Ebal to pronounce cursings, concluding with Joshua's immortal farewell: 'Choose you this day whom ye will serve... but as for me and my house, we will serve the Lord' (Joshua 24:15).",
      teachings: {
        teacher: "Jehovah to Abraham; Jacob; Joshua to all the tribes of Israel",
        audience: "Abraham; the household of Jacob; the entire congregation of Israel",
        whatWasTaught: "The inaugural promise of Canaan to Abraham's seed; the cleansing of the family from foreign gods; national covenant ratification between Gerizim (blessings of obedience) and Ebal (consequences of rebellion); and the necessity of undivided loyalty to the Lord.",
        whyTaught: "To inaugurate and repeatedly renew Israel's covenant allegiance at the geographic heart of the Promised Land.",
        context: "The mountain pass between Mount Gerizim and Mount Ebal; the sacred oak and memorial stone.",
        howAccepted: "Universal commitment: 'The people answered and said, God forbid that we should forsake the Lord, to serve other gods... The Lord our God will we serve, and his voice will we obey' (Joshua 24:16, 24).",
        passages: ["Genesis 12:6-7","Genesis 33:18-20","Deuteronomy 27:11-26","Joshua 8:30-35","Joshua 24:1-28"]
      },
      scriptures: [
        v("Genesis 12:6-7", "And Abram passed through the land unto the place of Sichem, unto the plain of Moreh... And the Lord appeared unto Abram, and said, Unto thy seed will I give this land: and there builded he an altar unto the Lord, who appeared unto him.", ot("gen", "12", "6")),
        v("Joshua 24:15", "And if it seem evil unto you to serve the Lord, choose you this day whom ye will serve... but as for me and my house, we will serve the Lord.", ot("josh", "24", "15")),
        v("Joshua 24:32", "And the bones of Joseph, which the children of Israel brought up out of Egypt, buried they in Shechem, in a parcel of ground which Jacob bought of the sons of Hamor...", ot("josh", "24", "32")),
        v("Deuteronomy 11:29", "Thou shalt put the blessing upon mount Gerizim, and the curse upon mount Ebal.", ot("deut", "11", "29"))
      ],
      peopleAndCovenant: "• Abraham: First altar and divine revelation in Canaan beneath the Oak of Moreh.\n\n• Jacob: Re-entered Canaan, bought parcel of land, and buried pagan idols under the oak at Shechem.\n\n• Joseph: Sent by his father from Hebron to find his brethren at Shechem; his embalmed bones were brought out of Egypt and buried here in fulfillment of prophecy.\n\n• Joshua: Convened the solemn covenant renewal assemblies and set up a great stone under an oak by the sanctuary of the Lord.\n\n• Rehoboam & Jeroboam: Site where Israel assembled after Solomon's death, rejecting Rehoboam's harsh taxes and dividing the kingdom into Israel and Judah.",
      archaeologyAndHistory: "• Tell Balata (Ancient Shechem): Massive Middle Bronze Age city gate, cyclopean fortress-temple (Temple of Baal-berith of Judges 9), and standing stones (Masseboth).\n\n• Mount Ebal Altar: Excavated by Adam Zertal; a monumental 12th-century BC stone altar fitting the biblical description in Joshua 8:30–31 of uncut stones with no hewn steps.\n\n• Lead Curse Tablet of Mount Ebal: Discovered in 2019 among sifting at the Ebal altar site; inscribed in Proto-Alphabetic script with an ancient Hebrew curse formula invoking the Tetragrammaton (YHW).",
      hebrewInfo: {
        root: "שכם (Shakham - shoulder, saddle, ridge)",
        strongs: "H7927",
        vocalized: "שְׁכֶם",
        translit: "Shechem",
        significance: "Reflects the geographic ridge between Gerizim and Ebal, symbolic of bearing the yoke/shoulder of God's covenant."
      }
    },

    "mount-sinai": {
      overview: "Mount Sinai (also called Mount Horeb, 'the Mountain of God') rises precipitously from the rugged red-granite wilderness of the southern Sinai Peninsula. Surrounded by barren peaks and vast gravel plains such as the Plain of er-Raha, this awe-inspiring peak is the mountain sanctuary where Jehovah revealed His eternal identity and covenant law to Moses.\n\nHere Moses, while tending the flocks of Jethro, beheld the miracle of the Burning Bush that burned with fire but was not consumed, hearing God proclaim: 'I AM THAT I AM' (Exodus 3:14). Here the Prophet Moses received the revelation recorded in Moses 1: 'And he saw God face to face, and he talked with him, and the glory of God was upon Moses' (Moses 1:2). Following the Exodus from Egypt, the entire nation of Israel gathered at the base of the trembling, smoke-wrapped mountain to hear God speak the Ten Commandments amid thunder, lightnings, and the trumpet of God. Moses ascended into the cloud for forty days and nights, receiving the stone tables of testimony written with the finger of God and the heavenly pattern for the Tabernacle. Centuries later, the Prophet Elijah fled here, finding refuge in a cave and hearing the Lord speak not in the tempest or earthquake, but in a 'still small voice' (1 Kings 19:12).",
      teachings: {
        teacher: "Jehovah to Moses and all the Children of Israel; later to the Prophet Elijah",
        audience: "Moses; the seventy elders of Israel; the entire congregation of over two million Israelites; Elijah",
        whatWasTaught: "The divine name (YHWH); the eternal purpose of Creation and man's destiny (Moses 1); the Ten Commandments; the moral, civil, and ceremonial Law of Moses; the holy pattern of the Tabernacle and priesthood vestments; and the gentle, penetrating nature of the Holy Spirit ('still small voice').",
        whyTaught: "To forge a rabble of freed slaves into a holy nation and kingdom of priests, and provide the covenant ordinances that point toward the Atonement of Jesus Christ.",
        context: "The mountain of God surrounded by thunder, dark clouds, burning fire, and divine glory.",
        howAccepted: "Israel initially trembled and pledged: 'All that the Lord hath spoken we will do' (Exodus 19:8). Yet while Moses delayed on the mount, they rebelled and built the golden calf, shattering the first tables of the higher law.",
        passages: ["Moses 1:1-11","Exodus 3:1-15","Exodus 19:1-25","Exodus 20:1-17","Exodus 24:9-18","1 Kings 19:8-13"]
      },
      scriptures: [
        v("Moses 1:2", "And he saw God face to face, and he talked with him, and the glory of God was upon Moses; therefore Moses could endure his presence.", pgp("moses", "1", "2")),
        v("Exodus 19:18", "And mount Sinai was altogether on a smoke, because the Lord descended upon it in fire: and the smoke thereof ascended as the smoke of a furnace, and the whole mount quaked greatly.", ot("ex", "19", "18")),
        v("Exodus 20:1-3", "And God spake all these words, saying, I am the Lord thy God, which have brought thee out of the land of Egypt, out of the house of bondage. Thou shalt have no other gods before me.", ot("ex", "20", "1")),
        v("1 Kings 19:11-12", "And after the wind an earthquake; but the Lord was not in the earthquake: And after the earthquake a fire; but the Lord was not in the fire: and after the fire a still small voice.", ot("1-kgs", "19", "11"))
      ],
      peopleAndCovenant: "• Moses: Prophet and lawgiver who endured God's presence, saw all the inhabitants of the earth, and brought down the tables of testimony.\n\n• Aaron, Nadab, Abihu, & 70 Elders: Ascended the mountain and 'saw the God of Israel: and there was under his feet as it were a paved work of a sapphire stone' (Exodus 24:9–10).\n\n• Bezalel & Oholiab: Master artisans endowed by the Spirit of God with artistic wisdom to build the Tabernacle, the Ark of the Covenant, the Golden Lampstand, and Altars.\n\n• The Prophet Elijah: Journeyed forty days and forty nights to Mount Horeb, finding renewed prophetic commission and peace in the still small voice.",
      archaeologyAndHistory: "• Traditional Mount Sinai (Jebel Musa): A 7,497-foot granite peak adjacent to the Plain of er-Raha, venerated since the early Christian era; home to Saint Catherine's Monastery (founded 6th century), containing the Codex Sinaiticus.\n\n• Inscriptions in the Sinai Peninsula: Proto-Sinaitic inscriptions (such as those at Serabit el-Khadim) demonstrating that West Semitic alphabetic script was used in this exact region centuries before the Exodus.\n\n• Plain of er-Raha: A vast 400-acre natural amphitheater at the foot of Jebel Musa capable of holding an enormous encampment.",
      hebrewInfo: {
        root: "סנה (S'neh - bramble, thorny bush)",
        strongs: "H5514",
        vocalized: "הַר סִינַי / חֹרֵב",
        translit: "Har Sinai / Chorev",
        significance: "Directly linked to the thorny burning bush (s'neh) through which God first appeared to Moses."
      }
    },

    "valley-of-elah": {
      overview: "The Valley of Elah ('Valley of the Terebinth Tree') is a broad, fertile east-west alluvial valley in the Judean Shephelah foothills, situated between the ancient fortified towns of Socoh and Azekah. The valley floor is cut by a dry brook (Wadi es-Sunt) lined with smooth limestone pebbles, bordered by low hills on either side.\n\nHere unfolded one of the most famous confrontations in all of human literature. The Philistine army assembled upon a mountain on one side, and Israel under King Saul stood on a mountain on the other side, with the valley between them. For forty days, the nine-foot Philistine champion Goliath of Gath marched forth, defying the armies of the living God and challenging any man to single combat. When the entire Israelite army melted in fear, a young shepherd boy from Bethlehem named David arrived with bread for his brothers. Stunned by Goliath's blasphemy, David proclaimed: 'Who is this uncircumcised Philistine, that he should defy the armies of the living God?' (1 Samuel 17:26). Declining Saul's heavy bronze armor, David took his shepherd's staff, chose five smooth stones from the brook, and met Goliath armed only with a sling and unwavering faith: 'Thou comest to me with a sword, and with a spear, and with a shield: but I come to thee in the name of the Lord of hosts, the God of the armies of Israel, whom thou hast defied' (1 Samuel 17:45). David slung a stone that sank into Goliath's forehead, securing a miraculous victory.",
      teachings: {
        teacher: "David to King Saul and Goliath",
        audience: "King Saul, the armies of Israel, and the Philistine host",
        whatWasTaught: "The battle is the Lord's; worldly weapons and physical stature are nothing compared to covenant faith in Jehovah; moral courage to stand alone against intimidating worldly opposition.",
        whyTaught: "To demonstrate 'that all the earth may know that there is a God in Israel' and prepare David to lead the kingdom of God.",
        context: "The natural theater of the Valley of Elah between Socoh and Azekah.",
        howAccepted: "David's brothers initially mocked him; Saul doubted his youth; Goliath cursed him by his gods; but Israel shouting with triumph chased the Philistines to the gates of Ekron.",
        passages: ["1 Samuel 17:1-58"]
      },
      scriptures: [
        v("1 Samuel 17:40", "And he took his staff in his hand, and chose him five smooth stones out of the brook, and put them in a shepherd's bag... and his sling was in his hand: and he drew near to the Philistine.", ot("1-sam", "17", "40")),
        v("1 Samuel 17:45", "Then said David to the Philistine, Thou comest to me with a sword, and with a spear, and with a shield: but I come to thee in the name of the Lord of hosts, the God of the armies of Israel, whom thou hast defied.", ot("1-sam", "17", "45")),
        v("1 Samuel 17:47", "And all this assembly shall know that the Lord saveth not with sword and spear: for the battle is the Lord's, and he will give you into our hands.", ot("1-sam", "17", "47"))
      ],
      peopleAndCovenant: "• David: Young shepherd anointed by Samuel; demonstrated that covenant faith conquers worldly giants.\n\n• Goliath of Gath: Giant champion of the Philistines whose bronze armor and pride were shattered by a sling stone.\n\n• King Saul: Tall monarch paralyzed by fear until challenged by David's pure conviction.\n\n• Jonathan: Son of Saul whose soul was knit with the soul of David after witnessing David's courage in the valley.",
      archaeologyAndHistory: "• Khirbet Qeiyafa (Shaaraim): Fortified Judean gateway fortress overlooking the Valley of Elah excavated by Yosef Garfinkel, carbon-dated to 1020–980 BC (exact era of David).\n\n• Qeiyafa Ostracon: A five-line Proto-Canaanite Hebrew inscription discovered on site commanding social justice, care for the poor, and honoring the king—the earliest known Hebrew inscription from the United Monarchy.",
      hebrewInfo: {
        root: "אלה (Elah - terebinth tree)",
        strongs: "H425",
        vocalized: "עֵמֶק הָאֵלָה",
        translit: "Emek HaElah",
        significance: "Named after the ancient, sturdy terebinth trees that still grow along the wadi banks."
      }
    },

    dothan: {
      overview: "Dothan is located in an expansive, fertile green basin in the northern hill country of Samaria, twelve miles north of Shechem along the ancient caravan route leading to the Jezreel Valley and the Mediterranean coast. Surrounded by gentle hills with natural underground cisterns and rich pastureland, Dothan is celebrated in Genesis and 2 Kings for two profound spiritual manifestations of divine protection.\n\nFirst, here the young seventeen-year-old Joseph, wearing his coat of many colors, was sent by Jacob to seek his brothers. Seeing him from afar, his jealous brothers conspired against him, stripped off his robe, and cast him into an empty pit that had no water. Sitting down to eat bread, they saw a caravan of Ishmaelites coming from Gilead with camels bearing spicery, balm, and myrrh to Egypt, and sold Joseph for twenty pieces of silver (Genesis 37:17–28). Centuries later, the Prophet Elisha resided in Dothan when the king of Syria sent horses, chariots, and a great host by night to surround the city. When Elisha's young servant arose early and saw the hostile army, he cried: 'Alas, my master! how shall we do?' Elisha answered with immortal assurance: 'Fear not: for they that be with us are more than they that be with them' (2 Kings 6:16). Elisha prayed, and the young man's eyes were opened to behold the mountain full of horses and chariots of fire round about Elisha.",
      teachings: {
        teacher: "Elisha to his servant; Joseph's life as a type of the Messiah",
        audience: "Elisha's servant; the Syrian army; the sons of Jacob",
        whatWasTaught: "Unseen spiritual armies surround the righteous; God's unseen power exceeds mortal threats; forgiveness and mercy over revenge (Elisha fed the blinded Syrian soldiers and sent them home in peace).",
        whyTaught: "To teach Israel that physical eyes see only mortal distress, but spiritual vision reveals the overwhelming protection of God's heavenly hosts.",
        context: "The walled city of Tel Dothan surrounded by hostile chariots.",
        howAccepted: "The servant's panic was transformed into peace; Syria ceased raiding the land of Israel.",
        passages: ["Genesis 37:17-28","2 Kings 6:8-23"]
      },
      scriptures: [
        v("Genesis 37:17", "And the man said, They are departed hence; for I heard them say, Let us go to Dothan. And Joseph went after his brethren, and found them in Dothan.", ot("gen", "37", "17")),
        v("2 Kings 6:16", "And he answered, Fear not: for they that be with us are more than they that be with them.", ot("2-kgs", "6", "16")),
        v("2 Kings 6:17", "And Elisha prayed, and said, Lord, I pray thee, open his eyes, that he may see. And the Lord opened the eyes of the young man; and he saw: and, behold, the mountain was full of horses and chariots of fire round about Elisha.", ot("2-kgs", "6", "17"))
      ],
      peopleAndCovenant: "• Joseph: Pitched into the cistern at Dothan; preserved by God to save the covenant family from extinction.\n\n• The Sons of Jacob: Conspired against their brother, initiating centuries of Egyptian sojourn.\n\n• The Prophet Elisha: Possessed double portion of Elijah's spirit; ministered with calm spiritual sight.\n\n• Elisha's Servant (Gehazi): Received the miraculous opening of spiritual eyes to see heaven's chariots.",
      archaeologyAndHistory: "• Tel Dothan Excavations: Free University archaeological expeditions (1950s) uncovered Early, Middle, and Late Bronze Age strata, including ancient bottle-shaped underground cisterns carved into limestone identical to the pit into which Joseph was cast.",
      hebrewInfo: {
        root: "דות (Dot - well, cistern)",
        strongs: "H1886",
        vocalized: "דֹּתָן",
        translit: "Dotan",
        significance: "Literally 'Two Cisterns/Wells', reflecting its abundant water sources along the caravan highway."
      }
    },

    shiloh: {
      overview: "Shiloh was the central spiritual sanctuary and religious capital of Israel for over three centuries, from the conquest under Joshua until the rise of the monarchy. Situated in the tranquil Ephraimite hill country north of Bethel, Shiloh was chosen as the sacred resting place of the Tabernacle and the Ark of the Covenant.\n\nHere Joshua assembled all the tribes and cast sacred lots before the Lord to apportion the Promised Land (Joshua 18:1–10). Here the faithful Hannah, heartbroken in her barrenness, wept bitterly in the Tabernacle court, moving her lips in silent prayer to Jehovah. The high priest Eli blessed her, and she bore Samuel, dedicating him from childhood to the service of the sanctuary: 'For this child I prayed; and the Lord hath given me my petition' (1 Samuel 1:27). In this sanctuary, the young boy Samuel heard the voice of the Lord calling him by name in the night, responding with reverent faith: 'Speak; for thy servant heareth' (1 Samuel 3:10). Following the spiritual corruption of Eli's sons, the Ark was captured by the Philistines in battle, and Shiloh was destroyed, standing forever as a solemn reminder of covenant accountability (Psalm 78:60; Jeremiah 7:12).",
      teachings: {
        teacher: "Joshua; Hannah; the High Priest Eli; young Prophet Samuel",
        audience: "The twelve tribes of Israel and pilgrims gathering for annual feasts",
        whatWasTaught: "Pouring out the soul in silent faith; dedication of children to sacred temple service; reverent obedience to the voice of God; and the danger of treating sacred ordinances with contempt.",
        whyTaught: "To preserve Israel as a holy commonwealth anchored around the Ark of the Covenant and the sacrifices of the Tabernacle.",
        context: "The Tabernacle of the Congregation resting in the tranquil basin of Shiloh.",
        howAccepted: "Righteous Israelites celebrated the annual feasts with rejoicing, but apostasy among the priesthood brought divine chastisement.",
        passages: ["Joshua 18:1-10","1 Samuel 1:1-28","1 Samuel 3:1-21","Psalm 78:58-61"]
      },
      scriptures: [
        v("Joshua 18:1", "And the whole congregation of the children of Israel assembled together at Shiloh, and set up the tabernacle of the congregation there. And the land was subdued before them.", ot("josh", "18", "1")),
        v("1 Samuel 1:27-28", "For this child I prayed; and the Lord hath given me my petition which I asked of him: Therefore also I have lent him to the Lord; as long as he liveth he shall be lent to the Lord.", ot("1-sam", "1", "27")),
        v("1 Samuel 3:10", "And the Lord came, and stood, and called as at other times, Samuel, Samuel. Then Samuel answered, Speak; for thy servant heareth.", ot("1-sam", "3", "10"))
      ],
      peopleAndCovenant: "• Joshua: Assembled Israel at Shiloh and cast lots before Jehovah to allot tribal lands.\n\n• Hannah: Exemplar of faithful motherhood who poured out her soul and dedicated Samuel to the sanctuary.\n\n• The Prophet Samuel: Greatest judge and prophet whose word was established from Dan to Beersheba.\n\n• Eli: Aged high priest who discerned that the Lord was calling the young boy Samuel.",
      archaeologyAndHistory: "• Tel Shiloh Excavations: Excavations by the Associates for Biblical Research (Dr. Scott Stripling) uncovered a monumental rectangular platform carved into bedrock matching the exact biblically specified dimensions of the Tabernacle.\n\n• Cultic Pomegranate & Horned Altars: Discovered in excavation layers dating to the 12th–11th centuries BC.\n\n• Destruction Layer (~1050 BC): Heavy ash and carbonized storage jars confirming Philistine destruction matching Jeremiah 7:12.",
      hebrewInfo: {
        root: "שיל (Shalah - peace, tranquil rest)",
        strongs: "H7887",
        vocalized: "שִׁילֹה",
        translit: "Shiloh",
        significance: "Reflects tranquility and rest, pointing toward the Messiah as the Prince of Peace (Genesis 49:10)."
      }
    },

    beersheba: {
      overview: "Beersheba ('Well of the Oath'), situated at the threshold of the arid Negev wilderness, marks the traditional southern boundary of the Promised Land ('from Dan to Beersheba'). Blessed with deep aquifers where seasonal desert wadis meet, Beersheba was the covenant home and sanctuary of the three great Patriarchs: Abraham, Isaac, and Jacob.\n\nHere Abraham dug a deep water well, resolved disputes with King Abimelech of Gerar, and ratified a covenant of peace with seven ewe lambs, naming the sanctuary Beersheba. He planted a tamarisk tree and called upon the name of Jehovah, the Everlasting God (El Olam, Genesis 21:33). Here Hagar, cast out into the wilderness, wept under a desert bush until an angel opened her eyes to see a well of life-giving water. Isaac redressed his father's wells at Beersheba, building an altar and receiving divine reassurance. Decades later, the aged patriarch Jacob offered sacrifices here on his emotional journey to Egypt, receiving God's immortal promise: 'Fear not to go down into Egypt; for I will there make of thee a great nation' (Genesis 46:3). Centuries later, the weary prophet Elijah rested here beneath a juniper tree on his flight to Mount Horeb.",
      teachings: {
        teacher: "Jehovah to Abraham, Isaac, and Jacob; the Patriarchs to their neighbors",
        audience: "The patriarchal families and neighboring Philistine rulers",
        whatWasTaught: "Peaceful covenant coexistence; integrity in honor and treaties; calling upon El Olam (the Everlasting God); and trusting God in seasons of exile.",
        whyTaught: "To secure the southern border of the covenant inheritance and demonstrate that God's covenant endures through every wilderness trial.",
        context: "Pastoral wellhead encampment in the Negev desert.",
        howAccepted: "Kings of Gerar marveled at God's blessing on Abraham and Isaac, seeking repeated peace pacts.",
        passages: ["Genesis 21:22-34","Genesis 26:23-33","Genesis 46:1-5","1 Kings 19:3-5"]
      },
      scriptures: [
        v("Genesis 21:33", "And Abraham planted a grove in Beer-sheba, and called there on the name of the Lord, the everlasting God.", ot("gen", "21", "33")),
        v("Genesis 26:24-25", "And the Lord appeared unto him the same night, and said, I am the God of Abraham thy father: fear not, for I am with thee... And he builded an altar there, and called upon the name of the Lord.", ot("gen", "26", "24")),
        v("Genesis 46:1-3", "And Israel took his journey with all that he had, and came to Beer-sheba, and offered sacrifices unto the God of his father Isaac... And he said, I am God, the God of thy father: fear not to go down into Egypt.", ot("gen", "46", "1"))
      ],
      peopleAndCovenant: "• Abraham & Sarah: Established the wellhead of the oath and worshipped El Olam under the tamarisk.\n\n• Hagar & Ishmael: Rescued in the adjacent wilderness by the angel of God.\n\n• Isaac: Built an altar, reopened Abraham's wells, and dwelt here in quiet dignity.\n\n• Jacob: Sacrificed at Beersheba before moving to Egypt, reassured of God's presence.\n\n• The Prophet Elijah: Left his servant here when journeying forty days to Horeb.",
      archaeologyAndHistory: "• Tel Be'er Sheva (UNESCO World Heritage Site): Excavated by Yohanan Aharoni; reveals an impeccably planned 8th-century BC Judean administrative city with circular street plan and storehouses.\n\n• Deep Patriarchal Well: A massive rock-cut well 140 feet deep located outside the city gate, dating to the Middle Bronze Age.\n\n• Horned Altar of Beersheba: Carved sandstone altar blocks with horns discovered in the city wall, confirming ancient sacrificial worship.",
      hebrewInfo: {
        root: "באר / שבע (Be'er / Sheva)",
        strongs: "H884",
        vocalized: "בְּאֵר שֶׁבַע",
        translit: "Be'er Sheva",
        significance: "Denotes both 'Well of the Oath' and 'Well of the Seven', commemorating Abraham's seven lambs."
      }
    },

    jericho: {
      overview: "Jericho ('City of Palms'), nestled 800 feet below sea level in the Jordan Rift Valley five miles north of the Dead Sea, is celebrated as one of the lowest and oldest fortified cities on earth. Fed by the copious fresh waters of the spring of Ain es-Sultan, Jericho was the strategic gateway city guarding the mountain passes into the heart of Canaan.\n\nHere Rahab hid the two Israelite spies beneath stalks of flax on her roof, securing their escape and confessing: 'The Lord your God, he is God in heaven above, and in earth beneath' (Joshua 2:11). In token of covenant protection, she bound a scarlet cord in her window. In the miraculous conquest, Israel marched silently around the walls once each day for six days, and on the seventh day seven times. At the blast of the jubilee rams' horns and the mighty shout of Israel, the walls collapsed flat, delivering the city into their hands. Centuries later, the prophet Elisha cast salt into its bitter spring, healing the waters that continue to nourish the lush palm oasis today.",
      teachings: {
        teacher: "Joshua; Rahab; the Prophet Elisha",
        audience: "The armies of Israel, Rahab's household, and the prophetic schools",
        whatWasTaught: "Deliverance through covenant symbols (the scarlet line); faith overcoming impossible fortified ramparts; obedience without question; and healing bitter springs through purity.",
        whyTaught: "To demonstrate that the conquest of Canaan was achieved by divine power rather than mortal military strength.",
        context: "The formidable walled tell guarding the entrance to the hill country.",
        howAccepted: "Rahab and her family were saved and integrated into Israel; Joshua pronounced a prophetic curse upon anyone who would rebuild its fortifications.",
        passages: ["Joshua 2:1-24","Joshua 6:1-27","2 Kings 2:19-22","Hebrews 11:30-31"]
      },
      scriptures: [
        v("Joshua 6:20", "So the people shouted when the priests blew with the trumpets... and the wall fell down flat, so that the people went up into the city, every man straight before him, and they took the city.", ot("josh", "6", "20")),
        v("2 Kings 2:21-22", "And he went forth unto the spring of the waters, and cast the salt in there, and said, Thus saith the Lord, I have healed these waters... So the waters were healed unto this day.", ot("2-kgs", "2", "21")),
        v("Hebrews 11:30", "By faith the walls of Jericho fell down, after they were compassed about seven days.", "https://www.churchofjesuschrist.org/study/scriptures/nt/heb/11?lang=eng#30")
      ],
      peopleAndCovenant: "• Joshua: Led the miraculous circumambulation with the Ark of the Covenant.\n\n• Rahab: Canaanite woman whose faith and scarlet token brought salvation; ancestress of David and Christ.\n\n• The Two Spies: Faithful scouts protected by Rahab.\n\n• Elisha: Healed the spring of Jericho with salt, symbolizing purifying power.",
      archaeologyAndHistory: "• Tell es-Sultan (Ancient Jericho): Excavations by Kathleen Kenyon, John Garstang, and Bryant Wood uncovered fallen mudbrick city walls that collapsed outward down the slope, creating natural ramps for attackers.\n\n• Massive Burn Layer: Three feet of ash, burnt timbers, and store jars full of charred spring grain confirming a rapid conquest directly following Passover matching Joshua 3–6.\n\n• Elisha's Spring (Ain es-Sultan): Still producing 1,000 gallons per minute of sweet water for the oasis.",
      hebrewInfo: {
        root: "ירח (Yare'ach - moon / fragrance)",
        strongs: "H3405",
        vocalized: "יְרִיחוֹ",
        translit: "Yericho",
        significance: "Reflects both the fragrant balsamic perfumes of its palms and ancient lunar associations."
      }
    },

    bethlehem: {
      overview: "Bethlehem Ephratah ('House of Bread' / 'Fruitful'), perched on terraced limestone hills five miles south of Jerusalem, is sacred as the ancestral home of King David and the prophetic birthplace of the Messiah. Surrounded by fertile vineyards, almond groves, and wheat fields, Bethlehem is the pastoral setting for some of the most tender narratives in holy writ.\n\nHere the widowed Ruth gleaned barley in the fields of the righteous Boaz, demonstrating covenant loyalty: 'Thy people shall be my people, and thy God my God' (Ruth 1:16). Boaz acted as her kinsman-redeemer (Go'el), redeeming the family inheritance and fathering Obed, grandfather of David. Here the prophet Samuel came to Jesse's home with his horn of oil, passing over the tall elder sons to anoint the youngest shepherd boy David: 'The Lord seeth not as man seeth; for man looketh on the outward appearance, but the Lord looketh on the heart' (1 Samuel 16:7). Centuries later, the prophet Micah uttered the immortal prophecy that from little Bethlehem would come forth the everlasting Ruler of Israel (Micah 5:2).",
      teachings: {
        teacher: "The Prophet Samuel to Jesse; Boaz to Ruth; the Prophet Micah",
        audience: "The family of Jesse and the faithful remnant of Judah",
        whatWasTaught: "God looks upon the heart rather than outward stature; loving-kindness (chesed) brings eternal fruit; the role of the kinsman-redeemer pointing toward Jesus Christ; and the coming of the Messiah from humble origins.",
        whyTaught: "To prepare the royal lineage of David and establish the prophetic geographic setting for the birth of the Savior of the world.",
        context: "The terraced barley fields and pastoral hills of Judah.",
        howAccepted: "Celebrated in Israel's songs and preserved as a primary messianic sign.",
        passages: ["Ruth 1-4","1 Samuel 16:1-13","2 Samuel 23:14-17","Micah 5:2"]
      },
      scriptures: [
        v("Ruth 4:11", "And all the people that were in the gate, and the elders, said, We are witnesses. The Lord make the woman that is come into thine house like Rachel and like Leah, which two did build the house of Israel.", ot("ruth", "4", "11")),
        v("1 Samuel 16:13", "Then Samuel took the horn of oil, and anointed him in the midst of his brethren: and the Spirit of the Lord came upon David from that day forward.", ot("1-sam", "16", "13")),
        v("Micah 5:2", "But thou, Beth-lehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting.", ot("micah", "5", "2"))
      ],
      peopleAndCovenant: "• Ruth the Moabitess: Matriarch of covenant loyalty who entered the lineage of David.\n\n• Boaz: Righteous kinsman-redeemer who protected the poor and preserved the family inheritance.\n\n• King David: Shepherd boy anointed in Bethlehem; warrior-psalmist of Israel.\n\n• Prophet Samuel: Guided by revelation to seek the pure in heart.\n\n• The Promised Messiah: Jesus Christ, born in Bethlehem in fulfillment of Micah 5:2.",
      archaeologyAndHistory: "• Bethlehem Bulla (7th Century BC): Discovered in Jerusalem; a clay seal impression bearing Paleo-Hebrew inscription 'From the town of Bethlehem to the King', confirming its royal tax deliveries.\n\n• Shepherds' Fields: Ancient limestone watchtowers (Migdal Eder) and caves where sacrificial temple flocks were kept outside Bethlehem.\n\n• Traditional David's Well: Three cisterns near the gate commemorating the three mighty warriors who broke through Philistine ranks to fetch David a drink (2 Samuel 23).",
      hebrewInfo: {
        root: "בית / לחם (Bayit / Lechem)",
        strongs: "H1035",
        vocalized: "בֵּית לֶחֶם",
        translit: "Beit Lechem",
        significance: "Literally 'House of Bread', prophetic of the Savior who proclaimed: 'I am the bread of life'."
      }
    },

    "mount-carmel": {
      overview: "Mount Carmel ('Vineyard of God') is a dramatic, verdant limestone mountain ridge extending fifteen miles from the Samarian hills to the Mediterranean Sea, overlooking the vast Jezreel Valley. Celebrated in the Old Testament for its lush forests, aromatic laurels, and maritime beauty, Carmel was the stage for the dramatic vindication of Jehovah against the Phoenician god Baal.\n\nDuring the reign of apostate King Ahab and Queen Jezebel, the prophet Elijah summoned all Israel and 450 prophets of Baal to the summit. Challenging the wavering nation, Elijah demanded: 'How long halt ye between two opinions? if the Lord be God, follow him: but if Baal, then follow him' (1 Kings 18:21). The prophets of Baal shouted, leaped upon their altar, and cut themselves until evening, but 'there was neither voice, nor any to answer.' Elijah then repaired the broken altar of the Lord with twelve stones, dug a deep trench, and drenched the sacrifice three times with four barrels of water. Praying in calm majesty, Elijah asked God to turn the people's hearts back. Divine fire fell from heaven, consuming the burnt sacrifice, wood, stones, dust, and water in the trench. Israel fell prostrate, shouting: 'The Lord, he is the God!' Elijah then prayed atop Carmel until rain clouds broke the three-year drought.",
      teachings: {
        teacher: "The Prophet Elijah",
        audience: "King Ahab, 450 prophets of Baal, and the entire assembled nation of Israel",
        whatWasTaught: "Wholehearted covenant decision without compromise; the absolute reality and supremacy of Jehovah over counterfeit deities; the power of humble, fervent prayer; and restoring broken altars.",
        whyTaught: "To purge Israel of pagan idolatry and turn their hearts back to the God of Abraham, Isaac, and Jacob.",
        context: "The wind-swept mountain summit overlooking the Mediterranean and the Kishon brook.",
        howAccepted: "The nation fell on their faces, repented, and cried out: 'The Lord, he is the God; the Lord, he is the God!'",
        passages: ["1 Kings 18:17-46","2 Kings 2:25","James 5:17-18"]
      },
      scriptures: [
        v("1 Kings 18:21", "And Elijah came unto all the people, and said, How long halt ye between two opinions? if the Lord be God, follow him: but if Baal, then follow him. And the people answered him not a word.", ot("1-kgs", "18", "21")),
        v("1 Kings 18:38-39", "Then the fire of the Lord fell, and consumed the burnt sacrifice, and the wood, and the stones, and the dust, and licked up the water that was in the trench. And when all the people saw it, they fell on their faces: and they said, The Lord, he is the God; the Lord, he is the God.", ot("1-kgs", "18", "38")),
        v("James 5:17-18", "Elias was a man subject to like passions as we are, and he prayed earnestly that it might not rain... And he prayed again, and the heaven gave rain.", "https://www.churchofjesuschrist.org/study/scriptures/nt/james/5?lang=eng#17")
      ],
      peopleAndCovenant: "• The Prophet Elijah: Tishbite prophet endowed with sealing power and boldness to stand alone for Jehovah.\n\n• King Ahab & Queen Jezebel: Rulers who led northern Israel into state-sponsored Baal idolatry.\n\n• Obadiah: Righteous governor of Ahab's house who hid 100 prophets of the Lord in caves.\n\n• The People of Israel: Chose between two opinions, ultimately returning to Jehovah.",
      archaeologyAndHistory: "• El-Muhraqa ('The Place of Burning'): Traditional southern promontory of Mount Carmel rising 1,600 feet, featuring sweeping views of the Kishon brook and the Plain of Esdraelon.\n\n• Ancient Rock-Cut Cisterns: Water reservoirs preserved atop the summit explaining how Elijah obtained water during the drought.\n\n• Carmel Caves (UNESCO): Paleolithic and Neolithic caves showing continuous settlement along the mountain ridge.",
      hebrewInfo: {
        root: "כרם / אל (Kerem / El)",
        strongs: "H3760",
        vocalized: "הַר הַכַּרְמֶל",
        translit: "Har HaKarmel",
        significance: "Literally 'Vineyard of God' / 'Fruitful Field', symbol of spiritual vitality and covenant harvest."
      }
    },

    babylon: {
      overview: "Babylon ('Gate of the Gods' / 'Confusion'), situated on the Euphrates River fifty miles south of modern Baghdad, was the majestic imperial metropolis of the Neo-Babylonian Empire under Nebuchadnezzar II. Enclosed by massive double walls and decorated with the glazed blue tiles of the Ishtar Gate and the legendary Hanging Gardens, Babylon represents the apex of ancient worldly pride.\n\nIn 586 BC, Nebuchadnezzar's armies burned Jerusalem, destroyed Solomon's Temple, and carried tens of thousands of Judeans into exile. By the canals of Babylon, the exiles wept: 'By the rivers of Babylon, there we sat down, yea, we wept, when we remembered Zion' (Psalm 137:1). In this foreign court, Daniel and his three companions (Shadrach, Meshach, and Abednego) resolved not to defile themselves with the king's meat. When the three youths refused to bow to Nebuchadnezzar's ninety-foot golden image, they were cast into the sevenfold heated furnace, where the King saw four men walking loose and unhurt: 'and the form of the fourth is like the Son of God' (Daniel 3:25). Here Daniel interpreted the handwriting on the wall to Belshazzar and survived the lions' den under Darius. In 539 BC, Babylon fell to Cyrus the Great of Persia, who decreed the return of the Jewish exiles.",
      teachings: {
        teacher: "The Prophet Daniel, Ezekiel, and the Three Holy Children",
        audience: "King Nebuchadnezzar, Belshazzar, King Darius, and the Jewish captive community",
        whatWasTaught: "The Kingdom of God (the stone cut without hands) shall consume all earthly empires and stand forever (Daniel 2); unyielding covenant loyalty under threat of execution; the reality of the Son of God in the furnace of affliction; and the humility required of earthly rulers.",
        whyTaught: "To preserve Israel's faith in exile, demonstrate that the God of Israel rules over the nations, and prepare the remnant to return to Zion.",
        context: "The royal imperial palace and exile settlements along the Chebar River.",
        howAccepted: "Nebuchadnezzar twice confessed that Daniel's God is the God of gods and Lord of kings; Cyrus issued the decree of restoration.",
        passages: ["Daniel 1-6","Psalm 137","Jeremiah 29:1-14","Isaiah 47"]
      },
      scriptures: [
        v("Daniel 2:44", "And in the days of these kings shall the God of heaven set up a kingdom, which shall never be destroyed... but it shall break in pieces and consume all these kingdoms, and it shall stand for ever.", ot("dan", "2", "44")),
        v("Daniel 3:25", "He answered and said, Lo, I see four men loose, walking in the midst of the fire, and they have no hurt; and the form of the fourth is like the Son of God.", ot("dan", "3", "25")),
        v("Psalm 137:1", "By the rivers of Babylon, there we sat down, yea, we wept, when we remembered Zion.", ot("ps", "137", "1")),
        v("Daniel 6:23", "So Daniel was taken up out of the den, and no manner of hurt was found upon him, because he believed in his God.", ot("dan", "6", "23"))
      ],
      peopleAndCovenant: "• Daniel (Belteshazzar): Prophet and statesman whose wisdom confounded the magicians of Babylon.\n\n• Shadrach, Meshach, & Abednego: Preserved in the furnace, proving covenant fidelity over compromise.\n\n• King Nebuchadnezzar: Imperial conqueror humbled by God to acknowledge divine sovereignty.\n\n• The Prophet Ezekiel: Ministered to exiles by the River Chebar, beholding the vision of the valley of dry bones.",
      archaeologyAndHistory: "• Royal Palace & Ishtar Gate: Excavated by Robert Koldewey; magnificent glazed brick murals of golden lions, dragons (mushkhushu), and bulls now reconstructed in Berlin's Pergamon Museum.\n\n• Cyrus Cylinder (539 BC): Discovered in Babylon; clay cuneiform cylinder recording Cyrus's edict releasing captive peoples and returning their sacred temple vessels.\n\n• Babylonian Chronicle: Cuneiform clay tablets in the British Museum explicitly documenting Nebuchadnezzar's capture of Jerusalem on the 2nd of Adar, 597 BC.",
      hebrewInfo: {
        root: "בבל (Bavel - confusion / gate of god)",
        strongs: "H894",
        vocalized: "בָּבֶל",
        translit: "Bavel",
        significance: "Echoes the Tower of Babel (Genesis 11) where languages were confounded; spiritual symbol of worldly corruption."
      }
    },

    nineveh: {
      overview: "Nineveh was the ancient royal capital of the Neo-Assyrian Empire, situated on the eastern bank of the Tigris River opposite modern Mosul, Iraq. Spanning over 1,800 acres protected by fifteen miles of massive limestone and mudbrick walls with fifteen monumental gates, Nineveh was one of the largest metropolises of antiquity, housing over 120,000 inhabitants.\n\nKnown across the ancient Near East for its military ferocity and conquests, Nineveh was the target of the reluctant prophet Jonah's divine commission: 'Arise, go to Nineveh, that great city, and cry against it; for their wickedness is come up before me' (Jonah 1:2). When Jonah delivered his blunt warning ('Yet forty days, and Nineveh shall be overthrown'), an unprecedented national repentance unfolded. The King of Nineveh arose from his throne, took off his royal robe, covered himself in sackcloth, sat in ashes, and proclaimed a total fast for both humans and beasts, crying mightily unto God. Jehovah saw their genuine repentance and spared the city, demonstrating that His redeeming mercy extends to all gentiles who turn to Him in humility.",
      teachings: {
        teacher: "The Prophet Jonah; later the Prophet Nahum",
        audience: "The King of Nineveh, nobles, citizens, and imperial soldiers",
        whatWasTaught: "God's judgments against violence and brutality; the universal scope of divine mercy; that true repentance averts destruction; and that God values every human soul and creation.",
        whyTaught: "To teach Israel that God's covenant love is not ethnically exclusive, but extends to all who repent.",
        context: "The crowded avenues and royal palaces of the Assyrian imperial capital.",
        howAccepted: "Immediate, wholehearted national repentance from the king down to the humblest citizen.",
        passages: ["Jonah 1-4","Nahum 1-3","Matthew 12:41"]
      },
      scriptures: [
        v("Jonah 1:2", "Arise, go to Nineveh, that great city, and cry against it; for their wickedness is come up before me.", ot("jonah", "1", "2")),
        v("Jonah 3:5", "So the people of Nineveh believed God, and proclaimed a fast, and put on sackcloth, from the greatest of them even to the least of them.", ot("jonah", "3", "5")),
        v("Jonah 4:11", "And should not I spare Nineveh, that great city, wherein are more than sixscore thousand persons that cannot discern between their right hand and their left hand; and also much cattle?", ot("jonah", "4", "11"))
      ],
      peopleAndCovenant: "• The Prophet Jonah: Reluctant messenger taught the depths of God's universal compassion.\n\n• The King of Nineveh: Exemplar of royal humility who led his entire empire in sackcloth and fasting.\n\n• The Inhabitants of Nineveh: Commended by Jesus Christ in the New Testament for repenting at the preaching of Jonah.\n\n• King Sennacherib: Assyrian emperor whose royal palace was built here following his failed siege of Jerusalem.",
      archaeologyAndHistory: "• Kuyunjik Tell: Excavated by Sir Austen Henry Layard; uncovered Sennacherib's 'Palace Without Rival' with over two miles of carved stone bas-reliefs depicting military campaigns.\n\n• Library of Ashurbanipal: Over 30,000 cuneiform clay tablets discovered on site, preserving the Epic of Gilgamesh, Enuma Elish, and ancient royal annals.\n\n• City Walls & Mashki Gate: Massive stone fortification ramparts and gateway reconstructed at modern Mosul.",
      hebrewInfo: {
        root: "נינוה (Nineveh)",
        strongs: "H5210",
        vocalized: "נִינְוֵה",
        translit: "Nineveh",
        significance: "Cuneiform pictograph depicts a fish inside a house, eerily foreshadowing Jonah's miraculous sign."
      }
    },

    ur: {
      overview: "Ur of the Chaldees, an illustrious Sumerian metropolis located along the Euphrates River near the Persian Gulf, was one of the cradle cities of human civilization. Renowned for its monumental brick ziggurat dedicated to the moon god Nanna/Sin, Ur was a wealthy urban center of astronomy, trade, and polytheistic culture.\n\nIn this idolatrous environment, the young patriarch Abraham was born. As restored in the Book of Abraham, Abraham was not content with pagan darkness: 'finding there was greater happiness and peace and rest for me, I sought for the blessings of the fathers, and the right whereunto I should be ordained to administer the same' (Abraham 1:2). When his father Terah and the idolatrous priests of Elkenah, Libnah, and Pharaoh bound Abraham upon an altar to offer him as a human sacrifice, Abraham cried unto God. Jehovah broke down the altar, loosed his bonds, and commanded him: 'Get thee out of thy country, and from thy kindred... unto a land that I will shew thee' (Abraham 2:3; Genesis 12:1). Abraham departed Ur, beginning the sacred covenant journey to Canaan.",
      teachings: {
        teacher: "Jehovah to Abraham; Abraham's witness against idolatry",
        audience: "Abraham; Terah and his household; the idolatrous Mesopotamian culture",
        whatWasTaught: "The superiority of the patriarchal priesthood over man-made idols; deliverance through prayer; leaving worldly security to walk by covenant faith.",
        whyTaught: "To rescue Abraham from idolatry and human sacrifice, establish the covenant lineage of the House of Israel, and restore temple blessings received anciently by Adam and Enoch.",
        context: "The temple precinct and ziggurat court of ancient Ur.",
        howAccepted: "The pagan priests attempted to kill Abraham; Terah repented temporarily and fled with him to Haran.",
        passages: ["Abraham 1:1-20","Abraham 2:1-5","Genesis 11:27-32","Acts 7:2-4"]
      },
      scriptures: [
        v("Abraham 1:2", "And, finding there was greater happiness and peace and rest for me, I sought for the blessings of the fathers, and the right whereunto I should be ordained to administer the same; having been myself a follower of righteousness...", pgp("abr", "1", "2")),
        v("Abraham 1:15-16", "And as they lifted up their hands upon me, that they might offer me up and take away my life, behold, I lifted up my voice unto the Lord my God, and the Lord hearkened and heard... and broke down the altar of Elkenah...", pgp("abr", "1", "15")),
        v("Genesis 11:31", "And Terah took Abram his son, and Lot the son of Haran his son's son, and Sarai his daughter in law... and they went forth with them from Ur of the Chaldees, to go into the land of Canaan.", ot("gen", "11", "31"))
      ],
      peopleAndCovenant: "• Abraham: Faithful seeker of righteousness who received the patriarchal priesthood.\n\n• Sarah: Matriarch who shared Abraham's perilous journey from Mesopotamia.\n\n• Terah: Father of Abraham who struggled between idolatry and covenant.\n\n• Lot: Nephew who accompanied Abraham on his pilgrimage.",
      archaeologyAndHistory: "• Great Ziggurat of Ur: Massive stepped temple tower built by King Ur-Nammu (~2100 BC), perfectly preserved in modern Tell el-Muqayyar, Iraq.\n\n• Royal Tombs of Ur: Excavated by Sir Leonard Woolley (1922–1934); uncovered breathtaking gold daggers, lapis lazuli headdresses, and cylinder seals confirming the immense wealth of Ur during Abraham's era.\n\n• Sumerian Cuneiform Contracts: Confirming the advanced legal, economic, and agricultural systems of the city.",
      hebrewInfo: {
        root: "אור (Ur - light / flame)",
        strongs: "H218",
        vocalized: "אוּר כַּשְׂדִּים",
        translit: "Ur Kasdim",
        significance: "Literally 'Light of the Chaldees', ironic symbol of the dawn of covenant light emerging out of pagan darkness."
      }
    },

    haran: {
      overview: "Haran, nestled along the Balikh River in upper Mesopotamia (modern southeastern Turkey near the Syrian border), was an ancient commercial hub at the crossroads between the Tigris-Euphrates valleys, Syria, and the Mediterranean coast. Built along major caravan highways, Haran was a secondary center of moon worship, sharing deep cultural ties with Ur.\n\nHere Abraham, Sarah, Terah, and Lot settled after leaving Ur of the Chaldees. Following Terah's death in Haran, the Lord appeared to seventy-five-year-old Abraham with the foundational call: 'Get thee out of thy country, and from thy kindred, and from thy father's house, unto a land that I will shew thee: And I will make of thee a great nation, and I will bless thee... and in thee shall all families of the earth be blessed' (Genesis 12:1–3; Abraham 2:3–11). Decades later, Abraham's servant Eliezer returned to Haran to find Rebekah at the well as a covenant wife for Isaac. Later still, Jacob fled from Esau to Haran, arriving at the house of his uncle Laban. Here Jacob served twenty years for Rachel and Leah, and here were born eleven of the twelve sons who became the Patriarchs of the Twelve Tribes of Israel.",
      teachings: {
        teacher: "Jehovah to Abraham; Jacob in his dealings with Laban",
        audience: "Abraham's family and the extended patriarchal household",
        whatWasTaught: "The Abrahamic Covenant: land, posterity, priesthood, and blessing the earth; integrity in the face of deception; divine prospering through covenant vows.",
        whyTaught: "To move Abraham into the Promised Land and establish the twelve sons of Jacob as the foundation of the House of Israel.",
        context: "The bustling caravan oasis and pastoral grazing lands of Paddan-Aram.",
        howAccepted: "Abraham obeyed without hesitation; Rebekah stepped forward in faith ('I will go'); Jacob persevered until blessed.",
        passages: ["Genesis 12:1-5","Genesis 24:1-67","Genesis 28:10; 29:1-35","Abraham 2:1-15"]
      },
      scriptures: [
        v("Abraham 2:9-11", "And I will make of thee a great nation, and I will bless thee above measure... and in thee (that is, in thy priesthood) and in thy seed... shall all the families of the earth be blessed.", pgp("abr", "2", "9")),
        v("Genesis 12:4", "So Abram departed, as the Lord had spoken unto him; and Lot went with him: and Abram was seventy and five years old when he departed out of Haran.", ot("gen", "12", "4")),
        v("Genesis 29:1", "Then Jacob went on his journey, and came into the land of the people of the east.", ot("gen", "29", "1"))
      ],
      peopleAndCovenant: "• Abraham & Sarah: Lived here until summoned by God to enter Canaan.\n\n• Rebekah: Chosen by divine sign at the well of Haran to be the mother of thousands of millions.\n\n• Jacob: Labored twenty years for Laban, marrying Leah and Rachel.\n\n• The Eleven Sons of Jacob: Reuben, Simeon, Levi, Judah, Dan, Naphtali, Gad, Asher, Issachar, Zebulun, and Joseph born here in Paddan-Aram.\n\n• Laban: Brother of Rebekah whose household idols were challenged by Jacob's faith.",
      archaeologyAndHistory: "• Tell Haran & Ancient Mudbrick Beehive Houses: Distinctive conical adobe structures still standing in modern Harran, preserving ancient vernacular architecture.\n\n• Mari Cuneiform Tablets: 18th-century BC tablets referencing Haran as an active trading kingdom, naming Nahor and other biblical patriarchal names as regional tribes.\n\n• Roman Carrhae: Site of the famed Battle of Carrhae (53 BC) where Roman triumvir Crassus was defeated.",
      hebrewInfo: {
        root: "חרן (Charan - parched / crossroads)",
        strongs: "H2771",
        vocalized: "חָרָן",
        translit: "Charan",
        significance: "Designates an ancient crossroads or highway, representing the pivot point where Abraham crossed into the Promised Land."
      }
    },

    "mount-nebo": {
      overview: "Mount Nebo (2,680 ft), the northern crest of the Abarim range in modern western Jordan, rises dramatically above the northeastern shore of the Dead Sea directly opposite Jericho. Overlooking the Jordan Valley, Mount Nebo was the final staging ground and sanctuary of Moses after forty years of leading the Children of Israel through the wilderness.\n\nUpon this windswept summit, Jehovah commanded the 120-year-old prophet to view the entirety of the Promised Land: from Gilead unto Dan, all Naphtali, Ephraim, Manasseh, Judah unto the Western Sea, and the palm oasis of Jericho. Though not permitted to cross Jordan due to the rebellion at Meribah, Moses beheld the covenant fulfillment with eyes undimmed and natural force unabated (Deuteronomy 34:1–7). Here Moses gave his final blessing to the twelve tribes and was translated into the heavenly presence of God: 'and no man knoweth of his sepulchre unto this day' (Deut 34:6; Alma 45:19). From the plains below Mount Nebo, Joshua stepped forth filled with the spirit of wisdom, leading Israel across Jordan into their inheritance.",
      teachings: {
        teacher: "Moses to Joshua and the children of Israel",
        audience: "The entire second generation of Israel assembled on the plains of Moab below",
        whatWasTaught: "The charge to be strong and of a good courage; that the Lord goes before them; the eternal blessings upon each tribe; and that God's promises never fail.",
        whyTaught: "To conclude the mortal stewardship of the lawgiver and pass prophetic authority to Joshua to lead Israel into Canaan.",
        context: "The high desert summit overlooking the promised inheritance.",
        howAccepted: "Israel wept for Moses thirty days on the plains of Moab, then hearkened unto Joshua.",
        passages: ["Deuteronomy 32:48-52","Deuteronomy 33:1-29","Deuteronomy 34:1-12","Alma 45:19"]
      },
      scriptures: [
        v("Deuteronomy 34:1-4", "And Moses went up from the plains of Moab unto the mountain of Nebo, to the top of Pisgah, that is over against Jericho. And the Lord shewed him all the land... And the Lord said unto him, This is the land which I sware unto Abraham, unto Isaac, and unto Jacob, saying, I will give it unto thy seed.", ot("deut", "34", "1")),
        v("Deuteronomy 33:1", "And this is the blessing, wherewith Moses the man of God blessed the children of Israel before his death.", ot("deut", "33", "1")),
        v("Alma 45:19", "Moses was taken up by the Spirit, or buried by the hand of the Lord, even as Moses was taken up by the Spirit; so we suppose he was also received up into heaven.", "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/45?lang=eng#19")
      ],
      peopleAndCovenant: "• Moses: Prophet, lawgiver, and friend of God translated upon Mount Nebo.\n\n• Joshua: Ordained by Moses by the laying on of hands, filled with wisdom to conquer Canaan.\n\n• Eleazar the High Priest: Succeeded Aaron to minister before the Ark of the Covenant.\n\n• The Children of Israel: Transformed from slaves into a covenant commonwealth poised to enter the Promised Land.",
      archaeologyAndHistory: "• Memorial Church of Moses (Siyagha): 4th–6th century Byzantine basilica excavated by the Franciscan Custody of the Holy Land, featuring vibrant mosaics of monastic life and desert wildlife.\n\n• Brazen Serpent Monument: Modern bronze cross and serpent sculpted by Gian Paolo Fantoni, symbolizing Christ lifted up on the cross (Numbers 21; John 3:14).\n\n• Panoramic Dead Sea Vista: Unobstructed view spanning the Judean hills, Jerusalem, and Mount of Olives on clear days.",
      hebrewInfo: {
        root: "נבו (Nevo - height / summit)",
        strongs: "H5015",
        vocalized: "הַר נְבוֹ",
        translit: "Har Nevo",
        significance: "Associated with Mount Pisgah ('the cleft / peak'), the threshold between forty years of wilderness and covenant rest."
      }
    },

    "mount-ararat": {
      overview: "Mount Ararat (16,854 ft / 5,137 m), towering as a dormant volcanic massif in the Armenian Highlands (ancient kingdom of Urartu), is venerated across sacred history as the resting sanctuary of Noah's Ark following the Great Flood.\n\nHere, amid the cleansing waters of a renewed creation, Noah's ark rested upon the mountains of Ararat on the seventeenth day of the seventh month (Genesis 8:4). Upon departing the ark, the righteous patriarch Noah erected an altar unto the Lord, offering burnt offerings of clean beasts and fowls. In return, Jehovah made an everlasting covenant with Noah, his seed, and every living creature never again to destroy all flesh with a flood, consecrating the rainbow as the celestial token of this eternal peace (Genesis 9:12–17). In Latter-day Saint revelation (Moses 8), Noah is identified as the angel Gabriel, an ordained prophet who preached the gospel of Jesus Christ with unwavering diligence in an age of violence and rebellion.",
      teachings: {
        teacher: "Noah (the Angel Gabriel) and Jehovah",
        audience: "The antediluvian world before the flood; Noah's family and subsequent generations after the flood",
        whatWasTaught: "Repentance, baptism, and faith in Jesus Christ; the sanctity of life; the solemnity of covenant altars; and God's rainbow token of mercy and enduring covenant peace.",
        whyTaught: "To preserve a righteous seed upon the earth and establish the eternal covenant that the earth will be sanctified and prepared for celestial glory.",
        context: "The mountain crest emerging above the floodwaters of baptismal renewal.",
        howAccepted: "Noah's sons (Shem, Ham, Japheth) and their wives re-populated the ancient world, re-establishing worship of the true God.",
        passages: ["Genesis 8:4, 20-22", "Genesis 9:12-17", "Moses 8:19-30"]
      },
      scriptures: [
        v("Genesis 8:4, 20-22", "And the ark rested in the seventh month, on the seventeenth day of the month, upon the mountains of Ararat... And Noah builded an altar unto the Lord; and took of every clean beast, and of every clean fowl, and offered burnt offerings on the altar.", ot("gen", "8", "4")),
        v("Genesis 9:12-17", "And God said, This is the token of the covenant which I make between me and you and every living creature that is with you... I do set my bow in the cloud, and it shall be for a token of a covenant between me and the earth.", ot("gen", "9", "12")),
        v("Moses 8:19-30", "And the Lord ordained Noah after his own order, and commanded him that he should go forth and declare his Gospel unto the children of men, even as it was given unto Enoch... saying, Believe and repent of your sins and be baptized in the name of Jesus Christ.", pgp("moses", "8", "19"))
      ],
      peopleAndCovenant: "• Noah (Gabriel): Patriarch, prophet, and ark-builder who found grace in the eyes of the Lord.\n\n• The Matriarch (Noah's Wife): Stood faithfully with Noah through century-long preparation and the renewal of creation.\n\n• Shem, Ham, and Japheth: Sons of Noah who received covenant promises to re-establish civilization in righteousness.\n\n• The Lord Jehovah: Made the everlasting rainbow covenant, affirming eternal divine mercy to mankind.",
      archaeologyAndHistory: "• Biblical Urartu (Ararat): Ancient Iron Age kingdom situated around Lake Van, Mount Ararat, and modern Armenia, matching the Hebrew term 'Ararat' (Assyrian Urartu).\n\n• Durupinar Site & Tendürek Formation: Geological boat-shaped formation south of Mount Ararat studied by biblical archaeologists and geologists.\n\n• Summit Plateau & Ice Cap: The permanent glacier of Mount Ararat reaching 16,854 feet, long subject to high-altitude exploration and historical expeditions.",
      hebrewInfo: {
        root: "אררט (Urartu / high land)",
        strongs: "H780",
        vocalized: "הָרֵי אֲרָרָט",
        translit: "Harei Ararat",
        significance: "Literally 'Mountains of Ararat' (plural in the Hebrew text), denoting the highlands of ancient Urartu where new life began after the Flood."
      }
    },

    "valley-of-lemuel": {
      overview: "The Valley of Lemuel (geographically identified with the dramatic granite canyon of Wadi Tayyib al-Ism on the eastern coast of the Gulf of Aqaba) was the first major encampment of Lehi and his family after fleeing Jerusalem around 600 BC in the commencement of the reign of King Zedekiah.\n\nTraversing the rugged Judean wilderness and descending to the borders near the Red Sea, Lehi traveled three days into the desert before pitching his tent in this valley, situated beside a river of continually flowing water that emptied into the Red Sea (Gulf of Aqaba). Here the righteous patriarch built an altar of stones and offered burnt offerings and sacrifice unto Jehovah, thanking God for preserving his household from the impending destruction of Jerusalem. Standing beside the flowing stream and the sheer granite cliffs, Lehi admonished his elder sons: 'O that thou mightest be like unto this river, continually running into the fountain of all righteousness!' and unto Lemuel: 'O that thou mightest be like unto this valley, firm and steadfast, and immovable in keeping the commandments of the Lord!' (1 Nephi 2:9–10).\n\nFrom this base camp, Lehi's sons were twice sent back to Jerusalem: first to obtain the sacred Plates of Brass from Laban, and second to invite Ishmael and his family to join the colony. Here also Lehi walked out of his tent door one morning and discovered upon the ground a curious brass sphere of curious workmanship—the Liahona—whose dual spindles pointed the way they should travel in the wilderness.",
      teachings: {
        teacher: "The Prophet Lehi and Nephi",
        audience: "Sariah, Laman, Lemuel, Sam, and later the family of Ishmael and Zoram",
        whatWasTaught: "Firmness and steadfastness in covenant keeping; reliance upon the Lord in trials; gratitude through altar sacrifice; and obedience to divine directors (the Liahona).",
        whyTaught: "To overcome the murmuring of Laman and Lemuel, unify the extended family, and prepare them for the arduous trans-Arabian journey.",
        context: "A towering red-granite canyon oasis bordered by palm trees and perennial spring water on the Red Sea coast.",
        howAccepted: "Nephi and Sam believed with all their hearts; Laman and Lemuel murmured continually, lamenting the riches left behind in Jerusalem, yet obeyed out of fear of divine chastening.",
        passages: ["1 Nephi 2:4-16","1 Nephi 3:1-7","1 Nephi 8:1-38","1 Nephi 16:10-12"]
      },
      messianicProphecy: {
        title: "Lehi's Vision of the Tree of Life & The Messiah in the Valley of Lemuel",
        prophecy: "1 Nephi 8; 1 Nephi 10:4–11; 1 Nephi 11:13–33",
        typology: "• The River of Water: Pointed to the fountain of living waters, which is the love of God shed abroad in the hearts of men (1 Nephi 11:25).\n\n• The Tree of Life: Represented the love of God and the condescension of Jesus Christ into mortality to redeem mankind.\n\n• Prophecy of the Messiah: Lehi explicitly prophesied in this valley that six hundred years from his departure from Jerusalem, God would raise up a Messiah among the Jews—the Lamb of God, who should be baptized by John in Bethabara beyond Jordan and take away the sins of the world (1 Nephi 10:4–10).\n\n• The Iron Rod: The word of God leading straight to Christ, protecting the travelers against the mists of darkness.",
        fulfillment: "Fulfilled in the mortal ministry, baptism, teachings, suffering, and resurrection of Jesus Christ in the New Testament."
      },
      lifeBackThen: {
        housing: "Lehi and his family lived in goatskin or woven camel-hair tents ('And my father dwelt in a tent', 1 Nephi 2:15). In ancient nomadic fashion, tents were pitched near freshwater springs, with separate quarters for men and women, centered around outdoor stone cooking hearths.",
        foodAndDiet: "Transitioning from affluent Jerusalem townhouse living to desert wilderness survival, the family ate wild game (gazelle, ibex, quail) hunted with composite bows and slings, dried dates from desert palms, unleavened camp bread baked over hot coals, and water carried in goatskin bags.",
        cityGatesAndJustice: "In the wilderness camp, governance operated strictly under patriarchal authority. Lehi sat as patriarch and priest, gathering his sons to hear his visions, settle disputes between brothers, and offer sacrifice upon stone altars.",
        clothingAndTrades: "Garments were simplified for desert survival: woolen tunics, leather sandals, and heavy cloaks to guard against searing midday heat and freezing desert nights. Nephi maintained metallurgical skills, smelting ore and carving wooden bows.",
        sacredFeasts: "Lehi offered burnt offerings and sacrifices on altars of unhewn stone (Exodus 20:25) to celebrate deliverance, observing the sacred Sabbath and giving thanks to Jehovah."
      },
      scriptures: [
        v("1 Nephi 2:6-7", "And he came down by the borders near the shore of the Red Sea; and he traveled in the wilderness in the borders which are nearer the Red Sea... and he built an altar of stones, and made an offering unto the Lord, and gave thanks unto the Lord our God.", "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/2?lang=eng#6"),
        v("1 Nephi 2:9-10", "And when my father saw that the waters of the river emptied into the fountain of the Red Sea, he spake unto Laman, saying: O that thou mightest be like unto this river, continually running into the fountain of all righteousness! And he also spake unto Lemuel: O that thou mightest be like unto this valley, firm and steadfast, and immovable...", "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/2?lang=eng#9"),
        v("1 Nephi 16:10", "And it came to pass that as my father arose in the morning, and went forth to the tent door, to his great astonishment he beheld upon the ground a round ball of curious workmanship; and it was of fine brass.", "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/16?lang=eng#10")
      ],
      peopleAndCovenant: "• Lehi & Sariah: Devout prophetic parents who obeyed the divine mandate to leave all their wealth in Jerusalem.\n\n• Nephi: Faithful son who sought the Lord, received confirmation of his father's words, and obtained the Brass Plates.\n\n• Sam: Believing brother who hearkened unto Nephi's testimony.\n\n• Laman & Lemuel: Murmuring elder sons whose hearts remained anchored to the material comforts of Jerusalem.\n\n• Zoram: Servant of Laban who covenanted with Nephi and joined the colony in the wilderness.",
      archaeologyAndHistory: "• Wadi Tayyib al-Ism (Valley of Lemuel): Located 73 miles south of Aqaba on the Saudi Arabian Red Sea coast; matches every textual criterion in 1 Nephi: a sheer canyon valley with towering granite cliffs, perennial freshwater springs flowing continually into the Red Sea, and ancient date palms.\n\n• Altar of Unhewn Stones: Ancient Bedouin and Semitic tradition of building sacrificial cairns from field stones without metal tools, matching Mosaic law (Exodus 20:25).\n\n• Incense Route Connectivity: Positioned near the ancient frankincense and caravan route running parallel to the Red Sea.",
      hebrewInfo: {
        root: "למואל (L'mu'el - dedicated to God)",
        strongs: "H3927",
        vocalized: "בִּקְעַת לְמוּאֵל",
        translit: "Bik'at L'mu'el",
        significance: "Lemuel is a biblical name appearing in Proverbs 31:1, meaning 'belonging unto God'."
      }
    },

    "nahom": {
      overview: "Nahom (geographically and archaeologically identified with the Nihm tribal region and Wadi Jawf in northern Yemen) was a pivotal waystation on the ancient Incense Route traversed by Lehi and his colony around 590 BC.\n\nFollowing the miraculous guidance of the Liahona, Lehi's company journeyed for many days in a south-southeastern direction through the Arabian wilderness. At Nahom, the faithful patriarch Ishmael passed away of old age and hardship and was buried in the place called Nahom. The burial caused intense grief among Ishmael's daughters, who wept and mourned exceedingly for their father in the desert, murmuring against Lehi and Nephi and desiring to return to Jerusalem (1 Nephi 16:34–36).\n\nNahom stands as one of the most remarkable archaeological confirmations of the Book of Mormon text. In 1997, German archaeologists excavating the Bar'an temple at ancient Marib (capital of the Queen of Sheba's kingdom) unearthed three stone limestone altars dated to the 7th–6th centuries BC (the exact era of Lehi). The altars bear identical South Arabian inscriptions donating them by 'Bicathar, son of Sawad, son of Naw'um, the Nihmite'—using the root NHM (Nihm/Nahom) to designate this exact geographical region. The text of 1 Nephi does not say Lehi named this place (unlike the Valley of Lemuel or Shazer), but records that Ishmael was buried in the place which 'was called' Nahom, proving it was an already existing local toponym.",
      teachings: {
        teacher: "The Lord through the Liahona and Nephi",
        audience: "The mourning daughters of Ishmael, Laman, Lemuel, and the sons of Ishmael",
        whatWasTaught: "Endurance through sorrow; trusting the promises of God in bereavement; resisting rebellion when physical suffering intensifies.",
        whyTaught: "To preserve the colony from self-destruction during deep grief and prevent them from returning to the doomed city of Jerusalem.",
        context: "An ancient desert burial ground along the Yemeni trade corridor.",
        howAccepted: "Laman and the sons of Ishmael plotted to slay Lehi and Nephi; the voice of the Lord spoke out of the cloud and chastened them severely, leading them to repent.",
        passages: ["1 Nephi 16:34-39"]
      },
      messianicProphecy: {
        title: "The Comfort of the Redeemer in the Valley of Death",
        prophecy: "1 Nephi 16:34–39; Isaiah 25:8; Psalm 23:4",
        typology: "• The Root Meaning of Nahom: The Semitic root N-H-M denotes 'to mourn, groan, or comfort' (e.g. Nahum). In their deepest sorrow, God comforted the faithful through prophetic words.\n\n• The Resurrection Anticipated: Though Ishmael was buried in the desert far from his homeland, the covenant promises assured that the Redeemer would swallow up death in victory.",
        fulfillment: "Fulfilled in Jesus Christ, who is the Resurrection and the Life (John 11:25), wiping away all tears from mourning eyes."
      },
      lifeBackThen: {
        housing: "Temporary travel encampments with low goat-hair pavilions anchored with wooden pegs, sheltered beneath acacia trees and rocky overhangs from scorching desert sun.",
        foodAndDiet: "Raw meat seasoned with herbs, desert honey, wild berries, and scarce water drawn from ancient deep desert cisterns and wells maintained along caravan routes.",
        cityGatesAndJustice: "Burial customs involved solemn lamentations, rending of garments, wrapping the deceased in linen cloths, and interring the body in stone cairns or rock-hewn tombs marked with inscribed stelae.",
        clothingAndTrades: "Weathered wool garments repaired with sinew, leather sandals worn down by hundreds of miles of foot travel across stony deserts and volcanic basalt plains (harrat).",
        sacredFeasts: "Even amid intense sorrow, the family maintained daily prayer, consulting the Liahona whose writing changed according to their faith and diligence."
      },
      scriptures: [
        v("1 Nephi 16:34", "And it came to pass that Ishmael died, and was buried in the place which was called Nahom.", "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/16?lang=eng#34"),
        v("1 Nephi 16:35", "And it came to pass that the daughters of Ishmael did mourn exceedingly, because of the loss of their father, and because of their afflictions in the wilderness...", "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/16?lang=eng#35")
      ],
      peopleAndCovenant: "• Ishmael: Faithful patriarch from Jerusalem who gave his daughters in marriage to Lehi's sons and died in covenant faith.\n\n• Daughters of Ishmael: Wept bitterly for their father, yet persevered to become mothers of nations in the Promised Land.\n\n• Nephi: Bore prophetic testimony and was delivered from death when his brothers plotted against him.",
      archaeologyAndHistory: "• The NHM Inscribed Altars (Yemen): Three limestone altars dated to 700–600 BC discovered at the Bar'an temple in Marib, Yemen, inscribed with 'NHM' (Nihmite/Nahom).\n\n• The Nihm Tribal Territory: Located 25 miles northeast of Sana'a, Yemen, this region has retained the name Nihm for over 2,500 years.\n\n• The Eastward Turn: From Nahom, 1 Nephi 17:1 states they 'did travel nearly eastward from that time forth', perfectly matching the frankincense trail turning east across southern Oman to the coast.",
      hebrewInfo: {
        root: "נחם (Nacham - comfort / sorrow)",
        strongs: "H5151",
        vocalized: "נַחֹם",
        translit: "Nachom",
        significance: "Conveys both mourning/groaning and divine comfort/consolation."
      }
    },

    "bountiful-arabia": {
      overview: "Bountiful in the Old World (geographically identified with the lush tropical enclave of Khor Rori / Wadi Sayq on the Dhofar coast of southern Oman) was the paradisiacal coastal sanctuary where Lehi's colony arrived after eight grueling years in the Arabian desert (~582 BC).\n\nEmerging from the desolate sands of the Rub' al Khali (Empty Quarter), the travelers were overwhelmed with joy to behold a coastline teeming with much fruit, wild honey, freshwater lagoons, towering cliffs, and large timber trees. They named the land Bountiful because of its much fruit. Here the great waters (the Arabian Sea / Indian Ocean) stretched endlessly before them, which they called Irreantum, meaning 'many waters' (1 Nephi 17:5).\n\nAt Bountiful, the voice of the Lord came unto Nephi, commanding: 'Arise, and get thee into the mountain.' Upon the mountain summit, the Lord instructed Nephi: 'Thou shalt construct a ship, after the manner which I shall show thee, that I may carry thy people across these waters.' Though mocked by Laman and Lemuel who argued that Nephi lacked the skill of a shipbuilder, Nephi was filled with the power of God, shocked his brothers with divine power when they sought to throw him into the sea, melted ore from the hills to fashion iron tools, and built an exquisite, ocean-worthy vessel 'not after the manner of men, but after the manner which the Lord had shown' (1 Nephi 18:1–4). Here also Jacob and Joseph were born unto Lehi and Sariah in the wilderness.",
      teachings: {
        teacher: "The Lord Jehovah and the Prophet Nephi",
        audience: "The entire colony of Lehi, Sariah, Nephi, Sam, Laman, Lemuel, and Ishmael's family",
        whatWasTaught: "Divine revelation in craftsmanship; faith overcoming human limitation; how the Lord led Moses through the Red Sea and can lead them across the ocean.",
        whyTaught: "To build the vessel of salvation and prepare the covenant seed to cross the great deep to the Promised Land.",
        context: "A verdant tropical coastal cove nestled against the Arabian Sea.",
        howAccepted: "After being shocked by divine power, Laman and Lemuel fell down to worship Nephi; the entire family united to help construct the ship and gather provisions.",
        passages: ["1 Nephi 17:1-55","1 Nephi 18:1-8"]
      },
      messianicProphecy: {
        title: "The Ship of Deliverance Typifying the Ark of Salvation (Jesus Christ)",
        prophecy: "1 Nephi 17:5–18; 1 Nephi 18:1–4; 2 Nephi 9:21–23",
        typology: "• Construction 'Not After the Manner of Men': The ship was built solely according to divine instruction, even as the Plan of Salvation and the Atonement were authored solely by God, not human philosophy.\n\n• Crossing the Great Waters (Irreantum): Typifies the soul's journey through mortal tribulations safely into the celestial promised land, steered by the Liahona (Word of Christ).\n\n• The Living Rock & Smelted Ore: Nephi fashioned tools from raw ore, typifying Christ the Rock from whom all strength and means of salvation are derived.",
        fulfillment: "Fulfilled in Jesus Christ, who guides believers through the storms of life into eternal rest."
      },
      lifeBackThen: {
        housing: "Encampments set along freshwater lagoons beside coastal beaches, sheltered by palm fronds and wild fruit trees beneath towering seaside cliffs.",
        foodAndDiet: "Rich bounty of wild date honey, figs, pomegranates, coastal fish, sea fowl, fresh spring water, and wild meats after years of desert starvation.",
        cityGatesAndJustice: "The mountain served as the sacred sanctuary where Nephi went to pray and commune with Jehovah face to face.",
        clothingAndTrades: "Nephi operated an active metallurgical forge, making bellows from goatskins, striking flint for fire, and smelting iron ore from the coastal hills to fashion axes, hammers, and adzes for shipbuilding.",
        sacredFeasts: "Unbounded joy, thanksgiving sacrifices, and prayers of gratitude after enduring eight years of desert wanderings."
      },
      scriptures: [
        v("1 Nephi 17:5", "And we did come to the land which we called Bountiful, because of its much fruit and also wild honey; and all these things were prepared of the Lord that we might not perish.", "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/17?lang=eng#5"),
        v("1 Nephi 17:8", "And it came to pass that the Lord spake unto me, saying: Thou shalt construct a ship, after the manner which I shall show thee, that I may carry thy people across these waters.", "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/17?lang=eng#8"),
        v("1 Nephi 18:4", "And it came to pass that after I had finished the ship, according to the word of the Lord, my brethren beheld that it was good, and that the workmanship thereof was exceedingly fine...", "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/18?lang=eng#4")
      ],
      peopleAndCovenant: "• Nephi: Master builder, prophet, and leader directed by the Lord to construct the transoceanic ship.\n\n• Lehi & Sariah: Rejoiced in their advanced age; Sariah gave birth to Jacob and Joseph in Bountiful.\n\n• Jacob & Joseph: Younger sons born in the wilderness who received the holy priesthood from Nephi.\n\n• The Entire Colony: Boarded the vessel laden with fruit, meat, honey, seeds, and the Brass Plates.",
      archaeologyAndHistory: "• Khor Rori & Wadi Sayq (Dhofar, Oman): The only coastal location in the entire 1,400-mile Arabian Peninsula matching every feature of Bountiful: large timber trees, iron ore deposits, fresh water, wild honey, fruit, cliffs dropping into deep ocean water.\n\n• Ancient Frankincense Port of Sumhuram (Khor Rori): Historical shipping port confirming that maritime trade and shipbuilding existed in this exact region from ancient times.\n\n• Monsoon Microclimate (Khareef): The southwestern summer monsoons create a lush green tropical oasis in Dhofar, unique in all of Arabia.",
      hebrewInfo: {
        root: "שפע (Shefa - abundance / overflow)",
        strongs: "H7654",
        vocalized: "אֶרֶץ הַשֶּׁפַע",
        translit: "Eretz HaShefa",
        significance: "Expresses extraordinary agricultural abundance and divine providence."
      }
    },

    bethlehem: {
      overview: "Bethlehem (Beit-Lechem, 'House of Bread'), situated five miles south of Jerusalem in the fertile Judean hill country 2,540 feet above sea level, is immortalized across sacred history as the ancestral city of Ruth and Boaz, the royal birthplace of King David, and the prophesied birthplace of the Messiah.\n\nAnciently known as Ephrath ('Fruitful'), Rachel died here in childbirth and was buried along the roadside (Genesis 35:19). Generations later, the impoverished Moabitess widow Ruth gleaned in the barley and wheat fields of Bethlehem. There the righteous landowner Boaz acted as her kinsman-redeemer (Go'el), marrying Ruth to raise up the lineage that produced Jesse and King David. Here David tended his father's sheep in the rocky pastures, composed heartfelt psalms, and was anointed king of Israel by the prophet Samuel (1 Samuel 16:1–13).\n\nCenturies later, the prophet Micah delivered his immortal Messianic oracle: 'But thou, Beth-lehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting' (Micah 5:2).",
      teachings: {
        teacher: "The Prophet Samuel, Boaz, and the Prophet Micah",
        audience: "Jesse and his sons, the elders of Bethlehem, and the House of David",
        whatWasTaught: "The Lord seeth not as man seeth; for man looketh on the outward appearance, but the Lord looketh on the heart (1 Sam 16:7); the duty of the kinsman-redeemer; and the promised coming of the Eternal Ruler.",
        whyTaught: "To anoint the righteous shepherd-king David and prepare Israel for the birth of the Great Redeemer.",
        context: "Terraced vineyards, olive groves, and barley fields nestled in the Judean hills.",
        howAccepted: "David was anointed amidst his brethren; Boaz redeemed Ruth at the city gate before ten elders; Micah's prophecy became the cornerstone of Messianic expectation.",
        passages: ["Genesis 35:19","Ruth 2:1-12; 4:9-17","1 Samuel 16:1-13","Micah 5:2"]
      },
      messianicProphecy: {
        title: "The Prophecy of the Bread of Life Born in the House of Bread",
        prophecy: "Micah 5:2; Ruth 4:14–17; Matthew 2:1–6; Luke 2:4–11",
        typology: "• Beit-Lechem ('House of Bread'): The profound prophetic name: Jesus Christ, the Living Bread who came down from heaven (John 6:51), was born in the 'House of Bread'.\n\n• Boaz the Kinsman-Redeemer (Go'el): Under Mosaic law, the Go'el had the duty to redeem lost family inheritance and marry the widow. Boaz typified Jesus Christ, our ultimate Kinsman-Redeemer who bought us back with His own blood.\n\n• The Shepherd-King David: David was raised from tending sheep in Bethlehem to shepherd Israel, foreshadowing Christ the Good Shepherd who layeth down His life for the sheep.",
        fulfillment: "Fulfilled when Mary and Joseph traveled from Nazareth to Bethlehem to be taxed, and Mary brought forth her firstborn Son, wrapping Him in swaddling clothes and laying Him in a manger (Luke 2)."
      },
      lifeBackThen: {
        housing: "Stone-built farmsteads with lower animal grottos carved into soft limestone hillsides (the typical stable/manger setting) and upper living quarters for the family.",
        foodAndDiet: "Wheat and barley bread, parched corn (roasted grain), fresh goat cheese, clusters of raisins, fresh figs, and wine from terraced vineyards.",
        cityGatesAndJustice: "The city gate was where Boaz summoned the nearer kinsman before ten elders, taking off his shoe as the legal token of covenant redemption (Ruth 4:7–8).",
        clothingAndTrades: "Shepherds carried wooden staffs, leather slings, and waterskins, wearing rough wool mantles to guard against mountain predators (lions, bears) by night.",
        sacredFeasts: "Celebration of the barley and wheat harvest festivals (Pentecost/Shavuot) with thanksgiving offerings and leaving corners of fields for the poor and stranger."
      },
      scriptures: [
        v("Micah 5:2", "But thou, Beth-lehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting.", ot("micah", "5", "2")),
        v("Ruth 4:14", "And the women said unto Naomi, Blessed be the Lord, which hath not left thee this day without a kinsman, that his name may be famous in Israel.", ot("ruth", "4", "14")),
        v("1 Samuel 16:7", "But the Lord said unto Samuel, Look not on his countenance, or on the height of his stature; because I have refused him: for the Lord seeth not as man seeth; for man looketh on the outward appearance, but the Lord looketh on the heart.", ot("1-sam", "16", "7"))
      ],
      peopleAndCovenant: "• Ruth & Boaz: Exemplars of covenant loyalty (chesed) whose marriage formed the royal Messianic lineage.\n\n• Jesse & King David: The Bethlehemite shepherd anointed by Samuel to be king of Israel.\n\n• Rachel: Beloved matriarch buried at the entrance of Bethlehem.",
      archaeologyAndHistory: "• Church of the Nativity (4th century): Commissioned by Emperor Constantine above the ancient cave venerated since the 2nd century as Christ's birthplace.\n\n• Bethlehem Bulla (7th century BC): Ancient Paleo-Hebrew clay seal impression discovered in Jerusalem inscribed: 'In the 7th year, from Bethlehem to the King', proving Bethlehem's active administrative status in the Kingdom of Judah.\n\n• Shepherds' Fields (Beit Sahour): Fertile pastures east of Bethlehem where sheep intended for temple sacrifice were reared.",
      hebrewInfo: {
        root: "בית / לחם (Beit / Lechem - House of Bread)",
        strongs: "H1035",
        vocalized: "בֵּית לֶחֶם",
        translit: "Beit Lechem",
        significance: "Prophetically points to Jesus Christ the Living Bread of Life."
      }
    },

    "mount-sinai": {
      overview: "Mount Sinai (Mount Horeb / Jebel Musa), towering 7,497 feet above the rugged granite wilderness of the southern Sinai peninsula, is the supreme covenant sanctuary of the Old Testament where Jehovah revealed the Law, the Ten Commandments, and the pattern of the Tabernacle to Moses.\n\nHere Moses first encountered the presence of God at the Burning Bush, being told: 'Put off thy shoes from off thy feet, for the place whereon thou standest is holy ground' (Exodus 3:5). Three months after departing Egyptian slavery, the Children of Israel encamped before Mount Sinai. Amid smoke, earthquakes, flashes of lightning, and the deafening blast of the trumpet of God, Jehovah descended upon the mount in fire (Exodus 19). Moses ascended into the thick darkness where God was, fasting forty days and forty nights to receive the Two Tablets of Stone inscribed by the finger of God.\n\nUpon Mount Sinai, God revealed the entire blueprint of the Tabernacle—the Ark of the Covenant, the Mercy Seat, the Golden Menorah, the Altar of Incense, and the Levitical priesthood robes—commanding: 'And let them make me a sanctuary; that I may dwell among them' (Exodus 25:8). Centuries later, the beleaguered prophet Elijah fled to this very mountain (Horeb), where the Lord revealed Himself not in the wind, earthquake, or fire, but in a 'still small voice' (1 Kings 19:12).",
      teachings: {
        teacher: "The Lord Jehovah to Moses and the Children of Israel",
        audience: "Over six hundred thousand men of Israel with women, children, and the mixed multitude",
        whatWasTaught: "The Ten Commandments (Decalogue); holiness unto the Lord; the moral, civil, and ceremonial Law; the covenant: 'ye shall be unto me a kingdom of priests, and an holy nation' (Exodus 19:6).",
        whyTaught: "To sanctify a redeemed people, establish the Mosaic Covenant, and provide a schoolmaster to bring Israel unto Christ (Galatians 3:24).",
        context: "The smoking, quaking granite summit of Mount Sinai surrounded by the vast desert plain of Er-Rahah.",
        howAccepted: "All the people answered together: 'All that the Lord hath spoken we will do' (Exodus 19:8). Yet while Moses delayed on the mountain, they made and worshipped the Golden Calf, broken by Moses and forgiven through his intercession.",
        passages: ["Exodus 3:1-12","Exodus 19:1-25","Exodus 20:1-17","Exodus 24:1-18","Exodus 25:8-22","1 Kings 19:8-14"]
      },
      messianicProphecy: {
        title: "The Law as a Schoolmaster Pointing to the Great High Priest & Propitiation",
        prophecy: "Exodus 25:17–22; Leviticus 16:15; Galatians 3:24; Hebrews 9:11–14",
        typology: "• The Mercy Seat (Kapporet): The solid gold lid covering the Ark of the Covenant where the high priest sprinkled atoning blood, typifying Christ our propitiation (hilasterion) who satisfies justice with mercy.\n\n• The High Priest's Breastplate (Choshen): Bore twelve precious gems inscribed with the names of the twelve tribes over his heart, prefiguring Christ who bears all His covenant children upon His heart before the Father.\n\n• The Blood of the Covenant (Exodus 24:8): Moses sprinkled half the blood on the altar and half on the people, declaring: 'Behold the blood of the covenant'—explicitly cited by Jesus at the Last Supper: 'This is my blood of the new testament' (Matthew 26:28).\n\n• Moses as Mediator: Fasted forty days and interceded for the sinful people, crying: 'Yet now, if thou wilt forgive their sin--; and if not, blot me, I pray thee, out of thy book' (Exodus 32:32), typifying Christ the ultimate Intercessor.",
        fulfillment: "Fulfilled when Jesus Christ offered Himself as the ultimate unblemished sacrifice, rending the temple veil and establishing the New Covenant."
      },
      lifeBackThen: {
        housing: "The vast Israelite encampment organized precisely by tribe around the central Tabernacle in the Plain of Er-Rahah, dwelling in linen and leather tents.",
        foodAndDiet: "Manna from heaven falling daily with the morning dew (tasting like wafers made with honey), quails brought by the wind, and living water gushing from the smitten rock.",
        cityGatesAndJustice: "Moses sat from morning until evening judging the people until Jethro advised him to ordain rulers of thousands, hundreds, fifties, and tens to handle smaller matters (Exodus 18).",
        clothingAndTrades: "Israel's clothes and sandals did not wear out during the forty years (Deuteronomy 29:5). Master artisans Bezalel and Aholiab were filled with the Spirit of God in wisdom to carve wood, weave fine linen, and work gold, silver, and brass for the Tabernacle.",
        sacredFeasts: "The daily morning and evening sacrifices, the weekly Sabbath consecrated with a double portion of manna, and the Day of Atonement (Yom Kippur)."
      },
      scriptures: [
        v("Exodus 19:5-6", "Now therefore, if ye will obey my voice indeed, and keep my covenant, then ye shall be a peculiar treasure unto me above all people... And ye shall be unto me a kingdom of priests, and an holy nation.", ot("ex", "19", "5")),
        v("Exodus 20:1-3", "And God spake all these words, saying, I am the Lord thy God, which have brought thee out of the land of Egypt, out of the house of bondage. Thou shalt have no other gods before me.", ot("ex", "20", "1")),
        v("Exodus 25:8", "And let them make me a sanctuary; that I may dwell among them.", ot("ex", "25", "8")),
        v("1 Kings 19:11-12", "And, behold, the Lord passed by, and a great and strong wind rent the mountains... but the Lord was not in the wind: and after the wind an earthquake... and after the fire a still small voice.", ot("1-kgs", "19", "11"))
      ],
      peopleAndCovenant: "• Moses: Prophet and lawgiver who spoke with God face to face as a man speaketh unto his friend (Exodus 33:11).\n\n• Aaron: Anointed the first High Priest of the Aaronic Priesthood.\n\n• Jethro (Reuel): High Priest of Midian who counselled Moses on judicial organization.\n\n• Bezalel & Aholiab: Divinely inspired master craftsmen of the Tabernacle.\n\n• Elijah: Prophet who journeyed forty days to Horeb to hear the still small voice.",
      archaeologyAndHistory: "• Monastery of Saint Catherine (6th century AD): Founded by Emperor Justinian at the foot of Mount Sinai; holds the world's oldest continually operating library and ancient biblical manuscripts (including Codex Sinaiticus).\n\n• Plain of Er-Rahah: An immense natural amphitheater of two square miles at the base of Jebel Musa capable of accommodating hundreds of thousands of people encamped before the mountain.\n\n• Inscribed Proto-Sinaitic Inscriptions (Serabit el-Khadim): Ancient alphabetic inscriptions from the 15th century BC found in the Sinai mines, confirming early Northwest Semitic alphabetic writing during Moses' era.",
      hebrewInfo: {
        root: "סיני / חרב (Sinai / Chorev - thorny / desolate)",
        strongs: "H5514",
        vocalized: "הַר סִינַי (חֹרֵב)",
        translit: "Har Sinai (Chorev)",
        significance: "The Mountain of God where heaven touched earth and delivered the covenant law."
      }
    }
  };

  // Helper function to build direct Church of Jesus Christ scripture URLs
  function buildChurchScriptureLink(ref) {
    if (!ref) return "https://www.churchofjesuschrist.org/study/scriptures?lang=eng";
    const clean = ref.trim();

    const bookMap = [
      { regex: /^Genesis/i, path: "ot/gen" },
      { regex: /^Exodus/i, path: "ot/ex" },
      { regex: /^Leviticus/i, path: "ot/lev" },
      { regex: /^Numbers/i, path: "ot/num" },
      { regex: /^Deut(?:eronomy)?/i, path: "ot/deut" },
      { regex: /^Joshua/i, path: "ot/josh" },
      { regex: /^Judges/i, path: "ot/judg" },
      { regex: /^Ruth/i, path: "ot/ruth" },
      { regex: /^1\s*Samuel/i, path: "ot/1-sam" },
      { regex: /^2\s*Samuel/i, path: "ot/2-sam" },
      { regex: /^1\s*Kings/i, path: "ot/1-kgs" },
      { regex: /^2\s*Kings/i, path: "ot/2-kgs" },
      { regex: /^1\s*Chronicles/i, path: "ot/1-chr" },
      { regex: /^2\s*Chronicles/i, path: "ot/2-chr" },
      { regex: /^Ezra/i, path: "ot/ezra" },
      { regex: /^Nehemiah/i, path: "ot/neh" },
      { regex: /^Esther/i, path: "ot/esth" },
      { regex: /^Job/i, path: "ot/job" },
      { regex: /^Psalms?/i, path: "ot/ps" },
      { regex: /^Proverbs/i, path: "ot/prov" },
      { regex: /^Ecclesiastes/i, path: "ot/eccl" },
      { regex: /^Song of Solomon/i, path: "ot/song" },
      { regex: /^Isaiah/i, path: "ot/isa" },
      { regex: /^Jeremiah/i, path: "ot/jer" },
      { regex: /^Lamentations/i, path: "ot/lam" },
      { regex: /^Ezekiel/i, path: "ot/ezek" },
      { regex: /^Daniel/i, path: "ot/dan" },
      { regex: /^Hosea/i, path: "ot/hosea" },
      { regex: /^Joel/i, path: "ot/joel" },
      { regex: /^Amos/i, path: "ot/amos" },
      { regex: /^Obadiah/i, path: "ot/obad" },
      { regex: /^Jonah/i, path: "ot/jonah" },
      { regex: /^Micah/i, path: "ot/micah" },
      { regex: /^Nahum/i, path: "ot/nahum" },
      { regex: /^Habakkuk/i, path: "ot/hab" },
      { regex: /^Zephaniah/i, path: "ot/zeph" },
      { regex: /^Haggai/i, path: "ot/hag" },
      { regex: /^Zechariah/i, path: "ot/zech" },
      { regex: /^Malachi/i, path: "ot/mal" },
      { regex: /^Moses/i, path: "pgp/moses" },
      { regex: /^Abraham/i, path: "pgp/abr" },
      { regex: /^1\s*Nephi/i, path: "bofm/1-ne" },
      { regex: /^2\s*Nephi/i, path: "bofm/2-ne" },
      { regex: /^Alma/i, path: "bofm/alma" },
      { regex: /^D&C|^Doctrine and Covenants/i, path: "dc-testament/dc" }
    ];

    for (const b of bookMap) {
      if (b.regex.test(clean)) {
        const match = clean.match(/(\d+):(\d+)/);
        if (match) {
          return `https://www.churchofjesuschrist.org/study/scriptures/${b.path}/${match[1]}?lang=eng#${match[2]}`;
        }
        const chapMatch = clean.match(/(\d+)/);
        if (chapMatch) {
          return `https://www.churchofjesuschrist.org/study/scriptures/${b.path}/${chapMatch[1]}?lang=eng`;
        }
        return `https://www.churchofjesuschrist.org/study/scriptures/${b.path}?lang=eng`;
      }
    }
    return "https://www.churchofjesuschrist.org/study/scriptures?lang=eng";
  }

  // Parses ALL semicolon-separated scriptures from city data so every passage has its own card
  function parseAllScriptures(scriptureHighlight, cityName, significance) {
    if (!scriptureHighlight) return [];
    const rawList = scriptureHighlight.split(";").map(s => s.trim()).filter(Boolean);
    return rawList.map(ref => {
      let text = `${cityName} in ${ref}: ${significance}`;
      if (typeof SCRIPTURE_TRANSLATIONS !== "undefined" && SCRIPTURE_TRANSLATIONS.db && SCRIPTURE_TRANSLATIONS.db[ref]) {
        text = SCRIPTURE_TRANSLATIONS.db[ref].kjv;
      }
      return {
        ref: ref,
        text: text,
        churchLink: buildChurchScriptureLink(ref)
      };
    });
  }

  // Automated Universal Enrichment Engine:
  // Dynamically fills in any missing dossier fields from CITIES_DATA so every site has a complete 6-tab dossier!
  window.getPlaceDossier = function(placeId) {
    if (PLACE_DOSSIERS[placeId]) {
      return PLACE_DOSSIERS[placeId];
    }

    const city = (typeof CITIES_DATA !== "undefined") ? CITIES_DATA.find(c => c.id === placeId) : null;
    if (!city) return null;

    const allPassages = city.scriptureHighlight ? city.scriptureHighlight.split(";").map(s => s.trim()).filter(Boolean) : [];

    // Generate complete dossier dynamically from scriptural data with ALL scriptures represented
    return {
      overview: `${city.name} (${city.hebrew} • ${city.transliteration}), meaning "${city.meaning}", was a vital biblical location in the ${city.region} during the ${city.era} (~${Math.abs(city.startYear)} BC).\n\n${city.significance}\n\nKey scriptural events here revealed God's covenant dealings with the House of Israel and demonstrated the eternal truths preserved in holy scripture.`,
      teachings: {
        teacher: `Prophets, Patriarchs, and Leaders of Israel at ${city.name}`,
        audience: `The inhabitants of ${city.region} and the House of Israel`,
        whatWasTaught: `Faith in Jehovah, obedience to covenant law, and the blessings of remembering the God of Abraham, Isaac, and Jacob.`,
        whyTaught: `To turn the hearts of the people toward the Lord and prepare them for covenant blessings.`,
        context: `Historical biblical setting in ${city.region}.`,
        howAccepted: `Revered by the faithful and recorded in holy scripture for future generations.`,
        passages: allPassages
      },
      scriptures: parseAllScriptures(city.scriptureHighlight, city.name, city.significance),
      messianicProphecy: {
        title: `Typology & Prophecies of Jesus Christ the Coming Messiah at ${city.name}`,
        prophecy: city.scriptureHighlight || "Genesis to Malachi",
        typology: `The sacred events, covenant altars, and prophetic witnesses at ${city.name} testify of Jesus Christ. As recorded in the Book of Mormon, 'all things which have been given of God from the beginning of the world, unto man, are the typifying of him' (2 Nephi 11:4). Every morning and evening sacrifice under the law of Moses pointed forward to the infinite and eternal sacrifice of the Son of God.`,
        fulfillment: `Fulfilled in Jesus Christ, the promised Messiah and Redeemer of Israel, who came to fulfill the law, redeem His people from bondage, and bring everlasting righteousness.`
      },
      lifeBackThen: {
        housing: `In ${city.region}, families dwelt in four-room stone and mudbrick dwellings centered around courtyard hearths, with flat plaster rooftops used for cooling in the summer evening, drying figs and flax, and family prayer.`,
        foodAndDiet: `Daily sustenance centered on the biblical Seven Species: stone-ground wheat and barley bread baked in clay tabun ovens, olives and olive oil, grapes and raisins, dried figs, pomegranates, and date honey, supplemented by goat milk and curds.`,
        cityGatesAndJustice: `Civic justice and commerce were conducted by elders seated in the multi-chambered stone city gate, where disputes were heard, contracts were sealed with clay bullae impressions, and silver shekels were weighed in balances.`,
        clothingAndTrades: `Inhabitants wore wool and linen tunics (kethonet) with blue-corded fringes (tzitzit) according to the law of Moses, practicing weaving, pottery, sheep-shearing, and terraced farming.`,
        sacredFeasts: `Families rested on the seventh-day Sabbath (Shabbat) and journeyed along the ridge routes to celebrate the three pilgrimage festivals: Passover (Pesach), the Feast of Weeks (Shavuot), and the Feast of Tabernacles (Sukkot).`
      },
      peopleAndCovenant: `• Patriarchs & Prophets: Righteous leaders, kings, and matriarchs associated with ${city.name} who walked in covenant faith with God.\n\n• The People of Israel: Inhabitants who witnessed the power and providence of Jehovah in ${city.region}.`,
      archaeologyAndHistory: `• Archaeological Excavations: Discoveries in ${city.region} reveal Middle Bronze and Iron Age Israelite occupation, fortification walls, and pottery confirming the biblical timeline.\n\n• Historical Chronology: Active biblical landmark from ~${Math.abs(city.startYear)} BC through ~${Math.abs(city.endYear)} BC.`,
      hebrewInfo: {
        root: city.transliteration,
        strongs: city.strongs || "H0000",
        vocalized: city.hebrew,
        translit: city.transliteration,
        significance: city.meaning
      }
    };
  };

  if (typeof window !== "undefined") {
    window.PLACE_DOSSIERS = PLACE_DOSSIERS;
  }
})();
