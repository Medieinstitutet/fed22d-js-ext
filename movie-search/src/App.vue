<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
import Spinner from "./components/Spinner.vue";
import { useLoadingStore } from "./stores/loadingStore";

const store = useLoadingStore();
</script>

<template>
  <Spinner v-show="store.isLoading"></Spinner>
  <div v-show="!store.isLoading">
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
  </div>
</template>

<style scoped></style>
