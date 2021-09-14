<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const emit = defineEmits(["activeTab"]);
const userDefinedTab = ref("Weekly");
const tabsContainer = ref<HTMLElement | null>(null);
const defaultActive = ref<HTMLButtonElement | null>(null);

const setTabState = (
  elm: HTMLButtonElement,
  activeClass: string,
  setActive = true
) => {
  if (setActive) {
    elm?.classList.add(activeClass);
    elm?.setAttribute("tabindex", "-1");
    elm?.setAttribute("aria-selected", "true");
  } else {
    elm.classList.remove(activeClass);
    elm?.setAttribute("tabindex", "0");
    elm?.setAttribute("aria-selected", "false");
  }
};

const setActive = (e: Event) => {
  const activeClass = "active",
    clickedTab = e?.target as HTMLButtonElement,
    clickedTabText = clickedTab.innerText,
    tabContainer = tabsContainer?.value as HTMLDivElement,
    NoOfTabs = tabContainer?.childElementCount;

  userDefinedTab.value = clickedTabText;
  emit("activeTab", userDefinedTab.value);

  for (let i = 0; i < NoOfTabs; i++) {
    const btnElement = tabContainer?.children[i] as HTMLButtonElement;
    setTabState(btnElement, activeClass, false);
  }

  localStorage.setItem("userDefinedTab", userDefinedTab.value);

  setTabState(clickedTab, activeClass);
};

// prettier-ignore
const switchTabs = () => {
  const activeClass = "active";
  const tabContainer = tabsContainer?.value as HTMLDivElement;

  emit("activeTab", userDefinedTab.value);

  for (let i = 0; i < tabContainer.childElementCount; i++) {
    const btnElement = tabContainer?.children[i] as HTMLButtonElement;
    setTabState(btnElement, activeClass, false);

    switch(userDefinedTab.value) {
      case "Daily":
      case "Weekly":
      case "Monthly":
        if (userDefinedTab.value === btnElement?.innerText) setTabState(btnElement, activeClass);
        break;
      default:
        if (defaultActive.value) setTabState(defaultActive.value, activeClass);
        break;
    }
  }
};

onMounted(() => {
  const tab = localStorage.getItem("userDefinedTab");
  if (tab) userDefinedTab.value = tab;
  switchTabs();
});
</script>

<template lang="pug">
- const avatarImgPath = "../assets/images/image-jeremy.png";
- const activeTabAttrs = { ref: "defaultActive", tabindex: "-1", role: "tab", "aria-selected": "true", "@click": "setActive" };

section.user-card
  .user-details
    .avatar-img-container
      img(src= avatarImgPath, alt="",width="64", height="64")
    h1.name
      span.small Report for&nbsp;
      span Jeremy Robson
  .tabs-container(ref="tabsContainer", role="tablist", aria-label="timeframes")
    button.btn.tab(@click="setActive", role="tab") Daily
    button.btn.tab.active&attributes(activeTabAttrs) Weekly
    button.btn.tab(@click="setActive", role="tab") Monthly
</template>

<style scoped lang="sass">
@use '../assets/sass/abstracts' as a

$user-details-min-height: 66.5%
$timeframe-section-min-height: 67px


.user-card
  min-height: 200px
  background-color: var(--clr-neutral-darkBlue)
  border-radius: a.$bd-rs
  overflow: hidden

  @include a.tablet
    grid-column: 1/4

  @include a.desktop
    grid-column: 1/1
    grid-row: 1/3


.user-details
  display: flex
  align-items: center
  min-height: $user-details-min-height
  padding: 29px
  background-color: var(--clr-primary-blue)
  border-radius: a.$bd-rs
  gap: 17px

  @include a.desktop
    flex-direction: column
    align-items: flex-start
    gap: 41px
    padding: 34px 29px

  @media screen and (max-width: 380px)
    flex-wrap: wrap
    > .name
      font-size: 1.3rem
      white-space: normal


.name
  display: flex
  flex-direction: column
  white-space: nowrap

  @include a.desktop
    font-size: 2.5rem
    line-height: 1.285
    font-weight: a.$light
    margin-left: 2px
    margin-top: -3px
    white-space: normal

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


.tabs-container
  display: flex
  justify-content: center
  align-items: center
  min-height: $timeframe-section-min-height
  transition: 300ms

  @include a.tiny
    flex-direction: column
    align-items: flex-start
    padding: 10px 25px

  @include a.desktop
    flex-direction: column
    align-items: flex-start
    padding: 25px 29px
    height: 100% - $user-details-min-height


.tab
  flex-basis: 100%
  list-style: none
  text-align: center
  transition: 300ms

  @include a.tiny
    padding: 5px
    width: 100%

  @include a.desktop
    width: 100%
    text-align: left
    justify-items: start // override grid-center class
    font-size: 1.1rem


%menu-active
  font-weight: 400
  color: var(--clr-neutral-paleBlue)


.tab.btn
  color: var(--clr-neutral-desaturatedBlue)

  &.active
    @extend %menu-active
    pointer-events: none

  &:hover,
  &:focus
      @extend %menu-active

  @include a.tiny
    width: 100%
    text-align: left

  @include a.desktop
    width: 100%
</style>
