import { cn } from "../utils";
import type { InputProps, InputSize, InputVariant } from "./types";

const inputSizes: Record<InputSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-3.5 text-sm",
  lg: "h-12 px-4 text-base",
};

const inputVariants: Record<InputVariant, string> = {
  outline: "border border-border bg-input shadow-sm",
  filled: "border border-transparent bg-surface-muted",
  ghost: "border border-transparent bg-transparent hover:bg-surface-muted",
};

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
      className={cn(
        "w-full rounded-md text-foreground transition placeholder:text-muted-foreground/75 file:mr-3 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-60 aria-[invalid=true]:border-danger aria-[invalid=true]:ring-danger/25",
        inputVariants[variant],
        inputSizes[size],
        className,
      )}
      {...props}
    />
  );
}
