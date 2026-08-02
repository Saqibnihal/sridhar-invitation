import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';

const Modal = ({ images, currentIndex, isOpen, onClose }) => {
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-xl hover:bg-white/20 transition-all cursor-pointer"
            onClick={onClose}
          >
            <IoClose />
          </motion.button>

          {/* Navigation */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-xl hover:bg-white/20 transition-all cursor-pointer"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          >
            <IoChevronBack />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-xl hover:bg-white/20 transition-all cursor-pointer"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
          >
            <IoChevronForward />
          </motion.button>

          {/* Image */}
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="max-w-[90vw] max-h-[85vh] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full h-[70vh] rounded-2xl flex items-center justify-center"
              style={{
                background: images[index]?.gradient || 'linear-gradient(135deg, #2D2D2D, #1A1A1A)',
              }}
            >
              <span className="text-champagne/40 font-serif text-xl">{images[index]?.label || 'Photo'}</span>
            </div>
          </motion.div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/40 text-sm font-sans">
            {index + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
