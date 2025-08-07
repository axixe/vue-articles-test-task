<template>
  <button type="button" class="button-language">
    <svg class="icon-24">
      <use :href="'images/svg/icon-language.svg#icon'" />
    </svg>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.button-language {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  border: 2px solid #0000001A;
  border-radius: 100%;
}
</style>