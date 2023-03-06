import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
// export default defineConfig({
//   // plugins: [react()],
//   plugins: [reactRefresh()],
//   server: {
//     watch: {
//       usePolling: true,
//     },
//     host: '0.0.0.0',
//     strictPort: true,
//     port: 5173, // you can replace this port with any port
//   },
// });

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: {
      clientPort: 3000,
    },
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
});
