export const articleListMockData = () => {
    const articles = []

    for (let i = 0; i < 8; i++) {
        articles.push({
            preview: 'https://placehold.co/280x280',
            content: 'The guys from Qtim rewrote the entire site from scratch in a couple of months. In the process of development they offered ideas to solve our "pains". We are still working with them. Everything is great!',
        })
    }

    return articles
}