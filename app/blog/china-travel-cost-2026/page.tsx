import Link from 'next/link'
import { DollarSign, Wallet, CheckCircle, ArrowRight, MapPin, TrendingDown, Hotel, Utensils, Train, Ticket } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'
import SchemaMarkup from '@/components/SchemaMarkup'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'China Travel Cost 2026: Real Budget Breakdown Per Day | Chinese Attractions',
  description: 'How much does a China trip cost in 2026? Real daily budgets for backpackers, mid-range, and comfort travelers — hotels, food, transport, and attraction prices.',
  keywords: [
    'China travel cost',
    'China trip budget',
    'how much does China cost',
    'China daily budget',
    'China travel expenses',
    'is China expensive',
    'China backpacking budget',
    'China hotel prices',
    'China food cost',
    'China trip cost 2026'
  ],
  openGraph: {
    title: 'China Travel Cost 2026: Real Budget Breakdown Per Day',
    description: 'Real daily budgets for China travel — backpacker to comfort, with actual prices for hotels, food, trains, and attractions.',
    images: ['/china-cost-og.jpg'],
    url: '/blog/china-travel-cost-2026',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'China Travel Cost 2026: Real Budget Breakdown',
    description: 'Real daily budgets for China travel — backpacker to comfort.',
    images: ['/china-cost-og.jpg']
  },
  alternates: {
    canonical: '/blog/china-travel-cost-2026'
  }
}

const budgetTiers = [
  {
    tier: 'Backpacker',
    daily: '¥350-550 ($50-80)',
    accommodation: 'Hostel dorm ¥80-150 or budget hotel ¥180-250',
    food: 'Street food & local canteens ¥60-100/day',
    transport: 'Metro + hard-seat trains ¥30-50/day',
    activities: 'Free sights + 1 paid attraction ¥50-80/day',
    note: 'Very doable — China is one of Asia\'s best-value destinations at this level'
  },
  {
    tier: 'Mid-Range',
    daily: '¥800-1,400 ($115-200)',
    accommodation: '3-4★ hotel ¥350-600',
    food: 'Restaurant meals + coffee ¥150-250/day',
    transport: 'Metro, Didi, 2nd-class HSR ¥80-150/day',
    activities: 'All major attractions + a tour ¥150-250/day',
    note: 'The sweet spot — comfort without luxury pricing'
  },
  {
    tier: 'Comfort / Luxury',
    daily: '¥2,000-4,000+ ($290-580)',
    accommodation: '5★ international hotel ¥900-2,000',
    food: 'Top restaurants, hotel dining ¥400-700/day',
    transport: 'Private transfers, business-class rail ¥200-400/day',
    activities: 'Private guides, premium experiences ¥400-800/day',
    note: 'Still 30-40% cheaper than equivalent Japan or Europe travel'
  }
]

const attractionPrices = [
  { attraction: 'Forbidden City', price: '¥60 (Apr-Oct) / ¥40 (Nov-Mar)', note: 'Book 7 days ahead — sells out' },
  { attraction: 'Great Wall (Mutianyu)', price: '¥45 entry + ¥140 cable car', note: 'Shuttle bus ¥15 extra' },
  { attraction: 'Terracotta Army', price: '¥120', note: 'Includes shuttle to pits' },
  { attraction: 'Panda Base Chengdu', price: '¥55', note: 'Go at 7:30 AM opening' },
  { attraction: 'Shanghai Tower deck', price: '¥180', note: 'Sunset slots cost more' },
  { attraction: 'Li River cruise', price: '¥215-450', note: 'Depends on boat class' },
  { attraction: 'Zhangjiajie park', price: '¥227 (4-day pass)', note: 'Cable cars extra ¥72-118' },
  { attraction: 'Summer Palace', price: '¥30-60', note: 'Combo ticket covers all areas' }
]

const savingTips = [
  'Eat where office workers eat — a full local lunch is ¥20-40 vs ¥150+ at tourist restaurants',
  'Book trains on 12306 directly instead of agents — save ¥20-100 per ticket in fees',
  'Visit in shoulder season (March, November) — hotel prices drop 30-50% and attractions empty out',
  'Use metro day passes (¥18-20 in most cities) instead of taxis',
  'Many top sights are free: Bund, West Lake, most temples\' outer grounds, hutongs, city parks',
  'Book international hotels through their apps — member rates beat aggregators in China'
]

export default function ChinaTravelCost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Wallet className="w-8 h-8 mr-3 text-blue-200" />
              <span className="text-blue-200 font-semibold text-lg">Updated September 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              China Travel Cost
              <span className="block text-blue-200">2026 Budget Breakdown</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Real prices, not guesses. What a China trip actually costs per day at every budget level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#budgets" className="btn-primary bg-white text-blue-600 hover:bg-blue-50">
                Daily Budgets
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="#prices" className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors border-2 border-yellow-400">
                Attraction Prices
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
              <div className="flex items-start">
                <DollarSign className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">The Short Answer</h3>
                  <p className="text-gray-700">
                    A comfortable 2-week China trip costs <strong>$1,600-2,800 per person</strong> excluding international flights — mid-range hotels, restaurant meals, high-speed trains, and all major attractions included. Backpackers do it for $700-1,100. China remains significantly cheaper than Japan, South Korea, or Western Europe for equivalent experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Tiers */}
      <section id="budgets" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Daily Budget by Travel Style
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {budgetTiers.map((tier, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.tier}</h3>
                  <p className="text-blue-600 font-mono font-bold text-lg mb-6">{tier.daily}/day</p>
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex items-center text-sm font-semibold text-gray-900 mb-1">
                        <Hotel className="w-4 h-4 mr-2 text-blue-600" /> Stay
                      </div>
                      <p className="text-sm text-gray-600">{tier.accommodation}</p>
                    </div>
                    <div>
                      <div className="flex items-center text-sm font-semibold text-gray-900 mb-1">
                        <Utensils className="w-4 h-4 mr-2 text-red-600" /> Food
                      </div>
                      <p className="text-sm text-gray-600">{tier.food}</p>
                    </div>
                    <div>
                      <div className="flex items-center text-sm font-semibold text-gray-900 mb-1">
                        <Train className="w-4 h-4 mr-2 text-green-600" /> Transport
                      </div>
                      <p className="text-sm text-gray-600">{tier.transport}</p>
                    </div>
                    <div>
                      <div className="flex items-center text-sm font-semibold text-gray-900 mb-1">
                        <Ticket className="w-4 h-4 mr-2 text-purple-600" /> Activities
                      </div>
                      <p className="text-sm text-gray-600">{tier.activities}</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-blue-800 bg-blue-50 p-3 rounded-lg">{tier.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Attraction Prices */}
      <section id="prices" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Real Attraction Prices 2026
              </h2>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              {attractionPrices.map((item, index) => (
                <div key={index} className={`p-5 ${index !== attractionPrices.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-blue-50/50 transition-colors`}>
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div className="font-bold text-gray-900">{item.attraction}</div>
                    <div className="text-blue-600 font-mono font-semibold">{item.price}</div>
                    <div className="text-gray-600 text-sm">{item.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Saving Tips */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                6 Ways to Cut Costs
              </h2>
            </div>
            <div className="space-y-4">
              {savingTips.map((tip, index) => (
                <div key={index} className="flex items-start bg-white rounded-xl p-5 shadow-sm">
                  <TrendingDown className="w-5 h-5 text-green-600 mr-4 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book Tours Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Spend Smart on Experiences
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Tours with free cancellation — lock in prices now, decide later
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <GetYourGuideWidget
                locationId="189"
                widgetType="activities"
                title="China Tours & Experiences"
                description="Best-value tours and skip-the-line tickets"
                className="w-full"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/attractions/great-wall-china" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2"><Link href="/attractions/great-wall-china" className="text-primary-600 font-semibold hover:underline">Great Wall</Link> Tours</h3>
                <p className="text-sm text-blue-100">From budget to private</p>
              </Link>
              <Link href="/blog/china-itinerary-2-weeks-2026" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <CheckCircle className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2">2-Week Itinerary</h3>
                <p className="text-sm text-blue-100">Optimized route</p>
              </Link>
              <Link href="/blog/china-payment-apps-guide-2026" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <Wallet className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2">Payment Guide</h3>
                <p className="text-sm text-blue-100">Avoid the 3% fee trap</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup for SEO */}
      <SchemaMarkup
        type="article"
        data={{
          title: "China Travel Cost 2026: Real Budget Breakdown Per Day",
          description: "How much does a China trip cost in 2026? Real daily budgets for backpackers, mid-range, and comfort travelers — hotels, food, transport, and attraction prices.",
          image: "/china-cost-og.jpg",
          author: "China Travel Team",
          authorTitle: "China Travel Specialists",
          datePublished: "2026-09-22",
          dateModified: "2026-09-22",
          url: "/blog/china-travel-cost-2026",
          category: "Travel Planning",
          keywords: ["China travel cost", "China trip budget", "how much does China cost", "China daily budget"],
          wordCount: 2100,
          readTime: "PT11M"
        }}
      />
      <SchemaMarkup
        type="breadcrumb"
        data={{
          breadcrumbs: [
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "China Travel Cost 2026", url: "/blog/china-travel-cost-2026" }
          ]
        }}
      />
    </div>
  )
}
