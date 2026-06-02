import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact({ onOpenBooking }: { onOpenBooking: () => void }) {
  const currentDay = new Date().getDay(); // 0 is Sunday, 1 is Monday...

  const hours = [
    { day: 'Monday', time: '8:00 AM - 5:00 PM', index: 1 },
    { day: 'Tuesday', time: '8:00 AM - 5:00 PM', index: 2 },
    { day: 'Wednesday', time: '8:00 AM - 5:00 PM', index: 3 },
    { day: 'Thursday', time: '8:00 AM - 5:00 PM', index: 4 },
    { day: 'Friday', time: '8:00 AM - 5:00 PM', index: 5 },
    { day: 'Saturday', time: '9:00 AM - 1:00 PM', index: 6 },
    { day: 'Sunday', time: 'Closed', index: 0 },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Subtle blurred ambient background image of reception welcome */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.08] dark:opacity-[0.12] blur-md pointer-events-none"
        style={{ backgroundImage: 'url(/dr_lekota_reception_welcome.jpg)' }}
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-3">Visit Us</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">Ready for a New Smile?</h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            We are conveniently located in the Tramshed Shopping Centre. Reach out to schedule your appointment today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            {/* Location */}
            <div className="col-span-full bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Location</h4>
              <p className="text-gray-600 dark:text-gray-400">Shop 122, Tramshed Shopping Centre</p>
              <p className="text-gray-600 dark:text-gray-400">Cnr Francis Baard & Lilian Ngoyi St</p>
              <p className="text-gray-600 dark:text-gray-400">Pretoria, 0002</p>
            </div>

            {/* Contact Details */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <Phone size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Contact</h4>
              <a href="tel:+27615830032" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 mb-1">+27 61 583 0032 (Primary)</a>
              <a href="tel:+27645043509" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 mb-4">+27 64 504 3509 (Alt)</a>
              <a href="mailto:lekota1206@gmail.com" className="flex items-center text-primary-600 font-medium hover:underline">
                <Mail size={16} className="mr-2" /> Email Us
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Hours</h4>
              <ul className="space-y-2">
                {hours.map((h, i) => (
                  <li key={i} className={`flex justify-between text-sm ${h.index === currentDay ? 'font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 -mx-2 px-2 py-1 rounded-md' : 'text-gray-600 dark:text-gray-400'}`}>
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-full">
               <button onClick={onOpenBooking} className="w-full bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-primary-500/25 active:scale-95">
                Book Your Visit Online
              </button>
            </div>

          </div>

          {/* Live Map Embed */}
          <div className="bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg h-full min-h-[400px] relative border border-gray-100 dark:border-gray-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.6828551608684!2d28.19253457608552!3d-25.7480500455523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95619c968f5665%3A0xa6cdb84f33198083!2sTramshed%20Shopping%20Centre!5e0!3m2!1sen!2sza!4v1716301234567!5m2!1sen!2sza" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '100%', position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Tooth Fairy Dental Clinic Location"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
