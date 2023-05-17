<script setup lang="ts">
import { Person } from "../models/Person";

const numbers: number[] = [1, 1, 2, 3, 5, 8, 13, 21];
const filteredNumbers = numbers.filter((num) => num % 2 === 0);

const persons: Person[] = [
  new Person("Sebastian", 43, true),
  new Person("Hanna", 43, true),
  new Person("Astrid", 12, false),
  new Person("Alvar", 12, false),
];
</script>

<template>
  <ul>
    <li v-for="n in filteredNumbers">
      <span>{{ n }}</span>
    </li>
  </ul>

  <div v-for="(person, index) in persons" :key="index">
    <h4>{{ person.name }}</h4>
    <p>{{ person.age }}</p>
    <input type="checkbox" :checked="person.isMarried" />
  </div>
</template>
