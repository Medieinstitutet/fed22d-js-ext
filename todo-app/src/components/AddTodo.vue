<script setup lang="ts">
import { ref } from "vue";

const userInput = ref("");

const emits = defineEmits<{ (e: "addtodo", text: string): void }>();

const handleSubmit = () => {
  emits("addtodo", userInput.value);

  userInput.value = "";
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="userInput" />
    <button>Spara</button>
  </form>
</template>

<style scoped></style>
