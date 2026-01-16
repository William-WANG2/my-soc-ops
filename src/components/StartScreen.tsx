import { questions } from '../data/questions';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  // Select 8 sample questions for preview
  const sampleQuestions = questions.slice(0, 8);

  return (
    <div className="cosmic-gradient relative min-h-screen overflow-x-hidden">
      {/* Floating question bubbles scattered throughout */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] backdrop-blur-sm bg-space-dark/30 rounded-full px-4 py-2 text-xs text-glow-cyan/60 border border-glow-purple/20 animate-[float-up_8s_infinite]" style={{ animationDelay: '0s' }}>
          has a pet
        </div>
        <div className="absolute top-[25%] right-[10%] backdrop-blur-sm bg-space-dark/30 rounded-full px-4 py-2 text-xs text-glow-cyan/60 border border-glow-purple/20 animate-[float-up_10s_infinite]" style={{ animationDelay: '2s' }}>
          loves cooking
        </div>
        <div className="absolute top-[45%] left-[15%] backdrop-blur-sm bg-space-dark/30 rounded-full px-4 py-2 text-xs text-glow-cyan/60 border border-glow-purple/20 animate-[float-up_9s_infinite]" style={{ animationDelay: '4s' }}>
          plays video games
        </div>
        <div className="absolute top-[60%] right-[8%] backdrop-blur-sm bg-space-dark/30 rounded-full px-4 py-2 text-xs text-glow-cyan/60 border border-glow-purple/20 animate-[float-up_11s_infinite]" style={{ animationDelay: '1s' }}>
          speaks 2+ languages
        </div>
        <div className="absolute top-[80%] left-[20%] backdrop-blur-sm bg-space-dark/30 rounded-full px-4 py-2 text-xs text-glow-cyan/60 border border-glow-purple/20 animate-[float-up_7s_infinite]" style={{ animationDelay: '3s' }}>
          loves spicy food
        </div>
      </div>

      {/* Background glow orbs that shift between sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-nebula-purple/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-[30vh] right-5 w-96 h-96 bg-cosmic-blue-light/15 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[60vh] left-1/4 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[90vh] right-1/3 w-96 h-96 bg-glow-purple/10 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="relative text-center max-w-2xl z-10">
          {/* Headline */}
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-glow-cyan/90 animate-[stagger-in_0.6s_ease-out]">
            Turn Awkward Small Talk Into A Game You'll Actually Win
          </h2>

          {/* Title with glow effect */}
          <h1 className="text-6xl md:text-7xl font-black font-display mb-2 text-transparent bg-clip-text bg-gradient-to-r from-glow-purple via-glow-cyan to-neon-pink animate-[stagger-in_0.8s_ease-out]"
            style={{ textShadow: 'var(--glow-lg)' }}>
            Soc Ops
          </h1>
          
          <p className="text-2xl md:text-3xl font-display text-glow-cyan mb-8 animate-[stagger-in_1s_ease-out] opacity-80"
            style={{ textShadow: 'var(--glow-sm)' }}>
            ✦ Social Bingo ✦
          </p>

          {/* Stats Bar */}
          <div className="mb-10 animate-[stagger-in_1.1s_ease-out]">
            <p className="text-sm md:text-base font-mono text-star-gold text-glow-gold flex flex-wrap items-center justify-center gap-2">
              <span>24+ Unique Questions</span>
              <span className="text-neon-cyan">•</span>
              <span>Infinite Combinations</span>
              <span className="text-neon-cyan">•</span>
              <span>0 Awkward Silences</span>
              <span className="text-neon-cyan">•</span>
              <span>100% Fun</span>
            </p>
          </div>

          {/* Primary CTA */}
          <button
            onClick={onStart}
            className="relative w-full max-w-md mx-auto bg-gradient-to-r from-nebula-purple to-cosmic-blue-light text-white font-display font-bold py-5 px-10 rounded-lg text-xl overflow-hidden group animate-[stagger-in_1.3s_ease-out] hover:scale-105 active:scale-95 transition-transform"
            style={{ boxShadow: 'var(--glow-lg)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-nebula-purple-light to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-lg -z-10"></div>
            <span className="relative flex items-center justify-center">
              START GAME
              <span className="ml-2 animate-pulse">⭐</span>
            </span>
          </button>

          {/* Scroll indicator */}
          <div className="mt-16 animate-[stagger-in_1.5s_ease-out]">
            <div className="inline-block animate-[bounce-glow_2s_infinite]">
              <svg className="w-8 h-8 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Cosmic Divider */}
      <div className="cosmic-divider my-8"></div>

      {/* SECTION 2: FEATURE SHOWCASE */}
      <section className="relative px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-display text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-glow-purple via-glow-cyan to-neon-pink"
            style={{ textShadow: 'var(--glow-md)' }}>
            Why Soc Ops?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="backdrop-blur-md bg-space-dark/40 rounded-xl p-4 border border-glow-purple/40 animate-[scroll-fade-in_0.6s_ease-out]"
              style={{ boxShadow: '0 0 20px rgba(196, 132, 252, 0.15)' }}>
              <div className="text-3xl mb-2">🎲</div>
              <h3 className="font-display font-bold text-glow-cyan mb-2">Randomized Boards</h3>
              <p className="text-sm text-glow-cyan/70 font-mono">Every game is unique with shuffled questions</p>
            </div>

            {/* Feature Card 2 */}
            <div className="backdrop-blur-md bg-space-dark/40 rounded-xl p-4 border border-glow-purple/40 animate-[scroll-fade-in_0.7s_ease-out]"
              style={{ boxShadow: '0 0 20px rgba(196, 132, 252, 0.15)' }}>
              <div className="text-3xl mb-2">💾</div>
              <h3 className="font-display font-bold text-glow-cyan mb-2">Auto-Save Progress</h3>
              <p className="text-sm text-glow-cyan/70 font-mono">Pick up right where you left off</p>
            </div>

            {/* Feature Card 3 */}
            <div className="backdrop-blur-md bg-space-dark/40 rounded-xl p-4 border border-glow-purple/40 animate-[scroll-fade-in_0.8s_ease-out]"
              style={{ boxShadow: '0 0 20px rgba(196, 132, 252, 0.15)' }}>
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-display font-bold text-glow-cyan mb-2">Zero Setup Required</h3>
              <p className="text-sm text-glow-cyan/70 font-mono">Tap and play instantly at any event</p>
            </div>

            {/* Feature Card 4 */}
            <div className="backdrop-blur-md bg-space-dark/40 rounded-xl p-4 border border-glow-purple/40 animate-[scroll-fade-in_0.9s_ease-out]"
              style={{ boxShadow: '0 0 20px rgba(196, 132, 252, 0.15)' }}>
              <div className="text-3xl mb-2">🎉</div>
              <h3 className="font-display font-bold text-glow-cyan mb-2">Break The Ice</h3>
              <p className="text-sm text-glow-cyan/70 font-mono">Turn awkward mingling into engaging conversations</p>
            </div>

            {/* Feature Card 5 */}
            <div className="backdrop-blur-md bg-space-dark/40 rounded-xl p-4 border border-glow-purple/40 animate-[scroll-fade-in_1s_ease-out]"
              style={{ boxShadow: '0 0 20px rgba(196, 132, 252, 0.15)' }}>
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-display font-bold text-glow-cyan mb-2">Perfect for Events</h3>
              <p className="text-sm text-glow-cyan/70 font-mono">Team building, networking, mixers, and more</p>
            </div>

            {/* Feature Card 6 */}
            <div className="backdrop-blur-md bg-space-dark/40 rounded-xl p-4 border border-glow-purple/40 animate-[scroll-fade-in_1.1s_ease-out]"
              style={{ boxShadow: '0 0 20px rgba(196, 132, 252, 0.15)' }}>
              <div className="text-3xl mb-2">⭐</div>
              <h3 className="font-display font-bold text-glow-cyan mb-2">5-in-a-Row Wins</h3>
              <p className="text-sm text-glow-cyan/70 font-mono">Classic bingo gameplay everyone knows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cosmic Divider */}
      <div className="cosmic-divider my-8"></div>

      {/* SECTION 3: SAMPLE QUESTIONS PREVIEW */}
      <section className="relative px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-display text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-glow-purple via-glow-cyan to-neon-pink"
            style={{ textShadow: 'var(--glow-md)' }}>
            Sample Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {sampleQuestions.map((question, index) => (
              <div
                key={index}
                className={`backdrop-blur-md bg-space-dark/40 rounded-xl p-4 border border-glow-cyan/30 ${
                  index % 2 === 0 ? 'animate-[glow-pulse_3s_infinite]' : ''
                }`}
                style={{
                  boxShadow: index % 2 === 0 
                    ? '0 0 20px rgba(6, 182, 212, 0.2)' 
                    : '0 0 15px rgba(196, 132, 252, 0.15)',
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <p className="font-mono text-glow-cyan/90 text-center">{question}</p>
              </div>
            ))}
          </div>

          <p className="text-center font-mono text-lg text-glow-cyan">
            ...and many more! Every board is different.
          </p>
        </div>
      </section>

      {/* Cosmic Divider */}
      <div className="cosmic-divider my-8"></div>

      {/* SECTION 4: FINAL CTA */}
      <section className="relative px-6 py-20 pb-32">
        {/* Extra background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-nebula-purple/30 via-cosmic-blue-light/20 to-neon-pink/30 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="relative max-w-2xl mx-auto text-center z-10">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-10 text-glow-cyan"
            style={{ textShadow: 'var(--glow-lg)' }}>
            Ready to Break the Ice?
          </h2>

          {/* Primary Button - Larger */}
          <button
            onClick={onStart}
            className="relative w-full max-w-lg mx-auto mb-8 bg-gradient-to-r from-nebula-purple to-cosmic-blue-light text-white font-display font-bold py-6 px-12 rounded-xl text-2xl overflow-hidden group hover:scale-105 active:scale-95 transition-transform"
            style={{ boxShadow: 'var(--glow-lg)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-nebula-purple-light to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-lg -z-10"></div>
            <span className="relative flex items-center justify-center">
              START YOUR GAME
              <span className="ml-3 text-3xl animate-pulse">🚀</span>
            </span>
          </button>

          {/* Secondary Link */}
          <a
            href="https://github.com/William-WANG2/my-soc-ops/blob/main/src/data/questions.ts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-glow-cyan/70 hover:text-glow-cyan transition-colors underline decoration-glow-cyan/30 hover:decoration-glow-cyan"
          >
            View All Questions on GitHub →
          </a>
        </div>
      </section>
    </div>
  );
}
