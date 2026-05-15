import { forwardRef } from "react";
import type { LucideIcon } from "lucide-react";

/**
 * GitHub icon SVG – Lucide removed "Github" in v1.16+.
 * Path taken from Lucide's last version that included it.
 */
export const GithubIcon: LucideIcon = forwardRef(function GithubIcon(
  props,
  ref
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.28-.56-4.72-.56-7 0-2-1.5-3-1.5-3-1.5.28 1.15.28 2.35 0 3.5A4.65 4.65 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.53-.75 1.2-.75 2V22" />
      <path d="M9 22c-4.5 0-4.5-2-4.5-2.5v-1" />
    </svg>
  );
});

/**
 * LinkedIn icon SVG – Lucide removed "Linkedin" in v1.16+.
 * Path taken from Lucide's last version that included it.
 */
export const LinkedinIcon: LucideIcon = forwardRef(function LinkedinIcon(
  props,
  ref
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
});

GithubIcon.displayName = "GithubIcon";
LinkedinIcon.displayName = "LinkedinIcon";