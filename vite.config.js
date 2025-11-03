import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/recipi/', // 👈 IMPORTANT — matches your GitHub repo name
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
})
