"use client";

import { FadeUp, Reveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { BlogCard } from "@/components/ui/BlogCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts, featuredBlogPost } from "@/data/blog";
import React from "react";

export function BlogSection() {
  return (
    <section className="bg-[#F7F4EE] py-20 lg:py-28 overflow-hidden">
      <Container>
        {/* Section Heading */}
        <FadeUp distance={25} duration={0.8} className="mb-12">
          <SectionHeading
            title={`Read Our Latest Travel\nBlog & Travel Guidance`}
            subtitle="Professional insights, document checklists, and immigration guidelines from Royal Travels experts."
          />
        </FadeUp>

        {/* 2 Column Layout (Featured on Left, List on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Featured Card (6 cols) */}
          <div className="lg:col-span-6 flex">
            <Reveal direction="up" distance={30} duration={0.8} className="w-full h-full flex">
              <BlogCard
                post={featuredBlogPost}
                variant="featured"
                className="w-full h-full"
              />
            </Reveal>
          </div>

          {/* Right Blog List (6 cols) */}
          <div className="lg:col-span-6">
            <StaggerContainer stagger={0.12} delayChildren={0.15} className="flex flex-col justify-between gap-4 h-full">
              {blogPosts.map((post) => (
                <StaggerItem key={post.id} distance={20} duration={0.6}>
                  <BlogCard post={post} variant="horizontal" />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  );
}
