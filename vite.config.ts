import eslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react-swc'
import browserslistToEsbuild from 'browserslist-to-esbuild'
import path from 'path'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import viteTsconfigPaths from 'vite-tsconfig-paths'


import { API_URL, IMG_OPTIMIZE_OPTIONS } from './src/config'

export default defineConfig({
  base: '',
  // add eslint() to plugins to lint on build
  plugins: [
    viteTsconfigPaths(),
    react(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ViteImageOptimizer(IMG_OPTIMIZE_OPTIONS as any),
    eslintPlugin(),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: API_URL,
        changeOrigin: true,
      },
    },
  },
  preview: {
    port: 8000,
  },
  build: {
    target: browserslistToEsbuild(),
    sourcemap: true,
  },
})