import { cn } from "@/lib/utils";
import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  dark?: boolean;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  badge,
  dark = false,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        centered ? "items-center text-center max-w-2xl mx-auto" : "items-start text-left",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full border",
            dark
              ? "bg-white/10 border-white/20 text-stone-200"
              : "bg-[#23446F]/10 border-[#23446F]/20 text-[#23446F]"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl lg:text-[52px] lg:leading-[52px] font-semibold   tracking-tight whitespace-pre-line",
          dark ? "text-white" : "text-[#1C1C1C]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-2 text-xs sm:text-sm  lg:text-[16px] lg:font-normal  leading-[24px] max-w-xl font-sans",
            dark ? "text-stone-300" : "text-[#6B7280]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
