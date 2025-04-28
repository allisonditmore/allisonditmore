<script setup>
import { useDarkModeStore } from '@/stores/darkMode'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const { isDarkMode } = storeToRefs(useDarkModeStore())
const numBinderHolesToShow = computed(() => (isDarkMode.value ? 0 : 3))

const pacmanGhostColors = computed(() =>
  isDarkMode.value ? ['text-cyan-300', 'text-pink-300', 'text-orange-300', 'text-red-700'] : [],
)
</script>

<template>
  <div class="m-auto h-7/10 min-h-20 flex-col justify-between hidden md:flex">
    <div
      v-for="i in numBinderHolesToShow"
      :key="i"
      class="binder-hole bg-disabled rounded-full h-5 w-5"
    />
    <IconPacman v-if="isDarkMode" class="w-8 h-8" aria-label="pacman" />
    <IconPacmanGhost
      v-for="color in pacmanGhostColors"
      aria-label="pacman ghost"
      class="w-8 h-8"
      :class="color"
      :key="color"
    />
  </div>
</template>

<style scoped>
.binder-hole {
  box-shadow: inset -0.4rem -0.15rem 0.1rem black;
}
</style>
