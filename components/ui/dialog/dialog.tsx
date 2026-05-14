"use client";

import * as React from "react";

import { cn } from "../utils";
import type {
  DialogBodyProps,
  DialogCloseProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogProps,
  DialogTitleProps,
} from "./types";

function assignRef<T>(ref: React.Ref<T> | undefined, value: T | null) {
  if (!ref) {
    return;
  }

  if (typeof ref === "function") {
    ref(value);
    return;
  }

  (ref as React.MutableRefObject<T | null>).current = value;
}

export function Dialog({
  children,
  className,
  closeOnBackdropClick = true,
  defaultOpen = false,
  modal = true,
  onCancel,
  onClick,
  onClose,
  onOpenChange,
  open: openProp,
  ref,
  size = "md",
  variant = "default",
  ...props
}: DialogProps) {
  const dialogRef = React.useRef<HTMLDialogElement | null>(null);
  const isControlled = openProp !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const open = isControlled ? openProp : uncontrolledOpen;

  const setOpen = React.useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }

      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange],
  );

  const setDialogRef = React.useCallback(
    (node: HTMLDialogElement | null) => {
      dialogRef.current = node;
      assignRef(ref, node);
    },
    [ref],
  );

  React.useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      if (modal && typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.show();
      }
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [modal, open]);

  function handleCancel(event: React.SyntheticEvent<HTMLDialogElement, Event>) {
    onCancel?.(event);

    if (!event.defaultPrevented) {
      setOpen(false);
    }
  }

  function handleClick(event: React.MouseEvent<HTMLDialogElement>) {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    const target = event.target;

    if (target instanceof Element && target.closest("[data-dialog-close]")) {
      setOpen(false);
      return;
    }

    if (closeOnBackdropClick && event.target === event.currentTarget) {
      setOpen(false);
    }
  }

  function handleClose(event: React.SyntheticEvent<HTMLDialogElement, Event>) {
    onClose?.(event);

    if (!isControlled) {
      setUncontrolledOpen(false);
    }
  }

  return (
    <dialog
      ref={setDialogRef}
      className={cn("ui-dialog", className)}
      data-size={size}
      data-variant={variant}
      onCancel={handleCancel}
      onClick={handleClick}
      onClose={handleClose}
      {...props}
    >
      {children}
    </dialog>
  );
}

export function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return <div className={cn("ui-dialog-header", className)} {...props} />;
}

export function DialogTitle({ className, ...props }: DialogTitleProps) {
  return <h2 className={cn("ui-dialog-title", className)} {...props} />;
}

export function DialogDescription({
  className,
  ...props
}: DialogDescriptionProps) {
  return <p className={cn("ui-dialog-description", className)} {...props} />;
}

export function DialogBody({ className, ...props }: DialogBodyProps) {
  return <div className={cn("ui-dialog-body", className)} {...props} />;
}

export function DialogFooter({ className, ...props }: DialogFooterProps) {
  return <div className={cn("ui-dialog-footer", className)} {...props} />;
}

export function DialogClose({
  children = "×",
  className,
  type = "button",
  "aria-label": ariaLabel = "Close",
  ...props
}: DialogCloseProps) {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={cn("ui-dialog-close", className)}
      data-dialog-close
      {...props}
    >
      {children}
    </button>
  );
}
