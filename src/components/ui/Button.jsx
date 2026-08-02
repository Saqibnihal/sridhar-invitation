import { motion } from 'framer-motion';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wider uppercase overflow-hidden transition-all duration-500 cursor-pointer';

  const variants = {
    primary: `
      bg-gradient-to-r from-champagne-dark via-champagne to-champagne-light
      text-elegant-black rounded-full
      shadow-[0_4px_20px_rgba(212,175,55,0.3)]
      hover:shadow-[0_8px_40px_rgba(212,175,55,0.5)]
      hover:scale-105
    `,
    outline: `
      bg-transparent border border-champagne/40 text-champagne
      rounded-full hover:bg-champagne/10
      hover:border-champagne/70 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]
      hover:scale-105
    `,
    ghost: `
      bg-transparent text-champagne hover:text-champagne-light
      rounded-full hover:bg-champagne/5
    `,
  };

  const sizes = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-12 py-4 text-base',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {/* Shimmer overlay */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
      {icon && <span className="text-lg">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default Button;
