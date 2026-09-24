import Link from 'next/link'
import { Shield, AlertCircle, CheckCircle, ArrowRight, MapPin, Phone, Heart, Eye, Users, Globe } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'
import SchemaMarkup from '@/components/SchemaMarkup'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Is China Safe for Tourists? 2026 Safety Guide & Scam Alerts | Chinese Attractions',
  description: 'China safety guide 2026: real risks for tourists, common scams to avoid, health tips, emergency numbers, and why China is safer than you think.',
  keywords: [
    'is China safe for tourists',
    'China travel safety',
    'China scams tourists',
    'China safety tips',
    'tea house scam China',
    'China emergency numbers',
    'solo female travel China',
    'China health travel tips',
    'China crime rate tourists',
    'China travel warnings 2026'
  ],
  openGraph: {
    title: 'Is China Safe for Tourists? 2026 Safety Guide & Scam Alerts',
    description: 'Real risks, common scams, health tips, and emergency numbers — the honest China safety guide.',
    images: ['/china-safety-og.jpg'],
    url: '/blog/china-safety-tips-2026',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is China Safe for Tourists? 2026 Safety Guide',
    description: 'Real risks, common scams, and emergency numbers for China travel.',
    images: ['/china-safety-og.jpg']
  },
  alternates: {
    canonical: '/blog/china-safety-tips-2026'
  }
}

const scams = [
  {
    scam: 'The Tea House Scam',
    where: 'Beijing (Wangfujing), Shanghai (Nanjing Road, People\'s Square)',
    how: 'Friendly "students" invite you to practice English over tea. The bill arrives: ¥1,000-3,000 for mediocre tea. Intimidation follows if you refuse.',
    avoid: 'Never follow strangers to a second location. Real students don\'t approach tourists near major sights.'
  },
  {
    scam: 'Fake Art Student Gallery',
    where: 'Tourist areas of Beijing and Shanghai',
    how: '"Art students" invite you to their "exhibition" — a pressure-sales room for overpriced mass-produced paintings.',
    avoid: 'Same rule: unsolicited invitations near tourist sites are always sales pitches.'
  },
  {
    scam: 'Unlicensed Taxis',
    where: 'Airports, train stations, tourist sites',
    how: 'Drivers approach you inside the terminal ("taxi? taxi?") then charge 3-10x the real fare or take detours.',
    avoid: 'Use official taxi queues or Didi in Alipay/WeChat. Legitimate drivers never solicit inside terminals.'
  },
  {
    scam: 'The "Closed" Attraction',
    where: 'Forbidden City, Temple of Heaven approaches',
    how: 'Someone tells you the attraction is "closed today" and redirects you to a rickshaw tour or shop.',
    avoid: 'Check official opening status yourself. The Forbidden City posts closures on its booking page.'
  },
  {
    scam: 'Counterfeit Money Change',
    where: 'Small vendors, markets',
    how: 'Your real ¥100 bill is switched for a fake during change-making, then handed back as "your counterfeit."',
    avoid: 'Use mobile payment for small purchases — it eliminates this scam entirely.'
  }
]

const healthTips = [
  { title: 'Air quality', detail: 'Check AQI apps daily in Beijing/Xi\'an winter. N95 masks on days over 150 AQI. Most days in 2026 are moderate-to-good.' },
  { title: 'Water', detail: 'Never drink tap water. Bottled water is ¥2-5 everywhere; hotels provide it free. Ice in restaurants is factory-made and safe.' },
  { title: 'Food safety', detail: 'Street food is generally safe — choose stalls with queues and high turnover. Avoid raw vegetables at questionable places.' },
  { title: 'Pharmacies', detail: 'Bring your own medications with prescriptions. Chinese pharmacies stock different brands; language barriers complicate purchases.' },
  { title: 'Travel insurance', detail: 'Mandatory in practice — private hospitals for foreigners cost ¥800-2,000 per visit. Carry your policy number and insurer\'s China hotline.' }
]

const emergencyNumbers = [
  { service: 'Police', number: '110' },
  { service: 'Ambulance', number: '120' },
  { service: 'Fire', number: '119' },
  { service: 'Tourist hotline', number: '12301' },
  { service: 'Traffic accidents', number: '122' }
]

export default function ChinaSafetyTips() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 mr-3 text-blue-200" />
              <span className="text-blue-200 font-semibold text-lg">Updated September 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Is China Safe?
              <span className="block text-blue-200">2026 Honest Safety Guide</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Short answer: yes, remarkably safe. The real risks are scams and logistics — not crime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#scams" className="btn-primary bg-white text-blue-600 hover:bg-blue-50">
                Scam Alerts
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="#emergency" className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors border-2 border-yellow-400">
                Emergency Numbers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">The Reality: Safer Than Most Destinations</h3>
                  <p className="text-gray-700">
                    Violent crime against tourists in China is extremely rare — statistically safer than Paris, Rome, or most US cities. Solo female travelers consistently report feeling safe walking at night in major cities. The genuine risks are <strong>scams targeting tourists, traffic, and logistical hiccups</strong> — all avoidable with the knowledge below.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center bg-gradient-to-br from-blue-50 to-red-50 p-6 rounded-2xl">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Violent Crime</h3>
                <p className="text-gray-600">Extremely rare</p>
                <p className="text-sm text-green-600 mt-2">Lower than Western Europe</p>
              </div>
              <div className="text-center bg-gradient-to-br from-red-50 to-blue-50 p-6 rounded-2xl">
                <Eye className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tourist Scams</h3>
                <p className="text-gray-600">Common in tourist zones</p>
                <p className="text-sm text-amber-600 mt-2">100% avoidable — see below</p>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-50 to-red-50 p-6 rounded-2xl">
                <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Traffic</h3>
                <p className="text-gray-600">The real danger</p>
                <p className="text-sm text-red-600 mt-2">Look both ways — always</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scams */}
      <section id="scams" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The 5 Scams That Actually Target Tourists
              </h2>
              <p className="text-xl text-gray-600">
                Know these and you are effectively scam-proof
              </p>
            </div>
            <div className="space-y-6">
              {scams.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{item.scam}</h3>
                    <span className="text-sm text-red-600 bg-red-50 px-3 py-1 rounded-full">{item.where}</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">How it works:</h4>
                      <p className="text-gray-700 text-sm">{item.how}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <h4 className="font-semibold text-green-900 mb-2">How to avoid:</h4>
                      <p className="text-green-800 text-sm">{item.avoid}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Health */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Health Essentials
              </h2>
            </div>
            <div className="space-y-4">
              {healthTips.map((tip, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-6">
                  <Heart className="w-6 h-6 text-red-500 mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                    <p className="text-gray-700">{tip.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Numbers */}
      <section id="emergency" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Emergency Numbers — Save These
              </h2>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {emergencyNumbers.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{item.number}</div>
                  <div className="text-sm text-gray-600">{item.service}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <div className="flex items-start">
                <Users className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Register With Your Embassy</h3>
                  <p className="text-gray-700">
                    Enroll in your country's traveler registration program (US: STEP, UK: FCDO notification, AU: Smartraveller). Save your embassy's Beijing phone number and address offline — consular help is the real safety net if things go seriously wrong.
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
              Travel Safer with Licensed Guides
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Vetted tours eliminate scam risk at major attractions
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <GetYourGuideWidget
                locationId="189"
                widgetType="activities"
                title="China Tours & Experiences"
                description="Licensed guides and verified operators"
                className="w-full"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/attractions/great-wall-china" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2"><Link href="/attractions/great-wall-china" className="text-primary-600 font-semibold hover:underline">Great Wall</Link> Tours</h3>
                <p className="text-sm text-blue-100">Verified operators</p>
              </Link>
              <Link href="/blog/china-travel-insurance-guide-2025" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <Shield className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2">Insurance Guide</h3>
                <p className="text-sm text-blue-100">Coverage essentials</p>
              </Link>
              <Link href="/blog/china-payment-apps-guide-2026" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <Globe className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2">Payment Guide</h3>
                <p className="text-sm text-blue-100">Skip cash scams</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup for SEO */}
      <SchemaMarkup
        type="article"
        data={{
          title: "Is China Safe for Tourists? 2026 Safety Guide & Scam Alerts",
          description: "China safety guide 2026: real risks for tourists, common scams to avoid, health tips, emergency numbers, and why China is safer than you think.",
          image: "/china-safety-og.jpg",
          author: "China Travel Team",
          authorTitle: "China Travel Specialists",
          datePublished: "2026-09-22",
          dateModified: "2026-09-22",
          url: "/blog/china-safety-tips-2026",
          category: "Essential Guides",
          keywords: ["is China safe for tourists", "China travel safety", "China scams tourists", "China safety tips"],
          wordCount: 2300,
          readTime: "PT12M"
        }}
      />
      <SchemaMarkup
        type="breadcrumb"
        data={{
          breadcrumbs: [
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "China Safety Guide 2026", url: "/blog/china-safety-tips-2026" }
          ]
        }}
      />
    </div>
  )
}
