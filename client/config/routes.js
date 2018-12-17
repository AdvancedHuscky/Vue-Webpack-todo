// import Todo from '../views/todo/todu.vue'
import Login from '../views/login/login.vue'
export default [{
    path: '/',
    redirect: '/app' //无匹配项的时候重定向到'/app'
  },
  {
    path: '/app',
    //component: Todo,
    component: () => import('../views/todo/todu.vue') //动态引入组件
    //需要安装 babel-plugin-syntax-dynamic-import
    // children: [{
    //   path: 'test',
    //   component: Login
    // }]
  },
  {
    path: '/app/:id',
    //设置 props 好处：避免使用 this.$route,使得组件和$route解耦
    //写法一：直接使用名称作为 prop名称
    //props: true, //会使得 id 作为组件的 props 传入，可以直接在 props 中声明使用使用名称
    //写法二：自定义名称
    // props: {
    //   id: 'itemId'
    // },
    component: () => import('../views/todo/todu.vue'), //动态引入组件,
    name: 'app',
    meta: { //存储一些可能用到的元信息，可以通过$route.meta拿到
      title: 'this is app',
      description: 'addkfngkdnkdnkd'
    }
  },
  {
    path: '/login',
    component: Login
  }
]