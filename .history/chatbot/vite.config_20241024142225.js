/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
*/


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const { PORT = 000} = process.env;

export default defineConfig({
 plugins: [react()],
 server:{
     proxy:{
     '/api':{
     target:`http://localhost:${PORT}`,
     changeOrigin: true,
     },
     
     },
    },
    
 build: {
 manifest: true,
 rollupOptions: {
 input: "./src/main.jsx",
 },
 },
});
