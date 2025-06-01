/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background': '#FFFFFF',
        'surface': '#F8FAFB',
        'primary': {
          DEFAULT: '#00BFA5', // Teal from slides
          '50': '#E0F7F4',
          '100': '#B3EBE4',
          '200': '#80DED2',
          '300': '#4DD0C0',
          '400': '#26C6B2',
          '500': '#00BFA5',
          '600': '#00A892',
          '700': '#00917C',
        },
        'secondary': {
          DEFAULT: '#00ACC1', // Light blue from slides
          '50': '#E0F3F6',
          '100': '#B3E1E8',
          '200': '#80CDD9',
          '300': '#4DB9CA',
          '400': '#26AABF',
          '500': '#00ACC1',
          '600': '#0097A7',
          '700': '#00838F',
        },
        'accent': {
          DEFAULT: '#FFB800', // Yellow from slides
          '50': '#FFF8E1',
          '100': '#FFECB3',
          '200': '#FFE082',
          '300': '#FFD54F',
          '400': '#FFCA28',
          '500': '#FFB800',
          '600': '#FFB300',
          '700': '#FFA000',
        },
        'app-text': {
          DEFAULT: '#1A1A1A',
          light: '#2D3748',
          muted: '#4A5568',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300BFA5' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'dot-pattern': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300BFA5' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
        'glow-primary': 'radial-gradient(circle, rgba(0, 191, 165, 0.05) 0%, rgba(0, 191, 165, 0) 70%)',
        'glow-secondary': 'radial-gradient(circle, rgba(0, 172, 193, 0.05) 0%, rgba(0, 172, 193, 0) 70%)',
        'glow-accent': 'radial-gradient(circle, rgba(255, 184, 0, 0.05) 0%, rgba(255, 184, 0, 0) 70%)',
      },
    },
  },
  plugins: [],
};