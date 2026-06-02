import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, MapPin, Phone, Menu, X, CalendarCheck } from 'lucide-react';

export function Navbar({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check initial theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden md:flex items-center justify-between px-8 py-2 bg-gray-900 text-gray-300 text-xs font-medium tracking-wide">
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
            <MapPin size={14} className="text-primary-500" />
            <span>Tramshed Shopping Centre, Pretoria</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:+27615830032" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={14} className="text-primary-500" />
            <span>+27 61 583 0032</span>
          </a>
          <span className="text-gray-600">|</span>
          <span>Mon-Fri: 8am - 5pm, Sat: 9am - 1pm</span>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm py-2' 
            : 'bg-white dark:bg-gray-950 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img 
              src="/originallogo.png" 
              alt="Tooth Fairy Dental Clinic" 
              className="w-44 md:w-56 max-h-16 md:max-h-20 object-contain dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4 border-l border-gray-200 dark:border-gray-800 pl-6">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <button onClick={onOpenBooking} className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-primary-500/25 active:scale-95">
                <CalendarCheck size={16} />
                <span>Book Visit</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 text-gray-500"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-900 dark:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-gray-900 dark:text-gray-100 block py-2"
                  >
                    {link.name}
                  </a>
                ))}
                <button onClick={onOpenBooking} className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white px-5 py-3 rounded-xl mt-2 font-medium">
                  <CalendarCheck size={18} />
                  <span>Book Appointment Now</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
