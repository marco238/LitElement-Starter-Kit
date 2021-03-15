/* eslint-disable no-undef */
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { resolve } = require('path');

const modeConfig = env => require(`./webpack/webpack.${env.mode}.js`)(env);

const webcomponents = './node_modules/@webcomponents/webcomponentsjs';
const polyfils = [
    {
        from: resolve(`${webcomponents}/webcomponents-loader.js`),
        to: 'vendor',
        flatten: true
    },
    {
        from: resolve(`${webcomponents}/bundles/webcomponents-sd-ce-pf.js`),
        to: 'vendor/bundles',
        flatten: true
    }
];

const plugins = [
    new webpack.ProgressPlugin(),
    new CopyWebpackPlugin([...polyfils], {
        ignore: ['.DS_Store']
    })
];

module.exports = ({ mode }) => {
    return webpackMerge({
        mode,
        resolve: {
            extensions: ['.js']
        },
        entry: {
            'demo-element': ['babel-polyfill', './src/demo-element.js']
        },
        output: {
            path: resolve(__dirname, 'dist/legacy'),
            filename: '[name]_es5.bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: 'ie 11'
                                }
                            ]
                        ]
                    }
                },
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
    },
    modeConfig({mode}));
};
