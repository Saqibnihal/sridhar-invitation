import { motion } from 'framer-motion';
import { IoHeartSharp, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 overflow-hidden w-full flex flex-col items-center">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-champagne/3 rounded-full blur-[100px]" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="font-script text-4xl text-champagne mb-2">Sridhar & Jennifer</p>
          <div className="ornamental-divider my-4">
            <IoHeartSharp className="text-soft-rose text-sm" />
          </div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-serif italic text-ivory/40 text-lg mb-8 max-w-lg mx-auto"
        >
          "And in the end, the love you take is equal to the love you make."
        </motion.blockquote>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          {[
            { icon: <IoLogoInstagram size={18} />, label: 'Instagram', href: 'https://www.instagram.com/http.sdhxr?igsh=bTk1NnRhNHlqcGE1' },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target={social.href !== '#' ? '_blank' : undefined}
              rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white/5 border border-champagne/15 flex items-center justify-center text-champagne/50 hover:text-champagne hover:border-champagne/40 hover:bg-champagne/10 transition-all duration-300"
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Hashtag */}
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-champagne/30 mb-4">
          #SridharWedsJennifer
        </p>

        {/* Copyright */}
        <p className="font-sans text-[11px] text-ivory/20">
          Made with <IoHeartSharp className="inline text-soft-rose/50 mx-1" /> for a day to remember
        </p>
        <p className="font-sans text-[11px] text-ivory/15 mt-1">
          ©Team V5 — All rights reserved {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
