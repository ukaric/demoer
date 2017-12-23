const webpack = require('webpack')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const baseConfig = require('./base.config.js')
const path = require('path')

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
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
              name: '[name][sha512:hash:base64:7].[ext]',
              outputPath: 'img/'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                quality: '65-90'
              },
              mozjpeg: {
                quality: 65
              }
            }
          }
        ]
      }
    ]
  },

  plugins: [
    // Extract imported CSS into own file
    new ExtractTextPlugin('[name].bundle.[chunkhash].css'),
    // Minify JS
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new UglifyJsPlugin({
      sourceMap: false,
      uglifyOptions: {
        ie8: false
      }
    }),
    new FaviconsWebpackPlugin(path.resolve(__dirname, '../src/favicon.png'))
  ]
})
