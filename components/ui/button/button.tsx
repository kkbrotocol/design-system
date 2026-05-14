import { LoadingSpinner } from "../loading-spinner/loading-spinner";
import { cn } from "../utils";

import type { ButtonProps } from "./types";

export function Button({
  children,
  className,
  disabled,
  isLoading = false,
  loadingLabel = "Loading",
  ref,
  size = "md",
  type,
  variant = "primary",
  "aria-label": ariaLabel,
  ...props
}: ButtonProps) {
  return (
    <button
      ref={ref}
      type={type ?? "button"}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      aria-label={isLoading && size === "icon" ? loadingLabel : ariaLabel}
      className={cn("ui-button", className)}
      data-variant={variant}
      data-size={size}
      {...props}
    >
      {isLoading ? (
        <LoadingSpinner
          className="text-current"
          label={null}
          size={size === "lg" ? "md" : "sm"}
        />
      ) : null}
      {children}
    </button>
  );
}
