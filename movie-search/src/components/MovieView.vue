<script setup lang="ts">
import { IMovie } from "../models/IMovie";
import { getMovieById } from "../services/OmdbService";

interface IMovieViewProps {
  movie: IMovie;
}

const props = defineProps<IMovieViewProps>();

const handleClick = async () => {
  let movie = await getMovieById(props.movie.imdbID);

  console.log(movie);
};
</script>

<template>
  <h3>{{ movie.Title }}</h3>
  <div>
    <img :src="movie.Poster" :alt="movie.Title" />
  </div>

  <!-- <a href="#">Läs mer...</a> -->
  <button @click="handleClick">Läs mer...</button>
</template>

<style scoped></style>
