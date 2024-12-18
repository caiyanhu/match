/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home_bg: "url(/images/home_bg.png)",
        paihangbang: "url(/images/paihangbang.png)",
        baoxiang: "url(/images/baoxiang.png)",
        logo: "url(/images/logo.png)",
        home_title: "url(/images/home_title.png)",
        pve: "url(/images/pve.png)",
        pvp: "url(/images/pvp.png)",

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
