module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.exec\.js$/,
                    use: [ 'script-loader' ]
                }
            ]
        }
    }
};