import { cn } from "../utils";
import type { LoadingSpinnerProps } from "./types";

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
      className={cn("ui-loading-spinner", className)}
      data-size={size}
      {...props}
    >
      <span className="ui-loading-spinner-indicator" />
    </span>
  );
}
