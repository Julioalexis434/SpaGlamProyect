/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#EE99C9",
          500: "#DFAFFE",
          600:"#A0138E"
        },
      },
    },
  },
  plugins: [],
};
