"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Download, Mail } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { categories, featured, secondaryWork, work } from "@/lib/work";

function Header() {
  return <header className="site-header"><Link href="#top" className="wordmark">SY<span>®</span></Link><nav aria-label="Main navigation"><Link href="#about">About</Link><Link href="#work">Work</Link><Link href="#contact">Contact</Link></nav><a className="header-cta" href="mailto:sunyutong662@gmail.com">Let’s talk <ArrowUpRight size={15} /></a></header>;
}

function Hero() {
  return <section className="hero" id="top">
    <div className="hero-video">
      <video autoPlay muted playsInline loop preload="auto" poster="/media/echos-poster.webp" aria-label="A preview of Echos of Her" onTimeUpdate={(e) => { if (e.currentTarget.currentTime >= 40) e.currentTarget.currentTime = 0; }}>
        <source media="(max-width: 720px)" src="/media/echos-hero-mobile.mp4" type="video/mp4" /><source src="/media/echos-hero-desktop.mp4" type="video/mp4" />
      </video>
    </div>
    <p className="hero-kicker">Singapore · Open to opportunities</p>
    <h1 aria-label="Creative marketer"><span>CREATIVE</span><span>MARKETER</span></h1>
    <Link href="/work/echos-of-her" className="video-label"><span>Featured project · 2025</span><strong>Echos of Her</strong><ArrowUpRight /></Link>
    <div className="hero-bottom"><p>Creative Marketing<br />& Player Experience</p><p>I turn player insight into ideas, stories and campaigns that people want to enter.</p><div className="hero-profile"><span>PROFILE</span><strong>Sun Yutong</strong><small>● Available for opportunities</small></div><a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDownRight /></a></div>
  </section>;
}

function Marquee() {
  const items = [...work.slice(0, 8), ...work.slice(0, 8)];
  return <section className="marquee-section" aria-label="Selected work preview">{[false, true].map((reverse) => <div className={`marquee-row ${reverse ? "reverse" : ""}`} key={String(reverse)}><div className="marquee-track">{items.map((item, index) => <Link href={`/work/${item.slug}`} className="marquee-card" key={`${item.slug}-${index}`}><img src={item.heroMedia} alt="" loading="lazy" /><span>{item.title}</span></Link>)}</div></div>)}</section>;
}

function About() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [70, -50]);
  const words = "I combine game thinking, visual storytelling and performance-aware marketing to shape experiences that feel distinct—and give audiences a reason to care.".split(" ");
  return <section className="about" id="about" ref={ref}><div className="section-label"><span>01</span><span>About</span></div><h2>ABOUT ME</h2><div className="about-grid">
    <motion.img style={{ y }} src="/media/portrait.webp" alt="Sun Yutong" loading="lazy" />
    <p className="reveal-copy">{words.map((word, index) => <motion.span key={`${word}-${index}`} initial={{ opacity: .15 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-12% 0px -12%" }} transition={{ delay: index * .018 }}>{word} </motion.span>)}</p>
    <img className="about-art art-one" src="/media/bridget.webp" alt="Character artwork from Bridget" loading="lazy" /><img className="about-art art-two" src="/media/car.webp" alt="3D vehicle model" loading="lazy" /><p className="about-note">Based in Singapore<br />NTU, Media Art — Game Design<br />2023—2027</p>
  </div></section>;
}

const capabilities = [
  ["Creative Marketing", "Positioning, campaign concepts and content that translate product strengths into audience desire."],
  ["Content Strategy", "Platform-aware ideas, publishing systems and iteration informed by real audience behaviour."],
  ["Player Experience", "A player-first lens connecting communication, interaction and the emotional arc of a product."],
  ["Game Design & Production", "Hands-on prototyping across systems, level flow, narrative, QA and asset integration."],
  ["Visual Storytelling", "Art direction and motion-led compositions that make complex ideas instantly legible."],
];

function Capabilities() {
  return <section className="capabilities"><div className="section-label dark"><span>02</span><span>Capabilities</span></div><p className="cap-intro">A hybrid practice for teams that need both the idea and the way it reaches people.</p><div className="cap-list">{capabilities.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>;
}

function Featured() {
  return <section className="featured" id="work"><div className="section-label"><span>03</span><span>Featured case studies</span></div><h2>Selected work,<br /><em>built to connect.</em></h2><div className="feature-stack">{featured.map((item, index) => <article className="feature-card" key={item.slug} style={{ "--accent": item.accent, "--i": index } as React.CSSProperties}>
    <div className="feature-meta"><span>0{index + 1}</span><span>{item.category}</span></div><div className="feature-images"><img src={item.heroMedia} alt={`${item.title} project`} loading="lazy" /><img src={item.gallery[0]} alt="" loading="lazy" /><img src={item.gallery[1]} alt="" loading="lazy" /></div><div className="feature-copy"><div><p>{item.role}</p><h3>{item.title}</h3></div><Link href={`/work/${item.slug}`}>View case study <ArrowUpRight /></Link></div>
  </article>)}</div></section>;
}

const impact = [["10", "Cities", "Echos of Her toured across ten cities in China."], ["170 × 18 m", "Public screen", "A landmark-scale presentation in Hangzhou."], ["~500 / 3 days", "New followers", "Meat Lover turned launch attention into community."], ["22.4%", "Conversion", "39 clicks from 174 tracked landing-page views."]];
function Impact() { return <section className="impact"><div className="section-label"><span>04</span><span>Selected impact</span></div><div className="impact-grid">{impact.map(([value, label, context]) => <article key={value}><strong>{value}</strong><h3>{label}</h3><p>{context}</p></article>)}</div></section>; }

function Library() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(() => active === "All" ? secondaryWork : secondaryWork.filter((item) => item.category === active), [active]);
  return <section className="library"><div className="library-head"><div><div className="section-label"><span>05</span><span>Complete library</span></div><h2>MORE WORK</h2></div><div className="filters" aria-label="Filter projects">{categories.map((cat) => <button key={cat} className={active === cat ? "active" : ""} onClick={() => setActive(cat)}>{cat}</button>)}</div></div><motion.div layout className="work-grid">{filtered.map((item, index) => <motion.article layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={item.slug} className={`work-card ${index % 5 === 0 ? "wide" : ""}`}><Link href={`/work/${item.slug}`}><div className="work-image"><img src={item.heroMedia} alt={`${item.title} preview`} loading="lazy" /><span><ArrowUpRight /></span></div><p>{item.category}</p><h3>{item.title}</h3><small>{item.role}</small></Link></motion.article>)}</motion.div></section>;
}

function Contact() {
  return <footer id="contact"><div className="footer-top"><p>Have a role, brief or curious idea?</p><a href="mailto:sunyutong662@gmail.com">LET’S MAKE<br /><em>IT MATTER.</em><ArrowUpRight /></a></div><div className="footer-links"><a href="mailto:sunyutong662@gmail.com"><Mail /> sunyutong662@gmail.com</a><a href="/Sun-Yutong-Resume.pdf" download><Download /> Download résumé</a><a href="#top">Back to top ↑</a></div><div className="footer-base"><span>Sun Yutong © 2026</span><span>Creative Marketing & Player Experience</span></div></footer>;
}

export default function Home() { return <main><Header /><Hero /><Marquee /><About /><Capabilities /><Featured /><Impact /><Library /><Contact /></main>; }
