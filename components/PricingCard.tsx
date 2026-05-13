type PricingCardProps = {
  title: string;
  subtitle: string;
  bestFor: string;
  price: string;
  delivery: string;
  themes: string;
  features: string[];
  addons: string[];
  featured?: boolean;
};

export default function PricingCard({
  title,
  subtitle,
  bestFor,
  price,
  delivery,
  themes,
  features,
  addons,
  featured = false,
}: PricingCardProps) {
  return (
    <div className={`pricing-card ${featured ? "pricing-card--featured" : ""}`}>

      {/* ── Header ── */}
      <div className="pc-header">
        <h2 className="pc-title">{title}</h2>
        <p className="pc-subtitle">{subtitle}</p>
      </div>

      {/* ── Best for ── */}
      <p className="pc-best-for">{bestFor}</p>

      {/* ── Divider ── */}
      <div className="pc-divider">
        <span className="pc-divider-leaf" aria-hidden="true">❧</span>
      </div>

      {/* ── Price block ── */}
      <div className="pc-price-block">
        <span className="pc-price">{price}</span>
        <div className="pc-meta">
          <span className="pc-meta-item">
            <span className="pc-meta-icon" aria-hidden="true">⌛</span>
            {delivery}
          </span>
          <span className="pc-meta-item">
            <span className="pc-meta-icon" aria-hidden="true">✦</span>
            {themes}
          </span>
        </div>
      </div>

      {/* ── Features ── */}
      <div className="pc-section">
        <h4 className="pc-section-title">
          <span className="pc-section-icon" aria-hidden="true">◈</span>
          Included Features
        </h4>
        <ul className="pc-list">
          {features.map((feature) => (
            <li key={feature} className="pc-list-item pc-list-item--feature">
              <span className="pc-check" aria-hidden="true">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Addons ── */}
      <div className="pc-section">
        <h4 className="pc-section-title">
          <span className="pc-section-icon" aria-hidden="true">⊹</span>
          Optional Addons
        </h4>
        <ul className="pc-list">
          {addons.map((addon) => (
            <li key={addon} className="pc-list-item pc-list-item--addon">
              <span className="pc-plus" aria-hidden="true">+</span>
              {addon}
            </li>
          ))}
        </ul>
      </div>

      {/* ── CTA ── */}
      <a
        href={`https://wa.me/918075298373?text=Hi AmoraWeds, I am interested in the ${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`pc-btn ${featured ? "pc-btn--featured" : ""}`}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{flexShrink:0}}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Book This Package
      </a>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        :root {
          --rose:       #c9728a;
          --rose-light: #f5e0e6;
          --rose-pale:  #fdf4f6;
          --rose-deep:  #b05575;
          --gold:       #b8914a;
          --gold-light: #e8d5b0;
          --ivory:      #fffaf5;
          --text-dark:  #3a2c30;
          --text-mid:   #7a5c64;
          --text-soft:  #b89aa0;
        }

        *, *::before, *::after { box-sizing: border-box; }

        /* ── Card shell ── */
        .pricing-card {
          font-family: 'Jost', sans-serif;
          background: #fff;
          border: 1px solid var(--rose-light);
          border-radius: 28px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0;
          width: 100%;
          min-width: 0;          /* critical — prevents overflow in grid */
          overflow: hidden;
          box-shadow: 0 4px 28px rgba(180, 100, 120, 0.07);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          position: relative;
        }

        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 50px rgba(180, 100, 120, 0.13);
        }

        /* Featured variant */
        .pricing-card--featured {
          border-color: var(--rose);
          background: linear-gradient(175deg, #fff 0%, var(--rose-pale) 100%);
          box-shadow: 0 8px 40px rgba(201, 114, 138, 0.18);
        }

        /* ── Header ── */
        .pc-header { margin-bottom: 0.75rem; }

        .pc-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.6rem, 4vw, 2rem);
          font-weight: 500;
          color: var(--text-dark);
          line-height: 1.15;
          word-break: break-word;
        }

        .pc-subtitle {
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--rose);
          margin-top: 0.4rem;
        }

        /* ── Best for ── */
        .pc-best-for {
          font-size: 0.93rem;
          font-weight: 300;
          color: var(--text-mid);
          line-height: 1.8;
          margin-top: 0.5rem;
          word-break: break-word;
        }

        /* ── Divider ── */
        .pc-divider {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin: 1.2rem 0;
        }
        .pc-divider::before, .pc-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--rose-light);
        }
        .pc-divider-leaf { color: var(--rose); font-size: 0.95rem; }

        /* ── Price block ── */
        .pc-price-block {
          margin-bottom: 1.25rem;
        }

        .pc-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 5vw, 2.4rem);
          font-weight: 600;
          color: var(--gold);
          line-height: 1.15;
          display: block;
          word-break: break-word;
        }

        .pc-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1.25rem;
          margin-top: 0.6rem;
        }

        .pc-meta-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.84rem;
          font-weight: 300;
          color: var(--text-mid);
        }

        .pc-meta-icon {
          color: var(--rose);
          font-size: 0.7rem;
        }

        /* ── Sections ── */
        .pc-section {
          margin-bottom: 1.25rem;
        }

        .pc-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .pc-section-icon {
          color: var(--rose);
          font-size: 0.85rem;
        }

        /* ── Lists ── */
        .pc-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .pc-list-item {
          display: flex;
          align-items: baseline;
          gap: 0.55rem;
          font-size: 0.9rem;
          font-weight: 300;
          color: var(--text-mid);
          line-height: 1.6;
          word-break: break-word;
          min-width: 0;
        }

        .pc-check {
          color: var(--rose);
          font-size: 0.8rem;
          flex-shrink: 0;
          font-weight: 500;
        }

        .pc-plus {
          color: var(--gold);
          font-size: 0.9rem;
          flex-shrink: 0;
          font-weight: 500;
          line-height: 1;
        }

        /* ── CTA button ── */
        .pc-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          margin-top: auto;
          padding-top: 1.5rem;
          text-decoration: none;
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 1rem 1.5rem;
          border-radius: 9999px;
          border: 1.5px solid var(--rose);
          color: var(--rose);
          background: transparent;
          transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          margin-top: 1.5rem;
          width: 100%;
        }

        .pc-btn:hover {
          background: var(--rose);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(201, 114, 138, 0.32);
        }

        /* Featured card gets filled button */
        .pc-btn--featured {
          background: linear-gradient(135deg, var(--rose) 0%, var(--rose-deep) 100%);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 6px 22px rgba(201, 114, 138, 0.30);
        }

        .pc-btn--featured:hover {
          box-shadow: 0 10px 30px rgba(201, 114, 138, 0.45);
          background: linear-gradient(135deg, var(--rose-deep) 0%, var(--rose) 100%);
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .pricing-card {
            padding: 1.5rem 1.25rem;
            border-radius: 22px;
          }

          .pc-title  { font-size: 1.55rem; }
          .pc-price  { font-size: 1.7rem; }
          .pc-meta   { gap: 0.4rem 1rem; }
        }
      `}</style>
    </div>
  );
}