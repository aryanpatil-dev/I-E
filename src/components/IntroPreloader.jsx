import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

export default function IntroPreloader({ onFadeStart, onComplete }) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
  const [step, setStep] = useState(0); // 0: Initial delay (0.5s), 1: Video playing, 3: Fading out
  const [interactionRequired, setInteractionRequired] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);
  const bgVideoRef = useRef(null);

  // Detect screen size on mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    // Lock body scroll during preloader
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Step 0: Initial delay of 0.5s before playing video
  useEffect(() => {
    if (isMobile === null) return;

    const timer = setTimeout(() => {
      setStep(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [isMobile]);

  // Attempt to play, fallback to muted if blocked
  useEffect(() => {
    if (step === 1 && videoRef.current) {
      videoRef.current.muted = isMuted;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Video successfully runs", isMuted ? "(muted)" : "(unmuted)");
            if (bgVideoRef.current) {
              bgVideoRef.current.play().catch(err => console.log("Bg autoplay blocked:", err));
            }
          })
          .catch((error) => {
            if (!isMuted) {
              console.log("Autoplay unmuted blocked by browser. Trying muted autoplay.");
              setIsMuted(true);
            } else {
              console.log("Autoplay muted also blocked. Requiring user interaction.", error);
              setInteractionRequired(true);
            }
          });
      }
    }
  }, [step, isMuted]);

  const handleStartPlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      setIsMuted(false);
      videoRef.current.muted = false; // Always unmuted on interaction
      videoRef.current.play()
        .then(() => {
          console.log("Video successfully runs after user interaction");
          setInteractionRequired(false);
          if (bgVideoRef.current) {
            bgVideoRef.current.play().catch((err) => {
              console.error("Bg playback failed after interaction:", err);
            });
          }
        })
        .catch((err) => {
          console.error("Playback failed after interaction, bypassing preloader:", err);
          setInteractionRequired(false);
          handleVideoEnded();
        });
    } else {
      handleVideoEnded();
    }
  };

  const handleVideoEnded = () => {
    setStep(3);
    if (onFadeStart) {
      onFadeStart();
    }
  };

  const videoSrc = isMobile
    ? '/assets/Intro/I&E Intro Mobile Final.mp4'
    : '/assets/Intro/I&E Intro Laptop Final.mp4';

  return (
    <AnimatePresence>
      {step < 4 && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={step === 3 ? { opacity: 0 } : { opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          onAnimationComplete={() => {
            if (step === 3) {
              onComplete();
            }
          }}
          onClick={interactionRequired ? handleStartPlay : undefined}
          className={`fixed inset-0 z-[9999] w-screen h-screen flex flex-col items-center justify-center overflow-hidden select-none ${
            interactionRequired ? 'cursor-pointer pointer-events-auto' : 'pointer-events-none'
          }`}
          style={isMobile ? {
            backgroundColor: '#07111e',
            backgroundImage: `
              radial-gradient(circle at 12% 0%, rgba(30, 77, 140, 0.18), transparent 30rem),
              radial-gradient(circle at 88% 10%, rgba(201, 160, 62, 0.18), transparent 30rem),
              linear-gradient(180deg, #07111e 0%, #0d1b2a 40%, #07111e 100%)
            `
          } : { backgroundColor: 'black' }}
        >
          {step >= 1 && step < 3 && videoSrc && (
            <>
              {isMobile ? (
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden z-0">
                  {/* Layer 1: Matching body background gradient (Zero video decoding overhead on mobile) */}
                  <div 
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                      backgroundColor: '#07111e',
                      backgroundImage: `
                        radial-gradient(circle at 12% 0%, rgba(30, 77, 140, 0.18), transparent 30rem),
                        radial-gradient(circle at 88% 10%, rgba(201, 160, 62, 0.18), transparent 30rem),
                        linear-gradient(180deg, #07111e 0%, #0d1b2a 40%, #07111e 100%)
                      `
                    }}
                  />
                  {/* Layer 2: Main video displayed above */}
                  <video
                    ref={videoRef}
                    src={videoSrc}
                    autoPlay
                    playsInline
                    muted={isMuted}
                    onEnded={handleVideoEnded}
                    className="relative w-full h-full object-contain z-10"
                  />
                </div>
              ) : (
                <video
                  ref={videoRef}
                  src={videoSrc}
                  autoPlay
                  playsInline
                  muted={isMuted}
                  onEnded={handleVideoEnded}
                  className="w-full h-full object-cover"
                />
              )}

              {interactionRequired && (
                <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center p-4 z-20">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center max-w-sm pointer-events-auto"
                  >
                    <div className="mb-6 grid size-16 place-items-center rounded-full border border-electric/40 bg-electric/10 text-electric shadow-neon hover:scale-105 active:scale-95 transition cursor-pointer">
                      <Play className="size-8 fill-electric ml-1" />
                    </div>
                    <h3 className="text-xl font-black text-white tracking-wide uppercase">
                      Enter Site
                    </h3>
                  </motion.div>
                </div>
              )}
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
