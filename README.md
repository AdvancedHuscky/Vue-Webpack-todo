# Vue-Webpack-todo

简介：本课程基于一个 TODO 示例应用讲解 VUE2 的基本使用以及如何搭建一个 vue 的工程。首先通过 webpack 我们搭建了一个完善的 vue 的 workflow，然后围绕功能实现讲解 vue 的使用，并介绍了 vue 的.vue 文件以及 jsx 的开发模式。

vue-loader:13.6.0

webpack:3.10.0

vue:2.5.13

vue-template-compiler:2.5.13

css-loader:0.28.7

webpack-dev-server@2.10.0

//cross-env 用来适配不同系统来设置环境变量
process.env 可以读取环境变量

postcss 用来优化 css 的，通过一系列的组件来优化，如：autoprefixer,为 css 加前缀

extract-text-webpack
chunkHash 命名只能在生产环境使用，否则会报错

extract-text-webpack-plugin
如果不加任何处理，css 文件将会以 js 的方式在 bundle.js 中出现，显然不是我们想要的效果，无法做浏览器缓存
如何进行优化呢？可以将 css 文件打包拎出来作为单独的文件
这个插件可以将非 js 的文件打包,可以将这个文件插入最后的 html 头部

要将类库代码进行单独打包，因为 vue 的 js 代码是十分稳定的，如果每次都让 vue 的代码跟着我们的业务代码更新而更新是很耗费性能的
所以要尽可能的缓存这部分稳定的代码，更长时间的利用浏览器的缓存来缓解服务器的压力

hash 和 chunkhash 的区别
chunk 代表 entry 里面声明的不同的节点，单独打包的时候必须要用
hash 代表整个应用

jsx 语法与.vue 的单文件语法各有各的好处，.vue 结构更清晰组件化更强，而 jsx 语法则可以使用 js 的原生方法，更加灵活一些

webpack.DefinePlugin 插件作用为：
使得在 JS 中也能使用 NODE_ENV 环境变量，调用时用的就是属性 'process.env'。
webpack 在打包时会根据这个 环境变量 来选择框架(vue/react)的版本。像 vue 在开发版本中会有很多错误提示之类的功能，而在生产版本中是没有的。

html-webpack-plugin 是一个 webpack 插件， 作用为：
为 html 文件中引入的外部资源如 script、link 动态添加每次 compile 后的 hash，防止引用缓存的外部文件问题
可以生成创建 html 入口文件，比如单页面可以生成一个 html 文件入口，配置 N 个 html-webpack-plugin 可以生成 N 个页面入口

loader
use 属性的值是一个数组，能使用多个 loader 。然后数组内 loader 的使用顺序是 index 越大越先使用
JS 只能解析 JS 文件，使用 loader 后就能在 JS 中解析其他的资源

对图片进行处理使用 url-loader。
url-loader 是对 file-loader 进行了封装，如果图片小于 limit 设置的值，url-loader 就会对图片进行 base64 转换，然后写入 JS 中，减少请求。如果大于 limit 的值就会用 file-loader 读取图片，再存放在其他地方。
limit：设置进行转换的图片的最大大小。
name：没有进行转换的图片的名称。[name] -- 原始图片的名称，[ext] -- 原始图片的扩展名

为何头部已经声明
const isDev = process.env.NODE_ENV == "development"
在插件中还要引入这个
plugins: [
new webpack.DefinePlugin({
'process.env': {
NODE_ENV: isDev ? '"development"' : '"production"'
}
}),
原因：这是要给内部 webpack,页面上以及我们自己写的代码来判断环境，也就是说可以在代码中直接调用
其次，vue 会根据不同的环境区分打包，在 dist 目录下会有不同来源的代码，在开发环境是一个比较大的版本，里面会包含很多错误信息的提示以及功能
这些功能在正式环境中没必要去用，一方面会加大文件的大小，另一方面会让程序的运行效率降低

vue 的响应式（reactive），主旨是依赖，有依赖关系就会随着发生改变
比如 template 中有数据依赖 data,computed 中引用数据的依赖等等

使用 vue 的时候，尽量把数据都声明在顶层组件里面，便于管理。数据在哪里声明，就在那里操作

#精深课程
vue 文件想要在更改样式的时候使用热更新，需要将 style-loader 替换为 vue-style-loader
rimraf 每次打包前将旧的 dist 删除 "clean":"rimraf dist",需要在 package.json script 中配置

##eslint
推荐安装
eslint eslint-config-standard acorn@^6.0.0 eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node

#### eslint --init

- eslint-config-standard@12.0.0
- eslint-plugin-promise@4.0.1
- eslint-plugin-standard@4.0.0
- eslint-plugin-node@8.0.0
- eslint-plugin-import@2.14.0
- eslint@5.10.0
- eslint-plugin-html@5.0.0
  支持.vue 文件的解析，安装 eslint-plugin-html

  安装 eslint-loader,babel-eslint
  {
  test: /\.(vue|js|jsx)\$/,
  loader: 'eslint-loader',
  exclude: /node_modules/,
  enforce: 'pre'//预处理,在 vue-loader 等其他 loader 处理之前先处理，有错误直接报错
  },

  以上配置无法满足.vue 文件的解析，后来使用 eslint-plugin-vue 解决了
