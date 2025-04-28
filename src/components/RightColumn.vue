<script setup></script>

<template>
  <div class="hidden md:flex flex-col pt-8 gap-6">
    <DarkModeToggle class="right-side" />
    <LanguageSelector class="left-side" />
  </div>
</template>

<style scoped>
.right-side {
  align-self: flex-end;
  margin-right: 1rem;
  transform: rotate(12deg);
}

.left-side {
  align-self: flex-start;
  margin-left: 1rem;
  transform: rotate(-12deg);
}
</style>
