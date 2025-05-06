
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    dedupe: ['three'],            // <- Vite will never include two copies
    alias: {
      "@": path.resolve(__dirname, "./src"),
      three: 'three'              // explicit alias for safety
    }
  },
}));
