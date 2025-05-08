import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs', // Certifique-se de que o PostCSS está sendo lido corretamente
  },
  base: '/leader-games-deals/', // Substitua 'leader-games-deals' pelo nome do seu repositório
});
