import type * as React from "react";

export type DialogSize = "sm" | "md" | "lg";
export type DialogVariant = "default" | "danger";

export interface DialogProps
  extends Omit<React.ComponentPropsWithRef<"dialog">, "open"> {
  closeOnBackdropClick?: boolean;
  defaultOpen?: boolean;
  modal?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  size?: DialogSize;
  variant?: DialogVariant;
}

export type DialogHeaderProps = React.ComponentPropsWithRef<"div">;
export type DialogTitleProps = React.ComponentPropsWithRef<"h2">;
export type DialogDescriptionProps = React.ComponentPropsWithRef<"p">;
export type DialogBodyProps = React.ComponentPropsWithRef<"div">;
export type DialogFooterProps = React.ComponentPropsWithRef<"div">;
export type DialogCloseProps = React.ComponentPropsWithRef<"button">;
