<script setup></script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
  .button {
    width: 335px;
    border: none;
    border-radius: var(--br100);
    background: var(--color-blue);
    padding: 16px 10px;
    font-family: var(--font);
    font-weight: 400;
    font-size: 24px;
    color: var(--color-secondary);
    cursor: pointer;
  }
</style>
