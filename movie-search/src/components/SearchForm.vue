<script setup lang="ts">
import { ref } from "vue";

const userInput = ref("");

const emits = defineEmits<{ (e: "search", searchText: string): void }>();

const handleSubmit = () => {
  emits("search", userInput.value);
  userInput.value = "";
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="userInput" />
    <button>Sök</button>
  </form>
</template>
