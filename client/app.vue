<template>
  <div>
    <Header />
    <Todo />
    <Footer />
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
