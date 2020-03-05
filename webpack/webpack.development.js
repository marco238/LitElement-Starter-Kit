const HTMLWebpackPlugin = require('html-webpack-plugin');

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
    compress: true,
    historyApiFallback: true,
    writeToDisk: true
  }
});
