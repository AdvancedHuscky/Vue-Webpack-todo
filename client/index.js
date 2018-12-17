import Vue from 'vue'
import vueRouter from 'vue-router'
import App from './app.vue'

import './assets/styles/test-stylus.styl'
import './assets/styles/global.styl'
import createRouter from './config/router.js'
// const root = document.createElement('div')
// document.body.appendChild(root)
Vue.use(vueRouter)
const router = createRouter()

//路由守卫（全局）
//路由独享守卫 见 login.vue
//进行数据校验,需要用户登录的
router.beforeEach((to, from, next) => {
  if (to.fullPath == '/someUrl') {
    '无权限' && next('/login')
  }
  console.log('beforeEach: ');
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('beforeResolve: ');
  next()
})
//跳转走了，就不需要 next 了
router.afterEach((to, from) => {
  console.log('afterEach: ');
})

//在根节点实例上挂载 router，在每一个组件里面都可以使用这个对象
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root')