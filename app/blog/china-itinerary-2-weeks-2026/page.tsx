import Link from 'next/link'
import { Calendar, MapPin, CheckCircle, ArrowRight, Train, Camera, Clock, Star, Compass } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'
import SchemaMarkup from '@/components/SchemaMarkup'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perfect 2-Week China Itinerary 2026: Beijing, Xi\'an, Shanghai & More | Chinese Attractions',
  description: 'The ultimate 14-day China itinerary for 2026: Beijing, Xi\'an, Chengdu, Guilin, and Shanghai with day-by-day plans, train routes, and booking tips.',
  keywords: [
    'China itinerary 2 weeks',
    '14 days in China',
    'China travel itinerary',
    'Beijing Xi\'an Shanghai itinerary',
    'China first time itinerary',
    'two weeks in China',
    'China trip planner',
    'best China route',
    'China itinerary 2026',
    'classic China tour route'
  ],
  openGraph: {
    title: 'Perfect 2-Week China Itinerary 2026: Beijing, Xi\'an, Shanghai & More',
    description: 'Day-by-day 14-day China itinerary covering the Golden Triangle plus pandas and karst landscapes.',
    images: ['/china-itinerary-og.jpg'],
    url: '/blog/china-itinerary-2-weeks-2026',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perfect 2-Week China Itinerary 2026',
    description: 'Day-by-day 14-day China itinerary covering the Golden Triangle plus pandas and karst landscapes.',
    images: ['/china-itinerary-og.jpg']
  },
  alternates: {
    canonical: '/blog/china-itinerary-2-weeks-2026'
  }
}

const itinerary = [
  {
    days: 'Days 1-4',
    city: 'Beijing',
    highlights: ['Forbidden City (book 7 days ahead)', 'Great Wall at Mutianyu', 'Temple of Heaven at dawn', 'Hutong food tour', 'Summer Palace'],
    transport: 'Arrive PEK/PKX airport',
    tip: 'Do the Great Wall on day 2 while jet lag wakes you early — you will beat the crowds'
  },
  {
    days: 'Days 5-6',
    city: 'Xi\'an',
    highlights: ['Terracotta Army (morning slot)', 'City Wall bike ride', 'Muslim Quarter street food', 'Big Wild Goose Pagoda'],
    transport: 'High-speed train from Beijing, 4.5-5.5 hrs',
    tip: 'Book Terracotta Army entry for 8:30 AM — tour buses arrive at 10'
  },
  {
    days: 'Days 7-8',
    city: 'Chengdu',
    highlights: ['Giant Panda Base (arrive at 7:30 AM opening)', 'People\'s Park teahouse', 'Sichuan hotpot dinner', 'Jinli Ancient Street'],
    transport: 'High-speed train from Xi\'an, 3-4 hrs',
    tip: 'Pandas are active only in early morning — afternoon visits see sleeping lumps'
  },
  {
    days: 'Days 9-11',
    city: 'Guilin & Yangshuo',
    highlights: ['Li River cruise to Yangshuo', 'West Street evening', 'Yulong River bamboo raft', 'Xianggong Mountain sunrise', 'Longji rice terraces day trip'],
    transport: 'Flight from Chengdu (2 hrs) or train via Guangzhou',
    tip: 'Stay in Yangshuo, not Guilin city — the scenery is in Yangshuo'
  },
  {
    days: 'Days 12-14',
    city: 'Shanghai',
    highlights: ['The Bund at sunset', 'Yu Garden & old town', 'French Concession walk', 'Shanghai Tower observation deck', 'Zhujiajiao water town half-day'],
    transport: 'Flight from Guilin, 2.5 hrs',
    tip: 'See the Bund from both sides — Puxi promenade at dusk, then Pudong rooftop bar after dark'
  }
]

const planningTips = [
  { title: 'Book the big three first', detail: 'Forbidden City, Terracotta Army, and Panda Base all require advance online booking with timed entry. Reserve before booking hotels.' },
  { title: 'Trains over domestic flights', detail: 'Beijing→Xi\'an and Xi\'an→Chengdu are perfect rail journeys. Only fly Chengdu→Guilin and Guilin→Shanghai.' },
  { title: 'Build in a buffer day', detail: 'This itinerary has slack. If a day goes sideways (weather, closures), steal time from Shanghai, not Beijing.' },
  { title: 'Avoid Golden Week', detail: 'Oct 1-7 and Chinese New Year make this route miserable. April-May and September-October (post-holiday) are ideal.' },
  { title: 'Visa-free check first', detail: 'Many nationalities now get 30-day visa-free entry — verify your passport qualifies before paying for a visa.' }
]

export default function ChinaItinerary2Weeks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Compass className="w-8 h-8 mr-3 text-blue-200" />
              <span className="text-blue-200 font-semibold text-lg">Updated September 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              2 Weeks in China
              <span className="block text-blue-200">The Perfect 2026 Itinerary</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Beijing → Xi'an → Chengdu → Guilin → Shanghai. The classic route, optimized day by day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#itinerary" className="btn-primary bg-white text-blue-600 hover:bg-blue-50">
                Day-by-Day Plan
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="#tips" className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors border-2 border-yellow-400">
                Planning Tips
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Route Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Route at a Glance
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Five cities, two flights, two scenic train rides — covering imperial history, pandas, karst mountains, and modern China
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 text-lg font-semibold">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full"><Link href="/cities/beijing" className="text-primary-600 font-semibold hover:underline">Beijing</Link> (4d)</span>
              <Train className="w-5 h-5 text-gray-400" />
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full"><Link href="/cities/xian" className="text-primary-600 font-semibold hover:underline">Xi'an</Link> (2d)</span>
              <Train className="w-5 h-5 text-gray-400" />
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full"><Link href="/cities/chengdu" className="text-primary-600 font-semibold hover:underline">Chengdu</Link> (2d)</span>
              <span className="text-gray-400">✈</span>
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full"><Link href="/cities/guilin" className="text-primary-600 font-semibold hover:underline">Guilin</Link> (3d)</span>
              <span className="text-gray-400">✈</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full"><Link href="/cities/shanghai" className="text-primary-600 font-semibold hover:underline">Shanghai</Link> (3d)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Day-by-Day Itinerary */}
      <section id="itinerary" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Day-by-Day Breakdown
              </h2>
            </div>
            <div className="space-y-8">
              {itinerary.map((stop, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <div>
                      <span className="text-blue-600 font-bold text-sm uppercase tracking-wide">{stop.days}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{stop.city}</h3>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{stop.transport}</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Must-do highlights:</h4>
                      <ul className="space-y-2">
                        {stop.highlights.map((h, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                        <Star className="w-4 h-4 mr-2" /> Insider tip
                      </h4>
                      <p className="text-blue-800 text-sm">{stop.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planning Tips */}
      <section id="tips" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                5 Rules for This Itinerary
              </h2>
            </div>
            <div className="space-y-4">
              {planningTips.map((tip, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-6">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                    <p className="text-gray-700">{tip.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Only Have 10 Days?</h3>
                  <p className="text-gray-700">
                    Cut Guilin/Yangshuo and fly Chengdu→Shanghai direct. You lose the karst landscapes but keep the essential Golden Triangle plus pandas. Alternatively, drop Chengdu and keep Guilin if scenery beats pandas for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Tours Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book Every Stop on This Route
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Skip-the-line tickets and local guides for all five cities
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <GetYourGuideWidget
                locationId="189"
                widgetType="activities"
                title="China Tours & Experiences"
                description="Book tours for every stop on this itinerary"
                className="w-full"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/attractions/great-wall-china" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2"><Link href="/attractions/great-wall-china" className="text-primary-600 font-semibold hover:underline">Great Wall</Link> Tours</h3>
                <p className="text-sm text-blue-100">Day 2 essential</p>
              </Link>
              <Link href="/attractions/terracotta-army" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <Camera className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2"><Link href="/attractions/terracotta-army" className="text-primary-600 font-semibold hover:underline">Terracotta Army</Link></h3>
                <p className="text-sm text-blue-100">Day 5 highlight</p>
              </Link>
              <Link href="/blog/china-high-speed-rail-guide-2026" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <Train className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2">Rail Guide</h3>
                <p className="text-sm text-blue-100">Book your trains</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup for SEO */}
      <SchemaMarkup
        type="article"
        data={{
          title: "Perfect 2-Week China Itinerary 2026: Beijing, Xi'an, Shanghai & More",
          description: "The ultimate 14-day China itinerary for 2026: Beijing, Xi'an, Chengdu, Guilin, and Shanghai with day-by-day plans, train routes, and booking tips.",
          image: "/china-itinerary-og.jpg",
          author: "China Travel Team",
          authorTitle: "China Travel Specialists",
          datePublished: "2026-09-22",
          dateModified: "2026-09-22",
          url: "/blog/china-itinerary-2-weeks-2026",
          category: "Travel Planning",
          keywords: ["China itinerary 2 weeks", "14 days in China", "China travel itinerary", "Beijing Xi'an Shanghai"],
          wordCount: 2600,
          readTime: "PT14M"
        }}
      />
      <SchemaMarkup
        type="breadcrumb"
        data={{
          breadcrumbs: [
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "2-Week China Itinerary 2026", url: "/blog/china-itinerary-2-weeks-2026" }
          ]
        }}
      />
    </div>
  )
}
