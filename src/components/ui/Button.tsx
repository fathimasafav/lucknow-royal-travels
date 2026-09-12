import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center font-medium transition-all duration-300 tracking-wider uppercase rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] [&>svg]:transition-transform [&>svg]:duration-300 hover:[&>svg]:translate-x-1";

  const variants = {
    primary:
      "bg-[#0075be] text-white hover:bg-[#0086C2] hover:shadow-md active:scale-95 focus:ring-[#0075be]",
    secondary:
      "bg-[#0B2A4A] text-white hover:bg-[#09223D] hover:shadow-md active:scale-95 focus:ring-[#0B2A4A]",
    outline:
      "bg-transparent border border-white/40 text-white hover:bg-white/10 active:scale-95 focus:ring-white/50",
    ghost:
      "bg-transparent text-white hover:bg-white/10 active:scale-95 focus:ring-white/30",
  };

  const sizes = {
    sm: "text-[10px] px-3.5 py-1.5 gap-1.5",
    md: "text-xs px-5 py-2.5 gap-2",
    lg: "text-xs px-6 py-3 gap-2.5",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
