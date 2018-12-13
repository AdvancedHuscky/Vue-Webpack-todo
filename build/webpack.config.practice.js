const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base.js')

const isDev = process.env.NODE_ENV == "development"

let config
//只能放在客户端配置中，因为将来服务端要用另一套规则
//服务端渲染不需要html-webpack-plugin
const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new HTMLPlugin({
    template: path.join(__dirname, './template.html')
  }),

]
const devServer = {
  port: 8080,
  host: '0.0.0.0', //localhost和内网ip都能访问
  overlay: {
    errors: true //webpack编译的错误打到网页上
  },
  //historyFallback: {}, // webpack不认识的地址映射到index.html文件上
  hot: true,
  open: true
}

config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),
  //代码映射，官网推荐的设置
  //可以看到打包之前的自己写的代码，便于调试
  devtool: "#cheap-module-eval-source-map",
  module: {
    rules: [{
      test: /\.styl/,
      use: [
        'vue-style-loader',
        'css-loader',
        // {
        //     loader: 'css-loader',
        //     options: {
        //         module: true,
        //         localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
        //     }
        // },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
          }
        },
        'stylus-loader'
      ]
    }]
  },
  devServer,
  resolve: {
    alias: {
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js') //指定在开发环境时引入相应的vue包
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //热更新
    new webpack.NoEmitOnErrorsPlugin(), //减少不需要信息的展示
    ...defaultPlugins
  ]
})

module.exports = config