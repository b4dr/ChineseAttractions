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
    optimizeCss: true,
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
    ]
  },
}

module.exports = nextConfig
