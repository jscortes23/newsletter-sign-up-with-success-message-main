/* import { defineConfig } from "vite"
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()]
}) */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://jscortes23.github.io/newsletter-sign-up-with-success-message-main'
})