"use client";

import { StaggerContainer, StaggerItem } from "@/components/animations";
import { Container } from "@/components/ui/Container";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="bg-[#101A2B] text-stone-300 pt-20 pb-10 border-t border-white/5 overflow-hidden">
      <Container>
        {/* Top Grid - Footer Columns */}
        <StaggerContainer
          stagger={0.1}
          amount={0.15}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10"
        >
          {/* Brand Col (3 cols) */}
          <StaggerItem className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                ROYAL TRAVELS
              </span>
              <p className="mt-1 text-xs font-sans text-[#0075be] font-semibold uppercase tracking-wider">
                Overseas Recruitment & Travel Agency
              </p>
              <p className="mt-3 text-xs text-stone-400 leading-relaxed font-sans">
                Approved by Ministry of Labour, Govt. of India (Reg No: B-162/MUM/PER/1000+/5515/2000). Authorized ID holder associated with the Saudi Consulate in Mumbai and Embassy in New Delhi.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-stone-300 transition-all duration-300 hover:bg-[#0075be] hover:text-white hover:scale-110 hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-stone-300 transition-all duration-300 hover:bg-[#0075be] hover:text-white hover:scale-110 hover:-translate-y-0.5"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-stone-300 transition-all duration-300 hover:bg-[#0075be] hover:text-white hover:scale-110 hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-stone-300 transition-all duration-300 hover:bg-[#0075be] hover:text-white hover:scale-110 hover:-translate-y-0.5"
                aria-label="Youtube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </StaggerItem>

          {/* Col 2: ABOUT (2 cols) */}
          <StaggerItem className="lg:col-span-2">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">
              ABOUT
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-stone-400">
              <li>
                <Link href="/about-us" className="hover:text-[#0075be] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/destination" className="hover:text-[#0075be] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/branch" className="hover:text-[#0075be] transition-colors">
                  Branch Network
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#0075be] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </StaggerItem>

          {/* Col 3: SERVICES (2 cols) */}
          <StaggerItem className="lg:col-span-2">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">
              SERVICES
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-stone-400">
              <li>
                <Link href="/destination#visa" className="hover:text-[#0075be] transition-colors">
                  Visa Services
                </Link>
              </li>
              <li>
                <Link href="/destination#recruitment" className="hover:text-[#0075be] transition-colors">
                  Recruitment
                </Link>
              </li>
              <li>
                <Link href="/destination#attestation" className="hover:text-[#0075be] transition-colors">
                  Attestation & Emigration
                </Link>
              </li>
              <li>
                <Link href="/destination#ticketing" className="hover:text-[#0075be] transition-colors">
                  Flight Ticketing
                </Link>
              </li>
              <li>
                <Link href="/destination#tour" className="hover:text-[#0075be] transition-colors">
                  Tour Packages
                </Link>
              </li>
            </ul>
          </StaggerItem>

          {/* Col 4: IMPORTANT LINKS (2 cols) */}
          <StaggerItem className="lg:col-span-2">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">
              IMPORTANT LINKS
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-stone-400">
              <li>
                <Link href="/faq" className="hover:text-[#0075be] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/destination#recruitment" className="hover:text-[#0075be] transition-colors">
                  Overseas Vacancies
                </Link>
              </li>
              <li>
                <Link href="/destination#visa" className="hover:text-[#0075be] transition-colors">
                  Track Your Visa
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#0075be] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#0075be] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </StaggerItem>

          {/* Col 5: STAY INFORMED (3 cols) */}
          <StaggerItem className="lg:col-span-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">
              STAY INFORMED
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed mb-4 font-sans">
              Stay informed with the latest visa, recruitment and travel updates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full rounded-full bg-white/5 border border-white/15 px-4 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#0075be] font-sans"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#0075be] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#0086C2] hover:scale-105 active:scale-95"
              >
                SUBSCRIBE
              </button>
            </form>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4 font-sans">
          <p>Royal Travels — Overseas Recruitment & Travel Agency</p>
          <p>Copyright © 2026 Royal Travels. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
