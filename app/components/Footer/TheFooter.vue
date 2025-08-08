<template>
  <footer class="footer">
    <div class="footer__information">
      <div class="footer__introduction">
        <span class="footer__introduction-subtitle caption-p">Is there a project?</span>
        <span class="footer__introduction-title">
          <span class="footer__introduction-underlined">Let’s work</span>
          <span class="footer__introduction-custom-underlined">together</span>
        </span>
      </div>

      <ContactsList />
    </div>

    <div class="footer__navigation">
      <div class="footer__navigation-links">
        <BaseLink
          v-for="(chunk, index) in linkChunks.firstChunk"
          :key="index"
          :href="chunk.href"
        >
          {{ chunk.title }}
        </BaseLink>
      </div>

      <button class="footer__button-go">Go</button>

      <div class="footer__navigation-links">
        <BaseLink
            v-for="(chunk, index) in linkChunks.secondChunk"
            :key="index"
            :href="chunk.href"
        >
          {{ chunk.title }}
        </BaseLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import ContactsList from "~/components/ui/ContactsList.vue";
import { footerNavigationLinksMockData } from "~/global/mockData/footerNavigationLinksMockData";

const navigationLinks = footerNavigationLinksMockData()

const linkChunks = computed(() => {
  const middleLinksIndex = Math.ceil(navigationLinks.length / 2)

  return {
    firstChunk: [
        ...navigationLinks.slice(0, middleLinksIndex),
    ],
    secondChunk: [
      ...navigationLinks.slice(middleLinksIndex),
    ],
  }
})
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  gap: 143px;
  height: 100%;
  padding: 140px 112px 0 112px;
  background: $color-accent;

  &__information {
    display: flex;
    gap: 368px;
  }

  &__introduction {
    display: flex;
    flex-direction: column;
    gap: 56px;
    max-width: 570px;
    height: 100%;
  }

  &__introduction-title {
    position: relative;
    font-size: 112px;
    line-height: 100%;
  }

  &__introduction-underlined {
    text-decoration: underline 1px $color-base;
    text-underline-offset: 14px;
  }

  &__introduction-custom-underlined {
    &::before,
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      display: block;
      height: 1px;
      background: $color-base;
    }

    &::before {
      width: 100px;
    }

    &::after {
      right: 100px;
      width: 280px;
    }
  }

  &__navigation {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__navigation-links {
    display: flex;
    gap: $indent-2xl;
    padding-bottom: 30px;
  }

  &__button-go {
    padding: 122px 160px 25px 160px;
    border-top-left-radius: 200px;
    border-top-right-radius: 200px;
    background: $color-base;
    color: $color-white;
    font-size: 32px;
  }
}
</style>