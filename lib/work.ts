export type Metric = { value: string; label: string; context: string };
export type Section = { title: string; body: string };
export type DetailMedia = { src: string; alt: string; caption: string; group: "artwork" | "exhibition" | "materials" };

export type WorkItem = {
  slug: string;
  title: string;
  category: "Marketing" | "Games & Interactive" | "3D & Motion" | "Visual Art";
  depth: "case" | "compact";
  role: string;
  summary: string;
  heroMedia: string;
  videoMedia?: string;
  videoPoster?: string;
  accent: string;
  tools: string[];
  metrics?: Metric[];
  sections: Section[];
  gallery: string[];
  recognition?: string[];
  detailMedia?: DetailMedia[];
  externalLinks?: { label: string; href: string }[];
};

export const work: WorkItem[] = [
  {
    slug: "echos-of-her", title: "Echos of Her", category: "Games & Interactive", depth: "case",
    role: "Creator · Film Director · Digital Artist",
    summary: "A digital art experience honouring the many roles women have carried across eras and cultures—preserving their tenderness, resilience and power through a contemporary visual language.",
    heroMedia: "/media/echos-screen.webp", accent: "#b88a72", tools: ["Unity", "Blender", "Adobe Creative Suite", "Narrative Design"],
    metrics: [
      { value: "10", label: "Cities", context: "Presented across China and international cultural venues." },
      { value: "170 × 18 m", label: "Public screen", context: "Adapted for a landmark-scale LED façade in Hangzhou." },
      { value: "Gold Prize", label: "CDSA 2025", context: "International Media Art Competition." },
      { value: "Finalist", label: "Light Art", context: "Tuzishan International Light Art Festival." },
    ],
    sections: [
      { title: "Overview", body: "Echos of Her places women at the centre of its narrative, tracing the roles and responsibilities they have carried across different eras and cultural contexts. The work moves between intimate portraiture and panoramic digital collage to hold tenderness and strength in the same frame." },
      { title: "Narrative", body: "Women appear as life-givers, resilient workers, creative world-builders, healers, guardians and pioneers. Each figure witnesses change while also helping to drive it, connecting individual memory with a wider cultural history." },
      { title: "Creative Direction", body: "I developed a visual system in which faces, flora, archival textures and symbolic landscapes overlap rather than sit apart. This layered language lets identity and history feel remembered, fragmented and continuously reborn." },
      { title: "Exhibition Design", body: "The composition was designed to travel across very different formats—from a personal screen to gallery presentation and a 170 × 18 metre public LED façade. Panoramic chapters preserve the work’s rhythm while allowing each venue to reveal a different scale of detail." },
      { title: "Outcome", body: "The project received the Gold Prize at the 2025 CDSA International Media Art Competition and was a finalist at the Tuzishan International Light Art Festival. It was exhibited across ten cities, including Hangzhou, Milan, Hamburg, venues in Spain and Singapore." },
    ],
    gallery: ["/media/echos-gold-award-poster.webp", "/media/echos-art-3.webp", "/media/echos-award-ceremony.webp", "/media/echos-screen.webp"],
    recognition: [
      "Gold Prize — 2025 CDSA International Media Art Competition",
      "Finalist — Tuzishan International Light Art Festival",
      "Global exhibition programme across 10 cities",
    ],
    detailMedia: [
      { src: "/media/echos-visual-chapter-01.webp", alt: "A panoramic chapter from Echos of Her with a woman framed by flowers and branches", caption: "Selected visual chapter 01", group: "artwork" },
      { src: "/media/echos-visual-chapter-02.webp", alt: "A panoramic mountain landscape chapter from Echos of Her", caption: "Selected visual chapter 02", group: "artwork" },
      { src: "/media/echos-visual-chapter-03.webp", alt: "A panoramic illustrated chapter centred on a woman in red", caption: "Selected visual chapter 03", group: "artwork" },
      { src: "/media/echos-visual-chapter-04.webp", alt: "A panoramic botanical portrait chapter from Echos of Her", caption: "Selected visual chapter 04", group: "artwork" },
      { src: "/media/echos-visual-chapter-05.webp", alt: "A panoramic archival collage chapter from Echos of Her", caption: "Selected visual chapter 05", group: "artwork" },
      { src: "/media/echos-visual-chapter-06.webp", alt: "A panoramic ink and portrait chapter from Echos of Her", caption: "Selected visual chapter 06", group: "artwork" },
      { src: "/media/echos-award-ceremony.webp", alt: "Sun Yutong accepting recognition at the CDSA award ceremony", caption: "Gold Prize recognition at CDSA 2025", group: "exhibition" },
      { src: "/media/echos-global-exhibition-montage.webp", alt: "A montage showing Echos of Her presented across international venues", caption: "Exhibition documentation across ten cities", group: "exhibition" },
      { src: "/media/echos-global-exhibition-social-01.webp", alt: "Social documentation of Echos of Her on panoramic public screens", caption: "Public presentation documentation", group: "exhibition" },
      { src: "/media/echos-global-exhibition-social-02.webp", alt: "Further social documentation of the project in multiple colourways", caption: "Audience-facing exhibition documentation", group: "exhibition" },
      { src: "/media/echos-gold-award-poster.webp", alt: "Gold Award poster for Echos of Her at the 2025 CDSA competition", caption: "CDSA Gold Award poster", group: "materials" },
      { src: "/media/echos-exhibition-book.webp", alt: "Printed exhibition publication featuring Echos of Her", caption: "Exhibition publication", group: "materials" },
    ],
    externalLinks: [{ label: "View project film", href: "https://drive.google.com/file/d/1joHPeDnchtqoUalaywEgxHl7JLJk2x5k/view?usp=drive_link" }],
  },
  {
    slug: "lets-build-a-dungeon", title: "Let’s Build a Dungeon", category: "Games & Interactive", depth: "case",
    role: "QA · Progression Balance · Quest Implementation · Asset Integration",
    summary: "Commercial game production experience supporting a large-scale management game through systematic QA, progression balancing, quest implementation and production-ready content integration.",
    heroMedia: "/media/lets-build-background-hd.jpg", accent: "#c6ff5a", tools: ["QA Testing", "Progression Balance", "Quest Setup", "Dialogue Import", "Asset Integration"],
    metrics: [
      { value: "180K+", label: "Steam wishlists", context: "Public milestone shared by Springloaded in an official development update." },
      { value: "500", label: "Demo reviews", context: "Public Steam demo review milestone following Steam Next Fest." },
      { value: "4", label: "Game modes", context: "Campaign, Creative, Just Build and Dungeoneering." },
      { value: "14", label: "Languages", context: "Interface and subtitle languages listed on the official Steam page." },
    ],
    sections: [
      { title: "Overview", body: "Let’s Build a Dungeon is a commercial game project developed at Springloaded. During my internship, I worked within the production pipeline rather than on a standalone student prototype, learning how design decisions are reviewed, tested and prepared for release." },
      { title: "My Role", body: "My contribution covered quality assurance, progression and difficulty balancing, quest implementation, dialogue import and asset integration. I documented issues clearly, reproduced edge cases and helped move content into a dependable game build." },
      { title: "Process", body: "I tested repeated progression loops, tuned rating requirements and asset unlocks, imported quest dialogue, configured quest conditions and verified the full player flow in the build." },
      { title: "What I Learned", body: "The project strengthened my understanding of commercial production: player experience is shaped not only by big ideas, but by thousands of small, well-tested decisions and reliable collaboration across disciplines." },
    ],
    gallery: ["/media/lets-build-steam-01.jpg", "/media/lets-build-steam-02.jpg", "/media/lets-build-steam-03.jpg", "/media/lets-build-steam-06.jpg"],
    externalLinks: [
      { label: "View on Steam", href: "https://store.steampowered.com/app/2365790/Lets_Build_a_Dungeon/" },
      { label: "Official development updates", href: "https://steamcommunity.com/app/2365790/allnews/" },
    ],
  },
  {
    slug: "rollercoaster-tycoon-wonderworks", title: "RollerCoaster Tycoon: Wonderworks", category: "Games & Interactive", depth: "case",
    role: "QA · Game Balance · Trailer Scene Building",
    summary: "Commercial production work spanning quality assurance, game balance and the construction of in-game scenes for the announcement trailer of a new entry in the iconic theme-park simulation franchise.",
    heroMedia: "/media/rct-cover-hd.jpg", accent: "#e3563b", tools: ["QA Testing", "Game Balance", "Trailer Production", "Cross-functional Review"],
    metrics: [
      { value: "85K+", label: "Trailer views", context: "Public views on the official Early Access announcement trailer." },
      { value: "1.7K+", label: "YouTube likes", context: "Audience likes on the official announcement trailer." },
      { value: "1:21", label: "Trailer runtime", context: "A concise reveal built around gameplay, personality and product clarity." },
      { value: "Aug 2026", label: "Published", context: "Official public release of the Early Access announcement trailer." },
    ],
    sections: [
      { title: "Overview", body: "RollerCoaster Tycoon: Wonderworks is a new commercial theme-park management game developed by Springloaded and published by Atari. It reimagines the franchise around custom coaster building, guest and staff management, ride tuning and a physics-driven layer of chaos." },
      { title: "My Role", body: "During my May–August 2026 internship at Springloaded, I contributed across quality assurance, game-balance review and building the in-game scenes required for the announcement trailer. The role connected close observation of player-facing systems with the challenge of presenting the game clearly to a wider audience." },
      { title: "QA", body: "I supported the team by testing game builds, identifying inconsistencies and communicating actionable observations. The work required attention to repeatability, system interactions and the difference between a technical issue and a player-experience problem." },
      { title: "Game Balance", body: "I reviewed how progression, rewards and ride behaviour felt in play, approaching balance through clarity, pacing and player expectation. The goal was to help the simulation feel readable while preserving the playful unpredictability at the heart of Wonderworks." },
      { title: "Trailer Scene Building", body: "I built the in-game scenes needed for the announcement trailer, arranging rides, scenery and park layouts so each shot presented the game clearly and supported the trailer’s visual storytelling. My familiarity with the game’s systems helped me construct scenes that were both representative of play and visually readable on screen." },
    ],
    gallery: ["/media/rct-builder-hd.jpg", "/media/rct-chaos-hd.jpg"],
    externalLinks: [
      { label: "Watch announcement trailer", href: "https://www.youtube.com/watch?v=QWsU277r8OM" },
      { label: "View on Steam", href: "https://store.steampowered.com/app/4734550/RollerCoaster_Tycoon_Wonderworks/" },
    ],
  },
  {
    slug: "meat-lover", title: "Meat Lover", category: "Marketing", depth: "case",
    role: "Creative Marketing · Content Strategy · Game Design",
    summary: "A first-person 3D puzzle game turned into a platform-native launch campaign through audience research, playful content experiments and community-led iteration.",
    heroMedia: "/media/meat-hero.webp", accent: "#ef3e2f", tools: ["Game Design", "Content Strategy", "Community Marketing", "Analytics"],
    metrics: [
      { value: "58,512", label: "Exposure", context: "Exposure generated by the single RedNote launch post." },
      { value: "10,544", label: "Views", context: "Content views generated by the same single post." },
      { value: "~500", label: "Followers in 3 days", context: "Audience gained from a single RedNote launch post." },
      { value: "22.4%", label: "One-day conversion", context: "RedNote generated 39 tracked clicks from 174 views." },
    ],
    sections: [
      { title: "Game Concept", body: "Meat Lover is a first-person 3D puzzle game with a lightly unsettling sense of humour. Players cut exact weights of meat, remove fat and manage limited cuts while trying to earn a five-star Meatchelin rating." },
      { title: "Challenge", body: "The game had no established audience and an intentionally strange premise. The launch needed to make the mechanic readable in seconds, reach people beyond the core gaming community and turn attention into genuine player interest." },
      { title: "My Role", body: "I worked across the game concept, creative positioning, content production, community interaction and performance analysis. Product and marketing decisions developed together, so player response could inform both the message and the experience." },
      { title: "Content Strategy", body: "We researched platform behaviour, adapted the creative for each audience and used a hook-first, sell-later approach. Relatable memes and interactive choices opened the conversation before gameplay, development updates and calls to action moved audiences closer to the game." },
      { title: "Outcome", body: "The campaign built a recognisable character identity, an active feedback loop and measurable cross-platform traffic. RedNote was the strongest tracked conversion channel in the one-day comparison, reaching a 22.4% click-through rate." },
    ],
    gallery: ["/media/meat-identity.webp", "/media/meat-ui.webp", "/media/meat-social.webp"],
  },
  {
    slug: "soul-vein", title: "Soul Vein", category: "Games & Interactive", depth: "case",
    role: "Game Design · Level Design · Gameplay Programming · Narrative Design",
    summary: "A top-down puzzle game where players reconnect green paths, restore withered trees and uncover the story of a city that has lost its life.",
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
    slug: "3d-modeling", title: "3D Modeling & Rendering", category: "3D & Motion", depth: "compact", role: "3D Artist · Lighting & Rendering",
    summary: "A hard-surface vehicle study developed from modeling and texturing through atmospheric lighting and final rendering.", heroMedia: "/media/3d-modeling-render.webp", accent: "#6b8a9d", tools: ["Maya", "Substance 3D", "Lighting", "Rendering"],
    sections: [
      { title: "Study", body: "This hard-surface vehicle study follows the full path from reference analysis and blockout to refined topology, materials and final presentation." },
      { title: "Craft", body: "I focused on silhouette accuracy, believable wear and material contrast so the model remains readable in both close-up and gameplay-scale views." },
      { title: "Presentation", body: "Lighting and framing were treated as part of the work, not an afterthought, because a finished asset also needs a clear visual argument." },
    ], gallery: [],
  },
  {
    slug: "weapon-animation", title: "Weapon Animation", category: "3D & Motion", depth: "compact", role: "Animator · Cinematic Presentation",
    summary: "A first-person weapon animation study exploring weight, anticipation, mechanical response and cinematic presentation.", heroMedia: "/media/weapon-animation-poster.webp", videoMedia: "/media/weapon-animation.mp4", videoPoster: "/media/weapon-animation-poster.webp", accent: "#7798ad", tools: ["Animation", "Cinematography", "Film Editing"],
    sections: [
      { title: "Animation Goal", body: "The study explores how first-person weapon motion can communicate weight, readiness and mechanical feedback without obscuring the player’s view." },
      { title: "Process", body: "I built the motion around strong poses, anticipation and controlled follow-through, then reviewed the timing from the gameplay camera rather than only in an animation viewport." },
      { title: "Result", body: "The final sequence balances visual impact with responsiveness and demonstrates animation designed for interaction." },
    ], gallery: [],
  },
  {
    slug: "motion-capture", title: "Motion Capture Film", category: "3D & Motion", depth: "compact", role: "Cleanup Animator · Cinematography · Film Editing",
    summary: "A cinematic motion-capture project shaped through animation cleanup, shot composition and final film editing.", heroMedia: "/media/motion-capture-poster.webp", videoMedia: "/media/motion-capture.mp4", videoPoster: "/media/motion-capture-poster.webp", accent: "#7bc8c8", tools: ["Motion Capture Cleanup", "Cinematography", "Film Editing"],
    sections: [
      { title: "Overview", body: "This short film uses motion-capture performance as the foundation for a composed cinematic sequence." },
      { title: "My Role", body: "I cleaned the captured animation, developed the cinematography and edited the final film, connecting technical motion work with the rhythm and clarity of the finished sequence." },
      { title: "Cleanup Animation", body: "I refined contacts, reduced drift and preserved the intention of the original performance so the movement remained natural on the final characters." },
      { title: "Cinematography & Edit", body: "I shaped camera placement, shot continuity and pacing to guide attention and turn the captured material into a coherent film." },
    ], gallery: [],
  },
  {
    slug: "unreal-interaction-prototype", title: "Unreal Interaction Prototype", category: "Games & Interactive", depth: "compact", role: "Game Design · Technical Prototyping",
    summary: "A small Unreal Engine game prototype featuring multiple interactive mechanisms and trigger-based elements, presented through an edited gameplay demonstration.", heroMedia: "/media/unreal-prototype.svg", accent: "#6656e8", tools: ["Unreal Engine", "Blueprints", "Interaction Design", "Video Editing"],
    sections: [
      { title: "Prototype", body: "This compact prototype explores how multiple interactive mechanisms can be connected into a readable player journey inside Unreal Engine." },
      { title: "Interaction Design", body: "Trigger-based events and environmental responses were arranged to make cause and effect easy to understand while keeping the experience active and exploratory." },
      { title: "Demonstration", body: "The gameplay was edited into a concise demonstration video to communicate the core mechanics, interaction logic and overall experience." },
    ], gallery: [],
    externalLinks: [{ label: "View prototype files · Code usi2", href: "https://pan.baidu.com/s/1KsvcaG6m4yiJB5z2QpNKUQ?pwd=usi2" }],
  },
  {
    slug: "painting", title: "Painting & Drawing", category: "Visual Art", depth: "compact", role: "Traditional & Digital Artist",
    summary: "A selected visual-art collection moving between observational oil and pencil studies, character design and expressive digital self-portraiture.", heroMedia: "/media/painting-1.webp", accent: "#b67e5d", tools: ["Oil Painting", "Pencil Drawing", "Digital Painting"],
    sections: [
      { title: "Practice", body: "These selected paintings move between observation and interpretation, using colour and composition to retain the atmosphere of a scene rather than simply reproduce it." },
      { title: "Method", body: "I begin with large value and colour relationships, then introduce detail only where it strengthens focus, depth or emotional tone." },
      { title: "Relevance", body: "Painting continues to inform my game and marketing work by sharpening my sense of visual hierarchy, mood and controlled attention." },
    ], gallery: ["/media/painting-1.webp", "/media/painting-2.webp", "/media/painting-3.webp", "/media/bridget-design.webp", "/media/bridget-illustration-01.webp", "/media/bridget-illustration-02.webp", "/media/allergy-main.webp", "/media/allergy-tanglement.webp", "/media/allergy-dizziness.webp", "/media/pencil-still-life-2021.webp", "/media/pencil-still-life-2022.webp"],
  },
];

const featuredSlugs = ["echos-of-her", "rollercoaster-tycoon-wonderworks", "meat-lover", "lets-build-a-dungeon", "soul-vein"];
export const featured = featuredSlugs.map((slug) => work.find((item) => item.slug === slug)!).filter(Boolean);
export const secondaryWork = work.filter((item) => !featuredSlugs.includes(item.slug));
export const categories = ["All", "Marketing", "Games & Interactive", "3D & Motion", "Visual Art"] as const;

export function getWork(slug: string) { return work.find((item) => item.slug === slug); }
