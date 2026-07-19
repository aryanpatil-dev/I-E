export default function GeometricIcon() {
  return (
    <div className="relative mx-auto size-28 sm:size-36" aria-hidden="true">
      <div className="absolute inset-0 animate-orbit rounded-lg border border-electric/50 shadow-neon" />
      <div className="absolute inset-4 animate-[orbit_12s_linear_infinite_reverse] rounded-full border border-plasma/50 shadow-violet" />
      <div className="absolute inset-9 rotate-45 animate-pulseGlow border border-flare/60 bg-flare/10" />
      <div className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric shadow-neon" />
    </div>
  );
}
