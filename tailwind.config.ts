import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#06080F',
          secondary: '#0A0F1E',
          card: 'rgba(18,24,42,0.55)'
        },
        neon: {
          blue: '#24D5FF',
          purple: '#8B5CFF',
          mint: '#7CF7D4'
        },
        text: {
          primary: '#D7DEEA',
          secondary: '#A5B1C8'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(36, 213, 255, 0.28)',
        'glow-purple': '0 0 40px rgba(139, 92, 255, 0.28)'
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(120deg, #24D5FF 0%, #8B5CFF 100%)'
      }
    }
  },
  plugins: []
};

export default config;
