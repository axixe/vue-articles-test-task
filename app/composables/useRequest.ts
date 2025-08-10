import { ref, type Ref } from 'vue'
import { type AxiosError, isAxiosError } from "axios";

export default function<T = any>() {
    const isLoading = ref(false)
    const isError = ref(false)
    const errors: Ref<Record<string, string[] | string>> = ref({})

    const execute = async (request: () => Promise<T>): Promise<T | null> => {
        if (isLoading.value) return null

        isLoading.value = true
        isError.value = false
        errors.value = {}

        try {
            return await request()
        } catch (err: any) {
            isError.value = true

            if (isAxiosError(err)) {
                const axiosErr = err as AxiosError<any>
                const response = axiosErr.response?.data

                if (response?.errors) {
                    errors.value = response.errors
                }

                return null
            }

            throw err
        } finally {
            isLoading.value = false
        }
    }

    return {
        isLoading,
        isError,
        errors,
        execute,
    }
}
