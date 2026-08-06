/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: '#FDFBF7',
        surface: '#FFFFFF',
        card: '#FDFBF7',
        border: '#E2E8F0',
        primary: { DEFAULT: '#0F172A', light: '#1E293B', dark: '#020617' },
        secondary: { DEFAULT: '#D4AF37', light: '#F1D570', dark: '#997A15' },
        accent: '#D4AF37',
        gold: '#D4AF37',
        text: { primary: '#0F172A', secondary: '#475569', muted: '#64748B' },
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'float': 'float 7s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'marquee': 'marquee 28s linear infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-18px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
    },
  },
  plugins: [],
}
