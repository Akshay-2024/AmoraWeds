export default function TermsPage() {
  const sections = [
    {
      icon: "✦",
      title: "Service Scope",
      content:
        "AmoraWeds provides custom wedding and event website creation services based on selected packages and client requirements.",
      list: null,
      table: null,
      footnote: null,
    },
    {
      icon: "⌛",
      title: "Project Delivery",
      content: "Delivery timelines depend on:",
      list: ["Selected package", "Client responsiveness", "Availability of content / materials"],
      table: [
        { label: "Budget Tier", value: "2–3 Days" },
        { label: "Mid Tier", value: "2–4 Days" },
        { label: "Premium Tier", value: "3–5 Days" },
      ],
      footnote: null,
    },
    {
      icon: "◈",
      title: "Payments",
      content: null,
      list: [
        "Advance payment may be required before project initiation.",
        "Full payment must be completed before final website delivery or domain transfer.",
      ],
      table: null,
      footnote: null,
    },
    {
      icon: "✂",
      title: "Revisions",
      content:
        "Limited revisions are provided depending on the selected package. Major redesign requests after approval may involve additional charges.",
      list: null,
      table: null,
      footnote: null,
    },
    {
      icon: "⊹",
      title: "Custom Domain",
      content:
        "Custom domains are included based on package availability. Domain renewal charges after the first period are the client's responsibility.",
      list: null,
      table: null,
      footnote: null,
    },
    {
      icon: "❧",
      title: "Client Responsibilities",
      content: "Clients must provide the following on time for smooth project completion:",
      list: [
        "Photos",
        "Event details",
        "Names",
        "Schedule information",
        "Other required materials",
      ],
      table: null,
      footnote: null,
    },
    {
      icon: "✿",
      title: "Optional Features",
      content:
        "Features such as RSVP, WhatsApp sharing, countdowns, music, and animations may vary depending on package selection.",
      list: null,
      table: null,
      footnote: null,
    },
    {
      icon: "◇",
      title: "Content Ownership",
      content:
        "Clients retain ownership of their uploaded content. AmoraWeds reserves the right to showcase completed projects in portfolios or promotional materials unless requested otherwise.",
      list: null,
      table: null,
      footnote: null,
    },
    {
      icon: "✗",
      title: "Prohibited Usage",
      content: "Clients may not use AmoraWeds services for:",
      list: ["Illegal activities", "Fraudulent purposes", "Harmful or offensive content"],
      table: null,
      footnote: null,
    },
    {
      icon: "⌘",
      title: "Service Modifications",
      content: "AmoraWeds reserves the right to — without prior notice:",
      list: [
        "Modify pricing",
        "Update packages",
        "Improve features",
        "Refuse service in certain cases",
      ],
      table: null,
      footnote: null,
    },
    {
      icon: "⚠",
      title: "Limitation of Liability",
      content: "AmoraWeds is not responsible for:",
      list: [
        "Third-party hosting downtime",
        "Domain provider issues",
        "Internet / network interruptions",
        "Loss caused by incorrect client-provided information",
      ],
      table: null,
      footnote: null,
    },
  ];

  return (
    <main className="tc-root">
      {/* Floating Petals */}
      <div className="petals-container" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className={`petal petal-${i + 1}`} />
        ))}
      </div>

      {/* Hero */}
      <header className="tc-hero">
        <div className="tc-hero-inner">
          <span className="eyebrow">Legal</span>
          <h1 className="tc-title">Terms &amp; Conditions</h1>
          <div className="divider">
            <span className="divider-leaf">❧</span>
          </div>
          <p className="tc-intro">
            By using AmoraWeds services, you agree to the following terms and
            conditions. Please read them carefully before proceeding.
          </p>
        </div>
        <div className="hero-curve" aria-hidden="true" />
      </header>

      {/* Content */}
      <section className="tc-body">
        <div className="tc-container">
          <div className="tc-grid">
            {sections.map((sec, idx) => (
              <article key={idx} className="tc-card">
                <div className="tc-card-icon">{sec.icon}</div>
                <div className="tc-card-content">
                  <h2 className="tc-card-title">{sec.title}</h2>
                  {sec.content && <p className="tc-card-text">{sec.content}</p>}

                  {sec.list && (
                    <ul className="tc-list">
                      {sec.list.map((item, i) => (
                        <li key={i} className="tc-list-item">
                          <span className="tc-bullet">◇</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.table && (
                    <div className="tc-table-wrap">
                      {sec.table.map((row, i) => (
                        <div key={i} className="tc-table-row">
                          <span className="tc-table-label">{row.label}</span>
                          <span className="tc-table-value">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {sec.footnote && <p className="tc-footnote">{sec.footnote}</p>}
                </div>
              </article>
            ))}
          </div>

          {/* Contact card */}
          <div className="tc-contact">
            <div className="tc-contact-deco" aria-hidden="true">❧</div>
            <span className="eyebrow eyebrow--gold">Reach Us</span>
            <h2 className="tc-contact-title">Have Questions?</h2>
            <p className="tc-contact-sub">
              For any queries regarding these terms, feel free to get in touch
              with us directly.
            </p>
            <address className="tc-address">
              <p>University College of Engineering Kariavattom</p>
              <p>TVM, Kerala, India</p>
            </address>
            <div className="tc-contact-actions">
              <a
                href="https://wa.me/YOUR_WHATSAPP_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="tc-contact-btn tc-contact-btn--wa"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0}}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <a href="mailto:amoraweds4@gmail.com" className="tc-contact-btn tc-contact-btn--email">
                amoraweds4@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        :root {
          --rose:       #c9728a;
          --rose-light: #f5e0e6;
          --rose-pale:  #fdf4f6;
          --gold:       #b8914a;
          --gold-light: #e8d5b0;
          --gold-pale:  #fdf8ef;
          --ivory:      #fffaf5;
          --blush:      #faeef2;
          --text-dark:  #3a2c30;
          --text-mid:   #7a5c64;
          --text-soft:  #b89aa0;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .tc-root {
          font-family: 'Jost', sans-serif;
          background: var(--ivory);
          color: var(--text-dark);
          overflow-x: hidden;
          position: relative;
          min-height: 100vh;
        }

        /* ── Petals ── */
        .petals-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .petal {
          position: absolute;
          top: -60px;
          border-radius: 150% 0 150% 0;
          opacity: 0;
          animation: falling linear infinite;
        }
        .petal:nth-child(odd)  { background: var(--rose-light); }
        .petal:nth-child(even) { background: var(--gold-light); }
        .petal:nth-child(3n)   { border-radius: 0 150% 0 150%; }
        .petal:nth-child(5n)   { border-radius: 50% 50% 0 50%; }

        .petal-1  { width:14px; height:18px; left:5%;  animation-duration:10s; animation-delay:0s;   }
        .petal-2  { width:10px; height:14px; left:12%; animation-duration:13s; animation-delay:1.5s; }
        .petal-3  { width:18px; height:22px; left:20%; animation-duration:9s;  animation-delay:3s;   }
        .petal-4  { width:12px; height:16px; left:28%; animation-duration:14s; animation-delay:0.5s; }
        .petal-5  { width:16px; height:20px; left:38%; animation-duration:11s; animation-delay:2s;   }
        .petal-6  { width:10px; height:13px; left:50%; animation-duration:12s; animation-delay:4s;   }
        .petal-7  { width:20px; height:24px; left:60%; animation-duration:10s; animation-delay:1s;   }
        .petal-8  { width:14px; height:18px; left:68%; animation-duration:15s; animation-delay:2.5s; }
        .petal-9  { width:11px; height:15px; left:75%; animation-duration:11s; animation-delay:0.8s; }
        .petal-10 { width:17px; height:21px; left:82%; animation-duration:13s; animation-delay:3.5s; }
        .petal-11 { width:12px; height:16px; left:88%; animation-duration:9s;  animation-delay:1.2s; }
        .petal-12 { width:15px; height:19px; left:93%; animation-duration:12s; animation-delay:4.5s; }
        .petal-13 { width:10px; height:14px; left:8%;  animation-duration:14s; animation-delay:5s;   }
        .petal-14 { width:19px; height:23px; left:45%; animation-duration:10s; animation-delay:6s;   }

        @keyframes falling {
          0%   { transform: translateY(-60px) rotate(0deg)   translateX(0);    opacity: 0; }
          10%  { opacity: 0.7; }
          50%  { transform: translateY(50vh)  rotate(180deg) translateX(30px); }
          90%  { opacity: 0.5; }
          100% { transform: translateY(110vh) rotate(360deg) translateX(-20px); opacity: 0; }
        }

        /* ── Hero ── */
        .tc-hero {
          background: linear-gradient(160deg, var(--blush) 0%, var(--ivory) 100%);
          padding: 6rem 1.5rem 0;
          position: relative;
          z-index: 1;
          text-align: center;
        }
        .tc-hero-inner {
          max-width: 680px;
          margin: 0 auto;
          padding-bottom: 5rem;
        }
        .eyebrow {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--rose);
          margin-bottom: 1rem;
        }
        .eyebrow--gold { color: var(--gold); }
        .tc-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 8vw, 5rem);
          font-weight: 300;
          color: var(--text-dark);
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        .divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.8rem;
        }
        .divider::before, .divider::after {
          content: '';
          display: block;
          width: 60px;
          height: 1px;
          background: var(--gold-light);
        }
        .divider-leaf { color: var(--rose); font-size: 1.2rem; }
        .tc-intro {
          font-size: 1rem;
          font-weight: 300;
          color: var(--text-mid);
          line-height: 1.9;
          max-width: 560px;
          margin: 0 auto;
        }
        .hero-curve {
          width: 100%;
          height: 70px;
          background: var(--ivory);
          clip-path: ellipse(55% 100% at 50% 100%);
        }

        /* ── Body ── */
        .tc-body {
          padding: 1rem 0 6rem;
          position: relative;
          z-index: 1;
        }
        .tc-container {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }

        /* ── Grid ── */
        .tc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.4rem;
        }

        /* ── Card ── */
        .tc-card {
          background: #fff;
          border: 1px solid var(--rose-light);
          border-radius: 24px;
          padding: 2rem 2rem;
          display: flex;
          gap: 1.4rem;
          align-items: flex-start;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .tc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 50px rgba(201, 114, 138, 0.10);
        }
        .tc-card-icon {
          font-size: 1.4rem;
          color: var(--rose);
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          background: var(--rose-pale);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.1rem;
        }
        .tc-card-content { flex: 1; min-width: 0; }
        .tc-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.45rem;
          font-weight: 500;
          color: var(--text-dark);
          margin-bottom: 0.65rem;
          line-height: 1.2;
        }
        .tc-card-text {
          color: var(--text-mid);
          font-size: 0.96rem;
          font-weight: 300;
          line-height: 1.85;
        }
        .tc-footnote {
          margin-top: 0.85rem;
          color: var(--text-soft);
          font-size: 0.875rem;
          font-style: italic;
          line-height: 1.7;
        }

        /* ── List ── */
        .tc-list {
          list-style: none;
          margin-top: 0.65rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .tc-list-item {
          display: flex;
          align-items: baseline;
          gap: 0.65rem;
          color: var(--text-mid);
          font-size: 0.96rem;
          font-weight: 300;
          line-height: 1.6;
        }
        .tc-bullet {
          color: var(--rose);
          font-size: 0.65rem;
          flex-shrink: 0;
        }

        /* ── Delivery table ── */
        .tc-table-wrap {
          margin-top: 1rem;
          border: 1px solid var(--rose-light);
          border-radius: 14px;
          overflow: hidden;
        }
        .tc-table-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1.1rem;
          font-size: 0.93rem;
        }
        .tc-table-row:not(:last-child) {
          border-bottom: 1px solid var(--rose-light);
        }
        .tc-table-row:nth-child(odd) { background: var(--rose-pale); }
        .tc-table-label {
          color: var(--text-mid);
          font-weight: 400;
        }
        .tc-table-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--rose);
          letter-spacing: 0.02em;
        }

        /* ── Contact ── */
        .tc-contact {
          margin-top: 4rem;
          background: linear-gradient(145deg, var(--blush) 0%, var(--gold-pale) 100%);
          border: 1px solid var(--gold-light);
          border-radius: 28px;
          padding: 3.5rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .tc-contact-deco {
          position: absolute;
          top: -1.5rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: 5rem;
          color: var(--rose-light);
          font-family: 'Cormorant Garamond', serif;
          pointer-events: none;
          line-height: 1;
        }
        .tc-contact-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 300;
          color: var(--text-dark);
          margin: 0.5rem 0 1rem;
        }
        .tc-contact-sub {
          color: var(--text-mid);
          font-size: 0.97rem;
          font-weight: 300;
          line-height: 1.8;
          max-width: 400px;
          margin: 0 auto 1.25rem;
        }
        .tc-address {
          font-style: normal;
          color: var(--text-soft);
          font-size: 0.88rem;
          font-weight: 300;
          line-height: 1.8;
          margin-bottom: 1.75rem;
        }
        .tc-contact-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .tc-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          padding: 0.9rem 2rem;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .tc-contact-btn--wa {
          background: linear-gradient(135deg, #25d366 0%, #128c4e 100%);
          color: #fff;
          box-shadow: 0 8px 30px rgba(37, 211, 102, 0.30);
        }
        .tc-contact-btn--wa:hover {
          box-shadow: 0 12px 40px rgba(37, 211, 102, 0.45);
          transform: translateY(-2px);
        }
        .tc-contact-btn--email {
          border: 1.5px solid var(--rose);
          color: var(--rose);
          background: transparent;
          text-transform: lowercase;
        }
        .tc-contact-btn--email:hover {
          background: var(--rose);
          color: #fff;
          transform: translateY(-2px);
        }

        /* ── Mobile ── */
        @media (max-width: 600px) {
          .tc-hero { padding: 4rem 1.25rem 0; }
          .tc-hero-inner { padding-bottom: 3.5rem; }
          .tc-card {
            flex-direction: column;
            gap: 1rem;
            padding: 1.6rem 1.25rem;
          }
          .tc-card-icon { width: 38px; height: 38px; font-size: 1.2rem; }
          .tc-contact { padding: 3rem 1.4rem; }
        }
      `}</style>
    </main>
  );
}