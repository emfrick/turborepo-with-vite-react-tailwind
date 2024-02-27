// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///home/emfrick/Development/sandbox/node_modules/.pnpm/vite@5.1.4_@types+node@20.11.20/node_modules/vite/dist/node/index.js";
import react from "file:///home/emfrick/Development/sandbox/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.1.4/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///home/emfrick/Development/sandbox/node_modules/.pnpm/vite-plugin-dts@3.7.3_@types+node@20.11.20_typescript@5.3.3_vite@5.1.4/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/home/emfrick/Development/sandbox/packages/ui";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: resolve(__vite_injected_original_dirname, "src"),
      insertTypesEntry: true
    })
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "@repo/ui",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-jsx"],
      output: {
        assetFileNames: "index-foo.[ext]"
        // globals: {
        //     React: "react",
        //     "react-dom": "react-dom"
        // }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9lbWZyaWNrL0RldmVsb3BtZW50L3NhbmRib3gvcGFja2FnZXMvdWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2VtZnJpY2svRGV2ZWxvcG1lbnQvc2FuZGJveC9wYWNrYWdlcy91aS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9lbWZyaWNrL0RldmVsb3BtZW50L3NhbmRib3gvcGFja2FnZXMvdWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIHJlYWN0KCksXG4gICAgICAgIGR0cyh7XG4gICAgICAgICAgICBlbnRyeVJvb3Q6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcbiAgICAgICAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWVcbiAgICAgICAgfSlcbiAgICBdLFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIG91dERpcjogXCJkaXN0XCIsXG4gICAgICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgICAgICBsaWI6IHtcbiAgICAgICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvaW5kZXgudHNcIiksXG4gICAgICAgICAgICBuYW1lOiBcIkByZXBvL3VpXCIsXG4gICAgICAgICAgICBmb3JtYXRzOiBbJ2VzJ10sXG4gICAgICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2BcbiAgICAgICAgfSxcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCIsIFwicmVhY3QtanN4XCJdLFxuICAgICAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdpbmRleC1mb28uW2V4dF0nLFxuICAgICAgICAgICAgICAgIC8vIGdsb2JhbHM6IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgUmVhY3Q6IFwicmVhY3RcIixcbiAgICAgICAgICAgICAgICAvLyAgICAgXCJyZWFjdC1kb21cIjogXCJyZWFjdC1kb21cIlxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VCxTQUFTLGVBQWU7QUFDalYsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUhoQixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsTUFDQSxXQUFXLFFBQVEsa0NBQVcsS0FBSztBQUFBLE1BQ25DLGtCQUFrQjtBQUFBLElBQ3RCLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSCxRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixLQUFLO0FBQUEsTUFDRCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ3hDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxJQUFJO0FBQUEsTUFDZCxVQUFVLENBQUMsV0FBVyxTQUFTLE1BQU07QUFBQSxJQUN6QztBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ1gsVUFBVSxDQUFDLFNBQVMsYUFBYSxXQUFXO0FBQUEsTUFDNUMsUUFBUTtBQUFBLFFBQ0osZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtwQjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
