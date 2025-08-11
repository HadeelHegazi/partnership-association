/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#667eea',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#764ba2',
          foreground: '#ffffff',
        },
        background: '#ffffff',
        foreground: '#333333',
        accent: {
          DEFAULT: '#f093fb',
          foreground: '#ffffff',
        },
        destructive: '#e74c3c',
        muted: '#f8f9fa',
        border: '#e5e7eb',
        input: '#f3f4f6',
        ring: '#667eea',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
