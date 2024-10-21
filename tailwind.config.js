/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url(/images/home_background.svg)",
        homeBottom: "url(/images/home_background_bottom.png)",
        voiceWave: "url(/images/voiceWave.webp)",
        voiceWaveInit: "url(/images/voiceWaveInit.png)",
        button: "url(/images/button_background.png)",
        answerContainer: "url(/images/answer_container.png)",

        arrow: "url('/images/arrow.png')",
        arrow2: "url('/images/arrow2.png')",
        page_bg: "url('/images/page-bg.png')",
        home_bg: "url('/images/home-bg.png')",

        mysql_page_bg: "url('/images/mysql-page-bg.png')",
        mysql_nav: "url('/images/nav-mysql.png')",
        mysql_title: "url('/images/mysql-title.png')",
        mysql_card_bg: "url('/images/mysql-card-bg.png')",
        mysql_content: "url('/images/mysql-content.png')",

        pg_page_bg: "url('/images/pg-page-bg.png')",
        pg_nav: "url('/images/nav-pg.png')",
        pg_title: "url('/images/pg-title.png')",
        pg_card_bg: "url('/images/pg-card-bg.png')",
        pg_content: "url('/images/pg-content.png')",

        distribute_page_bg: "url('/images/distribute-page-bg.png')",
        distribute_nav: "url('/images/nav-distribute.png')",
        distribute_title: "url('/images/distribute-title.png')",
        distribute_card_bg: "url('/images/distribute-card-bg.png')",
        distribute_content: "url('/images/distribute-content.png')",

        ap_page_bg: "url('/images/ap-page-bg.png')",
        ap_nav: "url('/images/nav-ap.png')",
        ap_title: "url('/images/ap-title.png')",
        ap_card_bg: "url('/images/ap-card-bg.png')",
        ap_content: "url('/images/ap-content.png')",

        ip_ap: "url('/ip/ip-ap.webp')",
        ip_pg: "url('/ip/ip-pg.webp')",
        ip_mysql: "url('/ip/ip-mysql.webp')",
        ip_distribute: "url('/ip/ip-distribute.webp')",
      },
    },
  },
  plugins: [],
};
