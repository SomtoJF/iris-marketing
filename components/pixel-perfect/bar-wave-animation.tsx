"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const TOTAL = 15;
const PAPER_FILLS = ["#fffdf8", "#f8f1e6", "#f1e8dc", "#eee7f8"];
const PAPER_STROKES = ["#242029", "#4c3b58", "#242029", "#6d4a91"];

const BarWaveAnimation = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <svg
      className="m-10 h-full w-full cursor-pointer"
      viewBox="0 0 350 130"
      overflow="visible"
      role="img"
      aria-label="A stack of application documents"
    >
      <defs>
        <filter
          id="paper-shadow"
          x="-20%"
          y="-20%"
          width="150%"
          height="160%"
        >
          <feDropShadow
            dx="1.5"
            dy="2.5"
            stdDeviation="1.5"
            floodColor="#242029"
            floodOpacity="0.18"
          />
        </filter>
      </defs>
      <g transform="rotate(180, 175, 65)">
        {Array.from({ length: TOTAL }).map((_, i) => {
          const baseHeight = 41.5199;
          const distance = hovered === null ? Infinity : Math.abs(hovered - i);
          const influence = Math.max(0, 1 - distance * 0.25);
          const height = baseHeight + influence * 150;
          const opacity = hovered === null ? 1 : 0.2 + influence * 0.8;

          return (
            <motion.rect
              key={i}
              animate={{ height, opacity }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              x={0.4 + i * 15}
              y={0.75 + i * -15}
              width="183.071"
              height={baseHeight}
              rx="6.5"
              transform="matrix(0.866025 0.5 0 1 0.0580127 -2.88838)"
              fill={PAPER_FILLS[i % PAPER_FILLS.length]}
              stroke={PAPER_STROKES[i % PAPER_STROKES.length]}
              strokeWidth="1.5"
              filter="url(#paper-shadow)"
            />
          );
        })}
      </g>
    </svg>
  );
};

export default BarWaveAnimation;
