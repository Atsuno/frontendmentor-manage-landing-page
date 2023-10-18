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
