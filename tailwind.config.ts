// tailwind.config.ts
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#1D4ED8',   // blue-700
        secondary: '#F97316', // orange-500
        accent: '#22C55E',    // green-500
        lightbg: '#fdfbf8',
        brownPrimary: '#6B4F3B',
        brownSecondary: '#8B6E4F',
      },
      fontFamily: {
        sans: ['Roboto', 'Inter', 'sans-serif'], // Roboto as primary sans-serif
        heading: ['Roboto', 'Poppins', 'sans-serif'], // Roboto for headings
        roboto: ['Roboto', 'sans-serif'], // Direct Roboto utility
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        baskerville: ['"Libre Baskerville"', 'serif'],
        bubble: ['"Comic Neue"', 'cursive'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in forwards',
        'fade-in-up': 'fadeInUp 1.5s ease-out forwards',
        'slide-left': 'slideLeft 1s ease-out forwards',
        'marquee': 'marquee 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
    },
  },
  plugins: [forms, typography, aspectRatio],
}

export default config