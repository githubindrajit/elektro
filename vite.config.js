import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()]
  // base: '/elektro1/'
})


// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// })
