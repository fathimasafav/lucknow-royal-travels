"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

interface StaggerContainerProps {
  children: React.ReactNode;
  stagger?: number;
  delayChildren?: number;
  className?: string;
  once?: boolean;
  amount?: number | "some" | "all";
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
}

export function StaggerContainer({
  children,
  stagger = 0.1,
  delayChildren = 0.1,
  className = "",
  once = true,
  amount = 0.15,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  distance = 25,
  duration = 0.6,
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
