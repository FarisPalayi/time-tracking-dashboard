<script setup lang="ts">
import IconEllipsis from "./icons/IconEllipsis.vue";
// import { IData } from "../data/data";

interface ITime {
  current: number;
  previous: number;
}

interface ITimeFrames {
  daily: ITime;
  weekly: ITime;
  monthly: ITime;
}

export interface IData {
  title: string;
  timeFrames: ITimeFrames;
}

const props = defineProps<{
  data: IData;
}>();
</script>

<template lang="pug">
section.time-card
  .time-card-main
    .time-card-title-wrapper
      h2.time-card-title {{ data.title }}
      button.ellipsis
        IconEllipsis
    .time-section
      .current-time {{ data.timeFrames.weekly.current }}hrs
      .previous-time Last Week - {{ data.timeFrames.weekly.previous }}hrs
</template>

<style scoped lang="sass">
@use "../assets/sass/abstracts" as a

$time-card-bg-img-height: 38px

.time-card
  position: relative
  width: a.$card-mobile-width
  padding-top: $time-card-bg-img-height
  border-radius: a.$bd-rs
  background-color: var(--clr-primary-softRed)
  margin-bottom: 26px
  overflow: hidden

  &::before
    content: ""
    position: absolute
    top: 0
    width: 100%
    height: $time-card-bg-img-height
    background: url(../assets/images/icon-work.svg) no-repeat right 10px center


.time-card-main
  height: 100%
  padding: 22px
  background-color: var(--clr-neutral-darkBlue)
  border-radius: a.$bd-rs a.$bd-rs 0 0


.time-card-title-wrapper
  display: flex
  justify-content: space-between
  align-items: center
  width: 100%
  margin-bottom: 2px


.time-card-title
  font-weight: a.$bold
  font-size: 1.125rem


.ellipsis
  all: unset


.time-section
  display: flex
  justify-content: space-between
  align-items: center


.current-time
  font-size: 2rem
  font-weight: a.$light

.previous-time
  font-size: .9rem
</style>
