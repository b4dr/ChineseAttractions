import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Analytics } from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: {
    default: 'Chinese Attractions | Discover Amazing Places in China',
    template: '%s | Chinese Attractions'
  },
  description: 'Discover the most amazing tourist attractions in China. From the Great Wall to the Forbidden City, find and book unforgettable experiences with our comprehensive travel guide.',
  keywords: [
    'China attractions',
    'Chinese tourism',
    'Great Wall tours',
    'Forbidden City',
    'Beijing attractions',
    'Shanghai tours',
    'China travel guide',
    'Chinese landmarks',
    'China sightseeing',
    'China vacation'
  ],
  authors: [{ name: 'Chinese Attractions' }],
  creator: 'Chinese Attractions',
  publisher: 'Chinese Attractions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chineseattractions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chineseattractions.com',
    title: 'Chinese Attractions | Discover Amazing Places in China',
    description: 'Discover the most amazing tourist attractions in China. From the Great Wall to the Forbidden City, find and book unforgettable experiences.',
    siteName: 'Chinese Attractions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chinese Attractions - Discover Amazing Places in China',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chinese Attractions | Discover Amazing Places in China',
    description: 'Discover the most amazing tourist attractions in China. From the Great Wall to the Forbidden City, find and book unforgettable experiences.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
