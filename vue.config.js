
module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.exec\.js$/,
                    use: ['script-loader']
                }
            ]
        }
    },
    devServer: {
        proxy: {
            "/contact": {
                target: "http://localhost:8000/",
                secure: false
            }
        }
    }
};
