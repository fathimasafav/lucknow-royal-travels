"use client";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const coreServices = [
  {
    num: "01",
    title: "VISA SERVICES",
    description: "Visa processing and stamping support",
    image:
      "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=1200&q=85",
    link: "/destination#visa",
  },
  {
    num: "02",
    title: "OVERSEAS RECRUITMENT",
    description: "Connecting employers with skilled candidates",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    link: "/destination#recruitment",
  },
  {
    num: "03",
    title: "ATTESTATION & EMIGRATION",
    description: "Documentation, attestation and clearance services",
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85",
    link: "/destination#attestation",
  },
  {
    num: "04",
    title: "AIR TICKETING",
    description: "Domestic and international flight booking services",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=85",
    link: "/destination#ticketing",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function FeaturedDestinations() {
  const visaCard = coreServices[0];
  const recruitmentCard = coreServices[1];
  const attestationCard = coreServices[2];
  const ticketingCard = coreServices[3];

  return (
    <section className="bg-[#F7F4EE] py-20 lg:py-28 overflow-hidden">
      <Container>

        {/* ================= SECTION HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12"
        >
          <SectionHeading
            title="Our Core Services"
            subtitle="Complete solutions for your overseas travel, employment and documentation needs."
          />
        </motion.div>

        {/* ================= SERVICE GRID ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >

          {/* ================= VISA SERVICES ================= */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-5 h-[480px] lg:h-[580px]"
          >
            <Link
              href={visaCard.link}
              className="group relative flex flex-col justify-end overflow-hidden rounded-2xl bg-[#101A2B] text-white cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 h-full w-full block"
            >
              <Image
                src={visaCard.image}
                alt={visaCard.title}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#101A2B]/90 via-black/30 to-transparent" />

              <div className="relative z-10 p-7 flex flex-col justify-between h-full">

                <span className="self-start inline-block font-sans text-xs font-bold text-white px-3.5 py-1 rounded-full uppercase tracking-wider">
                  {/* {visaCard.num} */}
                </span>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                      {visaCard.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                      {visaCard.description}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all duration-300 group-hover:bg-[#0075be] group-hover:text-white text-white">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

              </div>
            </Link>
          </motion.div>


          {/* ================= RIGHT COLUMN ================= */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* ================= TOP TWO CARDS ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-[260px] lg:h-[275px]">

              {/* ================= RECRUITMENT ================= */}
              <motion.div variants={cardVariants} className="h-full">
                <Link
                  href={recruitmentCard.link}
                  className="group relative flex flex-col justify-end overflow-hidden rounded-2xl bg-[#101A2B] text-white cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 h-full w-full block"
                >
                  <Image
                    src={recruitmentCard.image}
                    alt={recruitmentCard.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#101A2B]/90 via-black/30 to-transparent" />

                  <div className="relative z-10 p-5 flex flex-col justify-between h-full">

                    <span className="self-start inline-block font-sans text-xs font-bold text-white px-3 py-0.5 rounded-full uppercase tracking-wider">
                      {/* {recruitmentCard.num} */}
                    </span>

                    <div className="flex items-end justify-between gap-2">
                      <div>
                        <h4 className="font-serif text-lg font-semibold text-white leading-tight">
                          {recruitmentCard.title}
                        </h4>

                        <p className="mt-1 text-[11px] text-stone-300 font-sans line-clamp-2">
                          {recruitmentCard.description}
                        </p>
                      </div>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all duration-300 group-hover:bg-[#0075be] group-hover:text-white text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>


              {/* ================= ATTESTATION ================= */}
              <motion.div variants={cardVariants} className="h-full">
                <Link
                  href={attestationCard.link}
                  className="group relative flex flex-col justify-end overflow-hidden rounded-2xl bg-[#101A2B] text-white cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 h-full w-full block"
                >
                  <Image
                    src={attestationCard.image}
                    alt={attestationCard.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#101A2B]/90 via-black/30 to-transparent" />

                  <div className="relative z-10 p-5 flex flex-col justify-between h-full">

                    <span className="self-start inline-block font-sans text-xs font-bold text-white px-3 py-0.5 rounded-full uppercase tracking-wider">
                      {/* {attestationCard.num} */}
                    </span>

                    <div className="flex items-end justify-between gap-2">
                      <div>
                        <h4 className="font-serif text-lg font-semibold text-white leading-tight">
                          {attestationCard.title}
                        </h4>

                        <p className="mt-1 text-[11px] text-stone-300 font-sans line-clamp-2">
                          {attestationCard.description}
                        </p>
                      </div>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all duration-300 group-hover:bg-[#0075be] group-hover:text-white text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>

            </div>


            {/* ================= AIR TICKETING ================= */}
            <motion.div
              variants={cardVariants}
              className="h-[200px] lg:h-[280px]"
            >
              <Link
                href={ticketingCard.link}
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl bg-[#101A2B] text-white cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 h-full w-full block"
              >
                <Image
                  src={ticketingCard.image}
                  alt={ticketingCard.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#101A2B]/90 via-black/30 to-transparent" />

                <div className="relative z-10 p-6 flex flex-col justify-between h-full">

                  <span className="self-start inline-block font-sans text-xs font-bold text-white px-3.5 py-1 rounded-full uppercase tracking-wider">
                    {/* {ticketingCard.num} */}
                  </span>

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h4 className="font-serif text-xl sm:text-2xl font-semibold text-white">
                        {ticketingCard.title}
                      </h4>

                      <p className="mt-1 text-xs text-stone-300 font-sans">
                        {ticketingCard.description}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all duration-300 group-hover:bg-[#0075be] group-hover:text-white text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>

          </div>
        </motion.div>

      </Container>
    </section>
  );
}