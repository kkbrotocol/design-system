import type * as React from "react";

export type LoadingSpinnerSize = "sm" | "md" | "lg";

export interface LoadingSpinnerProps
  extends React.ComponentPropsWithRef<"span"> {
  label?: string | null;
  size?: LoadingSpinnerSize;
}
