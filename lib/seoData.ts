interface SEOMetadata {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
}

interface PageSEO {
    [key: string]: SEOMetadata;
}

const siteUrl = 'http://localhost:3000';

export const seoData: PageSEO = {
    home: {
        title: 'Rilwan Etti',
        description: 'Tailwind Personal vCard/Portfolio Template',
        keywords: ['Gray', 'vCard', 'portfolio', 'Personal vCard/Portfolio'],
        canonicalUrl: siteUrl,
    },
};

export const getPortfolioProjectSEO = (id: string, title: string, excerpt: string): SEOMetadata => ({
    title: `${title} | Portfolio`,
    description: excerpt,
    keywords: ['portfolio', 'project', title.toLowerCase()],
    canonicalUrl: `${siteUrl}/portfolio/${id}`,
});

export const getBlogPostSEO = (slug: string, title: string, excerpt: string): SEOMetadata => ({
    title: `${title} | Blog`,
    description: excerpt,
    keywords: ['blog', 'article', ...title.toLowerCase().split(' ')],
    canonicalUrl: `${siteUrl}/blog/${slug}`,
});