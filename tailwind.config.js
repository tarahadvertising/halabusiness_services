/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hala: {
          blue: '#3857a6',      // Exact Asset 8.svg Royal Blue
          dark: '#263f82',      // Deep Blue
          darker: '#162650',    // Midnight Navy
          deep: '#0e1833',      // Contrast Base
          light: '#5071c5',     // Soft Accent
          subtle: '#edf3ff',    // Ice Blue Background
          ice: '#f4f8fe',       // Card Highlight
        },
        whatsapp: '#25d366',
      },
      fontFamily: {
        heading: ['Urbanist', 'Outfit', 'sans-serif'],
        body: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'hala-sm': '0 2px 10px rgba(56, 87, 166, 0.06)',
        'hala-md': '0 8px 25px rgba(56, 87, 166, 0.12)',
        'hala-lg': '0 16px 40px rgba(56, 87, 166, 0.18)',
        'hala-xl': '0 24px 60px rgba(20, 35, 76, 0.25)',
        'hala-glow': '0 0 35px rgba(56, 87, 166, 0.45)',
      },
      borderRadius: {
        'card': '20px',
        'box': '28px',
      },
    },
  },
  plugins: [],
}
