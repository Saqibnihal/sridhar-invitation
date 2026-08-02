import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { NAV_LINKS } from '../../utils/constants';
import { scrollToSection } from '../../utils/helpers';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      // Determine active section
      const sections = NAV_LINKS.map((link) => document.getElementById(link.id));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`absolute top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-dark-surface/80 backdrop-blur-xl border-b border-champagne/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <motion.button
            onClick={() => handleNavClick('hero')}
            className="font-script text-2xl md:text-3xl text-champagne hover:text-champagne-light transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            S & J
          </motion.button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-champagne'
                    : 'text-ivory/50 hover:text-ivory/80'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-champagne"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden w-9 h-9 rounded-full bg-white/5 border border-champagne/15 flex items-center justify-center text-champagne cursor-pointer"
            >
              <IoMenuOutline size={20} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-dark-surface/95 backdrop-blur-2xl lg:hidden"
          >
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 border border-champagne/15 flex items-center justify-center text-champagne cursor-pointer"
              onClick={() => setIsMobileOpen(false)}
            >
              <IoCloseOutline size={24} />
            </motion.button>

            <div className="flex flex-col items-center justify-center h-full gap-6">
              <p className="font-script text-3xl text-champagne mb-4">A & A</p>
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleNavClick(link.id)}
                  className={`font-sans text-sm tracking-[0.3em] uppercase transition-colors cursor-pointer ${
                    activeSection === link.id ? 'text-champagne' : 'text-ivory/50 hover:text-ivory/80'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
