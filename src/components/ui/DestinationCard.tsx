import { cn } from "@/lib/utils";
import { Destination } from "@/types";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

interface DestinationCardProps {
  destination: Destination;
  variant?: "featured" | "grid";
  className?: string;
}

export function DestinationCard({
  destination,
  variant = "grid",
  className,
}: DestinationCardProps) {
  const { name, country, price, image } = destination;

  if (variant === "featured") {
    return (
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl bg-[#101A2B] text-white cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-300",
          className
        )}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-7">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-serif text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {name}
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-stone-300 tracking-wide font-sans">
                <MapPin className="h-3.5 w-3.5 text-stone-300" />
                {country}
              </p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-[#101A2B] text-white">
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Compact Grid Card (Travel Choices Section)
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-xl bg-[#101A2B] text-white cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01]",
        className
      )}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 p-4 sm:p-5 flex flex-col justify-end h-full">
        <div className="flex items-end justify-between gap-2">
          <div>
            <h4 className="font-serif text-lg font-medium text-white sm:text-xl leading-tight">
              {name}
            </h4>
            <p className="mt-1 text-[11px] text-stone-300 font-sans tracking-wide flex items-center gap-1">
              <MapPin className="h-3 w-3 text-stone-400" />
              {country}
            </p>
          </div>
          {price && (
            <div className="text-right">
              <span className="block text-[9px] uppercase tracking-wider text-stone-400 font-sans">
                Start From
              </span>
              <span className="font-serif text-base font-semibold text-white">
                {price}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
