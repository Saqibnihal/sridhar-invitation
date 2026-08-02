import { motion } from 'framer-motion';
import { IoHeart, IoLogoInstagram } from 'react-icons/io5';
import SectionTitle from '../components/ui/SectionTitle';
import { WEDDING_DATA } from '../utils/constants';

const CoupleCard = ({ person, isReversed, instagram }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: isReversed ? 0.2 : 0 }}
      className="flex flex-col items-center text-center"
    >
      {/* Portrait */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="relative mb-6 group"
      >
        {/* Rotating border */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-2 rounded-full border border-dashed border-champagne/15"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-4 rounded-full border border-dashed border-champagne/8"
        />

        {/* Image container */}
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-champagne/20 shadow-[0_0_40px_rgba(212,175,55,0.08)] group-hover:border-champagne/40 transition-all duration-500">
          {person.image ? (
            <img 
              src={person.image} 
              alt={person.fullName}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-charcoal via-elegant-black to-charcoal flex items-center justify-center">
              <span className="font-display text-5xl md:text-6xl text-champagne/20 font-bold">
                {person.name[0]}
              </span>
            </div>
          )}
        </div>

        {/* Glow on hover */}
        <div className="absolute inset-0 rounded-full bg-champagne/0 group-hover:bg-champagne/5 transition-all duration-500 blur-xl" />
      </motion.div>

      {/* Name */}
      <h3 className="font-display text-2xl md:text-3xl font-bold text-ivory mb-1">{person.fullName}</h3>

      {/* Parents */}
      <p className="font-serif text-xs md:text-sm text-champagne/50 mb-4 max-w-xs">
        {person.parents}
      </p>

      {/* Divider */}
      <div className="w-12 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent mb-4" />

      {/* Intro */}
      <p className="font-serif text-ivory/40 text-sm md:text-base leading-relaxed max-w-xs">
        {person.intro}
      </p>

      {/* Social */}
      <motion.a
        href={instagram || '#'}
        target={instagram ? '_blank' : undefined}
        rel={instagram ? 'noopener noreferrer' : undefined}
        whileHover={{ scale: 1.15 }}
        className="mt-4 w-9 h-9 rounded-full bg-white/5 border border-champagne/10 flex items-center justify-center text-champagne/40 hover:text-champagne hover:border-champagne/30 transition-all"
      >
        <IoLogoInstagram size={16} />
      </motion.a>
    </motion.div>
  );
};

const CoupleSection = () => {
  return (
    <section id="couple" className="section-padding relative overflow-hidden w-full flex flex-col items-center">
      <div className="relative max-w-5xl mx-auto">
        <SectionTitle
          subtitle="The Happy Couple"
          title="Groom & Bride"
          description="Two souls destined to walk together on this beautiful journey called life."
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-8 lg:gap-16 items-start">
          {/* Groom */}
          <CoupleCard
            person={WEDDING_DATA.groom}
            isReversed={false}
            instagram="https://www.instagram.com/http.sdhxr?igsh=bTk1NnRhNHlqcGE1"
          />

          {/* Bride */}
          <CoupleCard
            person={WEDDING_DATA.bride}
            isReversed={true}
            instagram="https://www.instagram.com/jjf_damien_?igsh=aDVodHJ2cHUyZzEx"
          />
        </div>

        {/* Center heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden md:flex absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-dark-surface border-2 border-champagne/20 items-center justify-center"
        >
          <IoHeart className="text-soft-rose text-xl animate-heart-beat" />
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleSection;