<template>
  <div class="header">
    <img src="/images/logotype.webp" alt="logotype" width="84" height="25" class="header__logotype" />

    <div class="header__navigation">
      <NavbarList :list="navbarData" />

      <div class="header__actions">
        <ButtonLanguage />
        <BaseButton>Let’s work</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonLanguage from "~/components/ui/ButtonLanguage.vue";
import NavbarList from "~/components/Base/Navbar/NavbarList.vue";
import { navbarMockData } from "~/global/mockData/navbarMockData";

const navbarData = navbarMockData()
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px $indent-3xl;

  &__navigation {
    display: flex;
    align-items: center;
    gap: 91px;
  }

  &__actions {
    display: flex;
    gap: $indent-l;
  }
}
</style>