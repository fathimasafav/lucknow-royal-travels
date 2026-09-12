import { Counter, FadeUp, PageTransition, Reveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { services } from "@/data/services";
import { Award, Building2, CheckCircle2, FileCheck, Globe, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About Us — Royal Travels | Visa Services & Overseas Recruitment",
  description: "Learn about Royal Travels, premier government-recognized recruitment agency (Reg. No: B-162/MUM/PER/1000+/5515/2000) and authorized Saudi visa processing specialist with 30+ branches.",
};

const stats = [
  { label: "Years Experience", value: "25+" },
  { label: "Branches in India & Gulf", value: "30+" },
  { label: "Visas Processed", value: "100K+" },
  { label: "Overseas Placements", value: "50K+" },
];

const credentials = [
  {
    title: "Ministry of Labour License",
    description: "Officially recognized by the Government of India, Ministry of Labour (Reg. No: B-162 / MUM / PER / 1000+ / 5515 / 2000).",
    icon: ShieldCheck,
  },
  {
    title: "Saudi Embassy & Consulate Authorization",
    description: "Direct official ID card holder from The Royal Consulate of Saudi Arabia (Mumbai) and The Royal Embassy of Saudi Arabia (New Delhi).",
    icon: Award,
  },
  {
    title: "30+ Branch Network",
    description: "Extensive physical presence across India and Middle East offices ensuring localized service for candidates and clients.",
    icon: Building2,
  },
  {
    title: "Comprehensive Travel & Recruitment",
    description: "One-stop destination for Visa Stamping, Wakkala, GAMCA, Attestation, Emigration clearance, and International Ticketing.",
    icon: Globe,
  },
];

export default function AboutUsPage() {
  const featuredServices = services.filter((s) => s.featured).slice(0, 3);

  return (
    <>
      <Header />
      <PageTransition>
        <main>
          {/* Banner Hero */}
          <SubpageHero
            title="25+ Years of Trust in Travel & Overseas Recruitment"
            subtitle="Government of India Ministry of Labour Licensee & Authorized Saudi Consular Card Holder powering visa processing and overseas placement."
            breadcrumbs={[{ label: "About Us" }]}
            bgImage="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=2000&q=85"
          />

          {/* Story Section */}
          <section className="bg-[#F7F4EE] py-20 lg:py-28 overflow-hidden">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Image Collage (6 cols) */}
                <div className="lg:col-span-6 relative">
                  <Reveal direction="up" distance={30} duration={0.8}>
                    <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-xl border border-stone-200 group">
                      <Image
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80"
                        alt="Royal Travels Headquarters & Operations"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </Reveal>

                  <Reveal direction="up" distance={20} duration={0.6} delay={0.25}>
                    <div className="absolute -bottom-8 -right-4 sm:right-6 bg-[#101A2B] text-white p-6 rounded-2xl shadow-2xl max-w-xs hidden sm:block border border-white/10 transition-transform duration-300 hover:scale-105">
                      <p className="font-serif text-base font-semibold text-[#73A6C0] leading-snug">
                        "Connecting talent with opportunity & simplifying overseas travel."
                      </p>
                      <span className="block mt-2 text-xs text-stone-400 font-sans uppercase tracking-wider">
                        — Royal Travels Promise
                      </span>
                    </div>
                  </Reveal>
                </div>

                {/* Text Content (6 cols) */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <FadeUp distance={25} duration={0.8}>
                    <SectionHeading
                      badge="Our Profile"
                      title={`India's Trusted Name In\nVisa & Recruitment`}
                      subtitle="Royal Travels is one of India's premier travel and manpower recruitment agencies, serving thousands of candidates and Gulf employers with integrity and expertise."
                    />
                  </FadeUp>

                  <FadeUp distance={20} duration={0.8} delay={0.15}>
                    <div className="mt-4 space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                      <p>
                        Recognized by the Government of India, Ministry of Labour (Reg. No: B-162 / MUM / PER / 1000+ / 5515 / 2000), Royal Travels holds direct ID authorizations from The Royal Consulate of Saudi Arabia in Mumbai and The Royal Embassy of Saudi Arabia in New Delhi.
                      </p>
                      <p>
                        With over 30 branches across India and the Middle East, we manage the complete lifecycle of overseas employment and travel: from manpower recruitment, trade testing, and GAMCA medical appointments to visa stamping, certificate attestation, emigration clearance, and international flight ticketing.
                      </p>
                    </div>
                  </FadeUp>

                  <FadeUp distance={20} duration={0.8} delay={0.3}>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Link href="/destination">
                        <Button variant="secondary" size="md">
                          Explore Our Services
                        </Button>
                      </Link>
                      <Link href="/contact-us">
                        <Button variant="outline" size="md" className="border-[#23446F] text-[#23446F] hover:bg-[#23446F] hover:text-white">
                          Contact Our Team
                        </Button>
                      </Link>
                    </div>
                  </FadeUp>
                </div>
              </div>
            </Container>
          </section>

          {/* Key Credentials / Stats Section (Dark Theme with Animated Counters) */}
          <section className="bg-[#101A2B] text-white py-16 border-y border-white/10 overflow-hidden">
            <Container>
              <StaggerContainer stagger={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, idx) => (
                  <StaggerItem key={idx} distance={20} className="flex flex-col items-center">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-white mb-2">
                      <Counter value={stat.value} duration={1.2} />
                    </span>
                    <span className="text-xs uppercase tracking-widest text-stone-400 font-sans max-w-[160px]">
                      {stat.label}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </Container>
          </section>

          {/* Core Pillars & Authorizations */}
          <section className="bg-[#F7F4EE] py-20 lg:py-28 overflow-hidden">
            <Container>
              <FadeUp distance={25} duration={0.8}>
                <SectionHeading
                  badge="Official Authorization & Strengths"
                  title={`Why Candidates & Overseas\nEmployers Choose Us`}
                  centered
                />
              </FadeUp>

              <StaggerContainer stagger={0.1} delayChildren={0.15} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {credentials.map((cred, idx) => {
                  const Icon = cred.icon;
                  return (
                    <StaggerItem key={idx} distance={25}>
                      <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200/80 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group h-full">
                        <div>
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#23446F] text-white mb-6 transition-transform duration-300 group-hover:scale-110">
                            <Icon className="h-6 w-6" />
                          </div>
                          <h3 className="font-serif text-xl font-semibold text-[#1C1C1C] mb-3 group-hover:text-[#23446F] transition-colors">
                            {cred.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-sans">
                            {cred.description}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </Container>
          </section>

          {/* Featured Core Services Preview */}
          <section className="bg-[#101A2B] text-white py-20 lg:py-28 border-t border-white/10 overflow-hidden">
            <Container>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <FadeUp distance={20} duration={0.8}>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#73A6C0] font-sans block mb-2">
                    Key Service Capabilities
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
                    Our Verified Service Capabilities
                  </h2>
                </FadeUp>
                <FadeUp distance={15} duration={0.8} delay={0.15}>
                  <Link href="/destination" className="mt-4 md:mt-0 block">
                    <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white hover:text-[#101A2B]">
                      View All Services
                    </Button>
                  </Link>
                </FadeUp>
              </div>

              <StaggerContainer stagger={0.12} delayChildren={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredServices.map((service) => (
                  <StaggerItem key={service.id} distance={30}>
                    <ServiceCard service={service} variant="featured" />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </Container>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
