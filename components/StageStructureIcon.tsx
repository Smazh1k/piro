import type { LucideProps } from "lucide-react";

export default function StageStructureIcon({
  size = 24,
  className,
  strokeWidth = 1.8,
  ...props
}: LucideProps) {
  return (
    <svg
      {...props}
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 5h18l-2 3H5L3 5Z" />
      <path d="M5 8v10m14-10v10M3 18h18" />
      <path d="M8 8v4m4-4v4m4-4v4M8 18v2m8-2v2" />
    </svg>
  );
}
