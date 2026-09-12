"use client";

import { FadeUp, PageTransition, StaggerContainer, StaggerItem } from "@/components/animations";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { faqItems } from "@/data/faq";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, PhoneCall } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <Header />
      <PageTransition>
        <main>
          {/* Banner */}
          <SubpageHero
            title="Frequently Asked Questions"
            subtitle="Clear answers on Saudi Visa Stamping, Wakkala, GAMCA Medicals, Attestation, and Overseas Recruitment."
            breadcrumbs={[{ label: "FAQ" }]}
            bgImage="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=2000&q=85"
          />

          {/* FAQ Main Content */}
          <section className="bg-[#F7F4EE] py-20 lg:py-28 overflow-hidden">
            <Container>
              <StaggerContainer stagger={0.08} className="max-w-4xl mx-auto flex flex-col gap-4">
                {faqItems.map((item) => {
                  const isOpen = openId === item.id;
                  return (
                    <StaggerItem key={item.id} distance={20}>
                      <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                        <button
                          type="button"
                          onClick={() => toggleFAQ(item.id)}
                          className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#23446F] rounded-2xl group"
                          aria-expanded={isOpen}
                        >
                          <div className="flex items-center gap-4">
                            <span className="font-serif text-lg font-bold text-[#23446F]">
                              {item.number}
                            </span>
                            <h3 className="font-serif text-lg font-semibold text-[#1C1C1C] group-hover:text-[#23446F] transition-colors">
                              {item.question}
                            </h3>
                          </div>
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-900 transition-all duration-300 ${
                              isOpen ? "rotate-180 bg-[#23446F] text-white" : ""
                            }`}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-[#6B7280] leading-relaxed font-sans border-t border-stone-100 mt-2 pt-4">
                                {item.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </Container>
          </section>

          {/* Need Help Banner (Dark Theme) */}
          <section className="bg-[#101A2B] text-white py-20 border-t border-white/10 overflow-hidden">
            <Container>
              <FadeUp distance={25} duration={0.8}>
                <div className="bg-[#172338] rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto shadow-2xl">
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0F9E5E]/10 text-[#0F9E5E] border border-[#0F9E5E]/20">
                      <PhoneCall className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-white">
                        Need Specific Visa Assistance?
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-stone-400 leading-relaxed font-sans max-w-md">
                        Our visa officers at Mumbai HQ, Delhi, and Kerala are available to review your documents.
                      </p>
                    </div>
                  </div>

                  <Link href="/contact-us">
                    <Button variant="primary" size="lg" className="shrink-0 bg-[#0F9E5E] text-white hover:bg-[#0D8A52] font-bold">
                      Contact Our Visa Desk
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
