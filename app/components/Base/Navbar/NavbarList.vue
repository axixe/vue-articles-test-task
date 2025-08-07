<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li v-for="item in list" class="navbar__item">
        <NavbarListItem :title="item.title" />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import NavbarListItem from "~/components/Base/Navbar/NavbarListItem.vue";
import type { NavbarItem } from "~/global/types/Navbar/NavbarItem";

interface Props {
  list: NavbarItem[]
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.navbar {
  &__list {
    display: flex;
    gap: 58px;
  }
}
</style>