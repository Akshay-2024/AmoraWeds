"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "Works", href: "/demos" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [open]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        {/* Decorative top accent line */}
        <div className="navbar-topline" />

        <div className="navbar-inner">

          {/* ── Logo ── */}
          <Link href="/" className="logo" aria-label="AmoraWeds Home">
            <span className="logo-ornament" aria-hidden="true">❧</span>
            <span className="logo-text">
              <span className="logo-amora">Amora</span><span className="logo-weds">Weds</span>
            </span>
          </Link>

          {/* ── Desktop Links ── */}
          <ul className="nav-links" role="list">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`nav-link ${active ? "nav-link--active" : ""}`}
                  >
                    {item.name}
                    <span className="nav-link-dot" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>

          

          {/* ── Hamburger ── */}
          <button
            className={`hamburger ${open ? "hamburger--open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="ham-bar" />
            <span className="ham-bar" />
            <span className="ham-bar" />
          </button>

        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      {open && (
        <>
          <div
            className="drawer-overlay"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <aside className="drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">

            {/* Decorative blobs */}
            <div className="drawer-blob drawer-blob--1" aria-hidden="true" />
            <div className="drawer-blob drawer-blob--2" aria-hidden="true" />

            {/* Head */}
            <div className="drawer-head">
              <Link href="/" className="logo" onClick={() => setOpen(false)}>
                <span className="logo-ornament" aria-hidden="true">❧</span>
                <span className="logo-text">
                  <span className="logo-amora">Amora</span><span className="logo-weds">Weds</span>
                </span>
              </Link>
              <button
                className="close-btn"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Divider */}
            <div className="drawer-divider">
              <span className="drawer-leaf" aria-hidden="true">❧</span>
            </div>

            {/* Links */}
            <nav className="drawer-nav">
              {NAV_ITEMS.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`drawer-link ${active ? "drawer-link--active" : ""}`}
                    onClick={() => setOpen(false)}
                    style={{ animationDelay: `${0.055 * i}s` }}
                  >
                    <span className="drawer-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="drawer-name">{item.name}</span>
                    {active && <span className="drawer-active-mark" aria-hidden="true">◇</span>}
                  </Link>
                );
              })}
            </nav>

            {/* Footer */}
            

          </aside>
        </>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

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
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Navbar ── */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          font-family: 'Jost', sans-serif;
          background: rgba(255, 250, 245, 0.72);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid transparent;
          transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .navbar--scrolled {
          background: rgba(255, 250, 245, 0.97);
          border-color: var(--rose-light);
          box-shadow: 0 2px 28px rgba(201, 114, 138, 0.08);
        }

        /* thin gold-rose gradient line at very top */
        .navbar-topline {
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            var(--rose-light) 25%,
            var(--gold-light) 50%,
            var(--rose-light) 75%,
            transparent 100%
          );
        }

        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          height: 68px;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
        }

        /* ── Logo ── */
        .logo {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-shrink: 0;
          transition: opacity 0.25s;
        }
        .logo:hover { opacity: 0.85; }

        .logo-ornament {
          color: var(--rose);
          font-size: 1rem;
          opacity: 0.7;
          transition: opacity 0.3s, transform 0.3s;
        }
        .logo:hover .logo-ornament {
          opacity: 1;
          transform: rotate(-15deg);
        }

        .logo-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.7rem;
          font-style: italic;
          line-height: 1;
          letter-spacing: 0.01em;
        }
        .logo-amora { color: var(--text-dark); font-weight: 400; }
        .logo-weds  { color: var(--rose);      font-weight: 600; }

        /* ── Nav links ── */
        .nav-links {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 0.2rem;
          flex: 1;
          justify-content: center;
        }

        .nav-link {
          position: relative;
          text-decoration: none;
          color: var(--text-mid);
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: 0.04em;
          padding: 0.5rem 1.05rem;
          border-radius: 9999px;
          transition: color 0.25s, background 0.25s;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
        }
        .nav-link:hover      { color: var(--rose); background: var(--rose-pale); }
        .nav-link--active    { color: var(--rose); background: var(--rose-pale); }

        /* animated dot */
        .nav-link-dot {
          display: block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--rose);
          opacity: 0;
          transform: scale(0);
          transition: opacity 0.25s, transform 0.25s;
        }
        .nav-link--active .nav-link-dot,
        .nav-link:hover .nav-link-dot {
          opacity: 1;
          transform: scale(1);
        }

        /* ── CTA ── */
        .nav-cta {
          flex-shrink: 0;
          text-decoration: none;
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          padding: 0.6rem 1.5rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, var(--rose) 0%, #b05575 100%);
          color: #fff;
          box-shadow: 0 4px 18px rgba(201, 114, 138, 0.30);
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 26px rgba(201, 114, 138, 0.45);
        }

        /* ── Hamburger ── */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 42px;
          height: 42px;
          padding: 10px;
          background: #fff;
          border: 1px solid var(--rose-light);
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(201,114,138,0.10);
          flex-shrink: 0;
        }
        .ham-bar {
          display: block;
          width: 100%;
          height: 1.5px;
          background: var(--text-dark);
          border-radius: 9999px;
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .hamburger--open .ham-bar:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hamburger--open .ham-bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger--open .ham-bar:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* ── Overlay ── */
        .drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(58, 44, 48, 0.4);
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
          z-index: 120;
          animation: fadeIn 0.3s ease;
        }

        /* ── Drawer ── */
        .drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: min(360px, 92vw);
          height: 100dvh;
          background: var(--ivory);
          z-index: 130;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          animation: slideIn 0.38s cubic-bezier(0.22, 1, 0.36, 1);
          border-left: 1px solid var(--rose-light);
          box-shadow: -10px 0 50px rgba(58, 44, 48, 0.12);
        }

        .drawer-blob {
          position: absolute;
          pointer-events: none;
          z-index: 0;
          border-radius: 50%;
        }
        .drawer-blob--1 {
          width: 200px; height: 200px;
          background: var(--rose-light);
          opacity: 0.3;
          top: -70px; right: -70px;
        }
        .drawer-blob--2 {
          width: 130px; height: 130px;
          background: var(--gold-light);
          opacity: 0.22;
          bottom: 100px; left: -50px;
          border-radius: 0 150% 0 150%;
        }

        .drawer-head {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.6rem 1.6rem 1.2rem;
        }

        .close-btn {
          width: 38px;
          height: 38px;
          border: 1px solid var(--rose-light);
          border-radius: 10px;
          background: #fff;
          cursor: pointer;
          font-size: 0.9rem;
          color: var(--text-mid);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .close-btn:hover { background: var(--rose); color: #fff; border-color: var(--rose); }

        .drawer-divider {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin: 0 1.6rem 0.75rem;
          position: relative;
          z-index: 1;
        }
        .drawer-divider::before,
        .drawer-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--rose-light);
        }
        .drawer-leaf { color: var(--rose); font-size: 0.95rem; }

        /* ── Drawer nav ── */
        .drawer-nav {
          flex: 1;
          padding: 0.75rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          position: relative;
          z-index: 1;
        }

        .drawer-link {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.9rem;
          padding: 0.9rem 1rem;
          border-radius: 14px;
          transition: background 0.25s, transform 0.25s;
          animation: linkReveal 0.38s ease both;
        }
        .drawer-link:hover { background: var(--blush); transform: translateX(4px); }
        .drawer-link--active { background: var(--rose-pale); }

        .drawer-num {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 0.78rem;
          color: var(--text-soft);
          min-width: 20px;
          line-height: 1;
        }

        .drawer-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem;
          font-weight: 500;
          color: var(--text-dark);
          flex: 1;
          letter-spacing: 0.02em;
        }
        .drawer-link--active .drawer-name { color: var(--rose); }

        .drawer-active-mark {
          color: var(--rose);
          font-size: 0.65rem;
          opacity: 0.65;
        }

        /* ── Drawer footer ── */
        .drawer-footer {
          padding: 1.25rem 1.6rem 1.75rem;
          border-top: 1px solid var(--rose-light);
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          align-items: flex-start;
          position: relative;
          z-index: 1;
        }

        .drawer-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 0.92rem;
          color: var(--text-soft);
          font-weight: 300;
        }

        .drawer-wa {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          font-family: 'Jost', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          padding: 0.6rem 1.3rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, #25d366 0%, #128c4e 100%);
          color: #fff;
          box-shadow: 0 4px 16px rgba(37, 211, 102, 0.28);
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .drawer-wa:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(37, 211, 102, 0.40);
        }

        /* ── Animations ── */
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        @keyframes linkReveal {
          from { opacity: 0; transform: translateX(14px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .nav-links { display: none; }
          .nav-cta   { display: none; }
          .hamburger { display: flex; }
        }

        @media (max-width: 520px) {
          .navbar-inner { height: 60px; padding: 0 1rem; }
          .logo-text    { font-size: 1.5rem; }
        }
      `}</style>
    </>
  );
}