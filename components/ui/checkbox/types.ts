import type * as React from "react";

export type CheckboxSize = "sm" | "md" | "lg";
export type CheckboxVariant = "brand" | "neutral";

export interface CheckboxProps
  extends Omit<React.ComponentPropsWithRef<"input">, "size" | "type"> {
  description?: React.ReactNode;
  error?: React.ReactNode;
  invalid?: boolean;
  label?: React.ReactNode;
  size?: CheckboxSize;
  variant?: CheckboxVariant;
}
