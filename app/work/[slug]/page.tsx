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
  const resultFirstPattern = /outcome|result|impact|my role|contribution/i;
  const orderedSections = [
    ...sections.filter((section) => resultFirstPattern.test(section.title)),
    ...sections.filter((section) => !resultFirstPattern.test(section.title)),
  ];
  return <main className="case-page" style={{ "--accent": item.accent } as React.CSSProperties}>
    <nav className="case-nav"><a href="/"><ArrowLeft size={16} /> All work</a><span>Sun Yutong / Portfolio</span></nav>
    <header className="case-hero"><div className="case-eyebrow"><span>{item.category}</span><span>{item.depth === "case" ? "Case study" : "Selected project"}</span></div><h1>{item.title}</h1><div className="case-intro"><p>{item.summary}</p><dl><div><dt>Role</dt><dd>{item.role}</dd></div><div><dt>Tools</dt><dd>{item.tools.join(" · ")}</dd></div></dl></div></header>
    <div className="case-visual"><img src={item.heroMedia} alt={`${item.title} project hero`} /></div>
    {item.metrics?.length ? <section className={`case-stats ${item.metrics.length === 1 ? "solo" : ""}`} aria-label="Project results">{item.metrics.map((metric) => <article key={metric.value}><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.context}</p></article>)}</section> : null}
    <section className="case-gallery">{item.gallery.map((image, imageIndex) => <img key={image} src={image} alt={`${item.title} project image ${imageIndex + 1}`} loading="lazy" />)}</section>
    <section className="case-sections">{orderedSections.map((section) => <article className="case-section" key={section.title}><h2>{section.title}</h2><p>{section.body}</p></article>)}</section>
    <a className="next-project" href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}</strong><ArrowUpRight /></a>
  </main>;
}
