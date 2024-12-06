import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react_portfolio/', // Replace with your repository name
  plugins: [react()]
});
