const projects = [
  {
    number: "01",
    title: "Raspberry Pi Linux Audio Design",
    description:
      "An embedded audio system built around Raspberry Pi and Linux—exploring the path from hardware and drivers to reliable real-time sound.",
    tags: ["Embedded Linux", "Raspberry Pi", "Audio systems"],
    href: "https://github.com/xiaohet/linux_audio_design",
    accent: "lime",
    mark: "π",
  },
  {
    number: "02",
    title: "Bossy DS2 Guitar Pedal",
    description:
      "A software interpretation of a classic high-gain guitar pedal, translating analog-inspired behavior into a playable audio plugin.",
    tags: ["Audio plugin", "DSP", "Guitar effects"],
    href: "https://github.com/xiaohet/BossyDS2GuitarPedal",
    accent: "orange",
    mark: "DS",
  },
  {
    number: "03",
    title: "Fe59 Tri-Oscillator",
    description:
      "A three-oscillator instrument for shaping harmonically rich tones through synthesis, interaction, and focused sound design.",
    tags: ["Synthesis", "Oscillators", "Instrument design"],
    href: "https://github.com/xiaohet/Fe59TriOscillator",
    accent: "blue",
    mark: "∿",
  },
  {
    number: "04",
    title: "WOOD Multi-Pitch Extraction",
    description:
      "A machine-learning model for identifying simultaneous pitches in complex audio—connecting signal analysis with musical intelligence.",
    tags: ["Machine learning", "Pitch extraction", "Music AI"],
    href: "https://github.com/xiaohet/WOOD_MPE",
    accent: "pink",
    mark: "MPE",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="WOOD Audio Solutions home">
          <span className="brand-mark">
            <i />
            <i />
            <i />
          </span>
          <span>WOOD</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a
            href="https://github.com/xiaohet"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Arrow />
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">
          <span className="status-dot" /> Independent audio technology studio
        </p>
        <h1>
          Sound, engineered
          <br />
          <span>from signal to system.</span>
        </h1>
        <div className="hero-bottom">
          <p>
            WOOD Audio Solutions builds expressive audio software, embedded
            systems, and intelligent tools for musicians and makers.
          </p>
          <a className="round-link" href="#work" aria-label="Explore selected work">
            ↓
          </a>
        </div>
        <div className="signal-line" aria-hidden="true">
          {Array.from({ length: 52 }, (_, i) => (
            <i
              key={i}
              style={
                {
                  "--h": `${18 + Math.abs(Math.sin(i * 0.51)) * 72}%`,
                  "--d": `${i * 18}ms`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-heading">
          <p className="kicker">Selected work · 2024—26</p>
          <h2>Four ways into sound.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <a
              className={`project ${project.accent}`}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.title}
              aria-label={`View ${project.title} on GitHub`}
            >
              <div className="project-topline">
                <span>{project.number}</span>
                <span className="external">
                  View repository <Arrow />
                </span>
              </div>
              <div className="project-visual" aria-hidden="true">
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <strong>{project.mark}</strong>
              </div>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul aria-label="Project topics">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <p className="kicker">About the studio</p>
        <div className="about-grid">
          <h2>Technology should get out of the way of listening.</h2>
          <div className="about-copy">
            <p>
              WOOD Audio Solutions LLC is an independent practice working
              across digital signal processing, embedded audio, music software,
              and machine learning.
            </p>
            <p>
              Each project begins with the same question: how can careful
              engineering make sound more useful, expressive, and alive?
            </p>
            <a
              className="text-link"
              href="https://github.com/xiaohet"
              target="_blank"
              rel="noreferrer"
            >
              Explore all work on GitHub <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">
            <i />
            <i />
            <i />
          </span>
          <span>WOOD Audio Solutions</span>
        </a>
        <p>Audio software · DSP · Embedded systems</p>
        <p>© {new Date().getFullYear()} WOOD Audio Solutions LLC</p>
      </footer>
    </main>
  );
}
