"use client";

export default function ContactPage() {
  return (
    <main className="amoera-contact">

      {/* Floating Petals */}
      <div className="petals-container" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className={`petal petal-${i + 1}`} />
        ))}
      </div>

      {/* Hero Header */}
      <section className="contact-hero">
        <div className="container">
          <span className="eyebrow">Reach Out</span>
          <h1 className="hero-title">Let's Create Your<br /><em>Dream Wedding</em></h1>
          <div className="divider">
            <span className="divider-leaf">❧</span>
          </div>
          <p className="hero-subtitle">
            We'd love to hear from you. Tell us your vision and we'll bring it to life.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-body">
        <div className="container">
          <div className="contact-grid">

            {/* Contact Info Card */}
            <div className="info-card">
              <div className="info-card-header">
                <span className="card-eyebrow">Get In Touch</span>
                <h2 className="card-title">Contact Information</h2>
                <div className="card-divider">
                  <span className="divider-leaf">❧</span>
                </div>
              </div>

              <div className="info-list">

                <div className="info-item">
                  <div className="info-icon">✆</div>
                  <div className="info-text">
                    <p className="info-label">Phone</p>
                    <p className="info-value">+91 80752 98373</p>
                  </div>
                </div>

                <div className="info-divider" />

                <div className="info-item">
                  <div className="info-icon">✉</div>
                  <div className="info-text">
                    <p className="info-label">Email</p>
                    <a href="mailto:amoeraweds4@gmail.com" className="info-value info-link">
                      amoeraweds4@gmail.com
                    </a>
                  </div>
                </div>

                <div className="info-divider" />

                <div className="info-item">
                  <div className="info-icon">✦</div>
                  <div className="info-text">
                    <p className="info-label">Address</p>
                    <p className="info-value">
                      Thiruvananthapuram<br />
                      Kerala, India
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/918075298373?text=Hi%20AmoeraWeds"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <span className="whatsapp-icon">✔</span>
                Chat on WhatsApp
              </a>
            </div>

            {/* Map Card */}
            <div className="map-card">
              <div className="map-header">
                <span className="card-eyebrow">Find Us</span>
                <h2 className="card-title">Our Location</h2>
                <div className="card-divider">
                  <span className="divider-leaf">❧</span>
                </div>
              </div>
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps?q=Thiruvananthapuram&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="AmoeraWeds Location"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
              <div className="map-footer">
                <p className="map-note">
                  ✦ &nbsp;We serve couples across Kerala & beyond — virtually and in person.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        :root {
          --rose:        #c9728a;
          --rose-light:  #f5e0e6;
          --rose-pale:   #fdf4f6;
          --gold:        #b8914a;
          --gold-light:  #e8d5b0;
          --gold-pale:   #fdf8ef;
          --ivory:       #fffaf5;
          --blush:       #faeef2;
          --text-dark:   #3a2c30;
          --text-mid:    #7a5c64;
          --text-soft:   #b89aa0;
        }

        /* ── Base ── */
        .amoera-contact {
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
        .petal-4  { width:12px; height:16px; left:30%; animation-duration:14s; animation-delay:0.5s; }
        .petal-5  { width:16px; height:20px; left:42%; animation-duration:11s; animation-delay:2s;   }
        .petal-6  { width:10px; height:13px; left:55%; animation-duration:12s; animation-delay:4s;   }
        .petal-7  { width:20px; height:24px; left:65%; animation-duration:10s; animation-delay:1s;   }
        .petal-8  { width:14px; height:18px; left:74%; animation-duration:15s; animation-delay:2.5s; }
        .petal-9  { width:11px; height:15px; left:82%; animation-duration:11s; animation-delay:0.8s; }
        .petal-10 { width:17px; height:21px; left:90%; animation-duration:13s; animation-delay:3.5s; }
        .petal-11 { width:12px; height:16px; left:8%;  animation-duration:9s;  animation-delay:5s;   }
        .petal-12 { width:15px; height:19px; left:36%; animation-duration:12s; animation-delay:6.5s; }
        .petal-13 { width:10px; height:14px; left:48%; animation-duration:14s; animation-delay:4.8s; }
        .petal-14 { width:19px; height:23px; left:97%; animation-duration:10s; animation-delay:2.2s; }
        @keyframes falling {
          0%   { transform: translateY(-60px) rotate(0deg)   translateX(0);    opacity: 0;   }
          10%  { opacity: 0.7; }
          50%  { transform: translateY(50vh)  rotate(180deg) translateX(30px); }
          90%  { opacity: 0.5; }
          100% { transform: translateY(110vh) rotate(360deg) translateX(-20px); opacity: 0; }
        }

        /* ── Container ── */
        .container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
        }

        /* ── Hero ── */
        .contact-hero {
          background: var(--ivory);
          padding: 7rem 0 5rem;
          text-align: center;
        }
        .eyebrow {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--rose);
          margin-bottom: 1.2rem;
        }
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 6vw, 4.2rem);
          font-weight: 300;
          line-height: 1.15;
          color: var(--text-dark);
          margin: 0;
        }
        .hero-title em {
          font-style: italic;
          color: var(--rose);
        }
        .hero-subtitle {
          margin-top: 1.4rem;
          color: var(--text-mid);
          font-size: 1.05rem;
          font-weight: 300;
          line-height: 1.8;
          max-width: 460px;
          margin-left: auto;
          margin-right: auto;
        }
        .divider {
          margin-top: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }
        .divider::before,
        .divider::after {
          content: '';
          display: block;
          width: 60px;
          height: 1px;
          background: var(--gold-light);
        }
        .divider-leaf  { color: var(--rose); font-size: 1.2rem; }

        /* ── Body ── */
        .contact-body {
          background: var(--blush);
          padding: 5rem 0 6rem;
          position: relative;
          z-index: 1;
        }
        .contact-body::before {
          content: '';
          display: block;
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 80px;
          background: var(--ivory);
          clip-path: ellipse(55% 100% at 50% 0%);
        }

        /* ── Grid ── */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: start;
          padding-top: 2rem;
        }
        @media (max-width: 820px) {
          .contact-grid { grid-template-columns: 1fr; }
        }

        /* ── Card Shared ── */
        .card-eyebrow {
          display: inline-block;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 0.75rem;
        }
        .card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 400;
          color: var(--text-dark);
          margin: 0;
          line-height: 1.2;
        }
        .card-divider {
          margin-top: 1rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .card-divider::before,
        .card-divider::after {
          content: '';
          display: block;
          width: 36px;
          height: 1px;
          background: var(--gold-light);
        }

        /* ── Info Card ── */
        .info-card {
          background: #fff;
          border: 1px solid var(--rose-light);
          border-radius: 28px;
          padding: 3rem 2.5rem;
        }
        .info-card-header { margin-bottom: 2.5rem; }

        .info-list { display: flex; flex-direction: column; gap: 0; }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          padding: 1.5rem 0;
        }
        .info-divider {
          height: 1px;
          background: var(--rose-light);
          border: none;
        }
        .info-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--rose-pale);
          border: 1px solid var(--rose-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          color: var(--rose);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .info-label {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-soft);
          margin: 0 0 0.35rem;
        }
        .info-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          color: var(--text-dark);
          margin: 0;
          line-height: 1.65;
          font-weight: 400;
        }
        .info-link {
          color: var(--rose);
          text-decoration: none;
          transition: color 0.2s;
        }
        .info-link:hover { color: var(--gold); }

        .whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          margin-top: 2.5rem;
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          color: #fff;
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.9rem 2rem;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 8px 28px rgba(37, 211, 102, 0.28);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .whatsapp-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(37, 211, 102, 0.38);
        }
        .whatsapp-icon {
          font-size: 1rem;
        }

        /* ── Map Card ── */
        .map-card {
          background: #fff;
          border: 1px solid var(--rose-light);
          border-radius: 28px;
          padding: 3rem 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .map-header { margin-bottom: 2rem; }
        .map-wrapper {
          border-radius: 18px;
          overflow: hidden;
          height: 300px;
          border: 1px solid var(--rose-light);
          flex: 1;
        }
        .map-wrapper iframe { display: block; }
        .map-footer {
          margin-top: 1.5rem;
          padding-top: 1.2rem;
          border-top: 1px solid var(--rose-light);
        }
        .map-note {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 1rem;
          color: var(--text-mid);
          margin: 0;
          line-height: 1.7;
        }

        /* ── CTA Strip ── */
        .cta-strip {
          background: var(--ivory);
          padding: 5rem 0 6rem;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .cta-strip::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 80px;
          background: var(--blush);
          clip-path: ellipse(55% 100% at 50% 0%);
        }
        .cta-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 300;
          color: var(--text-dark);
          margin: 0 0 2rem;
          font-style: italic;
        }
        .btn {
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 1rem 2.8rem;
          border-radius: 9999px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: all 0.3s ease;
        }
        .btn--primary {
          background: linear-gradient(135deg, var(--rose) 0%, #b05575 100%);
          color: #fff;
          box-shadow: 0 8px 30px rgba(201, 114, 138, 0.35);
        }
        .btn--primary:hover {
          box-shadow: 0 12px 42px rgba(201, 114, 138, 0.50);
          transform: translateY(-2px);
        }

        /* ── Mobile Tweaks ── */
        @media (max-width: 600px) {
          .contact-hero { padding: 5rem 0 3.5rem; }
          .info-card, .map-card { padding: 2.2rem 1.6rem; }
          .map-wrapper { height: 240px; }
          .cta-strip { padding: 4rem 0 5rem; }
        }
      `}</style>
    </main>
  );
}