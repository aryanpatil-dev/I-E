import { marqueeItems } from '../data/siteContent.js';

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative overflow-hidden border-y border-electric/10 bg-electric py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-electric to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-electric to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-6 whitespace-nowrap">
        {doubled.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-6">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-white">{item}</span>
            <span className="size-2 rounded-full bg-flare" />
          </span>
        ))}
      </div>
    </section>
  );
}
