import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { initiatives } from '../data/siteContent.js';

export default function Initiatives() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate min-h-[60vh] overflow-hidden bg-paper pt-28 flex items-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_8%,rgba(201,160,62,0.18),transparent_28rem),radial-gradient(circle_at_88%_30%,rgba(30,77,140,0.22),transparent_30rem),linear-gradient(180deg,#07111e,#0d1b2a_55%,#07111e)]" />
        <div className="absolute inset-0 -z-10 bg-grid-lines bg-[length:54px_54px] opacity-40" />
        <div className="page-shell flex flex-col justify-center py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl"
          >
            <p className="eyebrow text-flare">Action & Execution</p>
            <h1 className="mt-6 font-display text-[3.2rem] font-black leading-none text-ink sm:text-[5rem] lg:text-[7rem] tracking-tight">
              OUR INITIATIVES
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Consolidating tech innovation, policy debates, financial workshops, and creative design sprints. Explore the flagship events driving Atharva\'s entrepreneurship ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Showcase Section */}
      <section className="section-pad border-y border-electric/10 bg-cloud">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Portfolio"
            title="Sprints, hackathons, and global debates."
            copy="Every initiative under the I&E Cell is structured to challenge assumptions, encourage prototype development, and hone presentation skills."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {initiatives.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.08}>
                <article className="neon-card h-full p-0 flex flex-col justify-between group">
                  <div>
                    {/* Image Area with Sheen & Zoom */}
                    <div className="image-sheen relative h-56 overflow-hidden rounded-t-xl bg-slate-100">
                      <img
                        src={item.image}
                        alt={`Visual for ${item.title}`}
                        loading="lazy"
                        width="400"
                        height="224"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 saturate-125"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-electric/40 via-electric/5 to-transparent opacity-80" />
                    </div>

                    {/* Content Area */}
                    <div className="p-6">
                      <h3 className="text-2xl font-black text-ink tracking-tight group-hover:text-electric transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-6 text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer / interactive link */}
                  <div className="p-6 pt-0 border-t border-electric/5 mt-4">
                    <Link
                      to={`/initiatives/${item.id}`}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-electric group-hover:translate-x-1.5 transition-all duration-300 hover:text-plasma"
                    >
                      View Event Archive
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Info Callout Section */}
      <section className="section-pad bg-mist/20">
        <div className="page-shell">
          <Reveal>
            <div className="rounded-xl border border-electric/10 bg-cloud p-8 shadow-soft flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-lg bg-electric/10 text-electric">
                  <Lightbulb className="size-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-ink">Want to collaborate?</h3>
                  <p className="mt-2 text-sm leading-6 text-muted max-w-xl">
                    We partner with student organizations, technical chapters, industry consultants, and venture funds to run high-quality hackathons and clinics. Reach out to coordinate an ideation cycle.
                  </p>
                </div>
              </div>
              <a
                href="mailto:aceicell@atharvacoe.ac.in"
                className="inline-flex items-center justify-center rounded-full bg-electric px-6 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-white shadow-neon transition hover:-translate-y-0.5 hover:bg-plasma"
              >
                Get In Touch
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
