<template>
  <div class="page-home">
    <BaseRouterLink :link="'/articles-list'">
      <BaseButton>go to test task</BaseButton>
    </BaseRouterLink>
  </div>
</template>

<script setup lang="ts">
import BaseRouterLink from "~/components/Base/Link/BaseRouterLink.vue";
</script>

<style scoped lang="scss">
.page-home {
  display: flex;
  justify-content: center;
  padding: 200px 0;
}
</style>