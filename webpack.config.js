const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const { resolve } = require('path');
const portFinderSync = require('portfinder-sync');
const distPath = 'dist';

const modeConfig = env => require(`./webpack/webpack.${env.mode}.js`)(env);

const plugins = [
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
      filename: '[name]_es6.bundle.js',
      chunkFilename: '[id]_es6.js'
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

