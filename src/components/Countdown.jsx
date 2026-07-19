import { useEffect, useState } from 'react';

function toSegments(seconds) {
  const safeSeconds = Math.max(seconds, 0);
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const secs = safeSeconds % 60;
  return [hours, minutes, secs].map((value) => String(value).padStart(2, '0'));
}

export default function Countdown({ initialSeconds = 14 * 3600 + 2 * 60 + 59 }) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [hours, minutes, seconds] = toSegments(secondsLeft);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSecondsLeft((value) => (value > 0 ? value - 1 : 0));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3 text-center sm:gap-4" aria-label={`${hours} hours ${minutes} minutes ${seconds} seconds remaining`}>
      {[
        ['Hours', hours],
        ['Minutes', minutes],
        ['Seconds', seconds],
      ].map(([label, value]) => (
        <div key={label} className="rounded-lg border border-electric/10 bg-cloud/90 p-4 shadow-soft backdrop-blur-xl">
          <div className="font-display text-3xl font-black text-electric sm:text-5xl">{value}</div>
          <div className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-muted">{label}</div>
        </div>
      ))}
    </div>
  );
}
