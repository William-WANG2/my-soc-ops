import { useState, useEffect } from 'react';
import { questions } from '../data/questions';

// LCG constants for pseudo-random number generation
const LCG_MULTIPLIER = 1103515245;
const LCG_INCREMENT = 12345;
const LCG_MODULUS = 0x7fffffff;

export function MiniBoardPreview() {
  const [currentQuestionSet, setCurrentQuestionSet] = useState(0);
  
  // Get 9 random questions for the mini board using Fisher-Yates shuffle
  const getQuestionSet = (setIndex: number) => {
    const shuffled = [...questions];
    // Use setIndex to create different boards for each cycle
    let seed = setIndex;
    
    // Fisher-Yates shuffle with seeded randomization
    for (let i = shuffled.length - 1; i > 0; i--) {
      // Simple LCG (Linear Congruential Generator) for pseudo-random seeding
      seed = (seed * LCG_MULTIPLIER + LCG_INCREMENT) & LCG_MODULUS;
      const j = seed % (i + 1);
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 9);
  };

  const displayQuestions = getQuestionSet(currentQuestionSet);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestionSet(prev => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-1.5 w-full max-w-[280px] mx-auto">
      {displayQuestions.map((question, index) => {
        const isFreeSpace = index === 4; // Center square
        
        return (
          <div
            key={`${currentQuestionSet}-${index}`}
            className={`
              relative flex items-center justify-center p-2 text-center 
              rounded-lg transition-all duration-300 min-h-[70px] text-[10px] leading-tight
              font-mono font-semibold backdrop-blur-sm border animate-[stagger-in_0.5s_ease-out]
              ${isFreeSpace 
                ? 'bg-gradient-to-br from-star-gold/20 to-star-gold/10 border-star-gold/60 text-star-gold font-display font-bold animate-[glow-pulse_2s_ease-in-out_infinite]' 
                : 'bg-space-dark/40 border-glow-purple/40 text-glow-cyan/70 hover:scale-105 hover:border-glow-cyan/70 hover:bg-space-dark/60'
              }
            `}
            style={{
              boxShadow: isFreeSpace 
                ? '0 0 20px rgba(251, 191, 36, 0.4), inset 0 0 10px rgba(251, 191, 36, 0.1)'
                : '0 0 15px rgba(139, 92, 246, 0.2)',
              animationDelay: `${index * 0.05}s`,
              willChange: 'transform, opacity'
            }}
          >
            <span className="break-words hyphens-auto">
              {isFreeSpace ? 'FREE' : question}
            </span>
            {!isFreeSpace && (
              <div 
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ boxShadow: '0 0 25px rgba(6, 182, 212, 0.5)' }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
