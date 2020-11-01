const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

const appDirectory = path.resolve(__dirname, '../../')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(appDirectory, 'dist/development/main'),
  },
  watch: true,
})
