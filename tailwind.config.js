/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: "#0C0C0C",
          primary: "#FFFFFF",
          secondary: "#B8B8B8",
          orange: "#FF6B00",
          amber: "#FF8A00",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["'Instrument Serif'", "serif"],
      },
      backgroundImage: {
        'purple-grad': "linear-gradient(135deg, #7B61FF 0%, #9F6BFF 50%, #C084FC 100%)",
        'orange-grad': "linear-gradient(135deg, #FF6B00 0%, #FF8A00 100%)",
        'hero-grad': "linear-gradient(135deg, #FF5A00 0%, #FF6B00 20%, #FF8A00 40%, #1B1B1B 70%, #0C0C0C 100%)",
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
