import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { featured, getWork, work, type WorkItem } from "@/lib/work";

const workAliases: Record<string, string> = { bridget: "painting", allergy: "painting" };
const resolveWorkSlug = (slug: string) => workAliases[slug] ?? slug;

export function generateStaticParams() { return [...work.map((item) => ({ slug: item.slug })), ...Object.keys(workAliases).map((slug) => ({ slug }))]; }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getWork(resolveWorkSlug(slug));
  return item ? { title: `${item.title} — Sun Yutong`, description: item.summary } : {};
}

function EchosCaseStudy({ item, next }: { item: WorkItem; next: WorkItem }) {
  const artwork = item.detailMedia?.filter((media) => media.group === "artwork") ?? [];
  const exhibition = item.detailMedia?.filter((media) => media.group === "exhibition") ?? [];
  const materials = item.detailMedia?.filter((media) => media.group === "materials") ?? [];

  return <main className="case-page echos-case" style={{ "--accent": item.accent } as React.CSSProperties}>
    <nav className="case-nav"><a href="/"><ArrowLeft size={16} /> All work</a><span>Sun Yutong / Portfolio</span></nav>

    <header className="echos-case-hero">
      <div className="case-eyebrow"><span>Digital art experience · 2025</span><span>Case study 01</span></div>
      <h1><span>Echos</span><em>of Her</em></h1>
      <div className="echos-hero-details">
        <p>{item.summary}</p>
        <dl><div><dt>Role</dt><dd>{item.role}</dd></div><div><dt>Format</dt><dd>Digital film · Public exhibition · Media art</dd></div></dl>
        {item.externalLinks?.[0] ? <a className="case-project-link" href={item.externalLinks[0].href} target="_blank" rel="noreferrer">{item.externalLinks[0].label}<ArrowUpRight /></a> : null}
      </div>
    </header>

    <section className="echos-recognition">
      <div><span className="section-kicker">01 · Recognition & impact</span><h2>A personal work,<br />made public.</h2></div>
      <ol>{item.recognition?.map((award, index) => <li key={award}><span>{String(index + 1).padStart(2, "0")}</span><strong>{award}</strong></li>)}</ol>
    </section>

    {item.metrics?.length ? <section className="case-stats echos-stats" aria-label="Project results">{item.metrics.map((metric) => <article key={`${metric.value}-${metric.label}`}><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.context}</p></article>)}</section> : null}

    <section className="echos-video-section">
      <div className="section-label"><span>02</span><span>Final film</span></div>
      <div className="echos-video-copy"><h2>A moving portrait<br />of women across time.</h2><p>Created as a digital film, Echos of Her layers portraiture, landscape and cultural memory into a continuous visual journey. Women emerge as creators, healers, workers, guardians and pioneers—each carrying history forward.</p></div>
      <figure className="echos-hero-image"><video autoPlay muted loop playsInline controls poster="/media/echos-screen.webp" aria-label="Echos of Her playing on the West Lake public screen"><source src="/media/echos-hero-desktop.mp4" type="video/mp4" /></video><figcaption>West Lake, Hangzhou · Landmark public LED façade · 170 × 18 m</figcaption></figure>
    </section>

    <section className="echos-artwork">
      <div className="section-label"><span>03</span><span>Selected visual chapters</span></div>
      <div className="echos-section-intro"><h2>A story designed<br />to unfold horizontally.</h2><p>The panoramic format brings portraits, landscape, archival texture and symbolism into one continuous visual journey. Each chapter can stand alone, while the sequence builds a collective portrait across time.</p></div>
      <div className="echos-panoramas">{artwork.map((media, index) => <figure key={media.src}><img src={media.src} alt={media.alt} loading="lazy" /><figcaption><span>{String(index + 1).padStart(2, "0")}</span>{media.caption}</figcaption></figure>)}</div>
    </section>

    <section className="echos-statement">
      <div className="section-label"><span>04</span><span>Creative rationale</span></div>
      <div><p className="echos-lead">A tribute to women’s growth, cultural memory and identities carried across generations.</p><p>{item.sections[0].body}</p></div>
    </section>

    <section className="echos-documentation">
      <div className="section-label"><span>05</span><span>Global exhibition evidence</span></div>
      <div className="echos-section-intro"><h2>From award stage<br />to city scale.</h2><p>{item.sections[4].body}</p></div>
      <div className="echos-documentation-grid">{exhibition.map((media) => <figure key={media.src}><img src={media.src} alt={media.alt} loading="lazy" /><figcaption>{media.caption}</figcaption></figure>)}</div>
    </section>

    <section className="echos-materials">
      <div className="section-label"><span>06</span><span>Exhibition materials</span></div>
      <div className="echos-materials-grid">{materials.map((media) => <figure key={media.src}><img src={media.src} alt={media.alt} loading="lazy" /><figcaption>{media.caption}</figcaption></figure>)}</div>
    </section>

    <a className="next-project" href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}</strong><ArrowUpRight /></a>
  </main>;
}

function RctCaseStudy({ item, next }: { item: WorkItem; next: WorkItem }) {
  return <main className="case-page rct-case" style={{ "--accent": item.accent } as React.CSSProperties}>
    <nav className="case-nav"><a href="/"><ArrowLeft size={16} /> All work</a><span>Sun Yutong / Portfolio</span></nav>

    <header className="rct-case-hero">
      <div className="case-eyebrow"><span>Commercial game production · Internship</span><span>Case study 02</span></div>
      <h1><span>RollerCoaster Tycoon</span><em>Wonderworks</em></h1>
      <div className="rct-hero-details">
        <p>I built the in-game scenes used in the official announcement trailer, supported game balance and tested the player experience across production.</p>
        <dl><div><dt>Role</dt><dd>{item.role}</dd></div><div><dt>Internship</dt><dd>May–August 2026</dd></div><div><dt>Studio</dt><dd>Springloaded · Singapore</dd></div><div><dt>Publisher</dt><dd>Atari</dd></div></dl>
        <div className="rct-links">{item.externalLinks?.map((link) => <a className="case-project-link" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label}<ArrowUpRight /></a>)}</div>
      </div>
    </header>

    <section className="rct-hero-image" aria-label="Official RollerCoaster Tycoon Wonderworks imagery">
      <div className="rct-hero-pair">
        <figure><img src={item.heroMedia} alt="Official RollerCoaster Tycoon Wonderworks cover art" /><figcaption><span>Official game key art</span><span>Springloaded · Atari</span></figcaption></figure>
        <figure><img src="/media/rct-park-hd.jpg" alt="RollerCoaster Tycoon Wonderworks theme park overview" /><figcaption><span>Theme park overview</span><span>In-game imagery</span></figcaption></figure>
      </div>
    </section>

    <section className="rct-trailer">
      <div className="section-label"><span>01</span><span>Published outcome</span></div>
      <div className="rct-section-intro"><h2>Scenes built for<br />the official trailer.</h2><p>I arranged rides, scenery and park layouts for clear, visually engaging shots in the published announcement trailer. My QA and balance work gave me a detailed understanding of the systems shown on screen.</p></div>
      <div className="rct-video"><iframe src="https://www.youtube-nocookie.com/embed/QWsU277r8OM" title="RollerCoaster Tycoon Wonderworks official announcement trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
      {item.metrics?.length ? <section className="case-stats rct-stats" aria-label="Announcement trailer performance">{item.metrics.map((metric) => <article key={`${metric.value}-${metric.label}`}><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.context}</p></article>)}</section> : null}
      <p className="rct-metric-note">Public YouTube figures checked 9 October 2026. View and like counts will continue to change.</p>
    </section>

    <section className="rct-contribution">
      <div className="section-label dark"><span>02</span><span>My contribution</span></div>
      <div className="rct-contribution-head"><h2>What I delivered<br />across production.</h2><p>My internship connected trailer scene building, product quality and game balance—three ways of improving what the player sees, understands and feels.</p></div>
      <div className="rct-contribution-grid">
        {item.sections.slice(2, 5).map((section, index) => <article key={section.title}><span>0{index + 1}</span><h3>{section.title}</h3><p>{section.body}</p></article>)}
      </div>
    </section>

    <section className="rct-product">
      <div className="section-label"><span>03</span><span>Context</span></div>
      <div className="rct-section-intro"><h2>A classic simulation,<br />rebuilt around chaos.</h2><p>{item.sections[0].body} The game combines coaster construction, park management and physics-driven destruction.</p></div>
      <div className="rct-gallery">{item.gallery.map((image, index) => <figure key={image}><img src={image} alt={index === 0 ? "RollerCoaster Tycoon Wonderworks coaster builder interface" : "RollerCoaster Tycoon Wonderworks rescue helicopter and ride debris"} loading="lazy" /><figcaption>{index === 0 ? "Custom coaster construction" : "Chaos physics and rescue systems"}</figcaption></figure>)}</div>
      <a className="rct-source" href="https://store.steampowered.com/app/4734550/RollerCoaster_Tycoon_Wonderworks/" target="_blank" rel="noreferrer">High-resolution imagery and project information: official Steam listing <ArrowUpRight /></a>
    </section>

    <a className="next-project" href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}</strong><ArrowUpRight /></a>
  </main>;
}

function LetsBuildDungeonCaseStudy({ item, next }: { item: WorkItem; next: WorkItem }) {
  const contributions = [
    { number: "01", title: "Progression balance", body: "I balanced difficulty by tuning rating requirements, task gates and the asset unlocks players needed to access the next objective." },
    { number: "02", title: "Quest implementation", body: "I imported quest dialogue, configured quest steps and conditions, and tested that conversations, objectives and unlocks progressed correctly in-game." },
    { number: "03", title: "Tutorial design", body: "I designed onboarding steps that introduced interconnected systems in a clear sequence without overwhelming new players." },
    { number: "04", title: "QA & asset integration", body: "I reproduced edge cases, documented actionable issues and helped move content into the production build with consistency checks." },
  ];
  const productionSteps = [
    { title: "Test the loop", body: "Play progression in context, checking how ratings, objectives and rewards affect the difficulty and pace of the player journey." },
    { title: "Tune the gates", body: "Adjust rating thresholds and required asset unlocks so the next task feels earned without creating an unnecessary progression wall." },
    { title: "Implement and verify", body: "Import dialogue, set up quest logic and re-test the complete flow—from conversation trigger to objective completion and unlock." },
  ];

  return <main className="case-page dungeon-case" style={{ "--accent": item.accent } as React.CSSProperties}>
    <nav className="case-nav dungeon-nav"><a href="/"><ArrowLeft size={16} /> All work</a><span>Sun Yutong / Portfolio</span></nav>

    <header className="dungeon-hero">
      <div className="case-eyebrow"><span>Commercial game production · Springloaded</span><span>Case study 04</span></div>
      <div className="dungeon-hero-art">
        <img className="dungeon-hero-background" src={item.heroMedia} alt="Official Let’s Build a Dungeon key art featuring its fantasy creatures" />
        <img className="dungeon-logo" src="/media/lets-build-library-logo.png" alt="Let’s Build a Dungeon" />
      </div>
      <div className="dungeon-hero-details">
        <p>{item.summary}</p>
        <dl><div><dt>Role</dt><dd>{item.role}</dd></div><div><dt>Internship</dt><dd>May–August 2026</dd></div><div><dt>Studio</dt><dd>Springloaded · Singapore</dd></div></dl>
        <div className="dungeon-links">{item.externalLinks?.map((link) => <a className="case-project-link" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label}<ArrowUpRight /></a>)}</div>
      </div>
    </header>

    {item.metrics?.length ? <section className="case-stats dungeon-stats" aria-label="Official public project scale">{item.metrics.map((metric) => <article key={`${metric.value}-${metric.label}`}><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.context}</p></article>)}</section> : null}

    <section className="dungeon-contribution">
      <div className="section-label"><span>01</span><span>My contribution</span></div>
      <div className="dungeon-section-head"><h2>Supporting quality<br />across the build.</h2><p>The public numbers describe the scale of the project. My contribution was inside the production pipeline: improving reliability, clarity and implementation through four connected areas.</p></div>
      <div className="dungeon-contribution-grid">{contributions.map((contribution) => <article key={contribution.title}><span>{contribution.number}</span><h3>{contribution.title}</h3><p>{contribution.body}</p></article>)}</div>
    </section>

    <section className="dungeon-evidence">
      <div className="section-label dark"><span>02</span><span>Production evidence</span></div>
      <div className="dungeon-section-head"><h2>Systems I balanced<br />and implemented.</h2><p>These pre-release screens show the player-facing systems I worked within. They illustrate the progression and quest flows—not confidential tuning sheets or unreleased internal values.</p></div>

      <article className="dungeon-evidence-feature">
        <figure><img src="/media/lets-build-progression-balance.png" alt="Pre-release progression screen showing quest selection, locked content and point costs" loading="lazy" /><figcaption>Pre-release system view · Progression gates and asset access</figcaption></figure>
        <div><span>01 · Progression Balance</span><h3>Tuning the path<br />to the next objective.</h3><p>I adjusted rating requirements, task gates and asset unlock costs so players had enough challenge and direction without reaching a progression wall. This screen represents the system area I balanced; the detailed working values remain part of the unreleased production build.</p></div>
      </article>

      <article className="dungeon-evidence-quest">
        <div className="dungeon-evidence-copy"><span>02 · Quest Implementation</span><h3>From dialogue import<br />to playable quest flow.</h3><p>I imported quest conversations, configured objectives and required assets, then verified that the full sequence progressed correctly—from unlock and sign-off to tracking and completion.</p></div>
        <div className="dungeon-quest-grid">
          <figure><img src="/media/lets-build-quest-unlocked.png" alt="New quest unlocked screen showing required characters and assets" loading="lazy" /><figcaption>Quest unlock and required content</figcaption></figure>
          <figure><img src="/media/lets-build-asset-signoff.png" alt="Asset sign-off screen used to select and prioritise quest assets" loading="lazy" /><figcaption>Asset sign-off and prioritisation</figcaption></figure>
          <figure><img src="/media/lets-build-quest-details.png" alt="Quest details panel showing completion rate, quest giver and conditions" loading="lazy" /><figcaption>Quest tracking and completion conditions</figcaption></figure>
        </div>
      </article>

      <aside className="dungeon-tutorial-note"><span>03 · Tutorial Design</span><strong>Teach the system in the order players need it.</strong><p>I structured onboarding around progressive disclosure: introduce one action, let the player apply it, then reveal the next connected system. This contribution is presented as process documentation while public tutorial visuals are not yet available.</p></aside>
    </section>

    <section className="dungeon-systems">
      <div className="section-label dark"><span>03</span><span>A multi-layered product</span></div>
      <div className="dungeon-section-head"><h2>Studio management.<br />World building. RPG play.</h2><p>Let’s Build a Dungeon asks players to manage a development studio, construct an MMORPG and step inside the game they create. Testing one feature meant understanding how it affected several layers of the experience.</p></div>
      <div className="dungeon-systems-grid">
        <figure className="dungeon-system-wide"><img src="/media/lets-build-steam-01.jpg" alt="A large custom RPG world built in Let’s Build a Dungeon" loading="lazy" /><figcaption>World-building scale · Official Steam imagery</figcaption></figure>
        <figure><img src="/media/lets-build-steam-03.jpg" alt="Product analytics and player retention interface in Let’s Build a Dungeon" loading="lazy" /><figcaption>Player analytics and product rating</figcaption></figure>
        <figure><img src="/media/lets-build-steam-04.jpg" alt="Game studio desktop and communication interface in Let’s Build a Dungeon" loading="lazy" /><figcaption>Studio communication and production decisions</figcaption></figure>
      </div>
    </section>

    <section className="dungeon-process">
      <div className="section-label"><span>04</span><span>Production approach</span></div>
      <div className="dungeon-process-grid">{productionSteps.map((step, index) => <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}</div>
    </section>

    <section className="dungeon-context">
      <div className="section-label dark"><span>05</span><span>Official game context</span></div>
      <div className="dungeon-section-head"><h2>A game-development sim<br />inside an RPG builder.</h2><p>Developed and self-published by Springloaded, the game is scheduled to enter Early Access on 11 February 2027. Its four modes combine studio simulation, accessible creative tools, cooperative building and community-made games.</p></div>
      <div className="dungeon-gallery">
        <figure><img src="/media/lets-build-steam-02.jpg" alt="Building and decorating a fantasy town in Let’s Build a Dungeon" loading="lazy" /><figcaption>Building tools and asset integration</figcaption></figure>
        <figure><img src="/media/lets-build-steam-06.jpg" alt="Virtual players exploring a custom world in Let’s Build a Dungeon" loading="lazy" /><figcaption>Virtual player behaviour and world interaction</figcaption></figure>
        <figure><img src="/media/lets-build-steam-07.jpg" alt="Boss battle gameplay in Let’s Build a Dungeon" loading="lazy" /><figcaption>Playable RPG combat and balancing</figcaption></figure>
        <figure><img src="/media/lets-build-steam-08.jpg" alt="A science laboratory area created in Let’s Build a Dungeon" loading="lazy" /><figcaption>Custom interiors and thousands of assets</figcaption></figure>
      </div>
      <p className="dungeon-source-note">Public project data and high-resolution imagery are sourced from the official Steam listing and Springloaded development updates. Figures describe the overall project, not an individual attribution.</p>
    </section>

    <a className="next-project" href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}</strong><ArrowUpRight /></a>
  </main>;
}

function MeatLoverCaseStudy({ item, next }: { item: WorkItem; next: WorkItem }) {
  const rednoteAccountUrl = "https://www.rednote.com/user/profile/6982e12a000000002603a3ff";
  const rednoteLaunchPostUrl = "https://www.rednote.com/discovery/item/69ad634600000000290337ac";
  const rednoteLaunchSlides = [
    { src: "/media/meat-rednote-launch-01.webp", alt: "Meat Lover character introducing the independent game in a hand-drawn comic panel" },
    { src: "/media/meat-rednote-launch-02.webp", alt: "RedNote slide explaining Meat Lover as a 3D strategy cutting game with light horror elements" },
    { src: "/media/meat-rednote-launch-03.webp", alt: "RedNote slide explaining exact-weight cutting, fat removal and bone constraints" },
    { src: "/media/meat-rednote-launch-04.webp", alt: "Meat Lover visual-development sheet with pixel-art meat, knives and heart motifs" },
    { src: "/media/meat-rednote-launch-05.webp", alt: "Meat Lover character asking readers to follow the RedNote account for development updates" },
    { src: "/media/meat-rednote-launch-06.webp", alt: "Early black-and-white Meat Lover concept sketches of meat, organs and unsettling food forms" },
  ];
  const channelResults = [
    { channel: "RedNote", views: "174", clicks: "39", rate: "22.4%", width: "100%" },
    { channel: "Instagram", views: "127", clicks: "10", rate: "7.87%", width: "35%" },
    { channel: "TikTok", views: "451", clicks: "11", rate: "2.44%", width: "11%" },
    { channel: "YouTube", views: "538", clicks: "3", rate: "0.55%", width: "3%" },
  ];

  return <main className="case-page meat-case" style={{ "--accent": item.accent } as React.CSSProperties}>
    <nav className="case-nav meat-nav"><a href="/"><ArrowLeft size={16} /> All work</a><span>Sun Yutong / Portfolio</span></nav>

    <header className="meat-case-hero">
      <div className="case-eyebrow"><span>Game design · Creative marketing</span><span>Case study 03</span></div>
      <div className="meat-title"><span>MEAT</span><em>LOVER</em></div>
      <div className="meat-hero-grid">
        <figure><img src={item.heroMedia} alt="Meat Lover pixel-art title screen" /><figcaption>Game Jam project · First-person 3D puzzle game</figcaption></figure>
        <div className="meat-hero-copy"><p>{item.summary}</p><dl><div><dt>Role</dt><dd>{item.role}</dd></div><div><dt>Product</dt><dd>First-person 3D puzzle game: cut exact weights, remove fat and work within limited cuts.</dd></div><div><dt>Focus</dt><dd>Player insight · Platform strategy · Community growth</dd></div></dl></div>
      </div>
    </header>

    <section className="meat-rednote-launch">
      <div className="section-label dark"><span>01</span><span>RedNote launch</span></div>
      <div className="meat-rednote-grid">
        <div className="meat-rednote-proof">
          <a className="meat-rednote-account-link" href={rednoteAccountUrl} target="_blank" rel="noreferrer" aria-label="Visit the Meat Lover RedNote account">
            <figure><img src="/media/meat-rednote-profile.webp" alt="Meat Lover RedNote account showing 454 followers and 2.3K likes and saves" loading="eager" /><figcaption>Meat Lover · RedNote account <ArrowUpRight size={14} /></figcaption></figure>
          </a>
          <p>One platform-native post introduced the game through a clear visual hook, then converted that attention into an audience for future development updates.</p>
          <a className="meat-rednote-profile-cta" href={rednoteAccountUrl} target="_blank" rel="noreferrer">Visit the RedNote account <ArrowUpRight size={16} /></a>
        </div>
        <div className="meat-rednote-highlight">
          <p className="meat-overline">Using a single post</p>
          <strong>~500</strong>
          <h2>followers<br />in 3 days.</h2>
          <p>The account grew from launch content alone—proof that the game’s unusual premise could become a recognisable, followable identity.</p>
        </div>
      </div>
      <p className="meat-single-post-label">Single-post performance snapshot</p>
      <div className="meat-launch-stats" aria-label="RedNote single-post results">
        {item.metrics?.slice(0, 3).map((metric) => <article key={`${metric.value}-${metric.label}`}><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.context}</p></article>)}
      </div>
    </section>

    <section className="meat-rednote-experiments">
      <div className="section-label"><span>RedNote creative experiments</span><span>Two posts · Two hooks</span></div>

      <article className="meat-rednote-experiment meat-rednote-story-post">
        <div className="meat-rednote-experiment-copy">
          <p className="meat-overline">Experiment 01 · Character-first reveal</p>
          <h2>Turn the launch<br />into a story.</h2>
          <p>Instead of opening with a feature list, the carousel lets the nervous meat character introduce the game. Humour creates a low-friction entry point; the next slides explain the mechanic, reveal the art direction and finish with a direct invitation to follow development.</p>
          <ol>
            <li><span>01</span><strong>Character hook</strong><p>A recognisable voice makes a strange premise approachable.</p></li>
            <li><span>02</span><strong>Progressive reveal</strong><p>Each swipe rewards curiosity with a new layer of the product.</p></li>
            <li><span>03</span><strong>Community CTA</strong><p>The final slide turns interest into an ongoing relationship.</p></li>
          </ol>
          <div className="meat-rednote-public-stats" aria-label="Public engagement on the RedNote launch post">
            <span><strong>1,657</strong>Likes</span><span><strong>222</strong>Saves</span><span><strong>114</strong>Comments</span>
          </div>
          <a className="meat-rednote-post-link" href={rednoteLaunchPostUrl} target="_blank" rel="noreferrer">View the original post <ArrowUpRight size={17} /></a>
        </div>
        <div className="meat-rednote-carousel" aria-label="Six images from the RedNote launch post">
          {rednoteLaunchSlides.map((slide, index) => <figure key={slide.src}><img src={slide.src} alt={slide.alt} loading="lazy" /><figcaption>{String(index + 1).padStart(2, "0")} / 06</figcaption></figure>)}
        </div>
      </article>

      <article className="meat-rednote-experiment meat-rednote-prelaunch-post">
        <figure><img src="/media/meat-rednote-prelaunch-ipad.png" alt="Pre-launch RedNote post staging the Meat Lover cover art on an iPad as if the game were already open" loading="lazy" /><figcaption>Pre-launch iPad staging · Screenshot supplied by Sun Yutong</figcaption></figure>
        <div className="meat-rednote-experiment-copy">
          <p className="meat-overline">Experiment 02 · Premise before product</p>
          <h2>Make an unreleased<br />game feel tangible.</h2>
          <p>The game was not live yet, so the iPad became a simple product mock-up: placing the cover art in a real device context made the concept feel immediately playable. The provocative title created urgency, while the caption disclosed that development was still in progress and redirected curiosity toward following the account.</p>
          <div className="meat-rednote-funnel"><span><b>01</b>Staged device context</span><span><b>02</b>Curiosity-led headline</span><span><b>03</b>Follow for launch</span></div>
          <blockquote>“I won’t allow anyone not to have played this game.”</blockquote>
          <p className="meat-data-note">The visual sells the feeling of access; the copy then sets an honest expectation that the game is still being developed.</p>
        </div>
      </article>
    </section>

    <section className="meat-community">
      <div className="section-label"><span>02</span><span>RedNote community & identity</span></div>
      <div className="meat-community-grid"><figure><img src="/media/meat-ui.webp" alt="A RedNote Meat Lover post featuring the personified meat character and community comments" loading="lazy" /><figcaption>Character voice, comments and clear calls to action</figcaption></figure><div><h2>Make the meat<br />worth following.</h2><p>We replied to comments, treated suggestions as product input and gave the meat a distinct personality. The character became more than key art: it carried the account voice and made every post recognisably part of the same world.</p><ul><li>Proactive community interaction</li><li>User-driven improvements</li><li>Clear calls to action</li><li>A recognisable IP identity</li></ul></div></div>
    </section>

    <section className="meat-conversion">
      <div className="section-label"><span>03</span><span>RedNote link conversion</span></div>
      <div className="meat-conversion-grid"><div><p className="meat-overline">Strongest tracked channel</p><strong>22.4%</strong><h2>RedNote conversion</h2><p>39 clicks from 174 tracked views in the one-day comparison.</p></div><div className="meat-bars">{channelResults.map((result) => <article key={result.channel}><div><strong>{result.channel}</strong><span>{result.views} views · {result.clicks} clicks</span><b>{result.rate}</b></div><i><span style={{ width: result.width }} /></i></article>)}</div></div>
      <p className="meat-data-note">The single-post snapshot above and this one-day link comparison cover different reporting windows, so they are presented as related but separate RedNote evidence.</p>
    </section>

    <section className="meat-hook">
      <div className="section-label"><span>04</span><span>Creative output</span></div>
      <div className="meat-hook-grid"><div><p className="meat-overline">Puzzle × satisfying</p><h2>“You only have<br />two cuts.”</h2><p>The strongest short-form creative introduced a challenge immediately, then held attention with fast, smooth cutting and amplified sound. The question gave the right audience a reason to stay for the result.</p><div className="meat-hook-tags"><span>Challenge-led opening</span><span>Visual payoff</span><span>Enhanced cutting sound</span></div></div><figure><img src="/media/meat-social.webp" alt="Vertical Meat Lover challenge post asking players to remove all the fat in two cuts" loading="lazy" /><figcaption>Short-form challenge creative</figcaption></figure></div>
    </section>

    <section className="meat-video-edits">
      <div className="section-label"><span>05</span><span>TikTok + YouTube vertical edits</span></div>
      <div className="meat-video-heading"><h2>Designed for<br />the first second.</h2><p>Two vertical edits were created for short-form distribution on TikTok and YouTube Shorts. One leads with the game’s horror-comedy identity; the other turns the mechanic into an instantly understandable two-cut challenge with a clear visual payoff.</p></div>
      <div className="meat-video-grid">
        <figure>
          <video controls playsInline preload="metadata" poster="/media/meat-tiktok-03-poster.webp" aria-label="Meat Lover TikTok edit: cutting meat with a touch of horror">
            <source src="/media/meat-tiktok-03.mp4" type="video/mp4" />
          </video>
          <figcaption><span>01 · Horror-comedy hook</span><span>00:26</span></figcaption>
        </figure>
        <figure>
          <video controls playsInline preload="metadata" poster="/media/meat-tiktok-04-poster.webp" aria-label="Meat Lover TikTok edit: remove the fat in two cuts">
            <source src="/media/meat-tiktok-04.mp4" type="video/mp4" />
          </video>
          <figcaption><span>02 · Two-cut challenge</span><span>00:31</span></figcaption>
        </figure>
      </div>
    </section>

    <section className="meat-channels">
      <div className="section-label dark"><span>06</span><span>Platform-native marketing</span></div>
      <div className="meat-section-heading"><h2>Different platforms.<br />Different expectations.</h2><p>I did not publish one asset everywhere. I studied how each audience discovers, watches and interacts with content, then adapted the format, hook and level of explanation to match that behaviour.</p></div>
      <div className="meat-channel-grid"><article><span>RedNote</span><h3>Image-led, saveable storytelling</h3><p>Because RedNote discovery is strongly visual and carousel-led, I used illustrated slides, progressive reveals and character narration. The format encouraged swiping, saving, commenting and following the development story.</p></article><article><span>TikTok</span><h3>Trend-aware vertical hooks</h3><p>Fast vertical edits lead with a question, striking sound or recognisable short-form pattern. The mechanic appears immediately, so viewers understand the challenge before they decide whether to keep watching.</p></article><article><span>YouTube Shorts</span><h3>Clear mechanic, complete payoff</h3><p>The same vertical production format was adapted around gameplay clarity: a readable challenge, enough context to understand the rule and a satisfying result that rewards watching through to the end.</p></article><article><span>Audience learning</span><h3>Format follows behaviour</h3><p>Platform trends informed the creative, while comments, saves, watch behaviour and link clicks showed which message resonated. Those signals guided the next content decision instead of treating every channel the same.</p></article></div>
    </section>

    <section className="meat-positioning">
      <div className="section-label dark"><span>07</span><span>Condensed strategy</span></div>
      <div className="meat-positioning-head"><h2>Why the campaign<br />earned attention.</h2><p>The strategy came down to three repeatable decisions—not a long process.</p></div>
      <ol className="meat-process"><li><span>01</span><strong>Lead with character</strong><p>Use humour and a recognisable voice to make an unusual game premise approachable.</p></li><li><span>02</span><strong>Stage the product</strong><p>Make an unreleased game feel tangible through device mock-ups, gameplay framing and progressive reveals.</p></li><li><span>03</span><strong>Convert curiosity</strong><p>Move from a provocative hook to honest context, interaction and a clear reason to follow.</p></li></ol>
    </section>

    <a className="next-project" href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}</strong><ArrowUpRight /></a>
  </main>;
}

function SoulVeinCaseStudy({ item, next }: { item: WorkItem; next: WorkItem }) {
  return <main className="case-page soul-case" style={{ "--accent": item.accent } as React.CSSProperties}>
    <nav className="case-nav soul-nav"><a href="/"><ArrowLeft size={16} /> All work</a><span>Sun Yutong / Portfolio</span></nav>

    <header className="soul-hero">
      <div className="case-eyebrow"><span>Student game project · Unity</span><span>Case study 05</span></div>
      <div className="soul-title"><span>SOUL</span><em>VEIN</em></div>
      <div className="soul-hero-grid">
        <figure className="soul-crop soul-crop-hero"><video autoPlay muted loop playsInline preload="metadata" poster={item.heroMedia} aria-label="Soul Vein finished prototype title screen and opening gameplay"><source src="/media/soul-hero-video.mp4" type="video/mp4" /></video><figcaption>Playable prototype · Title screen and opening gameplay</figcaption></figure>
        <div className="soul-hero-copy"><p>{item.summary}</p><dl><div><dt>Focus</dt><dd>Player experience iteration</dd></div><div><dt>Role</dt><dd>{item.role}</dd></div><div><dt>Format</dt><dd>Top-down single-player puzzle game</dd></div></dl></div>
      </div>
    </header>

    <section className="soul-iteration-intro">
      <div className="section-label dark"><span>01</span><span>Player experience focus</span></div>
      <div className="soul-section-head"><h2>Observe confusion.<br />Change the system.</h2><p>Playtesting revealed where players became lost, misread connection states or paid too high a cost for failure. I used those moments to refine navigation, feedback, progression and puzzle rules—not simply polish the surface.</p></div>
      <div className="soul-iteration-principles">
        <article><span>01</span><strong>Find the friction</strong><p>Identify the point where the player’s mental model stops matching the game.</p></article>
        <article><span>02</span><strong>Change the rule</strong><p>Adjust the mechanic, feedback or level structure that created the confusion.</p></article>
        <article><span>03</span><strong>Let play explain it</strong><p>Use visual states and spatial cues before adding more instructions.</p></article>
      </div>
    </section>

    <section className="soul-iterations">
      <div className="section-label"><span>02</span><span>Iteration evidence</span></div>
      <div className="soul-section-head soul-section-head--solo"><h2>Five changes shaped<br />around the player.</h2></div>

      <article className="soul-iteration soul-iteration-guidance">
        <div className="soul-iteration-copy"><p className="soul-overline">Iteration 01 · Navigation</p><h3>Turn resources into<br />a visual guide.</h3><div className="soul-before-after"><p><span>Observed</span>Players became lost and could not read the intended route through the continuous scene.</p><p><span>Changed</span>Ammo pickups were repositioned as a trail of spatial cues, guiding movement without a waypoint or extra tutorial text.</p></div></div>
        <div className="soul-comparison-stack" aria-label="Before and after navigation comparisons"><figure><img src="/media/soul-ammo-before-after-a.webp" alt="Before and after comparison showing ammo pickups added as a route through the first level area" loading="lazy" /><figcaption>Level area A · Old / New</figcaption></figure><figure><img src="/media/soul-ammo-before-after-b.webp" alt="Before and after comparison showing ammo pickups guiding the route around a second level area" loading="lazy" /><figcaption>Level area B · Old / New</figcaption></figure></div>
      </article>

      <article className="soul-iteration soul-iteration-video">
        <div className="soul-iteration-copy"><p className="soul-overline">Iteration 02 · Connection clarity</p><h3>Let connected grass<br />visibly bloom.</h3><div className="soul-before-after"><p><span>Observed</span>All grass originally flowered, so a path could look complete even when the system had not registered the connection.</p><p><span>Changed</span>Only grass connected to the start tree blooms. Plain grass now signals an incomplete route, enabling immediate self-judgement.</p></div></div>
        <figure className="soul-iteration-media"><video controls playsInline preload="metadata" poster="/media/soul-iteration-connection-poster.webp" aria-label="Soul Vein iteration showing connected grass blooming to clarify puzzle state"><source src="/media/soul-iteration-connection.mp4" type="video/mp4" /></video><figcaption><span>Connection-state iteration</span><span>00:21</span></figcaption></figure>
      </article>

      <article className="soul-iteration soul-iteration-reward">
        <div className="soul-reward-comparison" aria-label="Before and after reward feedback"><figure><span>After</span><img src="/media/soul-reward-after.webp" alt="Updated Soul Vein reward feedback with a tree orb, restored grass and progressive interface" loading="lazy" /></figure><figure><span>Before</span><img src="/media/soul-reward-before.webp" alt="Earlier Soul Vein reward feedback prototype" loading="lazy" /></figure></div>
        <div className="soul-iteration-copy"><p className="soul-overline">Iteration 03 · Reward feedback</p><h3>Replace visual noise<br />with layered confirmation.</h3><div className="soul-before-after"><p><span>Observed</span>The original grass-rain celebration became messy once every level lived in one continuous scene.</p><p><span>Changed</span>A rising tree orb, a controlled circle of restored grass and a progressive level UI now confirm success at three readable scales.</p></div></div>
      </article>

      <article className="soul-iteration soul-iteration-checkpoint">
        <div className="soul-iteration-copy"><p className="soul-overline">Iteration 04 · Failure recovery</p><h3>Keep failure local<br />to the current level.</h3><div className="soul-before-after"><p><span>Observed</span>A full restart made players repeat solved content and weakened the rhythm of experimentation.</p><p><span>Changed</span>Connecting two trees creates a checkpoint. Restart and reset now affect only the active level, preserving earlier progress.</p></div></div>
        <div className="soul-checkpoint-result"><strong>Previous levels</strong><span>Remain restored</span><strong>Current level</strong><span>Safe to retry</span></div>
      </article>

      <article className="soul-iteration soul-iteration-video soul-iteration-reset">
        <div className="soul-iteration-copy"><p className="soul-overline">Iteration 05 · Wordless teaching</p><h3>Close the exploit.<br />Teach the reset.</h3><div className="soul-before-after"><p><span>Observed</span>Players could collect ammo from other levels, bypassing the intended resource constraint.</p><p><span>Changed</span>Each level shows only its own ammo, and the package appears after reset. The requirement teaches the tree-reset mechanic through play.</p></div></div>
        <figure className="soul-iteration-media"><video controls playsInline preload="metadata" poster="/media/soul-iteration-reset-poster.webp" aria-label="Soul Vein iteration using ammo placement and reset behaviour to prevent unintended shortcuts"><source src="/media/soul-iteration-reset.mp4" type="video/mp4" /></video><figcaption><span>Ammo + reset iteration</span><span>00:13</span></figcaption></figure>
      </article>

      <aside className="soul-rule-note"><span>Additional level-design rule</span><strong>Different collision rules created new puzzle possibilities.</strong><p>Ground ignores bullets, limiting random solutions; fences block the player but allow bullets through, turning line-of-sight into a deliberate final-level challenge.</p></aside>
    </section>

    <section className="soul-system">
      <div className="section-label"><span>03</span><span>Resulting player loop</span></div>
      <div className="soul-system-grid">
        <div><p className="soul-overline">Guide → connect → confirm → continue</p><h2>A puzzle the world<br />explains back.</h2><p>The final prototype combines environmental guidance, readable connection states, layered success feedback and forgiving recovery. The player learns by acting, seeing the world respond and understanding what to try next.</p><ul><li>Follow resources through the continuous scene</li><li>Judge connection through grass state</li><li>Read success through the tree orb and progress UI</li><li>Retry the current puzzle without losing solved levels</li></ul></div>
        <figure className="soul-crop soul-crop-system"><img src="/media/soul-level.webp" alt="Soul Vein final level flow with environmental guidance and restored areas" loading="lazy" /><figcaption>Final player-facing system · Guidance, feedback and progression</figcaption></figure>
      </div>
    </section>

    <section className="soul-reflection">
      <div className="section-label dark"><span>04</span><span>What the project demonstrates</span></div>
      <h2>Iteration grounded<br />in player behaviour.</h2><p>The final prototype demonstrates my ability to translate playtest friction into changes across level design, gameplay logic and visual feedback. Instead of adding explanation after confusion appeared, I changed the systems so the experience could communicate more clearly through play.</p>
    </section>

    <a className="next-project" href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}</strong><ArrowUpRight /></a>
  </main>;
}

function IndieGameCaseStudy({ item, next }: { item: WorkItem; next: WorkItem }) {
  const isReapers = item.slug === "reapers-roulette";
  const isCapybara = item.slug === "untitled-capybara";
  const projectNumber = isReapers ? "01" : isCapybara ? "02" : "03";
  const format = isReapers ? "2D pixel strategy roguelike" : isCapybara ? "Wordless 3D sandbox mystery" : "One-button timing game";
  const team = isReapers || isCapybara ? "Two-person team" : "Solo developed";

  return <main className={`case-page indie-case indie-case--${item.slug}`} style={{ "--accent": item.accent } as React.CSSProperties}>
    <nav className="case-nav indie-nav"><a href="/"><ArrowLeft size={16} /> All work</a><span>Sun Yutong / Portfolio</span></nav>

    <header className="indie-hero">
      <div className="case-eyebrow"><span>Independent game project · Unity</span><span>Selected game {projectNumber}</span></div>
      <h1>{item.title}</h1>
      <div className="indie-hero-grid">
        <figure className="indie-hero-media"><img src={item.heroMedia} alt={`${item.title} key visual`} /><figcaption>Playable prototype · Unity</figcaption></figure>
        <div className="indie-hero-copy"><p>{item.summary}</p><dl><div><dt>Role</dt><dd>{item.role}</dd></div><div><dt>Format</dt><dd>{format}</dd></div><div><dt>Team</dt><dd>{team}</dd></div></dl>{item.externalLinks?.[0] ? <a className="case-project-link" href={item.externalLinks[0].href} target="_blank" rel="noreferrer">{item.externalLinks[0].label}<ArrowUpRight /></a> : null}</div>
      </div>
    </header>

    {isReapers ? <>
      <section className="indie-section indie-section--light">
        <div className="section-label"><span>01</span><span>Core mechanic</span></div>
        <div className="indie-section-head"><h2>Choose where to aim.<br />Choose how much to risk.</h2><p>The confrontation is readable in one decision: shoot yourself or the opponent, then select a body part. Safer limb shots offer smaller rewards; head and vital shots turn one pull of the trigger into an extreme high-risk, high-reward choice.</p></div>
        <div className="indie-media-pair"><figure><img src="/media/reapers-tutorial.png" alt="Reaper's Roulette tutorial introducing its Russian roulette confrontation" loading="lazy" /><figcaption>Tutorial · Establishing the rule</figcaption></figure><figure><img src="/media/reapers-combat.png" alt="Reaper's Roulette combat interface with body-part targeting and chamber information" loading="lazy" /><figcaption>Combat · Target and probability decisions</figcaption></figure></div>
      </section>

      <section className="indie-section indie-section--dark">
        <div className="section-label dark"><span>02</span><span>Strategic control</span></div>
        <div className="indie-section-head"><h2>Uncertainty with<br />room to plan.</h2><p>The game does not remove randomness. It gives players limited tools to shape it: equip cards, buy functional items, redraw at the start of a round and reveal upcoming chamber contents once per round.</p></div>
        <div className="indie-feature-grid"><figure><img src="/media/reapers-loadout.png" alt="Reaper's Roulette card loadout and inventory screen" loading="lazy" /><figcaption>Build a loadout from functional cards</figcaption></figure><figure><img src="/media/reapers-shop.png" alt="Reaper's Roulette shop selling tactical items" loading="lazy" /><figcaption>Purchase props that change the next encounter</figcaption></figure></div>
        <div className="indie-decision-row"><article><span>01</span><h3>Opening redraw</h3><p>Replace an unfavourable starting hand before committing to the round.</p></article><article><span>02</span><h3>Chamber preview</h3><p>Reveal upcoming bullet types once, then decide whether the available risk is worth taking.</p></article><article><span>03</span><h3>Item combinations</h3><p>Combine cards and props to create different tactical approaches across repeated runs.</p></article></div>
      </section>

      <section className="indie-video-section"><div className="section-label"><span>03</span><span>Playable result</span></div><div className="indie-section-head"><h2>A compact system<br />built for pressure.</h2><p>I designed and programmed the core gameplay system and created selected levels and combat encounters. The finished prototype turns a small set of rules into escalating psychological pressure.</p></div><figure className="indie-video"><video controls playsInline preload="metadata" poster="/media/reapers-combat.png"><source src="/media/reapers-gameplay.mp4" type="video/mp4" /></video><figcaption>Gameplay overview</figcaption></figure></section>
    </> : null}

    {isCapybara ? <>
      <section className="indie-section indie-section--light">
        <div className="section-label"><span>01</span><span>Narrative game loop</span></div>
        <div className="indie-section-head"><h2>Investigate the murder.<br />Then erase the truth.</h2><p>Players search a wordless town for sets of three connected clues. Each completed set reconstructs a fragmented memory sequence, gradually revealing that the capybara investigating the murder is also the killer.</p></div>
        <div className="indie-loop"><article><span>01</span><h3>Collect three clues</h3><p>Read visual information and interactions instead of dialogue-heavy instructions.</p></article><article><span>02</span><h3>Seven-day investigation</h3><p>The notice board updates with the strongest evidence gathered across each in-game day.</p></article><article><span>03</span><h3>Reverse the objective</h3><p>Locate and destroy the critical evidence before it leads to imprisonment.</p></article></div>
        <div className="indie-capy-gallery"><img src="/media/capybara-town-01.jpg" alt="Capybara investigating a clue in the town" loading="lazy" /><img src="/media/capybara-town-02.jpg" alt="Capybara encountering a nervous suspect" loading="lazy" /><img src="/media/capybara-town-03.jpg" alt="Capybara receiving an interaction prompt near evidence" loading="lazy" /></div>
      </section>

      <section className="indie-section indie-section--dark">
        <div className="section-label dark"><span>02</span><span>Player guidance</span></div>
        <div className="indie-section-head"><h2>Let behaviour point<br />toward the next clue.</h2><p>AI townsfolk, police and nervous suspects keep the sandbox readable without explicit directions. Panicked suspects may run toward important locations, subtly guiding players toward evidence they have not yet discovered.</p></div>
        <div className="indie-video-pair"><figure><video controls playsInline preload="metadata" poster="/media/capybara-town-01.jpg"><source src="/media/capybara-destroy-evidence.mp4" type="video/mp4" /></video><figcaption>Destroying critical evidence after the narrative reversal</figcaption></figure><figure><video controls playsInline preload="metadata" poster="/media/capybara-town-02.jpg"><source src="/media/capybara-police-ai.mp4" type="video/mp4" /></video><figcaption>AI police and suspect behaviour in the sandbox</figcaption></figure></div>
      </section>

      <section className="indie-contribution"><div className="section-label"><span>03</span><span>My contribution</span></div><div className="indie-section-head"><h2>System design,<br />code and world building.</h2><p>I designed and programmed the core gameplay system and created selected visual and environmental assets. The result combines investigation, environmental storytelling and a mid-game objective reversal inside one compact sandbox.</p></div></section>
    </> : null}

    {!isReapers && !isCapybara ? <>
      <section className="indie-cultural-context">
        <div className="section-label dark"><span>01</span><span>Cultural translation</span></div>
        <div className="indie-section-head"><h2>From a Chinese social phrase<br />to a playable punchline.</h2><p>In China, <em>pengci</em> (碰瓷, literally “bumping porcelain”) is a widely understood slang term for staging an accident or fabricating responsibility in order to claim compensation. The premise is socially familiar, morally uncomfortable and often discussed through satire.</p></div>
        <div className="indie-cultural-idea"><span>The creative idea</span><strong>I turned the cultural reference into the rule itself.</strong><p>Instead of explaining the joke through dialogue, distance becomes the punchline. Players immediately understand “too close, too far, or just convincing enough”—even if they have never heard the word <em>pengci</em> before.</p></div>
      </section>

      <section className="indie-section indie-section--light">
        <div className="section-label"><span>02</span><span>One-button rule</span></div>
        <div className="indie-section-head"><h2>One button.<br />One precise distance.</h2><p>The entire game is controlled with the Space bar. The humour and tension both come from judging where to stop in relation to an approaching vehicle.</p></div>
        <div className="indie-threshold-grid"><article><span>Too close</span><strong>Immediate failure</strong><p>The vehicle hits the character before the staged collision can succeed.</p></article><article className="is-success"><span>Exact threshold</span><strong>Earn the reward</strong><p>Stop inside the narrow danger zone and the collision is convincing enough to earn money.</p></article><article><span>Too far</span><strong>No reward</strong><p>The driver brakes early, so the attempt fails without a collision.</p></article></div>
      </section>

      <section className="indie-video-section indie-video-section--dark"><div className="section-label dark"><span>03</span><span>Gameplay result</span></div><div className="indie-section-head"><h2>Risk control expressed<br />through timing.</h2><p>As a solo developer, I translated a culturally specific comic premise into a readable game loop built around distance judgement, timing and immediate feedback.</p></div><figure className="indie-video"><video controls playsInline preload="metadata" poster="/media/pengci-gameplay.jpg"><source src="/media/pengci-gameplay.mp4" type="video/mp4" /></video><figcaption>Gameplay overview · Solo-developed prototype</figcaption></figure></section>
    </> : null}

    <a className="next-project" href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}</strong><ArrowUpRight /></a>
  </main>;
}

function PaintingCollection({ item, next }: { item: WorkItem; next: WorkItem }) {
  return <main className="case-page compact-case painting-case" style={{ "--accent": item.accent } as React.CSSProperties}>
    <nav className="case-nav"><a href="/"><ArrowLeft size={16} /> All work</a><span>Sun Yutong / Portfolio</span></nav>
    <header className="case-hero painting-hero"><div className="case-eyebrow"><span>Visual Art</span><span>Selected collection</span></div><h1>{item.title}</h1><div className="case-intro"><p>{item.summary}</p><dl><div><dt>Practice</dt><dd>{item.role}</dd></div><div><dt>Media</dt><dd>{item.tools.join(" · ")}</dd></div></dl></div></header>

    <section className="painting-collection" aria-label="Selected visual art">
      <div className="painting-group">
        <div className="painting-group-head"><span>01</span><h2>Oil Painting</h2><p>Observational studies in colour, light and material.</p></div>
        <div className="painting-grid painting-grid--oil">
          <figure><img src="/media/painting-1.webp" alt="Oil painting study of a peeled orange" /><figcaption>Oil painting · Still life</figcaption></figure>
          <figure><img src="/media/painting-2.webp" alt="Oil painting still life with flowers and fruit" /><figcaption>Oil painting · Still life</figcaption></figure>
        </div>
      </div>

      <div className="painting-group">
        <div className="painting-group-head"><span>02</span><h2>Digital Painting</h2><p>Character, self-portrait and narrative illustration.</p></div>
        <div className="painting-grid painting-grid--feature">
          <figure><img src="/media/painting-3.webp" alt="Digital painting of a luminous figure beneath an animal spirit" loading="lazy" /><figcaption>Digital painting · Narrative illustration</figcaption></figure>
        </div>

        <div className="painting-series">
          <div className="painting-series-head"><h3>Bridget</h3><p>Character design · Digital illustration</p></div>
          <div className="painting-grid painting-grid--series">
            <figure><img src="/media/bridget-design.webp" alt="Bridget character design sheet with costume, guitar and character notes" loading="lazy" /><figcaption>Character design · Concept sheet</figcaption></figure>
            <figure><img src="/media/bridget-illustration-01.webp" alt="Bridget standing above a neon futuristic city" loading="lazy" /><figcaption>Bridget · City encounter</figcaption></figure>
            <figure><img src="/media/bridget-illustration-02.webp" alt="Bridget reaching through a neon web toward a glowing portal" loading="lazy" /><figcaption>Bridget · Portal encounter</figcaption></figure>
          </div>
        </div>

        <div className="painting-series">
          <div className="painting-series-head"><h3>Allergy</h3><p>Self-portrait series · Digital mixed media</p></div>
          <div className="painting-grid painting-grid--series">
            <figure><img src="/media/allergy-main.webp" alt="Allergy self-portrait combining a pencil portrait, internal anatomy and a prawn" loading="lazy" /><figcaption>Allergy · Self-portrait</figcaption></figure>
            <figure><img src="/media/allergy-tanglement.webp" alt="Allergy variation with tentacles winding across the portrait" loading="lazy" /><figcaption>Allergy · Tanglement</figcaption></figure>
            <figure><img src="/media/allergy-dizziness.webp" alt="Allergy variation with concentric rings and a spreading rash" loading="lazy" /><figcaption>Allergy · Dizziness</figcaption></figure>
          </div>
        </div>
      </div>

      <div className="painting-group">
        <div className="painting-group-head"><span>03</span><h2>Pencil Drawing</h2><p>Observational studies focused on form, value and material contrast.</p></div>
        <div className="painting-grid painting-grid--sketches">
          <figure><img src="/media/pencil-still-life-2021.webp" alt="Pencil still life with a lidded vessel, fruit and draped cloth" loading="lazy" /><figcaption>Pencil · Observational still life · 2021</figcaption></figure>
          <figure><img src="/media/pencil-still-life-2022.webp" alt="Pencil still life with a metal cylinder, pipe and draped fabric" loading="lazy" /><figcaption>Pencil · Observational still life · 2022</figcaption></figure>
        </div>
      </div>
    </section>

    <a className="next-project" href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}</strong><ArrowUpRight /></a>
  </main>;
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getWork(resolveWorkSlug(slug));
  if (!item) notFound();
  const caseOrder = [...featured, ...work.filter((entry) => !featured.some((feature) => feature.slug === entry.slug))];
  const index = caseOrder.findIndex((entry) => entry.slug === item.slug);
  const next = caseOrder[(index + 1) % caseOrder.length];
  if (item.slug === "echos-of-her") return <EchosCaseStudy item={item} next={next} />;
  if (item.slug === "rollercoaster-tycoon-wonderworks") return <RctCaseStudy item={item} next={next} />;
  if (item.slug === "meat-lover") return <MeatLoverCaseStudy item={item} next={next} />;
  if (item.slug === "lets-build-a-dungeon") return <LetsBuildDungeonCaseStudy item={item} next={next} />;
  if (item.slug === "soul-vein") return <SoulVeinCaseStudy item={item} next={next} />;
  if (["reapers-roulette", "untitled-capybara", "pengci-grandma"].includes(item.slug)) return <IndieGameCaseStudy item={item} next={next} />;
  if (item.slug === "painting") return <PaintingCollection item={item} next={next} />;
  return <main className="case-page compact-case" style={{ "--accent": item.accent } as React.CSSProperties}>
    <nav className="case-nav"><a href="/"><ArrowLeft size={16} /> All work</a><span>Sun Yutong / Portfolio</span></nav>
    <header className="case-hero"><div className="case-eyebrow"><span>{item.category}</span><span>{item.depth === "case" ? "Case study" : "Selected project"}</span></div><h1>{item.title}</h1><div className="case-intro"><p>{item.summary}</p><dl><div><dt>Role</dt><dd>{item.role}</dd></div><div><dt>Tools</dt><dd>{item.tools.join(" · ")}</dd></div></dl></div></header>
    <div className={`case-visual ${item.videoMedia ? "case-visual--video" : ""}`}>{item.videoMedia ? <video controls playsInline preload="metadata" poster={item.videoPoster ?? item.heroMedia}><source src={item.videoMedia} type="video/mp4" />Your browser does not support embedded video.</video> : <img src={item.heroMedia} alt={`${item.title} project hero`} />}</div>
    {item.externalLinks?.length ? <div className="case-links" aria-label="Project links">{item.externalLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={16} /></a>)}</div> : null}
    {item.metrics?.length ? <section className={`case-stats ${item.metrics.length === 1 ? "solo" : ""}`} aria-label="Project results">{item.metrics.map((metric) => <article key={metric.value}><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.context}</p></article>)}</section> : null}
    {item.gallery.length ? <section className="case-gallery">{item.gallery.map((image, imageIndex) => <img key={image} src={image} alt={`${item.title} project image ${imageIndex + 1}`} loading="lazy" />)}</section> : null}
    <a className="next-project" href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}</strong><ArrowUpRight /></a>
  </main>;
}
