<script setup>
import { storeToRefs } from 'pinia'
import { useLanguageStore } from '@/stores/language'
import { computed } from 'vue'

const { language } = storeToRefs(useLanguageStore())

const title = computed(() => {
  const titleMap = {
    'American English': 'Oopsie daisies!',
    Français: 'Oupsie daisies!',
  }
  return titleMap[language.value]
})
const descriptionLine1 = computed(() => {
  const descriptionMap = {
    'American English':
      "It seems like you have stumbled upon a page that doesn't exist. But don't worry, it happens to the best of us!",
    Français:
      "Il semble que vous soyez tombé sur une page qui n'existe pas. Mais ne vous inquiétez pas, cela arrive aux meilleurs d'entre nous !",
  }
  return descriptionMap[language.value]
})
const descriptionLine2 = computed(() => {
  const descriptionMap = {
    'American English':
      'If you think this is a mistake, please let me know. Otherwise, you can check out some of the links below.',
    Français:
      "Si vous pensez que c'est une erreur, faites-le moi savoir. Sinon, vous pouvez visiter l'un des liens ci-dessous.",
  }
  return descriptionMap[language.value]
})
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 max-w-text mx-auto text-center">
    <h1 class="header">{{ title }}</h1>
    <div>
      <img src="../assets/daisy.svg" class="w-30 h-30 md:w-40 md:h-40 rounded-full" alt="daisy" />
    </div>
    <p>
      {{ descriptionLine1 }}
    </p>
    <p>
      {{ descriptionLine2 }}
    </p>
  </div>
</template>
