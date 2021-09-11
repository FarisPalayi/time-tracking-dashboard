<script setup lang="ts">
const setActive = (e: Event) => {
  const activeClass = "active";
  const clickedElm = e.target as HTMLButtonElement;
  const parentElm = clickedElm?.parentElement
    ?.parentElement as HTMLUListElement;
  const childrenCount = parentElm?.childElementCount;

  for (let i = 0; i < childrenCount; i++)
    parentElm?.children[i]?.firstElementChild?.classList.remove(activeClass);

  clickedElm?.classList.add(activeClass);
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
      li.timeframes-item.grid-center
        button.btn(@click="setActive") Daily
      li.timeframes-item.grid-center
        button.btn.active(@click="setActive") Weekly
      li.timeframes-item.grid-center
        button.btn(@click="setActive") Monthly
</template>

<style scoped lang="sass">
@use '../assets/sass/abstracts' as a

$avatar-wrapper-min-height: 66.5%
$timeframe-section-min-height: 67px


.user-card
  min-height: 200px
  background-color: var(--clr-neutral-darkBlue)
  border-radius: a.$bd-rs
  overflow: hidden

  @include a.desktop
    grid-row: 1/3


.avatar-wrapper
  display: flex
  align-items: center
  min-height: $avatar-wrapper-min-height
  padding: 29px
  background-color: var(--clr-primary-blue)
  border-radius: a.$bd-rs
  gap: 17px

  @include a.desktop
    flex-direction: column
    align-items: flex-start
    gap: 41px
    padding: 34px 29px


.name
  display: flex
  flex-direction: column

  @include a.desktop
    font-size: 2.5rem
    line-height: 1.285
    font-weight: a.$light
    margin-left: 2px
    margin-top: -3px

  > .small
    font-size: .94rem
    opacity: 0.85


.avatar-img-container
  $avatar-img-padding: 3px
  --avatar-img-size: 70px
  @include a.desktop
    --avatar-img-size: 85px

  width: var(--avatar-img-size)
  height: var(--avatar-img-size)
  border-radius: 100%
  padding: $avatar-img-padding
  background-color: white
  aspect-ratio: 1/1

  > img
    width: var(--avatar-img-size) - $avatar-img-padding
    height: var(--avatar-img-size) - $avatar-img-padding


.timeframes
  height: 100% - $avatar-wrapper-min-height
  min-height: $timeframe-section-min-height


.timeframes-list
  display: flex
  justify-content: center
  align-items: center
  height: 100%
  min-height: $timeframe-section-min-height

  @include a.desktop
    flex-direction: column
    align-items: flex-start
    padding: 25px 29px


%menu-active
  font-weight: 400
  color: var(--clr-neutral-paleBlue)


.timeframes-item
  flex-basis: 100%
  list-style: none
  text-align: center
  transition: all 200ms

  > .btn
    color: var(--clr-neutral-desaturatedBlue)

    &.active
      @extend %menu-active

    &:hover
      @extend %menu-active


  @include a.desktop
    width: 100%
    text-align: left
    justify-items: start // override grid-center class
    font-size: 1.1rem

    > .btn
      width: 100%
</style>
