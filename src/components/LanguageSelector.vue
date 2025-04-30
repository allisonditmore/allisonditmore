<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useLanguageStore } from '@/stores/language'

const { language } = storeToRefs(useLanguageStore())
const { toggleLanguage } = useLanguageStore()

const label = computed(() => {
  const labelMap = {
    'American English': 'Toggle language to French',
    'Français': 'Traduisez la site en Anglais',
  }
  return labelMap[language.value]
})
</script>

<template>
  <BaseButton
    @click="toggleLanguage()"
    :aria-label="label"
  >
    <div class="pt-1">{{ language === 'American English' ? '🇫🇷' : '🇺🇸' }}</div>
  </BaseButton>
</template>
