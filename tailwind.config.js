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

        rank_modal: "url(/images/rank_modal.png)",
        ri_bg: "url(/images/ri_bg.png)",
        ri_yongshi: "url(/images/yongshi.png)",
        ri_fenshu: "url(/images/fenshu.png)",
        ri_avatar: "url(/images/avatar.png)",

        guoguan_modal: "url(/images/guoguan_modal.png)",
        star1: "url(/images/1star.png)",
        star2: "url(/images/2star.png)",
        star3: "url(/images/3star.png)",

        daoju_modal: "url(/images/daoju_modal.png)",
        buy: "url(/images/buy.png)",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
