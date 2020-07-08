const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const config = require('./config.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      minify: false
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new webpack.DefinePlugin({
      __API_URL__: JSON.stringify(config.development.apiUrl),
      __BACKEND_URL__: JSON.stringify(config.development.baseUrl),
      __DEVELOPMENT_MODE__: true
    })
  ],
  devServer: {
    contentBase: '../build',
  }
})
