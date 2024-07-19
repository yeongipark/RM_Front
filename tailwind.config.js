/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      height: {
        0.9: "90%",
      },
      spacing: {
        100: "30rem",
        110: "32rem",
        150: "35rem", // 사용자 정의 크기 추가
      },
    },
    screens: {
      ss: "480px",
      sm: "620px",
      sl: "768px",
      md: "1060px",
      lg: "1200px",
    },
  },
  plugins: [],
};
