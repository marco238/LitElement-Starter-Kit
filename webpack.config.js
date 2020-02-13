const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve } = require('path');
const portFinderSync = require('portfinder-sync');
const distPath = 'dist';

const modeConfig = env => require(`./webpack/webpack.${env.mode}.js`)(env);

const plugins = [
  new CleanWebpackPlugin(),
  new webpack.ProgressPlugin()
];

module.exports = ({ mode }) => {
  return webpackMerge({
    mode,
    resolve: {
      extensions: ['.js']
    },
    entry: {
      'app-element': ['./src/app-element.js']
    },
    output: {
      path: resolve(__dirname, distPath),
      filename: '[name].bundle.js'
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/(?!lit-element|lit-html)/, // lit needs to be transpiled cos its written in ES6
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-runtime'],
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                  targets: '>1%, not dead, ie 11'
                }
              ]
            ]
          }
        }
      ]
    },
    devServer: {
      inline: true,
      host: '127.0.0.1',
      port: portFinderSync.getPort(8080),
      compress: true,
      historyApiFallback: true,
      writeToDisk: true
    },
    plugins
  },
  modeConfig({mode}))
}

