import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// Restrained "tilt card" — no rotation, just a subtle lift on hover.
// Kept as a component so existing imports continue to work.
export const TiltCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "transition-transform duration-300 will-change-transform hover:-translate-y-1",
        className,
      )}
      {...props}
    />
  ),
);
TiltCard.displayName = "TiltCard";
