var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader" 
            },
            {
                test: /\.css$/,
                loader: "style-loader" 
            }
        ]
    }
};