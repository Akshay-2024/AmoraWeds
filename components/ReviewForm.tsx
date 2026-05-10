"use client";

import { useState } from "react";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message, rating }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setMessage("");
        setRating(0);
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000); // ← was missing
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000); // ← was missing
    }
  };

  const labels = ["", "Poor", "Fair", "Good", "Great", "Excellent"];
  const activeRating = hovered || rating;

  return (
    <>
      <style>{`
        :root {
          --rose:       #c9728a;
          --rose-light: #f5e0e6;
          --rose-deep:  #b05575;
          --gold:       #b8914a;
          --gold-light: #e8d5b0;
          --ivory:      #fffaf5;
          --dark:       #3a2c30;
          --mid:        #7a5c64;
          --soft:       #b89aa0;
        }

        *, *::before, *::after { box-sizing: border-box; }

        .review-form-wrapper { width: 100%; }

        .review-card {
          background: white;
          border-radius: 28px;
          padding: 24px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.06);
          border: 1px solid #f3e7ea;
          width: 100%;
        }

        @media (min-width: 768px) {
          .review-card { padding: 40px; }
        }

        .review-title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: var(--dark);
          margin: 0 0 10px;
          line-height: 1.2;
        }

        .review-subtitle {
          color: var(--mid);
          margin: 0 0 28px;
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .review-field { margin-bottom: 20px; }

        .review-label {
          display: block;
          margin-bottom: 8px;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--mid);
          font-weight: 600;
        }

        .review-input,
        .review-textarea {
          width: 100%;
          border: 1.5px solid var(--rose-light);
          border-radius: 16px;
          background: var(--ivory);
          padding: 14px 16px;
          font-size: 16px; /* ≥16px prevents iOS zoom */
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
          color: var(--dark);
          -webkit-appearance: none;
          appearance: none;
          font-family: inherit;
        }

        .review-input:focus,
        .review-textarea:focus {
          border-color: var(--rose);
          background: white;
          box-shadow: 0 0 0 4px rgba(201,114,138,0.12);
        }

        .review-textarea {
          min-height: 130px;
          resize: vertical;
          line-height: 1.7;
        }

        /* ── Stars ── */
        .rating-box {
          border: 1.5px solid var(--rose-light);
          background: var(--ivory);
          border-radius: 18px;
          padding: 12px 14px 10px;
        }

        .stars {
          display: flex;
          align-items: center;
          gap: 2px;
          flex-wrap: wrap;
        }

        .star-btn {
          border: none;
          background: none;
          cursor: pointer;
          padding: 4px;
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          -webkit-tap-highlight-color: transparent;
        }

        .star-btn svg {
          width: 30px;
          height: 30px;
          pointer-events: none; /* prevent SVG stealing touch events */
          display: block;
        }

        .star-shape {
          fill: none;
          stroke: #d7bcc3;
          stroke-width: 1.8;
          transition: fill 0.15s, stroke 0.15s;
        }

        .star-btn.active .star-shape {
          fill: var(--gold);
          stroke: var(--gold);
        }

        /* Only show hover state when actually hovering (not on touch) */
        .star-btn.preview .star-shape {
          fill: var(--gold-light);
          stroke: var(--gold-light);
        }

        .rating-text {
          margin-top: 8px;
          font-size: 0.88rem;
          color: var(--rose);
          font-weight: 500;
          min-height: 1.4em;
        }

        /* ── Submit ── */
        .submit-btn {
          width: 100%;
          border: none;
          border-radius: 999px;
          padding: 17px;
          min-height: 52px;
          margin-top: 8px;
          cursor: pointer;
          color: white;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: linear-gradient(135deg, var(--rose), var(--rose-deep));
          box-shadow: 0 8px 28px rgba(201,114,138,0.35);
          transition: transform 0.25s, box-shadow 0.25s, opacity 0.25s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: inherit;
          -webkit-tap-highlight-color: transparent;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(201,114,138,0.48);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (hover: none) {
          .submit-btn:hover:not(:disabled) {
            transform: none;
            box-shadow: 0 8px 28px rgba(201,114,138,0.35);
          }
          .submit-btn:active:not(:disabled) { opacity: 0.82; }
        }

        /* ── Spinner ── */
        .spinner {
          width: 17px;
          height: 17px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.75s linear infinite;
          flex-shrink: 0;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── Toast ── */
        .toast {
          margin-top: 16px;
          padding: 13px 16px;
          border-radius: 14px;
          font-size: 0.9rem;
          line-height: 1.6;
          animation: toastIn 0.3s ease;
        }

        @keyframes toastIn {
          from { opacity: 0; transform: translateY(5px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .toast-success {
          background: #eefaf2;
          border: 1px solid #b6e1c6;
          color: #2e7a55;
        }

        .toast-error {
          background: #fff3f5;
          border: 1px solid #f0cfd7;
          color: #b05575;
        }
      `}</style>

      <div className="review-form-wrapper">
        <form onSubmit={handleSubmit} className="review-card">

          <h2 className="review-title">Share Your Experience</h2>
          <p className="review-subtitle">
            Your feedback helps AmoeraWeds improve and create better wedding experiences.
          </p>

          {/* Name */}
          <div className="review-field">
            <label className="review-label" htmlFor="rv-name">Your Name</label>
            <input
              id="rv-name"
              type="text"
              placeholder="e.g. Priya & Arjun"
              className="review-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </div>

          {/* Review */}
          <div className="review-field">
            <label className="review-label" htmlFor="rv-message">Your Review</label>
            <textarea
              id="rv-message"
              placeholder="Tell us about your experience..."
              className="review-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {/* Rating */}
          <div className="review-field">
            <label className="review-label">Your Rating</label>
            <div className="rating-box">
              <div className="stars" role="group" aria-label="Star rating">
                {[1, 2, 3, 4, 5].map((star) => {
                  const isActive  = rating >= star;
                  // preview only when hovered > 0 and not already selected
                  const isPreview = !isActive && hovered > 0 && hovered >= star;
                  const cls = `star-btn${isActive ? " active" : isPreview ? " preview" : ""}`;
                  return (
                    <button
                      key={star}
                      type="button"
                      aria-label={`${star} star${star > 1 ? "s" : ""}`}
                      className={cls}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHovered(star)}
                      onMouseLeave={() => setHovered(0)}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <polygon
                          className="star-shape"
                          points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                        />
                      </svg>
                    </button>
                  );
                })}
              </div>
              <div className="rating-text">
                {activeRating ? labels[activeRating] : "Select rating"}
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading" || rating === 0}
            className="submit-btn"
          >
            {status === "loading" ? (
              <><span className="spinner" /> Submitting…</>
            ) : "Submit Review"}
          </button>

          {status === "success" && (
            <div className="toast toast-success" role="status">
              ✓ Thank you! Your review has been submitted successfully.
            </div>
          )}
          {status === "error" && (
            <div className="toast toast-error" role="alert">
              ! Something went wrong. Please try again.
            </div>
          )}

        </form>
      </div>
    </>
  );
}