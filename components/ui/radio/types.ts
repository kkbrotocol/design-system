import type * as React from "react";

export type RadioSize = "sm" | "md" | "lg";
export type RadioVariant = "brand" | "neutral";
export type RadioGroupOrientation = "horizontal" | "vertical";

export interface RadioProps
  extends Omit<React.ComponentPropsWithRef<"input">, "size" | "type"> {
  description?: React.ReactNode;
  invalid?: boolean;
  label?: React.ReactNode;
  size?: RadioSize;
  variant?: RadioVariant;
}

export interface RadioGroupProps
  extends React.ComponentPropsWithRef<"fieldset"> {
  description?: React.ReactNode;
  label?: React.ReactNode;
  orientation?: RadioGroupOrientation;
}
