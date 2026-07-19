import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { timelineYears } from '../data/siteContent.js';

function TimelineItem({ item }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.45, once: false });

  return (
    <motion.article
      ref={ref}
      animate={{
        opacity: inView ? 1 : 0.55,
        x: inView ? 0 : 16,
      }}
      transition={{ duration: 0.42, ease: 'easeOut' }}
      className="relative grid gap-3 border-l border-electric/20 py-8 pl-8 sm:pl-10"
    >
      <motion.span
        animate={{
          scale: inView ? 1.22 : 1,
          backgroundColor: inView ? '#3730a3' : 'rgba(55,48,163,0.24)',
          boxShadow: inView ? '0 0 28px rgba(55,48,163,0.35)' : '0 0 0 rgba(0,0,0,0)',
        }}
        className="absolute -left-2 top-10 size-4 rounded-full border border-white"
      />
      <p className="text-xs font-black uppercase tracking-[0.18em] text-plasma">{item.date}</p>
      <h3 className="text-2xl font-black text-ink">{item.title}</h3>
      <p className="max-w-2xl text-sm leading-7 text-muted">{item.text}</p>
    </motion.article>
  );
}

export default function Timeline() {
  return (
    <div className="mt-14 grid gap-14">
      {timelineYears.map((group) => (
        <div key={group.year} className="grid gap-10 md:grid-cols-[220px_minmax(0,1fr)]">
          <div className="md:sticky md:top-28 md:h-max">
            <p className="text-6xl font-black text-electric sm:text-7xl">{group.year}</p>
            <p className="mt-4 text-sm leading-7 text-muted">{group.summary}</p>
          </div>
          <div>
            {group.items.map((item) => (
              <TimelineItem key={`${group.year}-${item.title}`} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
