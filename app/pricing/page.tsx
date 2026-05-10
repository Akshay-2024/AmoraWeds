import PricingCard from "@/components/PricingCard";
import { packages } from "@/data/packages";

export default function PricingPage() {
  return (
    <main className="pricing-page">
      {/* Petals */}
      <div className="petals-container" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className={`petal petal-${i + 1}`} />
        ))}
      </div>

      {/* Hero */}
      <div className="pricing-hero">
        <div className="pricing-hero-inner">
          <span className="eyebrow">Transparent Pricing</span>
          <h1 className="page-title">Pricing Plans</h1>
          <div className="divider">
            <span className="divider-leaf">❧</span>
          </div>
          <p className="page-subtitle">
            Choose the perfect wedding website package based on your style,
            budget, and requirements.
          </p>
        </div>
        <div className="hero-curve" aria-hidden="true" />
      </div>

      {/* Cards */}
      <div className="pricing-container">
        <div className="pricing-grid">
          {packages.map((pkg) => (
            <PricingCard
              key={pkg.id}
              title={pkg.title}
              subtitle={pkg.subtitle}
              bestFor={pkg.bestFor}
              price={pkg.price}
              delivery={pkg.delivery}
              themes={pkg.themes}
              features={pkg.features}
              addons={pkg.addons}
            />
          ))}
        </div>

        {/* Trust strip */}
        <div className="trust-strip">
          <div className="trust-item">
            <span className="trust-icon">✦</span>
            <span>No hidden charges</span>
          </div>
          <div className="trust-sep" aria-hidden="true">❧</div>
          <div className="trust-item">
            <span className="trust-icon">✦</span>
            <span>Fast delivery guaranteed</span>
          </div>
          <div className="trust-sep" aria-hidden="true">❧</div>
          <div className="trust-item">
            <span className="trust-icon">✦</span>
            <span>Fully customizable</span>
          </div>
        </div>

        <div className="page-flourish" aria-hidden="true">
          <span>✦</span><span>❧</span><span>✦</span>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap');

        :root {
          --rose:       #c9728a;
          --rose-light: #f5e0e6;
          --rose-pale:  #fdf4f6;
          --rose-deep:  #b05575;
          --gold:       #b8914a;
          --gold-light: #e8d5b0;
          --ivory:      #fffaf5;
          --blush:      #faeef2;
          --text-dark:  #3a2c30;
          --text-mid:   #7a5c64;
          --text-soft:  #b89aa0;
        }

        .pricing-page {
          font-family: 'Jost', sans-serif;
          background: var(--ivory);
          color: var(--text-dark);
          overflow-x: hidden;
          min-height: 100vh;
        }

        /* ── Petals ── */
        .petals-container{position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden}
        .petal{position:absolute;top:-60px;border-radius:150% 0 150% 0;opacity:0;animation:falling linear infinite}
        .petal:nth-child(odd){background:var(--rose-light)}
        .petal:nth-child(even){background:var(--gold-light)}
        .petal:nth-child(3n){border-radius:0 150% 0 150%}
        .petal:nth-child(5n){border-radius:50% 50% 0 50%}
        .petal-1{width:14px;height:18px;left:4%;animation-duration:10s;animation-delay:0s}
        .petal-2{width:10px;height:14px;left:12%;animation-duration:13s;animation-delay:1.5s}
        .petal-3{width:18px;height:22px;left:21%;animation-duration:9s;animation-delay:3s}
        .petal-4{width:12px;height:16px;left:30%;animation-duration:14s;animation-delay:0.5s}
        .petal-5{width:16px;height:20px;left:39%;animation-duration:11s;animation-delay:2s}
        .petal-6{width:10px;height:13px;left:48%;animation-duration:12s;animation-delay:4s}
        .petal-7{width:20px;height:24px;left:57%;animation-duration:10s;animation-delay:1s}
        .petal-8{width:14px;height:18px;left:65%;animation-duration:15s;animation-delay:2.5s}
        .petal-9{width:11px;height:15px;left:73%;animation-duration:11s;animation-delay:0.8s}
        .petal-10{width:17px;height:21px;left:80%;animation-duration:13s;animation-delay:3.5s}
        .petal-11{width:12px;height:16px;left:87%;animation-duration:9s;animation-delay:1.2s}
        .petal-12{width:15px;height:19px;left:93%;animation-duration:12s;animation-delay:4.5s}
        .petal-13{width:10px;height:14px;left:7%;animation-duration:14s;animation-delay:5s}
        .petal-14{width:19px;height:23px;left:55%;animation-duration:10s;animation-delay:6s}
        @keyframes falling{
          0%{transform:translateY(-60px) rotate(0deg) translateX(0);opacity:0}
          10%{opacity:0.65}
          50%{transform:translateY(50vh) rotate(180deg) translateX(28px)}
          90%{opacity:0.45}
          100%{transform:translateY(110vh) rotate(360deg) translateX(-20px);opacity:0}
        }

        /* ── Hero ── */
        .pricing-hero{
          background:linear-gradient(160deg,var(--blush) 0%,#f9e8ee 60%,var(--rose-pale) 100%);
          padding:6rem 2rem 0;
          text-align:center;
          position:relative;
          z-index:1;
        }
        .pricing-hero-inner{max-width:680px;margin:0 auto;padding-bottom:5rem}
        .eyebrow{display:inline-block;font-size:0.72rem;font-weight:500;letter-spacing:0.28em;text-transform:uppercase;color:var(--rose);margin-bottom:1.2rem}
        .page-title{font-family:'Cormorant Garamond',serif;font-size:clamp(2.8rem,7vw,4.8rem);font-weight:300;color:var(--text-dark);margin:0;line-height:1.1}
        .page-subtitle{margin:1.5rem auto 0;color:var(--text-mid);font-weight:300;font-size:1.05rem;line-height:1.85;max-width:500px}
        .divider{margin:1.4rem auto 0;display:flex;align-items:center;justify-content:center;gap:0.75rem;max-width:200px}
        .divider::before,.divider::after{content:'';flex:1;height:1px;background:var(--gold-light)}
        .divider-leaf{color:var(--rose);font-size:1.1rem}
        .hero-curve{width:100%;height:70px;background:var(--ivory);clip-path:ellipse(55% 100% at 50% 100%)}

        /* ── Grid ── */
        .pricing-container{max-width:1200px;margin:0 auto;padding:2rem 2rem 5rem;position:relative;z-index:1}

        .pricing-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:2rem;
          align-items:start;
        }

        @media(max-width:1024px){.pricing-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.pricing-grid{grid-template-columns:1fr}}

        /* ── Trust strip ── */
        .trust-strip{
          display:flex;
          flex-wrap:wrap;
          align-items:center;
          justify-content:center;
          gap:1.2rem;
          margin-top:4rem;
          padding:1.4rem 2rem;
          background:#fff;
          border:1px solid var(--rose-light);
          border-radius:18px;
          box-shadow:0 2px 16px rgba(180,100,120,0.05);
        }
        .trust-item{
          display:flex;
          align-items:center;
          gap:0.5rem;
          font-size:0.85rem;
          font-weight:400;
          color:var(--text-mid);
          letter-spacing:0.03em;
        }
        .trust-icon{color:var(--rose);font-size:0.75rem}
        .trust-sep{color:var(--gold-light);font-size:1rem}

        /* ── Flourish ── */
        .page-flourish{display:flex;align-items:center;justify-content:center;gap:1.2rem;margin-top:3rem;color:var(--gold-light);font-size:1rem;letter-spacing:0.5rem}
        .page-flourish span:nth-child(2){color:var(--rose-light);font-size:1.2rem}
      `}</style>
    </main>
  );
}