import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
//
// because __dirname was showing undefined
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
