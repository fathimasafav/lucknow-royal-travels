"use client";

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSubmenu = (menu: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === menu ? null : menu);
  };

  return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-3.5 bg-[#101A2B]/95 backdrop-blur-md shadow-lg border-b border-white/10"
          : "py-6 bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between mx-auto">
        {/* Brand Logo */}


        <Image
          src="/logo/logo-footer.png"
          alt="Royal Travels"
          className="text-emerald-950"
          width={150}
          height={40}
        />

        {/* Central Floating Navigation Pill (Desktop) */}
        <nav className="hidden md:flex items-center gap-1  px-5 py-2 rounded-full border shadow-lg">
          <Link
            href="/"
            className=" flex items-center gap-2
    rounded-full
    px-6 py-3
    text-xs font-medium uppercase tracking-wider
    text-white
   
    transition-all duration-300
    hover:bg-white
    hover:text-black
    focus:outline-none"
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className=" flex items-center gap-2
    rounded-full
    px-6 py-3
    text-xs font-medium uppercase tracking-wider
    text-white
   
    transition-all duration-300
    hover:bg-white
    hover:text-black
    focus:outline-none"
          >
            About Us
          </Link>

          {/* SERVICES Dropdown */}
          <div className="relative group">
            {/* Services Button */}
            <button
              className="
      flex items-center gap-2
      rounded-full
      px-6 py-3
      text-xs font-medium uppercase tracking-wider
      text-white/90
      transition-all duration-300
      group-hover:bg-white
      group-hover:text-black
      focus:outline-none
    "
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span>Services</span>

              <ChevronDown
                className="
        h-4 w-4
        text-white/90
        transition-all duration-300
        group-hover:text-black
        group-hover:rotate-180
      "
              />
            </button>

            {/* Services Dropdown */}
            <div
              className="
      absolute
      left-1/2
      top-full
      z-50
      w-[250px]
      -translate-x-1/2
      pt-3

      opacity-0
      invisible
      translate-y-2

      transition-all
      duration-300

      group-hover:visible
      group-hover:opacity-100
      group-hover:translate-y-0

      group-focus-within:visible
      group-focus-within:opacity-100
      group-focus-within:translate-y-0
    "
            >
              <div
                className="
        rounded-[14px]
        bg-white
        p-3
        shadow-2xl
        border border-gray-100
      "
              >
                <Link
                  href="/destination#visa"
                  className="
          block
          rounded-lg
          px-4 py-4
          text-sm
          font-medium
          text-black
          transition-colors
          hover:bg-gray-100
        "
                >
                  Visa Services
                </Link>

                <Link
                  href="/destination#recruitment"
                  className="
          block
          rounded-lg
          px-4 py-4
          text-sm
          font-medium
          text-black
          transition-colors
          hover:bg-gray-100
        "
                >
                  Recruitment & Employment
                </Link>

                <Link
                  href="/destination#attestation"
                  className="
          block
          rounded-lg
          px-4 py-4
          text-sm
          font-medium
          text-black
          transition-colors
          hover:bg-gray-100
        "
                >
                  Attestation & Emigration
                </Link>

                <Link
                  href="/destination#ticketing"
                  className="
          block
          rounded-lg
          px-4 py-4
          text-sm
          font-medium
          text-black
          transition-colors
          hover:bg-gray-100
        "
                >
                  Flight Ticketing
                </Link>

                <Link
                  href="/destination#tour"
                  className="
          block
          rounded-lg
          px-4 py-4
          text-sm
          font-medium
          text-black
          transition-colors
          hover:bg-gray-100
        "
                >
                  Tour Packages
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/branch"
            className=" flex items-center gap-2
    rounded-full
    px-6 py-3
    text-xs font-medium uppercase tracking-wider
    text-white
   
    transition-all duration-300
    hover:bg-white
    hover:text-black
    focus:outline-none"
          >
            Branches
          </Link>

          <Link
            href="/blog"
            className=" flex items-center gap-2
    rounded-full
    px-6 py-3
    text-xs font-medium uppercase tracking-wider
    text-white
   
    transition-all duration-300
    hover:bg-white
    hover:text-black
    focus:outline-none"
          >
            Blog
          </Link>

          <Link
            href="/contact-us"
            className=" flex items-center gap-2
    rounded-full
    px-6 py-3
    text-xs font-medium uppercase tracking-wider
    text-white
   
    transition-all duration-300
    hover:bg-white
    hover:text-black
    focus:outline-none"
          >
            Contact Us
          </Link>
        </nav>

        {/* Right Menu Toggle Icon
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full glass-pill text-white transition-transform hover:scale-105 active:scale-95"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div> */}
        {/* Right Side Actions */}
        <div className="flex items-center gap-3">

          {/* Call Button - Desktop Only */}
          <a
            href="tel:+912223715000"
            aria-label="Call Royal Travels"
            className="hidden md:flex items-center gap-2 rounded-full bg-[#0075be] px-5 py-3 text-white shadow-lg transition-all duration-300 hover:bg-[#0086C2] hover:scale-105 active:scale-95"
          >
            <Phone className="h-4 w-4" />

            <span className="text-xs font-semibold uppercase tracking-wider">
              Call Us
            </span>
          </a>

          {/* Hamburger - Mobile Only */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-full glass-pill text-white transition-transform hover:scale-105 active:scale-95"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-x-4 top-20 z-50 rounded-2xl glass-card p-6 shadow-2xl flex flex-col gap-3 text-white max-h-[80vh] overflow-y-auto bg-[#101A2B]/95 backdrop-blur-xl border border-white/10"
          >
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium uppercase tracking-wider text-[#0075be] py-2 border-b border-white/10"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium uppercase tracking-wider hover:text-[#0075be] py-2 border-b border-white/10"
            >
              About Us
            </Link>

            {/* Services Mobile Submenu */}
            <div className="border-b border-white/10 py-1">
              <button
                onClick={() => toggleMobileSubmenu("services")}
                className="w-full flex items-center justify-between text-sm font-medium uppercase tracking-wider py-1 text-left hover:text-[#0075be]"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform text-[#0075be] ${activeMobileSubmenu === "services" ? "rotate-180" : ""
                    }`}
                />
              </button>
              {activeMobileSubmenu === "services" && (
                <div className="flex flex-col gap-2 pl-4 py-2 text-xs text-stone-300">
                  <Link
                    href="/destination#visa"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#0075be]"
                  >
                    Visa Services
                  </Link>
                  <Link
                    href="/destination#recruitment"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#0075be]"
                  >
                    Recruitment & Employment
                  </Link>
                  <Link
                    href="/destination#attestation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#0075be]"
                  >
                    Attestation & Emigration
                  </Link>
                  <Link
                    href="/destination#ticketing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#0075be]"
                  >
                    Flight Ticketing
                  </Link>
                  <Link
                    href="/destination#tour"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#0075be]"
                  >
                    Tour Packages
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/branch"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium uppercase tracking-wider hover:text-[#0075be] py-2 border-b border-white/10"
            >
              Branches
            </Link>

            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium uppercase tracking-wider hover:text-[#0075be] py-2 border-b border-white/10"
            >
              Blog
            </Link>

            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium uppercase tracking-wider hover:text-[#0075be] py-2"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
