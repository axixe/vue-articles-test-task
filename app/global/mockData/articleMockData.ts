import type { Article } from "~/global/types/Article/Article";

export const articleMockData = (): Article => {
    return {
        title: 'At Test & Code, you can learn about software design',
        image: 'https://placehold.co/1216x700',
        text: 'The business model of this service is an aggregator that brings together commercial and noncommercial organizations and charges a commission for transactions. The percentage that goes to the account of the platform owner is discussed individually with each company. The platform also has a subscription system. It allows nonprofits to post more than one project for which they collect donations.',
    }
}