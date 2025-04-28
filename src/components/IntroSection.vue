<script setup>
import { storeToRefs } from 'pinia'
import { useLanguageStore } from '@/stores/language'
import { computed } from 'vue'

const { language } = storeToRefs(useLanguageStore())
const title = computed(() => {
  const titleMap = {
    'American English': "hi! I'm Allison.",
    Français: 'salut! Je suis Allison.',
  }
  return titleMap[language.value]
})
const description = computed(() => {
  const descriptionMap = {
    'American English':
      "I'm a software engineer with a passion for building web applications. I love learning new technologies and sharing my knowledge with others. In my free time, I enjoy hiking, reading, and exploring new places.",
    Français:
      "Je suis une ingénieure logicielle passionnée par la création d'applications web. J'adore apprendre de nouvelles technologies et partager mes connaissances avec les autres. Pendant mon temps libre, j'aime faire de la randonnée, lire et explorer de nouveaux endroits.",
  }
  return descriptionMap[language.value]
})
</script>

<template>
  <section>
    <h1 class="header">👋 {{ title }}</h1>
    <p class="max-w-text">{{ description }}</p>
  </section>
</template>
