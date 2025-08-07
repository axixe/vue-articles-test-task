<template>
  <button class="navbar-list-item body-p">
    {{ title }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.navbar-list-item {
  line-height: 20px;
}
</style>