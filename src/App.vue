<script setup>
  import VButton from './components/VButton.vue'
  import VCard from './components/VCard.vue'
  import VScore from './components/VScore.vue'
  import { reactive, ref } from 'vue'

  let score = ref(50)
  const cardData = reactive([
    {
      word: 'Hello', //исходное слово
      translation: 'Привет', // Перевод
      state: 'closed', // closed | opened
      status: 'pending', //pending | fail | success
    },
    {
      word: 'Hello', //исходное слово
      translation: 'Привет', // Перевод
      state: 'opened', // closed | opened
      status: 'pending', //pending | fail | success
    },
    {
      word: 'Hello', //исходное слово
      translation: 'Привет', // Перевод
      state: 'opened', // closed | opened
      status: 'success', //pending | fail | success
    },
    {
      word: 'Hello', //исходное слово
      translation: 'Привет', // Перевод
      state: 'opened', // closed | opened
      status: 'fail', //pending | fail | success
    },
  ])
</script>

<template>
  <header>
    <VScore :value="score" />
  </header>
  <main>
    <VButton>Начать игру</VButton>
    <VCard v-for="(data, idx) in cardData" v-bind="data" :key="idx" />
  </main>
</template>

<style scoped>
  main {
    display: grid;
    place-items: center;
    min-height: 100vh;
  }
</style>
