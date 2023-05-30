import { createRouter, createWebHashHistory } from "vue-router";
import MovieSearchAppVue from "./components/MovieSearchApp.vue";
import HomePage from "./components/HomePage.vue";
import MovieDetails from "./components/MovieDetails.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/movies",
      component: MovieSearchAppVue,
    },
    {
      path: "/movie/:id",
      component: MovieDetails,
    },
    {
      path: "/",
      component: HomePage,
    },
  ],
});
