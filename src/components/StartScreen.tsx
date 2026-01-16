interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="cosmic-gradient relative flex flex-col items-center justify-center min-h-full p-6 overflow-hidden">
      {/* Animated background glow elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-nebula-purple/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-5 w-96 h-96 bg-cosmic-blue-light/15 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Question Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 opacity-20 text-xs font-mono px-3 py-2 rounded-lg border border-neon-cyan/30 bg-space-dark/20 backdrop-blur-sm animate-[float-up_8s_infinite]"
          style={{ 
            left: '10%',
            boxShadow: 'var(--glow-cyan)',
            animationDelay: '0s',
            willChange: 'transform, box-shadow'
          }}
        >
          Has lived in 3+ countries
        </div>
        <div 
          className="absolute top-1/3 opacity-20 text-xs font-mono px-3 py-2 rounded-lg border border-neon-pink/30 bg-space-dark/20 backdrop-blur-sm animate-[float-up_8s_infinite]"
          style={{ 
            left: '50%',
            boxShadow: 'var(--glow-pink)',
            animationDelay: '1.5s',
            willChange: 'transform, box-shadow'
          }}
        >
          Speaks 2+ languages
        </div>
        <div 
          className="absolute top-2/5 opacity-20 text-xs font-mono px-3 py-2 rounded-lg border border-neon-cyan/30 bg-space-dark/20 backdrop-blur-sm animate-[float-up_8s_infinite]"
          style={{ 
            left: '85%',
            boxShadow: 'var(--glow-cyan)',
            animationDelay: '3s',
            willChange: 'transform, box-shadow'
          }}
        >
          Has a hidden talent
        </div>
      </div>

      {/* Content */}
      <div className="relative text-center max-w-md z-10 space-y-6">
        {/* Hero Section */}
        <div className="space-y-3">
          {/* Punchy Headline */}
          <h2 
            className="text-lg md:text-xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-glow-purple to-neon-cyan animate-[stagger-in_0.6s_ease-out]"
            style={{ textShadow: 'var(--glow-md)' }}
          >
            Turn Awkward Small Talk Into A Game You'll Win
          </h2>

          {/* Title with glow effect */}
          <h1 
            className="text-5xl md:text-6xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-glow-purple via-glow-cyan to-neon-pink animate-[stagger-in_0.8s_ease-out]"
            style={{ textShadow: 'var(--glow-lg)' }}
          >
            Soc Ops
          </h1>
          
          <p 
            className="text-xl md:text-2xl font-display text-glow-cyan opacity-80 animate-[stagger-in_1s_ease-out]"
            style={{ textShadow: 'var(--glow-sm)' }}
          >
            ✦ Social Bingo ✦
          </p>

          {/* Stats Bar */}
          <p 
            className="text-xs md:text-sm font-mono text-star-gold opacity-90 animate-[stagger-in_1.1s_ease-out]"
            style={{ textShadow: '0 0 8px rgba(251, 191, 36, 0.4)' }}
          >
            24+ Questions • ∞ Combos • 0 Awkward Silences
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          <div 
            className="feature-card bg-space-dark/40 rounded-lg p-3 border border-glow-purple/40 animate-[scale-pop_0.6s_ease-out,glow-pulse_2s_infinite] text-center"
            style={{ animationDelay: '0s, 1.4s' }}
          >
            <div className="text-2xl mb-1">🎲</div>
            <h3 className="text-xs font-display font-bold text-glow-cyan mb-1">Random Boards</h3>
            <p className="text-[10px] font-mono text-glow-cyan/70">Every game is unique</p>
          </div>

          <div 
            className="feature-card bg-space-dark/40 rounded-lg p-3 border border-glow-purple/40 animate-[scale-pop_0.6s_ease-out,glow-pulse_2s_infinite] text-center"
            style={{ animationDelay: '0.2s, 1.7s' }}
          >
            <div className="text-2xl mb-1">💾</div>
            <h3 className="text-xs font-display font-bold text-glow-cyan mb-1">Auto-Saves</h3>
            <p className="text-[10px] font-mono text-glow-cyan/70">Pick up where you left off</p>
          </div>

          <div 
            className="feature-card bg-space-dark/40 rounded-lg p-3 border border-glow-purple/40 animate-[scale-pop_0.6s_ease-out,glow-pulse_2s_infinite] text-center"
            style={{ animationDelay: '0.4s, 2s' }}
          >
            <div className="text-2xl mb-1">⚡</div>
            <h3 className="text-xs font-display font-bold text-glow-cyan mb-1">Zero Setup</h3>
            <p className="text-[10px] font-mono text-glow-cyan/70">Tap and play instantly</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="space-y-3">
          {/* Primary CTA Button - 10% larger */}
          <button
            onClick={onStart}
            className="relative w-full bg-gradient-to-r from-nebula-purple to-cosmic-blue-light text-white font-display font-bold py-5 px-10 rounded-lg text-xl overflow-hidden group animate-[stagger-in_1.4s_ease-out] active:scale-95 hover:scale-105 transition-transform"
            style={{ boxShadow: 'var(--glow-lg)', willChange: 'transform, box-shadow' }}
            aria-label="Start playing Social Bingo"
          >
            {/* Glow layer behind button */}
            <div className="absolute inset-0 bg-gradient-to-r from-nebula-purple-light to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-lg -z-10"></div>
            
            <span className="relative flex items-center justify-center">
              START GAME
              <span className="ml-2 animate-pulse">⭐</span>
            </span>
          </button>

          {/* Secondary CTA Link */}
          <a
            href="#questions"
            className="preview-link block text-sm font-mono text-glow-cyan/70 hover:text-glow-cyan animate-[stagger-in_1.6s_ease-out] underline decoration-glow-cyan/30 hover:decoration-glow-cyan"
            aria-label="Preview all bingo questions"
          >
            Preview Questions →
          </a>
        </div>
      </div>
    </div>
  );
}
