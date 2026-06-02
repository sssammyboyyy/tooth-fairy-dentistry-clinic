import { useState } from 'react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ClinicalDivider } from './components/ClinicalDivider';
import { BeforeAfter } from './components/BeforeAfter';
import { StatsBar } from './components/StatsBar';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CoreUI } from './components/CoreUI';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen">
      <Loader />
      <CoreUI onOpenBooking={() => setIsBookingOpen(true)} />
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <main>
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        <Services onOpenBooking={() => setIsBookingOpen(true)} />
        <ClinicalDivider />
        <BeforeAfter />
        <StatsBar />
        <About onOpenBooking={() => setIsBookingOpen(true)} />
        <Testimonials />
        <FAQ />
        <Contact onOpenBooking={() => setIsBookingOpen(true)} />
      </main>
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />
      
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}


