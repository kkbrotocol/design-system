import type * as React from "react";

export type SelectSize = "sm" | "md" | "lg";
export type SelectVariant = "outline" | "filled" | "ghost";

export interface SelectProps
  extends Omit<React.ComponentPropsWithRef<"select">, "size"> {
  invalid?: boolean;
  size?: SelectSize;
  variant?: SelectVariant;
}

export type OptionProps = React.ComponentPropsWithRef<"option">;
