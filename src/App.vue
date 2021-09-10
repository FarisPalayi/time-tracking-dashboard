<script setup lang="ts">
import AvatarCard from "./components/AvatarCard.vue";
import TimeCard from "./components/TimeCard.vue";
import { data } from "./data/data";
</script>

<template>
  <main>
    <AvatarCard />
    <TimeCard v-for="obj in data" :data="obj" />
  </main>
</template>

<style lang="scss">
@use './assets/sass/global';
</style>
