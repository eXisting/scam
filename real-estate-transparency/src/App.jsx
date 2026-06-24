import './App.css'

const redFlags = [
  'Police reports have been filed by people describing real estate fraud connected to Anna Osipenko',
  'Victims report pressure to transfer deposits or fees before independent verification is complete',
  'Reported promises, listings, or transaction details allegedly did not match reality after payment',
]

const timeline = [
  {
    date: 'December 2024',
    title: 'First reported scam activity',
    text: 'Victims began documenting real estate dealings connected to Anna Osipenko and preserving messages, payment records, and property claims.',
  },
  {
    date: '2025',
    title: 'Victims filed police reports',
    text: 'Four police reports are connected to the accusations, with victims alleging losses from Bali real estate promises and related transactions.',
  },
  {
    date: 'Ongoing',
    title: 'Police investigation continues',
    text: 'The case is described as an ongoing police investigation. Anyone contacted about a property deal should stop payment and preserve evidence.',
  },
]

const reportLinks = [
  'Existing police report numbers and complaint dates',
  'Payment receipts, bank details, crypto wallet IDs, or transfer confirmations',
  'Screenshots of listings, messages, contracts, passports, or identity claims',
  'Names of platforms, agencies, companies, or intermediaries used in the transaction',
]

const losses = [
  {
    label: 'Reported stolen',
    value: '$500,000+',
    detail: 'Reported total stolen across victim statements and police-related evidence.',
  },
  {
    label: 'People scammed',
    value: '10+',
    detail: 'People reported as scammed in connection with the alleged Bali real estate scheme.',
  },
  {
    label: 'Police reports',
    value: '4',
    detail: 'Police reports filed as part of the ongoing investigation.',
  },
]

const projects = [
  {
    name: 'IJI Home Group',
    url: 'https://www.ijihomegroup.com/en/home',
    note: 'Real estate project link connected to Anna Osipenko research.',
  },
  {
    name: 'Rahya Villas Bali',
    url: 'https://www.instagram.com/rahyavillasbali/?hl=en',
    note: 'Instagram project page connected to Bali property promotion.',
  },
]

function App() {
  return (
    <main className="site-shell">
      <section className="hero-section" aria-labelledby="page-title">
        <div className="scammer-sticker" aria-label="Scammer accusation sticker">
          Scammer
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Bali scammer alert</p>
          <h1 id="page-title">Anna Osipenko</h1>
          <p className="hero-lede">
            Anna Osipenko is accused by victims of running a real estate scam. Police reports have already been filed, and the matter is described here as an ongoing police investigation.
          </p>
          <p className="hero-warning">Do not send money. Do not sign. Do not trust property promises without a lawyer and police-verified documents.</p>
          <div className="hero-actions" aria-label="Primary actions">
            <a href="#evidence" className="button primary">
              See scam accusations
            </a>
            <a href="#losses" className="button secondary">
              View stolen amounts
            </a>
            <a href="#report" className="button secondary">
              Submit police evidence
            </a>
            <a
              href="https://www.instagram.com/anna.businessmama/?hl=en"
              className="button secondary"
              target="_blank"
              rel="noreferrer"
            >
              Anna Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="loss-section" id="losses">
        <div className="section-heading">
          <p className="section-label">Reported losses</p>
          <h2>Amount allegedly stolen from victims</h2>
          <p>
            Victims report more than $500,000 stolen, more than 10 people scammed, and 4 police reports connected to the ongoing investigation.
          </p>
        </div>
        <div className="loss-grid">
          {losses.map((item) => (
            <article className="loss-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="notice-band" aria-label="Important notice">
        <strong>Ongoing investigation with police:</strong> this page documents scam accusations, victim reports, 4 police reports, and $500,000+ allegedly stolen since December 2024.
      </section>

      <section className="projects-section" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="section-label">Linked projects</p>
          <h2 id="projects-title">Projects and profiles to verify</h2>
          <p>
            These links are included so victims, police, journalists, and potential buyers can verify the public-facing projects and profiles connected to the accusations.
          </p>
        </div>
        <div className="project-links">
          {projects.map((project) => (
            <a
              className="project-link"
              href={project.url}
              key={project.name}
              target="_blank"
              rel="noreferrer"
            >
              <span>{project.name}</span>
              <p>{project.note}</p>
              <strong>{project.url}</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="content-grid" id="evidence">
        <article className="panel main-panel">
          <p className="section-label">Accusations</p>
          <h2>Anna Osipenko is accused of being a real estate scammer</h2>
          <p>
            Victims have reportedly gone to police after real estate dealings connected to Anna Osipenko. The accusation is serious: money was requested or received in connection with Bali property promises that victims say were misleading, false, or never fulfilled.
          </p>
          <ul className="flag-list">
            {redFlags.map((flag) => (
              <li key={flag}>{flag}</li>
            ))}
          </ul>
        </article>

        <aside className="panel status-panel" aria-label="Case status">
          <p className="section-label">Case status</p>
          <h2>Police-reported</h2>
          <dl>
            <div>
              <dt>Police reports</dt>
              <dd>4 filed reports</dd>
            </div>
            <div>
              <dt>Investigation</dt>
              <dd>Ongoing with police</dd>
            </div>
            <div>
              <dt>Public label</dt>
              <dd>Bali scammer accusations</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="timeline-section">
        <div className="section-heading">
          <p className="section-label">Public record</p>
          <h2>The accusation trail should be visible</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={item.title}>
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="report-section" id="report">
        <div>
          <p className="section-label">Victim evidence</p>
          <h2>Send proof connected to the police reports</h2>
          <p>
            Strong accusations need strong documentation. Submit only materials you can prove are authentic, and redact sensitive personal data before publishing anything publicly.
          </p>
        </div>
        <ul className="report-list">
          {reportLinks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="contact-strip" aria-label="Contact">
        <div>
          <p className="section-label">Expose the case</p>
          <h2>Have police documents or victim proof?</h2>
        </div>
        <a className="button primary" href="mailto:evidence@example.com?subject=Anna%20Osipenko%20real%20estate%20case">
          Email police evidence
        </a>
      </section>
    </main>
  )
}

export default App
