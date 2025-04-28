<script setup>
const contentList = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    link: 'https://example.com/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    link: 'https://example.com/project2',
  },
]

const title = 'Table of Contents'
const description = 'A list of projects and their descriptions'
</script>

<template>
  <section>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <ul>
      <li v-for="(item, index) in contentList" :key="index">
        <a :href="item.link">{{ item.title }}</a
        >: {{ item.description }}
      </li>
    </ul>
  </section>
</template>
