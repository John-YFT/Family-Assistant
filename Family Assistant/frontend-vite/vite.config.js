import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '4509-89-169-52-137.ngrok-free.app',
      '.ngrok-free.app', // Разрешаем все поддомены ngrok
    ],
  },
})
