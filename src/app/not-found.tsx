import { FadeUp, PageTransition } from "@/components/animations";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowLeft, Compass } from "lucide-react";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "404 Page Not Found — Royal Travels",
  description: "The requested page could not be found.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="bg-[#101A2B] text-white min-h-screen flex flex-col justify-center pt-32 pb-24 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-stone-800/30 rounded-full blur-3xl pointer-events-none" />

          <Container className="relative z-10 text-center flex flex-col items-center my-auto">
            <FadeUp distance={20} duration={0.6}>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-[#73A6C0] mb-6 border border-white/20">
                <Compass className="h-8 w-8" />
              </div>
            </FadeUp>

            <FadeUp distance={25} duration={0.8} delay={0.1}>
              <span className="font-serif text-8xl sm:text-9xl font-bold tracking-tight text-white/90">
                404
              </span>
            </FadeUp>

            <FadeUp distance={20} duration={0.7} delay={0.2}>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-stone-100 mt-4 max-w-xl">
                Oops! Page Not Found
              </h1>
            </FadeUp>

            <FadeUp distance={20} duration={0.7} delay={0.3}>
              <p className="mt-4 text-xs sm:text-sm text-stone-400 max-w-md leading-relaxed font-sans">
                The page you are looking for might have been moved or is temporarily unavailable. Let's get you back to Royal Travels services.
              </p>
            </FadeUp>

            <FadeUp distance={20} duration={0.7} delay={0.4}>
              <div className="mt-8 flex items-center gap-4">
                <Link href="/">
                  <Button variant="primary" size="lg" className="gap-2 bg-[#0F9E5E] text-white hover:bg-[#0D8A52]">
                    <ArrowLeft className="h-4 w-4" /> Return To Home
                  </Button>
                </Link>
                <Link href="/destination">
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </FadeUp>
          </Container>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
