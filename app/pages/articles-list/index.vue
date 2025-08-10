<template>
  <div class="page-articles">
    <h1>Articles</h1>

    <BaseArticleCardList class="page-articles__card-list">
      <div
        v-for="{ id, image, preview } in paginatedArticleList"
        :key="id"
      >
        <BaseRouterLink :link="`article/${id}`">
          <BaseArticleCard
              :preview="image"
              :card-content="preview"
              class="page-articles__card"
          />
        </BaseRouterLink>
      </div>
    </BaseArticleCardList>

    <BasePagination :total-pages="chunkedArticleList.length" :max-visible-pages="5" :current-page="currentPage" @change:page="setQueryByPageChanging" />
  </div>
</template>

<script setup lang="ts">
import { useArticleList } from "~/api/modules/articles-list/composables/useArticleList";
import { sliceToChunks } from "~/utils/sliceToChunks";
import type { ArticleResponseType } from "~/api/modules/articles-list/types/articleResponseType";
import BaseRouterLink from "~/components/Base/Link/BaseRouterLink.vue";

const { requestArticleList } = useArticleList()
const route = useRoute()
const router = useRouter()
const articleList = ref<ArticleResponseType[] | null>(null)

const currentPage = computed(() => {
  const page = route.query.page
  return typeof page === "string" ? +page : 1
})

const chunkedArticleList = computed(() => {
  if (!articleList.value) return []

  return sliceToChunks(articleList.value, 8)
})

const paginatedArticleList = computed(() => {
  return chunkedArticleList.value[currentPage.value - 1] || []
})

const setQueryByPageChanging = (page: number) => {
  router.push({ query: { ...route.query, page: page.toString() } })
}

articleList.value = await requestArticleList()
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