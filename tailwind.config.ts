import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        unnamed: {
          "color-705aaa": "#705aaa",
          "color-cbc8d4": "#cbc8d4",
          "activestate-bg-2": "#d8fcf7",
          "activestate-bg-1": "#01f0d0",
          "color-0bd984": "#0bd984",
          "color-072635": "#072635",
          "color-0c3d5d": "#0c3d5d",
          "color-084c77": "#084c77",
          "color-055a92": "#055a92",
          "color-006aac": "#006aac",
          "color-007bc7": "#007bc7",
          "color-707070": "#707070",
          "color-f6f6f6": "#f6f6f6",
          "color-ededed": "#ededed",
          "color-000000": "#000000",
          "color-878787": "#878787",
          "color-ffffff": "#ffffff",
          "color-ff6200": "#ff6200",
          "page-bg": "#F6F7F8",
        },
        primaryBlue: "#006AAC",
        secondaryBlue: "#3191C9",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        "14": "14px",
        "18": "18px",
        "24": "24px",
      },
      lineHeight: {
        "19": "19px",
        "24": "24px",
        "33": "33px",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
        "800": "800",
      },
      letterSpacing: {
        "0": "0px",
      },
      textTransform: {
        titlecase: "capitalize",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".text-titlecase": {
          "text-transform": "capitalize",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;

// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         unnamed: {
//           'color-705aaa': '#705aaa',
//           'color-cbc8d4': '#cbc8d4',
//           'activestate-bg-2': '#d8fcf7',
//           'activestate-bg-1': '#01f0d0',
//           'color-0bd984': '#0bd984',
//           'color-072635': '#072635',
//           'color-0c3d5d': '#0c3d5d',
//           'color-084c77': '#084c77',
//           'color-055a92': '#055a92',
//           'color-006aac': '#006aac',
//           'color-007bc7': '#007bc7',
//           'color-707070': '#707070',
//           'color-f6f6f6': '#f6f6f6',
//           'color-ededed': '#ededed',
//           'color-000000': '#000000',
//           'color-878787': '#878787',
//           'color-ffffff': '#ffffff',
//           'color-ff6200': '#ff6200',
//         },
//       },
//       fontFamily: {
//         manrope: ['Manrope', 'sans-serif'],
//       },
//       fontSize: {
//         '14': '14px',
//         '18': '18px',
//         '24': '24px',
//       },
//       lineHeight: {
//         '19': '19px',
//         '24': '24px',
//         '33': '33px',
//       },
//       fontWeight: {
//         'normal': '400',
//         'bold': '700',
//         '800': '800',
//       },
//       letterSpacing: {
//         '0': '0px',
//       },
//       textTransform: {
//         'titlecase': 'capitalize',
//       },
//     },
//   },
//   plugins: [
//     function({ addUtilities }) {
//       const newUtilities = {
//         '.text-titlecase': {
//           'text-transform': 'capitalize',
//         },
//       };

//       addUtilities(newUtilities, ['responsive', 'hover']);
//     },
//   ],
// };
