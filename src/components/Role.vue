<script setup>
import { toRefs, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useLanguageStore } from '@/stores/language'

const { language } = storeToRefs(useLanguageStore())

const props = defineProps({
  role: {
    type: Object,
    required: true,
  },
})
const { role } = toRefs(props)

const formattedTabs = computed(() => {
  const tabList = []
  if (role.value.responsibilities) {
    tabList.push({
      title: language.value === 'American English' ? 'Responsibilities' : 'Responsabilités',
      content: role.value.responsibilities,
      displayComponent: 'BulletList',
    })
  }

  if (role.value.majorProjects) {
    tabList.push({
      title: language.value === 'American English' ? 'Major projects' : 'Projets majeurs',
      content: role.value.majorProjects,
      displayComponent: 'TitleDescList',
    })
  }

  if (role.value.techStack) {
    tabList.push({
      title: language.value === 'American English' ? 'Tech tools' : 'Outils techniques',
      content: role.value.techStack,
      displayComponent: 'BulletList',
    })
  }

  if (role.value.skills) {
    tabList.push({
      title: language.value === 'American English' ? 'Soft skills' : 'Compétences douces',
      content: role.value.skills,
      displayComponent: 'BulletList',
    })
  }

  if (role.value.additionalContributions) {
    tabList.push({
      title: language.value === 'American English' ? 'More' : 'Plus',
      content: role.value.additionalContributions,
      displayComponent: 'TitleDescList',
    })
  }

  return tabList
})
</script>

<template>
  <li>
    <div class="flex flex-col gap-4">
      <div v-for="(roleItem, index) in role.positions" :key="index">
        <h3 class="text-lg md:text-xl font-bold">{{ roleItem.title }}</h3>
        <p class="text-sm font-bold">{{ roleItem.date }} &bull; {{ role.company }}</p>
      </div>
    </div>
    <AccordionTabs v-if="formattedTabs.length" :tabs="formattedTabs" class="mt-4" />
  </li>
</template>
