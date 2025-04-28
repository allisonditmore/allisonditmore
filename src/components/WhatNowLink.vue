<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})

const { text } = toRefs(props)
</script>

<template>
  <span>- {{ text }}</span>
  <IconCurvyArrow class="w-12 h-10" />
</template>
