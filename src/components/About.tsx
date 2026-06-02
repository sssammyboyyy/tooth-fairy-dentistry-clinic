import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Award, Zap, Heart, Shield } from 'lucide-react';

export function About({ onOpenBooking }: { onOpenBooking: () => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image & Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative dashed frame */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-full sm:rounded-[3rem] opacity-50 z-0 hidden sm:block"
            ></motion.div>

            <motion.div 
              style={{ y }}
              className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto shadow-2xl bg-gray-100 dark:bg-gray-800 border-4 border-white/80 dark:border-gray-900/80"
            >
               <img 
                src="/dr_lekota_headshot_2.jpg" 
                alt="Dr. Lesedi Lekota" 
                className="w-full h-full object-cover object-center scale-105"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 sm:bottom-10 sm:-right-10 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-800 z-20 max-w-[200px]"
            >
              <h4 className="text-3xl font-display font-bold text-primary-600 mb-1">10+</h4>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-tight">Years of Dental Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-3">Meet the Lead Dentist</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">Dr. Lesedi Lekota, BDS</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              Dr. Lekota is a passionate dental professional dedicated to changing the stigma around dentistry. With over a decade of experience, she combines advanced clinical expertise with a gentle touch to ensure every visit is stress-free.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base mb-1">BDS Qualified</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Bachelor of Dental Science practitioner.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base mb-1">Latest Technology</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Fully fitted modern dental practice.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-rose-50 dark:bg-rose-900/20 text-rose-600 flex items-center justify-center shrink-0">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base mb-1">Compassionate Care</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Anxiety-free & pain-free focus.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center shrink-0">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base mb-1">Preventative Focus</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Educating patients for long-term health.</p>
                </div>
              </div>
            </div>

            <button onClick={onOpenBooking} className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-lg hover:shadow-primary-500/25 active:scale-95">
              Book a Consultation
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
