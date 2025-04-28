<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useLanguageStore } from '@/stores/language'

const links = [
  {
    text: {
      'American English': 'Learn more about me',
      Français: 'En savoir plus sur moi',
    },
    url: '/hi-friend',
  },
  {
    text: { 'American English': 'See my resume', Français: 'Voir mon CV' },
    url: '/resume',
  },
  {
    text: {
      'American English': 'Connect with me on LinkedIn',
      Français: 'Connectez-vous avec moi sur LinkedIn',
    },
    url: 'https://www.linkedin.com/in/allisonditmore/',
  },
  {
    text: {
      'American English': "Not going big? Let's go home",
      Français: 'Pas de grande ambition? Rentrez chez moi',
    },
    url: '/',
  },
]

const route = useRoute()
const { language } = storeToRefs(useLanguageStore())

const formattedLinks = computed(() => {
  return links
    .map((link) => {
      return {
        ...link,
        text: link.text[language.value],
        isExternal: link.url?.startsWith('http'),
      }
    })
    .filter((link) => {
      if (link.isExternal) {
        return true
      }
      return link.url !== route.path
    })
})
const title = computed(() => {
  const titleMap = {
    'American English': 'What next?',
    Français: 'Et maintenant? Allons-y!',
  }
  return titleMap[language.value]
})
</script>

<template>
  <div class="flex flex-col py-10 gap-4">
    <h2 class="text-2xl">{{ title }}</h2>
    <div class="flex flex-col gap-2">
      <div v-for="link in formattedLinks" :key="link.url">
        <RouterLink
          v-if="!link.isExternal"
          :to="link.url"
          class="flex gap-1 items-center link-hover cursor-pointer w-fit"
          tabindex="0"
        >
          <WhatNowLink :text="link.text" />
        </RouterLink>
        <a
          v-else
          :href="link.url"
          target="_blank"
          class="flex gap-1 items-center link-hover cursor-pointer w-fit"
          tabindex="0"
        >
          <WhatNowLink :text="link.text" />
        </a>
      </div>
    </div>
  </div>
</template>
