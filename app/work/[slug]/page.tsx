import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getWork, work } from "@/lib/work";

export function generateStaticParams() { return work.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getWork(slug);
  return item ? { title: `${item.title} — Sun Yutong`, description: item.summary } : {};
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();
  const index = work.findIndex((entry) => entry.slug === slug);
  const next = work[(index + 1) % work.length];
  const sections = item.sections?.length ? item.sections : [
    { title: "Project", body: item.summary },
    { title: "Contribution", body: `I worked across ${item.role.toLowerCase()}, using ${item.tools.join(", ")} to shape a clear and purposeful result.` },
  ];
  return <main className="case-page" style={{ "--accent": item.accent } as React.CSSProperties}>
    <nav className="case-nav"><Link href="/"><ArrowLeft size={16} /> All work</Link><span>Sun Yutong / Portfolio</span></nav>
    <header className="case-hero"><div className="case-eyebrow"><span>{item.category}</span><span>{item.depth === "case" ? "Case study" : "Selected project"}</span></div><h1>{item.title}</h1><div className="case-intro"><p>{item.summary}</p><dl><div><dt>Role</dt><dd>{item.role}</dd></div><div><dt>Tools</dt><dd>{item.tools.join(" · ")}</dd></div></dl></div></header>
    <div className="case-visual"><img src={item.heroMedia} alt={`${item.title} project hero`} /></div>
    <section className="case-sections">{sections.map((section) => <article className="case-section" key={section.title}><h2>{section.title}</h2><p>{section.body}</p></article>)}</section>
    {item.metrics?.length ? <section className="case-stats" aria-label="Project results">{item.metrics.map((metric) => <article key={metric.value}><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.context}</p></article>)}</section> : null}
    <section className="case-gallery">{item.gallery.map((image, imageIndex) => <img key={image} src={image} alt={`${item.title} project image ${imageIndex + 1}`} loading="lazy" />)}</section>
    <Link className="next-project" href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}</strong><ArrowUpRight /></Link>
  </main>;
}
