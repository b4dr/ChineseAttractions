import type { Metadata } from 'next'
import { Lora, Playfair_Display } from 'next/font/google'
import './globals.css'
import './mobile-optimizations.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Analytics } from '@/components/Analytics'
import StickyAffiliateBar from '@/components/StickyAffiliateBar'
import ExitIntentPopup from '@/components/ExitIntentPopup'

const lora = Lora({ subsets: ['latin'], variable: '--font-body' })
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
    // og image served by app/opengraph-image.jpg convention
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chinese Attractions | Discover Amazing Places in China',
    description: 'Discover the most amazing tourist attractions in China. From the Great Wall to the Forbidden City, find and book unforgettable experiences.',
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
    <html lang="en" className={`${lora.variable} ${playfair.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="linkavista" content="link-2130-3950" />
        <title>Chinese Attractions - Discover China&apos;s Wonders</title>
        <meta name="description" content="Explore the best attractions and destinations in China for 2025. Plan your trip with our expert travel guides and book tours with GetYourGuide." />
        {/* Icons, apple-touch-icon, manifest and OG image are auto-injected
            by app/ file conventions (icon.svg, favicon.ico, apple-icon.png,
            manifest.ts, opengraph-image.jpg) — public/ is gitignored. */}
      </head>
      <body className="min-h-screen bg-paper-50 font-sans antialiased">
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>

        <StickyAffiliateBar />
        <ExitIntentPopup />
        <Analytics />
      </body>
    </html>
  )
}
