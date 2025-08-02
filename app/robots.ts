import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '*.json',
          '/scripts/'
        ],
      },
      // Special rules for search engines to prioritize important content
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1, // Be gentle on server but allow frequent crawling
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 2,
      }
    ],
    sitemap: 'https://chineseattractions.com/sitemap.xml',
    host: 'https://chineseattractions.com'
  }
}
