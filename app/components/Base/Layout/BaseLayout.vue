<template>
  <div class="wrapper">
    <TheHeader />

    <main class="inner">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">

import TheHeader from "~/components/Header/TheHeader.vue";
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .inner {
    padding: 0 112px;
    background: #FFFFFF;
  }
}
</style>