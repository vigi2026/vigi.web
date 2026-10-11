/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electricBlue: '#00A8FF',
        neonCyan: '#00F5FF',
        deepNavy: '#041020',
        blackNavy: '#010611',
        cyberGold: '#FFB52E',
        holographicPurple: '#9B5CFF',
        cyberWhite: '#F5FAFF',
        cyberCard: 'rgba(10, 24, 48, 0.72)',
        cyberBorder: 'rgba(0, 245, 255, 0.22)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fragment Mono', 'Courier New', 'monospace'],
        display: ['Urbanist', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'radar': 'radar 3s linear infinite',
        'scan': 'scanLine 3s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0, 245, 255, 0.4), inset 0 0 15px rgba(0, 245, 255, 0.2)' },
          '50%': { boxShadow: '0 0 35px rgba(0, 245, 255, 0.7), inset 0 0 25px rgba(0, 245, 255, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanLine: {
          '0%': { top: '0%' },
          '50%': { top: '100%' },
          '100%': { top: '0%' }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
