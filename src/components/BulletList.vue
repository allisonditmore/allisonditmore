<script setup name="BulletList">
import { toRefs } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const { items } = toRefs(props)
</script>

<template>
  <ul class="md:pl-5 flex flex-col gap-2">
    <li v-for="(item, index) in items" :key="index" class="max-w-text">- {{ item }}</li>
  </ul>
</template>
