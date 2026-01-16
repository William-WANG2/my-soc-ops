# Copilot Instructions for Soc Ops

## Project Overview
Social Bingo game for in-person mixers. Players find people matching randomized questions on a 5×5 board and aim for 5-in-a-row. Built with React 19, TypeScript, and Tailwind CSS 4.

## Architecture & Data Flow

### State Management Pattern
Game state flows through a **single custom hook** ([useBingoGame.ts](../src/hooks/useBingoGame.ts)) that owns all game logic and localStorage persistence:
- Exposes `BingoGameState` (board, gameState, winningLine) + `BingoGameActions` (startGame, handleSquareClick, resetGame)
- App.tsx consumes this hook and delegates to presentational components
- State persists to localStorage with versioned schema validation (`STORAGE_VERSION`)

### Core Game Logic
[bingoLogic.ts](../src/utils/bingoLogic.ts) provides pure functions:
- `generateBoard()`: Fisher-Yates shuffle of 24 questions + FREE_SPACE at index 12
- `checkBingo()`: Returns first winning line (5 rows + 5 cols + 2 diagonals)
- `toggleSquare()`: Immutable update pattern for board state
- All game logic is **pure** and **testable** (see [bingoLogic.test.ts](../src/utils/bingoLogic.test.ts))

### Component Hierarchy
```
App (state owner)
├── StartScreen (game entry)
├── GameScreen (game container)
│   └── BingoBoard
│       └── BingoSquare (individual cells)
└── BingoModal (celebration overlay)
```

## Development Workflows

### Commands
- `npm run dev` - Vite dev server on port 5173
- `npm run build` - TypeScript check + Vite build (outputs to `dist/`)
- `npm run lint` - ESLint check
- `npm test` - Vitest run (no watch mode by default)

### Testing Setup
- Vitest with `jsdom` environment ([vite.config.ts](../vite.config.ts))
- Testing Library matchers auto-loaded in [test/setup.ts](../src/test/setup.ts)
- Focus on pure logic tests (see [bingoLogic.test.ts](../src/utils/bingoLogic.test.ts) for examples)

### Deployment
Auto-deploys to GitHub Pages on push to `main` via [deploy.yml](../workflows/deploy.yml):
- Sets `VITE_REPO_NAME` env var for correct base path
- Builds to `dist/` and uploads as Pages artifact

## Project-Specific Conventions

### Tailwind CSS 4
Uses **@theme directive** in [index.css](../src/index.css) for custom properties:
- Custom colors: `--color-marked`, `--color-marked-border`, `--color-bingo`
- Imported with `@import 'tailwindcss'` (v4 syntax, not v3)
- Vite plugin: `@tailwindcss/vite` (no separate config file)

### Type Definitions
Central types in [types/index.ts](../src/types/index.ts):
- `BingoSquareData`: Includes `isFreeSpace` flag (FREE_SPACE is always marked)
- `BingoLine`: Contains winning line metadata (type, index, square IDs)
- `GameState`: Literal union `'start' | 'playing' | 'bingo'`

### Customization Points
- **Questions**: Edit [data/questions.ts](../src/data/questions.ts) (24 questions, center is FREE_SPACE)
- **Board size**: Hardcoded to 5×5 in `bingoLogic.ts` (change `BOARD_SIZE` and `CENTER_INDEX` together)
- **Styling**: Modify Tailwind theme in [index.css](../src/index.css) or component classes

## Design Patterns

### Immutability
Always return new arrays/objects when updating state:
```typescript
// ✓ Correct
return board.map(square => square.id === squareId ? { ...square, isMarked: true } : square);

// ✗ Avoid
board[index].isMarked = true;
```

### Accessibility
- Use semantic HTML (`<button>` for clickables, not `<div>`)
- Include ARIA attributes: `aria-pressed`, `aria-label` (see [BingoSquare.tsx](../src/components/BingoSquare.tsx))
- Disable free space button with `disabled` attribute

### LocalStorage Validation
When adding new persisted fields:
1. Increment `STORAGE_VERSION` in [useBingoGame.ts](../src/hooks/useBingoGame.ts)
2. Update `validateStoredData()` to check new fields
3. Update `StoredGameData` interface

## Common Gotchas
- Free space (index 12) is **always marked** and **not clickable** - check `isFreeSpace` before toggling
- localStorage validation will clear invalid data - test version changes carefully
- Vite base path uses `VITE_REPO_NAME` env var - local dev uses `/`, production uses `/my-soc-ops/`
- React 19 uses new JSX transform - no need to import React in component files
