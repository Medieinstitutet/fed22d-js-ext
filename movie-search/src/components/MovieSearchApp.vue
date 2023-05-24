<script setup lang="ts">
import { onMounted, ref } from "vue";
import { IMovie } from "../models/IMovie";
import SearchForm from "./SearchForm.vue";
import MovieView from "./MovieView.vue";
import { getMovies } from "../services/OmdbService";

const movies = ref<IMovie[]>([]);

onMounted(() => {
  const searchText = localStorage.getItem("searchText") || "star";
  getMovies(searchText).then((moviesFromApi) => {
    movies.value = moviesFromApi;
  });
});

const searchMovies = async (searchText: string) => {
  movies.value = await getMovies(searchText);
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
