module.exports = {
    webpack: {
        configure:{
            // See https://github.com/webpack/webpack/issues/6725
            module:{
                rules: [{
                    test: /\.wasm$/,
                    type: 'javascript/auto',
                }]
            },
            devServer: {
                proxy: {
                    '/api': 'http://localhost:3080'
                }
            }
        }
    }
};