/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBgColor: "#1E1E1E",
        mainTextWhiteColor: "#F5F5F5",
        mainGreenColor: "#7DCC3B",
      },
    },
  },
  plugins: [],
};
