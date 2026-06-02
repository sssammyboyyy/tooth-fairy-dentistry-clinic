import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do you accept new patients?",
    answer: "Yes, we are currently welcoming new patients to Tooth Fairy Dental Clinic! You can easily book your first consultation online or by calling our reception."
  },
  {
    question: "Is teeth whitening safe for my enamel?",
    answer: "Absolutely. Our professional teeth whitening treatments use safe, clinical-grade gels that effectively lift stains without damaging your tooth enamel. We customize the treatment to minimize any temporary sensitivity."
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "If you have a dental emergency (like a knocked-out tooth or severe pain), please call us immediately. We keep designated slots open every day specifically to handle urgent cases promptly."
  },
  {
    question: "At what age should I bring my child for their first visit?",
    answer: "We recommend bringing your child in for their first dental visit by their first birthday, or when their first tooth appears. Early visits help them get comfortable with the environment and allow us to monitor their development."
  },
  {
    question: "Do you offer payment plans for treatments?",
    answer: "Yes, we believe everyone deserves a healthy smile. We offer various flexible payment options and can assist with medical aid claims. Please speak to our reception for more details on financing your treatment."
  },
  {
    question: "How often should I visit the dentist?",
    answer: "For most people, we recommend a check-up and professional cleaning every six months. However, depending on your specific oral health needs, we might suggest more frequent visits."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Find answers to common questions about our practice, treatments, and policies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-colors ${
                openIndex === index 
                  ? 'border-primary-200 dark:border-primary-900/50 bg-primary-50/50 dark:bg-primary-900/10' 
                  : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`shrink-0 ml-4 p-1 rounded-full ${
                    openIndex === index ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/30' : 'bg-gray-100 text-gray-500 dark:bg-gray-800'
                  }`}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
