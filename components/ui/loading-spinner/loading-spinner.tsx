import { cn } from "../utils";
import type { LoadingSpinnerProps, LoadingSpinnerSize } from "./types";

const spinnerSizes: Record<LoadingSpinnerSize, string> = {
  sm: "size-4 border-2",
  md: "size-5 border-2",
  lg: "size-6 border-[3px]",
};

export function LoadingSpinner({
  className,
  label = "Loading",
  ref,
  size = "md",
  ...props
}: LoadingSpinnerProps) {
  const accessibilityProps =
    label === null
      ? { "aria-hidden": true }
      : { role: "status", "aria-label": label };

  return (
    <span
      ref={ref}
      {...accessibilityProps}
      className={cn("inline-flex items-center justify-center text-brand", className)}
      {...props}
    >
      <span
        className={cn(
          "ui-spinner block rounded-full",
          spinnerSizes[size],
        )}
      />
    </span>
  );
}
