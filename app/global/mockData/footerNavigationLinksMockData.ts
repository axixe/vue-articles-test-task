import type { Link } from "~/global/types/Link/Link";

export const footerNavigationLinksMockData = (): Link[] => {
    return [
        { title: 'Facebook', href: 'https://facebook.com' },
        { title: 'Telegram', href: 'https://telegram.org' },
        { title: 'Instagram', href: 'https://instagram.com' },
        { title: 'Behance', href: 'https://behance.net' },
        { title: 'LinkedIn', href: 'https://linkedin.com' },
        { title: 'Privacy', href: '/privacy' },
    ]
}