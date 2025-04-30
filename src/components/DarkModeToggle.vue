<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useDarkModeStore } from '@/stores/darkMode'
import { useLanguageStore } from '@/stores/language'

const { language } = storeToRefs(useLanguageStore())
const { isDarkMode } = storeToRefs(useDarkModeStore())
const { toggleDarkMode } = useDarkModeStore()

const label = computed(() => {
  const labelMap = {
    'American English': `Toggle to ${isDarkMode.value ? 'light' : 'dark'} mode`,
    'Français': `Changer le mode ${isDarkMode.value ? 'clair' : 'sombre'}`,
  }
  return labelMap[language.value]
})
</script>

<template>
  <BaseButton
    @click="toggleDarkMode()"
    :aria-label="label"
  >
    <div class="pt-1">{{ isDarkMode ? '☀️' : '🌙' }}</div>
  </BaseButton>
</template>
