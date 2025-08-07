<template>
  <div class="article-card">
    <img
      :src="preview"
      alt="article"
      width="280"
      height="280"
      class="article-card__preview"
    />

    <div class="article-card__text-wrapper">
      <p class="article-card__text">{{ cardContent }}</p>

      <button class="article-card__button-read-more body-p">Read more</button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  preview: string;
  cardContent: string;
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.article-card {
  display: flex;
  flex-direction: column;
  gap: $indent-xl;
  width: 100%;
  max-width: 280px;
  height: 100%;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-20px);

    .article-card__button-read-more {
      opacity: 1;
    }
  }

  &__text-wrapper {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: $indent-m;
  }

  &__text {
    @include max-line-count(3);
  }

  &__button-read-more {
    opacity: 0;
    color: $color-accent;
    transition: opacity 0.3s ease;
  }
}
</style>