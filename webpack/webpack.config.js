var webpack = require('webpack');

module.exports = {
    entry: __dirname + '/src/js/app.js',
    output: {
        path: __dirname + '/dist/js',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /.css$/,
                loader: "style!css"
            },
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};