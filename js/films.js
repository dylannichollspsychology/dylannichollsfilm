/* =============================================================================
   DYLAN NICHOLLS — FILM DATA
   -----------------------------------------------------------------------------
   This is the ONLY file you need to edit to update your work.
   Add, remove, or reorder films here. The Work grid and each film's detail
   page are generated automatically from this list.

   For each film, fill in:
     slug        A short url-friendly id (letters, numbers, hyphens only).
                 This becomes the link, e.g. film.html?film=yaluu — don't
                 change it once a film is live, or old links will break.
     title       The film title.
     year        Release year.
     role        Your role(s), e.g. "Director / Producer".
     production  Who produced it, e.g. "Wandarra Media".
     duration    Runtime, e.g. "27 min" (or leave "" to hide).
     note        Any extra line, e.g. release info (or leave "").
     synopsis    A short paragraph. Keep it to 2–4 sentences.
     youtube     The video ID from your YouTube link.
                 e.g. for youtube.com/watch?v=dQw4w9WgXcQ  ->  youtube: "dQw4w9WgXcQ"
                 (it's also the part after youtu.be/ in a short link)
                 Leave "" and a "Preview coming soon" card shows instead.
     videoNote   Optional label for the video, e.g. "Trailer" (or leave "").
     watch       Optional external link if the film ISN'T on YouTube, e.g. a
                 DocPlay/streaming page. Shows a button on the detail page.
     watchLabel  The button text for the "watch" link, e.g. "Watch on DocPlay".
     thumb       Path to a thumbnail image, e.g. "images/yaluu.jpg".
                 Use a 16:9 image (1280x720 is ideal). Leave "" and — if the
                 film has a YouTube video — its YouTube thumbnail is used
                 automatically; otherwise a styled title placeholder shows.
   =========================================================================== */

const FILMS = [
  {
    slug: "yaluu",
    title: "Yaluu (See You Again)",
    year: "2026",
    role: "Director / Producer",
    production: "Wandarra Media",
    duration: "27 min",
    note: "Released on ABC Compass, 26 April 2026",
    synopsis: "Private William Allan Irwin DCM was a First Nations soldier from Gomeroi country who died for Australia in World War I. William gave his life for a nation that had given him so little. Generations later, his descendant, Peter Milliken, is making the long journey to France to honour him and bring his spirit home. Yaluu — meaning \"See You Again\" — is a Compass Anzac Day special about ancestry, memory, recognition, and the long road back to country for Indigenous ANZACs.",
    youtube: "ziYZb3w5K8M",
    videoNote: "",
    watch: "",
    watchLabel: "",
    thumb: "",
    website: "https://yaluufilm.com/",
    // Optional full credits, shown at the bottom of the film's page.
    // Each row is { role, names: [...] }; add { heading: "..." } for a
    // section break (e.g. "For the ABC"); "note" adds a small aside.
    credits: [
      { role: "Production Company", names: ["Wandarra Media"] },
      { role: "Featuring", note: "in order of appearance",
        names: ["Peter Milliken", "Joe Flick", "Uncle Mervyn Allen",
                "Marie-Paule Bonte", "Kristine Johnson", "Georges Meunier"] },
      { role: "Director / Producer", names: ["Dylan Nicholls"] },
      { role: "Cinematographer / Sound Recordist", names: ["T. Oxford"] },
      { role: "Editor", names: ["Jack Charter"] },
      { role: "Composer", names: ["Genevieve Patrick"] },
      { role: "Sound Designer / Re-Recording Mixer", names: ["Nathan Turnbull"] },
      { role: "Associate Producers", names: ["T. Oxford", "Sophia Carolyn Wallace"] },
      { role: "Additional Sound Recording", names: ["Ivan Ordenes"] },
      { role: "Online Editor", names: ["Rob Sarroff"] },
      { role: "Colourist", names: ["Alina Bermingham"] },
      { heading: "For the ABC" },
      { role: "Executive Producer", names: ["Amanda Collinge"] },
      { role: "Series Producer", names: ["Kim Akhurst"] }
    ]
  },
  {
    slug: "racism-hits-the-field",
    title: "What Happens When Racism Hits the Field?",
    year: "2025",
    role: "Director / Producer / Editor",
    production: "ABC",
    duration: "",
    note: "",
    synopsis: "Made as an impact campaign for the ABC docuseries End Game.",
    youtube: "bClRahYXkcU",
    videoNote: "",
    watch: "",
    watchLabel: "",
    thumb: "",
    credits: [
      { role: "Production Company", names: ["ABC"] },
      { role: "Director / Producer / Editor", names: ["Dylan Nicholls"] },
      { role: "Cinematographer / Sound Recordist", names: ["Dan Schist"] },
      { role: "Executive Producer", names: ["Teri Calder"] }
    ]
  },
  {
    slug: "bringing-his-spirit-home",
    title: "Bringing His Spirit Home",
    year: "2025",
    role: "Director / Producer",
    production: "AFTRS",
    duration: "14 min",
    note: "",
    synopsis: "Bringing His Spirit Home brings to screen the story of Gomeroi man William Allan Irwin DCM, a First Nations soldier who fought during World War I. Blending family history, community voices and creative storytelling, the film sheds light on the contribution of First Nations servicemen.",
    youtube: "zn3PfrxVQO0",
    videoNote: "Trailer",
    watch: "",
    watchLabel: "",
    thumb: "",
    credits: [
      { role: "Production Company", names: ["AFTRS"] },
      { role: "Featuring", note: "in order of appearance",
        names: ["Peter Milliken", "Joe Flick", "Marie-Paule Bonte",
                "Patricia D'Heily", "Jon Haslock", "Uncle Mervyn Allen"] },
      { role: "Director / Producer / Additional Cinematography", names: ["Dylan Nicholls"] },
      { role: "Producer", names: ["Sophia Carolyn Wallace"] },
      { role: "Cinematographer / Sound Recordist / Colourist", names: ["T. Oxford"] },
      { role: "Editor", names: ["Jack Charter"] },
      { role: "Composer", names: ["Genevieve Patrick"] },
      { role: "Sound Supervisor", names: ["Ivan Ordenes"] },
      { role: "Additional Re-Recording Mixer", names: ["Nathan Turnbull"] },
      { role: "Additional Sound Recording", names: ["Ivan Ordenes", "Dylan Nicholls"] },
      { role: "Colourist", names: ["T. Oxford"] }
    ],
    // Festival selections & awards. status "Official Selection" is grouped
    // into a list; anything else (Winner, Finalist, etc.) shows as an award.
    achievements: [
      { status: "Winner", detail: "Best Achievement in Indigenous Filmmaking", festival: "St Kilda Film Festival", year: "2026" },
      { status: "Winner", festival: "Flickerfest International Short Film Festival", year: "2026" },
      { status: "Winner", detail: "People's Choice — Best Short Film", festival: "Poco Film Fest", year: "2026" },
      { status: "Finalist", detail: "First Nations Award", festival: "Sydney Film Festival", year: "2025" },
      { status: "Nominee", detail: "Best Short Form Documentary", festival: "AIDC Awards", year: "2025" },
      { status: "Bronze", detail: "Documentary", festival: "Australian Cinematographers Society (ACS) Awards", year: "2025" },
      { status: "Special Recognition", detail: "CICED Award (Documentary)", festival: "CILECT Prize", year: "2025" },
      { status: "Best Short Film", festival: "Red Poppy Film Festival" },
      { status: "Official Selection", festival: "Māoriland Film Festival", year: "2026" },
      { status: "Official Selection", festival: "Darwin International Film Festival", year: "2026" },
      { status: "Official Selection", festival: "Wairoa Māori Film Festival", year: "2026" },
      { status: "Official Selection", festival: "Native Spirit Film Festival", year: "2025" },
      { status: "Official Selection", festival: "Revelation Perth International Film Festival", year: "2026" },
      { status: "Official Selection", festival: "Heart of Gold International Short Film Festival", year: "2026" },
      { status: "Official Selection", festival: "ReelGood Film Festival", year: "2026" },
      { status: "Official Selection", festival: "Show Me Shorts Film Festival" }
    ]
  },
  {
    slug: "echoes-of-dissent",
    title: "Echoes of Dissent",
    year: "2024",
    role: "Director / Producer",
    production: "AFTRS",
    duration: "8 min",
    note: "",
    synopsis: "In the early 1900s, Anthony Martin Fernando fled to Europe to warn the world about the genocide being committed against Aboriginal people. While most of his calls for help weren't taken seriously at the time, many of his words would prove prophetic over a century later. Through the use of re-enactments and archive, Echoes of Dissent attempts to piece together the fragments of Fernando's life and uncover the legacy of his words. To help bring the spirit of Fernando to life, the film's director enlists his father to play the lead role. With an uncanny resemblance, his father echoes Fernando's words of protest while reflecting on his own experiences as an Aboriginal man growing up in the 1960s.",
    youtube: "NTR7njKvm-M",
    videoNote: "Trailer",
    watch: "",
    watchLabel: "",
    thumb: "",
    credits: [
      { role: "Production Company", names: ["AFTRS"] },
      { role: "Featuring", note: "in order of appearance",
        names: ["David Nicholls (as Anthony Martin Fernando)", "Dylan Nicholls"] },
      { role: "Director / Producer / Narrator", names: ["Dylan Nicholls"] },
      { role: "Producer", names: ["Luke Hodge"] },
      { role: "Cinematographer / Colourist", names: ["T. Oxford"] },
      { role: "Editor", names: ["Jack Charter"] },
      { role: "Production Designer", names: ["Jordan Taylor"] },
      { role: "Additional Cinematography", names: ["Skye Netting"] },
      { role: "1st Camera Assistant", names: ["Dev Kannaya Somu"] },
      { role: "Composer", names: ["Robert Hislop"] },
      { role: "Sound Supervisor", names: ["Liam Dennis"] }
    ]
  },
  {
    slug: "one-in-a-million",
    title: "One in a Million",
    year: "2024",
    role: "Director / Producer",
    production: "AFTRS",
    duration: "12 min",
    note: "",
    synopsis: "One in a Million tells the story of local legend and CPR instructor Dave Winner, who was brought back to life with CPR after suffering a surfing accident. Sustaining a spinal cord injury, Dave spent many months on the road to recovery. Once a fit and healthy Surf Life Saver, Dave was now faced with the reality of a gruelling rehabilitation program. During this recovery, Dave makes it his mission to save others by establishing the Winner Foundation, with the goal to teach free CPR to one million people by the year 2030.",
    youtube: "",
    videoNote: "",
    watch: "https://www.docplay.com/shows/one-in-a-million",
    watchLabel: "Watch on DocPlay",
    thumb: "images/one-in-a-million.jpg",
    credits: [
      { role: "Streaming on", names: ["DocPlay"] },
      { role: "Production Company", names: ["AFTRS"] },
      { role: "Featuring", names: ["David Winner"] },
      { role: "Director / Producer", names: ["Dylan Nicholls"] },
      { role: "Cinematographer / Colourist", names: ["Luke Torrevillas"] },
      { role: "Editor", names: ["Jem Batley"] },
      { role: "Sound Design / Re-Recording Mixer", names: ["Greg Wise"] },
      { role: "Composer", names: ["Gareth Hudson"] }
    ]
  },
  {
    slug: "my-perfect-image",
    title: "My Perfect Image",
    year: "2023",
    role: "Director",
    production: "AFTRS",
    duration: "2 min",
    note: "",
    synopsis: "When Jamie enters a national photography competition, the winning image isn't quite what it seems — it was made by AI. My Perfect Image is a sharp, two-minute provocation about the moment the line between real and artificial starts to blur, asking what becomes of photography, and of art itself, when a machine can conjure the perfect picture.",
    youtube: "l2nAH9RlmiQ",
    videoNote: "",
    watch: "",
    watchLabel: "",
    thumb: "",
    credits: [
      { role: "Featuring", names: ["Jamie Van Leeuwan"] },
      { role: "Director", names: ["Dylan Nicholls"] },
      { role: "Producer", names: ["Susan O'Rourke"] },
      { role: "Cinematographer", names: ["Ali Rezvani"] },
      { role: "Production & Costume Designer", names: ["Elise Zeman"] },
      { role: "Editor", names: ["Adisha Bansal"] },
      { role: "Music", names: ["Kenny King"] },
      { role: "Sound Supervisor", names: ["Kevin Chan"] },
      { role: "First Assistant Camera", names: ["William Besly"] },
      { role: "Data Wrangler", names: ["Luke Torrevillas"] },
      { role: "Sound Recordist", names: ["Kevin Chan"] },
      { role: "Boom Operator", names: ["Kevin Chan"] },
      { role: "First Assistant Director", names: ["Susan O'Rourke"] },
      { role: "Gaffer", names: ["Finbarr Collins"] },
      { role: "Colourist", names: ["Ali Rezvani"] },
      { role: "Re-Recording Mixer", names: ["Kevin Chan"] },
      { role: "Music Recording and Mix Engineer", names: ["Greg Wise"] }
    ]
  },
  {
    slug: "kinnections",
    title: "Kinnections",
    year: "2022",
    role: "Director / Producer / Cinematographer / Editor / Composer",
    production: "Wandarra Media",
    duration: "15 min",
    note: "",
    synopsis: "In the lead-up to the 2022 Koori Knockout, Wiradjuri man Ray Fuller returns home to represent his family and mob in the Dubbo Waratahs Rugby League Knockout 2022. Winning the Dubbo Knockout with the Wiradjuri Kinnections would mean everything to Ray and his family. After falling short two years in a row, will this be the year for the Wiradjuri Kinnections?",
    youtube: "OTmz3U6OmyQ",
    videoNote: "",
    watch: "",
    watchLabel: "",
    thumb: "",
    credits: [
      { role: "Production Company", names: ["Wandarra Media"] },
      { role: "Featuring", note: "in order of appearance",
        names: ["Ray Fuller", "Luke Taylor", "Wiradjuri Kinnections"] },
      { role: "Director / Producer / Editor / Cinematographer / Composer", names: ["Dylan Nicholls"] },
      { role: "Producer", names: ["Luke Taylor"] },
      { role: "Additional Camera", names: ["David N. Nicholls"] }
    ]
  },
  {
    slug: "re-ride",
    title: "Re-Ride",
    year: "2022",
    role: "Director / Producer / Cinematographer / Editor",
    production: "Wandarra Media",
    duration: "5 min",
    note: "",
    synopsis: "Re-Ride is a short film about Peter Halpin's inspiring journey in overcoming alcohol addiction through the rodeo, showing that recovery is possible. One day at a time, Pete overcomes his alcohol addiction through the help of family, friends, and the rodeo culture that embraced him. The rodeo lifestyle helped Pete reign in his alcohol addiction, disciplining his mind and body to improve his mental and physical health, and maintain sobriety.",
    youtube: "pc36x3idcu4",
    videoNote: "",
    watch: "",
    watchLabel: "",
    thumb: "",
    credits: [
      { role: "Production Company", names: ["Wandarra Media"] },
      { role: "Featuring", note: "in order of appearance",
        names: ["Peter Halpin", "Billy Anderson", "Jason Halpin"] },
      { role: "Director / Producer / Editor", names: ["Dylan Nicholls"] },
      { role: "Producer", names: ["Mark Sturmer"] },
      { role: "Camera Operators", names: ["Dylan Nicholls", "Mark Sturmer", "Preeti Phartiyal"] },
      { role: "Assistant Editor", names: ["Mark Sturmer"] }
    ]
  }
];

/* =============================================================================
   ADDITIONAL CREDITS
   -----------------------------------------------------------------------------
   Crew / attachment roles on other people's productions. These appear in the
   "Additional credits" list on the About page only — NOT in the Work grid, and
   they don't get their own detail page (so no slug, synopsis, video, etc.).
   Same fields as above: year, title, role, production, duration, note.
   =========================================================================== */

const EXTRA_CREDITS = [
  {
    year: "2026",
    title: "Intimate Access",
    role: "Additional Camera",
    production: "ABC",
    duration: "27 min",
    note: "Released on ABC Compass, 17 May 2026"
  },
  {
    year: "2026",
    title: "The Search for the Snowy",
    role: "Director's Attachment",
    production: "Good Thing Productions",
    duration: "3 × 1 hour",
    note: "Premiering on NITV 2027"
  }
];

/* =============================================================================
   AWARDS & RECOGNITION  (shown on the About page)
   -----------------------------------------------------------------------------
   Grouped by year. An entry can be a single honour (title + optional note),
   or carry a list of `items` (e.g. a film's festival awards), each with:
     result  "Winner" / "Nominated" / "Honourable Mention…"
     detail  the award/category
     org     the festival or body that gave it
   =========================================================================== */

const AWARDS = [
  {
    year: "2026",
    title: "Bringing His Spirit Home",
    items: [
      { result: "Winner", detail: "Best Achievement in Indigenous Filmmaking", org: "St Kilda Film Festival" },
      { result: "Honourable Mention of the Jury", detail: "Documentary Competition", org: "Flickerfest" },
      { result: "Winner", detail: "Best Short Film", org: "Veterans Film Festival" },
      { result: "Winner", detail: "People's Choice Award", org: "Poco Film Festival" },
      { result: "Nominated", detail: "Best Short Documentary", org: "Australian International Documentary Conference" }
    ]
  }
];
