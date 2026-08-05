import { fileURLToPath } from 'node:url';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const voltoRoot = path.resolve(projectRoot, '../../core/packages/volto');

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@eeacms/volto-block-divider': path.resolve(projectRoot, 'src'),
      '@package': path.resolve(voltoRoot, 'src'),
      '@plone/volto': path.resolve(voltoRoot, 'src'),
      '@plone/volto-slate': path.resolve(voltoRoot, '../volto-slate/src'),
      '@root': path.resolve(voltoRoot, 'src'),
      classnames: path.resolve(voltoRoot, 'node_modules/classnames'),
      react: path.resolve(voltoRoot, 'node_modules/react'),
      'react-dom': path.resolve(voltoRoot, 'node_modules/react-dom'),
      'react-intl': path.resolve(voltoRoot, 'node_modules/react-intl'),
      'semantic-ui-react': path.resolve(
        voltoRoot,
        'node_modules/semantic-ui-react',
      ),
    },
  },
  test: {
    css: false,
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: ['src/**/*.test.{js,jsx,ts,tsx}'],
      reporter: ['lcov', 'cobertura', 'text'],
      reportsDirectory: process.env.CI ? '/app/coverage' : 'coverage',
      thresholds: {
        branches: 5,
        functions: 5,
        lines: 5,
        statements: 5,
      },
    },
  },
});
