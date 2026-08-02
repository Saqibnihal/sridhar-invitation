import { motion } from 'framer-motion';
import { IoMusicalNotesOutline, IoMusicalNotes } from 'react-icons/io5';
import { useState, useRef, useEffect } from 'react';
import weddingSong from '../../assets/mppp.mp3'; // Adjust path based on your file location

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.log('Audio playback failed:', error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={weddingSong} loop preload="auto" />

      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMusic}
        className={`fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full border flex items-center justify-center backdrop-blur-md transition-all duration-300 cursor-pointer ${
          isPlaying
            ? 'bg-champagne/20 border-champagne/50 text-champagne shadow-[0_0_20px_rgba(212,175,55,0.2)]'
            : 'bg-white/5 border-champagne/20 text-champagne/60 hover:border-champagne/40'
        }`}
        title={isPlaying ? 'Pause Music' : 'Play Music'}
      >
        {isPlaying ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <IoMusicalNotes size={18} />
          </motion.div>
        ) : (
          <IoMusicalNotesOutline size={18} />
        )}

        {/* Pulse rings when playing */}
        {isPlaying && (
          <>
            <span className="absolute inset-0 rounded-full border border-champagne/20 animate-ping" />
            <span className="absolute inset-[-4px] rounded-full border border-champagne/10 animate-pulse" />
          </>
        )}
      </motion.button>
    </>
  );
};

export default MusicPlayer;