import vue from '@vitejs/plugin-vue';
import viteConfig from './vite.config';
import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';
import { configDefaults, defineConfig } from 'vitest/config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [vue()],
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      transformMode: {
        // web: [/\.[jt]sx$/],
        web: [/\.vue$/],
      },
    },
  })
);
