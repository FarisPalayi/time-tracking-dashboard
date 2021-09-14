<script lang="ts" setup>
import { Ref, ref } from "@vue/runtime-core";
import AvatarCard from "./components/AvatarCard.vue";
import TimeCard from "./components/TimeCard.vue";
import { data } from "./data/data";

let activeTab: Ref<string> = ref("Weekly");

const setActiveTab = (text: string) => (activeTab.value = text);
</script>

<template>
  <main>
    <AvatarCard @active-tab="setActiveTab" />
    <TimeCard v-for="obj in data" :data="obj" :activeTab="activeTab" />
  </main>
</template>

<style lang="sass">
@use './assets/sass/global'
</style>
