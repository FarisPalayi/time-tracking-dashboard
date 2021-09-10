<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)

// defineProps<{ msg: string }>()

interface Props {
  msg: string
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'Hello World!'
})

function increment() {
  count.value++
}
</script>

<template lang="pug">
h1 {{ msg }}
button(type="button" @click="increment") count is: {{ count }}
</template>

<style scoped>

</style>
