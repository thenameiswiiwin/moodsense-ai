/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    animation: {
      'fade-in': 'fade-in 1000ms var(--animation-delay, 0ms) ease forwards',
    },
    keyframes: {
      'fade-in': {
        from: { opacity: 0, transform: 'translateY(-10px)' },
        to: { opacity: 1, transform: 'none' },
      },
    },
    extend: {},
  },
  plugins: [],
}
