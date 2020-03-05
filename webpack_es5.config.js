const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { resolve } = require('path');

const modeConfig = env => require(`./webpack/webpack.${env.mode}.js`)(env);

const distPath = 'dist/legacy';

const webcomponents = './node_modules/@webcomponents/webcomponentsjs';
const polyfils = [
  {
    from: resolve(`${webcomponents}/webcomponents-loader.js`),
    to: 'vendor',
    flatten: true
  },
  {
    from: resolve(`${webcomponents}/custom-elements-es5-adapter.js`),
    to: 'vendor',
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
      'app-element': ['babel-polyfill', './src/app-element.js']
    },
    output: {
      path: resolve(__dirname, distPath),
      filename: '[name]_es5.bundle.js',
      chunkFilename: '[id]_es5.js'
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
        }
      ]
    },
    plugins
  },
  modeConfig({mode}))
}

