"use client";

import { useState } from "react";

const PHONE   = "918075298373";
const MESSAGE = "Hi AmoeraWeds, I would like to know more about your wedding website services.";
const WA_LINK = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="wa-wrapper">

      {/* Tooltip label */}
      <span
        className={`wa-tooltip ${hovered ? "wa-tooltip--visible" : ""}`}
        aria-hidden="true"
      >
        Chat with us ✦
      </span>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AmoeraWeds on WhatsApp"
        className="wa-btn"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Pulse rings */}
        <span className="wa-ring wa-ring-1" aria-hidden="true" />
        <span className="wa-ring wa-ring-2" aria-hidden="true" />

        {/* WhatsApp SVG icon — no external dependency */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="26"
          height="26"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&display=swap');

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

        .wa-wrapper {
          position: fixed;
          bottom: 1.8rem;
          right: 1.8rem;
          z-index: 200;
          display: flex;
          align-items: center;
          gap: 0.9rem;
          font-family: 'Jost', sans-serif;
        }

        /* ── Tooltip ── */
        .wa-tooltip {
          font-size: 0.78rem;
          font-weight: 400;
          letter-spacing: 0.04em;
          color: var(--text-dark);
          background: #fff;
          border: 1px solid var(--rose-light);
          border-radius: 9999px;
          padding: 0.45rem 1rem;
          white-space: nowrap;
          box-shadow: 0 4px 18px rgba(201, 114, 138, 0.12);
          pointer-events: none;
          opacity: 0;
          transform: translateX(8px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .wa-tooltip--visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* ── Button ── */
        .wa-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          /* Brand-aware: rose gradient with a green heart */
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          color: #fff;
          text-decoration: none;
          box-shadow:
            0 8px 28px rgba(37, 211, 102, 0.36),
            0 2px 8px  rgba(37, 211, 102, 0.18);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.3s ease;
          flex-shrink: 0;
        }
        .wa-btn:hover {
          transform: scale(1.12) rotate(-4deg);
          box-shadow:
            0 14px 40px rgba(37, 211, 102, 0.48),
            0 4px 14px rgba(37, 211, 102, 0.24);
        }
        .wa-btn:active {
          transform: scale(0.97);
        }

        /* ── Pulse rings ── */
        .wa-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px solid rgba(37, 211, 102, 0.5);
          animation: waPulse 2.6s ease-out infinite;
          pointer-events: none;
        }
        .wa-ring-2 {
          animation-delay: 1.3s;
        }
        @keyframes waPulse {
          0%   { transform: scale(1);    opacity: 0.7; }
          100% { transform: scale(1.85); opacity: 0;   }
        }

        @media (max-width: 500px) {
          .wa-wrapper { bottom: 1.2rem; right: 1.2rem; }
          .wa-btn { width: 52px; height: 52px; }
          .wa-tooltip { display: none; }
        }
      `}</style>
    </div>
  );
}