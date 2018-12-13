import Vue from 'vue'

//挂载写法一：
// new Vue({
//   el: '#root',
//   data: {
//     text: 0
//   },
//   template: '<div>this is div</div>',
// })
//挂载写法二：
const app = new Vue({
  data: {
    text: 0
  },
  template: '<div>this is div</div>'
})
app.$mount('#root')

console.log(app.$data) //直接改变这个值会操作实例的data,也就是两者是同一个对象
console.log(app.$el)
console.log(app.$options);
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// } //会在实例下一次发生变化的时候加载（像是nextTick?）
console.log(app.$root) //===app,在所有的节点上面都可以直接调用，拿到的都是同一个值
console.log(app.$children) //