/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Matter: "Matter",
        Montoserat: "Montserrat",
        Opensans: "Open Sans",
      },
      container: {
        center: true,
        padding: "12px",
        screens: {
          xl: "1140px",
        },
      },
      colors: {
        main: "#1C1D33",
        secondblack: "#101010",
        purple: "#621C69",
        skyblue: "#09F",
        yellow: "#F7941D",
        light_white: "#cfcfcf",
        Mustard_color: "#FFD22E",
      },
    },
  },
};
