"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  "/templates/1.png",
  "/templates/2.png",
  "/templates/3.png",
  "/templates/1.png",
  "/templates/2.png",
  "/templates/3.png",
];

export default function Hero360Carousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h3c-root">

      {/* ── Ambient background blobs ── */}
      <div className="h3c-blob h3c-blob--rose"  aria-hidden="true" />
      <div className="h3c-blob h3c-blob--gold"  aria-hidden="true" />
      <div className="h3c-blob h3c-blob--blush" aria-hidden="true" />

      {/* ── Floating petals (lightweight, only 8) ── */}
      <div className="h3c-petals" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={`h3c-petal h3c-petal-${i + 1}`} />
        ))}
      </div>

      {/* ── Header ── */}
      <div className="h3c-header">
        <span className="h3c-eyebrow">
          <span className="h3c-eyebrow-line" />
          Premium Collection
          <span className="h3c-eyebrow-line" />
        </span>
        <h2 className="h3c-title">
          Explore Our<br />
          <em>Wedding Templates</em>
        </h2>
        <div className="h3c-divider">
          <span className="h3c-leaf" aria-hidden="true">❧</span>
        </div>
        <p className="h3c-subtitle">
          Handcrafted with love — each template tells a unique story
        </p>
      </div>

      {/* ── Stage ── */}
      <div className="h3c-stage" aria-label="Template carousel">
        {slides.map((slide, index) => {
          const diff = (index - active + slides.length) % slides.length;
          let position = diff;
          if (diff > slides.length / 2) position = diff - slides.length;
          const isCenter = position === 0;

          return (
            <motion.div
              key={index}
              className={`h3c-card ${isCenter ? "h3c-card--active" : ""}`}
              animate={{
                x:       position === 0 ? 0 : position > 0 ? position * 155 : position * 155,
                scale:   position === 0 ? 1 : Math.abs(position) === 1 ? 0.72 : 0.52,
                rotateY: position * -58,
                z:       position === 0 ? 0 : -320 * Math.abs(position),
                opacity: Math.abs(position) > 2 ? 0 : position === 0 ? 1 : 0.68,
                filter:  position === 0 ? "blur(0px)" : "blur(1.5px)",
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ zIndex: 100 - Math.abs(position) }}
            >
              <Image
                src={slide}
                alt={isCenter ? "Featured wedding template" : "Wedding template"}
                fill
                className="h3c-img"
              />

              {/* gradient overlay */}
              <div className="h3c-card-overlay" />

              {/* inner content */}
              <div className="h3c-card-content">
                <span className="h3c-card-brand">AmoraWeds</span>
                <h3 className="h3c-card-label">Luxury Invite</h3>
               
              </div>

              {/* active ring */}
              {isCenter && <div className="h3c-card-ring" aria-hidden="true" />}
            </motion.div>
          );
        })}
      </div>

      {/* ── Dot indicators ── */}
      <div className="h3c-dots" role="tablist" aria-label="Slide indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`h3c-dot ${active === i ? "h3c-dot--active" : ""}`}
            onClick={() => setActive(i)}
            role="tab"
            aria-selected={active === i}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Bottom flourish ── */}
      <div className="h3c-flourish" aria-hidden="true">
        <span>✦</span><span>❧</span><span>✦</span>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

        :root {
          --rose:        #c9728a;
          --rose-light:  #f5e0e6;
          --rose-pale:   #fdf4f6;
          --rose-deep:   #b05575;
          --gold:        #b8914a;
          --gold-light:  #e8d5b0;
          --ivory:       #fffaf5;
          --blush:       #faeef2;
          --text-dark:   #3a2c30;
          --text-mid:    #7a5c64;
          --text-soft:   #b89aa0;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Root ── */
        .h3c-root {
          font-family: 'Jost', sans-serif;
          background: var(--ivory);
          position: relative;
          overflow: hidden;
          padding: 6rem 1.5rem 5rem;
          text-align: center;
        }

        /* ── Ambient blobs ── */
        .h3c-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
          z-index: 0;
        }
        .h3c-blob--rose  { width: 420px; height: 420px; background: var(--rose-light);  opacity: 0.45; top: -100px; right: -120px; }
        .h3c-blob--gold  { width: 300px; height: 300px; background: var(--gold-light);  opacity: 0.30; bottom: 20px; left: -80px; }
        .h3c-blob--blush { width: 260px; height: 260px; background: var(--blush);       opacity: 0.50; top: 40%;  left: 50%;  transform: translate(-50%,-50%); }

        /* ── Petals ── */
        .h3c-petals { position: absolute; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
        .h3c-petal { position: absolute; top: -50px; border-radius: 150% 0 150% 0; opacity: 0; animation: h3cFall linear infinite; }
        .h3c-petal:nth-child(odd)  { background: var(--rose-light); }
        .h3c-petal:nth-child(even) { background: var(--gold-light); }
        .h3c-petal:nth-child(3n) { border-radius: 0 150% 0 150%; }

        .h3c-petal-1 { width:12px;height:16px;left:5%;  animation-duration:11s;animation-delay:0s;   }
        .h3c-petal-2 { width:9px; height:13px;left:18%; animation-duration:14s;animation-delay:1.8s; }
        .h3c-petal-3 { width:15px;height:19px;left:35%; animation-duration:10s;animation-delay:3.2s; }
        .h3c-petal-4 { width:11px;height:15px;left:52%; animation-duration:12s;animation-delay:0.6s; }
        .h3c-petal-5 { width:17px;height:21px;left:65%; animation-duration:9s; animation-delay:2.4s; }
        .h3c-petal-6 { width:10px;height:14px;left:78%; animation-duration:13s;animation-delay:4.1s; }
        .h3c-petal-7 { width:13px;height:17px;left:88%; animation-duration:11s;animation-delay:1.1s; }
        .h3c-petal-8 { width:16px;height:20px;left:95%; animation-duration:15s;animation-delay:5.5s; }

        @keyframes h3cFall {
          0%   { transform:translateY(-50px) rotate(0deg)   translateX(0);   opacity:0;   }
          10%  { opacity:0.6; }
          50%  { transform:translateY(50vh)  rotate(180deg) translateX(25px); }
          90%  { opacity:0.4; }
          100% { transform:translateY(110vh) rotate(360deg) translateX(-18px); opacity:0; }
        }

        /* ── Header ── */
        .h3c-header {
          position: relative;
          z-index: 2;
          margin-bottom: 4rem;
        }

        .h3c-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--rose);
          margin-bottom: 1.1rem;
        }
        .h3c-eyebrow-line {
          display: inline-block;
          width: 32px;
          height: 1px;
          background: var(--gold-light);
        }

        .h3c-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 6vw, 4.4rem);
          font-weight: 300;
          color: var(--text-dark);
          line-height: 1.15;
        }
        .h3c-title em {
          font-style: italic;
          color: var(--rose);
          font-weight: 400;
        }

        .h3c-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          margin: 1.3rem auto 1.1rem;
          max-width: 180px;
        }
        .h3c-divider::before, .h3c-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--gold-light);
        }
        .h3c-leaf { color: var(--rose); font-size: 1rem; }

        .h3c-subtitle {
          color: var(--text-mid);
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.8;
          max-width: 380px;
          margin: 0 auto;
        }

        /* ── Stage ── */
        .h3c-stage {
          position: relative;
          z-index: 2;
          height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
          margin-bottom: 2.5rem;
        }

        /* ── Cards ── */
        .h3c-card {
          position: absolute;
          width: 230px;
          height: 380px;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          will-change: transform, opacity;
          box-shadow: 0 8px 40px rgba(58,44,48,0.12);
          border: 1.5px solid var(--rose-light);
          transition: border-color 0.3s;
        }
        .h3c-card--active {
          border-color: var(--rose);
          box-shadow: 0 20px 60px rgba(201,114,138,0.30), 0 0 0 4px rgba(201,114,138,0.10);
        }

        /* active glow ring */
        .h3c-card-ring {
          position: absolute;
          inset: -6px;
          border-radius: 28px;
          border: 1.5px solid rgba(201,114,138,0.35);
          pointer-events: none;
          animation: ringPulse 2s ease-in-out infinite;
        }
        @keyframes ringPulse {
          0%,100% { opacity:1;  transform:scale(1);    }
          50%      { opacity:0.4; transform:scale(1.02); }
        }

        .h3c-img {
          object-fit: cover;
          object-position: top center;
        }

        /* gradient overlay */
        .h3c-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 35%,
            rgba(58,44,48,0.55) 75%,
            rgba(58,44,48,0.85) 100%
          );
        }

        /* card content */
        .h3c-card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.2rem 1.1rem 1.4rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.2rem;
        }
        .h3c-card-brand {
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--rose-light);
          opacity: 0.8;
        }
        .h3c-card-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          font-weight: 500;
          font-style: italic;
          color: #fff;
          line-height: 1.2;
        }
        .h3c-card-cta {
          margin-top: 0.4rem;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold-light);
          display: flex;
          align-items: center;
          gap: 0.3rem;
          animation: ctaFade 0.5s ease both;
        }
        @keyframes ctaFade {
          from { opacity:0; transform:translateY(6px); }
          to   { opacity:1; transform:translateY(0);   }
        }

        /* ── Dot indicators ── */
        .h3c-dots {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }
        .h3c-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          border: none;
          background: var(--rose-light);
          cursor: pointer;
          padding: 0;
          transition: background 0.25s, transform 0.25s, width 0.25s;
        }
        .h3c-dot--active {
          background: var(--rose);
          width: 22px;
          border-radius: 9999px;
          transform: none;
        }

        /* ── Flourish ── */
        .h3c-flourish {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          color: var(--gold-light);
          font-size: 0.9rem;
          letter-spacing: 0.5rem;
        }
        .h3c-flourish span:nth-child(2) { color: var(--rose-light); font-size: 1.1rem; }

        /* ── Mobile ── */
        @media (max-width: 600px) {
          .h3c-root { padding: 4rem 1rem 4rem; }

          .h3c-stage { height: 360px; }

          .h3c-card  { width: 185px; height: 310px; border-radius: 20px; }

          .h3c-title { font-size: clamp(2rem, 8vw, 2.8rem); }

          .h3c-blob--rose  { width: 260px; height: 260px; }
          .h3c-blob--gold  { width: 200px; height: 200px; }
        }
      `}</style>
    </section>
  );
}