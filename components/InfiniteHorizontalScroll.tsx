"use client"
import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface InfiniteScrollProps {
  children: ReactNode[];
  speed?: number; // pixels per second
  direction?: "left" | "right";
  gap?: number; // gap between items in pixels
}

export default function InfiniteHorizontalScroll({
  children,
  speed = 50,
  direction = "left",
  gap = 16,
}: InfiniteScrollProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const width = contentRef.current.scrollWidth / 2;
      setContainerWidth(width);
    }
  }, [children]);

  const duration = containerWidth / speed;
  const directionMultiplier = direction === "left" ? -1 : 1;

  return (
    <div className="overflow-hidden relative w-full">
      <motion.div
        ref={contentRef}
        className="flex"
        style={{ gap: `${gap}px` }}
        animate={{
          x: [0, directionMultiplier * containerWidth],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
      >
        {/* Render children twice for seamless loop */}
        {children.map((child, index) => (
          <div key={`first-${index}`} className="shrink-0">
            {child}
          </div>
        ))}
        {children.map((child, index) => (
          <div key={`second-${index}`} className="shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
