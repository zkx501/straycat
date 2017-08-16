const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

let clientConfig = {
    entry: path.resolve(__dirname, './client.js'),
    output: {
        path: path.resolve(__dirname, './server/public'),
        // publicPath: path.join(__dirname, './public/'),
        // publicPath: 'http://127.0.0.1:9898/static/',
        publicPath: './',
        filename: '[name].js'
    },
    module: {
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {presets: ['es2015']}
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            }
        ],
    },
    devServer: {
        port: 8899,
        inline: true,
        historyApiFallback: true,
        hot: true,
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，违者必究'),
        // new HtmlWebpackPlugin({
        //     template: './demo.html',
        // }),
    ],
    // devtool:'eval-source-map',
};

module.exports = clientConfig;