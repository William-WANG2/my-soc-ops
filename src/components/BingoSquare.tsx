import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center border rounded-lg transition-all duration-200 select-none min-h-[70px] text-xs leading-tight font-mono font-semibold backdrop-blur-sm';

  let stateClasses = '';
  let glowStyle = {};

  if (square.isMarked) {
    if (isWinning) {
      // Winning state: intense glow
      stateClasses = 'bg-gradient-to-br from-star-gold via-neon-pink to-neon-cyan border-star-gold/80 text-space-dark animate-[glow-pulse_1.5s_ease-in-out_infinite]';
      glowStyle = {
        boxShadow: '0 0 40px rgba(251, 191, 36, 0.8), 0 0 80px rgba(236, 72, 153, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)'
      };
    } else {
      // Marked state: purple glow
      stateClasses = 'bg-gradient-to-br from-nebula-purple-light to-cosmic-blue-light border-glow-purple/60 text-space-darker animate-[glow-pulse_2s_ease-in-out_infinite]';
      glowStyle = { boxShadow: 'var(--glow-md), inset 0 0 15px rgba(196, 132, 252, 0.1)' };
    }
  } else {
    // Unmarked state: dark with subtle glow
    stateClasses = 'bg-space-dark/40 border-glow-purple/30 text-glow-cyan/70 hover:border-glow-cyan/60 hover:bg-space-dark/60 active:bg-nebula-purple/30 active:border-neon-cyan/50';
    glowStyle = { boxShadow: '0 0 15px rgba(139, 92, 246, 0.2)' };
  }

  const freeSpaceClasses = square.isFreeSpace ? 'font-display font-bold text-sm text-star-gold' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      style={glowStyle}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-neon-cyan text-sm font-bold animate-pulse">✨</span>
      )}
      {isWinning && square.isMarked && (
        <span className="absolute inset-0 rounded-lg animate-[scale-pop_0.4s_ease-out] pointer-events-none"
          style={{ boxShadow: 'inset 0 0 15px rgba(255, 255, 255, 0.4)' }}></span>
      )}
    </button>
  );
}
