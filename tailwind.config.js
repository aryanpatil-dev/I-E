/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#07111e',
        cloud: '#0d1b2a',
        mist: '#1a3050',
        ink: '#f0eeea',
        muted: '#8a9bb5',
        electric: '#c9a03e',
        plasma: '#1e4d8c',
        flare: '#e5c06a',
        pulse: '#15803d',
        coral: '#e11d48',
        obsidian: '#07111e',
        carbon: '#1a3050',
        mercury: '#f0eeea',
      },
      boxShadow: {
        neon: '0 18px 48px rgba(201, 160, 62, 0.22)',
        violet: '0 18px 48px rgba(30, 77, 140, 0.22)',
        dropglow: '0 24px 80px rgba(229, 192, 106, 0.28)',
        soft: '0 24px 80px rgba(7, 17, 30, 0.5)',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-cyan': 'radial-gradient(circle at top, rgba(201, 160, 62, 0.14), transparent 32rem)',
        'radial-violet': 'radial-gradient(circle at 75% 20%, rgba(30, 77, 140, 0.13), transparent 34rem)',
        'grid-lines':
          'linear-gradient(rgba(201, 160, 62, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 160, 62, 0.08) 1px, transparent 1px)',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        pulseGlow: 'pulseGlow 3.8s ease-in-out infinite',
        orbit: 'orbit 18s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.58', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        orbit: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
