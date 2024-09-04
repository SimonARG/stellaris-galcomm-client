/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans', 'sans-serif'],
        'mono': ['Noto Sans Mono', 'monospace'],
        'orbit': ['Orbitron', 'sans-serif'],
        'game': ['Barlow', 'sans-serif']
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}