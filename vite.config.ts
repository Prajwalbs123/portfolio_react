import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite natively compiles and processes this TypeScript structure
export default defineConfig({
  // Preserves your custom routing subdirectory for deployment on GitHub Pages
  base: '/portfolio_react/',
  
  plugins: [
    react(),
    tailwindcss() // Registers the native Tailwind CSS v4 compiler engine
  ],

  // Safely instructs Vite to bundle raw 3D model resources (.glb/.gltf)
  assetsInclude: ["**/*.glb"]
})
