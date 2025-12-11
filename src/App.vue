<script setup>
  import getWords from './api/getWords'
  import VButton from './components/VButton.vue'
  import VCard from './components/VCard.vue'
  import VScore from './components/VScore.vue'
  import { onMounted, reactive, ref } from 'vue'

  const score = ref(100)
  const data = reactive([])
  const isStart = ref(true)
  const endGame = ref(false)

  async function modifiedData() {
    const words = await getWords()
    for (let item of words) {
      item = { ...item, state: 'closed', status: 'pending' }
      data.push(item)
    }
  }

  function toStartGame() {
    isStart.value = !isStart.value
  }

  function toRestartGame() {
    score.value = 100
    data.length = 0
    modifiedData()
  }

  function rotate(id) {
    data[id].state = 'opened'
  }

  function changeStatus(status, id) {
    data[id].status = status

    if (status === 'fail') score.value -= 4
    else if (status === 'success') score.value += 10

    if (score.value === 0) endGame.value = true
  }

  onMounted(() => {
    modifiedData()
  })
</script>

<template>
  <div class="wrapper">
    <header>
      <VScore :value="score" />
    </header>
    <main>
      <VButton v-if="isStart" @click="toStartGame">Начать игру</VButton>
      <div v-else class="card">
        <div v-if="!endGame" class="card-list">
          <VCard
            v-for="(item, idx) in data"
            v-bind="item"
            :key="idx"
            :idx
            @check-answer="rotate(idx)"
            @change-status="(status) => changeStatus(status, idx)"
          />
        </div>
        <div v-if="endGame">Игра окончена. У вас закончились жизни</div>
        <div class="card__restart-btn">
          <VButton @click="toRestartGame">Начать заного</VButton>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  main {
    display: grid;
    place-items: center;
    flex: 1;
  }

  .card {
    width: 100%;
  }
  .card-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-items: center;
    gap: 66px 107px;

    width: 100%;
    padding: 0 62px;
  }

  .card__restart-btn {
    display: flex;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 65px;
  }
</style>
