<template>
  <BaseButton
    :color="ColorType.White"
    class="arrow-button"
    :class="{
      [`arrow-button--${side}`]: side,
    }"
  >
    <svg class="icon-24">
      <use :href="'/images/svg/icon-angle.svg#icon'" />
    </svg>
  </BaseButton>
</template>

<script setup lang="ts">
import { ColorType } from "~/global/enums/ColorType";
import { SideType } from "~/global/enums/SideType";

interface Props {
  side?: SideType
}

withDefaults(defineProps<Props>(), {
  side: SideType.Left
})
</script>

<style scoped lang="scss">
.arrow-button {
  padding: 10px;

  &--left {
    svg {
      transform: rotate(180deg);
    }
  }

  &--right {
    svg {
      transform: rotate(0deg);
    }
  }
}
</style>