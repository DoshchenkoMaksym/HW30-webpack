const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
      },
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        port: 8000,
    },
    mode: 'production',
}