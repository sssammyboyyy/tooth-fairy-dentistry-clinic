import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: '10', suffix: '+', label: 'Years Experience' },
  { value: '6', suffix: '', label: 'Days Open Weekly' },
  { value: '100', suffix: '%', label: 'Pain-Free Focus' },
  { value: '5000', suffix: '+', label: 'Happy Patients' }
];

export function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-gray-900 dark:bg-black relative overflow-hidden py-16">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-gray-800">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-4">
              <div className="flex items-baseline justify-center mb-1">
                <Counter target={parseInt(stat.value)} isVisible={isVisible} duration={2} />
                <span className="text-3xl md:text-5xl font-display font-bold text-accent-500">{stat.suffix}</span>
              </div>
              <p className="text-sm md:text-base font-medium text-gray-400 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ target, isVisible, duration }: { target: number, isVisible: boolean, duration: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    let animationFrameId: number;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing function: easeOutQuart
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(target * easeOut));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };
    
    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, isVisible, duration]);

  return (
    <span className="text-4xl md:text-6xl font-display font-bold text-white tabular-nums">
      {count}
    </span>
  );
}
