import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Cpu,
  GraduationCap,
  Lightbulb,
  Target,
  UsersRound,
  Instagram,
  Linkedin,
  Compass,
  History
} from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { cellStats } from '../data/siteContent.js';

const pillars = [
  {
    icon: Lightbulb,
    title: 'Innovation Mindset',
    text: 'ACE IIC promotes ideation, problem framing, prototype design, and technology-based solutions for social benefit.',
  },
  {
    icon: Target,
    title: 'Incubation Discipline',
    text: 'IEDC helps students think through product value, business plans, costing, funding, marketing, and company formation.',
  },
  {
    icon: UsersRound,
    title: 'Entrepreneurship Community',
    text: 'ACE EMBER builds an entrepreneurial culture through E-Week, NEN association, and trained faculty support.',
  },
];

const capabilities = [
  {
    icon: Cpu,
    title: 'iLab and Hands-on Learning',
    text: 'An innovation and learning environment for technologies like IoT, automation, robotics, 3D printing, drones, and immersive media.',
  },
  {
    icon: Building2,
    title: 'Industry and Ecosystem Linkages',
    text: 'IIC and EMBER activity encourages interaction with mentors, industries, entrepreneurs, and professional networks.',
  },
  {
    icon: GraduationCap,
    title: 'Faculty-Led Student Growth',
    text: 'Faculty coordinators and trained mentors help students develop communication, leadership, product, and presentation skills.',
  },
];

const ieHistory = [
  {
    year: '2022',
    title: 'Formation of the Unified I&E Cell',
    text: 'To streamline the student innovation pipeline, Atharva College of Engineering consolidated its legacy entrepreneurship and incubation engines (ACE IIC, ACE EMBER, and IEDC) under a unified cell.',
  },
  {
    year: '2023',
    title: 'Diplomatic Simulates & Incubation Expansion',
    text: 'Launched the inaugural Model Senate and expanded seed-grant frameworks to support early-stage software and hardware innovations.',
  },
  {
    year: '2024',
    title: 'Biomimicry Workshops & CiiA Exhibitions',
    text: 'Conducted design-thinking sprints and prototype bootcamps. Student innovations like M-Park and Smart Traffic Systems represented the cell at national exhibitions.',
  },
  {
    year: '2025',
    title: 'The Phoenix Era & Finoverse Hackathons',
    text: 'Hosted major hackathons including Finoverse and Phoenix 2.O, pushing prototype development, Web3, and IoT design validation to new heights.',
  },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-paper pt-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(30,77,140,0.18),transparent_34rem),radial-gradient(circle_at_85%_18%,rgba(201,160,62,0.20),transparent_28rem)]" />
        <div className="page-shell grid gap-12 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="eyebrow">About ACE I&E Cell</p>
            <h1 className="mt-5 font-display text-5xl font-black leading-[0.96] text-ink sm:text-7xl">
              ACE I&E Cell is the space where ideas become prototypes.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              The Innovation and Entrepreneurship Cell represents the combined energy of ACE IIC,
              ACE EMBER, IEDC, and iLab: a practical campus pathway for students who want to identify
              problems, build solutions, and understand venture creation.
            </p>
          </motion.div>

          <Reveal>
            <div className="relative overflow-hidden rounded-lg border border-electric/10 bg-cloud shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
                alt="Students collaborating around laptops"
                className="h-[440px] w-full object-cover saturate-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-electric/70 via-electric/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/20 bg-cloud/90 p-5 text-ink shadow-soft backdrop-blur-xl">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-1 size-5 shrink-0 text-pulse" aria-hidden="true" />
                  <p className="text-sm leading-7 text-muted">
                    Built around student ownership, practical engineering, entrepreneurship education, and visible execution across departments.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Origin & Vision Section */}
      <section className="section-pad border-t border-electric/10 bg-cloud">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="h-full pr-0 lg:pr-8">
                <p className="eyebrow">Our Roots</p>
                <h2 className="mt-4 text-3xl font-black text-ink sm:text-4xl">Origin of I&E Cell</h2>
                <div className="mt-6 space-y-6 text-sm leading-7 text-muted sm:text-base">
                  <p>
                    Formed in the year <strong>2022</strong>, the Innovation & Entrepreneurship (I&E) Cell was established to serve as the unified engine for student innovation on campus.
                  </p>
                  <p>
                    By consolidating three distinct campus legacy bodies—ACE EMBER (E-Cell founded in 2008), the Innovation & Entrepreneurship Development Centre (IEDC founded in 2012), and the Atharva Institution Innovation Council (IIC established in 2018)—the I&E Cell created a unified, seamless pathway from creative curiosity to structured product incubation.
                  </p>
                  <p>
                    This consolidation allowed us to leverage decades of combined institutional experience, mentor networks, and funding pathways, providing our students with a single, comprehensive ecosystem to turn ambitious ideas into validated prototypes.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative h-full rounded-xl border border-electric/10 bg-mist/30 p-8 shadow-soft sm:p-10">
                <div className="absolute -right-8 -top-8 size-32 rounded-full bg-electric/5 blur-2xl" />
                
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-lg bg-electric/10 text-electric">
                    <Compass className="size-5" />
                  </div>
                  <h3 className="text-2xl font-black text-ink">Our Vision & Mission</h3>
                </div>

                <div className="mt-8 space-y-8">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-electric">Vision</h4>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      To build a vibrant and sustainable entrepreneurial ecosystem at Atharva, where students are empowered to translate breakthrough technology ideas into products of immense social and economic value.
                    </p>
                  </div>

                  <div className="border-t border-electric/10 pt-6">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-plasma">Mission</h4>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      To provide world-class mentoring, prototype design facilities (iLab), investor networking, and business model validation to foster a culture of creative self-reliance, leadership, and bold venture thinking.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-pad border-y border-electric/10 bg-mist/20">
        <div className="page-shell">
          <SectionHeading
            eyebrow="What We Do"
            title="ACE I&E Cell is not one activity. It is a student innovation pipeline."
            copy="It connects awareness, ideation, prototype development, entrepreneurship training, exhibition opportunities, and mentor-led venture thinking."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.08}>
                <article className="neon-card h-full">
                  <div className="mb-8 grid size-12 place-items-center rounded-lg border border-plasma/20 bg-plasma/10 text-plasma shadow-violet">
                    <pillar.icon className="size-6" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-black text-ink">{pillar.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-muted">{pillar.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Reach Section */}
      <section className="section-pad bg-cloud">
        <div className="page-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Our Impact</p>
            <h2 className="mt-4 text-4xl font-black text-ink sm:text-5xl">Our Reach</h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              Connecting our vibrant community of innovators, builders, and ecosystem leaders across professional networks and media.
            </p>
          </div>
          <Reveal>
            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
              {cellStats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-electric/15 bg-paper/60 p-5 text-center shadow-soft backdrop-blur-md">
                  <p className="text-3xl font-black text-electric">{stat.value}</p>
                  <p className="mt-2 text-xs font-bold leading-4 text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {/* Instagram Stat Card */}
            <Reveal>
              <div className="neon-card group h-full flex flex-col justify-between border-pink-500/10 hover:border-pink-500/30 hover:shadow-[0_18px_48px_rgba(236,72,153,0.15)] transition-all duration-300">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="grid size-12 place-items-center rounded-lg bg-pink-50 text-pink-600">
                      <Instagram className="size-6" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-pink-500 bg-pink-50 px-3 py-1 rounded-full">Community</span>
                  </div>
                  <h3 className="text-5xl font-black text-ink">630+</h3>
                  <p className="mt-2 text-lg font-bold text-ink">Instagram Followers</p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Vibrant daily updates, event highlights, design updates, and student spotlight features.
                  </p>
                </div>
                <div className="mt-8 border-t border-pink-500/10 pt-4">
                  <a
                    href="https://www.instagram.com/iandecell_ace/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-pink-600 hover:text-pink-700"
                  >
                    View Instagram Profile
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* LinkedIn Stat Card */}
            <Reveal delay={0.1}>
              <div className="neon-card group h-full flex flex-col justify-between border-blue-600/10 hover:border-blue-600/30 hover:shadow-[0_18px_48px_rgba(10,102,194,0.15)] transition-all duration-300">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="grid size-12 place-items-center rounded-lg bg-blue-50 text-blue-600">
                      <Linkedin className="size-6" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Professional</span>
                  </div>
                  <h3 className="text-5xl font-black text-ink">70+</h3>
                  <p className="mt-2 text-lg font-bold text-ink">LinkedIn Connections</p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Strong linkages with industry veterans, startup founders, institutional leaders, and alumni.
                  </p>
                </div>
                <div className="mt-8 border-t border-blue-600/10 pt-4">
                  <a
                    href="https://www.linkedin.com/company/atharva-college-of-engineering-s-innovation-entrepreneurship-cell/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-blue-600 hover:text-blue-700"
                  >
                    View LinkedIn Page
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="section-pad border-y border-electric/10 bg-mist/10">
        <div className="page-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">The Journey</p>
            <h2 className="mt-4 text-4xl font-black text-ink sm:text-5xl">Our History & Milestones</h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              A timeline showing the milestones, major events, and growth of the I&E Cell since 2022.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-[1fr_minmax(0,2fr)]">
            <div className="md:sticky md:top-28 md:h-max">
              <Reveal>
                <div className="rounded-xl border border-electric/10 bg-cloud p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-lg bg-electric/10 text-electric">
                      <History className="size-5" />
                    </div>
                    <h3 className="text-xl font-black text-ink">Building Legacy</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    Consolidating past work to support next-generation builders. Every milestone strengthens our incubator framework.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="relative border-l border-electric/10 pl-6 sm:pl-10 space-y-12">
              {ieHistory.map((item, index) => (
                <Reveal key={item.year} delay={index * 0.1}>
                  <div className="relative">
                    {/* Bullet */}
                    <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 size-4 rounded-full border border-white bg-electric shadow-neon" />
                    
                    <div className="rounded-xl border border-electric/5 bg-cloud/60 p-6 shadow-soft hover:bg-cloud hover:border-electric/10 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <span className="text-3xl font-black text-electric">{item.year}</span>
                        <h4 className="text-lg font-black text-ink">{item.title}</h4>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-pad bg-cloud">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Campus Capabilities"
            title="Where technical learning meets venture thinking."
            copy="These campus resources give students the tools, mentors, and technical exposure needed to build confidently."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {capabilities.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <article className="neon-card h-full">
                  <div className="mb-8 grid size-12 place-items-center rounded-lg bg-flare/20 text-flare">
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

      {/* Footer CTA Section */}
      <section className="pb-20 pt-12 sm:pb-24 lg:pb-28 bg-paper">
        <div className="page-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-lg border border-electric/10 bg-cloud p-8 shadow-soft sm:p-10 lg:p-14">
              <div className="absolute inset-0 bg-grid-lines bg-[length:38px_38px] opacity-30" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="eyebrow">Join the Builder Circle</p>
                  <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-ink sm:text-5xl">
                    Bring an idea, a skill, or pure curiosity. Leave with sharper execution.
                  </h2>
                </div>
                <Link
                  to="/initiatives"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-flare px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-ink shadow-dropglow transition hover:-translate-y-1 hover:bg-electric hover:text-white"
                >
                  See Initiatives
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
