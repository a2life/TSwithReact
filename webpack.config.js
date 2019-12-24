const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {

    entry: {
        index: "./src/index.tsx"

    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 5080
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    devtool: "cheap-module-source-map"
}
