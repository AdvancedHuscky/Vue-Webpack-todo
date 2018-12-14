import Vue from 'vue'

const vm = new Vue({
  data: {
    text: 'hello',
    object: {
      a: "aaa",
      b: "bbb",
      c: "ccc"
    },
    checkBoxGroup: [1, 2, 3],
    picked: "",
    someText: ""
  },
  template: `<div>
  <div>{{text}}hello world</div>
  <ul>
    <li v-for="(item,key,index) in object">
      {{item}}--{{key}}--{{index}}
    </li>
  </ul>
  <div>
  <input type="checkbox" :value="1" v-model="checkBoxGroup">
  <input type="checkbox" :value="2" v-model="checkBoxGroup">
  <input type="checkbox" :value="3" v-model="checkBoxGroup">
  </div>
  <div>
    <input type="radio" :value="1" v-model="picked">
    <input type="radio" :value="2" v-model="picked">
    <input type="radio" :value="3" v-model="picked">
  </div>
  <input v-model.number.trim="someText">
  <div
  </div>`,
})
vm.$mount('#root')