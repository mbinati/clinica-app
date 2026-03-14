/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-primary': '#111827',
        'bg-secondary': '#1f2937',
        'bg-card': '#1f2937',
        'bg-hover': '#374151',
        'border': '#374151',
        'text-primary': '#f9fafb',
        'text-secondary': '#9ca3af',
        'accent': '#10b981',
        'accent-hover': '#059669',
        'sidebar': '#1e293b',       // dark mode only fallback
        'sidebar-hover': '#334155', // dark mode only fallback
      },
    },
  },
  plugins: [],
}
