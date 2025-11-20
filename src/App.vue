<script setup>
  import VButton from './components/VButton.vue'
  import VCard from './components/VCard.vue'
  import VScore from './components/VScore.vue'
</script>

<template>
  <header>
    <VScore />
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
