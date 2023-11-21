/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        // Primary
        Red: "hsl(0, 100%, 66%)",
        // Neutral
        White: "hsl(0, 0%, 100%)",
        LightGrayishViolet: "hsl(270, 3%, 87%)",
        DarkGrayishViolet: "hsl(279, 6%, 55%)",
        VeryDarkViolet: "hsl(278, 68%, 11%)",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(to right, \
            hsl(249, 99%, 64%), \
            hsl(278, 94%, 30%))",
        "hero-desktop": "url('./src/assets/images/bg-main-desktop.png')",
        "hero-mobile": "url('./src/assets/images/bg-main-mobile.png')",
        "card-front": "url('./src/assets/images/bg-card-front.png')",
        "card-back": "url('./src/assets/images/bg-card-back.png')",
      },
    },
  },
  plugins: [],
};
