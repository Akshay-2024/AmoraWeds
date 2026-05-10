"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "Home",    href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "Works",   href: "/demos" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav className={`amoera-nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="nav-inner">

          {/* ── Logo ── */}
          <Link href="/" className="nav-logo" aria-label="AmoeraWeds home">
            <span className="logo-amoera">Amora</span>
            <span className="logo-weds">Weds</span>
          </Link>

          {/* ── Desktop links ── */}
          <ul className="nav-links" role="list">
            {NAV_ITEMS.map(({ name, href }) => {
              const active = pathname === href;
              return (
                <li key={name}>
                  <Link
                    href={href}
                    className={`nav-link ${active ? "nav-link--active" : ""}`}
                  >
                    {name}
                    <span className="nav-link-underline" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>


          {/* ── Hamburger ── */}
          <button
            className={`nav-burger ${open ? "nav-burger--open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="burger-bar burger-bar-1" />
            <span className="burger-bar burger-bar-2" />
            <span className="burger-bar burger-bar-3" />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`mobile-overlay ${open ? "mobile-overlay--open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`mobile-drawer ${open ? "mobile-drawer--open" : ""}`}
        aria-hidden={!open}
      >
        {/* Decorative petals */}
        <div className="drawer-petals" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <span key={i} className={`drawer-petal dp-${i + 1}`} />
          ))}
        </div>

        <div className="drawer-logo">
          <span className="logo-amoera">Amoera</span>
          <span className="logo-weds">Weds</span>
        </div>

        <div className="drawer-divider">
          <span className="drawer-leaf">❧</span>
        </div>

        <ul className="drawer-links" role="list">
          {NAV_ITEMS.map(({ name, href }, i) => {
            const active = pathname === href;
            return (
              <li
                key={name}
                className="drawer-link-wrap"
                style={{ animationDelay: `${i * 0.07 + 0.1}s` }}
              >
                <Link
                  href={href}
                  className={`drawer-link ${active ? "drawer-link--active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  <span className="drawer-link-dot" aria-hidden="true">✦</span>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>

      
        <p className="drawer-tagline">
          <em>Crafting timeless wedding websites</em>
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        :root {
          --rose:        #c9728a;
          --rose-light:  #f5e0e6;
          --rose-pale:   #fdf4f6;
          --gold:        #b8914a;
          --gold-light:  #e8d5b0;
          --ivory:       #fffaf5;
          --text-dark:   #3a2c30;
          --text-mid:    #7a5c64;
          --text-soft:   #b89aa0;
        }

        /* ─── Navbar shell ─── */
        .amoera-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          font-family: 'Jost', sans-serif;
          background: rgba(255, 250, 245, 0.85);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid transparent;
          transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .nav--scrolled {
          background: rgba(255, 250, 245, 0.97);
          border-bottom-color: var(--rose-light);
          box-shadow: 0 4px 28px rgba(201, 114, 138, 0.08);
        }

        /* ─── Inner layout ─── */
        .nav-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 68px;
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        /* ─── Logo ─── */
        .nav-logo {
          text-decoration: none;
          display: flex;
          align-items: baseline;
          gap: 0;
          flex-shrink: 0;
          margin-right: auto;
        }
        .logo-amoera {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.65rem;
          font-style: italic;
          font-weight: 400;
          color: var(--text-dark);
          letter-spacing: 0.01em;
          line-height: 1;
        }
        .logo-weds {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.65rem;
          font-style: italic;
          font-weight: 600;
          color: var(--rose);
          letter-spacing: 0.01em;
          line-height: 1;
        }

        /* ─── Desktop nav links ─── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nav-link {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          padding: 0.35rem 0.85rem;
          font-size: 0.8rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-mid);
          text-decoration: none;
          transition: color 0.22s;
        }
        .nav-link:hover,
        .nav-link--active {
          color: var(--rose);
        }

        .nav-link-underline {
          display: block;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: calc(100% - 1.7rem);
          height: 1.5px;
          background: var(--rose);
          border-radius: 9999px;
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: center;
        }
        .nav-link:hover .nav-link-underline,
        .nav-link--active .nav-link-underline {
          transform: translateX(-50%) scaleX(1);
        }

        /* ─── Desktop CTA ─── */
        .nav-cta {
          flex-shrink: 0;
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0.65rem 1.6rem;
          border-radius: 9999px;
          text-decoration: none;
          color: #fff;
          background: linear-gradient(135deg, var(--rose) 0%, #b05575 100%);
          box-shadow: 0 4px 18px rgba(201, 114, 138, 0.30);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .nav-cta:hover {
          box-shadow: 0 8px 28px rgba(201, 114, 138, 0.46);
          transform: translateY(-1px);
        }

        /* ─── Hamburger ─── */
        .nav-burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: none;
          border: 1px solid var(--rose-light);
          border-radius: 10px;
          cursor: pointer;
          padding: 8px;
          flex-shrink: 0;
          transition: border-color 0.25s, background 0.25s;
        }
        .nav-burger:hover {
          background: var(--rose-pale);
          border-color: var(--rose);
        }

        .burger-bar {
          display: block;
          width: 100%;
          height: 1.5px;
          background: var(--text-dark);
          border-radius: 9999px;
          transform-origin: center;
          transition: transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.22s;
        }

        /* X state */
        .nav-burger--open .burger-bar-1 { transform: translateY(6.5px) rotate(45deg); }
        .nav-burger--open .burger-bar-2 { transform: scaleX(0); opacity: 0; }
        .nav-burger--open .burger-bar-3 { transform: translateY(-6.5px) rotate(-45deg); }

        /* ─── Mobile overlay ─── */
        .mobile-overlay {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 98;
          background: rgba(58, 44, 48, 0);
          pointer-events: none;
          transition: background 0.35s ease;
        }
        .mobile-overlay--open {
          background: rgba(58, 44, 48, 0.45);
          pointer-events: auto;
        }

        /* ─── Mobile drawer ─── */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          z-index: 99;
          width: min(340px, 90vw);
          height: 100dvh;
          background: var(--ivory);
          border-left: 1px solid var(--rose-light);
          padding: 2.5rem 2rem 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1);
          overflow: hidden;
        }
        .mobile-drawer--open {
          transform: translateX(0);
        }

        /* petals inside drawer */
        .drawer-petals { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .drawer-petal {
          position: absolute;
          border-radius: 150% 0 150% 0;
          opacity: 0.4;
        }
        .drawer-petal:nth-child(even) { background: var(--gold-light); border-radius: 0 150% 0 150%; }
        .drawer-petal:nth-child(odd)  { background: var(--rose-light); }
        .dp-1 { width:40px; height:52px; top:-10px;  right:-8px;  transform: rotate(20deg);  }
        .dp-2 { width:28px; height:36px; top:30px;   right:20px;  transform: rotate(-30deg); }
        .dp-3 { width:22px; height:28px; bottom:80px; left:-6px;  transform: rotate(50deg);  }
        .dp-4 { width:34px; height:44px; bottom:30px; right:10px; transform: rotate(-15deg); }
        .dp-5 { width:18px; height:24px; top:45%;    left:10px;  transform: rotate(70deg);  }
        .dp-6 { width:26px; height:32px; top:60%;    right:5px;  transform: rotate(-45deg); }

        .drawer-logo {
          position: relative;
          z-index: 1;
          margin-bottom: 0.5rem;
        }

        .drawer-divider {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin: 0.8rem 0 2rem;
          width: 100%;
        }
        .drawer-divider::before,
        .drawer-divider::after {
          content: '';
          display: block;
          flex: 1;
          height: 1px;
          background: var(--gold-light);
        }
        .drawer-leaf { color: var(--rose); font-size: 1rem; }

        /* ─── Drawer links ─── */
        .drawer-links {
          position: relative;
          z-index: 1;
          list-style: none;
          padding: 0;
          margin: 0 0 2.5rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .drawer-link-wrap {
          opacity: 0;
          transform: translateX(20px);
          animation: none;
        }
        .mobile-drawer--open .drawer-link-wrap {
          animation: slideIn 0.4s ease forwards;
        }
        @keyframes slideIn {
          to { opacity: 1; transform: translateX(0); }
        }

        .drawer-link {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.85rem 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.55rem;
          font-weight: 300;
          color: var(--text-mid);
          text-decoration: none;
          border-bottom: 1px solid var(--rose-light);
          width: 100%;
          transition: color 0.22s, padding-left 0.22s;
        }
        .drawer-link:hover,
        .drawer-link--active {
          color: var(--rose);
          padding-left: 0.4rem;
        }
        .drawer-link-dot {
          font-size: 0.55rem;
          color: var(--rose);
          opacity: 0;
          transition: opacity 0.22s;
          flex-shrink: 0;
        }
        .drawer-link:hover .drawer-link-dot,
        .drawer-link--active .drawer-link-dot {
          opacity: 1;
        }

        /* ─── Drawer CTA ─── */
        .drawer-cta {
          position: relative;
          z-index: 1;
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0.9rem 2.2rem;
          border-radius: 9999px;
          text-decoration: none;
          color: #fff;
          background: linear-gradient(135deg, var(--rose) 0%, #b05575 100%);
          box-shadow: 0 6px 22px rgba(201, 114, 138, 0.32);
          transition: transform 0.25s, box-shadow 0.25s;
          align-self: flex-start;
        }
        .drawer-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(201, 114, 138, 0.44);
        }

        .drawer-tagline {
          position: relative;
          z-index: 1;
          margin-top: auto;
          padding-top: 2rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.95rem;
          color: var(--text-soft);
          font-style: italic;
        }

        /* ─── Responsive show/hide ─── */
        @media (max-width: 860px) {
          .nav-links, .nav-cta { display: none; }
          .nav-burger           { display: flex; }
          .mobile-overlay       { display: block; }
        }

        @media (max-width: 500px) {
          .nav-inner { padding: 0 1.25rem; height: 60px; }
          .logo-amoera, .logo-weds { font-size: 1.45rem; }
        }
      `}</style>
    </>
  );
}