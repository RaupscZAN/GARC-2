/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom blue/teal palette based on your slides
        'background': '#F8FAFC', // Light blue-gray
        'surface': '#F1F5F9',    // Slightly darker blue-gray
        'primary': {
          DEFAULT: '#14B8A6',     // Teal-500 (main teal from slides)
          '50': '#F0FDFA',
          '100': '#CCFBF1',
          '200': '#99F6E4',
          '300': '#5EEAD4',
          '400': '#2DD4BF',
          '500': '#14B8A6',       // Main teal
          '600': '#0D9488',
          '700': '#0F766E',
          '800': '#115E59',
        },
        'secondary': {
          DEFAULT: '#06B6D4',     // Cyan-500 (light blue from slides)
          '50': '#ECFEFF',
          '100': '#CFFAFE',
          '200': '#A5F3FC',
          '300': '#67E8F9',
          '400': '#22D3EE',
          '500': '#06B6D4',       // Main cyan
          '600': '#0891B2',
          '700': '#0E7490',
        },
        'accent': {
          DEFAULT: '#FBB040',     // Yellow-400 (complementary warm)
          '50': '#FFFBEB',
          '100': '#FEF3C7',
          '200': '#FDE68A',
          '300': '#FCD34D',
          '400': '#FBB040',       // Main yellow
          '500': '#F59E0B',
          '600': '#D97706',
        },
        'navy': {
          DEFAULT: '#1E293B',     // Dark navy from your slides
          '600': '#475569',
          '700': '#334155',
          '800': '#1E293B',
          '900': '#0F172A',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314B8A6' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'dot-pattern': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2306B6D4' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'glow-primary': 'radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, rgba(20, 184, 166, 0) 70%)',
        'glow-secondary': 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0) 70%)',
        'glow-accent': 'radial-gradient(circle, rgba(251, 176, 64, 0.1) 0%, rgba(251, 176, 64, 0) 70%)',
      },
    },
  },
  plugins: [],
};