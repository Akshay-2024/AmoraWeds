import Image from "next/image";

type DemoCardProps = {
  title: string;
  image: string;
  link: string;
  segment: string;
  tag?: string;
};

const segmentLabel: Record<string, string> = {
  budget: "Essentials",
  mid: "Signature",
  premium: "Prestige",
};

export default function DemoCard({
  title,
  image,
  link,
  segment,
  tag,
}: DemoCardProps) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        .demo-card-root {
          position: relative;
          overflow: hidden;
          display: block;
          height: 440px;
          text-decoration: none;
          background: #1a0f07;
        }

        .demo-card-root::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(20, 10, 2, 0.88) 0%,
            rgba(20, 10, 2, 0.25) 50%,
            rgba(20, 10, 2, 0.0) 75%
          );
          transition: opacity 0.5s ease;
          opacity: 0.75;
          z-index: 1;
        }

        .demo-card-root:hover::after {
          opacity: 1;
        }

        .demo-card-root:hover .demo-card-img {
          transform: scale(1.07);
        }

        .demo-card-img {
          transition: transform 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .demo-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 0.9rem;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #b45309;
          border-bottom: 1px solid #b45309;
          padding-bottom: 2px;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s;
        }

        .demo-card-root:hover .demo-card-cta {
          opacity: 1;
          transform: translateY(0);
        }

        .demo-card-tier {
          position: absolute;
          top: 1.1rem;
          right: 1.1rem;
          z-index: 2;
          font-family: 'Jost', sans-serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 250, 247, 0.65);
          background: rgba(20, 10, 2, 0.38);
          padding: 5px 10px;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        .demo-card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.75rem;
          z-index: 2;
        }

        .demo-card-tag {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255, 250, 247, 0.6);
          border: 1px solid rgba(255, 250, 247, 0.25);
          padding: 3px 9px;
          margin-bottom: 0.55rem;
        }

        .demo-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.3rem, 2.5vw, 1.6rem);
          font-weight: 400;
          font-style: italic;
          color: #fffaf7;
          line-height: 1.2;
          margin: 0;
          letter-spacing: 0.01em;
        }
      `}</style>

      <a href={link} target="_blank" className="demo-card-root">
        {/* Image */}
        <Image
          src={`${image}?auto=format&fit=crop&w=800&q=80`}
          alt={title}
          fill
          className="demo-card-img object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Tier badge — top right */}
        <span className="demo-card-tier">
          {segmentLabel[segment] ?? segment}
        </span>

        {/* Content — bottom */}
        <div className="demo-card-content">
          {tag && <span className="demo-card-tag">{tag}</span>}
          <p className="demo-card-title">{title}</p>
          <span className="demo-card-cta">
            View Design
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </a>
    </>
  );
}