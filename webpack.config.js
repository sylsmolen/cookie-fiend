const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WebExtWebpackPlugin = require("web-ext-webpack-plugin");

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",

        options: {
          plugins: ["syntax-dynamic-import"],

          presets: [
            [
              "@babel/preset-env",
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
    content_scripts: "./src/contentScripts/cookie-fiend.js",
    browser_action: "./src/browserAction/script.js"
  },

  output: {
    filename: "[name]/index.js",
    path: path.resolve(__dirname, "build")
  },

  mode: "development",

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  },
  devtool: false,
  plugins: [
    new WebExtWebpackPlugin({
      browserConsole: true,
      startUrl: ["www.goal.com"],
      sourceDir: path.resolve(__dirname, "build")
    }),
    new webpack.SourceMapDevToolPlugin({}),
    new CopyWebpackPlugin([
      { from: "src/browserAction/public", to: "browser_action/[name].[ext]" },
      { from: "public", to: "" }
    ])
  ]
};
