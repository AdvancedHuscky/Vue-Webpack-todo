<template>
    <div>
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>

</template>
<script>
import Header from "./assets/todo/header.vue";
import Footer from "./assets/todo/footer.jsx";
import Todo from "./assets/todo/todu.vue";

export default {
    data() {
        return {
            text: "abc"
        };
    },
    components: {
        Header,
        Footer,
        Todo
    }
};
</script>
<style>
#text {
    color: blue;
}
</style>
