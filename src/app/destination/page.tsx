"use client";

import { FadeUp, PageTransition, StaggerContainer, StaggerItem } from "@/components/animations";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { serviceCategories, services } from "@/data/services";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ServicesListingPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    // Check URL hash on load for deep linking from Header dropdowns
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && serviceCategories.some((c) => c.id === hash)) {
        setSelectedCategory(hash);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <>
      <Header />
      <PageTransition>
        <main>
          {/* Subpage Hero Banner */}
          <SubpageHero
            title="Our Services — Visa, Recruitment & Travel"
            subtitle="Ministry of Labour Recognized Agency & Authorized Saudi Consular ID Holder providing complete visa stamping, manpower, attestation, and flight ticketing solutions."
            breadcrumbs={[{ label: "Services" }]}
            bgImage="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=2000&q=85"
          />

          {/* Services Directory */}
          <section className="bg-[#F7F4EE] py-20 lg:py-28 overflow-hidden">
            <Container>
              {/* Category Filter Pills */}
              <FadeUp distance={20} duration={0.8}>
                <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-14">
                  {serviceCategories.map((cat) => (
                    <button
                      key={cat.id}
                      id={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        window.history.pushState(null, "", `#${cat.id}`);
                      }}
                      className={`text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
                        selectedCategory === cat.id
                          ? "bg-[#23446F] text-white shadow-md scale-105"
                          : "bg-stone-200/80 text-stone-700 hover:bg-stone-300/80"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </FadeUp>

              {/* Grid of Service Cards with Stagger */}
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <StaggerContainer
                  stagger={0.08}
                  delayChildren={0.1}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredServices.map((service) => (
                    <StaggerItem key={service.id} distance={25}>
                      <ServiceCard service={service} variant="grid" />
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </motion.div>
            </Container>
          </section>

          {/* Support CTA Banner */}
          <section className="bg-[#101A2B] text-white py-20 border-t border-white/10 overflow-hidden">
            <Container className="text-center flex flex-col items-center">
              <FadeUp distance={25} duration={0.8}>
                <SectionHeading
                  title={`Need Urgent Visa Stamping Or\nManpower Recruitment?`}
                  subtitle="Our team of visa specialists and recruitment experts in Mumbai, Delhi, and Kerala are ready to assist you immediately."
                  dark
                  centered
                />
              </FadeUp>
              <FadeUp distance={20} duration={0.8} delay={0.2}>
                <div className="mt-8 flex flex-wrap items-center gap-4 justify-center">
                  <Link href="/contact-us">
                    <Button variant="primary" size="lg" className="bg-[#0F9E5E] text-white hover:bg-[#0D8A52]">
                      Submit An Inquiry
                    </Button>
                  </Link>
                  <Link href="/branch">
                    <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                      Locate Nearest Branch
                    </Button>
                  </Link>
                </div>
              </FadeUp>
            </Container>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
