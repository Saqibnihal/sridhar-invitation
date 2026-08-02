const SectionDivider = ({ variant = 'wave', className = '' }) => {
  const dividers = {
    wave: (
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-16 md:h-24 ${className}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0 50C240 10 480 90 720 50C960 10 1200 90 1440 50V100H0V50Z"
          fill="url(#waveGrad)"
          fillOpacity="0.05"
        />
        <path
          d="M0 50C240 10 480 90 720 50C960 10 1200 90 1440 50"
          stroke="url(#waveStroke)"
          strokeWidth="0.5"
          strokeOpacity="0.3"
        />
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="1440" y2="0">
            <stop stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="0.5" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveStroke" x1="0" y1="0" x2="1440" y2="0">
            <stop stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="0.5" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    ornament: (
      <div className={`flex items-center justify-center py-8 ${className}`}>
        <div className="flex items-center gap-4">
          <span className="block w-20 md:w-32 h-px bg-gradient-to-r from-transparent to-champagne/30" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-champagne/40 animate-spin-slow">
            <path d="M12 2L14 8.5L20.5 10L14 12L12 18.5L10 12L3.5 10L10 8.5L12 2Z" fill="currentColor" />
          </svg>
          <span className="block w-20 md:w-32 h-px bg-gradient-to-l from-transparent to-champagne/30" />
        </div>
      </div>
    ),
    dots: (
      <div className={`flex items-center justify-center gap-3 py-8 ${className}`}>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="block rounded-full bg-champagne"
            style={{
              width: i === 2 ? '6px' : '3px',
              height: i === 2 ? '6px' : '3px',
              opacity: i === 2 ? 0.6 : 0.25,
            }}
          />
        ))}
      </div>
    ),
    floral: (
      <div className={`flex items-center justify-center py-6 ${className}`}>
        <svg width="200" height="30" viewBox="0 0 200 30" fill="none" className="text-champagne/25">
          <line x1="0" y1="15" x2="70" y2="15" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="80" cy="15" r="3" fill="currentColor" />
          <circle cx="100" cy="10" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="100" cy="20" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="120" cy="15" r="3" fill="currentColor" />
          <line x1="130" y1="15" x2="200" y2="15" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    ),
  };

  return dividers[variant] || dividers.wave;
};

export default SectionDivider;
