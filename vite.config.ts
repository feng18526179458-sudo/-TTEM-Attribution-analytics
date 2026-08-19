import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),react(), tailwindcss()],
  resolve: {
    alias: {
      // Alias @ to the src directory
      "@": path.resolve(__dirname, "./src"),
      "react-dom/server": "/stubs/rds.ts",
    },
  },

  // Extra file types to register as static assets. SVG is already a default
  // Vite asset — for URL-string imports prefer the explicit `?url` suffix on
  // the import side rather than relying on this list.
  assetsInclude: ["**/*.csv"],
  noExternal: ["@byted-keystone/react-output-target"],
});