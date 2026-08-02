import { useState, useEffect, useCallback } from 'react';
import { getTimeRemaining } from '../utils/helpers';

/**
 * Countdown hook that updates every second
 * @param {string} targetDate - ISO date string
 */
export const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getTimeRemaining(targetDate);
      setTimeLeft(remaining);
      if (remaining.total <= 0) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

/**
 * Dark mode hook with localStorage persistence
 */
export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem('wedding-dark-mode');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('wedding-dark-mode', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  }, [isDark]);

  const toggle = useCallback(() => setIsDark((prev) => !prev), []);

  return { isDark, toggle };
};

/**
 * Audio player hook
 */
export const useAudio = (src) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(() => {
    if (typeof window === 'undefined') return null;
    const a = new Audio(src);
    a.loop = true;
    a.volume = 0.3;
    return a;
  });

  const toggle = useCallback(() => {
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  }, [audio, isPlaying]);

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audio]);

  return { isPlaying, toggle };
};

/**
 * Scroll progress hook (0 to 1)
 */
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

/**
 * Checks if element is past a scroll threshold
 */
export const useScrollPast = (threshold = 100) => {
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPast(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isPast;
};
