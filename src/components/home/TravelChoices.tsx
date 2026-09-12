"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import React, { useState } from "react";

export function TravelChoices() {
  const [activeFilter, setActiveFilter] = useState("ALL SERVICES");

  const filters = ["ALL SERVICES", "VISA", "RECRUITMENT", "DOCUMENTATION", "TRAVEL"];

  const filteredServices = services.filter((service) => {
    if (activeFilter === "ALL SERVICES") return true;
    if (activeFilter === "VISA") return service.category === "visa";
    if (activeFilter === "RECRUITMENT") return service.category === "recruitment";
    if (activeFilter === "DOCUMENTATION") return service.category === "attestation";
    if (activeFilter === "TRAVEL") return service.category === "ticketing" || service.category === "tour";
    return true;
  });

  return (
    <section className="bg-[#F7F4EE] py-20 lg:py-28 border-t border-stone-200/60 overflow-hidden">
      <Container>
        {/* Centered Heading */}
        <FadeUp distance={25} duration={0.8}>
          <SectionHeading
            title="Explore Our Most Requested Services"
            subtitle="Discover our visa, recruitment, documentation and travel services designed to make your international journey simpler."
            centered
          />
        </FadeUp>

        {/* Filter Pills */}
        <FadeUp distance={20} duration={0.8} delay={0.15}>
          <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-[10px] sm:text-xs font-medium uppercase tracking-widest px-5 py-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 ${
                  activeFilter === filter
                    ? "bg-[#0075be] text-white shadow-md scale-105"
                    : "bg-stone-200/70 text-stone-700 hover:bg-stone-300/70"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Service Cards Grid (4 cols on lg, 2 cols on md/sm, 1 col on xs) */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <StaggerContainer
            stagger={0.08}
            delayChildren={0.1}
            amount={0.1}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredServices.slice(0, 8).map((service) => (
              <StaggerItem key={service.id} distance={25} duration={0.5} className="min-h-[240px]">
                <ServiceCard
                  service={service}
                  variant="compact"
                  className="h-full w-full"
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </motion.div>
      </Container>
    </section>
  );
}
