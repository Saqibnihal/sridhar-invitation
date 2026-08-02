import { motion } from 'framer-motion';
import { IoBrush, IoSunny, IoMusicalNotes, IoDiamond, IoWine, IoTime, IoLocationSharp } from 'react-icons/io5';
import SectionTitle from '../components/ui/SectionTitle';
import { EVENTS } from '../utils/constants';

const iconMap = {
  palette: <IoBrush size={24} />,
  sun: <IoSunny size={24} />,
  music: <IoMusicalNotes size={24} />,
  rings: <IoDiamond size={24} />,
  champagne: <IoWine size={24} />,
};

const EventsSection = () => {
  return (
    <section id="events" className="section-padding relative overflow-hidden w-full flex flex-col items-center">
      {/* Background decorative elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-champagne/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-rose-500/5 rounded-full blur-3xl translate-x-1/2" />
      
      {/* Floating decorative particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-champagne/10"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              top: `${10 + i * 15}%`,
              left: `${5 + i * 18}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto w-full px-4 sm:px-6">
        <SectionTitle
          subtitle="Celebration Timeline"
          title="Wedding Events"
          description="Each ceremony is a chapter in our love story. Join us for every magical moment."
        />

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
          {EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: '0 20px 60px rgba(212, 175, 55, 0.12)'
                }}
                transition={{ duration: 0.4 }}
                className="glass-card p-7 sm:p-8 lg:p-9 h-full group hover:border-champagne/30 transition-all duration-500 relative overflow-hidden"
              >
                {/* Decorative top accent with animation */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${event.color}60, transparent)`,
                  }}
                  animate={{
                    scaleX: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />

                {/* Background glow effect */}
                <div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `${event.color}15`,
                  }}
                />

                {/* Content wrapper with proper spacing */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon with enhanced styling */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:shadow-lg relative"
                    style={{
                      background: `${event.color}15`,
                      border: `1px solid ${event.color}25`,
                      color: event.color,
                      boxShadow: `0 4px 20px ${event.color}10`,
                    }}
                  >
                    {iconMap[event.icon]}
                    
                    {/* Icon shimmer */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>
                  </motion.div>

                  {/* Event name with enhanced styling */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ivory mb-3 group-hover:text-champagne transition-colors duration-300 leading-tight">
                    {event.name}
                  </h3>

                  {/* Date & Time with icons */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-champagne/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-champagne/40" />
                      </div>
                      <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-champagne/60">
                        {event.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoTime className="text-champagne/30 text-xs" />
                      <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.1em] text-ivory/40">
                        {event.time}
                      </p>
                    </div>
                  </div>

                  {/* Divider with animation */}
                  <motion.div 
                    className="w-12 h-px bg-gradient-to-r from-champagne/30 to-transparent mb-4 group-hover:w-16 transition-all duration-500" 
                  />

                  {/* Description with improved readability */}
                  <p className="font-serif text-ivory/45 text-sm sm:text-base leading-relaxed mb-4 flex-1">
                    {event.description}
                  </p>

                  {/* Venue with icon */}
                  <div className="flex items-start gap-2 pt-3 border-t border-champagne/10 mt-auto">
                    <IoLocationSharp className="text-champagne/30 text-sm flex-shrink-0 mt-0.5" />
                    <p className="font-sans text-[10px] sm:text-[11px] text-champagne/40 tracking-wide leading-relaxed">
                      {event.venue}
                    </p>
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at center, ${event.color}08 0%, transparent 70%)`,
                  }}
                />

                {/* Corner decorative elements */}
                <div 
                  className="absolute top-4 right-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    border: `1px solid ${event.color}15`,
                    borderBottom: 'none',
                    borderLeft: 'none',
                    transform: 'rotate(90deg)'
                  }}
                />
                <div 
                  className="absolute bottom-4 left-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    border: `1px solid ${event.color}15`,
                    borderTop: 'none',
                    borderRight: 'none',
                    transform: 'rotate(90deg)'
                  }}
                />

                {/* Event number badge */}
                <div className="absolute top-4 right-4 font-sans text-[8px] tracking-[0.2em] text-ivory/10 group-hover:text-ivory/20 transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;