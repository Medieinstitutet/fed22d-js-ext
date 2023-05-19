<script setup lang="ts">
import { ref } from "vue";
import { Todo } from "../models/Todo";

const todos = ref<Todo[]>([]);
const userInput = ref("");

const handleInput = (e: Event) => {
  const theInput = e.target as HTMLInputElement;
  userInput.value = theInput.value;
};

const handleSubmit = () => {
  todos.value = [
    ...todos.value,
    new Todo(userInput.value, false, new Date().getTime()),
  ];
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
  <form @submit.prevent="handleSubmit">
    <input type="text" :value="userInput" @input="handleInput" />
    <button>Spara</button>
  </form>

  <ul>
    <li
      @click="() => toggleTodo(todo.id)"
      v-for="todo in todos"
      :class="todo.done ? 'done' : ''"
      :key="todo.id"
    >
      {{ todo.text }}
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.done {
  text-decoration: line-through;
}
</style>
