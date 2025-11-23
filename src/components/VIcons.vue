<script setup>
  const { width, height, fill, iconId } = defineProps({
    width: {
      type: Number,
      default: 20,
    },
    height: {
      type: Number,
      default: 20,
    },
    fill: {
      type: String,
      default: 'primary',
    },
    iconId: {
      type: String,
      required: true,
    },
    classValue: {
      type: String,
      default: '',
    },
  })
</script>

<template>
  <svg
    :viewBox="`0 0 ${width} ${height}`"
    :width
    :height
    :fill="`var(--color-${fill})`"
    :class="classValue"
  >
    <use :xlink:href="`/src/assets/sprite.svg#${iconId}`" />
  </svg>
</template>

<style scoped>
  svg {
    display: block;
    transition: fill 0.1s linear;
  }
</style>
