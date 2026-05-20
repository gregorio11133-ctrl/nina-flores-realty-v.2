'use client';

const CREAM  = 'rgba(245,239,230,0.92)';
const GOLD   = '#C9A84C';
const MAROON = '#6B1A2A';
const DARK   = 'rgba(80,10,20,0.55)';

/* ── Single cartoon person carrying a box ── */
function Person() {
  return (
    <g>
      {/* Head */}
      <circle cx="0" cy="-78" r="13" fill={CREAM} />
      {/* Hair */}
      <path d="M-13,-84 Q0,-98 13,-84" fill="rgba(80,40,20,0.5)" />
      {/* Box held at chest */}
      <rect x="-21" y="-65" width="42" height="30" rx="4" fill={GOLD} />
      {/* Box X lines */}
      <line x1="-21" y1="-65" x2="21" y2="-35" stroke={DARK} strokeWidth="1.5" />
      <line x1="21"  y1="-65" x2="-21" y2="-35" stroke={DARK} strokeWidth="1.5" />
      {/* Arms (peeking under box) */}
      <rect x="-24" y="-42" width="8"  height="10" rx="4" fill={CREAM} />
      <rect x="16"  y="-42" width="8"  height="10" rx="4" fill={CREAM} />
      {/* Torso */}
      <rect x="-9" y="-35" width="18" height="20" rx="5" fill={CREAM} />
      {/* Left leg */}
      <g className="leg-l">
        <rect x="-13" y="-15" width="10" height="22" rx="5" fill={CREAM} />
      </g>
      {/* Right leg */}
      <g className="leg-r">
        <rect x="3" y="-15" width="10" height="22" rx="5" fill={CREAM} />
      </g>
    </g>
  );
}

/* ── House ── drawn last so people appear to walk into it ── */
function House() {
  return (
    /* ground baseline at y=0 here, translate applied by caller */
    <g>
      {/* Chimney */}
      <rect x="52" y="-148" width="22" height="42" rx="3" fill="rgba(201,168,76,0.75)" />
      {/* Smoke puffs */}
      <circle cx="63" cy="-158" r="7" fill="rgba(245,239,230,0.25)" />
      <circle cx="70" cy="-168" r="5" fill="rgba(245,239,230,0.18)" />
      {/* Roof */}
      <polygon points="-88,-110 0,-170 88,-110" fill={GOLD} />
      {/* Roof shadow line */}
      <line x1="-88" y1="-110" x2="88" y2="-110" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
      {/* Left wall section */}
      <rect x="-88" y="-110" width="62" height="110" fill={CREAM} />
      {/* Right wall section */}
      <rect x="26" y="-110" width="62" height="110" fill={CREAM} />
      {/* Wall top strip (above door gap) */}
      <rect x="-26" y="-110" width="52" height="28" fill={CREAM} />
      {/* Door opening — dark, so people "enter" it */}
      <rect x="-26" y="-82" width="52" height="82" rx="3" fill={MAROON} />
      {/* Door arch */}
      <path d="M-26,-82 Q0,-100 26,-82" fill={MAROON} />
      {/* Door handle */}
      <circle cx="14" cy="-42" r="4" fill={GOLD} />
      {/* Left window */}
      <rect x="-72" y="-90" width="28" height="22" rx="3" fill="rgba(201,168,76,0.35)" />
      <line x1="-58" y1="-90" x2="-58" y2="-68" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" />
      <line x1="-72" y1="-79" x2="-44" y2="-79" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" />
      {/* Right window */}
      <rect x="44" y="-90" width="28" height="22" rx="3" fill="rgba(201,168,76,0.35)" />
      <line x1="58" y1="-90" x2="58" y2="-68" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" />
      <line x1="44" y1="-79" x2="72" y2="-79" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" />
      {/* Step */}
      <rect x="-34" y="-4" width="68" height="8" rx="2" fill="rgba(201,168,76,0.5)" />
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
          0%, 100% { transform-box: fill-box; transform-origin: 50% 0%; transform: rotate(28deg); }
          50%       { transform-box: fill-box; transform-origin: 50% 0%; transform: rotate(-28deg); }
        }
        @keyframes legR {
          0%, 100% { transform-box: fill-box; transform-origin: 50% 0%; transform: rotate(-28deg); }
          50%       { transform-box: fill-box; transform-origin: 50% 0%; transform: rotate(28deg); }
        }
        @keyframes bob {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-3px); }
        }
        .person-a { animation: march 9s  0s linear infinite; }
        .person-b { animation: march 9s -3s linear infinite; }
        .person-c { animation: march 9s -6s linear infinite; }
        .leg-l    { animation: legL 0.46s ease-in-out infinite; }
        .leg-r    { animation: legR 0.46s ease-in-out infinite; }
      `}</style>

      <div className="relative w-full overflow-hidden" style={{ height: 140 }}>
        <svg
          viewBox="0 0 1200 140"
          preserveAspectRatio="xMidYMax meet"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Ground line */}
          <line x1="0" y1="128" x2="1200" y2="128" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

          {/* Persons — drawn before house so house covers them */}
          <g className="person-a" transform="translate(0, 128)"><Person /></g>
          <g className="person-b" transform="translate(0, 128)"><Person /></g>
          <g className="person-c" transform="translate(0, 128)"><Person /></g>

          {/* House — drawn last, sits on top of people */}
          <g transform="translate(1095, 128)"><House /></g>
        </svg>
      </div>
    </>
  );
}
