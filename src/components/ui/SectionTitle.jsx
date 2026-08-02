import { motion } from 'framer-motion';

const SectionTitle = ({ subtitle, title, description, light = false, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`text-center mb-8 md:mb-10 ${className}`}
    >
      {/* Decorative top flourish */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="block w-12 h-px bg-gradient-to-r from-transparent to-champagne/50" />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-champagne opacity-60">
          <path
            d="M10 2L12 8L18 10L12 12L10 18L8 12L2 10L8 8L10 2Z"
            fill="currentColor"
          />
        </svg>
        <span className="block w-12 h-px bg-gradient-to-l from-transparent to-champagne/50" />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-script text-champagne text-2xl md:text-3xl mb-3"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Title */}
      <h2
        className={`font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-wide mb-4 ${
          light ? 'text-elegant-black' : 'text-ivory'
        }`}
      >
        {title}
      </h2>

      {/* Decorative bottom line */}
      <div className="ornamental-divider my-6">
        <div className="glow-dot" />
      </div>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className={`font-serif text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
            light ? 'text-charcoal/70' : 'text-ivory/60'
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
