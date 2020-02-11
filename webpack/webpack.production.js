const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { resolve } = require('path');

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

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin([...polyfils], {
      ignore: ['.DS_Store']
    })
  ]
});
