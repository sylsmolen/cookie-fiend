const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebExtWebpackPlugin = require('web-ext-webpack-plugin')

const outputDir = path.join(__dirname, 'build/')
const bsOutputDir = path.join(__dirname, 'lib/js')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    content_scripts: './src/contentScripts/index.js',
    background_scripts: './src/backgroundScripts/index.js',
    browser_action: './src/browserAction/index.js',
    extension_page: './src/extensionPage/lib/js/src/Index.bs.js'
  },
  mode: isProd ? 'production' : 'development',
  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, 'build')
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  },
  devtool: false,
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './public/index.html',
    //   inject: false
    // }),
    new WebExtWebpackPlugin({
      browserConsole: true,
      startUrl: ['www.goal.com'],
      sourceDir: path.resolve(__dirname, 'build')
    }),
    new webpack.SourceMapDevToolPlugin({}),
    new CopyWebpackPlugin([
      { from: 'src/browserAction/public', to: 'browser_action/[name].[ext]' },
      {
        from: 'src/extensionPage/public',
        to: 'extension_page/[name].[ext]'
      },
      { from: 'public', to: '' }
    ])
  ],
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',

        options: {
          plugins: ['syntax-dynamic-import'],

          presets: [
            [
              '@babel/preset-env',
              {
                modules: false
              }
            ]
          ]
        },

        test: /\.js$/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }
        ]
      }
    ]
  }
}
