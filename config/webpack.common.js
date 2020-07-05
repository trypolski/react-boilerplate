const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: [
    path.resolve(__dirname, '../src/index.js')
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../build')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/assets/'),
          to: path.resolve(__dirname, '../build/assets/')
        },
        {
          from: path.resolve(__dirname, '../public/robots.txt'),
          to: path.resolve(__dirname, '../build')
        },
        {
          from: path.resolve(__dirname, '../public/favicon.png'),
          to: path.resolve(__dirname, '../build/assets')
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[hash]-[name].[ext]',
          publicPath: '../assets',
          outputPath: 'assets'
        }
      }
    ]
  }
}
