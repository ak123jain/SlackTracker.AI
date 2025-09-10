 import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  envDir: './',
  server: {
    port: 5174, // Different port from main admin-tool
  },
}); 