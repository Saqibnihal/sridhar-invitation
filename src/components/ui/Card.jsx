import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, glow = false, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`
        glass-card p-6 md:p-8 transition-all duration-500
        ${glow ? 'gold-border-glow' : ''}
        ${hover ? 'hover:border-champagne/30 hover:shadow-[0_20px_60px_rgba(212,175,55,0.08)]' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
