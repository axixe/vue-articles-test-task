import useRequest from "~/composables/useRequest";
import type { ArticleResponseType } from "~/api/modules/article/types/articleResponseType";
import { $http } from "~/api/settings/apiSettings";

export const useArticle = () => {
    const { execute, isLoading } = useRequest()

    const articleList = ref<ArticleResponseType | null>(null)

    const requestArticle = async (id: string) => {
        const response = await execute(() => $http.get(`/posts/${id}`))
        articleList.value = response?.data
        return articleList.value
    }

    return {
        requestArticle,
        isLoading,
    }
}