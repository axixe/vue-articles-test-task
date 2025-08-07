<template>
  <div class="article-card-list">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.article-card-list {
  display: flex;
  flex-wrap: wrap;
  gap: $indent-3xl $indent-2xl;
}
</style>