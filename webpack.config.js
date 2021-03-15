/* eslint-disable no-undef */
const webpack = require('webpack');
const { resolve } = require('path');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const modeConfig = env => require(`./webpack/webpack.${env.mode}.js`)(env);

const plugins = [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin()
];

module.exports = ({ mode }) => {
    return webpackMerge(modeConfig({mode}), {
        mode,
        resolve: {
            extensions: ['.js']
        },
        entry: {
            'demo-element': ['./src/demo-element.js']
        },
        output: {
            path: resolve(__dirname, 'dist/'),
            filename: '[name]_es6.bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.css|\.s(c|a)ss$/,
                    use: [{
                        loader: 'lit-scss-loader',
                        options: {
                            minify: true
                        },
                    }, 'extract-loader', 'css-loader', 'sass-loader'],
                }
            ]
        },
        plugins
    });
};