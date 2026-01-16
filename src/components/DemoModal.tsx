import { useState } from 'react';
import { questions, FREE_SPACE } from '../data/questions';

interface DemoModalProps {
  onClose: () => void;
  onStartGame: () => void;
}

export function DemoModal({ onClose, onStartGame }: DemoModalProps) {
  const [markedSquares, setMarkedSquares] = useState<Set<number>>(new Set([12])); // Free space pre-marked

  // Generate a demo board with random questions
  const getDemoBoard = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const boardQuestions = shuffled.slice(0, 24);
    
    const board = [];
    for (let i = 0; i < 25; i++) {
      if (i === 12) {
        board.push({ id: i, text: FREE_SPACE, isFreeSpace: true });
      } else {
        const questionIndex = i < 12 ? i : i - 1;
        board.push({ id: i, text: boardQuestions[questionIndex], isFreeSpace: false });
      }
    }
    return board;
  };

  const [demoBoard] = useState(getDemoBoard());

  const handleSquareClick = (squareId: number) => {
    const square = demoBoard[squareId];
    if (square.isFreeSpace) return;

    setMarkedSquares(prev => {
      const newSet = new Set(prev);
      if (newSet.has(squareId)) {
        newSet.delete(squareId);
      } else {
        newSet.add(squareId);
      }
      return newSet;
    });
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-darker/80 backdrop-blur-md animate-[stagger-in_0.3s_ease-out]"
      onClick={onClose}
    >
      <div 
        className="relative max-w-xl w-full bg-space-dark/90 backdrop-blur-xl rounded-2xl border border-glow-purple/40 p-6 animate-[scale-pop_0.4s_ease-out]"
        style={{ boxShadow: 'var(--glow-lg)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-glow-cyan/60 hover:text-glow-cyan text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-space-dark/60 transition-all"
          aria-label="Close demo"
        >
          ×
        </button>

        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="font-display font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-glow-purple via-glow-cyan to-neon-pink mb-2"
              style={{ textShadow: 'var(--glow-sm)' }}>
            Demo Mode
          </h2>
          <p className="text-glow-cyan/70 text-sm font-mono">
            Click squares to see how marking works
          </p>
        </div>

        {/* Demo Board */}
        <div className="grid grid-cols-5 gap-2 w-full max-w-md mx-auto aspect-square p-3 rounded-xl backdrop-blur-sm bg-space-dark/30 border border-glow-purple/20 mb-4"
          style={{
            boxShadow: '0 0 40px rgba(196, 132, 252, 0.15), inset 0 0 30px rgba(6, 182, 212, 0.08)'
          }}>
          {demoBoard.map((square) => {
            const isMarked = markedSquares.has(square.id);
            
            let squareClasses = 'relative flex items-center justify-center p-2 text-center border rounded-lg transition-all duration-200 select-none min-h-[50px] text-[10px] leading-tight font-mono font-semibold backdrop-blur-sm cursor-pointer';
            let glowStyle = {};

            if (isMarked) {
              squareClasses += ' bg-gradient-to-br from-nebula-purple-light to-cosmic-blue-light border-glow-purple/60 text-space-darker animate-[glow-pulse_2s_ease-in-out_infinite]';
              glowStyle = { boxShadow: 'var(--glow-md), inset 0 0 15px rgba(196, 132, 252, 0.1)' };
            } else {
              squareClasses += ' bg-space-dark/40 border-glow-purple/30 text-glow-cyan/70 hover:border-glow-cyan/60 hover:bg-space-dark/60 active:bg-nebula-purple/30 active:border-neon-cyan/50 active:scale-95';
              glowStyle = { boxShadow: '0 0 15px rgba(139, 92, 246, 0.2)' };
            }

            if (square.isFreeSpace) {
              squareClasses += ' font-display font-bold text-star-gold cursor-default';
            }

            return (
              <button
                key={square.id}
                onClick={() => handleSquareClick(square.id)}
                disabled={square.isFreeSpace}
                className={squareClasses}
                style={glowStyle}
                aria-pressed={isMarked}
                aria-label={square.isFreeSpace ? 'Free space' : square.text}
              >
                <span className="break-words hyphens-auto">{square.text}</span>
                {isMarked && !square.isFreeSpace && (
                  <span className="absolute top-0.5 right-0.5 text-neon-cyan text-xs font-bold animate-pulse">✨</span>
                )}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-glow-cyan/60 text-sm font-mono mb-3">
            Ready to play for real?
          </p>
          <button
            onClick={onStartGame}
            className="relative bg-gradient-to-r from-nebula-purple to-cosmic-blue-light text-white font-display font-bold py-3 px-8 rounded-lg text-base overflow-hidden group transition-transform active:scale-95"
            style={{ boxShadow: 'var(--glow-lg)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-nebula-purple-light to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-lg -z-10"></div>
            <span className="relative flex items-center justify-center">
              START GAME
              <span className="ml-2 animate-pulse">⭐</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
