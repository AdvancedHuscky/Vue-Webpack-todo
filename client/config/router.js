import Router from 'vue-router'

import routes from './routes.js'

//因为要做服务端渲染。如果只 export default router 会导致在服务端渲染的时候出现内存溢出的问题
//服务端渲染的时候会详细的讲解
//hash 模式无法实现 seo
export default () => {
  return new Router({
    routes,
    mode: 'history',
    //base:'/default' //基础的地址，每个页面都会显示。每一个通过 vuerouter 跳转的页面地址都会有
    //linkActiveClass:'active-link',//设置 view-link 的全局属性
    //linkExactActiveClass:'exact-active-link'
    scrollBehavior(to, from, savedPosition) { //定义滚动位置
      if (savedPosition) {
        return savedPosition
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    },
    fallback: true, //当页面不支持 mode:history模式的时候，自动变为 hash 模式
    parseQuery(query) { //处理参数

    },
    stringifyQuery(obj) { //

    }
  })
}