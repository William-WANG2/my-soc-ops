# Copilot Instructions for Soc Ops

Social Bingo game for in-person mixers. Players find people matching randomized questions on a 5×5 board and aim for 5-in-a-row. Built with React 19, TypeScript, and Tailwind CSS 4.

## Mandatory Pre-Commit Checklist
- [ ] `npm run lint` - ESLint passes
- [ ] `npm run build` - TypeScript + Vite build succeeds
- [ ] `npm test` - Vitest tests pass

## Architecture

**State Management**: Single hook [useBingoGame.ts](../src/hooks/useBingoGame.ts) owns all game state + localStorage persistence with versioned schema (`STORAGE_VERSION`). App.tsx consumes and delegates to presentational components.

**Game Logic**: [bingoLogic.ts](../src/utils/bingoLogic.ts) provides pure functions:
- `generateBoard()`: Fisher-Yates shuffle of 24 questions + FREE_SPACE at index 12
- `checkBingo()`: Returns first winning line (5 rows + 5 cols + 2 diagonals)
- `toggleSquare()`: Immutable updates only

**Component Hierarchy**: App → StartScreen | GameScreen → BingoBoard → BingoSquare

## Key Patterns

### Immutability
```typescript
// ✓ Do this
return board.map(sq => sq.id === squareId ? { ...sq, isMarked: true } : sq);

// ✗ Never this
board[index].isMarked = true;
```
