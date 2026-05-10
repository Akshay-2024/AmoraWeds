import ReviewForm from "@/components/ReviewForm";

async function getReviews() {
  const res = await fetch("http://localhost:3000/api/reviews", {
    cache: "no-store",
  });
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <main className="amoera-reviews">
      {/* Floating Petals */}
      <div className="petals-container" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className={`petal petal-${i + 1}`} />
        ))}
      </div>

      {/* Hero Banner */}
      <div className="reviews-hero">
        <div className="hero-inner">
          <span className="eyebrow">Love Stories</span>
          <h1 className="page-title">Client Reviews</h1>
          <div className="divider">
            <span className="divider-leaf">❧</span>
          </div>
          <p className="page-subtitle">
            Heartfelt words from couples who trusted AmoeraWeds with their most
            special day.
          </p>
        </div>
        <div className="hero-curve" aria-hidden="true" />
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="content-grid">

          {/* Reviews List */}
          <div className="reviews-list">
            <h2 className="col-heading">
              <span className="col-heading-accent">✦</span> What They Said
            </h2>

            {reviews.map((review: any) => (
              <div key={review._id} className="review-card">
                <div className="review-quote">"</div>
                <p className="review-message">{review.message}</p>
                <div className="review-footer">
                  <div className="review-avatar">
                    {review.name?.charAt(0) ?? "?"}
                  </div>
                  <div className="review-meta">
                    <p className="review-name">{review.name}</p>
                    <div className="review-stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < review.rating ? "star star--filled" : "star"}>
                          ★
                        </span>
                      ))}
                      <span className="review-score">{review.rating}/5</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {reviews.length === 0 && (
              <div className="empty-state">
                <p>Be the first to share your experience ✨</p>
              </div>
            )}
          </div>

          {/* Review Form */}
          <div className="form-column">
            <div className="form-wrapper">
              <h2 className="col-heading">
                <span className="col-heading-accent">✦</span> Share Your Story
              </h2>
              <p className="form-intro">
                We'd love to hear about your experience. Your words help other
                couples find their perfect wedding website.
              </p>
              <ReviewForm />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

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

        *, *::before, *::after { box-sizing: border-box; }

        .amoera-reviews {
          font-family: 'Jost', sans-serif;
          background: var(--ivory);
          color: var(--text-dark);
          overflow-x: hidden;
          min-height: 100vh;
        }

        /* ─── Petals ─── */
        .petals-container { position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden; }
        .petal { position:absolute;top:-60px;border-radius:150% 0 150% 0;opacity:0;animation:falling linear infinite; }
        .petal:nth-child(odd)  { background:var(--rose-light); }
        .petal:nth-child(even) { background:var(--gold-light); }
        .petal:nth-child(3n)   { border-radius:0 150% 0 150%; }
        .petal:nth-child(5n)   { border-radius:50% 50% 0 50%; }
        .petal-1  {width:14px;height:18px;left:4%; animation-duration:10s;animation-delay:0s}
        .petal-2  {width:10px;height:14px;left:11%;animation-duration:13s;animation-delay:1.5s}
        .petal-3  {width:18px;height:22px;left:19%;animation-duration:9s; animation-delay:3s}
        .petal-4  {width:12px;height:16px;left:27%;animation-duration:14s;animation-delay:0.5s}
        .petal-5  {width:16px;height:20px;left:36%;animation-duration:11s;animation-delay:2s}
        .petal-6  {width:10px;height:13px;left:44%;animation-duration:12s;animation-delay:4s}
        .petal-7  {width:20px;height:24px;left:53%;animation-duration:10s;animation-delay:1s}
        .petal-8  {width:14px;height:18px;left:61%;animation-duration:15s;animation-delay:2.5s}
        .petal-9  {width:11px;height:15px;left:68%;animation-duration:11s;animation-delay:0.8s}
        .petal-10 {width:17px;height:21px;left:76%;animation-duration:13s;animation-delay:3.5s}
        .petal-11 {width:12px;height:16px;left:83%;animation-duration:9s; animation-delay:1.2s}
        .petal-12 {width:15px;height:19px;left:90%;animation-duration:12s;animation-delay:4.5s}
        .petal-13 {width:10px;height:14px;left:7%; animation-duration:14s;animation-delay:5s}
        .petal-14 {width:19px;height:23px;left:23%;animation-duration:10s;animation-delay:6s}
        .petal-15 {width:13px;height:17px;left:49%;animation-duration:11s;animation-delay:2.8s}
        .petal-16 {width:16px;height:20px;left:95%;animation-duration:13s;animation-delay:7s}
        @keyframes falling {
          0%   {transform:translateY(-60px) rotate(0deg)   translateX(0);   opacity:0}
          10%  {opacity:0.65}
          50%  {transform:translateY(50vh)  rotate(180deg) translateX(28px)}
          90%  {opacity:0.45}
          100% {transform:translateY(110vh) rotate(360deg) translateX(-20px);opacity:0}
        }

        /* ─── Hero ─── */
        .reviews-hero {
          background:linear-gradient(160deg,var(--blush) 0%,#f9e8ee 60%,var(--rose-pale) 100%);
          padding:5rem 1.25rem 0;
          text-align:center;
          position:relative;
          z-index:1;
        }
        .hero-inner { max-width:680px;margin:0 auto;padding-bottom:4rem; }
        .eyebrow { display:inline-block;font-size:0.72rem;font-weight:500;letter-spacing:0.28em;text-transform:uppercase;color:var(--rose);margin-bottom:1rem; }
        .page-title { font-family:'Cormorant Garamond',serif;font-size:clamp(2.2rem,8vw,5rem);font-weight:300;color:var(--text-dark);margin:0;line-height:1.1; }
        .page-subtitle { margin:1.2rem auto 0;color:var(--text-mid);font-weight:300;font-size:clamp(0.88rem,2.5vw,1.05rem);line-height:1.85;max-width:420px; }
        .divider { margin:1.2rem auto 0;display:flex;align-items:center;justify-content:center;gap:0.75rem;max-width:180px; }
        .divider::before,.divider::after { content:'';flex:1;height:1px;background:var(--gold-light); }
        .divider-leaf { color:var(--rose);font-size:1.1rem; }
        .hero-curve { width:100%;height:55px;background:var(--ivory);clip-path:ellipse(55% 100% at 50% 100%); }

        /* ─── Container ─── */
        .container { max-width:1200px;margin:0 auto;padding:3rem 1.25rem 5rem;position:relative;z-index:1; }

        /* ─── Grid ─── */
        .content-grid {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:3rem;
          align-items:start;
        }

        /* Tablet / mobile: stack */
        @media (max-width:860px) {
          .content-grid { grid-template-columns:1fr; gap:2.5rem; }
          /* Form on top, reviews below */
          .form-column  { order:-1; }
          .reviews-list { order:1; }
        }

        /* ─── Column heading ─── */
        .col-heading {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.4rem,4vw,1.9rem);
          font-weight:500;
          color:var(--text-dark);
          margin:0 0 1.5rem;
          display:flex;align-items:center;gap:0.6rem;
        }
        .col-heading-accent { color:var(--rose);font-size:1rem; }

        /* ─── Review Cards ─── */
        .reviews-list { display:flex;flex-direction:column;gap:1.25rem; }

        .review-card {
          background:#fff;
          border:1px solid rgba(201,114,138,0.15);
          border-radius:20px;
          padding:1.6rem 1.5rem 1.4rem;
          box-shadow:0 3px 20px rgba(180,100,120,0.06);
          transition:transform 0.3s ease,box-shadow 0.3s ease;
        }
        .review-card:hover { transform:translateY(-4px);box-shadow:0 12px 40px rgba(180,100,120,0.12); }

        .review-quote { font-family:'Cormorant Garamond',serif;font-size:4rem;line-height:0.55;color:var(--rose-light);font-weight:600;margin-bottom:0.9rem;display:block; }
        .review-message { font-family:'Cormorant Garamond',serif;font-size:clamp(1rem,2.5vw,1.12rem);font-style:italic;color:var(--text-mid);line-height:1.9;margin:0 0 1.3rem; }

        .review-footer { display:flex;align-items:center;gap:0.9rem;border-top:1px solid var(--rose-light);padding-top:1rem;flex-wrap:wrap; }
        .review-avatar { width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--rose) 0%,var(--gold) 100%);color:#fff;display:flex;align-items:center;justify-content:center;font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-weight:500;flex-shrink:0; }
        .review-name { font-weight:500;font-size:0.9rem;color:var(--text-dark);margin:0 0 0.25rem;letter-spacing:0.03em; }
        .review-stars { display:flex;align-items:center;gap:1px;flex-wrap:wrap; }
        .star        { font-size:0.85rem;color:var(--rose-light); }
        .star--filled{ color:var(--gold); }
        .review-score{ font-size:0.75rem;color:var(--text-soft);margin-left:0.4rem; }

        /* ─── Empty State ─── */
        .empty-state { background:var(--rose-pale);border:1px dashed var(--rose-light);border-radius:16px;padding:2.5rem 1.5rem;text-align:center;color:var(--text-mid);font-family:'Cormorant Garamond',serif;font-size:1.1rem;font-style:italic; }

        /* ─── Form ─── */
        .form-wrapper {
          background:#fff;
          border:1px solid rgba(201,114,138,0.18);
          border-radius:24px;
          padding:2rem 1.6rem;
          box-shadow:0 4px 40px rgba(180,100,120,0.07);
        }

        /* Sticky only on desktop */
        @media (min-width:861px) {
          .form-wrapper { position:sticky;top:2rem; }
        }

        .form-intro { color:var(--text-mid);font-size:0.92rem;font-weight:300;line-height:1.8;margin:-1rem 0 1.8rem; }

        /* ─── Form child overrides ─── */
        .form-wrapper input,
        .form-wrapper textarea,
        .form-wrapper select {
          font-family:'Jost',sans-serif !important;
          border:1.5px solid var(--rose-light) !important;
          border-radius:12px !important;
          padding:0.85rem 1.1rem !important;
          font-size:0.95rem !important;
          color:var(--text-dark) !important;
          background:var(--ivory) !important;
          outline:none !important;
          width:100% !important;
          transition:border-color 0.25s ease !important;
          margin-bottom:1rem !important;
        }
        .form-wrapper input:focus,
        .form-wrapper textarea:focus,
        .form-wrapper select:focus { border-color:var(--rose) !important;background:#fff !important; }
        .form-wrapper textarea { min-height:120px !important;resize:vertical !important; }
        .form-wrapper label { font-family:'Jost',sans-serif !important;font-size:0.75rem !important;font-weight:500 !important;letter-spacing:0.1em !important;text-transform:uppercase !important;color:var(--text-mid) !important;display:block !important;margin-bottom:0.4rem !important; }
        .form-wrapper button[type="submit"],
        .form-wrapper button { font-family:'Jost',sans-serif !important;font-size:0.82rem !important;font-weight:500 !important;letter-spacing:0.14em !important;text-transform:uppercase !important;background:linear-gradient(135deg,var(--rose) 0%,var(--rose-deep) 100%) !important;color:#fff !important;border:none !important;border-radius:9999px !important;padding:1rem 2.5rem !important;cursor:pointer !important;width:100% !important;transition:box-shadow 0.3s ease,transform 0.3s ease !important;box-shadow:0 6px 24px rgba(201,114,138,0.35) !important;margin-top:0.5rem !important; }
        .form-wrapper button[type="submit"]:hover,
        .form-wrapper button:hover { box-shadow:0 10px 36px rgba(201,114,138,0.50) !important;transform:translateY(-2px) !important; }

        /* ─── Small mobile (≤ 400px) ─── */
        @media (max-width:400px) {
          .reviews-hero  { padding-top:3.5rem; }
          .hero-inner    { padding-bottom:2.5rem; }
          .container     { padding:2rem 1rem 4rem; }
          .form-wrapper  { padding:1.4rem 1rem;border-radius:18px; }
          .review-card   { padding:1.2rem 1rem;border-radius:16px; }
        }
      `}</style>
    </main>
  );
}