import { cn } from "../utils";
import type { CheckboxProps, CheckboxSize, CheckboxVariant } from "./types";

const checkboxSizes: Record<CheckboxSize, string> = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

const checkboxVariants: Record<CheckboxVariant, string> = {
  brand: "accent-brand",
  neutral: "accent-muted-foreground",
};

export function Checkbox({
  className,
  description,
  disabled,
  error,
  id,
  invalid = false,
  label,
  ref,
  size = "md",
  variant = "brand",
  "aria-describedby": ariaDescribedBy,
  ...props
}: CheckboxProps) {
  const descriptionId = id && description ? `${id}-description` : undefined;
  const errorId = id && error ? `${id}-error` : undefined;
  const describedBy =
    [ariaDescribedBy, descriptionId, errorId].filter(Boolean).join(" ") ||
    undefined;

  const control = (
    <input
      ref={ref}
      id={id}
      type="checkbox"
      disabled={disabled}
      aria-describedby={describedBy}
      aria-invalid={invalid || undefined}
      className={cn(
        "mt-0.5 shrink-0 rounded border border-border bg-input transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-60 aria-[invalid=true]:ring-danger/30",
        checkboxSizes[size],
        checkboxVariants[variant],
        className,
      )}
      {...props}
    />
  );

  if (!label && !description && !error) {
    return control;
  }

  return (
    <label
      className={cn(
        "flex max-w-full items-start gap-3 text-sm text-foreground",
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
      )}
    >
      {control}
      <span className="grid gap-1">
        {label ? <span className="font-medium leading-5">{label}</span> : null}
        {description ? (
          <span
            id={descriptionId}
            className="text-sm leading-5 text-muted-foreground"
          >
            {description}
          </span>
        ) : null}
        {error ? (
          <span id={errorId} className="text-sm leading-5 text-danger">
            {error}
          </span>
        ) : null}
      </span>
    </label>
  );
}
