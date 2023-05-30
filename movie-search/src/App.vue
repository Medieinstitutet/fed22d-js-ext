<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Hem</RouterLink>
        </li>
        <li>
          <RouterLink to="/movies">Filmer</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<style scoped></style>
