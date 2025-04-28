<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useLanguageStore } from '@/stores/language'

const hobbies = [
  {
    name: {
      'American English': '🏐 Volleyball',
      Français: '🏐 Volley-ball',
    },
    description: {
      'American English':
        'Playing volleyball with friends is a great way to stay active and have fun. We play both sand and indoor rec volleyball!',
      Français:
        "Jouer au volley-ball avec des amis est un excellent moyen de rester actif et de s'amuser. Nous jouons au volley-ball sur sable et en salle !",
    },
  },
  {
    name: {
      'American English': '📚 Reading',
      Français: '📚 Lecture',
    },
    description: {
      'American English':
        "I lean towards non-fiction and historical fiction but like a variety of genres. I'm always keeping a list of books I want to read next, so let me know if you have any recommendations!",
      Français:
        "Je penche vers la non-fiction et la fiction historique, mais j'aime une variété de genres. Je garde toujours une liste de livres que je veux lire ensuite, alors faites-moi savoir si vous avez des recommandations !",
    },
  },
  {
    name: {
      'American English': '🧗‍♀️ Rock climbing',
      Français: '🧗‍♀️ Escalade',
    },
    description: {
      'American English':
        'I like the puzzle and the challenge! One of my proudest accomplishments was climbing Ancient Art in Utah.',
      Français:
        "J'aime le puzzle et le défi ! Un de mes plus grands accomplissements a été de grimper Ancient Art dans l'Utah.",
    },
  },
  {
    name: {
      'American English': '👟 Running',
      Français: '👟 Course à pied',
    },
    description: {
      'American English':
        "Hot take: the best part of running is the dogs you see on the run. I ran my first marathon last year in Mesa, Arizona, and I'm training for my next ones now!",
      Français:
        "Prendre de la hauteur : le meilleur aspect de la course à pied est les chiens que vous voyez en courant. J'ai couru mon premier marathon l'année dernière à Mesa, en Arizona, et je m'entraîne pour mes prochains marathons maintenant !",
    },
  },
  {
    name: {
      'American English': '🥾 Hiking',
      Français: '🥾 Randonnée',
    },
    description: {
      'American English':
        "What's your favorite place to hike in the STL area?? No wrong answers here :)",
      Français:
        'Quel est votre endroit préféré pour faire de la randonnée dans la région de St. Louis ? Pas de mauvaises réponses ici :)',
    },
  },
]

const { language } = storeToRefs(useLanguageStore())
const formattedHobbies = computed(() => {
  return hobbies.map((hobby) => {
    return {
      name: hobby.name[language.value],
      description: hobby.description[language.value],
    }
  })
})

const title = computed(() => {
  const titleMap = {
    'American English': "Mamma mia, it's a me-a!",
    Français: "Mamma mia, c'est moi-a!",
  }
  return titleMap[language.value]
})

const description = computed(() => {
  const descriptionMap = {
    'American English': 'A little more about myself...',
    Français: 'Un peu plus sur moi...',
  }
  return descriptionMap[language.value]
})

const gotcha = computed(() => {
  const gotchaMap = {
    'American English': 'Just kidding :)',
    Français: 'Je rigole :)',
  }

  return gotchaMap[language.value]
})

const subTitle = computed(() => {
  const subTitleMap = {
    'American English': 'My current hobbies',
    Français: 'Mes passe-temps actuels',
  }
  return subTitleMap[language.value]
})

const marioInfo = computed(() => {
  const AmericanEnglish = [
    { name: 'Name', description: 'Mario' },
    { name: 'Occupation', description: 'Plumber' },
    { name: 'Hobby', description: 'Jumping on mushrooms' },
    { name: 'Favorite Food', description: 'Pasta' },
  ]

  const Francais = [
    { name: 'Nom', description: 'Mario' },
    { name: 'Métier', description: 'Plombier' },
    { name: 'Loisir', description: 'Sauter sur des champignons' },
    { name: 'Plat préféré', description: 'Pâtes' },
  ]

  const infoMap = {
    'American English': AmericanEnglish,
    Français: Francais,
  }
  return infoMap[language.value]
})
</script>

<template>
  <h1 class="header">{{ title }}</h1>
  <p>{{ description }}</p>
  <TitleDescList :items="marioInfo" />
  <p class="my-12">{{ gotcha }}</p>
  <h2 class="text-2xl my-4">{{ subTitle }}</h2>
  <TitleDescList :items="formattedHobbies" />
</template>
