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
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HTMLPlugin(),

]
const devServer = {
  port: 8000,
  host: '0.0.0.0', //localhost和内网ip都能访问
  overlay: {
    errors: true //webpack编译的错误打到网页上
  },
  //historyFallback: {}, // webpack不认识的地址映射到index.html文件上
  hot: true,
  open: true
}
if (isDev) {
  config = merge(baseConfig, {
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
    plugins: [
      new webpack.HotModuleReplacementPlugin(), //热更新
      //new webpack.NoEmitOnErrorsPlugin(), //减少不需要信息的展示 webpack4 废弃
      ...defaultPlugins
    ]
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../client/index.js'),
      //vender: ['vue']// webpack4废弃 可以由optimization中splitChunks替换
    },
    output: {
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [{
        test: /\.styl/,
        use: ExtractPlugin.extract({
          fallback: 'vue-style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              }
            },
            'stylus-loader'
          ]
        })
      }]
    },
    optimization: { //webpack4新增 用来替换CommonsChunkPlugin
      splitChunks: {
        // cacheGroups: {
        //   commons: {
        //     chunks: 'initial',
        //     minChunks: 2,
        //     maxInitialRequests: 5,
        //     minSize: 0
        //   },
        //   vendor: {
        //     test: /node_modules/,
        //     chunks: 'initial',
        //     name: 'vendor',
        //     priority: 10,
        //     enforce: true
        //   }
        // }
        chunks: 'all'
      },

      runtimeChunk: true
    },
    plugins: [
      new ExtractPlugin('styles.[contentHash:8].css'), //TODO:build报错
      //CommonsChunkPlugin webpack4废弃
      // new webpack.optimize.CommonsChunkPlugin({
      //     name: ['vendor', 'manifest']
      // }),
      // //在有新的模块加入的时候，webpack会给没有模块加上名字，避免因为文件删改，文件的hash名字随意更改，有利于查询缓存
      // //vendor要放在runtime前面，否则会失去作用
      // new webpack.optimize.CommonsChunkPlugin({
      //     name: 'runtime' //在entry里面没有声明过的名字，一般是runtime
      // }),
      ...defaultPlugins
    ]
  })
}

module.exports = config