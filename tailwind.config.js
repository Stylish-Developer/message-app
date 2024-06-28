/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ca: {
          black: '#000000',
          black2: "#131d23",
          green: '#006a40',
          darkGreen: "#23353e",
          lightGreen: '#f2f8f5',
          yellowGreen: "#e5ff6e",
          grey: "#1f222a",
          lightGrey: "#b1b1b1",
          lightGrey2: "#ddd8d4",
          darkGrey: "#222222",
          purple: "#b783f0",
          lightPurple: "#b783f0",
          darkBlue: "#16132b",
          lightVoilet: "#e3e0f1",
          darkBrown: "#221813",
          white2: "#f9fafb",
          slimBorder: "rgba(164, 164, 164, 0.3)",
          xSlimBorder: "rgba(164, 164, 164, 0.2)",
          xxSlimBorder: "rgba(164, 164, 164, 0.1)",
        }
      },
      fontFamily: {
        "Dosis-Bold": ["Dosis-Bold"],
        "Dosis-ExtraBold": ["Dosis-ExtraBold"],
        "Dosis-ExtraLight": ["Dosis-ExtraLight"],
        "Dosis-Light": ["Dosis-Light"],
        "Dosis-Medium": ["Dosis-Medium"],
        "Dosis-Regular": ["Dosis-Regular"],
        "Dosis-SemiBold": ["Dosis-SemiBold"],
      }
    },
  },
  plugins: [],
}

