const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  // context: path.resolve(__dirname, '../src'),
  entry: path.resolve(__dirname, '../src/js/index.js'),

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new HtmlWebpackPlugin({
      title: 'App',
      filename: 'index.html',
      template: path.resolve(`${__dirname}`, '../src/index.pug')
    })
  ]
}
