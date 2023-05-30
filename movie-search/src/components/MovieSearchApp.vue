<script setup lang="ts">
import { onMounted, ref } from "vue";
import { IMovie } from "../models/IMovie";
import SearchForm from "./SearchForm.vue";
import MovieView from "./MovieView.vue";
import { getMovies } from "../services/OmdbService";
import { useLoadingStore } from "../stores/loadingStore";

const movies = ref<IMovie[]>([]);

const store = useLoadingStore();

onMounted(async () => {
  const searchText = localStorage.getItem("searchText") || "star";
  await searchMovies(searchText);
});

const searchMovies = async (searchText: string) => {
  store.setLoading(true);
  movies.value = await getMovies(searchText);
  store.setLoading(false);
  localStorage.setItem("searchText", searchText);
};
</script>

<template>
  <SearchForm @search="searchMovies"></SearchForm>

  <MovieView
    :movie="movie"
    v-for="movie in movies"
    :key="movie.imdbID"
  ></MovieView>
</template>

<style scoped></style>
