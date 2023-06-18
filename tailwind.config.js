/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "content-width": "var(--content-width)"
      },
      colors: {
        "VeryDarkBlue" : "hsl(220, 13%, 13%)",
        "Orange": "hsl(26, 100%, 55%)",
        "PaleOrange": "hsl(25, 100%, 94%)",
        "DarkGrayishBlue": "hsl(219, 9%, 45%)",
        "GrayishBlue": "hsl(220, 14%, 75%)",
        "LightGrayishBlue": "hsl(223, 64%, 98%)",
        "LigthBox": "hsl(0, 0%, 0%, 75%)",
      }
    },
  },
  plugins: [],
}

