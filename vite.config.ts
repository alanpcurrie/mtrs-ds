import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import EsLint from 'vite-plugin-linter';
import tsConfigPaths from 'vite-tsconfig-paths';
const { EsLinter, linterPlugin } = EsLint;
import * as packageJson from './package.json';
import { fileURLToPath, URL } from 'url';
/// <reference types="vitest" />
/// <reference types="vite/client" />
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      exclude: ['**/*.stories.*'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ['src/components/'],
      exclude: ['**/*.stories.*'],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'components/index.ts'),
      name: 'ReactViteLibrary',
      formats: ['es', 'umd'],
      fileName: (format) => `react-vite-library.${format}.js`,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
}));
