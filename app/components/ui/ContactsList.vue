<template>
  <div class="contacts-list">
    <ContactBlock :title="'For all questions'">
      <div class="contacts-list__contact">
        <a class="contacts-list__phone">+7 (920) 278-00-68</a>
        <a>qtim@agency.com</a>
      </div>
    </ContactBlock>

    <ContactBlock v-for="location in locationsList" :title="location.title">
      <div class="contacts-list__location">
        <span>{{ location.address }}</span>

        <BaseButton :is-icon-button="true" class="contacts-list__button-location">
          <svg class="icon-12">
            <use :href="'/images/svg/icon-geoposition.svg#icon'" />
          </svg>
        </BaseButton>
      </div>
    </ContactBlock>
  </div>
</template>

<script setup lang="ts">
import ContactBlock from "~/components/ui/ContactBlock.vue";
import { officeLocationsMockData } from "~/global/mockData/officeLocationsMockData";

const locationsList = officeLocationsMockData()
</script>

<style scoped lang="scss">
.contacts-list {
  display: flex;
  flex-direction: column;
  gap: 36px;
  max-width: 160px;
  padding-top: 75px;
  word-wrap: break-word;

  &__contact {
    display: flex;
    flex-direction: column;
    gap: $indent-xs;
  }

  &__location {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: $indent-s;
  }

  &__button-location {
    height: 36px;
    padding: $indent-m;
    border-radius: 100%;
  }
}
</style>