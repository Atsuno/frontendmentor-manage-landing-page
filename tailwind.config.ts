import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
      },
      colors: {
        'primary-one': 'hsl(12, 88%, 59%)',
        'primary-two': 'hsl(228, 39%, 23%)',
        'neutral-one': 'hsl(227, 12%, 61%)',
        'neutral-two': 'hsl(233, 12%, 13%)',
        'neutral-three': 'hsl(13, 100%, 96%)',
        'neutral-four': 'hsl(0, 0%, 98%)',
        specific: '#F0F0F0',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      backgroundImage: {
        'simplify-mobile': "url('/images/bg-simplify-section-mobile.svg')",
        'simplify-desktop': "url('/images/bg-simplify-section-desktop.svg')",
        'hero-pattern': "url('/images/bg-tablet-pattern.svg'),url('/images/bg-tablet-pattern.svg')",
      },
      backgroundPosition: {
        'desktop-wide': 'right -12vw top -22vh, left -30vw top 110vh',
        tablet: 'right -61vw top -47vh, left -70vw top 65vh',
        desktop: 'right -35vw top -40vh, left -55vw top 75vh',
        'hero-pattern': 'right -130vw top -45vh, left 66vw top 25vh',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [{
      light: {},
    }],
    darkTheme: 'light',
    logs: false,
  },
}

export default config
