import { useMemo } from 'react';

const FloatingHearts = ({ count = 6 }) => {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${10 + Math.random() * 80}%`,
      size: 10 + Math.random() * 10,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 15,
      opacity: 0.06 + Math.random() * 0.08,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            left: heart.left,
            bottom: '-30px',
            opacity: heart.opacity,
            animation: `petalFall ${heart.duration}s linear ${heart.delay}s infinite reverse`,
          }}
        >
          <svg
            width={heart.size}
            height={heart.size}
            viewBox="0 0 24 24"
            fill="#F4C2C2"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
