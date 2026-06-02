import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function ClinicalDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax translation for the image
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <div 
      ref={containerRef}
      className="relative h-[350px] md:h-[450px] overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Parallax Translation */}
      <motion.div 
        style={{ 
          y,
          backgroundImage: 'url(/dr_lekota_green_scrubs_patient.jpg)'
        }}
        className="absolute inset-0 bg-cover bg-center h-[130%] w-full top-[-15%]"
      />

      {/* Dark overlay gradients for high readability and blending */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-gray-900/40 to-gray-950/40 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white font-display font-extrabold text-2xl sm:text-4xl md:text-5xl leading-tight tracking-tight drop-shadow-md"
        >
          Every patient receives personalized, <span className="text-primary-400">compassionate care</span>
        </motion.h4>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-16 h-1 bg-primary-500 mx-auto mt-6 rounded-full"
        />
      </div>
    </div>
  );
}
