<script setup>
import { RouterView } from 'vue-router'

console.log(
  'Hiya! Are you a dev?\nIf so, feel free to reach out if you have any fun ideas for this project!',
)
</script>

<template>
  <LeftColumn />
  <div class="max-w-[1280px] overflow-hidden">
    <main class="content-container">
      <div>
        <Options />
        <RouterView />
      </div>
      <WhatNow />
    </main>
  </div>
  <RightColumn />
</template>
