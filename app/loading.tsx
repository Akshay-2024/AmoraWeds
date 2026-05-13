export default function Loading() {
  return (
    <div className="amoera-loading">

      {/* Background rings */}
      <div className="load-ring load-ring-1" aria-hidden="true" />
      <div className="load-ring load-ring-2" aria-hidden="true" />
      <div className="load-ring load-ring-3" aria-hidden="true" />

      {/* Corner petals */}
      <div className="load-petals" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <span key={i} className={`load-petal lp-${i + 1}`} />
        ))}
      </div>

      <div className="load-center">

        {/* Spinner */}
        <div className="spinner-wrap" aria-label="Loading" role="status">
          {/* Outer rose arc */}
          <svg className="spinner-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="40" cy="40" r="36" stroke="#f5e0e6" strokeWidth="2.5" />
            <circle
              cx="40" cy="40" r="36"
              stroke="url(#spinGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="226"
              strokeDashoffset="170"
              className="spinner-arc"
            />
            <defs>
              <linearGradient id="spinGrad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#c9728a" />
                <stop offset="100%" stopColor="#b8914a" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner gold ring */}
          <svg className="spinner-svg spinner-svg--inner" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="40" cy="40" r="24" stroke="#e8d5b0" strokeWidth="1.5" />
            <circle
              cx="40" cy="40" r="24"
              stroke="#b8914a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="150"
              strokeDashoffset="110"
              className="spinner-arc spinner-arc--reverse"
            />
          </svg>

          {/* Center leaf */}
          <span className="spinner-center-leaf" aria-hidden="true">❧</span>
        </div>

        {/* Logo */}
        <div className="load-logo">
          <span className="logo-amoera">Amora</span><span className="logo-weds">Weds</span>
        </div>

        {/* Divider */}
        <div className="load-divider" aria-hidden="true">
          <span className="load-divider-leaf">❧</span>
        </div>

        {/* Tagline with shimmer dots */}
        <p className="load-tagline">
          Crafting wedding memories
          <span className="dot dot-1">.</span>
          <span className="dot dot-2">.</span>
          <span className="dot dot-3">.</span>
        </p>

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
          --text-dark:  #3a2c30;
          --text-mid:   #7a5c64;
          --text-soft:  #b89aa0;
        }

        /* ── Shell ── */
        .amoera-loading {
          font-family: 'Jost', sans-serif;

          position: fixed;
          inset: 0;

          width: 100%;
          height: 100dvh;
          min-height: 100dvh;

          background: var(--ivory);

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;

          z-index: 999999;

          -webkit-transform: translateZ(0);
          transform: translateZ(0);

          will-change: transform;
        }

        /* ── Background rings ── */
        .load-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: slowSpin linear infinite;
        }
        .load-ring-1 {
          width: 520px; height: 520px;
          border: 1px solid var(--rose-light);
          animation-duration: 38s;
        }
        .load-ring-2 {
          width: 340px; height: 340px;
          border: 1px solid var(--gold-light);
          animation-duration: 26s;
          animation-direction: reverse;
        }
        .load-ring-3 {
          width: 190px; height: 190px;
          border: 1.5px solid var(--rose-light);
          animation-duration: 18s;
        }
        @keyframes slowSpin {
          to { transform: rotate(360deg); }
        }

        /* ── Petals ── */
        .load-petals { position: absolute; inset: 0; pointer-events: none; }
        .load-petal {
          position: absolute;
          border-radius: 150% 0 150% 0;
          animation: petalDrift ease-in-out infinite alternate;
        }
        .load-petal:nth-child(odd)  { background: var(--rose-light); opacity: 0.6; }
        .load-petal:nth-child(even) { background: var(--gold-light); opacity: 0.5; border-radius: 0 150% 0 150%; }
        .lp-1 { width:30px; height:38px; top:8%;   left:6%;   transform:rotate(20deg);  animation-duration:4.2s; }
        .lp-2 { width:20px; height:26px; top:18%;  left:12%;  transform:rotate(-35deg); animation-duration:5.1s; }
        .lp-3 { width:24px; height:30px; bottom:12%; left:8%;  transform:rotate(55deg);  animation-duration:4.8s; }
        .lp-4 { width:18px; height:22px; bottom:22%; left:18%; transform:rotate(-20deg); animation-duration:6.0s; }
        .lp-5 { width:28px; height:36px; top:10%;  right:7%;  transform:rotate(-25deg); animation-duration:5.5s; }
        .lp-6 { width:16px; height:22px; top:22%;  right:14%; transform:rotate(40deg);  animation-duration:3.9s; }
        .lp-7 { width:22px; height:28px; bottom:14%; right:9%;  transform:rotate(60deg);  animation-duration:5.3s; }
        .lp-8 { width:14px; height:18px; bottom:24%; right:18%; transform:rotate(-50deg); animation-duration:4.5s; }
        @keyframes petalDrift {
          from { transform: translateY(0) rotate(var(--r, 20deg)); }
          to   { transform: translateY(-12px) rotate(calc(var(--r, 20deg) + 8deg)); }
        }

        /* ── Center group ── */
        .load-center {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          animation: fadeUp 0.8s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Spinner ── */
        .spinner-wrap {
          position: relative;
          width: 96px;
          height: 96px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2.2rem;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          will-change: transform;
        }

        .spinner-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          animation: spinCW 2.4s linear infinite;
        }
        .spinner-svg--inner {
          animation: spinCCW 1.8s linear infinite;
          width: 64%;
          height: 64%;
          inset: 18%;
        }

        .spinner-arc {
          transform-origin: center;
        }
        .spinner-arc--reverse {
          /* handled by parent svg reverse spin */
        }

        @keyframes spinCW  { to { transform: rotate(360deg);  } }
        @keyframes spinCCW { to { transform: rotate(-360deg); } }

        .spinner-center-leaf {
          position: relative;
          z-index: 1;
          font-size: 1.4rem;
          color: var(--rose);
          animation: leafPulse 2s ease-in-out infinite;
          line-height: 1;
        }
        @keyframes leafPulse {
          0%, 100% { opacity: 1;   transform: scale(1);    }
          50%       { opacity: 0.6; transform: scale(0.88); }
        }

        /* ── Logo ── */
        .load-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.4rem;
          line-height: 1;
          letter-spacing: 0.01em;
          margin-bottom: 0.2rem;
        }
        .logo-amoera {
          font-style: italic;
          font-weight: 300;
          color: var(--text-dark);
        }
        .logo-weds {
          font-style: italic;
          font-weight: 500;
          color: var(--rose);
        }

        /* ── Divider ── */
        .load-divider {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin: 1rem 0 0.9rem;
        }
        .load-divider::before,
        .load-divider::after {
          content: '';
          display: block;
          width: 48px;
          height: 1px;
          background: var(--gold-light);
        }
        .load-divider-leaf { color: var(--rose); font-size: 1rem; }

        /* ── Tagline ── */
        .load-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 1.1rem;
          font-weight: 300;
          color: var(--text-soft);
          letter-spacing: 0.03em;
          margin: 0;
        }

        .dot {
          display: inline-block;
          color: var(--rose);
          animation: dotBounce 1.4s ease-in-out infinite;
        }
        .dot-1 { animation-delay: 0s;    }
        .dot-2 { animation-delay: 0.22s; }
        .dot-3 { animation-delay: 0.44s; }
        @keyframes dotBounce {
          0%, 80%, 100% { opacity: 0.2; transform: translateY(0);    }
          40%            { opacity: 1;   transform: translateY(-5px);  }
        }

        @media (max-width: 768px) {

  .load-ring-1 {
    width: 320px;
    height: 320px;
  }

  .load-ring-2 {
    width: 220px;
    height: 220px;
  }

  .load-ring-3 {
    width: 130px;
    height: 130px;
  }

  .load-logo {
    font-size: 2rem;
  }

  .load-tagline {
    font-size: 0.95rem;
    text-align: center;
    padding: 0 20px;
  }

  .spinner-wrap {
    width: 82px;
    height: 82px;
  }
}
      `}</style>
    </div>
  );
}