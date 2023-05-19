<script setup lang="ts">
const handleClick = () => {};

const handleInput = (e: Event) => {
  const theInputTag = e.target as HTMLInputElement;
  console.log(theInputTag.value);
};

const handleObjectClick = (person: any) => {
  console.log(person);
};
</script>

<template>
  <div>
    <button @click="handleClick">Spara</button>

    <input type="text" @input="handleInput" />

    <button @click="() => handleObjectClick({})">Hantera person</button>
  </div>
</template>

<style scoped></style>
