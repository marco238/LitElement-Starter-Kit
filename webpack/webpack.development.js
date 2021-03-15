/* eslint-disable no-undef */
const HTMLWebpackPlugin = require('html-webpack-plugin');
const portFinderSync = require('portfinder-sync');

module.exports = () =>({
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true
      }
    })
  ],
  devServer: {
    inline: true,
    host: '127.0.0.1',
    port: portFinderSync.getPort(8080),
    compress: true,
    historyApiFallback: true,
    writeToDisk: true
  }
});
