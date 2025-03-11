import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TON-DÉPÔT/', // Remplace "TON-DÉPÔT" par le nom de ton dépôt GitHub
})
