<script setup lang="ts">
import { ref } from "vue";
import { Todo } from "../models/Todo";
import TodoView from "./TodoView.vue";
import AddTodo from "./AddTodo.vue";

const todos = ref<Todo[]>([]);

const addTodo = (text: string) => {
  todos.value = [...todos.value, new Todo(text, false, new Date().getTime())];
};

const toggleTodo = (id: number) => {
  todos.value = todos.value.map((todo) => {
    if (todo.id === id) {
      return { ...todo, done: !todo.done };
    } else {
      return todo;
    }
  });
};
</script>

<template>
  <AddTodo @addtodo="addTodo"></AddTodo>

  <div>
    <TodoView
      @toggle="toggleTodo"
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    ></TodoView>
  </div>
</template>

<style scoped></style>
