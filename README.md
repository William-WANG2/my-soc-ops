<div align="center">

# 🎯 Soc Ops

### Break the Ice with Social Bingo

*The fun, interactive game that turns awkward mixers into engaging conversations*

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[🎮 Live Demo](#) • [✨ Features](#-features) • [🚀 Quick Start](#-quick-start) • [🎨 Customize](#-customize-your-game)

</div>

---

## 🎪 What is Soc Ops?

**Soc Ops** (Social Operations) is a modern, mobile-friendly social bingo game designed for in-person events, team building sessions, and networking mixers. Instead of awkward small talk, players explore the room finding people who match fun questions on their personalized 5×5 bingo board.

**The goal?** Be the first to mark 5 in a row (horizontal, vertical, or diagonal) by meeting people who match your prompts!

## ✨ Features

- **🎲 Randomized Boards** - Every player gets a unique shuffled board from 24+ questions
- **📱 Mobile-First Design** - Beautiful, responsive interface built with React 19 and Tailwind CSS 4
- **💾 Auto-Save Progress** - LocalStorage persistence means no lost progress on page refresh
- **🎉 Instant Feedback** - Satisfying animations when you hit BINGO!
- **⚡ Lightning Fast** - Built with Vite for instant development and optimized production builds
- **♿ Accessible** - ARIA-compliant UI components for inclusive gameplay
- **🌐 Zero Backend** - Pure client-side app, deploy anywhere (GitHub Pages, Netlify, Vercel)

## 🎮 How to Play

1. **Start the Game** - Click "Start Game" to generate your unique bingo board
2. **Mingle & Mark** - Walk around and find people who match each square
3. **Get Creative** - Questions like "has lived in another country" or "can juggle" spark great conversations
4. **Win** - First to mark 5 in a row wins! (The center square is a FREE SPACE)
5. **Share the Fun** - Reset and play again with a new randomized board

## 🚀 Quick Start

### Prerequisites

- [Node.js 22+](https://nodejs.org/) 

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/William-WANG2/my-soc-ops.git
cd my-soc-ops

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` and start playing! 🎉

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The build outputs to `dist/` and automatically deploys to GitHub Pages when pushed to `main`.

## 🎨 Customize Your Game

Make this game your own! Customization is easy and encouraged.

### Add Your Own Questions

Edit [`src/data/questions.ts`](src/data/questions.ts) to add questions relevant to your event:

```typescript
export const questions: string[] = [
  "has worked remotely from another country",
  "speaks 3+ programming languages",
  "has contributed to open source",
  // Add your own creative prompts!
];
```

**Pro Tips:**
- Keep questions positive and inclusive
- Mix easy-to-find traits with unique ones
- Tailor questions to your audience (corporate, students, hobbyists, etc.)
- Aim for 24+ questions for variety

### Styling & Theming

Built with **Tailwind CSS 4**, you can customize the look and feel:

- Edit design tokens in `src/index.css` using `@theme` directive
- Modify component styles in `src/components/`
- Change colors, fonts, animations to match your brand

### Advanced Customization

👉 **[Follow the Lab Guide](.lab/GUIDE.md)** for step-by-step instructions on deeper customizations.

## 🏗️ Architecture

**Built for Maintainability**

- **State Management**: Single `useBingoGame` hook with localStorage persistence
- **Pure Functions**: Immutable game logic in `bingoLogic.ts` (Fisher-Yates shuffle, bingo detection)
- **Type Safety**: Full TypeScript coverage with strict mode
- **Component Hierarchy**: Clean separation - `App` → `StartScreen` | `GameScreen` → `BingoBoard` → `BingoSquare`
- **Testing**: Vitest + React Testing Library for reliable tests

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production bundle with TypeScript check |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm test` | Run Vitest test suite |

## 🤝 Contributing

Contributions are welcome! Whether it's:

- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 UI/UX enhancements

Please check out our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original concept by [Harald Kirschner](https://github.com/digitarald)
- Built with modern web technologies: React, TypeScript, Tailwind CSS, Vite
- Inspired by the timeless fun of social bingo games

---

<div align="center">

**Ready to break the ice?** 🎲

[⭐ Star this repo](https://github.com/William-WANG2/my-soc-ops) if you find it useful!

Made with ❤️ for better social connections

</div>
