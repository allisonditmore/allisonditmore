<script setup>
import { storeToRefs } from 'pinia'
import { useLanguageStore } from '@/stores/language'

const { language } = storeToRefs(useLanguageStore())
const { toggleLanguage } = useLanguageStore()
</script>

<template>
  <BaseButton
    @click="toggleLanguage()"
    :aria-label="`Toggle language to ${language === 'American English' ? 'French' : 'Anglais'}`"
  >
    <span v-if="language === 'American English'">🇫🇷</span>
    <span v-else>🇺🇸</span>
  </BaseButton>
</template>
