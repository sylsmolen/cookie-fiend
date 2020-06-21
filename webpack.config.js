const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebExtWebpackPlugin = require('./webpack/web-ext-webpack-plugin')
const bsOutputDir = path.join(__dirname, 'lib/js')


/*
setup

you need webpack : npm install --global webpack

in one console run: `npm start`
in another one: `webpack --watch`

*/

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    background_scripts: './lib/js/src/BackgroundScripts/BackgroundScript.bs.js',
    extension_page: './lib/js/src/ExtensionPage/ExtensionPageIndex.bs.js',
    content_scripts: './lib/js/src/ContentScripts/ContentScript.bs.js',
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
      startUrl: ['www.google.com'],
      sourceDir: path.resolve(__dirname, 'build')
    }),
    new webpack.SourceMapDevToolPlugin({}),
    new CopyWebpackPlugin([
      // { from: 'src/browserAction/public', to: 'browser_action/[name].[ext]' },
      {
        from: 'src/ExtensionPage/Public',
        to: 'extension_page/[name].[ext]'
      },
      { from: 'public', to: '' },
      {
        from: './src/**/*.css',
        to: bsOutputDir
      }
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
