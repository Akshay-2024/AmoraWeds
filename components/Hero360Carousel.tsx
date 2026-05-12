"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  "/templates/1.jpg",
  "/templates/2.jpg",
  "/templates/3.jpg",
  "/templates/4.jpg",
  "/templates/5.jpg",
  "/templates/6.jpg",
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
    <section className="hero360">
      <div className="hero360-glow" />

      <div className="hero360-header">
        <p className="hero360-tag">
          PREMIUM COLLECTION
        </p>

        <h2 className="hero360-title">
          Explore Our
          <br />
          Wedding Templates
        </h2>
      </div>

      <div className="hero360-stage">
        {slides.map((slide, index) => {
          const diff =
            (index - active + slides.length) % slides.length;

          let position = diff;

          if (diff > slides.length / 2) {
            position = diff - slides.length;
          }

          const isCenter = position === 0;

          return (
            <motion.div
              key={index}
              className={`hero360-card ${
                isCenter ? "active" : ""
              }`}
              animate={{
                x:
                  position === 0
                    ? 0
                    : position > 0
                    ? position * 120
                    : position * 120,

                scale:
                  position === 0
                    ? 1
                    : Math.abs(position) === 1
                    ? 0.82
                    : 0.64,

                rotateY: position * -45,

                z:
                  position === 0
                    ? 0
                    : -220 * Math.abs(position),

                opacity:
                  Math.abs(position) > 2
                    ? 0
                    : position === 0
                    ? 1
                    : 0.65,

                filter:
                  position === 0
                    ? "blur(0px)"
                    : "blur(1.5px)",
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              style={{
                zIndex: 100 - Math.abs(position),
              }}
            >
              <Image
                src={slide}
                alt=""
                fill
                className="hero360-image"
              />

              <div className="hero360-overlay" />

              <div className="hero360-content">
                <span>AMORAWEDS</span>
                <h3>Luxury Invite</h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}