/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url(/images/home_background@2x.png)",
        18: "url(/images/18.png)",
        182: "url(/images/18@2x.png)",

        countdown_bg: "url(/images/countdown_bg.png)",
        countdown_clock: "url(/images/countdown_clock.png)",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
