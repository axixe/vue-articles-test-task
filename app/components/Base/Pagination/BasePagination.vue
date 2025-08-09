<template>
  <div class="pagination">
    <ArrowButton v-if="currentPage > 1" @click="$emit('change:page', currentPage - 1)" />

    <BaseButton
      v-for="(pageNumber, index) in pagination"
      :key="index"
      :color="currentPage === pageNumber ? ColorType.Base : ColorType.GreyLight"
      class="pagination__button"
      :class="{
        'pagination__button--active': currentPage === pageNumber,
      }"
      @click="$emit('change:page', pageNumber)"
    >
      {{ pageNumber }}
    </BaseButton>

    <ArrowButton @click="$emit('change:page', currentPage + 1)" :side="SideType.Right" />
  </div>
</template>

<script setup lang="ts">
import ArrowButton from "~/components/ui/ArrowButton.vue";
import { paginationFactory } from "~/utils/paginationFactory";
import { ColorType } from "~/global/enums/ColorType";
import { SideType } from "~/global/enums/SideType";

interface Props {
  totalPages: number,
  currentPage: number,
  maxVisiblePages: number,
}

const props = defineProps<Props>()
defineEmits<{
  (e: 'change:page', pageNumber: number): void
}>()

const pagination = computed(() =>
    paginationFactory(props.totalPages, props.currentPage, props.maxVisiblePages)
)
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  gap: $indent-s;

  &__button {
    padding: $indent-l 20px;

    &--active {
      pointer-events: none;
    }
  }
}

</style>