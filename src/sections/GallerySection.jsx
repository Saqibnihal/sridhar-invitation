import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { IoExpand } from 'react-icons/io5';
import SectionTitle from '../components/ui/SectionTitle';
import Modal from '../components/ui/Modal';

const GALLERY_ITEMS = [
  { id: 1, label: 'Pre-Wedding Shoot', gradient: 'linear-gradient(135deg, #2D1B1B, #4A2828)', span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2' },
  { id: 2, label: 'Engagement Day', gradient: 'linear-gradient(135deg, #1B2D1F, #284A30)', span: 'col-span-1 row-span-1' },
  { id: 3, label: 'Ring Ceremony', gradient: 'linear-gradient(135deg, #2D2A1B, #4A4428)', span: 'col-span-1 row-span-1' },
  { id: 4, label: 'Together Forever', gradient: 'linear-gradient(135deg, #1B1B2D, #28284A)', span: 'col-span-1 row-span-1' },
  { id: 5, label: 'Candid Moments', gradient: 'linear-gradient(135deg, #2D1B2A, #4A2844)', span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-2' },
  { id: 6, label: 'Sunset Walk', gradient: 'linear-gradient(135deg, #2D2B1B, #4A4528)', span: 'col-span-1 row-span-1' },
  { id: 7, label: 'First Dance', gradient: 'linear-gradient(135deg, #1B2A2D, #28444A)', span: 'col-span-1 row-span-1' },
  { id: 8, label: 'With Family', gradient: 'linear-gradient(135deg, #2D1F1B, #4A3428)', span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1' },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = useMemo(() => GALLERY_ITEMS, []);

  return (
    <section id="gallery" className="section-padding relative overflow-hidden w-full flex flex-col items-center">

      <div className="relative max-w-6xl mx-auto">
        <SectionTitle
          subtitle="Precious Moments"
          title="Our Gallery"
          description="A glimpse into the beautiful moments we've shared together."
        />

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`${item.span} relative rounded-2xl overflow-hidden cursor-pointer group`}
              onClick={() => setSelectedIndex(index)}
            >
              {/* Background */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{ background: item.gradient }}
              />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-ivory/15 text-lg md:text-xl group-hover:text-ivory/25 transition-colors duration-500">
                  {item.label}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                    <IoExpand className="text-white text-lg" />
                  </div>
                </motion.div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 rounded-2xl border border-champagne/5 group-hover:border-champagne/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Modal
        images={images}
        currentIndex={selectedIndex || 0}
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
      />
    </section>
  );
};

export default GallerySection;
