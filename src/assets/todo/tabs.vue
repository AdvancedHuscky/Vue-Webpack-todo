<template>
    <div class="helper">
        <span class="left">{{unFinishedTodoLength}} items left</span>
        <span class="tabs">
            <span v-for="state in states" :key="state" :class="[state,filter===state?'actived':'']" @click="toggleFilter(state)">
                {{state}}
            </span>
        </span>
        <span class="clear" @click="clearAllCompleted">clear all</span>
    </div>
</template>
<script>
export default {
    props: {
        filter: {
            type: String,
            required: true
        },
        todos: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            states: ["all", "active", "completed"]
        };
    },
    computed: {
        unFinishedTodoLength() {
            //return this.todos.filter(todo => !todo.completed).length;
            return this.todos.reduce((sum, item) => {
                !item.completed && sum++;
                return sum;
            }, 0);
        }
    },
    methods: {
        clearAllCompleted() {
            this.$emit("clearAll");
        },
        toggleFilter(state) {
            this.$emit("toggle", state);
        }
    }
};
</script>
<style>
.actived {
    border: 1px solid #000;
}
</style>
