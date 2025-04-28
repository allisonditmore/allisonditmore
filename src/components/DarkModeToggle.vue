<script setup>
import { storeToRefs } from 'pinia'
import { useDarkModeStore } from '@/stores/darkMode'

const { isDarkMode } = storeToRefs(useDarkModeStore())
const { toggleDarkMode } = useDarkModeStore()
</script>

<template>
  <BaseButton
    @click="toggleDarkMode()"
    :aria-label="`Toggle dark mode to ${isDarkMode ? 'light' : 'dark'}`"
  >
    <span v-if="isDarkMode">🌙</span>
    <span v-else>☀️</span>
  </BaseButton>
</template>
