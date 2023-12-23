import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 9000,
    // proxy: {
    //   "/api": {
    //     target: "https://localhost:8887",
    //     secure: false,
    //   },
    // }
  }
})
