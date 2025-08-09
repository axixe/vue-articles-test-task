<template>
  <div class="wrapper">
    <TheHeader />

    <main class="inner">
      <slot />
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "~/components/Header/TheHeader.vue";
import TheFooter from "~/components/Footer/TheFooter.vue";

</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .inner {
    flex: 1 0 auto;
    padding: 0 112px;
    background: $color-white;
  }
}
</style>