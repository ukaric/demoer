const merge = require('webpack-merge')
const baseConfig = require('./base.config.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: path.resolve(__dirname, '../.tmp'),
    compress: true,
    port: 9000
  },
  output: {
    path: path.resolve(__dirname, '../.tmp'),
    filename: '[name].bundle.[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.scss|css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    // Extract imported CSS into own file
    new ExtractTextPlugin('[name].bundle.[chunkhash].css')
  ]
})
