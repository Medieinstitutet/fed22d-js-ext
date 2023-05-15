<script setup lang="ts">
import MySecondComponent from "./MySecondComponent.vue";

const message = "Hello world!";
</script>

<template>
  <MySecondComponent />
  <h3 class="header">{{ message }}</h3>
</template>

<style scoped>
.header {
  color: blue;
}
</style>
