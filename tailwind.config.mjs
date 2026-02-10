/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Mono"', 'monospace'],
        body: ['"Work Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#0EA5E9',
        dark: '#0F172A',
        accent: '#F59E0B',
      },
    },
  },
  plugins: [],
}
