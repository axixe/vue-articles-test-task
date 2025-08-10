<template>
  <div class="page-articles">
    <h1>Articles</h1>

    <BaseArticleCardList class="page-articles__card-list">
      <BaseArticleCard
        v-for="({ preview, content }, index) in cards"
        :key="index"
        :preview="preview"
        :card-content="content"
        class="page-articles__card"
      />
    </BaseArticleCardList>

    <BasePagination :total-pages="99" :max-visible-pages="5" :current-page="currentPage" @change:page="setQueryByPageChanging" />
  </div>
</template>

<script setup lang="ts">
import { articleListMockData } from "~/global/mockData/articleListMockData";

const cards = articleListMockData()
const route = useRoute()
const router = useRouter()

const currentPage = computed(() => {
  const page = route.query.page
  return typeof page === "string" ? +page : 1
})

const setQueryByPageChanging = (page: number) => {
  router.push({ query: { ...route.query, page: page.toString() } })
}
</script>

<style scoped lang="scss">
.page-articles {
  padding: 120px 0 140px;

  &__card-list {
    padding: 60px 0 50px;
  }

  &__card {
    margin: 0 auto;
  }
}
</style>