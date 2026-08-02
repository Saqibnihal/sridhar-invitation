import { useMemo } from 'react';

const FloatingPetals = ({ count = 15 }) => {
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 8 + Math.random() * 14,
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 10,
      opacity: 0.15 + Math.random() * 0.25,
      rotate: Math.random() * 360,
      sway: 40 + Math.random() * 80,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: petal.left,
            top: '-30px',
            opacity: petal.opacity,
            animation: `petalFall ${petal.duration}s linear ${petal.delay}s infinite`,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 20 20"
            fill="none"
            style={{ transform: `rotate(${petal.rotate}deg)` }}
          >
            <path
              d="M10 0C10 0 13 5 13 10C13 15 10 20 10 20C10 20 7 15 7 10C7 5 10 0 10 0Z"
              fill="#F4C2C2"
              fillOpacity="0.7"
            />
            <path
              d="M0 10C0 10 5 7 10 7C15 7 20 10 20 10C20 10 15 13 10 13C5 13 0 10 0 10Z"
              fill="#E8A0A0"
              fillOpacity="0.5"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;
