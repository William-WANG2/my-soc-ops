import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div className="grid grid-cols-5 gap-2 w-full max-w-md mx-auto aspect-square p-3 rounded-xl backdrop-blur-sm bg-space-dark/30 border border-glow-purple/20"
      style={{
        boxShadow: '0 0 40px rgba(196, 132, 252, 0.15), inset 0 0 30px rgba(6, 182, 212, 0.08)'
      }}>
      {board.map((square) => (
        <BingoSquare
          key={square.id}
          square={square}
          isWinning={winningSquareIds.has(square.id)}
          onClick={() => onSquareClick(square.id)}
        />
      ))}
    </div>
  );
}
