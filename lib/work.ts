export type Metric = { value: string; label: string; context: string };
export type Section = { title: string; body: string };

export type WorkItem = {
  slug: string;
  title: string;
  category: "Marketing" | "Games & Interactive" | "3D & Motion" | "Visual Art";
  depth: "case" | "compact";
  role: string;
  summary: string;
  heroMedia: string;
  accent: string;
  tools: string[];
  metrics?: Metric[];
  sections: Section[];
  gallery: string[];
  externalLinks?: { label: string; href: string }[];
};

export const work: WorkItem[] = [
  {
    slug: "echos-of-her", title: "Echos of Her", category: "Games & Interactive", depth: "case",
    role: "Creative Director · Game Designer · Visual Development",
    summary: "An interactive memory experience that transforms a deeply personal story into a public-facing cultural installation.",
    heroMedia: "/media/echos-poster.webp", accent: "#b88a72", tools: ["Unity", "Blender", "Adobe Creative Suite", "Narrative Design"],
    metrics: [
      { value: "10", label: "Cities", context: "Presented across a touring programme spanning China and international venues." },
      { value: "170 × 18 m", label: "Media façade", context: "Shown on a landmark public LED screen in Hangzhou." },
      { value: "400+", label: "Submissions", context: "Selected from more than four hundred competition entries." },
      { value: "2025", label: "Gold Prize", context: "Gold Prize and Tuzishan finalist recognition." },
    ],
    sections: [
      { title: "Overview", body: "Echos of Her is a narrative-led interactive work about memory, absence and the traces people leave behind. I shaped its visual system, interaction language and public presentation so an intimate story could remain legible at exhibition scale." },
      { title: "Challenge", body: "The experience needed to feel emotionally specific without relying on exposition. It also had to move between a playable screen, award presentation and an enormous urban media façade while preserving a coherent identity." },
      { title: "My Role", body: "I led creative direction, game design, visual development and presentation strategy, connecting the emotional premise to interaction, art direction and the audience journey." },
      { title: "Process", body: "The process moved from memory fragments and visual motifs into interaction prototypes, cinematic compositions and a modular presentation system. Repeated playtests focused on pacing, comprehension and emotional rhythm." },
      { title: "Outcome", body: "The project won a 2025 Gold Prize, became a Tuzishan finalist and was presented across ten cities, including Hangzhou, Milan, Hamburg, Spain and Singapore." },
    ],
    gallery: ["/media/echos-award.webp", "/media/echos-art-1.webp", "/media/echos-art-2.webp", "/media/echos-screen.webp"],
  },
  {
    slug: "lets-build-a-dungeon", title: "Let’s Build a Dungeon", category: "Games & Interactive", depth: "case",
    role: "Game Design · QA · Game Balance · Asset Integration",
    summary: "Commercial game production experience supporting a large-scale management game through design feedback, systematic QA and production-ready content integration.",
    heroMedia: "/media/lets-build-hero.webp", accent: "#8ab76f", tools: ["QA Testing", "Game Balance", "Asset Integration", "Production Documentation"],
    metrics: [{ value: "180K+", label: "Steam wishlists", context: "Project context during my internship at Springloaded." }],
    sections: [
      { title: "Overview", body: "Let’s Build a Dungeon is a commercial game project developed at Springloaded. During my internship, I worked within the production pipeline rather than on a standalone student prototype, learning how design decisions are reviewed, tested and prepared for release." },
      { title: "My Role", body: "My contribution covered game-design support, quality assurance, game-balance feedback and asset integration. I documented issues clearly, reproduced edge cases and helped move content from working files into a dependable game build." },
      { title: "Process", body: "I tested features across repeated play sessions, separated balance observations from technical defects and communicated results in a form that designers and developers could act on. Asset work required equal attention to visual consistency and production constraints." },
      { title: "What I Learned", body: "The project strengthened my understanding of commercial production: player experience is shaped not only by big ideas, but by thousands of small, well-tested decisions and reliable collaboration across disciplines." },
    ],
    gallery: ["/media/lets-build-gameplay.webp", "/media/lets-build-hero.webp"],
  },
  {
    slug: "rollercoaster-tycoon-wonderworks", title: "RollerCoaster Tycoon: Wonderworks", category: "Games & Interactive", depth: "case",
    role: "QA · Game Balance · Trailer Production Support",
    summary: "Commercial production work connecting quality assurance, balance feedback and trailer support for a recognisable theme-park game franchise.",
    heroMedia: "/media/rct-hero.webp", accent: "#e3563b", tools: ["QA Testing", "Game Balance", "Trailer Production", "Cross-functional Review"],
    sections: [
      { title: "Overview", body: "RollerCoaster Tycoon: Wonderworks combines the readable pleasure of park building with the demands of a commercial production pipeline. My internship contribution focused on the details that make systems feel coherent and marketing footage feel trustworthy." },
      { title: "My Role", body: "I supported quality assurance and game-balance review, then assisted with trailer production. This meant evaluating the experience both as a player and as communication: what works, what reads clearly and what best represents the product." },
      { title: "Process", body: "I recorded reproducible issues, reviewed balance and pacing, and helped identify visually strong gameplay moments for presentation. The work required close attention to both system behaviour and the audience-facing image of the game." },
      { title: "Takeaway", body: "The project showed me how product quality and creative marketing reinforce one another. A convincing trailer begins with genuine player-facing value, then frames it with clarity and rhythm." },
    ],
    gallery: ["/media/rct-gameplay.webp", "/media/rct-hero.webp"],
  },
  {
    slug: "meat-lover", title: "Meat Lover", category: "Marketing", depth: "case",
    role: "Creative Marketing · Content Strategy · Game Design",
    summary: "A deliberately strange cutting-game concept turned into a fast, measurable social launch through positioning, content design and community feedback.",
    heroMedia: "/media/meat-hero.webp", accent: "#ff623f", tools: ["Unity", "RedNote", "Content Strategy", "Analytics"],
    metrics: [
      { value: "70K+", label: "Views", context: "Debut post reach on RedNote." },
      { value: "1.6K+", label: "Likes", context: "Organic response to the initial launch creative." },
      { value: "~500", label: "Followers", context: "Audience growth within three days from a single post." },
      { value: "22.4%", label: "Conversion", context: "39 link clicks from 174 tracked landing-page views." },
    ],
    sections: [
      { title: "Overview", body: "Meat Lover pairs tactile cutting interactions with an absurd, memorable premise. The marketing strategy treated the game’s strangeness as an advantage and built a recognisable voice around quick visual payoffs." },
      { title: "Challenge", body: "With no established audience, the launch needed to communicate the mechanic instantly, earn attention in-feed and convert curiosity into meaningful actions rather than vanity reach." },
      { title: "My Role", body: "I worked across game concept, creative positioning, asset production, post design and performance review. Product decisions and marketing decisions were developed together." },
      { title: "Process", body: "I isolated the most visually satisfying moments, tested concise hooks, built a repeatable content identity and used early audience behaviour to refine the message and call to action." },
      { title: "Outcome", body: "The launch reached more than 70,000 views and 1,600 likes. The project gained roughly 500 followers in three days and recorded a 22.4% tracked conversion rate." },
    ],
    gallery: ["/media/meat-identity.webp", "/media/meat-ui.webp", "/media/meat-social.webp"],
  },
  {
    slug: "soul-vein", title: "Soul Vein", category: "Games & Interactive", depth: "case",
    role: "Game Design · Level Design · Programming · Narrative",
    summary: "A systems-driven student game in which level structure, mechanics and story are designed as one connected player journey.",
    heroMedia: "/media/soul-hero.webp", accent: "#6ec5b7", tools: ["Unity", "C#", "Level Design", "Narrative Design"],
    sections: [
      { title: "Overview", body: "Soul Vein explores how environmental progression can carry both mechanical stakes and narrative meaning. The project was built as a connected design problem rather than a collection of isolated features." },
      { title: "Challenge", body: "The core challenge was balancing readable progression with an atmosphere of uncertainty, while keeping the level, code and narrative flexible enough to evolve together." },
      { title: "My Role", body: "I contributed game design, level design, programming and narrative work, taking ideas from paper logic into playable sequences and iteration." },
      { title: "Process", body: "I mapped player beats, built greybox spaces, implemented interaction logic and revised pacing through repeated playtests. Narrative cues were placed where player attention naturally slowed." },
      { title: "Outcome", body: "The final prototype demonstrates a coherent player journey in which space, system and story reinforce one another, and reflects my ability to work across creative and technical boundaries." },
    ],
    gallery: ["/media/soul-level.webp", "/media/soul-gameplay.webp", "/media/soul-code.webp"],
  },
  {
    slug: "personal-rednote", title: "Personal RedNote", category: "Marketing", depth: "compact", role: "Content Strategy · Audience Growth · Copywriting",
    summary: "An ongoing publishing practice used to test hooks, visual formats and audience behaviour through direct social content.", heroMedia: "/media/rednote.webp", accent: "#f45b68", tools: ["RedNote", "Content Production", "Copywriting", "Analytics"],
    sections: [
      { title: "Approach", body: "I treat my personal RedNote account as a live creative laboratory: each post tests a specific hook, visual structure or audience promise instead of relying on volume alone." },
      { title: "Contribution", body: "I plan content, write platform-native copy, produce the visuals and review response patterns. The feedback loop informs both future posts and how I position larger creative projects." },
      { title: "Learning", body: "The account strengthened my ability to recognise why people stop, save, respond and return, turning personal publishing into practical audience insight." },
    ], gallery: ["/media/rednote.webp"],
  },
  {
    slug: "reapers-roulette", title: "Reaper’s Roulette", category: "Games & Interactive", depth: "compact", role: "Game Design · Development",
    summary: "A high-pressure interactive concept built around risk, timing and readable player choices.", heroMedia: "/media/reapers.webp", accent: "#a14135", tools: ["Unity", "C#", "Game Design"],
    sections: [
      { title: "Concept", body: "Reaper’s Roulette uses uncertainty as its core dramatic material. The design asks players to read risk quickly and commit to choices under pressure." },
      { title: "Design Focus", body: "I focused on making the rules immediately understandable while preserving suspense through timing, feedback and escalation." },
      { title: "Result", body: "The prototype became a compact study in how clear systems can still produce emotional unpredictability." },
    ], gallery: ["/media/reapers.webp"],
  },
  {
    slug: "untitled-capybara", title: "Untitled Capybara Game", category: "Games & Interactive", depth: "compact", role: "Game Design · Art",
    summary: "A playful capybara-led prototype focused on charm, accessible interaction and rapid iteration.", heroMedia: "/media/capybara.webp", accent: "#d7a66d", tools: ["Unity", "Prototyping", "2D Art"],
    sections: [
      { title: "Concept", body: "This prototype begins with the character appeal of a capybara and builds a low-friction interaction loop around warmth, humour and discovery." },
      { title: "Process", body: "I used rapid prototypes to test whether the central actions felt readable and rewarding before expanding the visual treatment." },
      { title: "Focus", body: "The project explores how a clear personality can guide mechanics, interface tone and the player’s expectations from the first moment." },
    ], gallery: ["/media/capybara.webp"],
  },
  {
    slug: "pengci-grandma", title: "PengCi Grandma", category: "Games & Interactive", depth: "compact", role: "Game Design · Visual Design",
    summary: "A humorous interactive project translating a culturally specific idea into an immediately readable mechanic.", heroMedia: "/media/grandma.webp", accent: "#e6d23f", tools: ["Unity", "Game Design", "Visual Design"],
    sections: [
      { title: "Concept", body: "PengCi Grandma turns a recognisable social trope into an exaggerated playable situation. Humour comes from the gap between the familiar premise and the player’s mechanical response." },
      { title: "Design", body: "I worked on the interaction logic and visual framing so the joke could be understood quickly without a long explanation." },
      { title: "Takeaway", body: "The project is a study in culturally specific communication: context, timing and readable feedback have to arrive together." },
    ], gallery: ["/media/grandma.webp"],
  },
  {
    slug: "shauns-last-escape", title: "Shaun’s Last Escape", category: "Games & Interactive", depth: "compact", role: "Game Design · Development",
    summary: "A compact escape experience that uses environment, pressure and pacing to guide the player.", heroMedia: "/media/shaun.webp", accent: "#dd765a", tools: ["Unity", "C#", "Level Design"],
    sections: [
      { title: "Overview", body: "Shaun’s Last Escape is structured around forward momentum: each space gives the player enough information to act while maintaining pressure." },
      { title: "Level Design", body: "I used landmarks, encounter rhythm and controlled sightlines to guide decisions without relying on constant text instructions." },
      { title: "Result", body: "The project developed my understanding of environmental direction and how level pacing can communicate urgency." },
    ], gallery: ["/media/shaun.webp"],
  },
  {
    slug: "3d-modeling", title: "3D Modeling", category: "3D & Motion", depth: "compact", role: "3D Artist",
    summary: "Hard-surface modeling studies focused on silhouette, material readability and presentation.", heroMedia: "/media/car.webp", accent: "#6b8a9d", tools: ["Maya", "Substance 3D", "Rendering"],
    sections: [
      { title: "Study", body: "This hard-surface vehicle study follows the full path from reference analysis and blockout to refined topology, materials and final presentation." },
      { title: "Craft", body: "I focused on silhouette accuracy, believable wear and material contrast so the model remains readable in both close-up and gameplay-scale views." },
      { title: "Presentation", body: "Lighting and framing were treated as part of the work, not an afterthought, because a finished asset also needs a clear visual argument." },
    ], gallery: ["/media/car.webp"],
  },
  {
    slug: "weapon-animation", title: "Weapon Animation", category: "3D & Motion", depth: "compact", role: "Animator",
    summary: "Animation studies exploring weight, anticipation and responsive first-person motion.", heroMedia: "/media/weapon.webp", accent: "#7798ad", tools: ["Maya", "Animation", "Unity"],
    sections: [
      { title: "Animation Goal", body: "The study explores how first-person weapon motion can communicate weight, readiness and mechanical feedback without obscuring the player’s view." },
      { title: "Process", body: "I built the motion around strong poses, anticipation and controlled follow-through, then reviewed the timing from the gameplay camera rather than only in an animation viewport." },
      { title: "Result", body: "The final sequence balances visual impact with responsiveness and demonstrates animation designed for interaction." },
    ], gallery: ["/media/weapon.webp"],
  },
  {
    slug: "motion-capture", title: "Motion Capture", category: "3D & Motion", depth: "compact", role: "Performer · Motion Editor",
    summary: "A movement study spanning performance capture, cleanup and application in a real-time pipeline.", heroMedia: "/media/mocap.webp", accent: "#7bc8c8", tools: ["Motion Capture", "Maya", "Unity"],
    sections: [
      { title: "Overview", body: "This work follows movement from physical performance through captured data to a usable real-time animation result." },
      { title: "Process", body: "I considered intention and staging during performance, then cleaned the motion with attention to contact, drift and the rhythm of the original action." },
      { title: "Learning", body: "The project connected acting choices with technical cleanup and showed how much character can be preserved through a disciplined pipeline." },
    ], gallery: ["/media/mocap.webp"],
  },
  {
    slug: "bridget", title: "Bridget", category: "Visual Art", depth: "compact", role: "Character Designer",
    summary: "A character design study developed through silhouette, costume language and expressive detail.", heroMedia: "/media/bridget.webp", accent: "#dc6d83", tools: ["Procreate", "Character Design", "Illustration"],
    sections: [
      { title: "Character", body: "Bridget was developed from the outside in: silhouette, costume and gesture establish personality before smaller decorative details are introduced." },
      { title: "Process", body: "I explored proportion and shape variants, then refined the design around a consistent visual language and expressive pose." },
      { title: "Focus", body: "The study strengthened my ability to make narrative information visible through character design alone." },
    ], gallery: ["/media/bridget.webp"],
  },
  {
    slug: "allergy", title: "Allergy", category: "Visual Art", depth: "compact", role: "Visual Artist",
    summary: "A graphic narrative experiment using composition and metaphor to make an internal sensation visible.", heroMedia: "/media/allergy.webp", accent: "#9d7fa7", tools: ["Illustration", "Visual Narrative", "Adobe Creative Suite"],
    sections: [
      { title: "Idea", body: "Allergy visualises an experience that is normally felt rather than seen, using metaphor and image sequence instead of literal explanation." },
      { title: "Visual Language", body: "I used contrast, repetition and changes in density to move the viewer between calm observation and physical discomfort." },
      { title: "Outcome", body: "The work became an exercise in turning an invisible bodily response into a direct and readable visual narrative." },
    ], gallery: ["/media/allergy.webp"],
  },
  {
    slug: "painting", title: "Painting", category: "Visual Art", depth: "compact", role: "Painter",
    summary: "Selected observational and expressive works exploring colour, atmosphere and visual memory.", heroMedia: "/media/painting-1.webp", accent: "#b67e5d", tools: ["Traditional Media", "Digital Painting", "Composition"],
    sections: [
      { title: "Practice", body: "These selected paintings move between observation and interpretation, using colour and composition to retain the atmosphere of a scene rather than simply reproduce it." },
      { title: "Method", body: "I begin with large value and colour relationships, then introduce detail only where it strengthens focus, depth or emotional tone." },
      { title: "Relevance", body: "Painting continues to inform my game and marketing work by sharpening my sense of visual hierarchy, mood and controlled attention." },
    ], gallery: ["/media/painting-1.webp", "/media/painting-2.webp", "/media/painting-3.webp"],
  },
];

const featuredSlugs = ["echos-of-her", "lets-build-a-dungeon", "rollercoaster-tycoon-wonderworks", "meat-lover", "soul-vein"];
export const featured = featuredSlugs.map((slug) => work.find((item) => item.slug === slug)!).filter(Boolean);
export const secondaryWork = work.filter((item) => !featuredSlugs.includes(item.slug));
export const categories = ["All", "Marketing", "Games & Interactive", "3D & Motion", "Visual Art"] as const;

export function getWork(slug: string) { return work.find((item) => item.slug === slug); }
