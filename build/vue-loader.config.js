//const docsLoader = require.resolve('./doc-loader')

module.exports = (isDev) => {
    return {
        preserveWhiteSpace: true, //控制不小心在template中输入的多余空格
        extractCSS: !isDev, //将每个组件中的style css样式也打包入指定的css文件。
        //带有scoped标签的样式会自动带hash标识，仍然作为内部样式只能被该组件使用
        //仅仅当生产环境需要使用这个设置
        cssModules: {
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]', //自定义class名字，对应生成唯一对应的名字，//也有增强保密性的作用,使用$style
            camelCase: true, //将kebab-case转换为camelcase更利于js调用
        },
        //hotReload: false//是否热重载会根据环境变量自动生成，如果设置false会关闭热重载
        loader: {
            //'docs':docsLoader //开发组件库的时候指定写文档的位置
        }
    }
}