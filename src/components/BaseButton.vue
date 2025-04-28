<script setup>
const emit = defineEmits(['click'])
</script>

<template>
  <button
    @click="emit('click')"
    class="w-10 h-10 bg-elevated border-elevated border-1 cursor-pointer flex items-center justify-center block rounded-md text-2xl"
  >
    <slot />
  </button>
</template>
