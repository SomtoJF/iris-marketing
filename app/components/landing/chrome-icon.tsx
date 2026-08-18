import { useId } from "react";

export function ChromeIcon({ className }: { className?: string }) {
  const clipId = useId();

  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx="24" cy="24" r="20" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <path fill="#FBBC05" d="M24 24 14 41.32A20 20 0 0 1 14 6.68Z" />
        <path fill="#34A853" d="M24 24 44 24A20 20 0 0 1 14 41.32Z" />
        <path fill="#EA4335" d="M24 24 14 6.68A20 20 0 0 1 44 24Z" />
      </g>
      <circle cx="24" cy="24" r="8.5" fill="#fff" />
      <circle cx="24" cy="24" r="6.5" fill="#4285F4" />
    </svg>
  );
}
