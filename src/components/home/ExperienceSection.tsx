"use client";

import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Compass, FileText, Plane, ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

export function ExperienceSection() {
  return (
    <section className="bg-[#F7F4EE] py-20 lg:py-28 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & 3 Feature Points */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Reveal direction="up" distance={30} duration={0.8}>
              <SectionHeading
                title="Making Your Journey Simpler"
                subtitle="From visa processing and recruitment to documentation and travel, Royal Travels provides professional assistance throughout your journey."
              />
            </Reveal>

            {/* Feature Points List */}
            <StaggerContainer stagger={0.12} delayChildren={0.2} className="mt-8 flex flex-col gap-6">
              {/* Feature 1 */}
              <StaggerItem distance={20} className="flex items-start gap-4 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0075be] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Compass className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#1C1C1C] lg:text-[24px] lg:leading-[28.8px] transition-colors duration-200 group-hover:text-[#0075be]">
                    Experienced Guidance
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-[#6B7280] lg:text-[16px] lg:font-normal font-sans leading-relaxed lg:leading-[24px]">
                    Professional assistance for visa, recruitment and travel requirements.
                  </p>
                </div>
              </StaggerItem>

              {/* Feature 2 */}
              <StaggerItem distance={20} className="flex items-start gap-4 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0075be] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#1C1C1C] lg:text-[24px] lg:leading-[28.8px] transition-colors duration-200 group-hover:text-[#0075be]">
                    Complete Documentation Support
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-[#6B7280] font-sans leading-relaxed lg:text-[16px] lg:font-normal lg:leading-[24px]">
                    Support with attestation, medical, PCC, passport and emigration requirements.
                  </p>
                </div>
              </StaggerItem>

              {/* Feature 3 */}
              <StaggerItem distance={20} className="flex items-start gap-4 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0075be] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Plane className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#1C1C1C] lg:text-[24px] lg:leading-[28.8px] transition-colors duration-200 group-hover:text-[#0075be]">
                    Reliable Travel Assistance
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-[#6B7280] font-sans leading-relaxed lg:font-normal lg:text-[16px] lg:leading-[24px]">
                    Flight booking and travel support for your international journey.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Right Column: Large Image + Overlaid Floating Media Cards */}
          <div className="lg:col-span-6 relative">
            <Reveal direction="up" distance={30} duration={0.8} delay={0.1}>
              <div className="relative h-[420px] sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=85"
                  alt="Royal Travels International Flight Assistance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </Reveal>

            {/* Overlaid Floating Card 1 (Bottom Left) */}
            <Reveal direction="up" distance={20} duration={0.6} delay={0.3}>
              <div className="absolute -bottom-6 left-4 sm:-left-6 bg-white rounded-xl p-4 shadow-xl border border-stone-100 max-w-[230px] z-10 flex items-center gap-3 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0075be]/15 text-[#0075be]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#0075be]">
                    Government Licensed
                  </span>
                  <span className="text-xs font-semibold text-[#1C1C1C] block font-sans">
                    Ministry of Labour Authorized
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Overlaid Floating Card 2 (Top Right) */}
            <Reveal direction="down" distance={20} duration={0.6} delay={0.4}>
              <div className="absolute -top-6 right-4 sm:-right-6 bg-[#101A2B] text-white rounded-xl p-4 shadow-2xl border border-white/10 max-w-[210px] z-10 hidden sm:flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0075be] text-white">
                  <span className="font-bold text-xs">24+</span>
                </div>
                <div>
                  <span className="block text-[9px] font-medium uppercase tracking-wider text-stone-300">
                    Trusted Experience
                  </span>
                  <span className="text-xs font-semibold text-white block font-sans">
                    Years of Excellence
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
