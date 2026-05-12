import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://freelancehourlyratecalculator.com',
      dynamicRoutes: ['/about', '/privacy-policy'],
      changefreq: {
        '/': 'weekly',
        '/about': 'monthly',
        '/privacy-policy': 'yearly',
      },
      priority: {
        '/': 1.0,
        '/about': 0.7,
        '/privacy-policy': 0.3,
      },
      lastmod: new Date().toISOString().split('T')[0],
      // We supply our own robots.txt via public/robots.txt
      generateRobotsTxt: false,
    }),
  ],
});
