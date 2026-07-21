import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpenCheck,
  CalendarDays,
  ChevronRight,
  Lightbulb,
  Network,
  Rocket,
  UsersRound,
} from 'lucide-react';
import AnimatedIELogo from '../components/AnimatedIELogo.jsx';
import Marquee from '../components/Marquee.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Testimonials from '../components/Testimonials.jsx';
import { cellStats } from '../data/siteContent.js';

const HeroScene = lazy(() => import('../components/HeroScene.jsx'));

const joinCards = [
  {
    title: 'ACE IIC Mentorship',
    text: 'Learn innovation methods from faculty mentors, IIC ambassadors, and experienced startup ecosystem voices.',
    icon: Network,
  },
  {
    title: 'Prototype Culture',
    text: 'Use ACE IIC and iLab energy to move from an idea note into a working proof of concept and pitch deck.',
    icon: Lightbulb,
  },
  {
    title: 'Venture Readiness',
    text: 'IEDC-style guidance helps teams think about costing, funding, market fit, marketing, and company formation.',
    icon: Rocket,
  },
];

const campusBlocks = [
  {
    title: 'ACE IIC',
    text: 'The Innovation Cell recognized by MHRD norms in November 2018, with a mission to nurture innovators and technology-based solutions.',
    icon: BadgeCheck,
  },
  {
    title: 'ACE EMBER',
    text: 'The entrepreneurship cell started in 2008 and grew through NEN association, trained faculty mentors, and E-Week.',
    icon: CalendarDays,
  },
  {
    title: 'IEDC',
    text: 'The Innovation and Entrepreneurship Development Centre established in 2012 to support student product ideas with market value.',
    icon: BookOpenCheck,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-paper pt-24">
        <Suspense fallback={<div className="absolute inset-0 bg-[#07111e]" />}>
          <HeroScene />
        </Suspense>
        <div className="page-shell relative z-10 pb-16 pt-6 sm:pb-20 sm:pt-6">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-7xl"
          >
            <div className="relative overflow-hidden rounded-lg border border-electric/10 bg-cloud p-0 shadow-soft">
              <div className="absolute -right-8 -top-8 size-32 rounded-full bg-flare/30 blur-2xl" />
              <div className="absolute -bottom-10 -left-8 size-36 rounded-full bg-electric/20 blur-2xl" />
              
              <AnimatedIELogo className="relative z-10 block aspect-[2/1] w-full" />

              {/* Overlay Top-Left: Parent Organizations Logos (Theme Matched) */}
              <div className="absolute left-3 top-3 z-20 flex gap-1.5 sm:left-5 sm:top-5 sm:gap-2.5">
                <div className="bg-black p-0.5 sm:p-1.5 rounded border border-electric/20 shadow-[0_4px_12px_rgba(201,160,62,0.12)] h-7 w-auto sm:h-11 md:h-14 lg:h-16 flex items-center justify-center">
                  <img
                    src="/assets/logos/Atharva_University_Logo.jpeg"
                    alt="Atharva University"
                    className="h-full w-auto object-contain rounded"
                  />
                </div>
              </div>

              {/* Overlay Top-Center: College Logo (Theme Matched) */}
              <div className="absolute left-1/2 -translate-x-1/2 top-3 z-20 flex sm:top-5">
                <div className="bg-white p-0.5 sm:p-1.5 rounded border border-electric/20 shadow-[0_4px_12px_rgba(201,160,62,0.12)] h-7 w-auto sm:h-11 md:h-14 lg:h-16 flex items-center justify-center">
                  <img
                    src="/assets/logos/Atharva_college_logo.jpeg"
                    alt="Atharva College of Engineering"
                    className="h-full w-auto object-contain rounded"
                  />
                </div>
              </div>

              {/* Overlay Top-Right: Cell & Council Logos (Theme Matched) */}
              <div className="absolute right-3 top-3 z-20 flex gap-1.5 sm:right-5 sm:top-5 sm:gap-2.5">
                <div className="bg-white p-0.5 sm:p-1.5 rounded border border-electric/20 shadow-[0_4px_12px_rgba(201,160,62,0.12)] h-7 w-auto sm:h-11 md:h-14 lg:h-16 flex items-center justify-center">
                  <img
                    src="/assets/logos/IIC_Logo.jpeg"
                    alt="Institution's Innovation Council"
                    className="h-full w-auto object-contain rounded"
                  />
                </div>
              </div>
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-base font-semibold leading-8 text-muted sm:text-lg">
              A student-led innovation ecosystem connecting ACE IIC, ACE EMBER, IEDC, iLab,
              faculty mentorship, prototype culture, and entrepreneurship programs.
            </p>
            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
              {cellStats.map((stat) => (
                <div key={stat.label} className="rounded-lg bg-cloud/90 p-4 text-center shadow-soft">
                  <p className="text-2xl font-black text-electric">{stat.value}</p>
                  <p className="mt-2 text-[11px] font-bold leading-4 text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/initiatives"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-electric px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-neon transition hover:-translate-y-1 hover:bg-plasma"
              >
                Explore Initiatives
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href="#why-join"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-electric/20 bg-cloud/90 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-ink shadow-soft transition hover:-translate-y-1 hover:border-flare hover:text-electric"
              >
                Why Join
                <ChevronRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="section-pad bg-paper">
        <div className="page-shell">
          <SectionHeading
            eyebrow="The ACE Ecosystem"
            title="One campus, three strong engines for entrepreneurship."
            copy="The ecosystem connects recognized innovation council work, entrepreneurship programming, and venture development support."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {campusBlocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 0.08}>
                <article className="neon-card h-full">
                  <div className="mb-8 grid size-14 place-items-center rounded-lg bg-electric/10 text-electric">
                    <block.icon className="size-7" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-black text-ink">{block.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-muted">{block.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section id="why-join" className="section-pad relative bg-cloud">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Why Join ACE I&E Cell"
            title="Get the structure to make student ideas real."
            copy="The cell gives students a route from curiosity to prototype, from prototype to validation, and from validation to an entrepreneurial pathway."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {joinCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <article className="neon-card h-full">
                  <div className="mb-9 grid size-12 place-items-center rounded-lg border border-electric/20 bg-electric/10 text-electric shadow-neon">
                    <card.icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-black text-ink">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* Testimonials / Voices Section */}
      <section className="section-pad border-t border-electric/10 bg-paper">
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionHeading
              eyebrow="Voices"
              title="Mentors shaping the ACE startup culture."
              copy="Faculty-led mentoring is central to ACE IIC, IEDC, and entrepreneurship development."
            />
            <Reveal className="hidden justify-end lg:flex">
              <div className="grid size-20 place-items-center rounded-lg border border-pulse/20 bg-pulse/10 text-pulse shadow-soft">
                <UsersRound className="size-9" aria-hidden="true" />
              </div>
            </Reveal>
          </div>
          <Testimonials />
        </div>
      </section>
    </>
  );
}
