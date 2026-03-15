import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'

const isElectron = !!process.env.npm_lifecycle_event?.includes('electron')
  || process.env.npm_lifecycle_script?.includes('electron')
  || !!process.env.ELECTRON

export default defineConfig({
  base: isElectron ? './' : (process.env.GHPAGES ? '/clinica-app/' : '/'),
  plugins: [
    react(),

    // Electron plugins (only in electron mode)
    ...(isElectron ? [
      electron([
        {
          entry: 'electron/main.ts',
          vite: {
            build: {
              rollupOptions: {
                output: { entryFileNames: '[name].mjs' },
              },
            },
          },
        },
        {
          entry: 'electron/preload.ts',
          vite: {
            build: {
              rollupOptions: {
                output: { entryFileNames: '[name].mjs' },
              },
            },
          },
          onstart(args) { args.reload() },
        },
      ]),
      renderer(),
    ] : []),

    // PWA plugin (only in web mode)
    ...(!isElectron ? [
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'icons/*.png'],
        manifest: {
          name: 'mbai sistemas',
          short_name: 'mbai',
          description: 'Sistema de gestão clínica — mbai sistemas',
          start_url: process.env.GHPAGES ? '/clinica-app/' : '/',
          display: 'standalone',
          background_color: '#ffffff',
          theme_color: '#10b981',
          orientation: 'any',
          icons: [
            { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
            { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        },
      }),
    ] : []),
  ],
  clearScreen: false,
})
