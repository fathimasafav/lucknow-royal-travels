import { cn } from "@/lib/utils";
import { BlogPost } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface BlogCardProps {
  post: BlogPost;
  variant?: "featured" | "horizontal";
  className?: string;
}

export function BlogCard({
  post,
  variant = "horizontal",
  className,
}: BlogCardProps) {
  const { title, image, snippet } = post;

  if (variant === "featured") {
    return (
      <div
        className={cn(
          "group relative flex flex-col justify-end overflow-hidden rounded-2xl bg-[#101A2B] text-white cursor-pointer min-h-[420px] shadow-lg hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-300",
          className
        )}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 p-6 sm:p-8">
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold leading-tight text-white max-w-md">
            {title}
          </h3>
          {snippet && (
            <p className="mt-3 text-xs sm:text-sm text-stone-300 line-clamp-2 max-w-md font-sans">
              {snippet}
            </p>
          )}
          <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0075be] group-hover:text-white group-hover:underline">
            <span>Read More</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    );
  }

  // Horizontal Card (Right Column)
  return (
    <div
      className={cn(
        "group flex flex-col sm:flex-row gap-5 items-start sm:items-center p-2 rounded-xl transition-all duration-300 hover:bg-[#F7F4EE] hover:-translate-y-0.5 hover:shadow-sm cursor-pointer",
        className
      )}
    >
      <div className="relative h-32 w-full sm:w-44 shrink-0 overflow-hidden rounded-xl bg-stone-200">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, 200px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h4 className="font-serif text-lg font-semibold text-[#1C1C1C] leading-snug group-hover:text-[#0075be] transition-colors">
          {title}
        </h4>
        {snippet && (
          <p className="mt-1.5 text-xs text-[#6B7280] line-clamp-2 font-sans">
            {snippet}
          </p>
        )}
        <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0B2A4A] group-hover:text-[#0075be] group-hover:translate-x-1 transition-all">
          Read More <ArrowRight className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}
