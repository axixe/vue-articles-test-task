import useRequest from "~/composables/useRequest";
import type { ArticleResponseType } from "~/api/modules/articles-list/types/articleResponseType";
import { $http } from "~/api/settings/apiSettings";

export const useArticleList = () => {
    const { execute, isLoading } = useRequest()

    const articleList = ref<ArticleResponseType[] | null>(null)

    const requestArticleList = async () => {
        const response = await execute(() => $http.get('/posts'))
        articleList.value = response?.data
        return articleList.value
    }

    return {
        requestArticleList,
        isLoading,
    }
}