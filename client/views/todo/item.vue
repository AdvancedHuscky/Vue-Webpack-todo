<template>
    <div :class="['todo-item',todo.completed?'completed':'']">
        <input type="checkbox" class="toggle" v-model="todo.completed">
        <label for="">{{todo.content}}</label>
        <button :class="$style.destory" @click="deleteTodo">删除</button>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$style);
    },
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteTodo() {
            this.$emit("del", this.todo.id);
        }
    }
};
</script>
<style module>
.destory {
    font-size: 80px;
}
</style>
