import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    initials: "SM",
    rating: 5,
    text: "I used to be terrified of the dentist, but Dr. Lekota completely changed that. The process was entirely pain-free, and I felt so comfortable. Highly recommend to anyone with dental anxiety!"
  },
  {
    id: 2,
    name: "Thabo K.",
    initials: "TK",
    rating: 5,
    text: "The clinic in Tramshed is beautifully modern. I had a crown fitted, and the technology they use made it so quick and easy. My new smile looks fantastic."
  },
  {
    id: 3,
    name: "Elena R.",
    initials: "ER",
    rating: 5,
    text: "Took my 5-year-old for her first checkup. The staff was incredibly gentle and patient. She actually left with a smile on her face. Best pediatric dental experience!"
  },
  {
    id: 4,
    name: "David N.",
    initials: "DN",
    rating: 5,
    text: "Broke a tooth over the weekend and they saw me on Monday morning for an emergency appointment. Fast, professional, and saved my tooth. 10/10 service."
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="reviews" className="py-24 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-3">Patient Stories</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">Smiles That Speak for Themselves</h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative min-h-[300px] flex items-center justify-center">
            
            <Quote size={120} className="absolute text-gray-100 dark:text-gray-800 z-0 top-0 left-0 -translate-x-4 -translate-y-4" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 bg-white dark:bg-gray-950 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 w-full"
              >
                <div className="flex text-accent-400 mb-6">
                   {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={24} className="fill-current" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-medium mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold font-display text-lg">
                      {testimonials[currentIndex].initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white leading-none mb-1">{testimonials[currentIndex].name}</h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Google Review</span>
                      </p>
                    </div>
                  </div>
                  {/* Google Logo */}
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 shrink-0">
                    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-8 mt-10">
            <button 
              onClick={prev}
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${i === currentIndex ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-700'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button 
               onClick={next}
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
