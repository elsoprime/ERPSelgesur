import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createProxyMiddleware } from 'http-proxy-middleware';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // URL de tu servidor backend local
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Elimina '/api' de la URL
      },
      '/dpa': {
        target: 'https://apis.digital.gob.cl', // URL de la API externa
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dpa/, '/dpa'), // Mantén '/dpa' en la URL
      },
    },
  },
});

