/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lumen-primary': '#3b82f6',
        'lumen-secondary': '#1e40af',
        'lumen-accent': '#60a5fa',
        'lumen-dark': '#1e3a8a',
        'lumen-light': '#dbeafe',
      },
    },
  },
  plugins: [],
}
