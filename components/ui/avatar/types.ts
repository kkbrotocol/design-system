import type * as React from "react";

export type AvatarSize = "sm" | "md" | "lg" | "xl";
export type AvatarShape = "circle" | "square";

export interface AvatarProps
  extends Omit<React.ComponentPropsWithRef<"span">, "children"> {
  alt?: string;
  fallback?: string;
  shape?: AvatarShape;
  size?: AvatarSize;
  src?: string;
}
