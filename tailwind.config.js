module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        kombiPastelWeiss: "#e8e4c7",
        kombiKansasRot: "#9e261c",
        linkedIn: "#0a66c2",
        upwork: "#14a900",
        malt: "#ff5c57"
      },
      fontFamily: {
        kombicode: ["Raleway", "sans-serif"]
      }
    },
  }
}
