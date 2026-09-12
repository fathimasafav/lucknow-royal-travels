"use client";

import { FadeUp, Reveal } from "@/components/animations";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { faqItems } from "@/data/faq";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export function QualityTourSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const col1 = faqItems.slice(0, 4);
  const col2 = faqItems.slice(4, 8);

  return (
    <section className="bg-[#101A2B] text-white pt-24 pb-20 border-t border-white/5 overflow-hidden">
      <Container>
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <FadeUp distance={25} duration={0.8}>
              <span className="text-[10px] uppercase tracking-widest text-white font-bold font-sans block mb-3">
                Frequently Asked Questions & Support
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] text-stone-100 whitespace-pre-line">
                Complete Support{"\n"}For Your Overseas Journey
              </h2>
            </FadeUp>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <FadeUp distance={25} duration={0.8} delay={0.15}>
              <p className="text-xs sm:text-sm text-stone-300 leading-[24px] font-sans">
                From your first enquiry to visa processing, recruitment, documentation and travel, Royal Travels is here to support every important step.
              </p>
            </FadeUp>
            <FadeUp distance={20} duration={0.8} delay={0.25}>
              <Link href="/destination">
                <Button variant="primary" size="md" className="bg-white text-[#0075be] hover:bg-[#0086C2] hover:text-white">
                  <span>Explore Services</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </FadeUp>
          </div>
        </div>

        {/* 2-Column Accordion FAQ Layout (4 items per column) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mb-16">
          {/* Column 1 */}
          <div className="flex flex-col">
            {col1.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="border-b border-white/15 py-4 transition-colors cursor-pointer group"
                  onClick={() => toggleFAQ(item.id)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-base lg:text-[20px] font-bold text-white/90">
                        {item.number}
                      </span>
                      <h3 className="font-sans text-base lg:text-[20px] font-medium text-stone-100 group-hover:text-[#0075be] transition-colors">
                        {item.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-stone-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#0075be]" : ""
                      }`}
                    />
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 ml-8 text-xs text-stone-300 leading-[24px] font-sans pr-4 pb-1">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            {col2.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="border-b border-white/15 py-4 transition-colors cursor-pointer group"
                  onClick={() => toggleFAQ(item.id)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-base lg:text-[20px] font-bold text-white/90">
                        {item.number}
                      </span>
                      <h3 className="font-sans text-base lg:text-[20px] font-medium text-stone-100 group-hover:text-[#0075be] transition-colors">
                        {item.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-stone-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#0075be]" : ""
                      }`}
                    />
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 ml-8 text-xs text-stone-300 leading-[24px] font-sans pr-4 pb-1">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Large Wide Bottom Image with subtle reveal */}
        <Reveal direction="up" distance={35} duration={0.8}>
          <div className="relative h-[320px] sm:h-[440px] w-full rounded-2xl overflow-hidden shadow-2xl bg-stone-900 border border-white/10 group">
            <Image
              src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1600&q=85"
              alt="Royal Travels International Operations & Flight Support"
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-8 sm:p-12">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0075be] block mb-2">
                  25+ Years of Dedicated Service
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white max-w-xl">
                  Connecting India to the Gulf with Unmatched Professionalism & Integrity
                </h3>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
