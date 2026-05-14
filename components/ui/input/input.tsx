import { cn } from "../utils";
import type { InputProps } from "./types";

export function Input({
  className,
  invalid = false,
  ref,
  size = "md",
  type = "text",
  variant = "outline",
  ...props
}: InputProps) {
  return (
    <input
      ref={ref}
      type={type}
      aria-invalid={invalid || undefined}
      className={cn("ui-input", className)}
      data-invalid={invalid || undefined}
      data-size={size}
      data-variant={variant}
      {...props}
    />
  );
}
