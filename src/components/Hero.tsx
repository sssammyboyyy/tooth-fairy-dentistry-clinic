import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Clock, MapPin } from 'lucide-react';

export function Hero({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
      {/* Background Gradients & Shapes */}
      <div className="absolute inset-0 z-0 bg-gray-50 dark:bg-gray-950">
        {/* Soft glow in top right */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-3xl max-h-3xl bg-primary-200/40 dark:bg-primary-900/20 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3"></div>
        {/* Soft amber glow bottom left */}
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-2xl max-h-2xl bg-accent-400/20 dark:bg-accent-900/10 rounded-full blur-3xl opacity-50 -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Text Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">Accepting New Patients Today</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-6"
          >
            Change your life, <br/>
            <span className="text-primary-600 dark:text-primary-400">
              one smile
            </span> at a time.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg"
          >
            Experience stress-free, pain-free dentistry in Pretoria. Modern technology meets compassionate care with Dr. Lesedi Lekota.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button onClick={onOpenBooking} className="flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full text-base font-medium transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-gray-900/10">
              <span>Book Appointment</span>
              <ArrowRight size={18} />
            </button>
            <button className="flex items-center justify-center py-4 px-8 rounded-full text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              Explore Services
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-2">
              <div className="p-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full">
                <ShieldCheck size={18} />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">BDS Qualified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full">
                <Star size={18} />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Pain-Free Care</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-amber-50 dark:bg-amber-900/20 text-accent-500 rounded-full">
                <Clock size={18} />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Same-Day Booking</span>
            </div>
          </motion.div>
          
          {/* Social Media Collage under Trust Signals */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 1 }}
             className="mt-10 mb-8"
          >
             <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Behind the Smiles</h4>
             <div className="grid grid-cols-3 gap-3">
               <img src="/socialmediaimage1.jpg" className="rounded-xl object-cover h-24 sm:h-32 w-full shadow-md" alt="Social Media 1" />
               <img src="/socialmediaimage2.jpg" className="rounded-xl object-cover h-24 sm:h-32 w-full shadow-md" alt="Social Media 2" />
               <img src="/socialmediaimage3.jpg" className="rounded-xl object-cover h-24 sm:h-32 w-full shadow-md" alt="Social Media 3" />
             </div>
          </motion.div>
        </div>

        {/* Visual Composition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
        >
          {/* Main Image placeholder with nice border radius */}
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-800 border-4 border-white/80 dark:border-gray-800/80">
            <img 
              src="/dr_lekota_blue_scrubs.jpg" 
              alt="Dr. Lesedi Lekota" 
              className="w-full h-full object-cover object-center scale-[1.02]"
            />
            {/* Elegant overlay gradient (brand blue to transparent) */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-100/10 via-transparent to-transparent mix-blend-multiply"></div>
          </div>

          {/* Floating Card 3 */}
          <motion.div 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -top-6 left-12 bg-white/95 dark:bg-gray-900/95 p-3.5 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3 backdrop-blur-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-900/20 text-primary-600 flex items-center justify-center shrink-0">
              <MapPin size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900 dark:text-white leading-tight">Pretoria Clinic</p>
              <p className="text-[10px] text-gray-500 mt-0.5">Tramshed Shopping Centre</p>
            </div>
          </motion.div>

          {/* Floating Card 1 */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute -left-6 bottom-12 bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex items-center gap-4 backdrop-blur-sm bg-white/90"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 bg-gray-200 shrink-0 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-accent-400 text-sm">
                <Star className="fill-current" size={14} />
                <Star className="fill-current" size={14} />
                <Star className="fill-current" size={14} />
                <Star className="fill-current" size={14} />
                <Star className="fill-current" size={14} />
              </div>
              <p className="text-xs font-bold text-gray-900 dark:text-white mt-0.5">5.0 from 150+ Reviews</p>
            </div>
          </motion.div>

          {/* Floating Action Button-like element */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute top-20 -right-6 lg:-right-12 bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800"
          >
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"></path></svg>
            </div>
            <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">Advanced<br/>Technology</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
