module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headerBackground: "url(../images/bg3-min.jpg)",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
