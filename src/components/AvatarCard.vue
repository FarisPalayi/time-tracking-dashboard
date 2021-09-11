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
      li.timeframes-item.grid-center(@click="setActive")
        button.btn Daily
      li.timeframes-item.grid-center.active(@click="setActive")
        button.btn Weekly
      li.timeframes-item.grid-center(@click="setActive")
        button.btn Monthly
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
    font-size: 2rem

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
  color: var(--clr-neutral-desaturatedBlue)
  transition: all 200ms

  @include a.desktop
    width: 100%
    text-align: left
    justify-items: start // override grid-center class

    > .btn
      width: 100%

  &:hover
    @extend %menu-active

  &.active
    @extend %menu-active
</style>
