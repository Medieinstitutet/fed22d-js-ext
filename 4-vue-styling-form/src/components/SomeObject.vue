<script setup lang="ts">
import { ref } from "vue";
import { IPerson } from "../models/IPerson";

const person = ref<IPerson>({ name: "Hanna", age: 43, isMarried: true });

const ageClass = "age";
</script>

<template>
  <div class="person">
    <h3 :class="person.name === 'Sebastian' ? 'nameClass' : 'someOtherClass'">
      {{ person.name }}
    </h3>
    <p :class="{ age: person.age === 43 }">{{ person.age }}</p>
  </div>
</template>

<style scoped>
.person {
  width: 30%;
  display: flex;
  flex-direction: column;
}

.age {
  color: gold;
}
</style>
