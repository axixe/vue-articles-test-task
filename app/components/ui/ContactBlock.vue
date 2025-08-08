<template>
  <div class="contact caption-p">
    <p v-if="title" class="contact__title">
      {{ title }}
    </p>

    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
}

withDefaults(defineProps<Props>(), {
  title: '',
})
</script>

<style scoped lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  gap: $indent-m;
}
</style>