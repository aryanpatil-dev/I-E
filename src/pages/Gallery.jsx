import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2, Trophy, Image as ImageIcon } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';

// Moments in the main gallery
const galleryMoments = [
  {
    id: 1,
    src: '/assets/gallery/Inaug.webp',
    alt: 'I&E Cell Inauguration Ceremony',
    category: 'Summit',
  },
  {
    id: 2,
    src: '/assets/gallery/Inaug photo.webp',
    alt: 'I&E Cell Inauguration Group',
    category: 'Workshop',
  },
  {
    id: 3,
    src: '/assets/gallery/Inaug1.webp',
    alt: 'I&E Cell Inauguration Launch',
    category: 'Hackathon',
  },
  {
    id: 4,
    src: '/assets/gallery/Inaug Photo 2.webp',
    alt: 'I&E Cell Inauguration Stage',
    category: 'Summit',
  },
  {
    id: 5,
    src: '/assets/gallery/MUN 2024 Closing.webp',
    alt: 'MUN 2024 Closing Group',
    category: 'Summit',
  },
  {
    id: 6,
    src: '/assets/gallery/MUN 2024 Closing 2.webp',
    alt: 'MUN 2024 Closing Highlights',
    category: 'Workshop',
  },
  {
    id: 7,
    src: '/assets/gallery/MUN-2024-Closing-3.webp',
    alt: 'MUN 2024 Closing Awards',
    category: 'Hackathon',
  },
  {
    id: 8,
    src: '/assets/gallery/MUN 2024 Closing 4.webp',
    alt: 'MUN 2024 Closing Stage',
    category: 'Hackathon',
  },
  {
    id: 9,
    src: '/assets/gallery/MUN 2025 Closing.webp',
    alt: 'MUN 2025 Closing Ceremony',
    category: 'Summit',
  },
  {
    id: 10,
    src: '/assets/gallery/MUN-2025-Closing-2.webp',
    alt: 'MUN 2025 Closing Winners',
    category: 'Hackathon',
  },
  {
    id: 11,
    src: '/assets/gallery/MUN-2025-Closing-3.webp',
    alt: 'MUN 2025 Closing Highlights',
    category: 'Workshop',
  },
  {
    id: 12,
    src: '/assets/gallery/MUN 2025 Closing 4.webp',
    alt: 'MUN 2025 Closing Group',
    category: 'Workshop',
  },
];

// Carousel slides (order: senate, then mun, then finnoverse)
const winnerSlides = [
  {
    image: '/assets/Winners/Winners Senate.webp',
    title: 'Model Senate Winners',
    description: 'Outstanding delegates recognized for leadership and policy solutions at the Model Senate.',
  },
  {
    image: '/assets/Winners/MUN 2024 Winners.webp',
    title: 'Model United Nations Winners',
    description: 'Award-winning delegacy performance and diplomacy at the annual ACE MUN.',
  },
  {
    image: '/assets/Winners/Finnoverse Winners.webp',
    title: 'Finnoverse FinTech Winners',
    description: 'Securing top honors for blockchain and decentralized finance pitch ideas.',
  },
];

export default function Gallery() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Auto-play winner carousel every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % winnerSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + winnerSlides.length) % winnerSlides.length);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % winnerSlides.length);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + galleryMoments.length) % galleryMoments.length);
  };

  const handleNextLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % galleryMoments.length);
  };

  return (
    <>
      {/* Page Header */}
      <section className="relative isolate bg-paper pt-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(30,77,140,0.16),transparent_34rem),radial-gradient(circle_at_85%_18%,rgba(201,160,62,0.18),transparent_28rem)]" />
        <div className="page-shell pb-12 pt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="eyebrow">Captured Milestones</p>
            <h1 className="mt-5 font-display text-5xl font-black leading-none text-ink sm:text-6xl tracking-tight">
              I&E Cell Moments
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted">
              Browse through our visual repository of hackathons, student workshops, prototype showcases, and award-winning team moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section-pad border-y border-electric/10 bg-cloud">
        <div className="page-shell">
          
          {/* Photo Gallery block */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="grid size-9 place-items-center rounded-lg bg-electric/10 text-electric">
                <ImageIcon className="size-5" />
              </div>
              <h2 className="text-3xl font-black text-ink tracking-tight">Photo Gallery</h2>
            </div>

            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {galleryMoments.map((moment, index) => (
                <Reveal key={moment.id} delay={(index % 4) * 0.08}>
                  <div
                    onClick={() => openLightbox(index)}
                    className="group relative aspect-square overflow-hidden rounded-lg border border-electric/10 bg-slate-50 cursor-pointer shadow-soft hover:shadow-neon transition-all duration-300"
                  >
                    {/* Image */}
                    <img
                      src={moment.src}
                      alt={moment.alt}
                      loading="lazy"
                      className="h-full w-full object-cover saturate-125 transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Sheen effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-electric/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" />
                    
                    {/* Hover Overlay Details */}
                    <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex justify-end">
                        <span className="grid size-8 place-items-center rounded-full bg-cloud/90 text-electric backdrop-blur-md shadow-soft">
                          <Maximize2 className="size-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Recent Winners Section */}
          <div className="mt-20 pt-16 border-t border-electric/10">
            <div className="flex flex-col items-center text-center mb-10">
              <div className="grid size-12 place-items-center rounded-lg bg-flare/10 text-flare mb-4 shadow-neon">
                <Trophy className="size-6" />
              </div>
              <h2 className="text-3xl font-black text-ink tracking-tight">Recent Winners</h2>
            </div>

            {/* Carousel Container */}
            <Reveal delay={0.1}>
              <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-electric/10 bg-ink text-white p-0 shadow-[0_24px_80px_rgba(17,33,58,0.16)] flex flex-col">
                {/* Aspect-ratio display */}
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[420px] overflow-hidden bg-slate-900">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeSlide}
                      src={winnerSlides[activeSlide].image}
                      alt={winnerSlides[activeSlide].title}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.04 }}
                      transition={{ duration: 0.45 }}
                      className="h-full w-full object-cover saturate-125"
                    />
                  </AnimatePresence>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Navigation Buttons */}
                  <button
                    onClick={handlePrevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 grid size-10 place-items-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md transition hover:scale-105"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="size-6" />
                  </button>
                  
                  <button
                    onClick={handleNextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 grid size-10 place-items-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md transition hover:scale-105"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="size-6" />
                  </button>

                  {/* Dots indicator inside image */}
                  <div className="absolute bottom-5 left-6 flex gap-2 z-20">
                    {winnerSlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={`size-2.5 rounded-full transition-all ${
                          i === activeSlide ? 'bg-flare w-6' : 'bg-white/40'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Dark Caption Footer Box */}
                <div className="bg-[#1a2c42] p-6 sm:p-8 border-t border-white/10 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-flare tracking-tight leading-tight">
                    {winnerSlides[activeSlide].title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-semibold leading-6 text-white/70">
                    {winnerSlides[activeSlide].description}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* Lightbox / Overlay Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute right-6 top-6 grid size-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 border border-white/10 transition z-50"
            >
              <X className="size-6" />
            </button>

            {/* Prev Image */}
            <button
              onClick={handlePrevLightbox}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 grid size-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/10 transition z-50"
            >
              <ChevronLeft className="size-6" />
            </button>

            {/* Next Image */}
            <button
              onClick={handleNextLightbox}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 grid size-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/10 transition z-50"
            >
              <ChevronRight className="size-6" />
            </button>

            {/* Lightbox content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-lg bg-black flex flex-col items-center"
            >
              <img
                src={galleryMoments[lightboxIndex].src}
                alt={galleryMoments[lightboxIndex].alt}
                className="max-h-[80vh] max-w-[85vw] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
