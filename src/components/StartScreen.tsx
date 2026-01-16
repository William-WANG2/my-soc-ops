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

      {/* Content */}
      <div className="relative text-center max-w-sm z-10">
        {/* Title with glow effect */}
        <h1 className="text-6xl font-black font-display mb-2 text-transparent bg-clip-text bg-gradient-to-r from-glow-purple via-glow-cyan to-neon-pink animate-[stagger-in_0.8s_ease-out]"
          style={{ textShadow: 'var(--glow-lg)' }}>
          Soc Ops
        </h1>
        
        <p className="text-2xl font-display text-glow-cyan mb-8 animate-[stagger-in_1s_ease-out] opacity-80"
          style={{ textShadow: 'var(--glow-sm)' }}>
          ✦ Social Bingo ✦
        </p>

        {/* Rules Card with glow border */}
        <div className="backdrop-blur-md bg-space-dark/40 rounded-xl p-6 border border-glow-purple/40 mb-8 animate-[stagger-in_1.2s_ease-out]"
          style={{ boxShadow: '0 0 30px rgba(196, 132, 252, 0.2), inset 0 0 20px rgba(196, 132, 252, 0.05)' }}>
          <h2 className="font-display font-bold text-glow-cyan mb-4 text-lg" style={{ textShadow: 'var(--glow-sm)' }}>
            ⚡ How to Play
          </h2>
          <ul className="text-left text-glow-cyan/80 text-sm space-y-2 font-mono">
            <li className="flex items-start">
              <span className="text-neon-pink mr-2">◆</span>
              <span>Find people matching the questions</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-pink mr-2">◆</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-pink mr-2">◆</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        {/* CTA Button with intense glow */}
        <button
          onClick={onStart}
          className="relative w-full bg-gradient-to-r from-nebula-purple to-cosmic-blue-light text-white font-display font-bold py-4 px-8 rounded-lg text-lg overflow-hidden group animate-[stagger-in_1.4s_ease-out] active:scale-95 transition-transform"
          style={{ boxShadow: 'var(--glow-lg)' }}
        >
          {/* Glow layer behind button */}
          <div className="absolute inset-0 bg-gradient-to-r from-nebula-purple-light to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-lg -z-10"></div>
          
          <span className="relative flex items-center justify-center">
            START GAME
            <span className="ml-2 animate-pulse">⭐</span>
          </span>
        </button>
      </div>
    </div>
  );
}
