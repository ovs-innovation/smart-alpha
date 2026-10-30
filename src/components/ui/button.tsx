"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[0_10px_28px_rgba(47,190,99,0.28)] hover:brightness-[1.03] hover:-translate-y-0.5",
        secondary: "bg-foreground text-white hover:bg-black hover:-translate-y-0.5",
        outline:
          "border border-border bg-white/80 text-foreground hover:border-primary/40 hover:bg-white",
        ghost: "bg-transparent text-foreground hover:bg-[var(--surface)]",
        glass: "border border-border bg-white/80 text-foreground hover:bg-white",
      },
      size: {
        sm: "h-10 px-4 text-xs",
        md: "h-11 px-5",
        lg: "h-12 px-6 text-[0.95rem]",
        xl: "h-13 px-7 text-base min-h-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
);
Button.displayName = "Button";

export { buttonVariants };
