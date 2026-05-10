import Link from "next/link";

const NAV_LINKS = [
  { href: "/",          label: "Home" },
  { href: "/pricing",   label: "Pricing" },
  { href: "/demos",     label: "Works" },
  // { href: "/portfolio", label: "Portfolio" },
  { href: "/reviews",   label: "Reviews" },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms",          label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="amoera-footer">

      {/* Top curve from ivory */}
      <div className="footer-curve" aria-hidden="true" />

      <div className="footer-inner">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <span className="brand-logo">AmoraWeds</span>
            <div className="brand-divider">
              <span className="brand-leaf">❧</span>
            </div>
            <p className="brand-tagline">
              Crafting beautiful wedding websites for modern couples — with elegance, warmth, and care.
            </p>
            {/* Social icons */}
            <div className="social-row" aria-label="Social links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-btn">IG</a>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-btn">WA</a>
              <a href="mailto:amoeraweds@gmail.com" aria-label="Email" className="social-btn">✉</a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h3 className="footer-col-title">Navigation</h3>
            <div className="footer-col-divider" aria-hidden="true" />
            <nav aria-label="Footer navigation">
              <ul className="footer-links">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="footer-link">
                      <span className="link-dot" aria-hidden="true">✦</span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal */}
          <div className="footer-col">
            <h3 className="footer-col-title">Legal</h3>
            <div className="footer-col-divider" aria-hidden="true" />
            <ul className="footer-links">
              {LEGAL_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-link">
                    <span className="link-dot" aria-hidden="true">✦</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h3 className="footer-col-title">Contact</h3>
            <div className="footer-col-divider" aria-hidden="true" />
            <ul className="contact-list">
              <li className="contact-item">
                <span className="contact-icon" aria-hidden="true">✦</span>
                <span>University College of Engineering<br />Kariavattom, TVM, Kerala</span>
              </li>
              <li className="contact-item">
                <span className="contact-icon" aria-hidden="true">✆</span>
                <a href="tel:+91XXXXXXXXXX" className="footer-link-plain">+91 XXXXX XXXXX</a>
              </li>
              <li className="contact-item">
                <span className="contact-icon" aria-hidden="true">✉</span>
                <a href="mailto:amoraweds4@gmail.com" className="footer-link-plain">amoraweds4@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-divider" aria-hidden="true">
            <span className="bottom-leaf">❧</span>
          </div>
          <p className="footer-copy">
            © 2026 AmoeraWeds. All rights reserved.
          </p>
          <p className="footer-made">
            Made with <span className="heart" aria-label="love">♥</span> in Kerala, India
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        :root {
          --rose:       #c9728a;
          --rose-light: #f5e0e6;
          --rose-pale:  #fdf4f6;
          --gold:       #b8914a;
          --gold-light: #e8d5b0;
          --ivory:      #fffaf5;
          --blush:      #faeef2;
          --text-dark:  #3a2c30;
          --text-mid:   #7a5c64;
          --text-soft:  #b89aa0;

          /* footer-specific */
          --footer-bg:    #2a1e22;
          --footer-mid:   #3d2c32;
          --footer-border: rgba(245, 224, 230, 0.12);
          --footer-text:  rgba(255, 245, 248, 0.75);
          --footer-muted: rgba(255, 245, 248, 0.38);
        }

        /* ─── Outer shell ─── */
        .amoera-footer {
          font-family: 'Jost', sans-serif;
          background: var(--footer-bg);
          color: var(--footer-text);
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        /* subtle radial glow in corner */
        .amoera-footer::before {
          content: '';
          position: absolute;
          bottom: 0; right: 0;
          width: 520px; height: 520px;
          background: radial-gradient(circle at bottom right, rgba(201,114,138,0.08) 0%, transparent 65%);
          pointer-events: none;
        }

        /* ─── Curve transition from ivory ─── */
        .footer-curve {
          width: 100%;
          height: 72px;
          background: var(--ivory);
          clip-path: ellipse(55% 0% at 50% 0%);
        }

        /* ─── Inner padding ─── */
        .footer-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 3.5rem 2rem 3rem;
        }

        /* ─── 4-col grid ─── */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
          gap: 3.5rem 2.5rem;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
          .footer-brand { grid-column: 1 / -1; }
        }

        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
          .footer-brand { grid-column: auto; }
          .footer-inner { padding: 3rem 1.4rem 2.5rem; }
        }

        /* ─── Brand col ─── */
        .brand-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 400;
          font-style: italic;
          color: var(--gold-light);
          letter-spacing: 0.02em;
          display: block;
        }

        .brand-divider {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin: 1rem 0;
        }
        .brand-divider::before,
        .brand-divider::after {
          content: '';
          display: block;
          width: 36px;
          height: 1px;
          background: var(--footer-border);
        }
        .brand-leaf { color: var(--rose); font-size: 1rem; }

        .brand-tagline {
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.85;
          color: var(--footer-text);
          margin: 0 0 1.8rem;
          max-width: 280px;
        }

        .social-row {
          display: flex;
          gap: 0.7rem;
        }
        .social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--footer-border);
          color: var(--footer-text);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-decoration: none;
          transition: background 0.25s, border-color 0.25s, color 0.25s;
        }
        .social-btn:hover {
          background: rgba(201,114,138,0.15);
          border-color: var(--rose);
          color: var(--rose-light);
        }

        /* ─── Column ─── */
        .footer-col-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-weight: 500;
          color: rgba(255, 245, 248, 0.95);
          margin: 0 0 0.85rem;
          letter-spacing: 0.02em;
        }

        .footer-col-divider {
          width: 36px;
          height: 1px;
          background: var(--rose);
          opacity: 0.5;
          margin-bottom: 1.4rem;
        }

        /* ─── Links ─── */
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .footer-link {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.9rem;
          font-weight: 300;
          color: var(--footer-text);
          text-decoration: none;
          transition: color 0.22s;
        }
        .footer-link:hover { color: var(--rose-light); }

        .link-dot {
          font-size: 0.5rem;
          color: var(--rose);
          opacity: 0.65;
          flex-shrink: 0;
          transition: opacity 0.22s;
        }
        .footer-link:hover .link-dot { opacity: 1; }

        /* ─── Contact list ─── */
        .contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.88rem;
          font-weight: 300;
          line-height: 1.7;
          color: var(--footer-text);
        }
        .contact-icon {
          font-size: 0.65rem;
          color: var(--rose);
          margin-top: 0.35rem;
          flex-shrink: 0;
        }
        .footer-link-plain {
          color: var(--footer-text);
          text-decoration: none;
          transition: color 0.22s;
        }
        .footer-link-plain:hover { color: var(--rose-light); }

        /* ─── Bottom bar ─── */
        .footer-bottom {
          margin-top: 3.5rem;
          text-align: center;
        }
        .footer-bottom-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.8rem;
        }
        .footer-bottom-divider::before,
        .footer-bottom-divider::after {
          content: '';
          display: block;
          flex: 1;
          max-width: 200px;
          height: 1px;
          background: var(--footer-border);
        }
        .bottom-leaf { color: var(--rose); font-size: 1rem; opacity: 0.7; }

        .footer-copy {
          font-size: 0.78rem;
          font-weight: 300;
          color: var(--footer-muted);
          letter-spacing: 0.06em;
          margin: 0 0 0.4rem;
          text-transform: uppercase;
        }
        .footer-made {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.95rem;
          font-style: italic;
          color: var(--footer-muted);
          margin: 0;
        }
        .heart {
          color: var(--rose);
          font-style: normal;
          display: inline-block;
          animation: heartbeat 2.2s ease-in-out infinite;
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          30%       { transform: scale(1.22); }
          60%       { transform: scale(1); }
          75%       { transform: scale(1.1); }
        }
      `}</style>
    </footer>
  );
}