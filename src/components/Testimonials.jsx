import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/siteContent.js';

export default function Testimonials() {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);
  const [dragLimit, setDragLimit] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current || !wrapperRef.current) return;
      const difference = trackRef.current.scrollWidth - wrapperRef.current.offsetWidth;
      setDragLimit(Math.max(difference, 0));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <div ref={wrapperRef} className="mt-12 overflow-hidden">
      <motion.div
        ref={trackRef}
        drag="x"
        dragConstraints={{ left: -dragLimit, right: 0 }}
        dragElastic={0.08}
        className="flex cursor-grab gap-5 active:cursor-grabbing"
      >
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="neon-card min-h-[280px] w-[82vw] shrink-0 sm:w-[430px]"
          >
            <Quote className="mb-8 size-9 text-electric" aria-hidden="true" />
            <p className="text-xl font-semibold leading-8 text-ink">"{item.quote}"</p>
            <div className="mt-8 border-t border-electric/10 pt-5">
              <p className="font-bold text-ink">{item.name}</p>
              <p className="mt-1 text-sm text-muted">{item.role}</p>
            </div>
          </article>
        ))}
      </motion.div>
    </div>
  );
}
