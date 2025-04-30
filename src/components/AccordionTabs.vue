<script setup>
import { toRefs, ref, computed } from 'vue'

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
})

const { tabs } = toRefs(props)
const activeTabTitle = ref(tabs.value[0].title)
const activeTab = computed(() => {
  const activeTab = tabs.value.find((tab) => tab.title === activeTabTitle.value)
  return activeTab || tabs.value[0]
})
const activeTabContent = computed(() => {
  return activeTab.value?.content || ''
})
const activeTabComponentName = computed(() => {
  return activeTab.value?.displayComponent || 'BulletList'
})
const activeTabMeta = computed(() => {
  return activeTab.value?.meta || {}
})
</script>

<template>
  <div class="flex flex-col md:flex-row gap-y-4">
    <div
      class="flex shrink-0 bg-elevated overflow-x-scroll md:w-[13.5rem] -mx-5 md:mx-0 md:rounded-l-md md:border-r-1 border-elevated"
    >
      <div class="p-1 flex md:flex-col w-full tabs-container">
        <button
          class="p-2 flex flex-row md:w-full border-1"
          v-for="tab in tabs"
          :key="tab.title"
          :class="
            activeTabTitle === tab.title
              ? 'bg-base rounded-l-md rounded-r-md md:rounded-r-0 border-elevated active-tab'
              : 'cursor-pointer border-transparent'
          "
          @click="activeTabTitle = tab.title"
        >
          <div
            class="border-2 md:border-r-0 border-base bg-yellow-100 rounded-md pl-2 pr-4 h-fit tab-title whitespace-nowrap"
          >
            {{ tab.title }}
          </div>
          <div
            class="hidden md:block border-t-2 border-r-2 border-black bg-yellow-100 h-5 aspect-square rotate-45 mt-1 ml-[-0.85rem] rounded-[15%] tab-arrow"
          />
        </button>
      </div>
    </div>
    <div class="content">
      <BulletList
        v-if="activeTabComponentName === 'BulletList'"
        :items="activeTabContent"
        :meta="activeTabMeta"
      />
      <TitleDescList
        v-else-if="activeTabComponentName === 'TitleDescList'"
        :items="activeTabContent"
      />
    </div>
  </div>
</template>
