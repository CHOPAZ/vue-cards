<script setup>
  import VButton from './components/VButton.vue'
  import VCard from './components/VCard.vue'
  import VScore from './components/VScore.vue'
  import { reactive, ref } from 'vue'

  let score = ref(50)
  const cardData = reactive({
    word: 'Hello', //исходное слово
    translation: 'Привет', // Перевод
    state: 'closed', // closed | opened
    staus: 'pending', //pending | fail | success
  })
</script>

<template>
  <header>
    <VScore :value="score" />
  </header>
  <main>
    <VButton>Начать игру</VButton>
    <VCard />
  </main>
</template>

<style scoped>
  main {
    display: grid;
    place-items: center;
    min-height: 100vh;
  }
</style>
