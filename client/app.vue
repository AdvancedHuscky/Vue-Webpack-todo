<template>
  <div>
    <Header />
    <Todo />
    <Footer />
    <RouterView />
    <RouterLink to="/login">
      login
    </RouterLink>
  </div>
</template>
<script>
import Header from "./layout/header.vue";
import Footer from "./layout/footer.jsx";
import Todo from "./views/todo/todu.vue";

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
    }
};
</script>
<style>
#text {
    color: blue;
}
</style>
