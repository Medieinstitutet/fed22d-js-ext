<script setup lang="ts">
import { ref } from "vue";
import { IMovie } from "../models/IMovie";
import axios from "axios";
import { IOmdbResponse } from "../models/IOmdbResponse";

const movies = ref<IMovie[]>(
  JSON.parse(localStorage.getItem("movies") || "[]")
);

const userInput = ref("");

const handleInput = (e: Event) => {
  const theInput = e.target as HTMLInputElement;
  userInput.value = theInput.value;
};

const handleSubmit = async () => {
  let response = await axios.get<IOmdbResponse>(
    "http://omdbapi.com/?apikey=416ed51a&s=" + userInput.value
  );
  movies.value = response.data.Search;
  localStorage.setItem("movies", JSON.stringify(response.data.Search));
  userInput.value = "";
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" :value="userInput" @input="handleInput" />
    <button>Sök</button>
  </form>

  <div v-for="movie in movies" :key="movie.imdbID">
    <h3>{{ movie.Title }}</h3>
    <div>
      <img :src="movie.Poster" :alt="movie.Title" />
    </div>

    <a href="#">Läs mer...</a>
  </div>
</template>

<style scoped></style>
