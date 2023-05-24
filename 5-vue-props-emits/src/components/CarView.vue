<script setup lang="ts">
import { Car } from "../models/Car";

interface ICarViewProps {
  car: Car;
}

const props = defineProps<ICarViewProps>();

const emits = defineEmits<{ (e: "buy", payload: string): void }>();

const handleClick = () => {
  emits("buy", props.car.model);
};
</script>

<template>
  <div @click="handleClick" :class="{ owned: props.car.isOwned }">
    <h4>{{ props.car.model }}</h4>
    <div>
      <span>{{ props.car.color }}</span>
      <span>{{ props.car.year }}</span>
    </div>
  </div>
</template>

<style scoped>
.owned {
  background-color: green;
}
</style>
