"use client";

import { useState } from "react";
import { packages } from "@/data/packages";

const filterMeta: Record<string, { label: string; icon: string; desc: string }> = {
  all:     { label: "All Packages",  icon: "✦", desc: "Every style & budget"  },
  budget:  { label: "Budget",        icon: "❀", desc: "Beautiful & affordable" },
  mid:     { label: "Mid Range",     icon: "❧", desc: "Elegant & refined"      },
  premium: { label: "Premium",       icon: "♛", desc: "Luxury & bespoke"       },
};

const slugLabel: Record<string, string> = {
  budget:  "❀ Budget",
  mid:     "❧ Mid Range",
  premium: "♛ Premium",
};

export default function DemoPage() {
  const [selected, setSelected] = useState("all");
  const filters = ["all", "budget", "mid", "premium"];

  const filteredPackages =
    selected === "all"
      ? packages
      : packages.filter((pkg) => pkg.slug === selected);

  return (
    <main className="demo-page">
      {/* Petals */}
      <div className="petals-container" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className={`petal petal-${i + 1}`} />
        ))}
      </div>

      {/* Hero */}
      <div className="demo-hero">
        <div className="demo-hero-inner">
          <span className="eyebrow">Our</span>
          <h1 className="page-title">Previous Works</h1>
          <div className="divider">
            <span className="divider-leaf">❧</span>
          </div>
          <p className="page-subtitle">
            Explore real wedding website demos crafted by AmoeraWeds — a style
            and price for every love story.
          </p>
        </div>
        <div className="hero-curve" aria-hidden="true" />
      </div>

      {/* Filter bar */}
      <div className="filter-bar-wrap">
        <div className="filter-bar">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setSelected(f)}
              className={`filter-btn${selected === f ? " filter-btn--active" : ""}`}
            >
              <span className="filter-icon" aria-hidden="true">{filterMeta[f].icon}</span>
              <span className="filter-label">{filterMeta[f].label}</span>
              <span className="filter-desc">{filterMeta[f].desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Package sections */}
      <div className="demo-container">
        <div className="packages-list">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="pkg-card">

              {/* Header */}
              <div className="pkg-header">
                <div className="pkg-header-left">
                  <span className="pkg-eyebrow">{slugLabel[pkg.slug] ?? pkg.slug}</span>
                  <h2 className="pkg-title">{pkg.title}</h2>
                  <p className="pkg-best-for">{pkg.bestFor}</p>
                </div>
                <div className="pkg-pricing">
                  <p className="pkg-price">{pkg.price}</p>
                  <p className="pkg-delivery">
                    <span aria-hidden="true">⌛</span> Delivery: {pkg.delivery}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="pkg-divider">
                <span className="pkg-divider-leaf">❧</span>
              </div>

              {/* Demo links */}
              <div className="demos-grid">
                {pkg.demos.map((demo, i) => (
                  <a
                    key={demo.link}
                    href={demo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-link-card"
                    
                  >
                    <img
                      src={demo.image}
                      alt="Wedding Demo"
                      className="w-full h-[260px] object-cover rounded-3xl"
/>
                    <div className="demo-link-top">
                      <span className="demo-link-num">0{i + 1}</span>
                      <span className="demo-link-badge">Live Demo</span>
                    </div>
                   
                    <div className="demo-link-btn">
                      Open Demo <span className="demo-link-arrow" aria-hidden="true">→</span>
                    </div>
                  </a>
                ))}
              </div>

            </div>
          ))}
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

        .demo-page {
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
        .demo-hero{background:linear-gradient(160deg,var(--blush) 0%,#f9e8ee 60%,var(--rose-pale) 100%);padding:6rem 2rem 0;text-align:center;position:relative;z-index:1}
        .demo-hero-inner{max-width:680px;margin:0 auto;padding-bottom:5rem}
        .eyebrow{display:inline-block;font-size:0.72rem;font-weight:500;letter-spacing:0.28em;text-transform:uppercase;color:var(--rose);margin-bottom:1.2rem}
        .page-title{font-family:'Cormorant Garamond',serif;font-size:clamp(2.8rem,7vw,4.8rem);font-weight:300;color:var(--text-dark);margin:0;line-height:1.1}
        .page-subtitle{margin:1.5rem auto 0;color:var(--text-mid);font-weight:300;font-size:1.05rem;line-height:1.85;max-width:480px}
        .divider{margin:1.4rem auto 0;display:flex;align-items:center;justify-content:center;gap:0.75rem;max-width:200px}
        .divider::before,.divider::after{content:'';flex:1;height:1px;background:var(--gold-light)}
        .divider-leaf{color:var(--rose);font-size:1.1rem}
        .hero-curve{width:100%;height:70px;background:var(--ivory);clip-path:ellipse(55% 100% at 50% 100%)}

        /* ── Filter bar ── */
        .filter-bar-wrap{display:flex;justify-content:center;padding:0 2rem;position:relative;z-index:1;margin-bottom:3rem}
        .filter-bar{display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;background:#fff;border:1px solid var(--rose-light);border-radius:20px;padding:1rem 1.2rem;box-shadow:0 4px 24px rgba(180,100,120,0.07)}
        .filter-btn{display:flex;flex-direction:column;align-items:center;gap:0.2rem;background:transparent;border:1.5px solid transparent;border-radius:14px;padding:0.75rem 1.4rem;cursor:pointer;font-family:'Jost',sans-serif;transition:background 0.2s,border-color 0.2s;min-width:110px}
        .filter-btn:hover{background:var(--rose-pale);border-color:var(--rose-light)}
        .filter-btn--active{background:linear-gradient(135deg,var(--rose) 0%,var(--rose-deep) 100%);border-color:transparent;box-shadow:0 4px 18px rgba(201,114,138,0.35)}
        .filter-icon{font-size:1rem;color:var(--rose)}
        .filter-btn--active .filter-icon{color:rgba(255,255,255,0.8)}
        .filter-label{font-size:0.82rem;font-weight:500;letter-spacing:0.06em;color:var(--text-dark);text-transform:capitalize}
        .filter-btn--active .filter-label{color:#fff}
        .filter-desc{font-size:0.68rem;font-weight:300;color:var(--text-soft)}
        .filter-btn--active .filter-desc{color:rgba(255,255,255,0.65)}

        /* ── Package cards ── */
        .demo-container{max-width:1100px;margin:0 auto;padding:0 2rem 6rem;position:relative;z-index:1}
        .packages-list{display:flex;flex-direction:column;gap:2.5rem}

        .pkg-card{
          background:#fff;
          border:1px solid rgba(201,114,138,0.15);
          border-radius:28px;
          padding:2.8rem 3rem;
          box-shadow:0 4px 30px rgba(180,100,120,0.07);
          transition:box-shadow 0.3s;
        }
        .pkg-card:hover{box-shadow:0 12px 50px rgba(180,100,120,0.12)}

        .pkg-header{display:flex;justify-content:space-between;align-items:flex-start;gap:2rem;flex-wrap:wrap}
        .pkg-eyebrow{font-size:0.72rem;font-weight:500;letter-spacing:0.2em;text-transform:uppercase;color:var(--rose);display:block;margin-bottom:0.6rem}
        .pkg-title{font-family:'Cormorant Garamond',serif;font-size:clamp(1.8rem,3vw,2.6rem);font-weight:500;color:var(--text-dark);margin:0 0 0.6rem}
        .pkg-best-for{color:var(--text-mid);font-weight:300;font-size:0.97rem;line-height:1.7;margin:0;max-width:520px}

        .pkg-pricing{text-align:right;flex-shrink:0}
        .pkg-price{font-family:'Cormorant Garamond',serif;font-size:2.4rem;font-weight:500;color:var(--gold);margin:0;line-height:1}
        .pkg-delivery{color:var(--text-soft);font-size:0.85rem;margin:0.5rem 0 0;display:flex;align-items:center;gap:0.35rem;justify-content:flex-end}

        .pkg-divider{display:flex;align-items:center;gap:0.75rem;margin:2rem 0}
        .pkg-divider::before,.pkg-divider::after{content:'';flex:1;height:1px;background:var(--rose-light)}
        .pkg-divider-leaf{color:var(--gold);font-size:0.9rem}

        .demos-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:1.2rem}

        .demo-link-card{
          display:flex;flex-direction:column;gap:0.8rem;
          background:var(--ivory);
          border:1.5px solid var(--rose-light);
          border-radius:18px;
          padding:1.5rem 1.6rem;
          text-decoration:none;
          transition:border-color 0.2s,box-shadow 0.2s,transform 0.25s;
        }
        .demo-link-card:hover{border-color:var(--rose);box-shadow:0 8px 28px rgba(201,114,138,0.15);transform:translateY(-3px)}

        .demo-link-top{display:flex;align-items:center;justify-content:space-between}
        .demo-link-num{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:300;color:var(--rose-light)}
        .demo-link-badge{font-size:0.65rem;font-weight:500;letter-spacing:0.15em;text-transform:uppercase;background:var(--rose-pale);color:var(--rose);border:1px solid var(--rose-light);border-radius:9999px;padding:0.25rem 0.7rem}

        .demo-link-url{font-size:0.8rem;color:var(--text-soft);word-break:break-all;margin:0;line-height:1.5;flex:1}

        .demo-link-btn{
          display:inline-flex;align-items:center;gap:0.5rem;align-self:flex-start;
          font-size:0.75rem;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;
          background:linear-gradient(135deg,var(--rose) 0%,var(--rose-deep) 100%);
          color:#fff;border-radius:9999px;padding:0.6rem 1.3rem;
          box-shadow:0 4px 14px rgba(201,114,138,0.28);
          transition:box-shadow 0.25s;
        }
        .demo-link-card:hover .demo-link-btn{box-shadow:0 6px 22px rgba(201,114,138,0.42)}
        .demo-link-arrow{transition:transform 0.2s}
        .demo-link-card:hover .demo-link-arrow{transform:translateX(3px)}

        /* ── Flourish ── */
        .page-flourish{display:flex;align-items:center;justify-content:center;gap:1.2rem;margin-top:4rem;color:var(--gold-light);font-size:1rem;letter-spacing:0.5rem}
        .page-flourish span:nth-child(2){color:var(--rose-light);font-size:1.2rem}

        @media(max-width:768px){
          .pkg-card{padding:2rem 1.5rem}
          .pkg-pricing{text-align:left}
          .pkg-delivery{justify-content:flex-start}
          .filter-btn{min-width:80px;padding:0.6rem 0.8rem}
          .filter-desc{display:none}
        }
      `}</style>
    </main>
  );
}