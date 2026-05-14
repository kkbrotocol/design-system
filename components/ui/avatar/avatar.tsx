import { cn } from "../utils";
import type { AvatarProps, AvatarShape, AvatarSize } from "./types";

const avatarSizes: Record<AvatarSize, string> = {
  sm: "size-8 text-xs",
  md: "size-10 text-sm",
  lg: "size-12 text-base",
  xl: "size-16 text-lg",
};

const avatarShapes: Record<AvatarShape, string> = {
  circle: "rounded-full",
  square: "rounded-md",
};

function createFallback(fallback?: string, alt?: string) {
  if (fallback) {
    return fallback.slice(0, 3).toUpperCase();
  }

  const initials = alt
    ?.split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return initials ? initials.toUpperCase() : "?";
}

export function Avatar({
  alt,
  className,
  fallback,
  ref,
  shape = "circle",
  size = "md",
  src,
  ...props
}: AvatarProps) {
  const fallbackText = createFallback(fallback, alt);
  const fallbackLabel = !src && alt ? alt : undefined;

  return (
    <span
      ref={ref}
      role={fallbackLabel ? "img" : undefined}
      aria-label={fallbackLabel}
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden bg-muted font-semibold text-muted-foreground ring-1 ring-border",
        avatarSizes[size],
        avatarShapes[shape],
        className,
      )}
      {...props}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element -- Avatar is a reusable primitive, so it keeps native image semantics.
        <img className="size-full object-cover" src={src} alt={alt ?? ""} />
      ) : (
        <span aria-hidden={Boolean(fallbackLabel)}>{fallbackText}</span>
      )}
    </span>
  );
}
