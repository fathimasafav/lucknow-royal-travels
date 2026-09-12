import { FadeUp, PageTransition, StaggerContainer, StaggerItem } from "@/components/animations";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { Award, Building, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Branch Network — Royal Travels | Mumbai HQ, Delhi & Kerala",
  description: "Explore Royal Travels' 30+ branch network across India and the Middle East for visa processing, attestation, and manpower recruitment.",
};

const branches = [
  {
    name: "Mumbai Headquarters (Main Visa & Recruitment Center)",
    address: "Royal Travels House, Fort / Dongri Commercial Hub, Mumbai, Maharashtra 400009",
    phone: "+91 22 2371 5000 / +91 22 2372 6000",
    email: "mumbai@royaltravels.com",
    tag: "Head Office — Saudi Embassy ID Holder",
    isHQ: true,
  },
  {
    name: "New Delhi Branch Office",
    address: "Connaught Place / Zakir Nagar Commercial Complex, New Delhi 110025",
    phone: "+91 11 2684 3000",
    email: "delhi@royaltravels.com",
    tag: "Saudi Embassy Delhi Submission Center",
  },
  {
    name: "Kerala / Kottakkal Regional Branch",
    address: "Main Road, Near Bus Stand, Kottakkal, Malappuram, Kerala 676503",
    phone: "+91 483 274 4000",
    email: "kerala@royaltravels.com",
    tag: "South India Overseas Recruitment Division",
  },
  {
    name: "Saudi Arabia Representative Office",
    address: "King Abdulaziz Road, Al Malaz, Riyadh, Kingdom of Saudi Arabia",
    phone: "+966 11 478 9000",
    email: "ksa@royaltravels.com",
    tag: "GCC Client Relations & Employer Liaison",
  },
];

export default function BranchPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main>
          {/* Subpage Banner */}
          <SubpageHero
            title="30+ Branches Across India & GCC"
            subtitle="Direct local access to Royal Travels' visa submission desks, attestation officers, and recruitment specialists."
            breadcrumbs={[{ label: "Branches" }]}
            bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
          />

          {/* Branch Cards Section */}
          <section className="bg-[#F7F4EE] py-20 lg:py-28 overflow-hidden">
            <Container>
              <FadeUp distance={25} duration={0.8}>
                <SectionHeading
                  badge="Global Footprint"
                  title={`Find Your Nearest Royal Travels\nBranch Office`}
                  subtitle="Visit our nearest branch or contact our regional head for immediate document submission and recruitment consultation."
                  centered
                />
              </FadeUp>

              <StaggerContainer stagger={0.12} delayChildren={0.15} className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                {branches.map((branch, idx) => (
                  <StaggerItem key={idx} distance={30}>
                    <div
                      className={`bg-white rounded-2xl p-8 shadow-sm border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between h-full group ${
                        branch.isHQ ? "border-black ring-1 ring-[#0F9E5E]/30" : "border-stone-200/80"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className="inline-block rounded-full bg-[#23446F] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white font-sans">
                            {branch.tag}
                          </span>
                          {branch.isHQ && (
                            <span className="text-[10px] font-bold uppercase tracking-wider text-white font-sans bg-[#23446F] px-2.5 py-0.5 rounded-full">
                              HQ
                            </span>
                          )}
                        </div>

                        <h3 className="font-serif text-2xl font-semibold text-[#1C1C1C] mb-4 group-hover:text-[#23446F] transition-colors">
                          {branch.name}
                        </h3>

                        <div className="space-y-3 text-xs sm:text-sm text-[#6B7280] font-sans">
                          <div className="flex items-start gap-3">
                            <MapPin className="h-4 w-4 text-[#23446F] shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" />
                            <span>{branch.address}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="h-4 w-4 text-[#23446F] shrink-0 transition-transform duration-300 group-hover:scale-110" />
                            <span>{branch.phone}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="h-4 w-4 text-[#23446F] shrink-0 transition-transform duration-300 group-hover:scale-110" />
                            <span>{branch.email}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
                        <Link href="/contact-us">
                          <Button variant="outline" size="sm" className="border-[#23446F] text-[#23446F] hover:bg-[#23446F] hover:text-white">
                            Book Appointment
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </Container>
          </section>

          {/* Authorization Banner */}
          <section className="bg-[#101A2B] text-white py-16 border-t border-white/10 overflow-hidden">
            <Container className="text-center">
              <FadeUp distance={20} duration={0.8}>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-2">
                  Govt. Reg No: B-162 / MUM / PER / 1000+ / 5515 / 2000
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 font-sans max-w-2xl mx-auto">
                  All regional branches are directly synchronized with our Mumbai Headquarters & Ministry of External Affairs portal for fast, secure document tracking.
                </p>
              </FadeUp>
            </Container>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
