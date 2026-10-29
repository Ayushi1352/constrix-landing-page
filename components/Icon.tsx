import type { ReactNode } from "react";

type IconDef = { filled?: boolean; node: ReactNode };

const icons: Record<string, IconDef> = {
  phone: {
    node: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  phoneFill: {
    filled: true,
    node: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  mail: {
    node: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  },
  mailFill: {
    filled: true,
    node: (
      <path d="M4 4h16a2 2 0 0 1 2 2v.4l-10 6.2L2 6.4V6a2 2 0 0 1 2-2zm18 4.75V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.75l10 6.2z" />
    ),
  },
  arrowRight: {
    node: (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ),
  },
  arrowLeft: {
    node: (
      <>
        <path d="M19 12H5" />
        <path d="m12 19-7-7 7-7" />
      </>
    ),
  },
  chevronDown: { node: <path d="m6 9 6 6 6-6" /> },
  chevronRight: { node: <path d="m9 18 6-6-6-6" /> },
  chevronLeft: { node: <path d="m15 18-6-6 6-6" /> },
  menu: { node: <path d="M4 6h16M4 12h16M4 18h16" /> },
  close: { node: <path d="M18 6 6 18M6 6l12 12" /> },
  plus: { node: <path d="M12 5v14M5 12h14" /> },
  check: { node: <path d="M20 6 9 17l-5-5" /> },
  home: {
    node: (
      <>
        <path d="M3 10 12 3l9 7" />
        <path d="M5 8.5V21h14V8.5" />
        <path d="M10 21v-6h4v6" />
      </>
    ),
  },
  building: {
    node: (
      <>
        <rect x="4" y="2" width="12" height="20" rx="1" />
        <path d="M16 9h3a1 1 0 0 1 1 1v12h-4" />
        <path d="M8 6h.01M12 6h.01M8 10h.01M12 10h.01M8 14h.01M12 14h.01M9 22v-4h2v4" />
      </>
    ),
  },
  factory: {
    node: (
      <>
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M17 18h1M12 18h1M7 18h1" />
      </>
    ),
  },
  bridge: {
    node: (
      <>
        <path d="M2 12h20M2 16h20" />
        <path d="M7 4v16M17 4v16" />
        <path d="M7 5c1.2 3.5 3 5 5 5s3.8-1.500 5-5" />
        <path d="M2 11c2.500-.5 4-2.500 5-6M22 11c-2.500-.5-4-2.500-5-6" />
      </>
    ),
  },
  tools: {
    node: (
      <>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.910-6.910a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        <path d="m3 3 4.500 1.500L9 8M8 7l4 4M15.500 14.500 20 19a1.400 1.400 0 0 1-2 2l-4.500-4.500" />
      </>
    ),
  },
  drafting: {
    node: (
      <>
        <path d="M3 4v17h17z" />
        <path d="M7 17v-4.500l4.500 4.500z" />
        <path d="m14 3 7 7M17.500 6.500l-3 3M15 2l-3 3 7 7 3-3z" />
      </>
    ),
  },
  sofa: {
    node: (
      <>
        <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
        <path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.500a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
        <path d="M4 18v2M20 18v2M12 4v9" />
      </>
    ),
  },
  bricks: {
    node: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M12 9v6M16 15v6M16 3v6M3 15h18M3 9h18M8 15v6M8 3v6" />
      </>
    ),
  },
  planning: {
    node: (
      <>
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
      </>
    ),
  },
  monitor: {
    node: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <circle cx="9" cy="10" r="2" />
        <path d="M14 8h4M14 12h4" />
      </>
    ),
  },
  hardhat: {
    node: (
      <>
        <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
        <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
        <path d="M4 15v-3a6 6 0 0 1 6-6M14 6a6 6 0 0 1 6 6v3" />
      </>
    ),
  },
  award: {
    node: (
      <>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.890 17 22l-5-3-5 3 1.523-9.110" />
        <path d="m9.500 8 1.800 1.800 3.200-3.300" />
      </>
    ),
  },
  pin: {
    node: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  pinFill: {
    filled: true,
    node: (
      <path
        fillRule="evenodd"
        d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
      />
    ),
  },
  clock: {
    node: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  },
  calendar: {
    node: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
  },
  starFill: {
    filled: true,
    node: (
      <path d="M12 2l3.090 6.260L22 9.270l-5 4.870 1.180 6.880L12 17.770l-6.180 3.250L7 14.140 2 9.270l6.910-1.010L12 2z" />
    ),
  },
  file: {
    node: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </>
    ),
  },
  gear: {
    node: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.400 15a1.650 1.650 0 0 0 .33 1.820l.06.06a2 2 0 0 1 0 2.830 2 2 0 0 1-2.830 0l-.06-.06a1.650 1.650 0 0 0-1.820-.33 1.650 1.650 0 0 0-1 1.510V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.650 1.650 0 0 0 9 19.400a1.650 1.650 0 0 0-1.820.33l-.06.06a2 2 0 0 1-2.830 0 2 2 0 0 1 0-2.830l.06-.06a1.650 1.650 0 0 0 .33-1.820 1.650 1.650 0 0 0-1.510-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.650 1.650 0 0 0 4.600 9a1.650 1.650 0 0 0-.33-1.820l-.06-.06a2 2 0 0 1 0-2.830 2 2 0 0 1 2.830 0l.06.06a1.650 1.650 0 0 0 1.820.33H9a1.650 1.650 0 0 0 1-1.510V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.650 1.650 0 0 0 1 1.510 1.650 1.650 0 0 0 1.820-.33l.06-.06a2 2 0 0 1 2.830 0 2 2 0 0 1 0 2.830l-.06.06a1.650 1.650 0 0 0-.33 1.820V9a1.650 1.650 0 0 0 1.510 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.650 1.650 0 0 0-1.510 1z" />
      </>
    ),
  },
  users: {
    node: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.870M16 3.130a4 4 0 0 1 0 7.750" />
      </>
    ),
  },
  usersFill: {
    filled: true,
    node: (
      <>
        <circle cx="12" cy="7" r="3.500" />
        <circle cx="4.800" cy="9" r="2.500" />
        <circle cx="19.200" cy="9" r="2.500" />
        <path d="M6 20v-2.500a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4V20zM0.500 19v-2.200a3.300 3.300 0 0 1 3.300-3.300h1.400a5.800 5.800 0 0 0-1 3.300V19zM23.500 19v-2.200a3.300 3.300 0 0 0-3.300-3.300h-1.400a5.800 5.800 0 0 1 1 3.300V19z" />
      </>
    ),
  },
  shield: {
    node: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  shieldFill: {
    filled: true,
    node: (
      <path
        fillRule="evenodd"
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm-1.100-7.300 5.300-5.300-1.400-1.400-3.900 3.900-1.700-1.700-1.400 1.400z"
      />
    ),
  },
  leaf: {
    node: (
      <>
        <path d="M11 20A7 7 0 0 1 9.800 6.100C15.500 5 17 4.480 19 2c1 2 2 4.180 2 8 0 5.500-4.780 10-10 10Z" />
        <path d="M2 21c0-3 1.850-5.360 5.080-6C9.500 14.520 12 13 13 12" />
      </>
    ),
  },
  headset: {
    node: (
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    ),
  },
  coins: {
    filled: true,
    node: (
      <>
        <ellipse cx="15" cy="5" rx="7" ry="2.600" />
        <path d="M8 7.300c1.300 1.300 4 2 7 2s5.700-.7 7-2v1.900c0 1.400-3.100 2.600-7 2.600s-7-1.200-7-2.600zM8 11.400c1.300 1.300 4 2 7 2s5.700-.7 7-2v1.900c0 1.400-3.100 2.600-7 2.600-.3 0-.7 0-1-.03v-1.070c0-1.900-2.400-3.200-6-3.600z" />
        <ellipse cx="7.500" cy="14.500" rx="5.500" ry="2.200" />
        <path d="M2 16.600c1.100 1.100 3.100 1.700 5.500 1.700s4.400-.6 5.500-1.700v1.700c0 1.200-2.500 2.200-5.500 2.200S2 19.500 2 18.300zM2 20.300c1.100 1.100 3.100 1.700 5.500 1.700s4.400-.6 5.500-1.700v.5c0 1.200-2.500 2.200-5.500 2.200S2 22 2 20.800z" />
      </>
    ),
  },
  quote: {
    filled: true,
    node: (
      <path d="M10 4v3.200C7.900 7.900 7 9.300 7 11h3v8H3v-8.300C3 6.900 5.800 4.300 10 4zm11 0v3.200c-2.100.7-3 2.100-3 3.800h3v8h-7v-8.300C14 6.900 16.800 4.300 21 4z" />
    ),
  },
  facebook: {
    filled: true,
    node: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  instagram: {
    node: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.370A4 4 0 1 1 12.630 8 4 4 0 0 1 16 11.370z" />
        <path d="M17.500 6.500h.01" />
      </>
    ),
  },
  linkedin: {
    filled: true,
    node: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  youtube: {
    filled: true,
    node: (
      <path
        fillRule="evenodd"
        d="M22.540 6.420a2.780 2.780 0 0 0-1.940-2C18.880 4 12 4 12 4s-6.880 0-8.600.46a2.780 2.780 0 0 0-1.940 2A29 29 0 0 0 1 11.750a29 29 0 0 0 .46 5.330A2.780 2.780 0 0 0 3.400 19c1.720.46 8.600.46 8.600.46s6.880 0 8.600-.46a2.780 2.780 0 0 0 1.940-2 29 29 0 0 0 .46-5.250 29 29 0 0 0-.46-5.330zM9.750 15.020V8.480l5.750 3.270z"
      />
    ),
  },
  search: {
    node: (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </>
    ),
  },
  helpCircle: {
    node: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </>
    ),
  },
  lock: {
    node: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
  },
  sitemap: {
    node: (
      <>
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <rect x="2" y="17" width="6" height="4" rx="1" />
        <rect x="9" y="17" width="6" height="4" rx="1" />
        <rect x="16" y="17" width="6" height="4" rx="1" />
        <path d="M12 7v5M5 12h14v5M5 12v5M12 12v5" />
      </>
    ),
  },
  scale: {
    node: (
      <>
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="M7 21h10M12 3v18M3 7h18" />
      </>
    ),
  },
};

export default function Icon({
  name,
  className,
  strokeWidth = 1.8,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const icon = icons[name] ?? icons.check;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={icon.filled ? "currentColor" : "none"}
      stroke={icon.filled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon.node}
    </svg>
  );
}
