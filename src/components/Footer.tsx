import { motion } from 'motion/react';
import { ArrowRight, Facebook, Instagram, Phone } from 'lucide-react';

export function Footer({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <>
      {/* Final CTA Banner */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 relative overflow-hidden">
        {/* Subtle dental chair ambient texture */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.05] dark:opacity-[0.08] blur-sm pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: 'url(/dr_lekota_mid_bottom.jpg)' }}
        />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Don't put off your dental health.</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">Join thousands of happy patients in Pretoria. Experience our pain-free, modern approach to dentistry.</p>
          <button onClick={onOpenBooking} className="bg-white text-primary-900 px-8 py-4 rounded-full text-lg font-bold transition-transform hover:scale-105 active:scale-95 shadow-xl inline-flex items-center gap-2">
            <span>Book Online Now</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Social Media Gallery */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-gray-900 dark:text-white font-bold text-2xl mb-8 flex items-center justify-center gap-2">
            <Instagram size={28} className="text-primary-600" /> Follow us Behind the Smiles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
             <div className="relative group overflow-hidden rounded-2xl shadow-md">
               <img src="/socialmediaimage1.jpg" className="object-cover h-64 w-full group-hover:scale-105 transition-transform duration-500" alt="Social Media 1" />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <Instagram size={32} className="text-white" />
               </div>
             </div>
             <div className="relative group overflow-hidden rounded-2xl shadow-md">
               <img src="/socialmediaimage2.jpg" className="object-cover h-64 w-full group-hover:scale-105 transition-transform duration-500" alt="Social Media 2" />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <Instagram size={32} className="text-white" />
               </div>
             </div>
             <div className="relative group overflow-hidden rounded-2xl shadow-md">
               <img src="/socialmediaimage3.jpg" className="object-cover h-64 w-full group-hover:scale-105 transition-transform duration-500" alt="Social Media 3" />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <Instagram size={32} className="text-white" />
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer Details */}
      <footer className="bg-gray-950 pt-20 pb-10 text-gray-300 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div className="lg:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-6 group">
                <img 
                  src="/originallogo.png" 
                  alt="Tooth Fairy Dental Clinic" 
                  className="w-44 md:w-60 max-h-24 object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] group-hover:scale-105 transition-transform duration-300"
                />
              </a>
              <p className="text-sm text-gray-500 mb-6 max-w-xs leading-relaxed">
                Changing lives... one smile @ a time. Providing premium, pain-free dental care in the heart of Pretoria.
              </p>
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About Dr. Lekota', 'Patient Reviews', 'Contact Us', 'Book Appointment'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center">
                      <ArrowRight size={12} className="mr-2" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {['General Dentistry', 'Cosmetic Dentistry', 'Children\'s Dental', 'Restorative Care', 'Emergency Dental'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center">
                      <ArrowRight size={12} className="mr-2" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Practice Info</h4>
              <ul className="space-y-4">
                <li className="text-sm text-gray-400 flex items-start">
                  <span className="text-primary-500 mr-2 shrink-0">📍</span>
                  Shop 122, Tramshed, Cnr Francis Baard & Lilian Ngoyi, Pretoria
                </li>
                <li className="text-sm text-gray-400 flex items-center">
                  <span className="text-primary-500 mr-2 shrink-0">📞</span>
                  +27 61 583 0032
                </li>
                <li className="text-sm text-gray-400 flex items-center">
                  <span className="text-primary-500 mr-2 shrink-0">✉️</span>
                  lekota1206@gmail.com
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              &copy; 2026 Tooth Fairy Dental Clinic™. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
