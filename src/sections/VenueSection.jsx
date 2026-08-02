import { motion } from 'framer-motion';
import { IoLocationSharp, IoCalendar, IoTime, IoNavigate, IoMap, IoStar } from 'react-icons/io5';
import SectionTitle from '../components/ui/SectionTitle';
import { VENUE } from '../utils/constants';

const VenueCard = ({ venue, label, index }) => {
  // Function to handle map click - opens directions
  const handleMapClick = () => {
    const mapUrl = venue.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.address)}`;
    window.open(mapUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <motion.div
        whileHover={{ 
          y: -8,
          scale: 1.01,
          boxShadow: '0 20px 60px rgba(212, 175, 55, 0.15)'
        }}
        className="glass-card p-6 sm:p-8 lg:p-10 h-full hover:border-champagne/30 transition-all duration-500 group relative overflow-hidden"
      >
        {/* Background gradient effect */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-champagne/5 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-700" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tl from-rose-500/5 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-700" />

        {/* Shimmer border effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-champagne/10 to-transparent animate-shimmer" />
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-4 right-4 text-champagne/5 group-hover:text-champagne/10 transition-all duration-500">
          <IoStar size={40} className="rotate-45" />
        </div>

        {/* Content wrapper with proper spacing */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Label badge with icon */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-champagne/10 to-champagne/5 border border-champagne/20 mb-5 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-champagne font-medium">
              {label}
            </span>
          </div>

          {/* Venue name with decorative line */}
          <div className="mb-5">
            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-ivory mb-2 leading-tight">
              {venue.name}
            </h3>
            <div className="w-12 h-px bg-gradient-to-r from-champagne/40 to-transparent" />
          </div>

          {/* Details with improved styling */}
          <div className="space-y-3 mb-6 flex-1">
            <motion.div 
              whileHover={{ x: 4 }}
              className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white/[0.02] transition-all duration-300"
            >
              <div className="w-7 h-7 rounded-full bg-champagne/10 flex items-center justify-center flex-shrink-0 border border-champagne/10 mt-0.5">
                <IoCalendar className="text-champagne/60 text-xs sm:text-sm" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-ivory/30 block">Date</span>
                <span className="font-serif text-ivory/60 text-xs sm:text-sm leading-relaxed">{venue.date}</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 4 }}
              className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white/[0.02] transition-all duration-300"
            >
              <div className="w-7 h-7 rounded-full bg-champagne/10 flex items-center justify-center flex-shrink-0 border border-champagne/10 mt-0.5">
                <IoTime className="text-champagne/60 text-xs sm:text-sm" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-ivory/30 block">Time</span>
                <span className="font-serif text-ivory/60 text-xs sm:text-sm leading-relaxed">{venue.time}</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 4 }}
              className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white/[0.02] transition-all duration-300"
            >
              <div className="w-7 h-7 rounded-full bg-champagne/10 flex items-center justify-center flex-shrink-0 border border-champagne/10 mt-0.5">
                <IoLocationSharp className="text-champagne/60 text-xs sm:text-sm" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-ivory/30 block">Location</span>
                <span className="font-serif text-ivory/60 text-xs sm:text-sm leading-relaxed">{venue.address}</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Map - Clickable */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleMapClick}
            className="relative w-full h-36 sm:h-40 lg:h-44 rounded-xl bg-gradient-to-br from-dark-surface/80 to-dark-surface/40 border border-champagne/10 mb-5 overflow-hidden group/map hover:border-champagne/30 transition-all duration-500 cursor-pointer"
          >
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-champagne/10 flex items-center justify-center mb-2 border border-champagne/20 group-hover/map:bg-champagne/20 transition-all duration-300">
                <IoMap className="text-champagne/30 text-lg sm:text-xl group-hover/map:text-champagne/50 transition-all duration-300" />
              </div>
              <span className="font-sans text-[8px] sm:text-[10px] text-ivory/20 tracking-[0.2em] uppercase group-hover/map:text-ivory/40 transition-all duration-300 text-center px-2">Click to open map</span>
              <span className="font-serif text-[7px] sm:text-[8px] text-ivory/10 mt-1">Opens in Google Maps</span>
            </div>
            
            {/* Map grid overlay */}
            <div className="absolute inset-0 opacity-[0.03]">
              {[...Array(10)].map((_, i) => (
                <div key={`h-${i}`} className="absolute w-full h-px bg-champagne" style={{ top: `${(i + 1) * 10}%` }} />
              ))}
              {[...Array(10)].map((_, i) => (
                <div key={`v-${i}`} className="absolute h-full w-px bg-champagne" style={{ left: `${(i + 1) * 10}%` }} />
              ))}
            </div>
            
            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-3 h-3 sm:w-4 sm:h-4 border-t border-l border-champagne/20" />
            <div className="absolute top-2 right-2 w-3 h-3 sm:w-4 sm:h-4 border-t border-r border-champagne/20" />
            <div className="absolute bottom-2 left-2 w-3 h-3 sm:w-4 sm:h-4 border-b border-l border-champagne/20" />
            <div className="absolute bottom-2 right-2 w-3 h-3 sm:w-4 sm:h-4 border-b border-r border-champagne/20" />
            
            {/* Pulsing location dot */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-champagne/20 pointer-events-none"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-champagne/40 border border-champagne/30" />
            
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-champagne/0 via-champagne/5 to-champagne/0 opacity-0 group-hover/map:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>

          {/* Directions button with enhanced styling */}
          <motion.a
            href={venue.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.03, 
              boxShadow: '0 8px 40px rgba(212, 175, 55, 0.25)',
              y: -2
            }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-champagne/10 to-champagne/5 border border-champagne/20 text-champagne font-sans text-[10px] sm:text-xs tracking-[0.15em] uppercase hover:bg-gradient-to-r hover:from-champagne/20 hover:to-champagne/10 hover:border-champagne/40 transition-all duration-300 group/btn overflow-hidden w-full sm:w-auto"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-champagne/5 to-transparent animate-shimmer" />
            <span className="relative z-10 flex items-center gap-2">
              <IoNavigate size={13} sm={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
              Get Directions
              <span className="w-px h-4 bg-champagne/20 mx-1 hidden sm:inline-block" />
              <IoLocationSharp size={11} sm={12} className="opacity-50 hidden sm:inline-block" />
            </span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const VenueSection = () => {
  return (
    <section id="venue" className="section-padding relative overflow-hidden w-full flex flex-col items-center">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-champagne/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative max-w-5xl mx-auto w-full px-4 sm:px-6">
        <SectionTitle
          subtitle="Join Us At"
          title="Wedding Venue"
          description="We would be honoured to have you join us at these beautiful venues to celebrate our special day."
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mt-8">
          <VenueCard venue={VENUE.ceremony} label="Wedding Ceremony" index={0} />
          <VenueCard venue={VENUE.reception} label="Grand Reception" index={1} />
        </div>
      </div>
    </section>
  );
};

export default VenueSection;