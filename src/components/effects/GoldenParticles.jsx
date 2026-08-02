import { useCallback, useMemo } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const GoldenParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(() => ({
    fullScreen: false,
    fpsLimit: 60,
    particles: {
      number: {
        value: 40,
        density: { enable: true, width: 1920, height: 1080 },
      },
      color: { value: ['#D4AF37', '#F5E6A3', '#B8960C'] },
      shape: { type: 'circle' },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: { enable: true, speed: 0.5, sync: false },
      },
      size: {
        value: { min: 1, max: 3 },
        animation: { enable: true, speed: 1, sync: false },
      },
      move: {
        enable: true,
        speed: 0.4,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'out' },
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.03,
          opacity: 1,
          color: { value: '#F5E6A3' },
        },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <Particles
      id="golden-particles"
      init={particlesInit}
      options={options}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default GoldenParticles;
