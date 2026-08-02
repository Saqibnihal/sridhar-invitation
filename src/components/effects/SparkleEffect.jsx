import { useMemo } from 'react';

const SparkleEffect = ({ count = 20 }) => {
  const sparkles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full bg-champagne-light"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            width: sparkle.size,
            height: sparkle.size,
            animation: `sparkle ${sparkle.duration}s ease-in-out ${sparkle.delay}s infinite`,
            boxShadow: `0 0 ${sparkle.size * 2}px rgba(212, 175, 55, 0.4)`,
          }}
        />
      ))}
    </div>
  );
};

export default SparkleEffect;
