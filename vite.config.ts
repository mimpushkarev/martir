import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  root: "",
  resolve: {
    alias: [
      {
        find: "@ui-kit",
        replacement: "/src/ui-kit/",
      },
      {
        find: "@components",
        replacement: "/src/components/",
      },
      {
        find: "@utils",
        replacement: "/src/utils/",
      },
    ],
  },
});
