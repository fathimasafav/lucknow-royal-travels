"use client";

import { FadeUp, Reveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function NewLifeSection() {
  return (
    <section className="bg-[#F7F4EE] py-20 lg:py-28 overflow-hidden">
      <Container>
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-6">
            <FadeUp distance={25} duration={0.8}>
              <SectionHeading
                title={`Begin Your New Career\nWith The Right Opportunity`}
              />
            </FadeUp>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start lg:items-end gap-6">
            <FadeUp distance={25} duration={0.8} delay={0.15}>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-sans max-w-lg">
                Explore overseas employment opportunities and get professional assistance throughout the recruitment and visa process.
              </p>
            </FadeUp>
            <FadeUp distance={20} duration={0.8} delay={0.25}>
              <div className="flex items-center gap-3 flex-wrap">
                <Link href="/contact-us">
                  <Button variant="primary" size="md" className="bg-[#1A75BB] hover:bg-[#0086C2]">
                    View Opportunities
                  </Button>
                </Link>
                <Link href="/destination#recruitment">
                  <Button variant="outline" size="md" className="border-[#0B2A4A] text-[#0B2A4A] hover:bg-[#0B2A4A] hover:text-white">
                    Recruitment Services
                  </Button>
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Asymmetric Media Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Large Card (6 cols) */}
          <div className="lg:col-span-6">
            <Reveal direction="up" distance={30} duration={0.8}>
              <div className="relative h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                  alt="International Recruitment & Opportunity"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A75BB] block mb-1">
                    Overseas Manpower Placement
                  </span>
                  <h3 className="font-serif text-2xl font-semibold">
                    Licensed Overseas Employment Services
                  </h3>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Media Group (6 cols) */}
          <div className="lg:col-span-6">
            <StaggerContainer stagger={0.12} delayChildren={0.15} className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {/* Top Wide Card across right group */}
              <StaggerItem className="sm:col-span-2">
                <div className="relative h-[240px] rounded-2xl overflow-hidden shadow-md group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85"
                    alt="Professional Candidate Interview"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-serif text-lg font-semibold">
                      Technical Trade Assessment & Candidate Screening
                    </h4>
                  </div>
                </div>
              </StaggerItem>

              {/* Bottom-left image card */}
              <StaggerItem>
                <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-md group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=600&q=85"
                    alt="Airport Departure Lounge"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A75BB]">
                      Flight & Departure
                    </span>
                  </div>
                </div>
              </StaggerItem>

              {/* Bottom-right dark text card */}
              <StaggerItem>
                <div className="h-[250px] rounded-2xl bg-[#101A2B] text-white p-6 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-[#1A75BB]/40 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A75BB] text-white transition-transform duration-300 group-hover:scale-110">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold leading-tight text-white group-hover:text-[#1A75BB] transition-colors">
                      Professional Overseas Placements
                    </h4>
                    <p className="mt-2 text-xs text-stone-300 leading-relaxed font-sans">
                      Connecting skilled personnel with authorized employers in Saudi Arabia and the Gulf region.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  );
}
