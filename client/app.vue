<template>
  <div>
    <Header />
    <Todo />
    <Footer />
    <RouterView />
    <RouterLink to="/login">
      login
    </RouterLink>
    <span>{{ count }}</span>
    <p>{{ $store.getters.fullName }}</p>
  </div>
</template>
<script>
import Header from "./layout/header.vue";
import Footer from "./layout/footer.jsx";
import Todo from "./views/todo/todu.vue";
import {mapState,mapGetters} from 'vuex'

export default {
    components: {
        Header,
        Footer,
        Todo
    },
    data() {
        return {
            text: "abc"
        };
    },
    computed:{
      ...mapState(['count']),
      // count(){
      //   return this.$store.state.count
      // }
    },
    mounted(){
      console.log(this.$store)
      let i = 1;
      setInterval(()=>{
        this.$store.commit('updateCount',i++)
      },1000)
    },

};
</script>
<style>
#text {
    color: blue;
}
</style>
