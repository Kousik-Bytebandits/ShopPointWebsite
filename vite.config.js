import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split common libraries into their own chunks
          react: ['react', 'react-dom'],
          icons: ['react-icons'],
          // You can add more chunks if you're using other large libs
        },
      },
    },
    chunkSizeWarningLimit: 700, // Optional: raises warning limit
  },
})
