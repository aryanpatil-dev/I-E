import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, ShieldCheck, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { initiatives } from '../data/siteContent.js';

// Map event IDs to a set of gallery moments
const eventGalleryMapping = {
  'mun-2024': [
    '/assets/events/MUN 2024/MUN 24 Photo 1.JPG',
    '/assets/events/MUN 2024/MUN 24 Photo 2.JPG',
    '/assets/events/MUN 2024/MUN 24 Photo 3.JPG',
    '/assets/events/MUN 2024/MUN 24 Photo 4.JPG'
  ],
  'mun-2025': [
    '/assets/events/MUN 2025/MUN 25 Photo 1.JPG',
    '/assets/events/MUN 2025/MUN 25 Photo 2.JPG',
    '/assets/events/MUN 2025/MUN 25 Photo 3.JPG',
    '/assets/events/MUN 2025/MUN 25 Photo 4.JPG'
  ],
  finnoverse: [
    '/assets/events/FINNOVERSE/Finnoverse Photo 1.JPG',
    '/assets/events/FINNOVERSE/Finnoverse Photo 2.JPG',
    '/assets/events/FINNOVERSE/Finnoverse Photo 3.JPG',
    '/assets/events/FINNOVERSE/Finnoverse Photo 4.JPG'
  ],
  phoenix1: [3, 6, 9, 12].map((idx) => `/assets/gallery/moment${idx}.jpg`),
  phoenix2: [4, 8, 1, 10].map((idx) => `/assets/gallery/moment${idx}.jpg`),
  'model-senate': [
    '/assets/events/Model Senate 2026/Senate photo 1.jpg',
    '/assets/events/Model Senate 2026/Senate photo 2.jpeg',
    '/assets/events/Model Senate 2026/Senate photo 3.jpeg',
    '/assets/events/Model Senate 2026/Senate photo 4.jpeg'
  ],
  kwi: [6, 10, 3, 12].map((idx) => `/assets/gallery/moment${idx}.jpg`),
};

export default function EventArchive() {
  const { eventId } = useParams();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const event = initiatives.find((item) => item.id === eventId);
  const galleryImages = eventGalleryMapping[eventId] || [1, 2, 3, 4].map((idx) => `/assets/gallery/moment${idx}.jpg`);

  if (!event) {
    return (
      <div className="min-h-screen bg-paper flex flex-col items-center justify-center p-6 text-center">
        <div className="rounded-xl border border-electric/10 bg-cloud p-10 max-w-md shadow-soft">
          <h2 className="text-3xl font-black text-ink">Event Not Found</h2>
          <p className="mt-4 text-sm text-muted">The archive page you are looking for does not exist or has been moved.</p>
          <Link
            to="/initiatives"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-neon hover:bg-plasma transition-transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="size-4" />
            Back to Initiatives
          </Link>
        </div>
      </div>
    );
  }

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="relative min-h-screen bg-paper pb-24 pt-28">
        {/* Background Gradients */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_8%,rgba(201,160,62,0.14),transparent_28rem),radial-gradient(circle_at_88%_30%,rgba(30,77,140,0.18),transparent_30rem),linear-gradient(180deg,#07111e,#0d1b2a_55%,#07111e)]" />
        <div className="absolute inset-0 -z-10 bg-grid-lines bg-[length:54px_54px] opacity-25" />

        <div className="page-shell">
          {/* Back Navigation Bar */}
          <div className="mb-10">
            <Link
              to="/initiatives"
              className="inline-flex items-center gap-2 rounded-full border border-electric/15 bg-cloud/80 px-5 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-ink shadow-soft hover:-translate-x-1.5 transition-all duration-300 backdrop-blur-md hover:border-electric/30"
            >
              <ArrowLeft className="size-4 text-electric" />
              Back to Initiatives
            </Link>
          </div>

          {/* Dynamic Event Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="overflow-hidden rounded-2xl border border-electric/10 bg-cloud shadow-soft"
          >
            <div className="relative h-[45vh] w-full overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover saturate-125 brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cloud via-cloud/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 md:left-10 md:bottom-8">
                <h1 className="mt-4 font-display text-4xl font-black leading-none text-ink sm:text-5xl md:text-6xl tracking-tight">
                  {event.title}
                </h1>
              </div>
            </div>

            <div className="p-6 md:p-10 border-t border-electric/5">
              <div className="max-w-4xl">
                <h3 className="text-xl font-black text-ink tracking-tight">About the Initiative</h3>
                <p className="mt-4 text-base leading-8 text-muted">{event.description}</p>
                <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold text-muted/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4 text-electric" />
                    <span>Annual Flagship Program</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-electric" />
                    <span>Verified Academic Event</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Event Archive Gallery Grid */}
          <div className="mt-16">
            <div className="border-b border-electric/10 pb-4 mb-10 flex items-center justify-between">
              <h2 className="text-2xl font-black text-ink tracking-tight">Event Moments Gallery</h2>
              <span className="text-xs font-black uppercase tracking-[0.16em] text-electric bg-electric/10 px-3 py-1 rounded-full border border-electric/15">
                {galleryImages.length} Photos
              </span>
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onClick={() => openLightbox(index)}
                  className="group relative cursor-pointer overflow-hidden rounded-xl border border-electric/5 bg-slate-900 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-flare/30 hover:shadow-neon"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={src}
                      alt={`${event.title} Moment ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 saturate-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/98 p-4 backdrop-blur-md"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-[110] rounded-full bg-white/5 p-3 text-white/70 transition-all hover:bg-white/10 hover:text-white"
              aria-label="Close lightbox"
            >
              <X className="size-6" />
            </button>

            {/* Slider Content */}
            <div className="relative flex w-full max-w-5xl items-center justify-center">
              {/* Prev Button */}
              <button
                onClick={showPrev}
                className="absolute left-4 z-[110] rounded-full bg-white/5 p-3 text-white/70 transition-all hover:bg-white/10 hover:text-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-6" />
              </button>

              {/* Active Image */}
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={galleryImages[lightboxIndex]}
                alt={`Lightbox view ${lightboxIndex + 1}`}
                className="max-h-[80vh] max-w-full rounded-lg object-contain shadow-2xl border border-white/5"
              />

              {/* Next Button */}
              <button
                onClick={showNext}
                className="absolute right-4 z-[110] rounded-full bg-white/5 p-3 text-white/70 transition-all hover:bg-white/10 hover:text-white"
                aria-label="Next image"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>

            {/* Photo Index Counter */}
            <div className="mt-6 text-sm font-bold tracking-[0.2em] text-white/60 uppercase">
              Moment {lightboxIndex + 1} of {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
