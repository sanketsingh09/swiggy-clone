/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "rgb(255, 82, 0)",
        "custom-black": "rgba(2, 6, 12, 0.6)",
        "custom-gray":
          "linear-gradient(rgb(255, 255, 255) -6.71%, rgb(235, 235, 242) 56.19%, rgb(223, 223, 231) 106.56%);",
      },
    },
  },
  plugins: [],
};
