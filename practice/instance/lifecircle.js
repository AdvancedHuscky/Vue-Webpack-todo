import Vue from 'vue'
const app = new Vue({
  //el: "#root",
  data: {
    text: '1',
    isBlue: true,
    isRed: true,
    isYellow: true,
    object: {
      a: 2
    }
  },
  beforeCreate() {
    console.log('beforeCreate: ');
  },
  created() {
    console.log('created: ');
  },
  beforeMount() {
    console.log('beforeMount: ');
  },
  mounted() {
    console.log('mounted: ');
  },
  beforeUpdate() {
    console.log('beforeUpdate: ');
  },
  updated() {
    console.log('beforeCreate: ');
  },
  beforeDestroy() {
    console.log('beforeDestroy: ');
  },
  destroyed() {
    console.log('destroyed: ');
  },
  template: `<div>
    <div :class={blue:isBlue}>哈哈哈哈哈哈哈</div>
    <div :class="[isRed?'red':'']">哈哈哈哈哈哈哈</div>
    <div :class="[isRed?'red':'','yellow',{blue:isBlue}]">哈哈哈哈哈哈哈</div>
  </div>`,
})
app.$mount('#root')
setInterval(() => {
  //app.$data.object.a++
}, 1000)