<script setup lang="ts">
const setActive = (e: Event) => {
  const activeClass = "active";
  const clickedElm = e.target as HTMLLIElement;
  const parentElm = clickedElm?.parentElement as HTMLUListElement;
  const childrenCount = parentElm.childElementCount;

  for (let i = 0; i < childrenCount; i++)
    parentElm.children[i].classList.remove(activeClass);

  clickedElm.classList.add(activeClass);
};
</script>

<template lang="pug">
- const avatarImgPath = "../assets/images/image-jeremy.png";

section.user-card
  .avatar-wrapper
    .avatar-img-container
      img(src= avatarImgPath, alt="",width="64", height="64")
    h1.name
      span.small Report for&nbsp;
      span Jeremy Robson
  .timeframes
    ul.timeframes-list
      li.timeframes-item(@click="setActive") Daily
      li.timeframes-item.active(@click="setActive") Weekly
      li.timeframes-item(@click="setActive") Monthly
</template>

<style scoped lang="sass">
@use '../assets/sass/abstracts' as a

$avatar-wrapper-min-height: 66.5%
$timeframe-section-min-height: 67px


.user-card
  width: a.$card-mobile-width
  min-height: 200px
  background-color: var(--clr-neutral-darkBlue)
  border-radius: a.$bd-rs
  overflow: hidden
  margin-bottom: 26px


.avatar-wrapper
  display: flex
  align-items: center
  min-height: $avatar-wrapper-min-height
  padding: 29px
  background-color: var(--clr-primary-blue)
  border-radius: a.$bd-rs


.name
  display: flex
  flex-direction: column
  padding-left: 17px

  > .small
    font-size: .94rem
    opacity: 0.85


.avatar-img-container
  width: 70px
  height: 70px
  border-radius: 100%
  padding: 3px
  background-color: white
  aspect-ratio: 1/1


.timeframes
  height: 100% - $avatar-wrapper-min-height
  min-height: $timeframe-section-min-height


.timeframes-list
  display: flex
  justify-content: center
  align-items: center
  height: 100%
  min-height: $timeframe-section-min-height


.timeframes-item
  flex-basis: 100%
  list-style: none
  text-align: center
  color: var(--clr-neutral-desaturatedBlue)

  &.active
    font-weight: 400
    color: var(--clr-neutral-paleBlue)
</style>
