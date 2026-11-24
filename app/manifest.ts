import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chinese Attractions',
    short_name: 'China Attractions',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    theme_color: '#0b4a46',
    background_color: '#faf6ee',
    display: 'standalone',
  }
}
