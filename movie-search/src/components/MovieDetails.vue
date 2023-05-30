<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { IMovieExt } from "../models/IMovieExt";
import { getMovieById } from "../services/OmdbService";

const route = useRoute();

const movie = ref<IMovieExt>();

onMounted(() => {
  getMovieById(route.params.id.toString()).then((movieFromApi) => {
    movie.value = movieFromApi;
  });
});
</script>

<template>
  <h3>{{ movie?.Title }}</h3>
  <span>{{ movie?.Plot }}</span>
</template>
