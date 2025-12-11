<script setup>
  import getWords from './api/getWords'
  import VButton from './components/VButton.vue'
  import VCard from './components/VCard.vue'
  import VScore from './components/VScore.vue'
  import { computed, onMounted, reactive, ref } from 'vue'

  const score = ref(50)
  const data = reactive([])

  async function modifiedData() {
    const words = await getWords()
    for (let item of words) {
      item = { ...item, state: 'closed', status: 'pending' }
      data.push(item)
    }
  }

  onMounted(() => {
    modifiedData()
  })
</script>

<template>
  <header>
    <VScore :value="score" />
  </header>
  <main>
    <VButton>Начать игру</VButton>
    <div class="card-list">
      <VCard v-for="(item, idx) in data" v-bind="item" :key="idx" :idx />
    </div>
  </main>
</template>

<style scoped>
  main {
    display: grid;
    place-items: center;
    min-height: 100vh;
  }

  .card-list {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 66px 107px;
  }
</style>
