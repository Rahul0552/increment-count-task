import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // go to 'vite.config.js'
  // do   plugins: [react()],
  // base:/"Rahul0552.git.io/increment-count-task"/, NO

  base:"/Rahul0552.github.io/increment-count-task"
})
