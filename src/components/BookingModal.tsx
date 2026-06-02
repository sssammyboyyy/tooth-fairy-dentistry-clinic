import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar as CalendarIcon, Clock, User, Phone, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

export function BookingModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        // Reset after animation
        setTimeout(() => {
          setStep(1);
          setIsSuccess(false);
          setService(''); setDate(''); setTime(''); setName(''); setPhone('');
        }, 500);
      }, 2500);
    }
  };

  const services = [
    "General Checkup & Clean",
    "Teeth Whitening",
    "Toothache / Emergency",
    "Consultation - Implants/Veneers",
    "Children's Dental"
  ];

  const timeSlots = ["09:00", "10:00", "11:30", "13:00", "14:30", "16:00"];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-900/60 dark:bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-full"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white">
                {isSuccess ? 'Booking Confirmed!' : 'Book Your Visit'}
              </h3>
              <button 
                onClick={onClose}
                className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                    className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">You're all set!</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    We've received your request for {date || 'soon'} at {time || 'a time'}. Our team will contact you shortly to confirm.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col h-full">
                  
                  {/* Step Progress */}
                  <div className="flex gap-2 mb-8">
                    {[1, 2, 3].map(i => (
                      <div key={i} className={`flex-1 h-1.5 rounded-full transition-colors ${step >= i ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-800'}`} />
                    ))}
                  </div>

                  {/* Step 1: Service Selection */}
                  {step === 1 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">What do you need help with?</h4>
                      <div className="space-y-3">
                        {services.map(s => (
                          <label key={s} className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${service === s ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 shadow-sm text-primary-700 dark:text-primary-300' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300'}`}>
                            <input 
                              type="radio" 
                              name="service" 
                              value={s} 
                              checked={service === s} 
                              onChange={(e) => setService(e.target.value)}
                              className="hidden"
                              required
                            />
                            <span className="font-medium">{s}</span>
                            {service === s && <CheckCircle2 size={18} className="ml-auto text-primary-600" />}
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Date & Time */}
                  {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                      <div className="mb-6">
                        <label className="block font-bold text-gray-900 dark:text-white mb-2 ml-1">Preferred Date</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <CalendarIcon size={18} className="text-gray-400" />
                          </div>
                          <input 
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow text-gray-900 dark:text-white"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block font-bold text-gray-900 dark:text-white mb-2 ml-1">Preferred Time</label>
                        <div className="grid grid-cols-2 gap-3 mb-2">
                          {timeSlots.map(t => (
                            <label key={t} className={`flex items-center justify-center p-3 border rounded-xl cursor-pointer transition-all ${time === t ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-bold shadow-sm' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600'}`}>
                              <input 
                                type="radio" 
                                name="time" 
                                value={t} 
                                checked={time === t} 
                                onChange={(e) => setTime(e.target.value)}
                                className="hidden"
                                required
                              />
                               <Clock size={16} className="mr-2 opacity-50" />
                              <span>{t}</span>
                            </label>
                          ))}
                        </div>
                        <p className="text-xs text-center text-gray-500 mt-2">* Final time will be confirmed by reception.</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Details */}
                  {step === 3 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                      <div className="space-y-4">
                        <div>
                          <label className="block font-bold text-gray-900 dark:text-white mb-2 ml-1">Your Full Name</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                               <User size={18} className="text-gray-400" />
                            </div>
                            <input 
                              type="text" 
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="John Doe"
                              required
                              className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow text-gray-900 dark:text-white"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block font-bold text-gray-900 dark:text-white mb-2 ml-1">Phone Number</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                               <Phone size={18} className="text-gray-400" />
                            </div>
                            <input 
                              type="tel" 
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="061 583 0032"
                              required
                              className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow text-gray-900 dark:text-white"
                            />
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl mt-6 border border-gray-100 dark:border-gray-700">
                          <h5 className="font-bold text-sm text-gray-900 dark:text-white mb-2">Booking Summary:</h5>
                          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            <li><span className="font-medium mr-1">Service:</span> {service}</li>
                            <li><span className="font-medium mr-1">When:</span> {date} @ {time}</li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-between gap-4 mt-auto">
                    {step > 1 ? (
                      <button 
                        type="button" 
                        onClick={() => setStep(step - 1)}
                        className="flex items-center px-6 py-3 font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-full"
                      >
                         <ChevronLeft size={18} className="mr-1" /> Back
                      </button>
                    ) : <div></div>}
                    <button 
                      type="submit"
                      disabled={
                        (step === 1 && !service) ||
                        (step === 2 && (!date || !time)) || 
                        (step === 3 && (!name || !phone))
                      }
                      className="flex items-center px-8 py-3 bg-primary-600 text-white font-bold rounded-full shadow-lg shadow-primary-500/25 hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {step === 3 ? 'Confirm Booking' : 'Continue'}
                      {step !== 3 && <ChevronRight size={18} className="ml-1" />}
                    </button>
                  </div>

                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
