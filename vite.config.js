import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // El directorio de salida para los archivos construidos
    rollupOptions: {
      input: 'index.html', // Asegúrate de que Vite sepa cuál es el archivo principal de entrada
    },
  },
  server: {
    open: true, // Esto abrirá el navegador automáticamente en el puerto que uses
  },
});
