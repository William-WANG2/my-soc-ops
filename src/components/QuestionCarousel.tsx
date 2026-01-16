import { useState, useEffect, useRef } from 'react';
import { questions } from '../data/questions';

export function QuestionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Get a selection of questions to show
  const displayQuestions = questions.slice(0, 10);

  // Handle responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth >= 768 ? 3 : 1);
    };
    
    // Initial check
    updateItemsPerView();
    
    // Add resize listener
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % displayQuestions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, displayQuestions.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  
  const handleTouchStart = () => {
    setIsPaused(true);
  };
  
  const handleTouchEnd = () => {
    // Keep paused for a bit longer after touch ends to allow reading
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h3 className="font-display font-bold text-glow-cyan mb-4 text-lg text-center" 
          style={{ textShadow: 'var(--glow-sm)' }}>
        Sample Questions
      </h3>
      
      <div 
        className="relative overflow-hidden rounded-xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-out gap-3 px-2"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
          }}
        >
          {displayQuestions.map((question, index) => (
            <div
              key={index}
              className="flex-shrink-0 backdrop-blur-md bg-space-dark/40 rounded-lg p-4 border border-glow-purple/40 min-h-[80px] flex items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:border-glow-cyan/60"
              style={{
                width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 0.75 / itemsPerView}rem)`,
                boxShadow: '0 0 20px rgba(196, 132, 252, 0.2), inset 0 0 15px rgba(196, 132, 252, 0.05)',
                willChange: 'transform'
              }}
            >
              <p className="text-glow-cyan/80 text-sm font-mono font-semibold">
                {question}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-4">
        {displayQuestions.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-glow-cyan w-6 animate-[glow-pulse-cyan_2s_ease-in-out_infinite]'
                : 'bg-glow-purple/40 hover:bg-glow-purple/60'
            }`}
            style={index === currentIndex ? { boxShadow: 'var(--glow-cyan)' } : {}}
            aria-label={`Go to question ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
