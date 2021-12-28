const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { NODE_ENV } = process.env

const IS_DEV = NODE_ENV !== 'production'

module.exports = {
  mode: IS_DEV ? 'development' : 'production',
  devtool: IS_DEV ? 'eval-cheap-source-map' : false,
  entry: [path.join(__dirname, '/src/index.js')],
  devServer: {
    liveReload: true,
    hot: false
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.json', 'scss']
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: IS_DEV
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEV
            }
          }
        ]
      },
      {
        test: /\.(ttf|woff)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/fonts',
          publicPath: 'assets/fonts'
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './www/index.html' })]
}
