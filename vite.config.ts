import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/YOUR_REPO_NAME/', // <-- ADD THIS LINE
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
