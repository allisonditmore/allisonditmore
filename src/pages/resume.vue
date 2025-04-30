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

const roleSubtitle = computed(() => {
  const roleSubtitleMap = {
    'American English': 'Roles',
    Français: 'Rôles',
  }
  return roleSubtitleMap[language.value]
})

// TODO find a better solution here. This is too verbose... Start with a constants file to mimic DB data?
// Work on dynamic translations (probably would want a cache or DB solution for this)
const currentRole = computed(() => {
  const currentRoleMap = {
    'American English': {
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
          name: 'Core Planning Committee for WWT Women in Technology (2022-Present)',
          description:
            'Assisted in the planning and execution of biannual interdepartmental networking events, coffee chats, and other events to promote inclusion and belonging in the workplace and to encourage mentorship and leadership within the organization.',
        },
        {
          name: 'Mentoring for the Shelter Management App - St. Louis University (2023-Present)',
          description:
            'Mentored a team of students at St. Louis University in the development of a shelter management application for the St. Louis Area Foodbank. The application will be used to manage volunteer shifts at local shelters.',
        },
        {
          name: 'Mentoring for STEM Student Forum (2021-Present)',
          description:
            'Mentored a team of students at high schools in the St. Louis area to create a solution for an issue in their community. The students presented their solution at the WWT STEM Student Forum, a competition for high school students to showcase their projects.',
        },
      ],
    },
    Français: {
      positions: [
        {
          title: 'Responsable de l’équipe de développement',
          date: 'Août 2022 - Présent',
        },
      ],
      company: 'World Wide Technology',
      responsibilities: [
        'Gérer une équipe de développeurs et un ingénieur qualité, en fournissant à la fois un leadership technique et axé sur la carrière',
        'Accomplir des projets et des fonctionnalités à grande échelle pour le site Web d’entreprise externe',
        'Travailler en étroite collaboration avec les concepteurs UX et les analystes commerciaux pour garantir l’alignement des parties prenantes et prioriser les fonctionnalités',
        'Fournir un support technique continu et une maintenance pour le site Web d’entreprise',
        'S’assurer que le site Web d’entreprise respecte les normes d’accessibilité et offre la meilleure expérience à nos utilisateurs finaux',
      ],
      majorProjects: [
        {
          name: 'Constructeur de pages personnalisé',
          description:
            "Création d'un nouveau système de gestion de contenu (CMS) personnalisé pour un contenu dynamique et très visuel sur le site Web d'entreprise. Les nouvelles pages sont construites à l'aide d'une architecture basée sur des composants, permettant des mises à jour et une maintenance faciles. Les analyses ont montré une augmentation significative de l'engagement des utilisateurs et du temps passé sur la page depuis le lancement des nouvelles pages.",
        },
        {
          name: 'Migration vers Nuxt',
          description:
            "Migration du site Web d'entreprise de Vue 2 vers Nuxt 3.",
        },
        {
          name: "Page d'accueil personnalisée",
          description:
            "Développement d'une nouvelle page d'accueil pour le site Web d'entreprise qui est personnalisée en fonction des données utilisateur. Cela a entraîné une augmentation significative de l'engagement des utilisateurs et des taux de clics.",
        },
        {
          name: 'Audit UX du site Web d’entreprise',
          description:
            "Exécution de recommandations UX à grande échelle pour mettre à jour le site Web d'entreprise afin de créer une cohérence du site et des expériences utilisateur positives ainsi que pour améliorer et rationaliser l'expérience de gestion du contenu.",
        },
        {
          name: 'Rénovation de la recherche',
          description:
            "Dirigé l'effort pour retravailler l'expérience de recherche du site, y compris les mises à jour du schéma de contenu et de l'indexation, un nouvel aperçu déroulant de navigation de recherche pour des succès rapides de recherche et une nouvelle expérience de recherche par onglets pour permettre aux utilisateurs de trouver et de filtrer le contenu plus efficacement.",
        },
      ],
      additionalContributions: [
        {
          name: 'Comité de planification principal pour les femmes en technologie WWT (2022-Présent)',
          description:
            "Aider à la planification et à l'exécution d'événements de réseautage inter-départementaux biannuels, de cafés-rencontres et d'autres événements pour promouvoir l'inclusion et le sentiment d'appartenance sur le lieu de travail et encourager le mentorat et le leadership au sein de l'organisation.",
        },
        {
          name: 'Mentorat pour l’application de gestion des refuges - Université de St. Louis (2023-Présent)',
          description:
            "Mentorat d'une équipe d'étudiants de l'Université de St. Louis dans le développement d'une application de gestion des refuges pour la banque alimentaire de la région de St. Louis. L'application sera utilisée pour gérer les horaires des bénévoles dans les refuges locaux.",
        },
        {
          name: 'Mentorat pour le forum étudiant STEM (2021-Présent)',
          description:
            "Mentorat d'une équipe d'étudiants de lycées de la région de St. Louis pour créer une solution à un problème dans leur communauté. Les étudiants ont présenté leur solution au forum étudiant STEM WWT, une compétition pour les étudiants du secondaire afin de présenter leurs projets.",
        },
      ],
    },
  }
  return currentRoleMap[language.value]
})

const previousRole1 = computed(() => {
  const previousRole1Map = {
    'American English': {
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
    Français: {
      positions: [
        {
          title: 'Développeur senior',
          date: 'Août 2021 - Août 2022',
        },
        {
          title: 'Développeur',
          date: 'Juillet 2020 - Août 2021',
        },
      ],
      company: 'World Wide Technology',
      responsibilities: [
        "Responsable de la création et de la maintenance d'applications Web personnalisées et d'API d'entreprise utilisées par des utilisateurs internes et externes avec JavaScript et TypeScript",
        'Créer une plateforme Web publique qui met en valeur les solutions techniques disponibles via le WWT Advanced Technology Center',
        "Conduire l'amélioration continue des processus et collaborer efficacement avec des équipes commerciales et de développement logiciel interfonctionnelles pour résoudre des problèmes et mettre en œuvre de nouvelles solutions",
      ],
      majorProjects: [
        {
          name: 'Navigation',
          description:
            "Refonte de la navigation du site pour permettre aux parties prenantes de mettre à jour la structure et le contenu de la navigation et d'accommoder des liens personnalisés en fonction des autorisations utilisateur.",
        },
        {
          name: 'Communautés',
          description:
            "Développement d'une nouvelle plateforme communautaire pour le site Web d'entreprise qui permet aux utilisateurs de se connecter et de collaborer entre eux. Cela comprend de nouveaux blocs de contenu, un nouveau forum avec des discussions et des annonces, ainsi que la gestion des membres.",
        },
      ],
    },
  }
  return previousRole1Map[language.value]
})

const previousRole2 = computed(() => {
  const previousRole2Map = {
    'American English': {
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
    Français: {
      positions: [
        {
          title: 'Ingénieur logiciel',
          date: 'Avril 2020 - Juillet 2020',
        },
        {
          title: 'Ingénieur logiciel associé',
          date: 'Octobre 2019 - Avril 2020',
        },
        {
          title: 'Apprenti en ingénierie logicielle',
          date: 'Mai 2019 - Septembre 2019',
        },
      ],
      company: 'UniGroup',
      responsibilities: [
        'Créer et maintenir des applications frontales avec React, Redux et Typescript',
        "Créer et prendre en charge des applications back-end et des microservices avec Java et Kotlin ainsi que Spring Boot selon les meilleures pratiques d'API RESTful",
        'Mettre en œuvre RabbitMQ pour permettre la communication entre plusieurs applications',
        "Produire des bases de données relationnelles avec PostgreSQL selon les besoins de l'application",
        "Créer et mettre à jour des applications et leur configuration à l'aide d'Openshift et de Jenkins",
        "Démontrer la capacité de développement full stack en complétant des tâches dans tous les domaines du code source, en commençant par les modifications de base de données et en les mettant en œuvre jusqu'à la fin du code, se terminant par le front-end React",
        "Construire des solutions simples à des problèmes commerciaux complexes grâce à l'innovation technologique et aux améliorations de processus tout en possédant le cycle de vie complet de chaque produit",
        'Exploiter des stratégies agiles pour livrer un code et des produits de haute qualité',
        "S'engager systématiquement en tant que membre d'une équipe performante auto-organisée axée sur la livraison continue de valeur",
      ],
    },
  }
  return previousRole2Map[language.value]
})

const roleList = computed(() => {
  return [currentRole, previousRole1, previousRole2]
})
</script>

<template>
  <section>
    <h1 class="header mb-4 md:mb-6">👩‍💻 {{ title }}</h1>
    <Skills />
    <div class="border-t-1 border-elevated w-full my-12" />
    <h2 class="text-xl md:text-2xl font-bold pb-4">{{ roleSubtitle }}</h2>
    <ul class="flex flex-col gap-10">
      <Role v-for="(role, index) in roleList" :key="index" :role="role" />
    </ul>
  </section>
</template>
