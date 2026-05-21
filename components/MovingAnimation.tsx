'use client';

const C  = 'rgba(245,239,230,0.93)';
const G  = '#C9A84C';
const M  = '#6B1A2A';
const DK = 'rgba(50,10,15,0.45)';

const GY = 183; // ground y inside viewBox "0 0 1200 200"

/* ─── Adult carrying a box (facing right) ─── */
function Adult({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx},${cy})`}>
      {/* Head */}
      <circle cx="0" cy="-70" r="12" fill={C} />
      {/* Body */}
      <rect x="-8" y="-57" width="16" height="27" rx="5" fill={C} />
      {/* Arms + box held out to the right */}
      <rect x="6"  y="-51" width="24" height="7" rx="3" fill={C} />
      <rect x="26" y="-57" width="30" height="23" rx="3" fill={G} />
      <line x1="26" y1="-57" x2="56" y2="-34" stroke={DK} strokeWidth="1.3" />
      <line x1="56" y1="-57" x2="26" y2="-34" stroke={DK} strokeWidth="1.3" />
      <rect x="26" y="-35" width="24" height="7" rx="3" fill={C} />
      {/* Left leg (swings forward) */}
      <g transform="translate(-5,-30)">
        <animateTransform attributeName="transform" additive="sum"
          type="rotate" values="24 4 0;-24 4 0;24 4 0" dur="0.47s" repeatCount="indefinite" />
        <rect x="-4" y="0" width="8" height="23" rx="4" fill={C} />
      </g>
      {/* Right leg (opposite phase) */}
      <g transform="translate(3,-30)">
        <animateTransform attributeName="transform" additive="sum"
          type="rotate" values="-24 4 0;24 4 0;-24 4 0" dur="0.47s" repeatCount="indefinite" />
        <rect x="-4" y="0" width="8" height="23" rx="4" fill={C} />
      </g>
    </g>
  );
}

/* ─── Child (smaller, following) ─── */
function Child({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx},${cy})`}>
      {/* Head */}
      <circle cx="0" cy="-50" r="9" fill={C} />
      {/* Body */}
      <rect x="-6" y="-41" width="12" height="21" rx="4" fill={C} />
      {/* Arms */}
      <rect x="-10" y="-38" width="6" height="14" rx="3" fill={C} transform="rotate(20 -7 -31)" />
      <rect x="4"  y="-38" width="6" height="14" rx="3" fill={C} transform="rotate(-15 7 -31)" />
      {/* Left leg */}
      <g transform="translate(-4,-20)">
        <animateTransform attributeName="transform" additive="sum"
          type="rotate" values="22 3 0;-22 3 0;22 3 0" dur="0.38s" begin="0.09s" repeatCount="indefinite" />
        <rect x="-3" y="0" width="6" height="18" rx="3" fill={C} />
      </g>
      {/* Right leg */}
      <g transform="translate(2,-20)">
        <animateTransform attributeName="transform" additive="sum"
          type="rotate" values="-22 3 0;22 3 0;-22 3 0" dur="0.38s" begin="0.09s" repeatCount="indefinite" />
        <rect x="-3" y="0" width="6" height="18" rx="3" fill={C} />
      </g>
    </g>
  );
}

/* ─── Dog (trotting, tail wagging) ─── */
function Dog({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx},${cy})`}>
      {/* Body */}
      <ellipse cx="0" cy="-15" rx="22" ry="10" fill={C} />
      {/* Head */}
      <circle cx="19" cy="-26" r="10" fill={C} />
      {/* Floppy ear */}
      <ellipse cx="15" cy="-19" rx="5" ry="8" fill="rgba(195,175,155,0.65)"
        transform="rotate(-18 15 -19)" />
      {/* Snout */}
      <rect x="25" y="-24" width="9" height="6" rx="3" fill="rgba(210,185,165,0.65)" />
      {/* Nose */}
      <circle cx="33" cy="-22" r="2.2" fill={DK} />
      {/* Eye */}
      <circle cx="21" cy="-29" r="2"   fill={DK} />
      {/* Tail (wagging) */}
      <g transform="translate(-21,-18)">
        <animateTransform attributeName="transform" additive="sum"
          type="rotate" values="18 0 0;-18 0 0;18 0 0" dur="0.28s" repeatCount="indefinite" />
        <path d="M0,0 Q-10,-12 -6,-22" stroke={C} strokeWidth="5"
          strokeLinecap="round" fill="none" />
      </g>
      {/* Front legs */}
      <g transform="translate(10,-5)">
        <animateTransform attributeName="transform" additive="sum"
          type="rotate" values="20 2 0;-20 2 0;20 2 0" dur="0.32s" repeatCount="indefinite" />
        <rect x="-2" y="0" width="5" height="11" rx="2" fill={C} />
      </g>
      <g transform="translate(6,-5)">
        <animateTransform attributeName="transform" additive="sum"
          type="rotate" values="-20 2 0;20 2 0;-20 2 0" dur="0.32s" repeatCount="indefinite" />
        <rect x="-2" y="0" width="5" height="11" rx="2" fill={C} />
      </g>
      {/* Back legs */}
      <g transform="translate(-10,-5)">
        <animateTransform attributeName="transform" additive="sum"
          type="rotate" values="-20 2 0;20 2 0;-20 2 0" dur="0.32s" repeatCount="indefinite" />
        <rect x="-2" y="0" width="5" height="11" rx="2" fill={C} />
      </g>
      <g transform="translate(-14,-5)">
        <animateTransform attributeName="transform" additive="sum"
          type="rotate" values="20 2 0;-20 2 0;20 2 0" dur="0.32s" repeatCount="indefinite" />
        <rect x="-2" y="0" width="5" height="11" rx="2" fill={C} />
      </g>
    </g>
  );
}

/* ─── House ─── */
function House({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx},${cy})`}>
      {/* Chimney */}
      <rect x="36" y="-124" width="16" height="38" rx="2" fill={G} opacity="0.85" />
      <circle cx="44" cy="-132" r="6" fill="rgba(245,239,230,0.22)" />
      <circle cx="50" cy="-141" r="4" fill="rgba(245,239,230,0.15)" />
      {/* Roof */}
      <polygon points="-82,-88  0,-126  82,-88" fill={G} opacity="0.92" />
      {/* Walls (split around door so people walk through gap) */}
      <rect x="-82" y="-88" width="59" height="88" fill={C} opacity="0.95" />
      <rect x="23"  y="-88" width="59" height="88" fill={C} opacity="0.95" />
      <rect x="-23" y="-88" width="46" height="22" fill={C} opacity="0.95" />
      {/* Door */}
      <rect x="-23" y="-66" width="46" height="66" rx="3" fill={M} opacity="0.82" />
      <path d="M-23,-66 Q0,-83 23,-66" fill={M} opacity="0.82" />
      <circle cx="13" cy="-33" r="3.5" fill={G} />
      {/* Windows */}
      <rect x="-69" y="-69" width="22" height="16" rx="2" fill={G} opacity="0.30" />
      <line x1="-58" y1="-69" x2="-58" y2="-53" stroke={G} strokeWidth="1" opacity="0.5" />
      <line x1="-69" y1="-61" x2="-47" y2="-61" stroke={G} strokeWidth="1" opacity="0.5" />
      <rect x="47"  y="-69" width="22" height="16" rx="2" fill={G} opacity="0.30" />
      <line x1="58" y1="-69" x2="58" y2="-53" stroke={G} strokeWidth="1" opacity="0.5" />
      <line x1="47" y1="-61" x2="69" y2="-61" stroke={G} strokeWidth="1" opacity="0.5" />
      {/* Step */}
      <rect x="-30" y="-3" width="60" height="6" rx="2" fill={G} opacity="0.55" />
    </g>
  );
}

export default function MovingAnimation() {
  return (
    <div className="w-full">
      <svg viewBox="0 0 1200 200" width="100%" style={{ display: 'block' }} aria-hidden="true">
        {/* Ground */}
        <line x1="0" y1={GY} x2="1200" y2={GY}
          stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

        {/* Family — SVG-native SMIL translate, fully reliable */}
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            from="-480 0"
            to="1300 0"
            dur="12s"
            repeatCount="indefinite"
          />
          <Dog   cx={30}  cy={GY} />
          <Child cx={130} cy={GY} />
          <Adult cx={240} cy={GY} />
        </g>

        {/* House — drawn last so family walks into it */}
        <House cx={1082} cy={GY} />
      </svg>
    </div>
  );
}
