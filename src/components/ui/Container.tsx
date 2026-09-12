import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  clean?: boolean;
}

export function Container({ children, className, clean = false, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        !clean && "mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10 lg:px-12",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
