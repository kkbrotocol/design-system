import { cn } from "../utils";
import type { OptionProps, SelectProps, SelectSize, SelectVariant } from "./types";

const selectSizes: Record<SelectSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-3.5 text-sm",
  lg: "h-12 px-4 text-base",
};

const selectVariants: Record<SelectVariant, string> = {
  outline: "border border-border bg-input shadow-sm",
  filled: "border border-transparent bg-surface-muted",
  ghost: "border border-transparent bg-transparent hover:bg-surface-muted",
};

export function Select({
  children,
  className,
  invalid = false,
  ref,
  size = "md",
  variant = "outline",
  ...props
}: SelectProps) {
  return (
    <select
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(
        "w-full rounded-md text-foreground transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-60 aria-[invalid=true]:border-danger aria-[invalid=true]:ring-danger/25",
        selectVariants[variant],
        selectSizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export function Option({ children, ...props }: OptionProps) {
  return <option {...props}>{children}</option>;
}
