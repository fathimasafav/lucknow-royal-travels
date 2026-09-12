"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { Container } from "@/components/ui/Container";
import { Award, Building2, CheckCircle2, ShieldCheck, Users } from "lucide-react";
import React from "react";

const strengths = [
  {
    id: "strength-1",
    title: "Experienced Recruitment Team",
    description: "Professional support for overseas recruitment and employment processes.",
    icon: Users,
    tag: "Expert Team",
  },
  {
    id: "strength-2",
    title: "Government Recognized Agency",
    description: "Recognized by the Ministry of Labour, Government of India (Reg No: B-162/MUM/PER/1000+/5515/2000).",
    icon: ShieldCheck,
    tag: "Govt License",
  },
  {
    id: "strength-3",
    title: "Saudi Consular Credentials",
    description: "Authorized ID holder associated with the Royal Saudi Consulate in Mumbai and Embassy in New Delhi.",
    icon: Award,
    tag: "Consulate Direct",
  },
  {
    id: "strength-4",
    title: "Extensive Branch Network",
    description: "Serving customers across India and the Middle East with local office support.",
    icon: Building2,
    tag: "Global Presence",
  },
  {
    id: "strength-5",
    title: "End-to-End Support",
    description: "Complete support across visa processing, documentation, medical, ticketing and emigration.",
    icon: CheckCircle2,
    tag: "Full Solutions",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#101A2B] text-white pt-16 pb-24 border-t border-white/5 overflow-hidden">
      <Container>
        {/* Section Heading */}
        <FadeUp distance={25} duration={0.8} className="mb-12 text-center max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-widest text-[#0075be] font-bold font-sans block mb-2">
            Why Choose Royal Travels
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white whitespace-pre-line">
            Your Trusted Partner For{"\n"}International Services
          </h2>
        </FadeUp>

        {/* 5 Strengths Grid with Stagger */}
        <StaggerContainer
          stagger={0.1}
          amount={0.15}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {strengths.map((item) => {
            const IconComponent = item.icon;
            return (
              <StaggerItem key={item.id} distance={30} duration={0.6}>
                <div className="dark-card rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#0075be]/50 hover:-translate-y-1.5 hover:shadow-xl group h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0075be]/15 text-[#0075be] group-hover:bg-[#0075be] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#0075be] bg-[#0075be]/10 px-2.5 py-0.5 rounded-full border border-[#0075be]/20">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-base font-semibold text-white mb-2 leading-snug group-hover:text-[#0075be] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-300 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
