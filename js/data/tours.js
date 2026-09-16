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
  }
];

if (typeof window !== "undefined") {
  window.TOURS_DATA = TOURS_DATA;
}
