"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Facebook, FileCheck, FileText, Instagram, Plane, Twitter, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const cardsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.6,
      },
    },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease,
      },
    },
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#101A2B] text-white flex flex-col justify-between">
        {/* Background Image with Cinematic Subtle Entrance */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0.75 } : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.75, scale: 1.0 }}
            transition={{ duration: 1.6, ease }}
            className="relative h-full w-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=2000&q=85"
              alt="Royal Travels International Journey"
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#101A2B] via-[#101A2B]/50 to-[#101A2B]/40" />
        </div>

        {/* Hero Content */}
        {/* <Container className="relative z-10 min-h-[80vh] flex items-center my-auto mx-auto">
          <div className="pt-24 sm:pt-28"> */}
        {/* <Container className="relative z-10 min-h-[80vh] flex items-center justify-start my-auto">
          <div className="w-full pt-24 sm:pt-28 text-left"> */}
        <Container
          clean
          className="relative z-10 min-h-[80vh] w-full flex items-center"
        >
          <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pt-24 sm:pt-28 text-left">
            {/* 1. Badge / Eyebrow (0.0s) */}
            <motion.span
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.0,
                ease,
              }}
              className="inline-block glass-pill text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full text-stone-200 mb-6 font-medium border border-[#0075be]/40"
            >
              Royal Travels Official Services
            </motion.span>

            {/* 2. Main Heading (0.15s) */}
            <motion.h1
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.0,
                delay: 0.15,
                ease,
              }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-white mb-10"
            >
              Your Journey Abroad
              <br />
              Starts With The Right
              <br />
              Support
            </motion.h1>

            {/* 3. Button / Action (0.45s) */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease,
              }}
              className="flex items-center gap-4 flex-wrap mt-6"
            >
              <Link href="/destination">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-black py-[16px] px-[34px] border-white/30 hover:bg-white/10 hover:text-white transition-all duration-300 group"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>

        {/* Social Icons Rail (0.7s) */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4 text-white/70"
        >
          <div className="w-[1px] h-12 bg-white/20" />

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0075be] transition-colors hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="h-4 w-4" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0075be] transition-colors hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter className="h-4 w-4" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0075be] transition-colors hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>

          <div className="w-[1px] h-12 bg-white/20" />
        </motion.div>
      </section>

      {/* ================= 4 SERVICE CARDS (0.6s Stagger) ================= */}
      <section className="relative z-10 bg-[#101A2B] pb-16">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardsContainerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* VISA */}
            <motion.div
              variants={cardItemVariants}
              className="rounded-xl p-5 flex items-center gap-3.5 border border-white/5 hover:border-[#0075be]/50 hover:-translate-y-1 transition-all duration-300 bg-white/[0.02]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFFFFF20] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                <FileCheck className="h-5 w-5" />
              </div>

              <div>
                <h4 className="font-serif text-xs font-semibold uppercase tracking-wider text-white">
                  VISA SERVICES
                </h4>

                <p className="text-[11px] text-stone-300 leading-snug font-sans mt-0.5">
                  Hassle-free visa solutions
                </p>
              </div>
            </motion.div>

            {/* RECRUITMENT */}
            <motion.div
              variants={cardItemVariants}
              className="rounded-xl p-5 flex items-center gap-3.5 border border-white/5 hover:border-[#0075be]/50 hover:-translate-y-1 transition-all duration-300 bg-white/[0.02]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFFFFF20] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                <Users className="h-5 w-5" />
              </div>

              <div>
                <h4 className="font-serif text-xs font-semibold uppercase tracking-wider text-white">
                  OVERSEAS RECRUITMENT
                </h4>

                <p className="text-[11px] text-stone-300 leading-snug font-sans mt-0.5">
                  Connecting talent with opportunities
                </p>
              </div>
            </motion.div>

            {/* AIR TICKETING */}
            <motion.div
              variants={cardItemVariants}
              className="rounded-xl p-5 flex items-center gap-3.5 border border-white/5 hover:border-[#0075be]/50 hover:-translate-y-1 transition-all duration-300 bg-white/[0.02]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFFFFF20] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                <Plane className="h-5 w-5" />
              </div>

              <div>
                <h4 className="font-serif text-xs font-semibold uppercase tracking-wider text-white">
                  AIR TICKETING
                </h4>

                <p className="text-[11px] text-stone-300 leading-snug font-sans mt-0.5">
                  Domestic & international flight services
                </p>
              </div>
            </motion.div>

            {/* DOCUMENTATION */}
            <motion.div
              variants={cardItemVariants}
              className="rounded-xl p-5 flex items-center gap-3.5 border border-white/5 hover:border-[#0075be]/50 hover:-translate-y-1 transition-all duration-300 bg-white/[0.02]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFFFFF20] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                <FileText className="h-5 w-5" />
              </div>

              <div>
                <h4 className="font-serif text-xs font-semibold uppercase tracking-wider text-white">
                  DOCUMENTATION
                </h4>

                <p className="text-[11px] text-stone-300 leading-snug font-sans mt-0.5">
                  Attestation & emigration support
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
