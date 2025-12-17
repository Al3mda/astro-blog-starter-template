// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // MeaChat Brand Colors
        primary: '#FFB62F',      // Amber Gold
        secondary: '#C400EB',    // Vibrant Purple
        accent: '#FF4E4C',       // Coral Red
        alert: '#FF3C53',        // Alert Red
        dark: '#180C39',         // Deep Purple (Main BG)
        'dark-secondary': '#241A4F', // Card BG
        'light-gray': '#D1D5DB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
      borderRadius: {
        button: '8px',
        card: '16px',
        bubble: '18px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 182, 47, 0.3)',
        'glow-primary': '0 0 20px rgba(255, 182, 47, 0.5)',
        'glow-secondary': '0 0 20px rgba(196, 0, 235, 0.5)',
        'glow-accent': '0 0 20px rgba(255, 78, 76, 0.5)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #C400EB 0%, #FF4E4C 100%)',
        'gradient-text': 'linear-gradient(90deg, #FFB62F, #FF4E4C)',
      },
      animation: {
        'fade-up': 'fadeUp 0.45s ease-out forwards',
        'chat-fade': 'chatFade 0.6s ease-out 0.8s forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        chatFade: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
