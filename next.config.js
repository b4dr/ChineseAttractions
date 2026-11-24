/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static optimization for better SEO and performance
  output: 'standalone',
  trailingSlash: true,
  
  // Image optimization for faster loading
  images: {
    unoptimized: true, // For static export compatibility
    domains: [
      'images.unsplash.com',
      'cdn.getyourguide.com',
      'media.getyourguide.com'
    ],
  },
  
  // SEO and performance optimizations
  experimental: {
    // Removed optimizeCss to avoid critters dependency issue
  },
  
  // Compression and optimization
  compress: true,
  
  // Custom headers for SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      // Legacy/wrong attraction slugs → canonical pages
      { source: '/attractions/great-wall/', destination: '/attractions/great-wall-china/', permanent: true },
      { source: '/attractions/li-river/', destination: '/attractions/li-river-cruise/', permanent: true },
      { source: '/attractions/zhangjiajie/', destination: '/attractions/zhangjiajie-national-park/', permanent: true },
      { source: '/attractions/zhangjiajie-avatar-mountains/', destination: '/attractions/zhangjiajie-national-park/', permanent: true },
      { source: '/attractions/summer-palace-beijing/', destination: '/attractions/summer-palace/', permanent: true },
      { source: '/attractions/chengdu-panda-base/', destination: '/attractions/giant-panda-base/', permanent: true },
      // No dedicated attraction page — covered by the city guides
      { source: '/attractions/the-bund-shanghai/', destination: '/cities/shanghai/', permanent: true },
      { source: '/attractions/west-lake-hangzhou/', destination: '/cities/hangzhou/', permanent: true },
      // Listed in the old sitemap but pages were never built
      { source: '/attractions/potala-palace/', destination: '/cities/', permanent: true },
      { source: '/attractions/yellow-mountain/', destination: '/attractions/', permanent: true },
      { source: '/attractions/longmen-grottoes/', destination: '/attractions/', permanent: true },
      { source: '/attractions/ming-tombs/', destination: '/cities/beijing/', permanent: true },
      { source: '/attractions/shaolin-temple/', destination: '/attractions/', permanent: true },
      { source: '/cities/lhasa/', destination: '/cities/', permanent: true },
      // Old legal slugs → current pages
      { source: '/privacy-policy/', destination: '/privacy/', permanent: true },
      { source: '/terms-of-service/', destination: '/terms/', permanent: true },
      // Blog category index pages are not implemented — send to the blog hub
      { source: '/blog/category/:slug/', destination: '/blog/', permanent: true },
    ]
  },
}

module.exports = nextConfig
