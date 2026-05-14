import { cn } from "../utils";
import type { AvatarProps } from "./types";

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
      className={cn("ui-avatar", className)}
      data-shape={shape}
      data-size={size}
      {...props}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element -- Avatar is a reusable primitive, so it keeps native image semantics.
        <img className="ui-avatar-image" src={src} alt={alt ?? ""} />
      ) : (
        <span className="ui-avatar-fallback" aria-hidden={Boolean(fallbackLabel)}>
          {fallbackText}
        </span>
      )}
    </span>
  );
}
