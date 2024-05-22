import { defineConfig } from 'vite';

export default defineConfig({
  base: '', // Base public path when served in development or production.
  build: {
    // Directory where Vite will output the built files.
    outDir: 'dist', // Set this to true to generate sourcemaps for production builds.
    sourcemap: true,
  },
  // Development server configuration.
  server: {
    // Port to use for serving the application during development.
    port: 3001,
    // Enable HMR (Hot Module Replacement).
    hmr: true,
    // Proxy settings for backend API requests.
    // proxy: {
    //   // Example proxying '/api' requests to 'http://localhost:8080/api'
    //   '/test': 'http://localhost:5000/test',
    // },
  },

  // Additional configuration options can be added here.
});
