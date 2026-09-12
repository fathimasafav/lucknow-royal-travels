"use client";

import { FadeUp, PageTransition, Reveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BlogCard } from "@/components/ui/BlogCard";
import { Container } from "@/components/ui/Container";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { allBlogPosts, featuredBlogPost } from "@/data/blog";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Visa Guidance", "Recruitment", "Attestation", "Pilgrimage"];

  const filteredPosts =
    selectedCategory === "All"
      ? allBlogPosts
      : allBlogPosts.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Header />
      <PageTransition>
        <main>
          {/* Subpage Hero Banner */}
          <SubpageHero
            title="Travel & Visa Updates"
            subtitle="Official guidance, Saudi visa rule updates, GCC recruitment processes, and attestation advice from Royal Travels."
            breadcrumbs={[{ label: "Blog" }]}
            bgImage="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=2000&q=85"
          />

          {/* Featured Post Banner */}
          <section className="bg-[#F7F4EE] pt-16 pb-8 overflow-hidden">
            <Container>
              <FadeUp distance={20} duration={0.8} className="mb-6">
                <h2 className="font-serif text-2xl font-semibold text-[#1C1C1C]">
                  Featured Article
                </h2>
              </FadeUp>
              <Reveal direction="up" distance={30} duration={0.8}>
                <Link href={`/blog/${featuredBlogPost.slug}`} className="block">
                  <BlogCard post={featuredBlogPost} variant="featured" />
                </Link>
              </Reveal>
            </Container>
          </section>

          {/* Blog Grid Section */}
          <section className="bg-[#F7F4EE] py-12 lg:py-20 overflow-hidden">
            <Container>
              {/* Category Filter Pills */}
              <FadeUp distance={20} duration={0.8}>
                <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-14">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
                        selectedCategory === cat
                          ? "bg-[#23446F] text-white shadow-md scale-105"
                          : "bg-stone-200/80 text-stone-700 hover:bg-stone-300/80"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </FadeUp>

              {/* Grid with Stagger */}
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <StaggerContainer
                  stagger={0.08}
                  delayChildren={0.1}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredPosts.map((post) => (
                    <StaggerItem key={post.id} distance={25}>
                      <Link href={`/blog/${post.slug}`} className="block h-full">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200/80 group h-full flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                          <BlogCard post={post} variant="horizontal" className="p-4" />
                        </div>
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </motion.div>
            </Container>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
