<template>
  <div class="article-card-list">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.article-card-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: $indent-3xl $indent-2xl;
}
</style>