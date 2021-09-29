<script setup lang="ts">
import IconEllipsis from "./icons/IconEllipsis.vue";
import { watch } from "@vue/runtime-core";

type timeFrame = "daily" | "weekly" | "monthly";

let time = $ref<HTMLElement | null>(null);
let timeAgo = $ref<HTMLElement | null>(null);

const props = defineProps<{
  data?: IData;
  activeTab?: String;
}>();

let stats = $computed(() => {
  const currentActiveTab = props?.activeTab?.toLowerCase() as timeFrame;
  return props?.data?.timeFrames[currentActiveTab];
});

let previousTimeText = $computed(() => {
  if (props.activeTab === "Daily") return "Yesterday";
  else if (props.activeTab === "Monthly") return "Last Month";
  else return "Last Week";
});

watch(
  () => stats,
  () => {
    const delay = 200;
    if (!time || !timeAgo) return;

    time.style.transition = `opacity ${delay}ms`;
    time.classList.add("hide");
    timeAgo.classList.add("hide");

    setTimeout(() => {
      time!.classList.remove("hide");
      timeAgo!.classList.remove("hide");
    }, delay);
  }
);
</script>

<template lang="pug">
article.time-card
  .time-card-main
    .time-card-title-wrapper
      h3.time-card-title {{ data?.title }}
      button.ellipsis.btn(aria-label="more info")
        IconEllipsis
    .time-section(ref="timeSection")
      .current-time(v-if="stats" ref="time")
        | {{ stats?.current }}hrs
      .previous-time(ref="timeAgo")
        | {{ previousTimeText }} - {{ stats?.previous }}hrs
</template>

<style scoped lang="sass">
@use "../assets/sass/abstracts" as a

$time-card-main-bg-color: var(--clr-neutral-darkBlue)

@mixin beforeBgImg($path)
  &::before 
    background-image: url(#{$path})

@function fullPath($path, $name, $ext)
  @return #{$path}#{$name}#{$ext}

// Dynamically change the user-card's background color and 
// background-image icon by looping through approapriate lists and maps
$primaryColors: a.map-deep-get(a.$colors, "primary")
$time-card-bg-svgs: "work", "play", "study", "exercise", "social", "self-care"

@each $color-name, $color in $primaryColors
  $i: index($primaryColors, $color-name $color)
  @if $i <= length($time-card-bg-svgs)

    $start-from: 3 // first nth-child value
    $position: $i + $start-from - 1
    $repeat: length($time-card-bg-svgs) // how many times a pattern should repeat
    $icon-name: nth($time-card-bg-svgs, $i)
    $icon-path: fullPath("/src/assets/images/", icon-#{$icon-name}, ".svg")

    @if $position < $repeat
      .time-card:nth-child(#{$repeat}n - #{$repeat - $position})
        background-color: $color
        background-image: linear-gradient($color 30%, $time-card-main-bg-color 30%)
        @include beforeBgImg(#{$icon-path})

    @else
      .time-card:nth-child(#{$repeat}n + #{$position - $repeat})
        background-color: $color
        background-image: linear-gradient($color 30%, $time-card-main-bg-color 30%)
        @include beforeBgImg(#{$icon-path})


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
    background: url(../assets/images/icon-work.svg) no-repeat right 17px top -10px


.time-card-main
  height: 100%
  padding: 22px
  background-color: $time-card-main-bg-color
  border-radius: a.$bd-rs a.$bd-rs 0 0
  transition: background-color 300ms

  @include a.desktop
    padding: 25px 32px

  &:hover
    background-color: #2f3473
    cursor: pointer


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
  color: var(--clr-neutral-paleBlue)
  padding: 7px
  margin-right: -7px

  &:hover
    color: white

  &:focus-visible
    outline-offset: 0

  > svg
    display: block
    transition: color 150ms


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
  color: var(--clr-neutral-paleBlue)

  @include a.desktop
    font-size: .95rem
</style>
