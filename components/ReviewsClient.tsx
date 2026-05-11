"use client";

import { useMemo, useState } from "react";

export default function ReviewsClient({
  reviews,
}: {
  reviews: any[];
}) {
  const [filter, setFilter] =
    useState("all");

  const filteredReviews =
    useMemo(() => {
      if (filter === "all")
        return reviews;

      return reviews.filter(
        (review) =>
          review.rating ===
          Number(filter)
      );
    }, [reviews, filter]);

  return (
    <>
      {/* Filter Buttons */}

      <div className="filter-wrap">

        <button
          onClick={() =>
            setFilter("all")
          }
          className={`filter-btn ${
            filter === "all"
              ? "filter-active"
              : ""
          }`}
        >
          All Reviews
        </button>

        {[5,4,3,2,1].map((star) => (
          <button
            key={star}
            onClick={() =>
              setFilter(String(star))
            }
            className={`filter-btn ${
              filter === String(star)
                ? "filter-active"
                : ""
            }`}
          >
            {star} ★
          </button>
        ))}

      </div>

      {/* Reviews */}

      <div className="reviews-list">

        {filteredReviews.length > 0 ? (
          filteredReviews.map(
            (review: any) => (
              <div
                key={review._id}
                className="review-card"
              >

                <div className="review-quote">
                  "
                </div>

                <p className="review-message">
                  {review.message}
                </p>

                <div className="review-footer">

                  <div className="review-avatar">
                    {review.name?.charAt(
                      0
                    ) ?? "?"}
                  </div>

                  <div className="review-meta">

                    <p className="review-name">
                      {review.name}
                    </p>

                    <div className="review-stars">

                      {Array.from({
                        length: 5,
                      }).map((_, i) => (
                        <span
                          key={i}
                          className={
                            i <
                            review.rating
                              ? "star star--filled"
                              : "star"
                          }
                        >
                          ★
                        </span>
                      ))}

                      <span className="review-score">
                        {review.rating}
                        /5
                      </span>

                    </div>

                  </div>

                </div>

              </div>
            )
          )
        ) : (
          <div className="empty-state">
            <p>
              No matching reviews
              found ✨
            </p>
          </div>
        )}

      </div>

      <style jsx>{`
        .filter-wrap{
          display:flex;
          flex-wrap:wrap;
          gap:12px;
          margin-bottom:2rem;
        }

        .filter-btn{
          border:none;
          background:white;
          border:1px solid
            rgba(201,114,138,0.2);

          padding:0.7rem 1.2rem;
          border-radius:999px;
          cursor:pointer;
          transition:0.3s;
          color:#7a5c64;
          font-size:0.9rem;
        }

        .filter-btn:hover{
          transform:translateY(-2px);
        }

        .filter-active{
          background:
            linear-gradient(
              135deg,
              #c9728a 0%,
              #b05575 100%
            );

          color:white;
          border:none;
        }

        .reviews-list{
          display:flex;
          flex-direction:column;
          gap:1.25rem;
        }

        .review-card{
          background:#fff;
          border:1px solid
            rgba(201,114,138,0.15);

          border-radius:20px;
          padding:1.6rem 1.5rem 1.4rem;

          box-shadow:
            0 3px 20px
            rgba(180,100,120,0.06);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .review-card:hover{
          transform:translateY(-4px);

          box-shadow:
            0 12px 40px
            rgba(180,100,120,0.12);
        }

        .review-quote{
          font-size:4rem;
          line-height:0.55;
          color:#f5e0e6;
          margin-bottom:0.9rem;
        }

        .review-message{
          font-size:1.05rem;
          color:#7a5c64;
          line-height:1.9;
          margin-bottom:1.3rem;
          font-style:italic;
        }

        .review-footer{
          display:flex;
          align-items:center;
          gap:0.9rem;
          border-top:1px solid
            #f5e0e6;

          padding-top:1rem;
        }

        .review-avatar{
          width:40px;
          height:40px;
          border-radius:50%;

          background:
            linear-gradient(
              135deg,
              #c9728a 0%,
              #b8914a 100%
            );

          color:#fff;

          display:flex;
          align-items:center;
          justify-content:center;
        }

        .review-name{
          font-weight:600;
          margin-bottom:0.2rem;
        }

        .review-stars{
          display:flex;
          align-items:center;
          gap:2px;
        }

        .star{
          color:#f5e0e6;
        }

        .star--filled{
          color:#b8914a;
        }

        .review-score{
          margin-left:0.4rem;
          font-size:0.8rem;
          color:#b89aa0;
        }

        .empty-state{
          background:#fdf4f6;
          border:1px dashed
            #f5e0e6;

          border-radius:16px;
          padding:2rem;
          text-align:center;
          color:#7a5c64;
        }
      `}</style>
    </>
  );
}