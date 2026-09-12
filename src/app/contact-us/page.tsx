"use client";

import { FadeUp, PageTransition, Reveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { Clock, Mail, MapPin, Phone, Send, ShieldCheck } from "lucide-react";
import React, { useState } from "react";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("fullName");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const service = formData.get("serviceType");
    const message = formData.get("message");

    const whatsappMessage = `
*New Royal Travels Inquiry*

*Name:* ${name}
*Phone:* ${phone}
*Email:* ${email || "Not provided"}
*Service:* ${service}

*Message:*
${message}
  `.trim();

    const whatsappNumber = "919807033222";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <>
      <Header />
      <PageTransition>
        <main>
          {/* Subpage Banner */}
          <SubpageHero
            title="Contact Royal Travels"
            subtitle="Ministry of Labour Recognized Agency (Reg: B-162/MUM/PER/1000+/5515/2000). Authorized Saudi Consular Card Holder."
            breadcrumbs={[{ label: "Contact Us" }]}
            bgImage="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=2000&q=85"
          />

          {/* Contact Info Cards & Form */}
          <section className="bg-[#F7F4EE] py-20 lg:py-28 overflow-hidden">
            <Container>
              {/* 4 Info Cards with Stagger */}
              <StaggerContainer stagger={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <StaggerItem distance={20}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 flex flex-col items-start hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group h-full">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#23446F] text-white mb-4 transition-transform duration-300 group-hover:scale-110">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-[#1C1C1C] group-hover:text-[#23446F] transition-colors">
                      Mumbai Headquarters
                    </h4>
                    <p className="mt-1 text-xs text-[#6B7280] leading-relaxed font-sans">
                      Royal Travels House, Fort / Dongri Hub, Mumbai, Maharashtra 400009
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem distance={20}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 flex flex-col items-start hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group h-full">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#23446F] text-white mb-4 transition-transform duration-300 group-hover:scale-110">
                      <Phone className="h-5 w-5" />
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-[#1C1C1C] group-hover:text-[#23446F] transition-colors">
                      Direct Helplines
                    </h4>
                    <p className="mt-1 text-xs text-[#6B7280] leading-relaxed font-sans">
                      +91 22 2371 5000<br />
                      +91 22 2372 6000
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem distance={20}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 flex flex-col items-start hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group h-full">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#23446F] text-white mb-4 transition-transform duration-300 group-hover:scale-110">
                      <Mail className="h-5 w-5" />
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-[#1C1C1C] group-hover:text-[#23446F] transition-colors">
                      Official Email
                    </h4>
                    <p className="mt-1 text-xs text-[#6B7280] leading-relaxed font-sans">
                      mumbai@royaltravels.com<br />
                      info@royaltravels.com
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem distance={20}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 flex flex-col items-start hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group h-full">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#23446F] text-white mb-4 transition-transform duration-300 group-hover:scale-110">
                      <Clock className="h-5 w-5" />
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-[#1C1C1C] group-hover:text-[#23446F] transition-colors">
                      Consular Working Hours
                    </h4>
                    <p className="mt-1 text-xs text-[#6B7280] leading-relaxed font-sans">
                      Mon – Sat: 09:30 AM – 06:30 PM<br />
                      Sunday: Emergency Clearance Desk
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              {/* Form & Map Section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Form (7 cols) */}
                <div className="lg:col-span-7">
                  <Reveal direction="up" distance={30} duration={0.8}>
                    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-stone-200/80">
                      <SectionHeading
                        title={`Send An Official Inquiry`}
                        subtitle="Inquire about Saudi Visa Stamping, Wakkala status, GAMCA Medical slips, Attestation, or Flight ticketing."
                      />

                      {submitted ? (
                        <div className="mt-8 rounded-2xl bg-[#101A2B] text-white p-8 text-center">
                          <h3 className="font-serif text-2xl font-semibold text-[#0F9E5E]">
                            Inquiry Received Successfully!
                          </h3>
                          <p className="mt-2 text-xs sm:text-sm text-stone-300 font-sans">
                            Thank you for contacting Royal Travels. Our visa desk will verify your request and call you back within 24 hours.
                          </p>
                          <Button
                            variant="primary"
                            size="md"
                            className="mt-6 bg-[#0F9E5E] text-white hover:bg-[#0D8A52]"
                            onClick={() => setSubmitted(false)}
                          >
                            Submit Another Inquiry
                          </Button>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                              <label
                                htmlFor="fullName"
                                className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2 font-sans"
                              >
                                Full Name *
                              </label>
                                <input
                                  id="fullName"
                                  name="fullName"
                                  required
                                  type="text"
                                  placeholder="Your full name"
                                  className="w-full rounded-xl bg-stone-50 border border-stone-200 px-4 py-3 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#23446F] font-sans transition-colors"
                                />
                                </div>

                            <div>
                              <label
                                htmlFor="phone"
                                className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2 font-sans"
                              >
                                Phone / WhatsApp Number *
                              </label>
                                  <input
                                    id="phone"
                                    name="phone"
                                    required
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    className="w-full rounded-xl bg-stone-50 border border-stone-200 px-4 py-3 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#23446F] font-sans transition-colors"
                                  />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                              <label
                                htmlFor="email"
                                className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2 font-sans"
                              >
                                Email Address
                              </label>
                                  <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="your.email@example.com"
                                    className="w-full rounded-xl bg-stone-50 border border-stone-200 px-4 py-3 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#23446F] font-sans transition-colors"
                                  />
                            </div>

                            <div>
                              <label
                                htmlFor="serviceType"
                                className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2 font-sans"
                              >
                                Service Category *
                              </label>
                                  <select
                                    id="serviceType"
                                    name="serviceType"
                                    required
                                    className="w-full rounded-xl bg-stone-50 border border-stone-200 px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-[#23446F] font-sans transition-colors"
                                  >
                                <option>Saudi Visa Stamping</option>
                                <option>Saudi Multiple Business Visit</option>
                                <option>Visa Wakkala Verification</option>
                                <option>Kuwait / Dubai Visit Visa</option>
                                <option>Overseas Recruitment / Vacancies</option>
                                <option>Certificate Attestation / MEA</option>
                                <option>Flight Ticketing & Umrah</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="message"
                              className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2 font-sans"
                            >
                              Details / Message *
                            </label>
                                <textarea
                                  id="message"
                                  name="message"                               
                                  rows={4}
                                  placeholder="Mention passport details, visa number, or specific guidance required..."
                                  className="w-full rounded-xl bg-stone-50 border border-stone-200 px-4 py-3 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#23446F] font-sans transition-colors"
                                />
                          </div>

                          <Button type="submit" variant="secondary" size="lg" className="mt-2 gap-2 bg-[#23446F] text-white hover:bg-[#1A3354]">
                            <span>Submit Inquiry</span>
                            <Send className="h-4 w-4" />
                          </Button>
                        </form>
                      )}
                    </div>
                  </Reveal>
                </div>

                {/* Map & Office Information (5 cols) */}
                <div className="lg:col-span-5 h-full flex flex-col gap-6">
                  <Reveal direction="up" distance={30} duration={0.8} delay={0.15}>
                    <div className="bg-[#101A2B] text-white rounded-3xl p-8 border border-white/10 shadow-lg">
                      <div className="flex items-center gap-3 mb-4 text-white">
                        <ShieldCheck className="h-6 w-6" />
                        <span className="text-xs font-semibold uppercase tracking-wider font-sans">
                          Verified Government License
                        </span>
                      </div>
                      <h4 className="font-serif text-xl font-semibold text-white mb-2">
                        Ministry of Labour Govt. Reg:
                      </h4>
                      <p className="text-sm font-sans text-stone-300 font-medium tracking-wide">
                        B-162 / MUM / PER / 1000+ / 5515 / 2000
                      </p>
                      <div className="mt-4 pt-4 border-t border-white/10 text-xs text-stone-400 font-sans space-y-1">
                        <p>• Direct Saudi Consulate Mumbai ID Holder</p>
                        <p>• Direct Saudi Embassy Delhi ID Holder</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal direction="up" distance={30} duration={0.8} delay={0.25}>
                    <div className="relative h-[280px] w-full rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 bg-stone-200">
                      <iframe
                        title="Mumbai Office Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.784534830154!2d72.8340!3d18.9500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce4000000001%3A0x123456789abcdef!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="grayscale contrast-125 opacity-90"
                      />
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
