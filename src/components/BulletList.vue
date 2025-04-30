<script setup name="BulletList">
import { toRefs, computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  meta: {
    type: Object,
    default: () => ({}),
  },
})

const { items, meta } = toRefs(props)

const colCount = computed(() => { return meta.value.colCount || 1 })
</script>

<template>
  <ul class="md:pl-5 grid gap-y-2 gap-x-12 custom-cols" :style="{ '--col-count': colCount }">
    <li v-for="(item, index) in items" :key="index" class="max-w-text">- {{ item }}</li>
  </ul>
</template>

<style scoped>
.custom-cols {
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 48rem) {
    grid-template-columns: repeat(var(--col-count), minmax(0, 1fr));
  }
}
</style>
