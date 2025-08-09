<template>
  <button
    type="button"
    class="button caption-p"
    :class="{
      [`button--${color}`]: color,
    }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ColorType } from "~/global/enums/ColorType";

interface Props {
  color?: ColorType
}

withDefaults(defineProps<Props>(), {
  color: ColorType.Base
})
</script>

<style scoped lang="scss">
.button {
  padding: $indent-l $indent-2xl;
  border-radius: 12px;
  transition:
    background 0.3s ease,
    color 0.3s ease;

  &:hover {
    border-color: transparent;
    background: $color-grey;
  }

  &--base,
  &:active {
    background: $color-base;
    color: $color-white;
  }

  &--grey-light {
    background: $color-grey-light;
    color: $color-base;
  }

  &--white {
    border: 1px solid $color-grey;
    background: $color-white;
    color: $color-base;
  }
}
</style>