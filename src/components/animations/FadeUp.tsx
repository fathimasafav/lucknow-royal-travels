"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  distance = 25,
  className = "",
  once = true,
}: FadeUpProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
