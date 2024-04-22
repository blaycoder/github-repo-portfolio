// import dotenv from "dotenv";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  // define process env
  // define: {
  //   "process.env": process.env,
  // },
});
