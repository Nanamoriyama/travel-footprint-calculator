/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pageOpen: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        pageClose: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0.9)", opacity: 0 },
        },
      },
      animation: {
        pageOpen: "pageOpen 1.5s ease-in-out",
        pageClose: "pageClose 1.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
