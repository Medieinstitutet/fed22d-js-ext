<script setup lang="ts">
import { ref } from "vue";
import { Car } from "../models/Car";
import CarView from "./CarView.vue";

const cars = ref<Car[]>([
  new Car("S", "Blue", 2018),
  new Car("X", "Blue", 2019),
  new Car("3", "Red", 2022),
]);

const handleBuy = (payload: string) => {
  cars.value = cars.value.map((car) => {
    if (car.model === payload) {
      return { ...car, isOwned: !car.isOwned };
    } else {
      return car;
    }
  });
};
</script>

<template>
  <CarView v-for="car in cars" :car="car" @buy="handleBuy"></CarView>
</template>

<style scoped></style>
