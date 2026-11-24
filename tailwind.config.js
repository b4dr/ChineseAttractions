/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Jade signature — action color (formerly flag red)
        primary: {
          50: '#f0faf7',
          100: '#d9f0e8',
          200: '#b3e0d1',
          300: '#84c9b4',
          400: '#50ab92',
          500: '#2b8f78',
          600: '#0f766e',
          700: '#0d5e58',
          800: '#0b4a46',
          900: '#093a37',
        },
        // Deep jade — structure/heros (formerly chinese red)
        chinese: {
          50: '#f0faf7',
          100: '#d9f0e8',
          200: '#b3e0d1',
          300: '#84c9b4',
          400: '#50ab92',
          500: '#0d5e58',
          600: '#0b4a46',
          700: '#093a37',
          800: '#072e2c',
          900: '#052220',
        },
        // Jade scale (canonical name)
        jade: {
          50: '#f0faf7',
          100: '#d9f0e8',
          200: '#b3e0d1',
          300: '#84c9b4',
          400: '#50ab92',
          500: '#2b8f78',
          600: '#0f766e',
          700: '#0d5e58',
          800: '#0b4a46',
          900: '#093a37',
          950: '#052220',
        },
        // Rice paper ground + warm ink
        paper: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f3ecdd',
          300: '#e9dfc9',
          400: '#d9cbb0',
        },
        ink: {
          50: '#f6f5f4',
          100: '#e7e5e4',
          200: '#d6d3d1',
          300: '#a8a29e',
          400: '#78716c',
          500: '#57534e',
          600: '#44403c',
          700: '#292524',
          800: '#1c1917',
          900: '#141210',
          950: '#0c0a09',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Main gold
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // Main green
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        }
      },
      fontFamily: {
        sans: ['Lora', 'Georgia', 'serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
