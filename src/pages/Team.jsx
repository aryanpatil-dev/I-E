import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, ChevronDown, Award, Users } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { currentTeam, yearlyArchives, ocMembers } from '../data/siteContent.js';

function TeamMemberCard({ member }) {
  const isDefaultImage = member.image === '/assets/team/default.png';
  const positionStyle = isDefaultImage
    ? { objectPosition: 'center center' }
    : { objectPosition: member.imagePosition || 'center 15%' };

  return (
    <article className="relative bg-slate-900/95 backdrop-blur-xl rounded-xl p-6 pt-16 pb-8 text-center border border-white/5 shadow-soft hover:shadow-neon hover:-translate-y-1 transition-all duration-300">
      {/* Center-aligned Overlapping Avatar */}
      <div className="absolute -top-14 left-1/2 -translate-x-1/2 size-28 rounded-full border-4 border-slate-900 overflow-hidden bg-slate-800 shadow-md">
        <img
          src={member.image}
          alt={member.name}
          style={positionStyle}
          className="h-full w-full object-cover saturate-110 hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = '/assets/team/default.png';
            e.target.style.objectPosition = 'center center';
          }}
        />
      </div>

      <h3 className="text-xl font-black text-flare tracking-tight leading-tight">
        {member.name}
      </h3>
      <p className="mt-2 text-sm font-semibold leading-5 text-white/70">
        {member.role}
      </p>

      {/* Optional LinkedIn profile link */}
      <div className="mt-5 flex justify-center gap-3">
        <a
          href={member.linkedin || '#'}
          target="_blank"
          rel="noreferrer"
          className="text-white/40 hover:text-flare transition-colors p-1 rounded-full hover:bg-white/5"
          aria-label={`${member.name}'s LinkedIn`}
        >
          <Linkedin className="size-4" />
        </a>
      </div>
    </article>
  );
}

export default function Team() {
  const [selectedYear, setSelectedYear] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Group team members for hierarchical grid layout
  const topMembers = currentTeam.filter(m => ['ceo', 'coo'].includes(m.role.toLowerCase()));
  const otherMembers = currentTeam.filter(m => !['ceo', 'coo'].includes(m.role.toLowerCase()));

  // Archive groupings
  const selectedYearTeam = yearlyArchives[selectedYear] || [];
  const selectedYearTop = selectedYearTeam.filter(m =>
    ['ceo', 'cfo', 'overall coordinator', 'chair person', 'vice chair person', 'executive director', 'coo'].includes(m.role.toLowerCase())
  );
  const selectedYearOthers = selectedYearTeam.filter(m =>
    !['ceo', 'cfo', 'overall coordinator', 'chair person', 'vice chair person', 'executive director', 'coo'].includes(m.role.toLowerCase())
  );

  const handleSelectYear = (year) => {
    setSelectedYear(year);
    setDropdownOpen(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate bg-paper pt-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(30,77,140,0.16),transparent_34rem),radial-gradient(circle_at_85%_18%,rgba(201,160,62,0.18),transparent_28rem)]" />
        <div className="page-shell pb-16 pt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="eyebrow">Our Core</p>
            <h1 className="mt-5 font-display text-5xl font-black leading-none text-ink sm:text-6xl tracking-tight">
              Meet Our Team
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted">
              The builders, leaders, and innovation ambassadors driving the initiatives, workshops, and startup culture at Atharva.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Team Display Section */}
      <section className="section-pad border-t border-electric/10 bg-cloud">
        <div className="page-shell">
          {/* Top Level Hierarchical Grid (CEO & CFO) */}
          {topMembers.length > 0 && (
            <div className="mb-20">
              <div className={`grid gap-x-8 gap-y-16 mx-auto ${topMembers.length === 1
                ? 'grid-cols-1 max-w-sm'
                : 'grid-cols-1 sm:grid-cols-2 max-w-2xl'
                }`}>
                {topMembers.map((member, index) => (
                  <Reveal key={member.name} delay={index * 0.1}>
                    <TeamMemberCard member={member} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* Core Heads and Members Grid */}
          <div className="grid gap-x-8 gap-y-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {otherMembers.map((member, index) => (
              <Reveal key={member.name} delay={(index % 4) * 0.08}>
                <TeamMemberCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OC (Organizing Committee) Members Section */}
      <section className="section-pad border-t border-electric/10 bg-cloud">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Organizing Committee"
            title="OC Members"
            copy="The dedicated students coordinating the logistics, operations, outreach, and execution of our annual programs."
            align="center"
          />

          <div className="mt-14 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {ocMembers.map((member, index) => (
              <Reveal key={member.name} delay={(index % 4) * 0.05}>
                <div className="bg-slate-900/95 backdrop-blur-md rounded-lg p-5 flex items-center justify-between border border-white/5 shadow-soft hover:shadow-neon hover:border-flare/20 hover:-translate-y-0.5 transition-all duration-300">
                  <span className="text-sm font-bold text-white/95 tracking-tight">{member.name}</span>
                  <a
                    href={member.linkedin || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/40 hover:text-flare transition-colors p-1.5 rounded-full hover:bg-white/5"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="size-4" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Year Archive Dropdown Section */}
      <section className="section-pad border-t border-electric/10 bg-mist/20">
        <div className="page-shell flex flex-col items-center">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <p className="eyebrow">Archives</p>
            <h2 className="mt-4 text-3xl font-black text-ink tracking-tight">View Team By Year</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Select an academic year below to view the past office bearers and coordinators.
            </p>
          </div>

          {/* Styled Select Dropdown */}
          <div className="relative w-64 z-30">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex w-full items-center justify-between rounded-lg border border-electric/15 bg-cloud px-5 py-3 text-sm font-bold text-ink shadow-soft hover:border-electric/30 transition-all duration-200"
            >
              <span>{selectedYear || 'Select Academic Year'}</span>
              <ChevronDown className={`size-4 text-muted transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 right-0 mt-2 rounded-lg border border-electric/10 bg-cloud p-1 shadow-soft overflow-hidden"
                >
                  {Object.keys(yearlyArchives).map((year) => (
                    <button
                      key={year}
                      onClick={() => handleSelectYear(year)}
                      className={`flex w-full items-center px-4 py-2.5 text-sm font-semibold rounded-md transition-colors ${selectedYear === year
                        ? 'bg-electric text-white'
                        : 'text-ink hover:bg-electric/10 hover:text-electric'
                        }`}
                    >
                      {year}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Dynamic Yearly Section Container */}
          <AnimatePresence mode="wait">
            {selectedYear && (
              <motion.div
                key={selectedYear}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.3 }}
                className="mt-16 w-full"
              >
                <div className="mx-auto max-w-5xl">
                  <div className="border-b border-electric/10 pb-4 mb-16 flex items-center justify-between">
                    <h3 className="text-2xl font-black text-ink tracking-tight">Team Collection: {selectedYear}</h3>
                    {yearlyArchives[selectedYear] ? (
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-pulse bg-pulse/10 px-3 py-1 rounded-full border border-pulse/20">Archive Loaded</span>
                    ) : (
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-flare bg-flare/10 px-3 py-1 rounded-full border border-flare/20">Coming Soon</span>
                    )}
                  </div>

                  {!yearlyArchives[selectedYear] ? (
                    /* Mock placeholder cards representing structure */
                    <div className="relative overflow-hidden rounded-xl border border-electric/10 bg-cloud/50 p-8 sm:p-12 shadow-soft">
                      {/* Glassy overlay block */}
                      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-cloud/70 backdrop-blur-md text-center p-6">
                        <div className="grid size-12 place-items-center rounded-lg bg-flare/10 text-flare mb-4 animate-pulse">
                          <Award className="size-6" />
                        </div>
                        <h4 className="text-xl font-black text-ink">Compilation in Progress</h4>
                        <p className="mt-2 text-sm text-muted max-w-md">
                          We are currently compiling past coordinator records and office bearer directories for the academic year {selectedYear}. Stay tuned!
                        </p>
                      </div>

                      {/* Faded Team Cards inside background */}
                      <div className="grid gap-x-8 gap-y-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 opacity-30 select-none pointer-events-none">
                        {[
                          { name: 'Coordinator Name', role: 'Overall Coordinator', image: '/assets/team/default.png' },
                          { name: 'Leader Name', role: 'Technical Head', image: '/assets/team/default.png' },
                          { name: 'Officer Name', role: 'Design Head', image: '/assets/team/default.png' },
                        ].map((mockMember, i) => (
                          <div key={i} className="relative bg-slate-900 rounded-xl p-6 pt-16 pb-8 text-center border border-white/5">
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 size-24 rounded-full border-4 border-slate-900 bg-slate-800" />
                            <h5 className="text-lg font-black text-flare">{mockMember.name}</h5>
                            <p className="mt-1 text-xs text-white/50">{mockMember.role}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Real Archive Grid Display */
                    <div className="space-y-16">
                      {/* Top Level (CEO & CFO Centered) */}
                      {/* Top Level (CEO/CFO/Overall Coordinators) */}
                      {selectedYearTop.length > 0 && (
                        <div className={`grid gap-x-8 gap-y-16 mx-auto ${selectedYearTop.length === 1
                          ? 'grid-cols-1 max-w-sm'
                          : 'grid-cols-1 sm:grid-cols-2 max-w-2xl'
                          }`}>
                          {selectedYearTop.map((member, index) => (
                            <Reveal key={member.name} delay={index * 0.1}>
                              <TeamMemberCard member={member} />
                            </Reveal>
                          ))}
                        </div>
                      )}

                      {/* Other Core Members Grid */}
                      {selectedYearOthers.length > 0 && (
                        <div className="grid gap-x-8 gap-y-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-8">
                          {selectedYearOthers.map((member, index) => (
                            <Reveal key={member.name} delay={(index % 4) * 0.08}>
                              <TeamMemberCard member={member} />
                            </Reveal>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
