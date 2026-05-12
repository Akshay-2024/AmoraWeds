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
  "/templates/1.png",
];

export default function Hero360Carousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-32 bg-[#faf7f2]">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-pink-200/30 blur-[140px]" />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-20 px-6">
        <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-4">
          Explore Templates
        </p>

        <h2 className="text-4xl md:text-6xl font-light text-neutral-900 leading-tight">
          Immersive Wedding
          <br />
          Website Experiences
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-neutral-600 text-lg">
          Discover beautifully crafted wedding websites with elegant motion,
          premium layouts, and unforgettable digital experiences.
        </p>
      </div>

      {/* 360 Carousel */}
      <div className="relative h-[520px] w-full flex items-center justify-center perspective-[2500px]">
        <div className="relative flex items-center justify-center w-full max-w-7xl h-full">
          {slides.map((slide, index) => {
            const offset =
              (index - active + slides.length) % slides.length;

            let position = offset;

            if (offset > slides.length / 2) {
              position = offset - slides.length;
            }

            return (
              <motion.div
                key={index}
                className="absolute"
                animate={{
                  x: position * 240,
                  scale: position === 0 ? 1 : 0.78,
                  rotateY: position * -35,
                  opacity: Math.abs(position) > 3 ? 0 : 1,
                  zIndex: 100 - Math.abs(position),
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className={`
                    relative overflow-hidden rounded-[32px]
                    shadow-2xl border border-white/20
                    backdrop-blur-xl
                    transition-all duration-500
                    ${
                      position === 0
                        ? "w-[290px] h-[560px]"
                        : "w-[220px] h-[470px]"
                    }
                  `}
                >
                  <Image
                    src={slide}
                    alt={`Template ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Floating Label */}
                  <div className="absolute bottom-5 left-5 text-white">
                    <p className="text-sm uppercase tracking-widest opacity-80">
                      AmoraWeds
                    </p>

                    <h3 className="text-xl font-light mt-1">
                      Wedding Template
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}