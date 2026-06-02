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
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center font-bold font-display text-lg">
                    {testimonials[currentIndex].initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Verified Patient</p>
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
