"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface RecruitmentStep {
  step: string;
  title: string;
  description: string;
  image: string;
}

const recruitmentSteps: RecruitmentStep[] = [
  {
    step: "01",
    title: "Candidate Search",
    description: "Extensive talent sourcing and candidate database matching across India for overseas employers.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85",
  },
  {
    step: "02",
    title: "Shortlisting",
    description: "Rigorous CV screening, verification, and initial interview evaluation by industry experts.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=85",
  },
  {
    step: "03",
    title: "Skill Test",
    description: "Hands-on technical assessment, trade testing (SVP) and practical skill certification.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85",
  },
  {
    step: "04",
    title: "Interview",
    description: "Direct client interviews, video conferencing, and final candidate selection process.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2000&q=85",
  },
  {
    step: "05",
    title: "Medical",
    description: "GAMCA/WAFID online registration and medical fitness examination at GCC-approved centers.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=85",
  },
  {
    step: "06",
    title: "Visa Processing",
    description: "Complete Wakkala authorization, Enjaz submission, and consulate visa stamping.",
    image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=2000&q=85",
  },
  {
    step: "07",
    title: "Travel",
    description: "GDS flight ticketing, baggage allowance assistance, and pre-departure briefing.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=85",
  },
  {
    step: "08",
    title: "Deployment",
    description: "Arrival coordination, employer onboarding, and candidate support in host country.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=85",
  },
];

export function DestinationShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const activeStep = recruitmentSteps[activeIdx];

  const pillsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const pillVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease },
    },
  };

  return (
    <section className="bg-[#101A2B] text-white pt-24 pb-16 overflow-hidden relative">
      <Container>
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-7"
          >
            <span className="text-[10px] uppercase tracking-widest text-white font-bold font-sans block mb-3">
              Recruitment Process Timeline
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] text-stone-100 whitespace-pre-line">
              Building Opportunities.{"\n"}Connecting Talent.
            </h2>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="lg:col-span-5 flex flex-col items-start gap-6"
          >
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              Royal Travels supports employers and candidates throughout the overseas recruitment journey — from candidate selection and skill assessment to medical, visa processing and deployment.
            </p>
            <Link href="/destination#recruitment">
              <Button variant="primary" size="md" className="bg-[#0075be] hover:bg-[#0086C2]">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Ultra-Wide Panoramic Destination Showcase */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease }}
          className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#172338] group"
        >
          {/* Top Visit / Timeline Step Pills Bar with Sequential Entrance */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={pillsContainerVariants}
            className="absolute top-6 left-0 right-0 z-20 flex items-center justify-center gap-2 sm:gap-3 px-4 flex-wrap"
          >
            {recruitmentSteps.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <motion.button
                  key={item.step}
                  variants={pillVariants}
                  onClick={() => setActiveIdx(idx)}
                  className={`text-[10px] sm:text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${isActive
                    ? "bg-[#0075be] text-white border border-white/30 shadow-lg backdrop-blur-md scale-105"
                    : "bg-black/40 backdrop-blur-sm text-white/70 hover:text-white hover:bg-[#0075be] border border-white/10 hover:border-white/25"
                    }`}
                >
                  {item.step} {item.title}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Panoramic Image Container with Smooth Cross-fade */}
          <div className="relative h-[380px] sm:h-[480px] lg:h-[560px] w-full overflow-hidden">
            {recruitmentSteps.map((item, idx) => (
              <div
                key={item.step}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${idx === activeIdx
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 pointer-events-none z-0"
                  }`}
              >
                <Image
                  src={item.image}
                  alt={`Step ${item.step}: ${item.title}`}
                  fill
                  priority={idx === 0}
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101A2B] via-black/40 to-black/50" />
              </div>
            ))}

            {/* Bottom Caption Overlay: Featured Service Saudi Arabia */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div className="max-w-xl">
                <span className="text-[10px] uppercase tracking-widest text-white font-bold font-sans block mb-1">
                  FEATURED SERVICE
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white">
                  Saudi Arabia Visa & Recruitment Services
                </h3>
                <p className="text-xs text-stone-300 font-sans mt-1">
                  Visa processing, recruitment and documentation support for your journey to Saudi Arabia. Step {activeStep.step}: {activeStep.title} — {activeStep.description}
                </p>
              </div>
              <Link href="/destination">
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold hover:text-[#0075be] text-white transition-all bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 hover:bg-white hover:text-[#101A2B] hover:scale-105">
                  <span>Explore Services</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
