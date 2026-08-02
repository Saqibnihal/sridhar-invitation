import { motion } from 'framer-motion';
import { IoHeart } from 'react-icons/io5';
import SectionTitle from '../components/ui/SectionTitle';
import { SAMPLE_BLESSINGS } from '../utils/constants';

const BlessingsSection = () => {
  return (
    <section id="blessings" className="section-padding relative overflow-hidden w-full flex flex-col items-center">

      <div className="relative max-w-6xl mx-auto">
        <SectionTitle
          subtitle="Warm Wishes"
          title="Blessings"
          description="Heartfelt messages from our loved ones that fill our hearts with joy."
        />

        {/* Blessings Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SAMPLE_BLESSINGS.map((blessing, index) => (
            <motion.div
              key={blessing.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card-light p-6 h-full hover:border-champagne/25 transition-all duration-500 group"
              >
                {/* Quote mark */}
                <span className="font-display text-4xl text-champagne/10 leading-none block mb-2">"</span>

                {/* Message */}
                <p className="font-serif text-ivory/45 text-sm leading-relaxed mb-5">
                  {blessing.message}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-champagne/10 border border-champagne/15 flex items-center justify-center flex-shrink-0 group-hover:bg-champagne/15 transition-colors duration-300">
                    <span className="font-sans text-[10px] font-semibold text-champagne/60 tracking-wider">
                      {blessing.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans text-ivory/60 text-sm font-medium">{blessing.name}</p>
                    <p className="font-sans text-ivory/25 text-[11px]">{blessing.relation}</p>
                  </div>
                  <IoHeart className="text-soft-rose/20 text-sm ml-auto group-hover:text-soft-rose/40 transition-colors duration-300" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlessingsSection;
