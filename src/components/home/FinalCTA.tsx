"use client";

import { FadeUp } from "@/components/animations";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-[#101A2B] text-white">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={shouldReduceMotion ? {} : { scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1.0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=2000&q=85"
            alt="Royal Travels International Journey"
            fill
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#101A2B]/95 via-[#101A2B]/75 to-[#101A2B]/85" />
      </div>

      <Container className="relative z-10 text-center flex flex-col items-center">
        <FadeUp distance={25} duration={0.8}>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold leading-[1.15] text-white whitespace-pre-line max-w-3xl">
            Ready To Start{"\n"}Your Journey?
          </h2>
        </FadeUp>

        <FadeUp distance={20} duration={0.8} delay={0.15}>
          <p className="mt-4 text-xs sm:text-sm text-stone-300 max-w-lg leading-relaxed font-sans">
            Let Royal Travels help you with visa processing, recruitment, documentation and travel services.
          </p>
        </FadeUp>

        <FadeUp distance={20} duration={0.8} delay={0.3}>
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Link href="/contact-us">
              <Button variant="primary" size="lg" className="px-[34px] py-[15px] bg-white text-[#0075be] hover:bg-[#0086C2] hover:text-white shadow-2xl">
                <span>CONTACT US</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
