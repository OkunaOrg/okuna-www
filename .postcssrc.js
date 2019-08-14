const autoprefixer = require("autoprefixer");
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
        autoprefixer(),
        process.env.NODE_ENV === "production"? purgecss({
            content: [
                "./src/**/*.vue",
                "./src/**/*.js",
                "./node_modules/buefy/**/*.js",
                "./node_modules/buefy/**/*.vue"
            ]
        }): ""
    ]
}
