import { cn } from "../utils";
import type { RadioGroupProps, RadioProps, RadioSize, RadioVariant } from "./types";

const radioSizes: Record<RadioSize, string> = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

const radioVariants: Record<RadioVariant, string> = {
  brand: "accent-brand",
  neutral: "accent-muted-foreground",
};

export function Radio({
  className,
  description,
  disabled,
  id,
  invalid = false,
  label,
  ref,
  size = "md",
  variant = "brand",
  "aria-describedby": ariaDescribedBy,
  ...props
}: RadioProps) {
  const descriptionId = id && description ? `${id}-description` : undefined;
  const describedBy =
    [ariaDescribedBy, descriptionId].filter(Boolean).join(" ") || undefined;

  const control = (
    <input
      ref={ref}
      id={id}
      type="radio"
      disabled={disabled}
      aria-describedby={describedBy}
      data-invalid={invalid || undefined}
      className={cn(
        "mt-0.5 shrink-0 rounded-full border border-border bg-input transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-60 data-[invalid=true]:ring-danger/30",
        radioSizes[size],
        radioVariants[variant],
        className,
      )}
      {...props}
    />
  );

  if (!label && !description) {
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
      </span>
    </label>
  );
}

export function RadioGroup({
  children,
  className,
  description,
  label,
  orientation = "vertical",
  ...props
}: RadioGroupProps) {
  return (
    <fieldset className={cn("grid gap-3", className)} {...props}>
      {label ? (
        <legend className="text-sm font-semibold text-foreground">{label}</legend>
      ) : null}
      {description ? (
        <p className="text-sm leading-5 text-muted-foreground">{description}</p>
      ) : null}
      <div
        className={cn(
          "flex gap-4",
          orientation === "vertical" ? "flex-col" : "flex-row flex-wrap",
        )}
      >
        {children}
      </div>
    </fieldset>
  );
}
