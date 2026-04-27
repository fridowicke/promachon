type Props = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export default function Logo({ size = 32, className = "", strokeWidth = 1 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden
    >
      {/* Outer shield-ring */}
      <circle cx="20" cy="20" r="18.75" />
      {/* Inner hairline — sits close to the outer ring so it reads as a protective double border */}
      <circle cx="20" cy="20" r="17.4" strokeWidth={strokeWidth * 0.35} />

      {/* Π — hand-drawn paths so it's crisp at any size. Butt linecaps so feet
          sit flush against the leg endpoints. */}
      <g strokeWidth={strokeWidth * 1.3} strokeLinecap="butt">
        {/* Top crossbar — square caps so it has weight at the ends */}
        <line x1="10.5" y1="12.5" x2="29.5" y2="12.5" strokeLinecap="square" />
        {/* Left leg */}
        <line x1="14.4" y1="12.5" x2="14.4" y2="28" />
        {/* Right leg */}
        <line x1="25.6" y1="12.5" x2="25.6" y2="28" />
      </g>
    </svg>
  );
}
