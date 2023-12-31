/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*/.{js,jsx,ts,tsx}","./node_modules/flowbite/*/.js"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: {
          100: "#d9d9d9",
          900: "#373535",
          "100_01": "#d0d0d0",
          "100_02": "#d6d5d5",
          "100_3f": "#d9d9d93f",
        },
        black: {
          900: "#0d0d0d",
          "900_0c_01": "#0d0d0d0c",
          "900_01": "#000000",
          "900_00": "#00000000",
          "900_0c": "#0000000c",
          "900_cc": "#000000cc",
          "900_19": "#00000019",
        },
        green: { A700: "#06b906" },
        gray: {
          200: "#eae9e9",
          300: "#dadada",
          400: "#aeaeae",
          500: "#aaaaaa",
          600: "#817c7c",
          700: "#5e5e5e",
          900: "#161616",
          "500_01": "#949595",
          "500_03": "#aca7a7",
          "500_02": "#acacac",
          "500_05": "#939090",
          "500_04": "#969696",
          "900_80": "#16161680",
          "900_02": "#232323",
          "600_01": "#7e7e7e",
          "900_01": "#1a1a1a",
          "400_01": "#b5b5b5",
          "400_02": "#bbbbbb",
        },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs2: "0px 4px  24px 0px #0d0d0d0c",
        bs: "0px -4px  6px -4px #0000000c",
        bs1: "0px 1px  2px 0px #00000019",
      },
      fontFamily: { manrope: "Manrope" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#00000000,#00000000,#000000cc)",
      },
    },
  },
  plugins: [],
}
