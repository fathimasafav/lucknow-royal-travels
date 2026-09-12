"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

interface SubpageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
  bgImage?: string;
}

export function SubpageHero({
  title,
  subtitle,
  breadcrumbs,
  bgImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85",
}: SubpageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#101A2B] text-white">
      {/* Background Image */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0.4 } : { opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.4, scale: 1.0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#101A2B] via-[#101A2B]/60 to-[#101A2B]/80 z-0" />

      {/* Content */}
      <Container className="relative z-10 text-center flex flex-col items-center">
        {/* Breadcrumbs */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <Breadcrumb items={breadcrumbs} variant="glass" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white max-w-3xl leading-[1.15]"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-xs sm:text-sm text-stone-300 max-w-xl leading-relaxed font-sans"
          >
            {subtitle}
          </motion.p>
        )}
      </Container>
    </div>
  );
}
