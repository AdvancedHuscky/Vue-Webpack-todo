import Vuex from 'vuex'

//不能直接生成一个新的 Vuex.Store,因为在 ssr 的时候会出现内存溢出的现象
//通过返回一个函数的形式，每次创建一个新的
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     updateCount(state, num) {
//       state.count = num
//     }
//   }
// })
//export default store
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'

export default () => {
  return new Vuex.Store({
    state: defaultState,
    mutations,
    getters
  })
}