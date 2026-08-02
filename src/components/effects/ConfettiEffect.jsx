import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ConfettiEffect = ({ trigger }) => {
  const [particles, setParticles] = useState([]);

  const colors = useMemo(() => ['#D4AF37', '#F5E6A3', '#F4C2C2', '#800020', '#FFFFF0', '#E8A0A0', '#B8960C'], []);

  const launch = useCallback(() => {
    const newParticles = Array.from({ length: 80 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * window.innerWidth,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 4 + Math.random() * 8,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 3,
      rotation: Math.random() * 720,
      shape: Math.random() > 0.5 ? 'circle' : 'rect',
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 5000);
  }, [colors]);

  // Expose launch via trigger
  if (trigger && typeof trigger === 'object' && 'current' in trigger) {
    trigger.current = launch;
  }

  return (
    <AnimatePresence>
      {particles.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-[90] overflow-hidden">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                opacity: 1,
                scale: 0,
                rotate: 0,
              }}
              animate={{
                x: p.x,
                y: window.innerHeight + 100,
                opacity: 0,
                scale: 1,
                rotate: p.rotation,
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                ease: 'easeOut',
              }}
              style={{
                position: 'absolute',
                width: p.size,
                height: p.shape === 'circle' ? p.size : p.size * 0.6,
                backgroundColor: p.color,
                borderRadius: p.shape === 'circle' ? '50%' : '2px',
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConfettiEffect;
