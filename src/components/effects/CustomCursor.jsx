import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Hide default cursor
    document.body.style.cursor = 'none';
    const style = document.createElement('style');
    style.id = 'custom-cursor-style';
    style.textContent = '*, *::before, *::after { cursor: none !important; }';
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.body.style.cursor = '';
      const el = document.getElementById('custom-cursor-style');
      if (el) el.remove();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.5 }}
        className="fixed top-0 left-0 w-[10px] h-[10px] rounded-full bg-champagne z-[999] pointer-events-none mix-blend-difference"
      />
      {/* Outer ring */}
      <motion.div
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.5 : 0.3,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.8 }}
        className="fixed top-0 left-0 w-[40px] h-[40px] rounded-full border border-champagne/40 z-[998] pointer-events-none"
        style={{
          boxShadow: isHovering ? '0 0 20px rgba(212,175,55,0.2)' : 'none',
        }}
      />
    </>
  );
};

export default CustomCursor;
