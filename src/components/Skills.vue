<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useLanguageStore } from '@/stores/language'

const { language } = storeToRefs(useLanguageStore())

const skills = computed(() => {
  const skillsMap = {
    'American English': [
      'Technical leadership',
      'Project management',
      'Stakeholder relationships',
      'Mentorship and coaching',
      'Agile software development',
      'Cross-functional collaboration',
      'Problem-solving',
      'Communication',
    ],
    Français: [
      'Leadership technique',
      'Gestion de projet',
      'Relations avec les parties prenantes',
      'Mentorat et coaching',
      'Développement logiciel agile',
      'Collaboration interfonctionnelle',
      'Résolution de problèmes',
      'Communication',
    ],
  }
  return skillsMap[language.value]
})

const technologies = computed(() => {
  return [
    'JavaScript',
    'Typescript',
    'Java',
    'Vue.js',
    'Node.js',
    'React',
    'HTML & CSS',
    'Tailwind CSS',
    'RESTful APIs',
    'Microservices',
    'MongoDB',
    language.value === 'American English'
      ? 'Document databases'
      : 'Bases de données documentaires',
    language.value === 'American English'
      ? 'Relational databases'
      : 'Bases de données relationnelles',
    'PostgreSQL',
    'RabbitMQ',
    'Spring Boot',
    'Git',
    'Agile',
  ]
})

const education = computed(() => {
  const educationMap = {
    'American English': [
      {
        name: 'Master of Arts in Classics',
        description: 'Washington University in St. Louis • 2016 - 2018',
      },
      {
        name: 'Bachelor of Arts in Classics and Linguistics',
        description:
          'University of North Carolina at Chapel Hill • 2011 - 2016',
      },
    ],
    Français: [
      {
        name: 'Maîtrise en arts classiques',
        description: 'Washington University à St. Louis • 2016 - 2018',
      },
      {
        name: 'Baccalauréat en arts classiques et linguistiques',
        description:
          'Université de Caroline du Nord à Chapel Hill • 2011 - 2016',
      },
    ],
  }
  return educationMap[language.value]
})

const title = computed(() => {
  const titleMap = {
    'American English': 'Skills & Qualifications',
    Français: 'Compétences & qualifications',
  }

  return titleMap[language.value]
})

const tabs = computed(() => {
  return [
    {
      title:
        language.value === 'American English' ? 'Technologies' : 'Technologies',
      content: technologies.value,
      displayComponent: 'BulletList',
      meta: {
        colCount: 2,
      },
    },
    {
      title:
        language.value === 'American English' ? 'Soft skills' : 'Compétences',
      content: skills.value,
      displayComponent: 'BulletList',
    },
    {
      title: language.value === 'American English' ? 'Education' : 'Éducation',
      content: education.value,
      displayComponent: 'TitleDescList',
    },
  ]
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-xl md:text-2xl font-bold">{{ title }}</h2>
    <AccordionTabs :tabs="tabs" class="mt-4" />
  </div>
</template>
