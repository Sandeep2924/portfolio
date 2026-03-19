/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Clash Display', 'Syne', 'sans-serif'],
        body: ['Satoshi', 'DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#050508',
        surface: '#0e0e14',
        card: '#13131c',
        border: '#1f1f2e',
        primary: '#6EE7B7',    // mint green — fresh, energetic
        secondary: '#F472B6',  // hot pink
        accent: '#60A5FA',     // sky blue
        gold: '#FBBF24',       // amber
        text: { primary: '#F0F0FF', secondary: '#8888AA', muted: '#44445A' },
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
