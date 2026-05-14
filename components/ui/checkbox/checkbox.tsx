import { cn } from "../utils";
import type { CheckboxProps } from "./types";

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
      className={cn("ui-checkbox", className)}
      data-invalid={invalid || undefined}
      data-size={size}
      data-variant={variant}
      {...props}
    />
  );

  if (!label && !description && !error) {
    return control;
  }

  return (
    <label
      className="ui-checkbox-field"
      data-disabled={disabled || undefined}
    >
      {control}
      <span className="ui-checkbox-content">
        {label ? <span className="ui-checkbox-label">{label}</span> : null}
        {description ? (
          <span
            id={descriptionId}
            className="ui-checkbox-description"
          >
            {description}
          </span>
        ) : null}
        {error ? (
          <span id={errorId} className="ui-checkbox-error">
            {error}
          </span>
        ) : null}
      </span>
    </label>
  );
}
