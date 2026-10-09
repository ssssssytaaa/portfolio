import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { featured, getWork, work, type WorkItem } from "@/lib/work";

export function generateStaticParams() { return work.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getWork(slug);
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
      <div><span className="section-kicker">01 · Recognition</span><h2>A personal work,<br />made public.</h2></div>
      <ol>{item.recognition?.map((award, index) => <li key={award}><span>{String(index + 1).padStart(2, "0")}</span><strong>{award}</strong></li>)}</ol>
    </section>

    <section className="echos-video-section">
      <div className="section-label"><span>02</span><span>Film introduction</span></div>
      <div className="echos-video-copy"><h2>A moving portrait<br />of women across time.</h2><p>Created as a digital film, Echos of Her layers portraiture, landscape and cultural memory into a continuous visual journey. Women emerge as creators, healers, workers, guardians and pioneers—each carrying history forward.</p></div>
      <figure className="echos-hero-image"><video autoPlay muted loop playsInline controls poster="/media/echos-screen.webp" aria-label="Echos of Her playing on the West Lake public screen"><source src="/media/echos-hero-desktop.mp4" type="video/mp4" /></video><figcaption>West Lake, Hangzhou · Landmark public LED façade · 170 × 18 m</figcaption></figure>
    </section>

    <section className="echos-statement">
      <div className="section-label"><span>03</span><span>Project statement</span></div>
      <div><p className="echos-lead">A tribute to women’s growth, cultural memory and the identities carried across generations.</p><p>{item.sections[0].body}</p></div>
    </section>

    <section className="echos-artwork">
      <div className="section-label"><span>04</span><span>Selected visual chapters</span></div>
      <div className="echos-section-intro"><h2>A story designed<br />to unfold horizontally.</h2><p>The panoramic format brings portraits, landscape, archival texture and symbolism into one continuous visual journey. Each chapter can stand alone, while the sequence builds a collective portrait across time.</p></div>
      <div className="echos-panoramas">{artwork.map((media, index) => <figure key={media.src}><img src={media.src} alt={media.alt} loading="lazy" /><figcaption><span>{String(index + 1).padStart(2, "0")}</span>{media.caption}</figcaption></figure>)}</div>
    </section>

    {item.metrics?.length ? <section className="case-stats echos-stats" aria-label="Project results">{item.metrics.map((metric) => <article key={`${metric.value}-${metric.label}`}><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.context}</p></article>)}</section> : null}

    <section className="echos-documentation">
      <div className="section-label"><span>05</span><span>Recognition & global exhibition</span></div>
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
        <p>{item.summary}</p>
        <dl><div><dt>Role</dt><dd>{item.role}</dd></div><div><dt>Internship</dt><dd>May–August 2026</dd></div><div><dt>Studio / Publisher</dt><dd>Springloaded · Atari</dd></div></dl>
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
      <div className="section-label"><span>01</span><span>Announcement trailer</span></div>
      <div className="rct-section-intro"><h2>Building the world<br />behind the trailer.</h2><p>I built the in-game scenes used in the announcement trailer, arranging rides, scenery and park layouts for clear, visually engaging shots. My QA and game-balance work gave me a detailed understanding of the systems I was presenting on screen.</p></div>
      <div className="rct-video"><iframe src="https://www.youtube-nocookie.com/embed/QWsU277r8OM" title="RollerCoaster Tycoon Wonderworks official announcement trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
      {item.metrics?.length ? <section className="case-stats rct-stats" aria-label="Announcement trailer performance">{item.metrics.map((metric) => <article key={`${metric.value}-${metric.label}`}><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.context}</p></article>)}</section> : null}
      <p className="rct-metric-note">Public YouTube figures checked 9 October 2026. View and like counts will continue to change.</p>
    </section>

    <section className="rct-contribution">
      <div className="section-label dark"><span>02</span><span>My contribution</span></div>
      <div className="rct-contribution-head"><h2>Three connected<br />production lenses.</h2><p>My internship role crossed product quality and product communication. Each area sharpened a different part of the same question: what will the player notice, understand and feel?</p></div>
      <div className="rct-contribution-grid">
        {item.sections.slice(2, 5).map((section, index) => <article key={section.title}><span>0{index + 1}</span><h3>{section.title}</h3><p>{section.body}</p></article>)}
      </div>
    </section>

    <section className="rct-product">
      <div className="section-label"><span>03</span><span>Project context</span></div>
      <div className="rct-section-intro"><h2>A classic simulation,<br />rebuilt around chaos.</h2><p>{item.sections[0].body} Official Steam information describes custom coaster construction, ride tuning, guest needs, staff management and physics-driven destruction across Hollow Creek and Forest Frontiers.</p></div>
      <div className="rct-gallery">{item.gallery.map((image, index) => <figure key={image}><img src={image} alt={index === 0 ? "RollerCoaster Tycoon Wonderworks coaster builder interface" : "RollerCoaster Tycoon Wonderworks rescue helicopter and ride debris"} loading="lazy" /><figcaption>{index === 0 ? "Custom coaster construction" : "Chaos physics and rescue systems"}</figcaption></figure>)}</div>
      <a className="rct-source" href="https://store.steampowered.com/app/4734550/RollerCoaster_Tycoon_Wonderworks/" target="_blank" rel="noreferrer">High-resolution imagery and project information: official Steam listing <ArrowUpRight /></a>
    </section>

    <a className="next-project" href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}</strong><ArrowUpRight /></a>
  </main>;
}

function MeatLoverCaseStudy({ item, next }: { item: WorkItem; next: WorkItem }) {
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
        <div className="meat-hero-copy"><p>{item.summary}</p><dl><div><dt>Role</dt><dd>{item.role}</dd></div><div><dt>Focus</dt><dd>Player insight · Platform strategy · Community growth</dd></div></dl></div>
      </div>
    </header>

    <section className="meat-concept">
      <div className="section-label"><span>01</span><span>The game</span></div>
      <div className="meat-section-heading"><h2>Precision cutting.<br />Delicious pressure.</h2><p>{item.sections[0].body}</p></div>
      <div className="meat-concept-grid">
        <figure><img src="/media/meat-identity.webp" alt="Meat Lover cutting board, cleaver and pixel-art game scene" loading="lazy" /><figcaption>Core cutting loop · Level one</figcaption></figure>
        <div className="meat-mechanics"><article><span>01</span><h3>Exact weight</h3><p>Read the meat as a puzzle and cut to the requested gram target.</p></article><article><span>02</span><h3>Limited cuts</h3><p>Every slice matters, turning a tactile action into a planning problem.</p></article><article><span>03</span><h3>Minimal waste</h3><p>Remove fat and unwanted pieces without damaging the useful meat.</p></article></div>
      </div>
    </section>

    <section className="meat-positioning">
      <div className="section-label dark"><span>02</span><span>From product to positioning</span></div>
      <div className="meat-positioning-head"><h2>Find the behaviour.<br />Build the hook.</h2><p>{item.sections[1].body}</p></div>
      <ol className="meat-process"><li><span>01</span><strong>Research platform trends</strong><p>Study how people discover, trust and interact with content on each channel.</p></li><li><span>02</span><strong>Define the audience</strong><p>Focus on puzzle players and people drawn to satisfying visual payoffs.</p></li><li><span>03</span><strong>Adapt the creative</strong><p>Turn one product idea into platform-native posts, challenges and short videos.</p></li><li><span>04</span><strong>Convert attention</strong><p>Move from meme-led discovery to gameplay, development and a clear call to action.</p></li></ol>
    </section>

    <section className="meat-hook">
      <div className="section-label"><span>03</span><span>Creative iteration</span></div>
      <div className="meat-hook-grid"><div><p className="meat-overline">Puzzle × satisfying</p><h2>“You only have<br />two cuts.”</h2><p>The strongest short-form creative introduced a challenge immediately, then held attention with fast, smooth cutting and amplified sound. The question gave the right audience a reason to stay for the result.</p><div className="meat-hook-tags"><span>Challenge-led opening</span><span>Visual payoff</span><span>Enhanced cutting sound</span></div></div><figure><img src="/media/meat-social.webp" alt="Vertical Meat Lover challenge post asking players to remove all the fat in two cuts" loading="lazy" /><figcaption>Short-form challenge creative</figcaption></figure></div>
    </section>

    <section className="meat-channels">
      <div className="section-label dark"><span>04</span><span>Platform-native content</span></div>
      <div className="meat-section-heading"><h2>One game.<br />Four ways in.</h2><p>{item.sections[3].body}</p></div>
      <div className="meat-channel-grid"><article><span>RedNote</span><h3>Visual, personal, interactive</h3><p>Player-POV recommendations, character-led posts, quizzes and choices made discovery feel authentic and participatory.</p></article><article><span>TikTok + Instagram</span><h3>Hook first, sell later</h3><p>Relatable memes reached beyond core players before challenges and gameplay turned attention into curiosity.</p></article><article><span>Reddit</span><h3>Feedback as development</h3><p>Prototype posts invited detailed player responses, creating an early validation loop around readability and challenge.</p></article><article><span>YouTube</span><h3>Gameplay with context</h3><p>Longer-form clips let the cutting loop, challenge and product personality read more clearly.</p></article></div>
    </section>

    <section className="meat-community">
      <div className="section-label"><span>05</span><span>Community & identity</span></div>
      <div className="meat-community-grid"><figure><img src="/media/meat-ui.webp" alt="A RedNote Meat Lover post featuring the personified meat character and community comments" loading="lazy" /><figcaption>Character voice, comments and clear calls to action</figcaption></figure><div><h2>Make the meat<br />worth following.</h2><p>We replied to comments, treated suggestions as product input and gave the meat a distinct personality. The character became more than key art: it carried the account voice and made every post recognisably part of the same world.</p><ul><li>Proactive community interaction</li><li>User-driven improvements</li><li>Clear calls to action</li><li>A recognisable IP identity</li></ul></div></div>
    </section>

    {item.metrics?.length ? <section className="case-stats meat-stats" aria-label="Meat Lover campaign results">{item.metrics.map((metric) => <article key={`${metric.value}-${metric.label}`}><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.context}</p></article>)}</section> : null}

    <section className="meat-conversion">
      <div className="section-label"><span>06</span><span>One-day link conversion</span></div>
      <div className="meat-conversion-grid"><div><p className="meat-overline">Strongest tracked channel</p><strong>22.4%</strong><h2>RedNote conversion</h2><p>39 clicks from 174 tracked views in the one-day comparison.</p></div><div className="meat-bars">{channelResults.map((result) => <article key={result.channel}><div><strong>{result.channel}</strong><span>{result.views} views · {result.clicks} clicks</span><b>{result.rate}</b></div><i><span style={{ width: result.width }} /></i></article>)}</div></div>
      <p className="meat-data-note">Campaign snapshots and one-day link tracking cover different reporting windows and are presented separately.</p>
    </section>

    <a className="next-project" href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}</strong><ArrowUpRight /></a>
  </main>;
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();
  const caseOrder = [...featured, ...work.filter((entry) => !featured.some((feature) => feature.slug === entry.slug))];
  const index = caseOrder.findIndex((entry) => entry.slug === slug);
  const next = caseOrder[(index + 1) % caseOrder.length];
  if (item.slug === "echos-of-her") return <EchosCaseStudy item={item} next={next} />;
  if (item.slug === "rollercoaster-tycoon-wonderworks") return <RctCaseStudy item={item} next={next} />;
  if (item.slug === "meat-lover") return <MeatLoverCaseStudy item={item} next={next} />;
  const sections = item.sections?.length ? item.sections : [
    { title: "Project", body: item.summary },
    { title: "Contribution", body: `I worked across ${item.role.toLowerCase()}, using ${item.tools.join(", ")} to shape a clear and purposeful result.` },
  ];
  return <main className="case-page" style={{ "--accent": item.accent } as React.CSSProperties}>
    <nav className="case-nav"><a href="/"><ArrowLeft size={16} /> All work</a><span>Sun Yutong / Portfolio</span></nav>
    <header className="case-hero"><div className="case-eyebrow"><span>{item.category}</span><span>{item.depth === "case" ? "Case study" : "Selected project"}</span></div><h1>{item.title}</h1><div className="case-intro"><p>{item.summary}</p><dl><div><dt>Role</dt><dd>{item.role}</dd></div><div><dt>Tools</dt><dd>{item.tools.join(" · ")}</dd></div></dl></div></header>
    <div className="case-visual"><img src={item.heroMedia} alt={`${item.title} project hero`} /></div>
    <section className="case-sections">{sections.map((section) => <article className="case-section" key={section.title}><h2>{section.title}</h2><p>{section.body}</p></article>)}</section>
    {item.metrics?.length ? <section className={`case-stats ${item.metrics.length === 1 ? "solo" : ""}`} aria-label="Project results">{item.metrics.map((metric) => <article key={metric.value}><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.context}</p></article>)}</section> : null}
    <section className="case-gallery">{item.gallery.map((image, imageIndex) => <img key={image} src={image} alt={`${item.title} project image ${imageIndex + 1}`} loading="lazy" />)}</section>
    <a className="next-project" href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}</strong><ArrowUpRight /></a>
  </main>;
}
