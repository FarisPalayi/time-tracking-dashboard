<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import AvatarCard from "./components/AvatarCard.vue";
import TimeCard from "./components/TimeCard.vue";
import { data } from "./data/data";
import { gsap } from "gsap";

let activeTab = $ref("Weekly");

const setActiveTab = (text: string) => {
  if (activeTab) activeTab = text;
};

const introAnimation = () => {
  gsap
    .timeline()
    .from(".user-card", { duration: 0.8, opacity: 0 })
    .from(".time-card", {
      duration: 1,
      stagger: 0.1,
      opacity: 0,
    });
};

onMounted(() => introAnimation());
</script>

<template>
  <main>
    <AvatarCard @active-tab="setActiveTab" />
    <h2 class="sr-only">{{ activeTab }} status</h2>
    <TimeCard v-for="obj in data" :data="obj" :activeTab="activeTab" />
  </main>
</template>

<style lang="sass">
@use './assets/sass/global'
</style>
