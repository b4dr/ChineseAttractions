import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chineseattractions.com'
  const currentDate = new Date().toISOString()
  
  // High priority pages for immediate SEO impact
  const highPriorityPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/attractions`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cities`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }
  ]

  // URGENT: Chinese New Year 2025 article - highest priority for immediate indexing
  const seasonalContent = [
    {
      url: `${baseUrl}/blog/chinese-new-year-2025-travel-guide`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.95, // Very high priority for seasonal content
    }
  ]

  // Top attractions with real GetYourGuide widgets
  const topAttractions = [
    'great-wall-china',
    'forbidden-city',
    'terracotta-army',
    'temple-of-heaven',
    'summer-palace',
    'li-river-cruise',
    'zhangjiajie-national-park',
    'giant-panda-base',
    'potala-palace',
    'yellow-mountain'
  ].map(slug => ({
    url: `${baseUrl}/attractions/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Major cities
  const cities = [
    'beijing',
    'shanghai',
    'xian',
    'guilin',
    'chengdu',
    'lhasa',
    'hangzhou',
    'suzhou'
  ].map(city => ({
    url: `${baseUrl}/cities/${city}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Essential travel guides (high SEO value)
  const travelGuides = [
    'travel-tips',
    'best-time-to-visit',
    'cultural-guide',
    'food-dining'
  ].map(guide => ({
    url: `${baseUrl}/blog/${guide}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Static pages
  const staticPages = [
    'about',
    'contact',
    'privacy-policy',
    'terms-of-service'
  ].map(page => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.3,
  }))

  // Combine all pages with priority order for SEO
  return [
    ...highPriorityPages,
    ...seasonalContent, // Chinese New Year gets priority indexing
    ...topAttractions,
    ...cities,
    ...travelGuides,
    ...staticPages
  ]
}
