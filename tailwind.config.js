/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {colors:{"blue": "#1FBBFF","darkerBlue": "#59B8F9"},},
    // screens:{'xsm':{'min': '400px'}}
  },
  plugins: [],
}

