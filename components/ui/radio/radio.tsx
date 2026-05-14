import { cn } from "../utils";
import type { RadioGroupProps, RadioProps } from "./types";

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
      className={cn("ui-radio", className)}
      data-size={size}
      data-variant={variant}
      {...props}
    />
  );

  if (!label && !description) {
    return control;
  }

  return (
    <label className="ui-radio-field" data-disabled={disabled || undefined}>
      {control}
      <span className="ui-radio-content">
        {label ? <span className="ui-radio-label">{label}</span> : null}
        {description ? (
          <span id={descriptionId} className="ui-radio-description">
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
    <fieldset className={cn("ui-radio-group", className)} {...props}>
      {label ? (
        <legend className="ui-radio-group-label">{label}</legend>
      ) : null}
      {description ? (
        <p className="ui-radio-group-description">{description}</p>
      ) : null}
      <div className="ui-radio-group-options" data-orientation={orientation}>
        {children}
      </div>
    </fieldset>
  );
}
