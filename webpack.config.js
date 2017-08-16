const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlguin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './client.js'),
    output: {
        path: path.resolve(__dirname, './server/dist'),
        publicPath: './',
        filename: '[name].js'
    },
    module: {
        rules:[{
            test: /\.vue$/,
            loader: 'vue-loader'
        },{
            test: /\.js$/,
            exclude: '/node_modules/',
            loader: 'babel-loader'
        },{
            test: /\.css$/,
            loader: ['style-loader', 'css-loader']
        },{
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=1024'
        }]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，违者必究'),
        // new HtmlWebpackPlguin({
        //     template: '',
        // }),
    ],
    devServer: {
        port: 3001,
        inline: true,
        historyApiFallback: true,
        hot: true,
    }
};
