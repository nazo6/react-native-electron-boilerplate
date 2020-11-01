const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')

const appDirectory = path.resolve(__dirname, '../../')

const dev = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(appDirectory, 'dist/development/renderer'),
  },
  devServer: {
    contentBase: path.resolve(appDirectory, 'dist/development/renderer'),
    port: 9000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
}

const result = merge(common, dev)
result.module.rules[0].use.options.plugins.push(
  require.resolve('react-refresh/babel'),
)

module.exports = result
