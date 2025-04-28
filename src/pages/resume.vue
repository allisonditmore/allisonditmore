<script setup>
import { storeToRefs } from 'pinia'
import { useLanguageStore } from '@/stores/language'
import { computed } from 'vue'

const { language } = storeToRefs(useLanguageStore())

const title = computed(() => {
  const titleMap = {
    'American English': "What I've been up to",
    Français: "Ce que j'ai fait récemment",
  }
  return titleMap[language.value]
})

const techRoles = [
  {
    positions: [
      {
        title: 'Development Team Lead',
        date: 'August 2022 - Present',
      },
    ],
    company: 'World Wide Technology',
    responsibilities: [
      'Manage a team of developers and a quality assurance engineer, providing both technical and career-focused leadership',
      'Accomplish large scale projects and features for the external-facing corporate website',
      'Work closely with UX designers and business analysts to ensure stakeholder alignment and prioritize features',
      'Provide ongoing technical support and maintenance for the corporate website',
      'Ensure the corporate website meets accessibility standards and provides the best experience for our end users',
    ],
    techStack: ['Vue.js', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Git', 'Agile'],
    skills: [
      'Technical leadership',
      'Project management',
      'Stakeholder relationships',
      'Mentorship and Coaching',
      'Agile software development',
      'Cross-functional collaboration',
    ],
    majorProjects: [
      {
        name: 'Custom Page Builder',
        description:
          'Built a new custom content management system (CMS) for dynamic and highly visual content on the corporate website. The new pages are built using a component-based architecture, allowing for easy updates and maintenance. Analytics have shown a significant increase in user engagement and time on the page since the launch of the new pages.',
      },
      {
        name: 'Nuxt Migration',
        description: 'Migrated the corporate website from Vue 2 to Nuxt 3.',
      },
      {
        name: 'Persona-Based Homepage',
        description:
          'Developed a new homepage for the corporate website that is personalized based on user data. This resulted in a significant increase in user engagement and click-through rates.',
      },
      {
        name: 'Corporate Website UX Audit',
        description:
          'Executed on large-scale UX recommendations to update the corporate website to create site consistency and positive user experiences as well as to improve and streamline the content management experience.',
      },
      {
        name: 'Revamp Search',
        description:
          "Led the effort to rework the site's search experience, including updates to content schema and indexing, a new search navigation dropdown preview for quick search successes, and a new tabbed search experience to allow users to find and filter content more efficiently.",
      },
    ],
    additionalContributions: [
      {
        name: 'Mentoring for the Shelter Management App - St. Louis University',
        description:
          'Mentored a team of students at St. Louis University in the development of a shelter management application for the St. Louis Area Foodbank. The application will be used to manage volunteer shifts at local shelters.',
      },
      {
        name: 'Core Planning Committee for WWT Women in Technology',
        description:
          'Assisted in the planning and execution of biannual interdepartmental networking events, coffee chats, and other events to promote inclusion and belonging in the workplace and to encourage mentorship and leadership within the organization.',
      },
    ],
  },
  {
    positions: [
      {
        title: 'Senior Developer',
        date: 'August 2021 - August 2022',
      },
      {
        title: 'Developer',
        date: 'July 2020 - August 2021',
      },
    ],
    company: 'World Wide Technology',
    responsibilities: [
      'Responsible for building and maintaining custom web applications and enterprise APIs used by both internal and external users with JavaScript and TypeScript',
      'Build a public web platform that showcases the technical solutions available through the WWT Advanced Technology Center',
      'Drive continuous process improvement and collaborate effectively with cross-functional business and software development teams to solve problems and implement new solutions',
    ],
    techStack: ['Vue.js', 'Node.js', 'JavaScript', 'Typescript', 'HTML', 'CSS', 'Git', 'Agile'],
    majorProjects: [
      {
        name: 'Navigation',
        description:
          'Overhaul site navigation to allow stakeholders to update the navigation structure and content and to accommodate custom links based on user permissions.',
      },
      {
        name: 'Communities',
        description:
          'Developed a new community platform for the corporate website that allows users to connect and collaborate with each other. This includes new content blocks, a new forum with discussions and announcements, and member management.',
      },
    ],
  },
  {
    positions: [
      {
        title: 'Software Engineer',
        date: 'April 2020 - July 2020',
      },
      {
        title: 'Associate Software Engineer',
        date: 'October 2019 - April 2020',
      },
      {
        title: 'Software Engineering Apprentice',
        date: 'May 2019 - September 2019',
      },
    ],
    company: 'UniGroup',
    responsibilities: [
      'Build and maintain front-end applications with React, Redux, and Typescript',
      'Create and support back-end applications and microservices with both Java and Kotlin as well as Spring Boot according to RESTful API best practices',
      'Implement RabbitMQ to enable communication between multiple applications',
      'Produce relational databases with PostgreSQL according to the needs of the application',
      'Create and update applications and their configuration using Openshift and Jenkins',
      'Demonstrated full stack development ability by completing tasks in all areas of the code base, starting with database changes and implementing them all the way through the code, ending at the React front end',
      'Build simple solutions to complex business problems through technology innovation and process improvements while owning the full lifecycle of each product',
      'Leverage agile strategies to deliver high-quality code and products',
      'Consistently engage as a member of self-organized high-performing team focused on delivering continuous value',
    ],
  },
]
</script>

<template>
  <section>
    <h1 class="header mb-4 md:mb-6">👩‍💻 {{ title }}</h1>
    <ul class="flex flex-col gap-10">
      <Role v-for="(role, index) in techRoles" :key="index" :role="role" />
    </ul>
  </section>
</template>
