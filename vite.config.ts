import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Change “suite-spot-check” below to exactly match your GitHub repo name
const repoName = "suite-spot-check";

export default defineConfig(({ mode }) => ({
  // 1) Ensure all URLs in index.html begin with "/suite-spot-check/"
  base: `/${repoName}/`,

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // 2) Tell Vite to build into "docs/" instead of the default "dist/"
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
}));
