<script setup lang="ts">
import { Todo } from "../models/Todo";

interface ITodoViewProps {
  todo: Todo;
}

const props = defineProps<ITodoViewProps>();

defineEmits<{ (e: "toggle", id: number): void }>();
</script>

<template>
  <div
    @click="() => $emit('toggle', props.todo.id)"
    :class="props.todo.done ? 'done' : ''"
  >
    {{ props.todo.text }}
  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
