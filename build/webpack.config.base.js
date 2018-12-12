const path = require('path')
const webpack = require('webpack')
const createVueLoaderOptions = require('./vue-loader.config.js')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//const compiler = require('vue-template-compiler')

const isDev = process.env.NODE_ENV === 'development';

const config = {
  mode: process.env.NODE_ENV || 'production', //development 或者 production 两种模式 webpack4
  target: 'web',
  entry: path.join(__dirname, '../client/index.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, '../dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new VueLoaderPlugin(),
    //new compiler()
  ],
  module: {
    rules: [{
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: createVueLoaderOptions(isDev)
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/i,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: 'resources/[path][name].[hash:8].[ext]'
          }
        }]
      }
    ]
  }
}

module.exports = config