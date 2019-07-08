const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const proxy = require('./proxy.config')

const PORT = 2333;
const HOST = '0.0.0.0';
const URL = `http://${HOST}:${PORT}`;

let proxyOptions = proxy

module.exports = {
  mode: 'development',
  entry: {
    index: '../src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/'
  },
  context: path.resolve(__dirname, '../src'),
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    stats: {
      cached: true,
      chunkModules: false,
      colors: true
    },
    hot: true,
    compress: true,
    contentBase: path.resolve(__dirname, '../src'),
    host: HOST,
    port: PORT,
    historyApiFallback: true,
    proxy: [() => proxyOptions],
    disableHostCheck: true
  },
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "../src"),
    },
    extensions: [".ts", ".tsx", ".js", ".json"],
    modules: [
      path.resolve(__dirname, "../src"),
      "node_modules"
    ]
  },
  module: {
    rules: [
      {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', "@babel/env"],
          plugins: [
            ["@babel/plugin-proposal-decorators", {"legacy": true}],
            ["@babel/plugin-proposal-class-properties", {"loose": true}],
            ["@babel/plugin-transform-runtime"],
          ]
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "../src/index.html",
      filename: "index.html",
      title: "HOOKS",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
}
