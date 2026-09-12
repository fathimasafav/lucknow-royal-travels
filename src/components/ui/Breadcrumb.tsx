import { cn } from "@/lib/utils";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  variant?: "glass" | "light" | "dark";
}

export function Breadcrumb({ items, className, variant = "glass" }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-sans tracking-wider uppercase",
        variant === "glass" && "glass-pill px-4 py-1.5 rounded-full text-stone-300",
        variant === "light" && "bg-stone-100 text-stone-600 px-4 py-1.5 rounded-full border border-stone-200",
        variant === "dark" && "bg-[#101A2B] text-stone-400 px-4 py-1.5 rounded-full border border-white/10",
        className
      )}
    >
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-white transition-colors text-stone-300"
        title="Home"
      >
        <Home className="h-3.5 w-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="h-3 w-3 opacity-40" />
            {isLast || !item.href ? (
              <span className="font-semibold text-white tracking-wide">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
