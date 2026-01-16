import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full cosmic-gradient relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-cosmic-blue-light/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-nebula-purple/10 rounded-full blur-3xl opacity-25"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-4 border-b border-glow-purple/20 backdrop-blur-md bg-space-dark/40">
        <button
          onClick={onReset}
          className="text-glow-cyan/70 hover:text-glow-cyan text-sm px-3 py-2 rounded font-mono font-semibold transition-all hover:scale-110 active:scale-95"
          style={{ textShadow: 'var(--glow-sm)' }}
        >
          ← Back
        </button>
        <h1 className="font-display font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-glow-purple to-glow-cyan"
          style={{ textShadow: 'var(--glow-md)' }}>
          Soc Ops
        </h1>
        <div className="w-20"></div>
      </header>

      {/* Instructions */}
      <p className="relative z-10 text-center text-glow-cyan/60 text-xs py-3 px-4 font-mono">
        ◆ Tap a square when you find someone who matches it ◆
      </p>

      {/* Bingo indicator - celebration mode */}
      {hasBingo && (
        <div className="relative z-10 bg-gradient-to-r from-star-gold/20 via-neon-pink/20 to-neon-cyan/20 text-glow-cyan text-center py-3 font-display font-bold text-lg border-y border-star-gold/40 animate-[glow-pulse_1s_ease-in-out_infinite]"
          style={{ boxShadow: '0 0 30px rgba(251, 191, 36, 0.3), inset 0 0 20px rgba(251, 191, 36, 0.1)' }}>
          🌟 BINGO! You got a line! 🌟
        </div>
      )}

      {/* Board */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-4">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
