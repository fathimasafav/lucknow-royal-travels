import { BlogSection } from "@/components/home/BlogSection";
import { DestinationShowcase } from "@/components/home/DestinationShowcase";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { NewLifeSection } from "@/components/home/NewLifeSection";
import { QualityTourSection } from "@/components/home/QualityTourSection";
import { Testimonials } from "@/components/home/Testimonials";
import { TravelChoices } from "@/components/home/TravelChoices";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedDestinations />
        <ExperienceSection />
        <DestinationShowcase />
        <Testimonials />
        <NewLifeSection />
        <TravelChoices />
        <QualityTourSection />
        <BlogSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
