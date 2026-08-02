import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronUp } from 'react-icons/io5';
import { useScrollPast } from '../../hooks';

const BackToTop = () => {
  const isVisible = useScrollPast(600);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)' }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne backdrop-blur-md hover:bg-champagne/20 transition-colors cursor-pointer"
        >
          <IoChevronUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
