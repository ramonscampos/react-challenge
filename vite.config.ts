import path from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/react-challenge/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
