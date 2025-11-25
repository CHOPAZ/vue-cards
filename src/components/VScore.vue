<script setup>
  import VIcons from './VIcons.vue'

  const props = defineProps({
    value: {
      type: Number,
      default: 100,
    },
  })
</script>

<template>
  <div class="score">
    <h1>ЗАПОМНИ СЛОВО</h1>
    <div class="score__health">
      <span>{{ props.value }}</span>
      <VIcons icon-id="heart" :width="18" :height="16" />
    </div>
  </div>
</template>

<style scoped>
  .score {
    display: flex;
    justify-content: space-between;
    padding: 36px 62px;
  }
  .score__health {
    display: flex;
    gap: 13px;
    background-color: var(--color-blue-light);
    border: none;
    border-radius: var(--br36);
    padding: 12px 24px;
  }

  span {
    font-size: 16px;
    font-weight: 700;
    color: var(--color-blue);
  }
</style>
