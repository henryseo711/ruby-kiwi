import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Ensures relative paths in the build output for GitHub Pages
  build: {
    outDir: 'dist',
  }
})
