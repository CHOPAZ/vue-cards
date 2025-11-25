<script setup>
  import VIcons from './VIcons.vue'

  defineEmits(['check-answer', 'change-status'])
</script>

<template>
  <div class="card__container">
    <div class="card">
      <div class="card__front">
        <span class="card__numbering">01</span>
        <p class="card__word">Hello</p>
        <button class="card__btn" @click="$emit('check-answer')">ПЕРЕВЕРНУТЬ</button>
      </div>
      <div class="card__back">
        <span class="card__numbering">01</span>
        <p class="card__word">Привет</p>
        <div class="card__change-status">
          <button class="change-status__btn" @click="$emit('change-status')">
            <VIcons icon-id="cross" :width="24" :height="24" />
          </button>
          <button class="change-status__btn" @click="$emit('change-status')">
            <VIcons icon-id="tick" :width="24" :height="24" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card__container {
    perspective: 1000px;
    width: 250px;
    height: 376px;
    padding: 28px 19px;
    border: none;
    border-radius: var(--br16);
    background-color: var(--color-secondary);
  }

  .card {
    position: relative;
    width: 100%;
    height: 100%;

    transform-style: preserve-3d;
    transition: transform 1s;
  }

  .card__container:hover .card {
    transform: rotateY(180deg);
  }

  .card__front,
  .card__back {
    padding: 28px 19px;
    position: absolute;
    height: 100%;
    width: 100%;

    backface-visibility: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-blue-light);
    border-radius: var(--br16);
    background-color: var(--color-secondary);
  }

  .card__back {
    transform: rotateY(180deg);
  }

  .card__numbering {
    position: absolute;
    top: -10px;
    left: 20px;
    background-color: var(--color-secondary);
  }

  .card__word {
    font-size: 18px;
    font-weight: 400;
  }

  .card__btn {
    position: absolute;
    bottom: -10px;
    left: 50px;
    border: none;
    background-color: var(--color-secondary);
    cursor: pointer;
    font-size: 16px;
  }

  .card__change-status {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 32px;

    bottom: -12px;
    left: 60px;
    border: none;
    background-color: var(--color-secondary);
    font-size: 16px;
    padding: 0 6px;
  }

  .change-status__btn {
    cursor: pointer;
    border: 0;
    background-color: var(--color-secondary);
  }
</style>
