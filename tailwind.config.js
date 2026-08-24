/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        background: '#0a0a0a',
        foreground: '#f5f5f0',
        muted: '#888888',
        accent: '#e5e5d5', // Warm muted accent
      },
      gridTemplateColumns: {
        'editorial': 'repeat(12, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}
