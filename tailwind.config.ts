import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#732424', // deep maroon
        secondary: '#E47D30', // warm orange
        accent: '#EAE0D5', // light accent
        background: '#FAF7F2', // light beige
        foreground: '#171717', // dark gray/black
        muted: '#EAE0D5',
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
