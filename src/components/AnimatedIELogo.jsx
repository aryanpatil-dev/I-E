export default function AnimatedIELogo({ className = '', compact = false }) {
  const suffix = compact ? 'Compact' : 'Hero';

  if (compact) {
    return (
      <svg
        className={className}
        viewBox="0 0 1000 210"
        role="img"
        aria-labelledby="ieAceLogoCompactTitle"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="ieAceLogoCompactTitle">I&amp;E-ACE Innovation and Entrepreneurship Cell</title>
        <defs>
          <linearGradient id={`navText${suffix}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c9a03e" />
            <stop offset="44%" stopColor="#e5c06a" />
            <stop offset="100%" stopColor="#f0eeea" />
          </linearGradient>
          <filter id={`navShadow${suffix}`} x="-10%" y="-20%" width="120%" height="150%">
            <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.18" />
          </filter>
          <style>
            {`
              .nav-fade-${suffix} {
                opacity: 0;
                animation: navFadeUp${suffix} 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
              }
              .nav-sub-${suffix} { animation-delay: 0.25s; }
              @keyframes navFadeUp${suffix} {
                0% { opacity: 0; transform: translateY(18px); }
                100% { opacity: 1; transform: translateY(0); }
              }
            `}
          </style>
        </defs>
        <text
          className={`nav-fade-${suffix}`}
          x="20"
          y="98"
          fontFamily="'Arial Black', Impact, sans-serif"
          fontSize="84"
          fontWeight="900"
          fontStyle="italic"
          fill={`url(#navText${suffix})`}
          filter={`url(#navShadow${suffix})`}
          letterSpacing="1"
        >
          I&amp;E-ACE
        </text>
        <text
          className={`nav-fade-${suffix} nav-sub-${suffix}`}
          x="24"
          y="154"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="26"
          fontWeight="900"
          fill="#8a9bb5"
          letterSpacing="3"
        >
          INNOVATION AND ENTREPRENEURSHIP CELL
        </text>
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 1000 500"
      role="img"
      aria-labelledby="ieAceLogoHeroTitle"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="ieAceLogoHeroTitle">I&amp;E-ACE Innovation and Entrepreneurship Cell</title>
      <defs>
        <style>
          {`
            .fade-up-${suffix} {
              opacity: 0;
              animation: fadeUpAnim${suffix} 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            }
            .title-${suffix} {
              animation-delay: 0.2s;
            }
            .subtitle-${suffix} {
              animation-delay: 0.5s;
            }
            @keyframes fadeUpAnim${suffix} {
              0% {
                opacity: 0;
                transform: translateY(25px);
              }
              100% {
                opacity: 1;
                transform: translateY(0px);
              }
            }
          `}
        </style>

        <linearGradient id={`bgGrad${suffix}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#07111e" />
          <stop offset="40%" stopColor="#0d1b2a" />
          <stop offset="70%" stopColor="#1a3050" />
          <stop offset="100%" stopColor="#c9a03e" />
        </linearGradient>

        <linearGradient id={`glowLine${suffix}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e5c06a" stopOpacity="0" />
          <stop offset="20%" stopColor="#e5c06a" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="80%" stopColor="#e5c06a" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#e5c06a" stopOpacity="0" />
        </linearGradient>

        <pattern id={`grid${suffix}`} width="60" height="60" patternUnits="userSpaceOnUse" x="500" y="250">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <circle cx="0" cy="0" r="1.5" fill="rgba(255,255,255,0.7)" />
        </pattern>

        <filter id={`dropShadow${suffix}`} x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="4" dy="5" stdDeviation="4" floodColor="#000000" floodOpacity="0.6" />
        </filter>
      </defs>

      <rect width="1000" height="500" rx="30" fill={`url(#bgGrad${suffix})`} />
      <rect width="1000" height="500" rx="30" fill={`url(#grid${suffix})`} />

      <rect x="200" y="140" width="500" height="2" fill={`url(#glowLine${suffix})`} opacity="0.6" />
      <rect x="450" y="165" width="400" height="1.5" fill={`url(#glowLine${suffix})`} opacity="0.4" />
      <rect x="600" y="200" width="350" height="2.5" fill={`url(#glowLine${suffix})`} opacity="0.7" />

      <rect x="80" y="265" width="850" height="3" fill={`url(#glowLine${suffix})`} opacity="0.85" />
      <rect x="150" y="320" width="600" height="1.5" fill={`url(#glowLine${suffix})`} opacity="0.5" />
      <rect x="180" y="335" width="400" height="2" fill={`url(#glowLine${suffix})`} opacity="0.6" />

      <text
        className={`fade-up-${suffix} title-${suffix}`}
        x="500"
        y="255"
        fontFamily="'Arial Black', Impact, sans-serif"
        fontSize="110"
        fontWeight="900"
        fontStyle="italic"
        fill="#ffffff"
        textAnchor="middle"
        filter={`url(#dropShadow${suffix})`}
        letterSpacing="2"
      >
        I&amp;E-ACE
      </text>

      <text
        className={`fade-up-${suffix} subtitle-${suffix}`}
        x="500"
        y="300"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="22"
        fontWeight="bold"
        fill="#ffffff"
        textAnchor="middle"
        filter={`url(#dropShadow${suffix})`}
        letterSpacing="0.5"
      >
        Innovation and Entrepreneurship Cell
      </text>
    </svg>
  );
}
