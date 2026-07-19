import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, copy, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 cinematic-title">{title}</h2>
      {copy ? <p className="soft-copy mt-5">{copy}</p> : null}
    </motion.div>
  );
}
