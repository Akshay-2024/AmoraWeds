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
                  ? position * 155
                  : position * 155,

              scale:
                position === 0
                  ? 1
                  : Math.abs(position) === 1
                  ? 0.72
                  : 0.52,

              rotateY: position * -58,

              z:
                position === 0
                  ? 0
                  : -320 * Math.abs(position),

              opacity:
                Math.abs(position) > 2
                  ? 0
                  : position === 0
                  ? 1
                  : 0.68,

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