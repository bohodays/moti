import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ include: '**/*.svg' }), tsconfigPaths()],
  resolve: {
    alias: [
      { find: '@src', replacement: resolve(__dirname, 'src') },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components'),
      },
      {
        find: '@api',
        replacement: resolve(__dirname, 'src/api'),
      },
      {
        find: '@store',
        replacement: resolve(__dirname, 'src/store'),
      },
      {
        find: '@icons',
        replacement: resolve(__dirname, 'src/components'),
      },
    ],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://3.36.160.101:8080/',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api/, '/api'),
      },
    },
  },
  build: {
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // console.log 제거
        drop_debugger: true, // debugger 제거
      },
      mangle: true, // 변수명 난독화
    },
  },
});
