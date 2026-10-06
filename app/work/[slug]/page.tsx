import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getWork, work, type WorkItem } from "@/lib/work";

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
        <dl><div><dt>Role</dt><dd>{item.role}</dd></div><div><dt>Format</dt><dd>Digital art · Interactive media · Public exhibition</dd></div><div><dt>Tools</dt><dd>{item.tools.join(" · ")}</dd></div></dl>
        {item.externalLinks?.[0] ? <a className="case-project-link" href={item.externalLinks[0].href} target="_blank" rel="noreferrer">{item.externalLinks[0].label}<ArrowUpRight /></a> : null}
      </div>
    </header>

    <figure className="echos-hero-image"><img src={item.heroMedia} alt="Echos of Her presented on a landmark public LED screen" /><figcaption>Hangzhou · Landmark public LED façade · 170 × 18 m</figcaption></figure>

    <section className="echos-statement">
      <div className="section-label"><span>01</span><span>Project statement</span></div>
      <div><p className="echos-lead">A tribute to women’s growth, cultural memory and the identities carried across generations.</p><p>{item.sections[0].body}</p></div>
    </section>

    <section className="echos-recognition">
      <div><span className="section-kicker">Recognition</span><h2>A personal work,<br />made public.</h2></div>
      <ol>{item.recognition?.map((award, index) => <li key={award}><span>{String(index + 1).padStart(2, "0")}</span><strong>{award}</strong></li>)}</ol>
    </section>

    <section className="echos-artwork">
      <div className="section-label"><span>02</span><span>Selected visual chapters</span></div>
      <div className="echos-section-intro"><h2>A story designed<br />to unfold horizontally.</h2><p>The panoramic format brings portraits, landscape, archival texture and symbolism into one continuous visual journey. Each chapter can stand alone, while the sequence builds a collective portrait across time.</p></div>
      <div className="echos-panoramas">{artwork.map((media, index) => <figure key={media.src}><img src={media.src} alt={media.alt} loading="lazy" /><figcaption><span>{String(index + 1).padStart(2, "0")}</span>{media.caption}</figcaption></figure>)}</div>
    </section>

    <section className="echos-thinking">
      {item.sections.slice(1, 4).map((section, index) => <article key={section.title}><span>{String(index + 3).padStart(2, "0")}</span><h2>{section.title}</h2><p>{section.body}</p></article>)}
    </section>

    {item.metrics?.length ? <section className="case-stats echos-stats" aria-label="Project results">{item.metrics.map((metric) => <article key={`${metric.value}-${metric.label}`}><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.context}</p></article>)}</section> : null}

    <section className="echos-documentation">
      <div className="section-label"><span>06</span><span>Recognition & global exhibition</span></div>
      <div className="echos-section-intro"><h2>From award stage<br />to city scale.</h2><p>{item.sections[4].body}</p></div>
      <div className="echos-documentation-grid">{exhibition.map((media) => <figure key={media.src}><img src={media.src} alt={media.alt} loading="lazy" /><figcaption>{media.caption}</figcaption></figure>)}</div>
    </section>

    <section className="echos-materials">
      <div className="section-label"><span>07</span><span>Exhibition materials</span></div>
      <div className="echos-materials-grid">{materials.map((media) => <figure key={media.src}><img src={media.src} alt={media.alt} loading="lazy" /><figcaption>{media.caption}</figcaption></figure>)}</div>
    </section>

    <a className="next-project" href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}</strong><ArrowUpRight /></a>
  </main>;
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();
  const index = work.findIndex((entry) => entry.slug === slug);
  const next = work[(index + 1) % work.length];
  if (item.slug === "echos-of-her") return <EchosCaseStudy item={item} next={next} />;
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
