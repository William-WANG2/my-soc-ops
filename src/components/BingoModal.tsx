interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  const particleDelay = [0, 0.2, 0.4, 0.6, 0.8];
  const particlePositions = [20, 35, 50, 65, 80];

  return (
    <div className="fixed inset-0 bg-space-dark/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-[stagger-in_0.3s_ease-out]">
      <div className="relative bg-gradient-to-br from-nebula-purple/20 to-cosmic-blue-light/10 rounded-2xl p-8 max-w-xs w-full text-center border border-glow-purple/40 overflow-hidden group"
        style={{ boxShadow: '0 0 80px rgba(196, 132, 252, 0.6), 0 0 120px rgba(6, 182, 212, 0.4), inset 0 0 30px rgba(196, 132, 252, 0.1)' }}>
        
        {/* Animated glow background */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/0 via-glow-purple/10 to-neon-cyan/0 animate-pulse pointer-events-none"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Celebration emoji with animation */}
          <div className="text-6xl mb-6 animate-[scale-pop_0.6s_cubic-bezier(0.34,1.56,0.64,1)] flex justify-center">
            🎉
          </div>
          
          <h2 className="text-4xl font-display font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-star-gold via-neon-pink to-glow-cyan animate-[stagger-in_0.5s_ease-out]"
            style={{ textShadow: 'var(--glow-lg)' }}>
            BINGO!
          </h2>
          
          <p className="text-glow-cyan/80 mb-8 font-mono text-lg animate-[stagger-in_0.7s_ease-out]">
            You completed a line! 🌟
          </p>

          {/* Particle effects */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particleDelay.map((delay, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-star-gold animate-[float-up_2s_ease-out_infinite] pointer-events-none"
                style={{
                  left: `${particlePositions[i]}%`,
                  bottom: '-10px',
                  animationDelay: `${delay}s`,
                  opacity: 0.7
                }}
              ></div>
            ))}
          </div>
          
          {/* CTA Button */}
          <button
            onClick={onDismiss}
            className="relative w-full bg-gradient-to-r from-nebula-purple to-cosmic-blue-light text-white font-display font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden group/btn animate-[stagger-in_0.9s_ease-out]"
            style={{ boxShadow: 'var(--glow-lg)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-pink opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-lg blur-lg -z-10"></div>
            <span className="relative flex items-center justify-center">
              KEEP PLAYING
              <span className="ml-2 animate-pulse">⭐</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
