<template>
  <a :href="href" class="link caption-p">
    <slot />
  </a>
</template>

<script setup lang="ts">
interface Props {
  href: string;
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.link {
  border-bottom: 1px solid $color-base;
}
</style>