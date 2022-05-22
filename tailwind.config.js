module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#12B0E8",
          secondary: "#51E1ED",
          accent: "#207398",
          neutral: "#6AC47E",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },
  
  plugins: [require("daisyui")],
}
