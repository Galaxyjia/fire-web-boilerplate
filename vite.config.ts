import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve } from 'path' //必须要引入resolve 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //必须要引入resolve 
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, 'src')
      },
      {
        find: "@assets",
        replacement: resolve(__dirname, 'src/assets')
      }
    ]
  }
})
