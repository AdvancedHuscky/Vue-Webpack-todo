<template>
  <div :class="['todo-item',todo.completed?'completed':'']">
    <input
      v-model="todo.completed"
      type="checkbox"
      class="toggle"
    >
    <label for="">
      {{ todo.content }}
    </label>
    <button
      :class="$style.destory"
      @click="deleteTodo"
    >
      删除
    </button>
  </div>
</template>
<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    mounted() {
        console.log(this.$style);
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
