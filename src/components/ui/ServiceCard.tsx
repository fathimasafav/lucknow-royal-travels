import { cn } from "@/lib/utils";
import { Service } from "@/types";
import {
  ArrowUpRight,
  Award,
  Briefcase,
  Calendar,
  CheckCircle,
  Compass,
  FileCheck,
  FileText,
  Globe,
  Heart,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const iconMap: Record<string, React.ElementType> = {
  FileCheck,
  Briefcase,
  Award,
  Globe,
  Heart,
  Users,
  ShieldCheck,
  Calendar,
  CheckCircle,
  FileText,
  Plane,
  Compass,
};

interface ServiceCardProps {
  service: Service;
  variant?: "grid" | "featured" | "compact" | "list";
  className?: string;
}

export function ServiceCard({
  service,
  variant = "grid",
  className,
}: ServiceCardProps) {
  const { title, categoryLabel, shortDescription, image, iconName, slug, popular } = service;
  const IconComponent = (iconName && iconMap[iconName]) || FileCheck;

  // Featured variant for prominent sections
  if (variant === "featured") {
    return (
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl bg-[#101A2B] text-white cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-500 flex flex-col justify-end min-h-[380px]",
          className
        )}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full">
          {popular && (
            <span className="self-start mb-3 inline-block rounded-full bg-[#0075be]/90 backdrop-blur-md px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white font-sans">
              Popular Service
            </span>
          )}

          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-widest text-[#0075be] font-sans block mb-1">
                {categoryLabel}
              </span>
              <h3 className="font-serif text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-300 line-clamp-2 leading-relaxed font-sans max-w-md">
                {shortDescription}
              </p>
            </div>
            <Link
              href={`/services#${slug}`}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-all duration-300 group-hover:bg-[#0075be] group-hover:text-white text-white"
              aria-label={`View details for ${title}`}
            >
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Compact card (Matour 4-column service choices grid style)
  if (variant === "compact") {
    return (
      <div
        className={cn(
          "group relative flex flex-col justify-end overflow-hidden rounded-xl bg-[#101A2B] text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] min-h-[220px]",
          className
        )}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 p-4 sm:p-5 flex flex-col justify-end h-full">
          <div className="flex items-end justify-between gap-2">
            <div>
              <span className="block text-[9px] uppercase tracking-wider text-[#0075be] font-sans mb-1">
                {categoryLabel}
              </span>
              <h4 className="font-serif text-base font-medium text-white sm:text-lg leading-snug">
                {title}
              </h4>
            </div>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-all duration-300 group-hover:bg-[#0075be] group-hover:text-white text-white">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Grid Card (Used in Services listing & About page)
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white text-[#1C1C1C] border border-stone-200/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.01]",
        className
      )}
    >
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-200">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
        <span className="absolute top-4 left-4 rounded-full bg-[#101A2B]/85 backdrop-blur-md px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white font-sans">
          {categoryLabel}
        </span>
      </div>

      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center gap-2 mb-2 text-[#0075be]">
            <IconComponent className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-[11px] font-semibold uppercase tracking-wider font-sans">
              Royal Travels Official Service
            </span>
          </div>
          <h3 className="font-serif text-xl font-semibold text-[#1C1C1C] group-hover:text-[#0075be] transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#6B7280] leading-relaxed font-sans line-clamp-3">
            {shortDescription}
          </p>
        </div>
{/* 
        <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
          <Link
            href={`/services#${slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0B2A4A] hover:text-[#0075be] transition-colors font-sans"
          >
            <span>Learn More</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div> */}
      </div>
    </div>
  );
}
