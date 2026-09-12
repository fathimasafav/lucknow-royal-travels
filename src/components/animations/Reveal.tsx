"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "none";
export type RevealEffect = "fade" | "scale";

interface RevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  effect?: RevealEffect;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  amount?: number | "some" | "all";
}

export function Reveal({
  children,
  direction = "up",
  effect = "fade",
  delay = 0,
  duration = 0.7,
  distance = 30,
  className = "",
  once = true,
  amount = 0.15,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialPos = getInitialPosition();

  const variants = {
    hidden: {
      opacity: 0,
      x: initialPos.x,
      y: initialPos.y,
      scale: effect === "scale" ? 0.96 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
