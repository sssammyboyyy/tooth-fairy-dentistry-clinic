import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Stethoscope, Sparkles, Baby, PenTool as Tool, AlertCircle, Heart, X, CheckCircle2, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    id: 'general',
    title: 'General Dentistry',
    icon: Stethoscope,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    bullets: ["Children's Dental", "Checkup & Clean", "Dental Fillings", "Gum Disease", "Toothache"],
    description: "Our comprehensive general dentistry services form the foundation of a healthy smile. Regular checkups, thorough cleanings, and preventative care ensure that your teeth and gums stay in optimal condition, catching potential issues early before they become costly problems."
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    icon: Sparkles,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    bullets: ["Teeth Whitening", "Dentures", "Dental Implants", "Invisalign, Bridges", "Porcelain Veneers"],
    description: "Transform your smile with our advanced cosmetic treatments. Whether you're looking for a brighter smile through professional whitening, or a complete smile makeover with veneers or Invisalign, we have the tools and expertise to build the smile of your dreams."
  },
  {
    id: 'childrens',
    title: "Children's Dental",
    icon: Baby,
    color: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    bullets: ["Check-ups", "X-rays & Cleaning", "Fissure Sealing", "Fillings & Extractions", "Gentle Root Canals"],
    description: "We understand that early dental experiences shape a child's lifelong attitude towards oral health. Our gentle, patient approach ensures your little ones feel safe and relaxed while receiving top-tier preventative and restorative care."
  },
  {
    id: 'restorative',
    title: 'Restorative Dentistry',
    icon: Tool,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    bullets: ["Dental Fillings", "Root Canals", "Dental Crowns", "Inlays & Onlays", "Full Mouth Rehab"],
    description: "Restore function and aesthetics to damaged or decayed teeth. Utilizing state-of-the-art materials, our restorative procedures like crowns, root canals, and modern fillings are designed to look natural and last for years."
  },
  {
    id: 'emergency',
    title: 'Emergency Care',
    icon: AlertCircle,
    color: 'text-red-500',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    bullets: ["Same-Day Appointments", "Severe Toothache", "Knocked-out Teeth", "Broken Fillings", "Abscess Treatment"],
    description: "Dental emergencies don't wait for convenient times. We reserve same-day appointment slots for urgent cases to provide immediate relief from pain and prevent further complications, ensuring you are cared for when you need it most."
  },
  {
    id: 'senior',
    title: 'Senior Dental Care',
    icon: Heart,
    color: 'text-rose-500',
    bgColor: 'bg-rose-50 dark:bg-rose-900/20',
    bullets: ["Dentures & Partials", "Gum Disease Care", "Dry Mouth Relief", "Oral Cancer Screening", "Implant Maintenance"],
    description: "As we age, our dental needs evolve. We provide specialized, compassionate care for mature patients, focusing on preserving natural teeth, managing age-related oral conditions, and crafting comfortable, functional dentures and implants."
  }
];

export function Services({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [activeService, setActiveService] = useState<typeof servicesData[0] | null>(null);

  // Lock body scroll when modal is open
  if (activeService) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-950 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">Complete Dental Care for the Whole Family</h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg">From routine checkups to full smile makeovers, we utilize the latest technology to ensure a stress-free, pain-free experience.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={service.id}
              onClick={() => setActiveService(service)}
              className="group cursor-pointer bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-100 dark:hover:border-gray-700 relative overflow-hidden flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.bgColor} ${service.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">{service.title}</h4>
              <ul className="space-y-3 mb-8 flex-grow">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle2 size={16} className="mr-2 text-primary-500 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm mt-auto opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
              className="absolute inset-0 bg-gray-900/60 dark:bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              <div className={`p-8 sm:p-10 ${activeService.bgColor}`}>
                <button 
                  onClick={() => setActiveService(null)}
                  className="absolute top-6 right-6 p-2 bg-white/50 dark:bg-black/20 hover:bg-white dark:hover:bg-black/40 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-900 dark:text-white" />
                </button>
                <div className={`w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 ${activeService.color} flex items-center justify-center mb-6 shadow-sm`}>
                  <activeService.icon size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white">{activeService.title}</h3>
              </div>
              <div className="p-8 sm:p-10">
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                  {activeService.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {activeService.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                      <CheckCircle2 size={18} className="mr-3 text-primary-500 shrink-0" />
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{bullet}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end gap-4">
                  <button 
                    onClick={() => setActiveService(null)}
                    className="px-6 py-3 font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Close
                  </button>
                  <button onClick={onOpenBooking} className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-colors shadow-lg shadow-primary-500/25">
                    Book Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
