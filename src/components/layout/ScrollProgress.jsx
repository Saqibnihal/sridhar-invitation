import { useScrollProgress } from '../../hooks';

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[51] h-[2px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-champagne-dark via-champagne to-champagne-light transition-all duration-150 ease-out"
        style={{
          width: `${progress * 100}%`,
          boxShadow: '0 0 10px rgba(212, 175, 55, 0.5), 0 0 5px rgba(212, 175, 55, 0.3)',
        }}
      />
    </div>
  );
};

export default ScrollProgress;
