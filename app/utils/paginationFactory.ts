export const paginationFactory = (totalPages: number, currentPage: number, maxVisiblePages: number) => {
    const pages: number[] = []

    if (maxVisiblePages <= 0) {
        return []
    }

    const startPage = Math.max(1, currentPage - maxVisiblePages + 1)
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
    }

    return pages
}