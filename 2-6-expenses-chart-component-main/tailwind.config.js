/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        // Primary
        SoftRed: "hsl(10, 79%, 65%)",
        Cyan: "hsl(186, 34%, 60%)",
        // Neutral
        DarkBrown: "hsl(25, 47%, 15%)",
        MediumBrown: "hsl(28, 10%, 53%)",
        Cream: "hsl(27, 66%, 92%)",
        VeryPaleOrange: "hsl(33, 100%, 98%)",
      },
    },
  },
  plugins: [],
};
