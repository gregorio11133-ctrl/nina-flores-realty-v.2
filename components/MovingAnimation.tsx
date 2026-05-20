'use client';

const CREAM  = 'rgba(245,239,230,0.93)';
const GOLD   = '#C9A84C';
const MAROON = '#6B1A2A';
const DARK   = 'rgba(60,10,15,0.45)';

/* Ground baseline: y=185 inside viewBox "0 0 1200 210" */
const GY = 185;

function Person() {
  return (
    <g>
      {/* Head */}
      <circle cx="0" cy="-63" r="11" fill={CREAM} />
      {/* Box at chest */}
      <rect x="-18" y="-52" width="36" height="24" rx="3" fill={GOLD} />
      <line x1="-18" y1="-52" x2="18" y2="-28" stroke={DARK} strokeWidth="1.3" />
      <line x1="18"  y1="-52" x2="-18" y2="-28" stroke={DARK} strokeWidth="1.3" />
      {/* Arms at sides of box */}
      <rect x="-22" y="-42" width="6" height="10" rx="3" fill={CREAM} />
      <rect x="16"  y="-42" width="6" height="10" rx="3" fill={CREAM} />
      {/* Torso */}
      <rect x="-7" y="-28" width="14" height="18" rx="4" fill={CREAM} />
      {/* Left leg — rotates from hip */}
      <g className="leg-l">
        <rect x="-10" y="-10" width="8" height="17" rx="4" fill={CREAM} />
      </g>
      {/* Right leg */}
      <g className="leg-r">
        <rect x="2" y="-10" width="8" height="17" rx="4" fill={CREAM} />
      </g>
    </g>
  );
}

/* House — centered at x=0, ground at y=0 (caller translates) */
function House() {
  return (
    <g>
      {/* Chimney */}
      <rect x="36" y="-122" width="16" height="36" rx="2" fill={GOLD} opacity="0.85" />
      {/* Smoke */}
      <circle cx="44" cy="-130" r="6"  fill="rgba(245,239,230,0.22)" />
      <circle cx="50" cy="-138" r="4"  fill="rgba(245,239,230,0.15)" />
      {/* Roof */}
      <polygon points="-80,-86  0,-122  80,-86" fill={GOLD} opacity="0.92" />
      {/* Left wall */}
      <rect x="-80" y="-86" width="57" height="86" fill={CREAM} opacity="0.95" />
      {/* Right wall */}
      <rect x="23"  y="-86" width="57" height="86" fill={CREAM} opacity="0.95" />
      {/* Header above door */}
      <rect x="-23" y="-86" width="46" height="20" fill={CREAM} opacity="0.95" />
      {/* Door */}
      <rect x="-23" y="-66" width="46" height="66" rx="3" fill={MAROON} opacity="0.82" />
      {/* Door arch */}
      <path d="M-23,-66 Q0,-82 23,-66" fill={MAROON} opacity="0.82" />
      {/* Door knob */}
      <circle cx="12" cy="-33" r="3.5" fill={GOLD} />
      {/* Left window */}
      <rect x="-67" y="-68" width="22" height="16" rx="2" fill={GOLD} opacity="0.3" />
      <line x1="-56" y1="-68" x2="-56" y2="-52" stroke={GOLD} strokeWidth="1" opacity="0.5" />
      <line x1="-67" y1="-60" x2="-45" y2="-60" stroke={GOLD} strokeWidth="1" opacity="0.5" />
      {/* Right window */}
      <rect x="45" y="-68" width="22" height="16" rx="2" fill={GOLD} opacity="0.3" />
      <line x1="56" y1="-68" x2="56" y2="-52" stroke={GOLD} strokeWidth="1" opacity="0.5" />
      <line x1="45" y1="-60" x2="67" y2="-60" stroke={GOLD} strokeWidth="1" opacity="0.5" />
      {/* Step */}
      <rect x="-30" y="-3" width="60" height="6" rx="2" fill={GOLD} opacity="0.55" />
    </g>
  );
}

export default function MovingAnimation() {
  return (
    <>
      <style>{`
        @keyframes march {
          from { transform: translateX(-220px); }
          to   { transform: translateX(1260px); }
        }
        @keyframes legL {
          0%,100% { transform-box:fill-box; transform-origin:50% 0%; transform:rotate(26deg); }
          50%      { transform-box:fill-box; transform-origin:50% 0%; transform:rotate(-26deg); }
        }
        @keyframes legR {
          0%,100% { transform-box:fill-box; transform-origin:50% 0%; transform:rotate(-26deg); }
          50%      { transform-box:fill-box; transform-origin:50% 0%; transform:rotate(26deg); }
        }
        .person-a { animation: march 9s  0s  linear infinite; }
        .person-b { animation: march 9s -3s  linear infinite; }
        .person-c { animation: march 9s -6s  linear infinite; }
        .leg-l    { animation: legL 0.46s ease-in-out infinite; }
        .leg-r    { animation: legR 0.46s ease-in-out infinite; }
      `}</style>

      {/* No fixed height — SVG sizes itself from viewBox aspect ratio */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox={`0 0 1200 210`}
          width="100%"
          style={{ display: 'block' }}
          aria-hidden="true"
        >
          {/* Ground */}
          <line x1="0" y1={GY} x2="1200" y2={GY} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

          {/* People — drawn BEFORE house so house sits on top */}
          <g className="person-a" transform={`translate(0,${GY})`}><Person /></g>
          <g className="person-b" transform={`translate(0,${GY})`}><Person /></g>
          <g className="person-c" transform={`translate(0,${GY})`}><Person /></g>

          {/* House — drawn last, overlaps people so they appear to enter */}
          <g transform={`translate(1090,${GY})`}><House /></g>
        </svg>
      </div>
    </>
  );
}
