import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // Cambia la importación aquí

export default defineConfig({
    output: 'static',
    adapter: vercel(),
});