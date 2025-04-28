<script setup>
const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    answer: 'Paris',
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
    answer: 'Jupiter',
  },
  {
    question: 'Who wrote "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'Mark Twain', 'F. Scott Fitzgerald', 'Ernest Hemingway'],
    answer: 'Harper Lee',
  },
]
</script>

<template>
  <section>
    <h2>Trivia</h2>
    <p>Test your knowledge with these trivia questions!</p>
    <ul>
      <li v-for="(item, index) in questions" :key="index">
        <strong>{{ item.question }}</strong>
        <ul>
          <li v-for="(option, i) in item.options" :key="i">{{ option }}</li>
        </ul>
      </li>
    </ul>
  </section>
</template>
