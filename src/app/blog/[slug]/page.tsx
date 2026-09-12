import { FadeUp, PageTransition, Reveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BlogCard } from "@/components/ui/BlogCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { allBlogPosts } from "@/data/blog";
import { Calendar, User } from "lucide-react";
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
  return allBlogPosts.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const post = allBlogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found — Royal Travels" };
  return {
    title: `${post.title} — Royal Travels Insights`,
    description: post.snippet,
  };
}

export default function BlogDetailPage({ params }: PageProps) {
  const post = allBlogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const related = allBlogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Header />
      <PageTransition>
        <main>
          {/* Banner */}
          <SubpageHero
            title={post.title}
            subtitle={`${post.category || "Travel Guide"} • ${post.date || "Aug 2024"}`}
            breadcrumbs={[
              { label: "Blog", href: "/blog" },
              { label: post.title.slice(0, 30) + "..." },
            ]}
            bgImage={post.image}
          />

          {/* Article Body */}
          <section className="bg-[#F7F4EE] py-16 lg:py-24 overflow-hidden">
            <Container>
              <div className="max-w-4xl mx-auto">
                {/* Author & Date Meta Bar */}
                <FadeUp distance={20} duration={0.6}>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-stone-200/80 flex items-center justify-between gap-4 mb-10 text-xs font-sans text-stone-700">
                    {post.author && (
                      <div className="flex items-center gap-3">
                        <div className="relative h-9 w-9 rounded-full overflow-hidden border border-stone-200">
                          <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                        </div>
                        <div>
                          <span className="block font-semibold text-[#1C1C1C]">{post.author.name}</span>
                          <span className="block text-[10px] text-[#6B7280]">{post.author.role}</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-[#6B7280]">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date || "August 2024"}</span>
                    </div>
                  </div>
                </FadeUp>

                {/* Main Featured Image */}
                <Reveal direction="up" distance={25} duration={0.7} delay={0.1}>
                  <div className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-md mb-12 group">
                    <Image src={post.image} alt={post.title} fill priority className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </Reveal>

                {/* Article Content Paragraphs */}
                <FadeUp distance={20} duration={0.6} delay={0.15}>
                  <div className="prose max-w-none text-stone-800 text-sm sm:text-base leading-relaxed font-sans space-y-6">
                    {post.content ? (
                      post.content.map((paragraph, idx) => (
                        <p key={idx} className="text-stone-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p>{post.snippet}</p>
                    )}

                    {/* Editorial Highlight Quote Box */}
                    <div className="my-10 bg-[#101A2B] text-white rounded-2xl p-8 shadow-xl border border-white/10">
                      <p className="font-serif text-xl sm:text-2xl font-semibold leading-snug text-[#73A6C0]">
                        "Accurate document clearance and transparent guidance are the foundation of seamless overseas travel."
                      </p>
                      <span className="block mt-4 text-xs font-sans uppercase tracking-widest text-stone-400">
                        — Royal Travels Travel & Consular Desk
                      </span>
                    </div>
                  </div>
                </FadeUp>

                {/* Tags */}
                {post.tags && (
                  <FadeUp distance={15} duration={0.6} delay={0.2}>
                    <div className="mt-12 pt-8 border-t border-stone-200 flex items-center gap-2 flex-wrap">
                      <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold mr-2 font-sans">
                        Tags:
                      </span>
                      {post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-white border border-stone-200 px-3 py-1 rounded-full text-xs text-stone-700 font-sans"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </FadeUp>
                )}
              </div>
            </Container>
          </section>

          {/* Related Articles */}
          <section className="bg-[#F7F4EE] pb-24 border-t border-stone-200/60 pt-16 overflow-hidden">
            <Container>
              <FadeUp distance={20} duration={0.8}>
                <SectionHeading title="Related Articles" centered />
              </FadeUp>
              <StaggerContainer stagger={0.1} delayChildren={0.15} className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <StaggerItem key={rel.id} distance={20}>
                    <Link href={`/blog/${rel.slug}`} className="block h-full">
                      <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
                        <BlogCard post={rel} variant="horizontal" />
                      </div>
                    </Link>
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
