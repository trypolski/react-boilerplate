const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const config = require('./config.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      minify: true
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      __API_URL__: JSON.stringify(config.production.apiUrl),
      __BACKEND_URL__: JSON.stringify(config.production.baseUrl),
      __DEVELOPMENT_MODE__: false
    })
  ]
})
