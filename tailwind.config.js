/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_blue: "var(--dark-blue)",
        gray_light: "var(--gray-light)",
        gray_blue: "var(--gray-blue)",
        gray_white: "var(--gray-white)",
        green_blue: "var(--green-blue)",
        lime: "var(--lime)",
        sky_blue: "var(--sky-blue)",
        gradient_blue: "var(--gradient-blue)",
        black: "var(--black)",
        dark_gray: "var(--dark-gray)",
        mid_gray: "var(--mid-gray)",
        white: "var(--white)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
