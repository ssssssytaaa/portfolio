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

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();
  const caseOrder = [...featured, ...work.filter((entry) => !featured.some((feature) => feature.slug === entry.slug))];
  const index = caseOrder.findIndex((entry) => entry.slug === slug);
  const next = caseOrder[(index + 1) % caseOrder.length];
  if (item.slug === "echos-of-her") return <EchosCaseStudy item={item} next={next} />;
  if (item.slug === "rollercoaster-tycoon-wonderworks") return <RctCaseStudy item={item} next={next} />;
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
