<script setup lang="ts">
const show = false;
</script>

<template>
  <h3 v-if="show">It's alive</h3>
  <h3 v-else>It's dead</h3>

  <h4 v-show="show">Testar v-show</h4>

  <template v-if="show">
    <div></div>
    <p></p>
    <img />
  </template>
</template>
