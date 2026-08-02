import { useState } from 'react';
import { motion } from 'framer-motion';

const Input = ({ label, type = 'text', name, value, onChange, textarea = false, required = false }) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || (value && value.length > 0);

  const Component = textarea ? 'textarea' : 'input';

  return (
    <div className="relative w-full">
      <Component
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={textarea ? 4 : undefined}
        className={`
          peer w-full bg-white/[0.03] border border-champagne/15
          rounded-xl px-5 pt-6 pb-2 text-ivory/90 font-sans text-sm
          outline-none transition-all duration-400
          focus:border-champagne/50 focus:bg-white/[0.05]
          focus:shadow-[0_0_20px_rgba(212,175,55,0.08)]
          placeholder-transparent resize-none
          ${textarea ? 'min-h-[120px]' : 'h-14'}
        `}
        placeholder={label}
      />
      <motion.label
        htmlFor={name}
        animate={{
          y: isActive ? -8 : 0,
          scale: isActive ? 0.8 : 1,
          color: isActive ? '#D4AF37' : 'rgba(245, 240, 232, 0.4)',
        }}
        className="absolute left-5 top-4 font-sans text-sm origin-left pointer-events-none transition-all duration-300"
      >
        {label}
      </motion.label>
      {/* Gold bottom line on focus */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent origin-center"
      />
    </div>
  );
};

export default Input;
