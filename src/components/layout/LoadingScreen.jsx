import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => onComplete?.(), 800);
          }, 400);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-dark-surface"
        >
          {/* Background blur blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-champagne/5 rounded-full blur-[100px] animate-pulse-soft" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-soft-rose/5 rounded-full blur-[80px] animate-pulse-soft" style={{ animationDelay: '1s' }} />
          </div>

          {/* Monogram */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative mb-10"
          >
            {/* Rotating outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-6 rounded-full border border-champagne/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-10 rounded-full border border-champagne/5"
            />

            <div className="relative w-28 h-28 rounded-full border-2 border-champagne/30 flex items-center justify-center">
              <div className="text-center">
                <span className="font-display text-3xl text-champagne font-bold">S</span>
                <span className="font-script text-champagne/60 text-sm mx-1">&</span>
                <span className="font-display text-3xl text-champagne font-bold">R</span>
              </div>
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-px bg-white/10 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full bg-gradient-to-r from-champagne-dark via-champagne to-champagne-light"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-serif text-sm text-ivory/30 tracking-[0.3em] uppercase"
          >
            Preparing your invitation
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
