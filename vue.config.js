module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.exec\.js$/,
                    use: ['script-loader']
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    use: ['url-loader']
                }
            ]
        }
    },
    devServer: {
        proxy: {
            "/contact^": {
                target: "http://localhost:8000/",
                secure: false
            },
            "/waitlist/subscribe/*": {
                target: "http://localhost:8000/",
                secure: false,
                changeOrigin: true
            }
        }
    }
};
