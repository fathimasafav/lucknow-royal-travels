"use client";

import { useInView, useReducedMotion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: string; // e.g. "25+", "30+", "100K+", "50K+"
  duration?: number;
  className?: string;
}

export function Counter({ value, duration = 1.2, className = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  // Parse numeric portion and non-numeric suffix
  const match = value.match(/^(\d+)(.*)$/);
  const targetNumber = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const [displayNumber, setDisplayNumber] = useState<number>(0);

  useEffect(() => {
    if (!isInView || targetNumber === null || shouldReduceMotion) {
      if (targetNumber !== null && shouldReduceMotion) {
        setDisplayNumber(targetNumber);
      }
      return;
    }

    let start = 0;
    const end = targetNumber;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // Ease out cubic
      const progress = frame / totalFrames;
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * easeProgress);

      setDisplayNumber(current);

      if (frame >= totalFrames) {
        setDisplayNumber(end);
        clearInterval(timer);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, targetNumber, duration, shouldReduceMotion]);

  if (targetNumber === null || shouldReduceMotion) {
    return <span ref={ref} className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {isInView ? `${displayNumber}${suffix}` : `0${suffix}`}
    </span>
  );
}
