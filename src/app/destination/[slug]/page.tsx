import { FadeUp, PageTransition, Reveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ServiceInquiryForm } from "@/components/ui/ServiceInquiryForm";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { allDestinations } from "@/data/destinations";
import { services } from "@/data/services";
import {
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  FileCheck,
  FileText,
  HelpCircle,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const serviceParams = services.map((s) => ({ slug: s.slug }));
  const destParams = allDestinations.map((d) => ({ slug: d.slug }));
  return [...serviceParams, ...destParams];
}

export function generateMetadata({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);
  if (service) {
    return {
      title: `${service.title} — Royal Travels Visa & Recruitment`,
      description: service.shortDescription,
    };
  }

  const destination = allDestinations.find((d) => d.slug === params.slug);
  if (destination) {
    return {
      title: `${destination.name} — Royal Travels`,
      description: destination.description || destination.overview,
    };
  }

  return { title: "Service Not Found — Royal Travels" };
}

export default function DestinationOrServiceDetailPage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);
  const destination = allDestinations.find((d) => d.slug === params.slug);

  if (!service && !destination) {
    notFound();
  }

  // RENDER SERVICE DETAIL PAGE IF SLUG MATCHES SERVICE
  if (service) {
    const relatedServices = services
      .filter((s) => s.slug !== service.slug && s.category === service.category)
      .concat(services.filter((s) => s.slug !== service.slug && s.category !== service.category))
      .slice(0, 3);

    return (
      <>
        <Header />
        <PageTransition>
          <main>
            {/* Subpage Hero Banner */}
            <SubpageHero
              title={service.title}
              subtitle={`${service.categoryLabel} • Official Processing by Royal Travels`}
              breadcrumbs={[
                { label: "Services", href: "/destination" },
                { label: service.title },
              ]}
              bgImage={service.image}
            />

            {/* Main Content */}
            <section className="bg-[#F7F4EE] py-16 lg:py-24 overflow-hidden">
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  {/* Left Column (8 cols) */}
                  <div className="lg:col-span-8">
                    {/* Hero Image */}
                    <Reveal direction="up" distance={25} duration={0.7}>
                      <div className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-xl mb-8 group">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          priority
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-[#101A2B]/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0F9E5E] font-sans">
                          {service.categoryLabel}
                        </div>
                      </div>
                    </Reveal>

                    {/* Quick Credentials Bar */}
                    <FadeUp distance={20} duration={0.6} delay={0.1}>
                      <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-200/80 flex flex-wrap items-center justify-between gap-4 mb-10 text-xs font-sans text-stone-800">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-5 w-5 text-[#23446F] shrink-0" />
                          <span>Govt. Reg: <strong>B-162/MUM/PER/1000+/5515/2000</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-[#23446F] shrink-0" />
                          <span>Saudi Embassy ID: <strong>Authorized Mumbai & Delhi</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileCheck className="h-5 w-5 text-[#23446F] shrink-0" />
                          <span>Turnaround: <strong>Fast-track / Express Option</strong></span>
                        </div>
                      </div>
                    </FadeUp>

                    {/* Overview */}
                    <FadeUp distance={20} duration={0.6} delay={0.15}>
                      <div className="mb-10">
                        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-4">
                          Service Overview & Description
                        </h2>
                        <p className="text-sm text-stone-700 leading-relaxed font-sans mb-4">
                          {service.fullDescription || service.shortDescription}
                        </p>
                        <p className="text-sm text-stone-700 leading-relaxed font-sans">
                          At Royal Travels, our specialized document officers and visa experts handle every stage of your request with strict accuracy, keeping you updated with transparent tracking from initial submission to final delivery.
                        </p>
                      </div>
                    </FadeUp>

                    {/* Key Features & Specifications */}
                    {service.features && service.features.length > 0 && (
                      <FadeUp distance={20} duration={0.6} delay={0.2}>
                        <div className="mb-10 bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm">
                          <h3 className="font-serif text-xl font-semibold text-[#1C1C1C] mb-6 flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-[#0F9E5E]" />
                            Key Features & Service Coverage
                          </h3>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700 font-sans">
                                <CheckCircle2 className="h-4 w-4 text-[#0F9E5E] shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </FadeUp>
                    )}

                    {/* Requirements & Documents Checklist */}
                    {service.requirements && service.requirements.length > 0 && (
                      <FadeUp distance={20} duration={0.6} delay={0.25}>
                        <div className="mb-10 bg-[#101A2B] text-white rounded-2xl p-8 shadow-lg border border-white/10">
                          <h3 className="font-serif text-xl font-semibold text-[#0F9E5E] mb-4 flex items-center gap-2">
                            <FileText className="h-5 w-5 text-[#0F9E5E]" />
                            Required Documents & Eligibility
                          </h3>
                          <p className="text-xs text-stone-300 mb-6 font-sans">
                            Please ensure the following documents are ready prior to submitting your application:
                          </p>
                          <ul className="flex flex-col gap-3 text-xs sm:text-sm text-stone-200 font-sans">
                            {service.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-center gap-3">
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0F9E5E]/20 text-[#0F9E5E] text-[10px] font-bold">
                                  {idx + 1}
                                </span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </FadeUp>
                    )}
                  </div>

                  {/* Right Column (4 cols Sticky Sidebar Inquiry Form) */}
                  <div className="lg:col-span-4 sticky top-28">
                    <Reveal direction="up" distance={20} duration={0.6} delay={0.2}>
                      <ServiceInquiryForm />
                    </Reveal>
                  </div>
                </div>
              </Container>
            </section>

            {/* Related Services */}
            <section className="bg-[#F7F4EE] pb-24 border-t border-stone-200/60 pt-16 overflow-hidden">
              <Container>
                <FadeUp distance={20} duration={0.8}>
                  <SectionHeading
                    title="Related Royal Travels Services"
                    centered
                  />
                </FadeUp>
                <StaggerContainer stagger={0.1} delayChildren={0.15} className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {relatedServices.map((rel) => (
                    <StaggerItem key={rel.id} distance={25}>
                      <ServiceCard service={rel} variant="grid" />
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

  // FALLBACK DESTINATION DETAIL PAGE (IF SLUG MATCHES DESTINATION)
  return (
    <>
      <Header />
      <PageTransition>
        <main>
          <SubpageHero
            title={destination!.name}
            subtitle={`${destination!.location || destination!.country} • Travel Packages by Royal Travels`}
            breadcrumbs={[
              { label: "Services", href: "/destination" },
              { label: destination!.name },
            ]}
            bgImage={destination!.image}
          />

          <section className="bg-[#F7F4EE] py-16 lg:py-24 overflow-hidden">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-8">
                  <Reveal direction="up" distance={25} duration={0.7}>
                    <div className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-lg mb-8 group">
                      <Image
                        src={destination!.image}
                        alt={destination!.name}
                        fill
                        priority
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </Reveal>

                  <FadeUp distance={20} duration={0.6} delay={0.1}>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-stone-200/80 flex flex-wrap items-center justify-between gap-4 mb-10 text-xs font-sans text-stone-700">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#23446F]" />
                        <span>Location: <strong>{destination!.location || destination!.country}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-[#23446F]" />
                        <span>Duration: <strong>{destination!.duration || "3 Days"}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                        <span>Rating: <strong>{destination!.rating || 4.9} ({destination!.reviewsCount || 120} reviews)</strong></span>
                      </div>
                    </div>
                  </FadeUp>

                  <FadeUp distance={20} duration={0.6} delay={0.2}>
                    <div className="mb-10">
                      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-4">
                        Overview
                      </h2>
                      <p className="text-sm text-stone-600 leading-relaxed font-sans mb-4">
                        {destination!.overview || destination!.description}
                      </p>
                    </div>
                  </FadeUp>
                </div>

                <div className="lg:col-span-4 sticky top-28">
                  <Reveal direction="up" distance={20} duration={0.6} delay={0.2}>
                    <div className="bg-white rounded-2xl p-6 shadow-md border border-stone-200">
                      <h3 className="font-serif text-2xl font-semibold text-[#1C1C1C] mb-4">
                        Package Inquiry
                      </h3>
                      <p className="text-xs text-stone-600 mb-6 font-sans">
                        Contact Royal Travels tour desk for flight options, Umrah bookings, and holiday packages.
                      </p>
                      <Link href="/contact-us">
                        <Button variant="primary" className="w-full bg-[#23446F] text-white hover:bg-[#1A3354]">
                          Contact Tour Specialist
                        </Button>
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
            </Container>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
