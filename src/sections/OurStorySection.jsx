import { motion } from 'framer-motion';
import { IoSparkles, IoCafe, IoDiamond, IoHeart, IoRibbon } from 'react-icons/io5';
import SectionTitle from '../components/ui/SectionTitle';
import { STORY_MILESTONES } from '../utils/constants';

const iconMap = {
  sparkles: <IoSparkles />,
  coffee: <IoCafe />,
  ring: <IoDiamond />,
  heart: <IoHeart />,
  wedding: <IoRibbon />,
};

const OurStorySection = () => {
  return (
    <section
      id="story"
      className="section-padding relative overflow-hidden w-full flex flex-col items-center"
    >
      <div className="relative max-w-5xl mx-auto w-full px-4 sm:px-6 md:px-10">
        <SectionTitle
          subtitle="Our Love Story"
          title="How It All Began"
          description="Every love story is beautiful, but ours is our favourite. Here's how destiny brought us together."
        />

        {/* Timeline Container */}
        <div className="relative mt-8 md:mt-14">

          {/* Desktop Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-champagne/0 via-champagne/40 to-champagne/0 hidden md:block" />

          {/* Mobile Timeline Line */}
          <div className="absolute left-[20px] sm:left-[24px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-champagne/0 via-champagne/40 to-champagne/0 md:hidden" />

          <div className="flex flex-col gap-10 sm:gap-12 md:gap-16">
            {STORY_MILESTONES.map((milestone, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={milestone.id} className="relative w-full">

                  {/* ================= MOBILE ================= */}
                  <div className="md:hidden relative flex items-start">

                    {/* Mobile Icon */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15,
                      }}
                      className="relative z-20 flex-shrink-0"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-surface border-2 border-champagne/40 flex items-center justify-center text-champagne text-base sm:text-lg shadow-[0_0_20px_rgba(212,175,55,0.25)] backdrop-blur-md">
                        {iconMap[milestone.icon]}
                      </div>
                    </motion.div>

                    {/* Mobile Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.1,
                        ease: 'easeOut',
                      }}
                      className="flex-1 min-w-0 ml-4 sm:ml-6"
                    >
                      <div className="glass-card hover:border-champagne/40 transition-all duration-500 luxury-shadow" style={{ padding: '24px 28px' }}>
                        <div className="flex flex-col gap-2">
                          <span className="font-sans text-xs tracking-[0.2em] uppercase text-champagne/70 font-medium">
                            {milestone.date}
                          </span>

                          <h3 className="font-display text-xl sm:text-2xl font-semibold text-ivory leading-snug">
                            {milestone.title}
                          </h3>

                          <p className="font-serif text-ivory/60 text-sm sm:text-base leading-relaxed text-justify">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* ================= DESKTOP ================= */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-12 lg:gap-16 items-center">

                    {/* Desktop Center Icon */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15,
                      }}
                      className="absolute left-1/2 -translate-x-1/2 top-6 z-20 flex"
                    >
                      <div className="w-12 h-12 rounded-full bg-dark-surface border-2 border-champagne/40 flex items-center justify-center text-champagne text-lg shadow-[0_0_20px_rgba(212,175,55,0.25)] backdrop-blur-md">
                        {iconMap[milestone.icon]}
                      </div>
                    </motion.div>

                    {/* Left Column */}
                    {isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{
                          duration: 0.7,
                          delay: index * 0.1,
                          ease: 'easeOut',
                        }}
                        className="col-start-1 text-right pr-4 lg:pr-8"
                      >
                        <div className="glass-card hover:border-champagne/40 transition-all duration-500 luxury-shadow" style={{ padding: '32px 36px' }}>
                          <div className="flex flex-col gap-2">
                            <span className="font-sans text-xs tracking-[0.2em] uppercase text-champagne/70 font-medium">
                              {milestone.date}
                            </span>

                            <h3 className="font-display text-2xl lg:text-3xl font-semibold text-ivory leading-snug">
                              {milestone.title}
                            </h3>

                            <p className="font-serif text-ivory/60 text-base leading-relaxed text-justify">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="col-start-1" />
                    )}

                    {/* Right Column */}
                    {!isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{
                          duration: 0.7,
                          delay: index * 0.1,
                          ease: 'easeOut',
                        }}
                        className="col-start-2 text-left pl-4 lg:pl-8"
                      >
                        <div className="glass-card hover:border-champagne/40 transition-all duration-500 luxury-shadow" style={{ padding: '32px 36px' }}>
                          <div className="flex flex-col gap-2">
                            <span className="font-sans text-xs tracking-[0.2em] uppercase text-champagne/70 font-medium">
                              {milestone.date}
                            </span>

                            <h3 className="font-display text-2xl lg:text-3xl font-semibold text-ivory leading-snug">
                              {milestone.title}
                            </h3>

                            <p className="font-serif text-ivory/60 text-base leading-relaxed text-justify">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="col-start-2" />
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;