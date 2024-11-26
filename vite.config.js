import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Este es el directorio de salida que Vercel tomará
  },
  server: {
    port: 3000, 
  },
});
