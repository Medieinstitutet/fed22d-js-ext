<script setup lang="ts">
import { Person } from "../models/Person";

const name = "Sebastian";
const age = 43;

const me: Person = new Person("Sebastian", 43, true);
const avatar = "vite.svg";
</script>

<template>
  <span>{{ name }}</span>
  <p>{{ age }}</p>
  <div>{{ me }}</div>

  <section>
    <h4>{{ me.name }}</h4>
    <p>{{ me.age }}</p>
    <input type="checkbox" :checked="me.isMarried" />
    <img :src="avatar" alt="Profile image" />
  </section>
</template>

<style scoped></style>
