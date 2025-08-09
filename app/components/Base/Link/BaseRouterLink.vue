<template>
  <NuxtLink :to="link" >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from "#vue-router";

interface Props {
  link: RouteLocationRaw;
}

defineProps<Props>()
</script>

<style scoped lang="scss">

</style>