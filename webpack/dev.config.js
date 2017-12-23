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
          use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
        })
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: '[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    // Extract imported CSS into own file
    new ExtractTextPlugin('[name].bundle.[chunkhash].css')
  ]
})
