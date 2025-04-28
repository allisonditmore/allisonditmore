<script setup name="TitleDescList">
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
    <li v-for="(item, index) in items" :key="index">
      <p class="font-bold">{{ item.name }}:</p>
      <p class="pl-2 max-w-text">{{ item.description }}</p>
    </li>
  </ul>
</template>
