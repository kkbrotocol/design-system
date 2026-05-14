import type * as React from "react";

export type InputSize = "sm" | "md" | "lg";
export type InputVariant = "outline" | "filled" | "ghost";

export interface InputProps
  extends Omit<React.ComponentPropsWithRef<"input">, "size"> {
  invalid?: boolean;
  size?: InputSize;
  variant?: InputVariant;
}
