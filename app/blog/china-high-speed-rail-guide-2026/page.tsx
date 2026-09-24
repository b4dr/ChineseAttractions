import Link from 'next/link'
import { Train, Clock, CheckCircle, AlertCircle, ArrowRight, MapPin, Ticket, Luggage, CreditCard, Users } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'
import SchemaMarkup from '@/components/SchemaMarkup'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'China High-Speed Rail Guide 2026: Booking, Stations & Tips | Chinese Attractions',
  description: 'How to ride China\'s high-speed trains in 2026: book tickets as a foreigner on Trip.com or 12306, navigate stations, choose seat classes, and avoid common mistakes.',
  keywords: [
    'China high speed rail',
    'China train booking foreigners',
    '12306 app English',
    'Trip.com train tickets',
    'Beijing to Shanghai train',
    'China bullet train',
    'China rail pass',
    'gaotie guide',
    'China train travel tips',
    'China high speed train 2026'
  ],
  openGraph: {
    title: 'China High-Speed Rail Guide 2026: Booking, Stations & Tips',
    description: 'Book China bullet train tickets as a foreigner — the complete guide to classes, stations, and boarding.',
    images: ['/china-rail-og.jpg'],
    url: '/blog/china-high-speed-rail-guide-2026',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'China High-Speed Rail Guide 2026: Booking, Stations & Tips',
    description: 'Book China bullet train tickets as a foreigner — complete guide.',
    images: ['/china-rail-og.jpg']
  },
  alternates: {
    canonical: '/blog/china-high-speed-rail-guide-2026'
  }
}

const seatClasses = [
  {
    class: 'Second Class (二等座)',
    price: '¥553 Beijing→Shanghai',
    layout: '3+2 seats',
    comfort: 'Comfortable, like premium economy airline',
    verdict: 'Best value — what most travelers should book'
  },
  {
    class: 'First Class (一等座)',
    price: '¥933 Beijing→Shanghai',
    layout: '2+2 seats, wider',
    comfort: 'More legroom, quieter cars, free water',
    verdict: 'Worth it for trips over 4 hours'
  },
  {
    class: 'Business Class (商务座)',
    price: '¥1,748 Beijing→Shanghai',
    layout: '1+2 lie-flat pods',
    comfort: 'Fully flat seats, meals, lounge access at major stations',
    verdict: 'Cheaper than flying business — a fun splurge once'
  }
]

const bookingChannels = [
  {
    channel: 'Trip.com (English)',
    difficulty: 'Easiest',
    fee: '~¥20-40 service fee',
    notes: 'Full English interface, foreign cards accepted, e-ticket sent to app. The default choice for tourists.'
  },
  {
    channel: '12306 Official App',
    difficulty: 'Moderate',
    fee: 'No fee',
    notes: 'Now has English mode and accepts foreign cards. Cheapest option but registration requires passport verification.'
  },
  {
    channel: 'Station Ticket Window',
    difficulty: 'Hard',
    fee: 'No fee',
    notes: 'Passport required, queues are long, staff rarely speak English. Only for emergencies or same-day changes.'
  },
  {
    channel: 'Hotel Concierge / Agent',
    difficulty: 'Easy',
    fee: '¥50-100 markup',
    notes: 'Good fallback if apps fail. Confirm the ticket is in your name with your passport number.'
  }
]

const popularRoutes = [
  { route: 'Beijing → Shanghai', time: '4.5-6 hrs', price: '¥553-1,748', tip: 'G-trains on the Jinghu line — the world\'s busiest HSR corridor' },
  { route: 'Beijing → Xi\'an', time: '4.5-5.5 hrs', price: '¥515-1,627', tip: 'Perfect for a Terracotta Army side trip' },
  { route: 'Shanghai → Hangzhou', time: '45-60 min', price: '¥73-220', tip: 'Easy day trip to West Lake' },
  { route: 'Guangzhou → Hong Kong', time: '47-60 min', price: '¥215-645', tip: 'West Kowloon station — immigration on arrival' },
  { route: 'Chengdu → Chongqing', time: '1-1.5 hrs', price: '¥154-462', tip: 'Pandas in the morning, hotpot at night' },
  { route: 'Shanghai → Beijing (overnight)', time: '12 hrs', price: '¥690-1,400 sleeper', tip: 'D-train soft sleeper — save a hotel night' }
]

const stationTips = [
  'Arrive 45-60 minutes early — stations are airport-scale with security checks and ticket gates',
  'Your passport IS your ticket — scan it at the manual gates (look for the lane with staff)',
  'Departure boards show train number, not destination — match your G/D/C number from the booking',
  'Gates close 3-5 minutes before departure — trains leave exactly on time',
  'Large stations have multiple entrances — check your ticket for the correct waiting hall number',
  'Food inside stations is overpriced — buy snacks before security or onboard from the trolley'
]

export default function ChinaHighSpeedRailGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Train className="w-8 h-8 mr-3 text-blue-200" />
              <span className="text-blue-200 font-semibold text-lg">Updated September 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              China High-Speed Rail
              <span className="block text-blue-200">2026 Complete Guide</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              45,000 km of bullet trains at 350 km/h. Better than flying — if you know how to book and board.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#booking" className="btn-primary bg-white text-blue-600 hover:bg-blue-50">
                How to Book
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="#routes" className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors border-2 border-yellow-400">
                Popular Routes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Train Over Plane */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
              <div className="flex items-start">
                <Train className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Why Trains Beat Planes in China</h3>
                  <p className="text-gray-700">
                    Beijing to Shanghai: 4.5 hours city-center to city-center, no airport transfers, no 2-hour security buffer, no flight delays from air-traffic control. For any route under 1,200 km, the train is faster door-to-door — and the views of rural China are a bonus attraction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seat Classes */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Seat Classes Explained
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {seatClasses.map((seat, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{seat.class}</h3>
                  <p className="text-blue-600 font-mono font-bold mb-4">{seat.price}</p>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Layout:</span>
                      <span className="font-medium text-gray-900">{seat.layout}</span>
                    </div>
                    <p className="text-sm text-gray-600">{seat.comfort}</p>
                  </div>
                  <p className="text-sm font-semibold text-blue-800 bg-blue-50 p-3 rounded-lg">{seat.verdict}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Channels */}
      <section id="booking" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How to Book as a Foreigner
              </h2>
              <p className="text-xl text-gray-600">
                Tickets open 15 days before departure — popular routes sell out
              </p>
            </div>
            <div className="space-y-6">
              {bookingChannels.map((channel, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-6">
                  <div className="flex flex-wrap items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{channel.channel}</h3>
                    <div className="flex gap-3">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{channel.difficulty}</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">{channel.fee}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{channel.notes}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Book Early for Holidays</h3>
                  <p className="text-gray-700">
                    Golden Week (Oct 1-7), Chinese New Year, and summer weekends sell out within minutes of the 15-day window opening. Set a reminder and book the moment tickets release — or pay an agent to grab them for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section id="routes" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Popular Tourist Routes
              </h2>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {popularRoutes.map((route, index) => (
                <div key={index} className={`p-6 ${index !== popularRoutes.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-blue-50/50 transition-colors`}>
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div className="font-bold text-gray-900">{route.route}</div>
                    <div className="text-gray-600"><Clock className="w-4 h-4 inline mr-1" />{route.time}</div>
                    <div className="text-blue-600 font-medium">{route.price}</div>
                    <div className="text-gray-600 text-sm">{route.tip}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Station Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Station Survival Tips
              </h2>
            </div>
            <div className="space-y-4">
              {stationTips.map((tip, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-5">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-4 mt-0.5 flex-shrink-0" />
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
              Arrive in Style, Explore with Experts
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Book guided tours at every stop on your rail itinerary
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <GetYourGuideWidget
                locationId="189"
                widgetType="activities"
                title="China Tours & Experiences"
                description="Book tours in Beijing, Xi'an, Shanghai and beyond"
                className="w-full"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/attractions/terracotta-army" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2"><Link href="/cities/xian" className="text-primary-600 font-semibold hover:underline">Xi'an</Link> Day Trip</h3>
                <p className="text-sm text-blue-100"><Link href="/attractions/terracotta-army" className="text-primary-600 font-semibold hover:underline">Terracotta Army</Link> tours</p>
              </Link>
              <Link href="/blog/china-itinerary-2-weeks-2026" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <Ticket className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2">2-Week Itinerary</h3>
                <p className="text-sm text-blue-100">Rail-based route plan</p>
              </Link>
              <Link href="/cities/beijing" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <Users className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2"><Link href="/cities/beijing" className="text-primary-600 font-semibold hover:underline">Beijing</Link> Guide</h3>
                <p className="text-sm text-blue-100">Imperial capital</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup for SEO */}
      <SchemaMarkup
        type="article"
        data={{
          title: "China High-Speed Rail Guide 2026: Booking, Stations & Tips",
          description: "How to ride China's high-speed trains in 2026: book tickets as a foreigner on Trip.com or 12306, navigate stations, choose seat classes, and avoid common mistakes.",
          image: "/china-rail-og.jpg",
          author: "China Travel Team",
          authorTitle: "China Travel Specialists",
          datePublished: "2026-09-22",
          dateModified: "2026-09-22",
          url: "/blog/china-high-speed-rail-guide-2026",
          category: "Travel Planning",
          keywords: ["China high speed rail", "China train booking foreigners", "12306 English", "Beijing Shanghai train"],
          wordCount: 2400,
          readTime: "PT13M"
        }}
      />
      <SchemaMarkup
        type="breadcrumb"
        data={{
          breadcrumbs: [
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "China High-Speed Rail Guide 2026", url: "/blog/china-high-speed-rail-guide-2026" }
          ]
        }}
      />
    </div>
  )
}
