<template>
  <button type="button" class="button caption-p">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.button {
  padding: $indent-l $indent-2xl;
  border-radius: 12px;
  background: $color-base;
  color: $color-white;
}
</style>