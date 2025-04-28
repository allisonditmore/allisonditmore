import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  const language = ref('American English')
  function toggleLanguage() {
    console.log('toggleLanguage')
    // TODO support multiple languages :)
    language.value = language.value === 'American English' ? 'Français' : 'American English'
  }

  return {
    language,
    toggleLanguage,
  }
})
