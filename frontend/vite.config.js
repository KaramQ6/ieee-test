import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // Build optimizations
  build: {
    outDir: 'dist',
    minify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          animation: ['framer-motion'],
          utils: ['clsx', 'tailwind-merge']
        }
      }
    }
  },
  
  // Development server
  server: {
    port: 3000,
    open: true
  },
  
  // Preview server
  preview: {
    port: 4173
  }
});
