import eslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react-swc'
import browserslistToEsbuild from 'browserslist-to-esbuild'
import path from 'node:path'
import { defineConfig, type UserConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import viteTsconfigPaths from 'vite-tsconfig-paths'

import { IMG_OPTIMIZE_OPTIONS } from './src/config'

/**
 * Vite configuration
 * @see https://vitejs.dev/config/
 */
export default defineConfig(({ mode }): UserConfig => {
  const isDev = mode === 'development'

  return {
    base: '',
    plugins: [
      viteTsconfigPaths(),
      react(),
      ViteImageOptimizer(IMG_OPTIMIZE_OPTIONS as any),
      // Only run ESLint in development for faster builds
      ...(isDev ? [eslintPlugin()] : []),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    server: {
      port: 3000,
      host: true, // Allow external connections
      open: true, // Auto-open browser
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    preview: {
      port: 8000,
      host: true,
    },
    build: {
      target: browserslistToEsbuild(),
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            i18n: ['i18next', 'react-i18next'],
          },
        },
      },
    },
  }
})
