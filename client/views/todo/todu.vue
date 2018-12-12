<template>
  <div>
    <section class="real-app">
      <input
        type="text"
        class="add-input"
        autofocus
        placeholder="接下来要去做什么？"
        @keyup.enter="addTodo"
      >
    </section>
    <Item
      v-for="todo in filteredTodos"
      :key="todo.id"
      :todo="todo"
      @del="deleteTodo"
    />
    <Tabs
      :filter="filter"
      :todos="todos"
      @toggle="toggleFilter"
      @clearAll="clearAll"
    />
  </div>
</template>
<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";
let id = 0;
export default {
    components: {
        Item,
        Tabs
    },
    data() {
        return {
            todos: [
                {
                    id: 0,
                    content: "这是一条消息",
                    completed: false
                }
            ],
            filter: "all"
        };
    },
    computed: {
        filteredTodos() {
            if (this.filter == "all") {
                return this.todos;
            }
            const completed = this.filter === "completed";
            return this.todos.filter(todo => completed === todo.completed);
        }
    },
    methods: {
        addTodo(e) {
            this.todos.unshift({
                id: ++id,
                content: e.target.value.trim(),
                completed: false
            });
            e.target.value = "";
        },
        deleteTodo(id) {
            this.todos.splice(this.todos.findIndex(todo => todo.id == id), 1);
        },
        toggleFilter(state) {
            this.filter = state;
        },
        clearAll() {
            //this.todos = [];
            this.todos = this.todos.filter(todo => !todo.completed);
        }
    }
};
</script>