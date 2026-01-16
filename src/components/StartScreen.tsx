import { useState } from 'react';
import { MiniBoardPreview } from './MiniBoardPreview';
import { QuestionCarousel } from './QuestionCarousel';
import { DemoModal } from './DemoModal';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  const [showDemo, setShowDemo] = useState(false);

  const handleDemoStart = () => {
    setShowDemo(false);
    onStart();
  };

  return (
    <div className="cosmic-gradient relative min-h-full overflow-y-auto overflow-x-hidden">
      {/* Animated background glow elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-nebula-purple/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-5 w-96 h-96 bg-cosmic-blue-light/15 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating question bubbles */}
      {['bikes to work', 'has a pet', 'plays an instrument', 'loves cooking', 'has traveled to Asia'].map((question, index) => (
        <div
          key={index}
          className="absolute text-xs font-mono text-glow-cyan/30 backdrop-blur-sm bg-space-dark/20 px-3 py-1.5 rounded-full border border-glow-purple/20 pointer-events-none opacity-0 animate-[float-up_8s_ease-in_infinite]"
          style={{
            left: `${15 + index * 18}%`,
            bottom: '-50px',
            animationDelay: `${index * 1.5}s`,
            willChange: 'transform, opacity'
          }}
        >
          {question}
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 max-w-xl mx-auto px-6 py-12 space-y-12">
        
        {/* 1. Hero Section with Mini Board Preview */}
        <section className="text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-display font-bold text-glow-cyan animate-[stagger-in_0.6s_ease-out]"
                style={{ textShadow: 'var(--glow-sm)' }}>
              Break The Ice. Win at Bingo.
            </h2>
            
            <h1 className="text-6xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-glow-purple via-glow-cyan to-neon-pink animate-[stagger-in_0.8s_ease-out]"
              style={{ textShadow: 'var(--glow-lg)' }}>
              Soc Ops
            </h1>
            
            <p className="text-lg font-display text-glow-cyan/80 animate-[stagger-in_1s_ease-out]"
              style={{ textShadow: 'var(--glow-sm)' }}>
              The social mixer game you'll actually want to play
            </p>
          </div>

          {/* Mini Board Preview */}
          <div className="animate-[stagger-in_1.2s_ease-out]">
            <MiniBoardPreview />
          </div>

          {/* Stats Bar */}
          <div className="flex items-center justify-center gap-4 text-sm font-mono text-glow-cyan/60 animate-[stagger-in_1.4s_ease-out]">
            <span className="flex items-center gap-1">
              <span className="text-neon-pink">◆</span> 24+ Questions
            </span>
            <span className="flex items-center gap-1">
              <span className="text-neon-pink">◆</span> Infinite Boards
            </span>
            <span className="flex items-center gap-1">
              <span className="text-neon-pink">◆</span> Pure Fun
            </span>
          </div>
        </section>

        {/* 2. Feature Cards */}
        <section className="animate-[stagger-in_1.6s_ease-out]">
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: '🎲', title: 'Every Board is Unique', delay: '0s' },
              { icon: '⚡', title: 'Instant Play', delay: '0.1s' },
              { icon: '💾', title: 'Auto-Saves', delay: '0.2s' },
              { icon: '🎉', title: 'Break The Ice', delay: '0.3s' },
            ].map((feature, index) => (
              <button
                key={index}
                className="backdrop-blur-md bg-space-dark/40 rounded-lg p-4 border border-glow-purple/40 transition-all duration-300 hover:scale-105 hover:border-glow-cyan/60 active:scale-95 animate-[scale-pop_0.6s_ease-out] group"
                style={{
                  boxShadow: '0 0 20px rgba(196, 132, 252, 0.2), inset 0 0 15px rgba(196, 132, 252, 0.05)',
                  animationDelay: feature.delay,
                  willChange: 'transform'
                }}
                onClick={() => {}}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <div className="text-glow-cyan/80 text-sm font-mono font-semibold">{feature.title}</div>
              </button>
            ))}
          </div>
        </section>

        {/* 3. Question Carousel */}
        <section className="animate-[stagger-in_1.8s_ease-out]">
          <QuestionCarousel />
        </section>

        {/* 4. Dual CTA Section */}
        <section className="space-y-3 animate-[stagger-in_2s_ease-out]">
          <button
            onClick={onStart}
            className="relative w-full bg-gradient-to-r from-nebula-purple to-cosmic-blue-light text-white font-display font-bold py-4 px-8 rounded-lg text-lg overflow-hidden group transition-transform active:scale-95"
            style={{ boxShadow: 'var(--glow-lg)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-nebula-purple-light to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-lg -z-10"></div>
            <span className="relative flex items-center justify-center">
              START GAME
              <span className="ml-2 animate-pulse">⭐</span>
            </span>
          </button>

          <button
            onClick={() => setShowDemo(true)}
            className="relative w-full backdrop-blur-md bg-space-dark/40 text-glow-cyan border border-glow-purple/40 font-display font-bold py-3 px-8 rounded-lg text-base overflow-hidden group transition-all hover:border-glow-cyan/60 active:scale-95"
            style={{ boxShadow: '0 0 20px rgba(196, 132, 252, 0.3)' }}
          >
            <span className="relative flex items-center justify-center">
              TRY DEMO MODE
              <span className="ml-2">✨</span>
            </span>
          </button>
        </section>
      </div>

      {/* Demo Modal */}
      {showDemo && (
        <DemoModal onClose={() => setShowDemo(false)} onStartGame={handleDemoStart} />
      )}
    </div>
  );
}
