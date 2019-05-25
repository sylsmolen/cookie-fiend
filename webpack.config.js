const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebExtWebpackPlugin = require('web-ext-webpack-plugin')

module.exports = {
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
      }
    ]
  },

  entry: {
    content_scripts: './src/contentScripts/index.js',
    background_scripts: './src/backgroundScripts/index.js',
    browser_action: './src/browserAction/index.js',
    extension_page: './src/extensionPage/lib/js/src/Index.bs.js'
  },
  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, 'build')
  },

  mode: 'development',

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
  ]
}
