const path = require('path')
const fs = require('fs')

const appDirectory = path.resolve(__dirname, '../../')
const rendererDirectory = __dirname

const HtmlWebpackPlugin = require('html-webpack-plugin')

const librariesData = JSON.parse(
  fs.readFileSync(path.resolve(rendererDirectory, '../libraries.json'), 'utf8'),
)
const libraries = librariesData.map((value) => {
  return path.resolve(appDirectory, 'node_modules', value)
})

module.exports = {
  entry: [path.resolve(rendererDirectory, 'src/index.web.js')],

  output: {
    filename: 'bundle.web.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        include: [
          path.resolve(rendererDirectory, 'src/index.web.js'),
          path.resolve(appDirectory, 'src'),
          path.resolve(appDirectory, 'node_modules/react-native'),
          ...libraries,
        ],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-typescript'],
            plugins: [
              'dev-expression',
              ['babel-plugin-react-native-web', {commonjs: true}],
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      },
      {
        test: /\.(html?)$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.ttf$/,
        loader: 'url-loader',
        include: path.resolve(
          appDirectory,
          'node_modules/react-native-vector-icons',
        ),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rendererDirectory, 'src/index.html'),
    }),
  ],
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: ['.web.js', '.web.ts', '.js', '.ts', '.tsx', '.html'],
  },
}
