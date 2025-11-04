import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[hsl(var(--lovable-primary))] to-[hsl(var(--accent))] text-white hover:from-[hsl(var(--lovable-primary))] hover:to-[hsl(var(--accent))] hover:brightness-105 hover:shadow-[0_8px_24px_hsl(var(--lovable-primary)/0.35)] hover:scale-[1.03] active:scale-95",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105",
        outline: "border-2 border-[hsl(var(--lovable-primary))] bg-transparent text-[hsl(var(--lovable-primary))] hover:bg-[hsl(var(--lovable-primary))] hover:text-white hover:shadow-[0_8px_24px_hsl(var(--lovable-primary)/0.35)] hover:scale-[1.03]",
        secondary: "bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary)/0.9)] hover:scale-[1.03]",
        ghost: "hover:bg-[hsl(var(--accent)/0.15)] hover:text-[hsl(var(--foreground))] hover:scale-[1.03]",
        link: "text-[hsl(var(--lovable-primary))] underline-offset-4 hover:underline hover:text-[hsl(var(--accent))]",
        glow: "bg-[hsl(var(--lovable-primary))] text-white hover:shadow-[0_0_30px_hsl(var(--accent)/0.55)] hover:scale-[1.04]",
        bounce: "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)] hover:animate-bounce",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
