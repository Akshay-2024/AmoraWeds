export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: "✦",
      title: "Information We Collect",
      content: null,
      list: [
        "Name",
        "Phone number",
        "Email address",
        "Wedding / event details",
        "Images and media shared for website creation",
      ],
    },
    {
      icon: "⌛",
      title: "How We Use Your Information",
      content: "Your information is used to:",
      list: [
        "Communicate with you",
        "Create and deliver wedding websites",
        "Improve our services",
        "Provide customer support",
      ],
    },
    {
      icon: "❧",
      title: "Data Protection",
      content:
        "We take reasonable measures to protect your personal information from unauthorized access, misuse, or disclosure.",
      list: null,
    },
    {
      icon: "✿",
      title: "Media & Content",
      content:
        "Photos, videos, and other content provided by clients remain the property of the client. AmoraWeds may showcase completed projects in portfolio/demo sections unless requested otherwise by the client.",
      list: null,
    },
    {
      icon: "⊹",
      title: "Third-Party Services",
      content: "Our website may use third-party services such as:",
      list: [
        "Google Maps",
        "WhatsApp",
        "Hosting providers",
        "Analytics tools",
      ],
      footnote:
        "These services may collect limited technical information according to their own privacy policies.",
    },
    {
      icon: "◈",
      title: "Cookies",
      content:
        "Our website may use cookies to improve user experience and website performance.",
      list: null,
    },
    {
      icon: "✂",
      title: "Client Responsibility",
      content:
        "Clients are responsible for ensuring that all content shared with AmoraWeds does not violate copyright or legal restrictions.",
      list: null,
    },
    {
      icon: "✦",
      title: "Changes to Privacy Policy",
      content:
        "AmoraWeds reserves the right to update or modify this Privacy Policy at any time without prior notice.",
      list: null,
    },
  ];

  return (
    <main className="pp-root">
      {/* Floating Petals */}
      <div className="petals-container" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className={`petal petal-${i + 1}`} />
        ))}
      </div>

      {/* Hero Banner */}
      <header className="pp-hero">
        <div className="pp-hero-inner">
          <span className="eyebrow">Legal</span>
          <h1 className="pp-title">Privacy Policy</h1>
          <div className="divider">
            <span className="divider-leaf">❧</span>
          </div>
          <p className="pp-intro">
            AmoraWeds values your privacy and is committed to protecting your
            personal information. By using our website and services, you agree
            to the collection and use of information in accordance with this
            policy.
          </p>
        </div>
        <div className="hero-curve" aria-hidden="true" />
      </header>

      {/* Sections */}
      <section className="pp-body">
        <div className="pp-container">
          <div className="pp-grid">
            {sections.map((sec, idx) => (
              <article key={idx} className="pp-card">
                <div className="pp-card-icon">{sec.icon}</div>
                <div className="pp-card-content">
                  <h2 className="pp-card-title">{sec.title}</h2>
                  {sec.content && <p className="pp-card-text">{sec.content}</p>}
                  {sec.list && (
                    <ul className="pp-list">
                      {sec.list.map((item, i) => (
                        <li key={i} className="pp-list-item">
                          <span className="pp-bullet">◇</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {sec.footnote && (
                    <p className="pp-footnote">{sec.footnote}</p>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Contact card */}
          <div className="pp-contact">
            <div className="pp-contact-deco" aria-hidden="true">❧</div>
            <span className="eyebrow eyebrow--gold">Get in Touch</span>
            <h2 className="pp-contact-title">Privacy Concerns?</h2>
            <p className="pp-contact-sub">
              For any privacy-related questions or concerns, reach out to us
              directly.
            </p>
            <a href="mailto:amoeraweds@gmail.com" className="pp-contact-btn">
              amoraweds4@gmail.com
            </a>
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

        .pp-root {
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
        .pp-hero {
          background: linear-gradient(160deg, var(--blush) 0%, var(--ivory) 100%);
          padding: 6rem 1.5rem 0;
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .pp-hero-inner {
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

        .pp-title {
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

        .pp-intro {
          font-family: 'Jost', sans-serif;
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
        .pp-body {
          padding: 1rem 0 6rem;
          position: relative;
          z-index: 1;
        }

        .pp-container {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }

        /* ── Grid ── */
        .pp-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        /* ── Card ── */
        .pp-card {
          background: #fff;
          border: 1px solid var(--rose-light);
          border-radius: 24px;
          padding: 2.2rem 2rem;
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .pp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 50px rgba(201, 114, 138, 0.10);
        }

        .pp-card-icon {
          font-size: 1.6rem;
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

        .pp-card-content {
          flex: 1;
          min-width: 0;
        }

        .pp-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--text-dark);
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        .pp-card-text {
          color: var(--text-mid);
          font-size: 0.96rem;
          font-weight: 300;
          line-height: 1.85;
        }

        .pp-footnote {
          margin-top: 0.85rem;
          color: var(--text-soft);
          font-size: 0.875rem;
          font-style: italic;
          line-height: 1.7;
        }

        /* ── List ── */
        .pp-list {
          list-style: none;
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .pp-list-item {
          display: flex;
          align-items: baseline;
          gap: 0.65rem;
          color: var(--text-mid);
          font-size: 0.96rem;
          font-weight: 300;
          line-height: 1.6;
        }

        .pp-bullet {
          color: var(--rose);
          font-size: 0.7rem;
          flex-shrink: 0;
          transform: translateY(-1px);
        }

        /* ── Contact ── */
        .pp-contact {
          margin-top: 4rem;
          background: linear-gradient(145deg, var(--blush) 0%, var(--gold-pale) 100%);
          border: 1px solid var(--gold-light);
          border-radius: 28px;
          padding: 3.5rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .pp-contact-deco {
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

        .pp-contact-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 300;
          color: var(--text-dark);
          margin: 0.5rem 0 1rem;
        }

        .pp-contact-sub {
          color: var(--text-mid);
          font-size: 0.97rem;
          font-weight: 300;
          line-height: 1.8;
          max-width: 400px;
          margin: 0 auto 2rem;
        }

        .pp-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: lowercase;
          padding: 1rem 2.4rem;
          border-radius: 9999px;
          text-decoration: none;
          background: linear-gradient(135deg, var(--rose) 0%, #b05575 100%);
          color: #fff;
          box-shadow: 0 8px 30px rgba(201, 114, 138, 0.35);
          transition: all 0.3s ease;
        }

        .pp-contact-btn:hover {
          box-shadow: 0 12px 40px rgba(201, 114, 138, 0.50);
          transform: translateY(-2px);
        }

        /* ── Mobile ── */
        @media (max-width: 600px) {
          .pp-hero { padding: 4rem 1.25rem 0; }
          .pp-hero-inner { padding-bottom: 3.5rem; }

          .pp-card {
            flex-direction: column;
            gap: 1rem;
            padding: 1.75rem 1.4rem;
          }

          .pp-card-icon {
            width: 38px;
            height: 38px;
            font-size: 1.3rem;
          }

          .pp-contact { padding: 3rem 1.4rem; }
        }
      `}</style>
    </main>
  );
}