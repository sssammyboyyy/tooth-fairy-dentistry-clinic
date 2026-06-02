import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { GripVertical } from 'lucide-react';

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent | React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent | React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-3">Real Results</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">See the Difference</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              A picture is worth a thousand words. Our cosmetic and restorative treatments can completely transform your smile, boosting your confidence and oral health. 
            </p>
            <ul className="space-y-4 mb-8">
              {['Professional Teeth Whitening', 'Porcelain Veneers & Crowns', 'Complete Smile Makeovers'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 dark:text-gray-300 font-medium">
                  <div className="w-2 h-2 rounded-full bg-accent-500 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
             <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-full text-base font-medium transition-colors hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
              View Smile Gallery
            </button>
          </div>

          <div className="relative">
            {/* Interactive Slider Container */}
            <div 
              ref={containerRef}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden select-none cursor-ew-resize shadow-2xl"
              onMouseDown={(e) => {
                setIsDragging(true);
                handleMove(e.clientX);
              }}
              onTouchStart={(e) => {
                setIsDragging(true);
                handleMove(e.touches[0].clientX);
              }}
            >
              {/* After Image (Background) */}
              <div 
                className="absolute inset-0 bg-no-repeat"
                style={{ 
                  backgroundImage: 'url(/before_after.jpeg)',
                  backgroundSize: '200% 100%',
                  backgroundPosition: 'right center'
                }}
              >
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/70 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold shadow-sm z-10 text-gray-900 dark:text-white">
                  After
                </div>
              </div>

              {/* Before Image (Foreground, Clipped) */}
              <div 
                className="absolute inset-0 bg-no-repeat filter saturate-[0.7] brightness-[0.9]" 
                style={{ 
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                  backgroundImage: 'url(/before_after.jpeg)',
                  backgroundSize: '200% 100%',
                  backgroundPosition: 'left center'
                }}
              >
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/70 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold shadow-sm z-10 text-gray-900 dark:text-white">
                  Before
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-primary-600">
                  <GripVertical size={20} />
                </div>
              </div>
            </div>
            
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4 opacity-75">
              Real patient results — professional teeth whitening & alignment
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
