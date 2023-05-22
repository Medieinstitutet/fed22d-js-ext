<script setup lang="ts">
import { ref } from "vue";
import { IPerson } from "../models/IPerson";

const person = ref<IPerson>({ name: "", age: 0, isMarried: false });

const handleSubmit = () => {
  console.log("Hantera", person.value);
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="person.name" />
    <input type="number" v-model.number="person.age" />
    <input type="checkbox" v-model="person.isMarried" />
    <button>Spara</button>
  </form>
</template>

<style scoped></style>
