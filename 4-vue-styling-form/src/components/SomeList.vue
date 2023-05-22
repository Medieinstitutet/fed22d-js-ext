<script setup lang="ts">
import { ref } from "vue";
import { IPerson } from "../models/IPerson";
import SomeObject from "./SomeObject.vue";

const persons = ref<IPerson[]>([
  { name: "Sebastian", age: 43, isMarried: true },
]);
</script>

<template>
  <div class="personsWrapper">
    <SomeObject />
  </div>
</template>

<style scoped>
.personsWrapper {
  display: flex;
}
</style>
