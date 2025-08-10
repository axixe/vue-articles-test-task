<template>
  <div class="article-page">
    <h1 class="article-page__title">
      {{ article.title }}
    </h1>

    <div class="article-page__content-wrapper">
      <img
        :src="article.image"
        alt="article-image"
        width="1216"
        height="700"
        class="article-page__image"
      >

      <div class="article-page__text">
        <span class="article-page__subtitle">About</span>

        <p class="h4">
          {{ article.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { articleMockData } from "~/global/mockData/articleMockData";

const article = articleMockData()
</script>

<style scoped lang="scss">
.article-page {
  display: flex;
  flex-direction: column;
  gap: 73px;
  padding: 119px 0 80px;
  word-break: break-word;

  &__content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }

  &__image {
    width: 100%;
    height: auto;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: $indent-2xl;
    max-width: 695px;
  }

  &__subtitle {
    font-size: 16px;
    line-height: 100%;
  }
}
</style>