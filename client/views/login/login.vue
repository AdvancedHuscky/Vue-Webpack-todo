<template>
  <div>this is login vue</div>
</template>
<script>
  export default{
    beforeRouteEnter (to, from, next) {
      // ...
      next(vm=>{
        console.log("拿到 vm实例",vm)
      })
    },
    //同样的路由 parent 形式的时候，会触发
    //如果路由相同，参数不同组件不会更新只能复用
    //可以在这里获取都状态，也可以从组件内 watch
    beforeRouteUpdate(){

    },
    beforeRouteLeave (to, from, next) {
      // ...
      //控制用户离开之前的行为
      //比较大的表单，在用户填写完之后加弹框
    }
  }
</script>