import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { IoChevronDown, IoHeart, IoDiamond, IoDocumentText, IoClose, IoDownload } from 'react-icons/io5';
import { useCountdown } from '../hooks';
import { WEDDING_DATA } from '../utils/constants';
import { scrollToSection } from '../utils/helpers';
import SparkleEffect from '../components/effects/SparkleEffect';

import weddingPdf from '../assets/Wedding.pdf';


const HeroSection = ({ onOpenInvitation }) => {
  const [showPdf, setShowPdf] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const countdown = useCountdown(WEDDING_DATA.weddingDate);

  const countdownItems = [
    { value: countdown.days, label: 'Days' },
    { value: countdown.hours, label: 'Hours' },
    { value: countdown.minutes, label: 'Minutes' },
    { value: countdown.seconds, label: 'Seconds' },
  ];

  // Floating decorative elements
  const floatingElements = [
    { icon: <IoHeart />, delay: 0, duration: 3, x: '10%', y: '20%' },
    { icon: <IoDiamond />, delay: 1, duration: 4, x: '85%', y: '15%' },
    { icon: <IoHeart />, delay: 0.5, duration: 3.5, x: '5%', y: '70%' },
    { icon: <IoDiamond />, delay: 1.5, duration: 4.5, x: '90%', y: '65%' },
  ];

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-dark-surface to-dark-surface/95" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[-50%] right-[-30%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-champagne/5 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-[-50%] left-[-30%] w-[800px] h-[800px] rounded-full bg-gradient-to-tl from-rose-500/5 to-transparent blur-3xl"
        />
      </div>

      {/* Floral overlay patterns */}
      <div className="absolute inset-0 z-[1] opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="floralPattern" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="60" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
              <path d="M100 40 Q110 70 100 100 Q90 70 100 40" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
              <path d="M40 100 Q70 90 100 100 Q70 110 40 100" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
              <path d="M100 160 Q90 130 100 100 Q110 130 100 160" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
              <path d="M160 100 Q130 110 100 100 Q130 90 160 100" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="800" height="800" fill="url(#floralPattern)" />
        </svg>
      </div>

      {/* Floating Decorative Elements */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute z-[2] text-champagne/20 hidden lg:block"
          style={{ left: el.x, top: el.y }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="text-4xl">{el.icon}</div>
        </motion.div>
      ))}

      {/* Sparkles */}
      <SparkleEffect count={40} />

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Top ornament with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-8"
        >
          <div className="ornamental-divider flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-champagne/40" />
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-champagne/50">
              <path d="M12 0L14.5 8L22 10.5L14.5 13L12 21L9.5 13L2 10.5L9.5 8L12 0Z" fill="currentColor" />
            </svg>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-champagne/40" />
          </div>
        </motion.div>

        {/* Subtitle with typewriter effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-base md:text-lg tracking-[0.4em] uppercase text-champagne/60 mb-4"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.1 }}
          >
            We are getting married
          </motion.span>
        </motion.p>

        {/* "Our Wedding" in script with glow */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-script text-4xl md:text-6xl text-champagne mb-4"
        >
          <span className="relative inline-block">
            <span className="relative z-10">Our Wedding</span>
            <motion.span
              className="absolute inset-0 blur-xl text-champagne/30"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Our Wedding
            </motion.span>
          </span>
        </motion.h2>

        {/* Names with enhanced shimmer */}
       {/* Names with enhanced shimmer - Fully Responsive */}
<motion.h1
  initial={{ opacity: 0, y: 40, scale: 0.9 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.2, delay: 0.9 }}
  className="font-display font-bold text-ivory mb-2 tracking-wide flex flex-wrap items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4"
>
  <span className="text-shimmer relative inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
    {WEDDING_DATA.groom.name}
    <motion.span
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      animate={{ x: ['-100%', '100%'] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
    />
  </span>
  <span className="font-script text-champagne text-2xl sm:text-3xl md:text-4xl lg:text-5xl mx-1 sm:mx-2 md:mx-3 inline-block align-middle relative">
    <motion.span
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      &
    </motion.span>
  </span>
  <span className="text-shimmer relative inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
    {WEDDING_DATA.bride.name}
    <motion.span
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      animate={{ x: ['-100%', '100%'] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2 }}
    />
  </span>
</motion.h1>

        {/* Date with decorative elements */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-serif text-lg md:text-2xl text-ivory/50 tracking-[0.2em] mb-2 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-champagne/20 hidden sm:inline-block" />
          <span>September 14, 2026</span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-champagne/20 hidden sm:inline-block" />
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="font-serif italic text-base md:text-lg text-champagne/40 mb-10"
        >
          <span className="relative">
            <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-2xl opacity-50">"</span>
            {WEDDING_DATA.tagline}
            <span className="absolute -right-6 top-1/2 -translate-y-1/2 text-2xl opacity-50">"</span>
          </span>
        </motion.p>

        {/* Open Invitation Button with enhanced effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-14"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 60px rgba(212, 175, 55, 0.4)',
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenInvitation}
            className="relative px-12 py-5 bg-gradient-to-r from-champagne-dark via-champagne to-champagne-light text-elegant-black font-sans font-semibold text-sm tracking-[0.2em] uppercase rounded-full shadow-[0_4px_40px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_60px_rgba(212,175,55,0.5)] transition-all duration-500 cursor-pointer overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" style={{ backgroundSize: '200% auto' }} />
            <span className="absolute inset-0 bg-gradient-to-r from-champagne/0 via-champagne/20 to-champagne/0 group-hover:via-champagne/40 transition-all duration-700" />
            <span className="relative z-10 flex items-center gap-2">
              <IoHeart className="text-sm" />
              Open Invitation
              <IoHeart className="text-sm" />
            </span>
          </motion.button>
        </motion.div>

        {/* Countdown with enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex items-center justify-center gap-3 md:gap-8 mb-12"
        >
          {countdownItems.map((item, i) => (
            <div key={item.label} className="flex items-center gap-3 md:gap-8">
              <div className="text-center relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-champagne/20 backdrop-blur-sm flex items-center justify-center mb-2 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-champagne/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="font-display text-2xl md:text-4xl font-bold text-ivory relative z-10">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-champagne/5 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-ivory/30">
                  {item.label}
                </span>
              </div>
              {i < countdownItems.length - 1 && (
                <span className="text-champagne/20 font-display text-2xl md:text-3xl mb-6">:</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* View PDF Invitation Button */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 2.1 }}
  className="mb-8"
>
  <motion.button
    whileHover={{
      scale: 1.05,
      boxShadow: '0 0 60px rgba(212, 175, 55, 0.3), inset 0 0 30px rgba(212, 175, 55, 0.05)',
      transition: { duration: 0.3 }
    }}
    whileTap={{ scale: 0.95 }}
    onClick={() => setShowPdf(true)}
    className="relative px-10 py-4 rounded-full bg-gradient-to-r from-champagne/10 via-champagne/5 to-champagne/10 border border-champagne/30 text-champagne font-sans font-medium text-xs tracking-[0.25em] uppercase hover:border-champagne/70 hover:bg-gradient-to-r hover:from-champagne/20 hover:via-champagne/10 hover:to-champagne/20 transition-all duration-400 cursor-pointer overflow-hidden group shadow-[0_4px_30px_rgba(212,175,55,0.1)] hover:shadow-[0_8px_40px_rgba(212,175,55,0.25)]"
  >
    {/* Animated background shimmer */}
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-champagne/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
    
    {/* Pulsing border glow */}
    <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <span className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-transparent via-champagne/40 to-transparent animate-pulse" />
    </span>
    
    {/* Decorative corner sparkles */}
    <span className="absolute -top-1 -left-1 w-2 h-2">
      <span className="absolute inset-0 rounded-full bg-champagne/40 animate-ping" style={{ animationDuration: '2s' }} />
      <span className="absolute inset-0 rounded-full bg-champagne/60" />
    </span>
    <span className="absolute -top-1 -right-1 w-2 h-2">
      <span className="absolute inset-0 rounded-full bg-champagne/40 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
      <span className="absolute inset-0 rounded-full bg-champagne/60" />
    </span>
    <span className="absolute -bottom-1 -left-1 w-2 h-2">
      <span className="absolute inset-0 rounded-full bg-champagne/40 animate-ping" style={{ animationDuration: '2s', animationDelay: '1s' }} />
      <span className="absolute inset-0 rounded-full bg-champagne/60" />
    </span>
    <span className="absolute -bottom-1 -right-1 w-2 h-2">
      <span className="absolute inset-0 rounded-full bg-champagne/40 animate-ping" style={{ animationDuration: '2s', animationDelay: '1.5s' }} />
      <span className="absolute inset-0 rounded-full bg-champagne/60" />
    </span>

    {/* Main content */}
    <span className="relative z-10 flex items-center gap-3">
      <motion.span
        animate={{ 
          rotate: [0, -5, 5, -5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="text-base"
      >
        <IoDocumentText />
      </motion.span>
      <span className="relative">
        View Invitation Card
        <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-champagne/60 to-transparent group-hover:w-full transition-all duration-500" />
      </span>
      <motion.span
        animate={{ 
          x: [0, 5, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-xs opacity-50"
      >
        ✦
      </motion.span>
    </span>

    {/* Hover glow effect */}
    <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-champagne/0 via-champagne/5 to-champagne/0" />
    </span>
  </motion.button>
</motion.div>
        {/* Love Quote with decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="relative"
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-8 bg-gradient-to-b from-champagne/30 to-transparent" />
          <p className="font-serif italic text-sm md:text-base text-ivory/30 max-w-md mx-auto pt-4">
            {WEDDING_DATA.quote}
          </p>
          <p className="font-sans text-xs text-champagne/20 mt-2 tracking-widest">
           {WEDDING_DATA.quoteAuthor}
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with enhanced animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection('story')}
        >
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-ivory/20 group-hover:text-ivory/40 transition-colors duration-300">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="w-6 h-10 rounded-full border border-champagne/20 flex items-center justify-center group-hover:border-champagne/40 transition-colors duration-300"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-champagne/40 group-hover:bg-champagne/60 transition-colors duration-300"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-surface via-dark-surface/80 to-transparent z-[2]" />

      {/* PDF Invitation Modal */}
      <AnimatePresence>
        {showPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
            onClick={(e) => e.target === e.currentTarget && setShowPdf(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-elegant-black/90 backdrop-blur-xl" />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col glass-card overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-champagne/10 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-champagne/10 border border-champagne/20 flex items-center justify-center">
                    <IoDocumentText className="text-champagne text-sm" />
                  </div>
                  <div>
                    <p className="font-display text-ivory text-sm font-semibold">Wedding Invitation</p>
                    <p className="font-sans text-ivory/30 text-[10px] tracking-widest uppercase">Sridhar & Jennifer</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {/* Download Button */}
                  <motion.a
                    href={weddingPdf}
                    download="Sridhar_Jennifer_Invitation.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-champagne/20 bg-champagne/5 text-champagne font-sans text-[10px] tracking-[0.15em] uppercase hover:border-champagne/40 hover:bg-champagne/10 transition-all duration-300 cursor-pointer"
                  >
                    <IoDownload size={12} />
                    Download
                  </motion.a>
                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowPdf(false)}
                    className="w-9 h-9 rounded-full bg-white/5 border border-champagne/10 flex items-center justify-center text-ivory/40 hover:text-ivory hover:border-champagne/30 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <IoClose size={16} />
                  </motion.button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-hidden min-h-0 relative bg-white/[0.02]">
                <iframe
                  src={`${weddingPdf}#toolbar=0&navpanes=0&scrollbar=1`}
                  className="w-full h-full min-h-[60vh]"
                  title="Wedding Invitation"
                  style={{ border: 'none' }}
                />
              </div>

              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;