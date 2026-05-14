import { cn } from "../utils";
import type { OptionProps, SelectProps } from "./types";

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
      className={cn("ui-select", className)}
      data-invalid={invalid || undefined}
      data-size={size}
      data-variant={variant}
      {...props}
    >
      {children}
    </select>
  );
}

export function Option({ children, ...props }: OptionProps) {
  return <option {...props}>{children}</option>;
}
