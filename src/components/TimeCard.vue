<script setup lang="ts">
import IconEllipsis from "./icons/IconEllipsis.vue";
import { computed } from "@vue/reactivity";

type timeFrame = "daily" | "weekly" | "monthly";

const props = defineProps<{
  data: IData;
  activeTab: String;
}>();

const stats = computed(() => {
  const currentActiveTab = props.activeTab.toLowerCase() as timeFrame;
  return props.data.timeFrames[currentActiveTab];
});

const previousTimeText = computed(() => {
  if (props.activeTab === "Daily") return "Yesterday";
  else if (props.activeTab === "Monthly") return "Last Month";
  else return "Last Week";
});
</script>

<template lang="pug">
section.time-card
  .time-card-main
    .time-card-title-wrapper
      h2.time-card-title {{ data.title }}
      button.ellipsis.btn
        IconEllipsis
    .time-section
      transition(name="fade" mode="out-in")
        .current-time {{ stats.current }}hrs
      .previous-time {{ previousTimeText }} - {{ stats.previous }}hrs
</template>

<style scoped lang="sass">
@use "../assets/sass/abstracts" as a


// Dynamically change the user-card's background color by looping through the a.$colors map.
// Colors will be shown in the order they are defined in the map
$primaryColors: a.map-deep-get(a.$colors, "primary")

@each $color-name, $color in $primaryColors
  $i: index($primaryColors, $color-name $color)
  .time-card:nth-child(#{$i + 1})
    background-color: $color


// Dynamically add background-image file path in user-card's ::before pseudo-element
$time-card-bg-svgs: "work", "play", "study", "exercise", "social", "self-care"

@each $img-name in $time-card-bg-svgs
  $defaultPath: "/src/assets/images"
  $i: index($time-card-bg-svgs, $img-name)
  .time-card:nth-child(#{$i + 1})
    &::before
      background-image: url(#{$defaultPath}/icon-#{$img-name}.svg)


.time-card
  position: relative
  padding-top: var(--time-card-bg-img-height)
  border-radius: a.$bd-rs
  background-color: var(--clr-primary-softRed)
  overflow: hidden

  &::before
    content: ""
    position: absolute
    top: 0
    width: 100%
    height: var(--time-card-bg-img-height)
    background: url(../assets/images/icon-work.svg) no-repeat right 10px center


.time-card-main
  height: 100%
  padding: 22px
  background-color: var(--clr-neutral-darkBlue)
  border-radius: a.$bd-rs a.$bd-rs 0 0
  transition: background-color 250ms

  @include a.desktop
    padding: 25px 32px

  &:hover
    background-color: #2f3473


.time-card-title-wrapper
  display: flex
  justify-content: space-between
  align-items: center
  flex-wrap: wrap
  width: 100%
  margin-bottom: 2px


.time-card-title
  font-weight: a.$bold
  font-size: 1.125rem


.ellipsis
  > svg
    display: block
    color: var(--clr-neutral-paleBlue)
    transition: color 150ms

    &:hover
      color: white


.time-section
  display: flex
  justify-content: space-between
  align-items: center
  flex-wrap: wrap

  @include a.tablet
    flex-direction: column
    align-items: flex-start
    margin-top: 11px


.current-time
  font-size: 2rem
  font-weight: a.$light

  @include a.desktop
    font-size: 3.5rem

.previous-time
  font-size: .9rem

  @include a.desktop
    font-size: .95rem


.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0
</style>
