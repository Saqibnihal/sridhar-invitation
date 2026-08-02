import { useState, useRef } from 'react';
import { useAudio } from './hooks';
import Navbar from './components/layout/Navbar';
import ScrollProgress from './components/layout/ScrollProgress';
import BackToTop from './components/layout/BackToTop';
import MusicPlayer from './components/layout/MusicPlayer';
import LoadingScreen from './components/layout/LoadingScreen';
import Footer from './components/layout/Footer';

// Background effects
import GoldenParticles from './components/effects/GoldenParticles';
import FloatingPetals from './components/effects/FloatingPetals';
import FloatingHearts from './components/effects/FloatingHearts';
import ConfettiEffect from './components/effects/ConfettiEffect';
import CustomCursor from './components/effects/CustomCursor';

// Sections
import HeroSection from './sections/HeroSection';
import OurStorySection from './sections/OurStorySection';
import CoupleSection from './sections/CoupleSection';
import EventsSection from './sections/EventsSection';
import VenueSection from './sections/VenueSection';
import GallerySection from './sections/GallerySection';
import BlessingsSection from './sections/BlessingsSection';

// Divider
import SectionDivider from './components/ui/SectionDivider';

// Helper to scroll
import { scrollToSection } from './utils/helpers';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Non-existent placeholder audio track for the player UI. 
  // In a real application, the user would place an audio file in the assets folder.
  const { isPlaying, toggle: toggleAudio } = useAudio('/wedding-song.mp3');

  // Create a ref to trigger confetti programmatically
  const confettiTrigger = useRef(null);

  const handleOpenInvitation = () => {
    // 1. Trigger audio play automatically when opening if possible
    if (!isPlaying) {
      toggleAudio();
    }
    
    // 2. Trigger the Confetti explosion
    if (confettiTrigger.current) {
      confettiTrigger.current();
    }

    // 3. Scroll smoothly to the Story section
    scrollToSection('story');
  };

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="relative min-h-screen selection:bg-champagne/30 overflow-x-hidden">
          {/* Custom Cursor */}
          <CustomCursor />

          {/* Background Ambient Layout */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <GoldenParticles />
            <FloatingPetals count={18} />
            <FloatingHearts count={6} />
          </div>

          {/* Confetti Spawner */}
          <ConfettiEffect trigger={confettiTrigger} />

          {/* Header Overlays */}
          <ScrollProgress />
          <Navbar />

          {/* Page Sections */}
          <main className="relative z-10 flex flex-col items-center w-full">
            <HeroSection onOpenInvitation={handleOpenInvitation} />
            
            <SectionDivider variant="floral" />
            <OurStorySection />
            
            <SectionDivider variant="ornament" />
            <CoupleSection />
            
            <SectionDivider variant="dots" />
            <EventsSection />
            
            <SectionDivider variant="floral" />
            <VenueSection />
            
            <SectionDivider variant="ornament" />
            <GallerySection />
            
            <SectionDivider variant="dots" />
            <BlessingsSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating UI controls */}
          <MusicPlayer isPlaying={isPlaying} toggle={toggleAudio} />
          <BackToTop />
        </div>
      )}
    </>
  );
}

export default App;
