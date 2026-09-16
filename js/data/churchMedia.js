/**
 * OLD TESTAMENT GEOGRAPHY - CHURCH SCRIPTURE & BIBLE VIDEOS
 * Official Church media, Old Testament video presentations,
 * and Pearl of Great Price resources from ChurchofJesusChrist.org.
 */

const CHURCH_BIBLE_VIDEOS = [
  {
    id: "creation-fall",
    title: "The Creation & The Fall",
    scriptureRef: "Moses 1-5; Genesis 1-3",
    category: "Pearl of Great Price",
    locations: ["jerusalem", "mount-sinai"],
    description: "God reveals to Moses the spiritual and temporal Creation of the earth, the purpose of life, and the Fall of Adam and Eve as a necessary step in the Plan of Salvation.",
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/1?lang=eng"
  },
  {
    id: "enoch-zion",
    title: "Enoch & The City of Zion",
    scriptureRef: "Moses 7",
    category: "Pearl of Great Price",
    locations: ["jerusalem", "mount-moriah"],
    description: "Enoch builds a society of one heart and one mind with no poor among them. The Lord weeps over the wicked, and the righteous city of Zion is taken up into heaven.",
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/7?lang=eng"
  },
  {
    id: "abraham-ur",
    title: "Abraham Delivered from the Altar of Elkenah",
    scriptureRef: "Abraham 1-2",
    category: "Pearl of Great Price",
    locations: ["ur-of-chaldees", "haran"],
    description: "Jehovah delivers Abraham from the sacrificial altar of Elkenah in Ur, conferring upon him the patriarchal priesthood and leading him to Haran and Canaan.",
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/1?lang=eng"
  },
  {
    id: "abraham-isaac",
    title: "The Offering of Isaac on Mount Moriah",
    scriptureRef: "Genesis 22:1-19",
    category: "Patriarchs",
    locations: ["mount-moriah", "jerusalem", "beersheba", "hebron"],
    description: "Abraham obeys the divine command to offer Isaac upon Mount Moriah as a similitude of God the Father offering His Only Begotten Son.",
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/22?lang=eng"
  },
  {
    id: "joseph-egypt",
    title: "Joseph: Forgiving His Brethren in Egypt",
    scriptureRef: "Genesis 37, 45",
    category: "Patriarchs",
    locations: ["dothan", "hebron", "shechem", "rameses-goshen"],
    description: "Sold into Egypt at Dothan, Joseph rises to ruler under Pharaoh and preserves Israel from starvation, saying: 'God did send me before you to preserve life.'",
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/45?lang=eng"
  },
  {
    id: "moses-burning-bush",
    title: "Moses Called at the Burning Bush",
    scriptureRef: "Exodus 3-4; Moses 1",
    category: "Exodus",
    locations: ["mount-sinai"],
    description: "Jehovah calls Moses from the midst of the burning bush on holy ground at Mount Horeb to deliver the Children of Israel from Egyptian bondage.",
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/3?lang=eng"
  },
  {
    id: "red-sea-passover",
    title: "The Passover & Parting of the Red Sea",
    scriptureRef: "Exodus 12, 14",
    category: "Exodus",
    locations: ["rameses-goshen", "mount-sinai"],
    description: "The paschal lamb protects the firstborn of Israel. Moses lifts his rod, and Jehovah parts the Red Sea on dry ground.",
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/14?lang=eng"
  },
  {
    id: "ten-commandments",
    title: "The Law Given at Mount Sinai",
    scriptureRef: "Exodus 19-20",
    category: "Law & Covenant",
    locations: ["mount-sinai"],
    description: "Amid smoke and thunder, God proclaims the Ten Commandments and reveals the pattern of the Tabernacle to Moses.",
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/20?lang=eng"
  },
  {
    id: "joshua-jericho",
    title: "The Fall of the Walls of Jericho",
    scriptureRef: "Joshua 6",
    category: "Conquest",
    locations: ["jericho", "gilgal"],
    description: "Israel crosses the Jordan River and circles the fortified city of Jericho seven times with the Ark of the Covenant until the walls collapse flat.",
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/josh/6?lang=eng"
  },
  {
    id: "ruth-boaz",
    title: "Ruth & Boaz: The Kinsman Redeemer",
    scriptureRef: "Ruth 1-4",
    category: "Covenant Loyalty",
    locations: ["bethlehem", "hebron"],
    description: "Ruth pledges covenant loyalty to Naomi: 'Whither thou goest, I will go.' In the grain fields of Bethlehem, Boaz acts as the kinsman redeemer.",
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/ruth/1?lang=eng"
  },
  {
    id: "david-goliath",
    title: "David and Goliath in the Valley of Elah",
    scriptureRef: "1 Samuel 17",
    category: "Kingdom",
    locations: ["valley-of-elah", "bethlehem", "jerusalem", "gath"],
    description: "Armed with faith, a shepherd's sling, and five smooth stones from the brook, young David slays Goliath in the name of the Lord of Hosts.",
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-sam/17?lang=eng"
  },
  {
    id: "solomon-temple",
    title: "Solomon Dedicates the Temple on Mount Moriah",
    scriptureRef: "1 Kings 8; 2 Chronicles 7",
    category: "Temple",
    locations: ["jerusalem", "mount-moriah"],
    description: "King Solomon completes the First Temple. Fire descends from heaven, and the glory of Jehovah fills the Holy of Holies as a cloud.",
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-kgs/8?lang=eng"
  },
  {
    id: "elijah-carmel",
    title: "Elijah and the Prophets of Baal on Mount Carmel",
    scriptureRef: "1 Kings 18",
    category: "Prophets",
    locations: ["mount-carmel", "samaria"],
    description: "Elijah confronts 450 prophets of Baal. Fire from heaven consumes the water-drenched offering, proving that Jehovah is the only true God.",
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-kgs/18?lang=eng"
  },
  {
    id: "elijah-still-small-voice",
    title: "The Still Small Voice at Mount Horeb",
    scriptureRef: "1 Kings 19",
    category: "Prophets",
    locations: ["mount-sinai", "beersheba"],
    description: "Elijah journeys to Mount Horeb. The Lord is not in the hurricane wind, the earthquake, or the fire, but in a gentle, still small voice.",
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-kgs/19?lang=eng"
  },
  {
    id: "elisha-dothan",
    title: "Chariots of Fire at Dothan",
    scriptureRef: "2 Kings 6",
    category: "Prophets",
    locations: ["dothan", "samaria"],
    description: "Surrounded by the Syrian army, Elisha prays for his servant's eyes to be opened, revealing that the mountain was full of horses and chariots of fire.",
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-kgs/6?lang=eng"
  },
  {
    id: "naaman-jordan",
    title: "Naaman Cleansed in the Jordan River",
    scriptureRef: "2 Kings 5",
    category: "Prophets",
    locations: ["damascus", "samaria"],
    description: "Syrian captain Naaman humbles his pride and dips seven times in the Jordan River according to Elisha's word, and his flesh is restored like a child.",
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-kgs/5?lang=eng"
  },
  {
    id: "daniel-babylon",
    title: "Daniel and the Lions' Den in Babylon",
    scriptureRef: "Daniel 6",
    category: "Exile",
    locations: ["babylon", "susa"],
    description: "Daniel prays toward Jerusalem three times daily despite the royal decree. God sends His angel to shut the lions' mouths.",
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/dan/6?lang=eng"
  },
  {
    id: "esther-susa",
    title: "For Such a Time as This: Queen Esther in Susa",
    scriptureRef: "Esther 4-8",
    category: "Exile & Restoration",
    locations: ["susa"],
    description: "Queen Esther risks her life before King Ahasuerus in the Persian palace of Shushan to deliver her people from Haman's wicked plot.",
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/esth/4?lang=eng"
  },
  {
    id: "nehemiah-walls",
    title: "Nehemiah Rebuilds the Broken Walls of Jerusalem",
    scriptureRef: "Nehemiah 2-6",
    category: "Restoration",
    locations: ["jerusalem"],
    description: "Nehemiah leads the returned exiles to rebuild Jerusalem's charred stone walls in 52 days with a trowel in one hand and a sword in the other.",
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/neh/2?lang=eng"
  }
];

if (typeof window !== "undefined") {
  window.CHURCH_BIBLE_VIDEOS = CHURCH_BIBLE_VIDEOS;
}
