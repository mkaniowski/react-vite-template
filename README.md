# ⚡ React Vite Template

<div align="center">

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

*A modern, fast, and production-ready React template with TypeScript, Vite, and best practices built-in.*


</div>

## ✨ Features

- 🚀 **Lightning Fast** - Powered by Vite with HMR and SWC
- 🎯 **TypeScript** - Full type safety with strict configuration
- 🎨 **Modern React** - React 19 with hooks and functional components
- 📦 **Optimized Build** - Smart chunking and tree-shaking
- 🔧 **Developer Experience** - ESLint, Prettier, and pre-configured tooling
- 🌐 **i18n Ready** - Internationalization support with react-i18next
- 🖼️ **Image Optimization** - Automatic image optimization and compression
- 📱 **Responsive** - Mobile-first approach

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/react-vite-template.git
cd react-vite-template

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Run TypeScript type checking
npm run format       # Format code with Prettier
```

## 🛠️ Tech Stack

| Technology     | Purpose          | Badge                                                                                                            |
|----------------|------------------|------------------------------------------------------------------------------------------------------------------|
| **React 19**   | UI Framework     | ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white)                |
| **TypeScript** | Type Safety      | ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| **Vite**       | Build Tool       | ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)                   |
| **SWC**        | Fast Compilation | ![SWC](https://img.shields.io/badge/-SWC-FF6B35?style=flat-square&logo=swc&logoColor=white)                      |
| **ESLint**     | Code Linting     | ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)             |
| **Prettier**   | Code Formatting  | ![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white)       |

## 🏗️ Project Structure

```
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable UI components
├── hooks/          # Custom React hooks
├── pages/          # Page components
├── styles/         # Global styles and themes
├── utils/          # Utility functions
├── config.ts       # App configuration
└── main.tsx        # App entry point
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:8080
VITE_APP_TITLE=My React App
VITE_APP_VERSION=1.0.0
```

### Path Aliases

Import files using the `@/` alias:

```typescript
import { Button } from '@/components/Button'
import { config } from '@/config'
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**[⬆ back to top](#-react-vite-template)**

Made with ❤️ by [mkaniowski](https://github.com/mkaniowski)

</div>