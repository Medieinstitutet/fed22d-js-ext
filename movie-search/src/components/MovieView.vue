<script setup lang="ts">
import { IMovie } from "../models/IMovie";

interface IMovieViewProps {
  movie: IMovie;
}

defineProps<IMovieViewProps>();
</script>

<template>
  <h3>{{ movie.Title }}</h3>
  <div>
    <img :src="movie.Poster" :alt="movie.Title" />
  </div>

  <RouterLink :to="'/movie/' + movie.imdbID">Läs mer...</RouterLink>
  <!-- <button @click="handleClick">Läs mer...</button> -->
</template>

<style scoped></style>
