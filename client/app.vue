<template>
    <div>
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>

</template>
<script>
import Header from "./layout/header.vue";
import Footer from "./layout/footer.jsx";
import Todo from "./views/todo/todu.vue";

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
