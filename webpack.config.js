const path = require('path')

const APP_DIR = path.resolve(__dirname, 'app')
const BUILD_DIR = path.resolve(__dirname, 'public')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const config = {
    context: __dirname,
    entry: `${APP_DIR}/app.js`,
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: false
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ]
}

module.exports = config