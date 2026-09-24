import Link from 'next/link'
import { Wifi, Smartphone, Shield, CheckCircle, AlertCircle, ArrowRight, MapPin, Globe, Signal, Lock } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'
import SchemaMarkup from '@/components/SchemaMarkup'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'China eSIM & VPN Guide 2026: Internet Access for Tourists | Chinese Attractions',
  description: 'How to get internet in China in 2026: best eSIMs with built-in VPN, which VPNs still work, what is blocked, and the setup to do before you fly.',
  keywords: [
    'China eSIM',
    'China VPN 2026',
    'internet in China',
    'best VPN for China',
    'China tourist SIM card',
    'Great Firewall bypass',
    'Google in China',
    'WhatsApp in China',
    'China eSIM tourist',
    'does Instagram work in China'
  ],
  openGraph: {
    title: 'China eSIM & VPN Guide 2026: Internet Access for Tourists',
    description: 'Best eSIMs with built-in VPN, which VPNs still work, and exactly what to set up before flying to China.',
    images: ['/china-esim-vpn-og.jpg'],
    url: '/blog/china-esim-vpn-guide-2026',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'China eSIM & VPN Guide 2026: Internet Access for Tourists',
    description: 'Best eSIMs with built-in VPN and what to set up before flying to China.',
    images: ['/china-esim-vpn-og.jpg']
  },
  alternates: {
    canonical: '/blog/china-esim-vpn-guide-2026'
  }
}

const blockedServices = [
  { service: 'Google (Search, Maps, Gmail)', status: 'Blocked', workaround: 'VPN or eSIM with built-in routing' },
  { service: 'WhatsApp, Messenger, Telegram', status: 'Blocked', workaround: 'VPN required; WeChat is the local alternative' },
  { service: 'Instagram, Facebook, X', status: 'Blocked', workaround: 'VPN required' },
  { service: 'YouTube, Netflix', status: 'Blocked', workaround: 'VPN required (Netflix has no China library)' },
  { service: 'Apple iMessage & FaceTime', status: 'Works', workaround: 'Apple services function normally' },
  { service: 'Microsoft (Outlook, Teams)', status: 'Works', workaround: 'Generally accessible' }
]

const esimOptions = [
  {
    provider: 'eSIM with built-in VPN routing',
    price: '$5-15 for 5-10GB',
    pros: 'No separate VPN needed — traffic routes through Hong Kong/Singapore automatically',
    cons: 'Slightly higher latency',
    verdict: 'Best option for most tourists — zero configuration, everything just works'
  },
  {
    provider: 'Standard travel eSIM + separate VPN',
    price: '$4-10 eSIM + $5-13/mo VPN',
    pros: 'Faster speeds, more VPN server choice',
    cons: 'Two things to configure; VPN apps must be installed before arrival',
    verdict: 'Best for heavy users and remote workers'
  },
  {
    provider: 'Local Chinese SIM',
    price: '¥100-200 for tourist packages',
    pros: 'Cheapest data, local phone number',
    cons: 'Still behind the Great Firewall — needs VPN anyway; requires passport registration',
    verdict: 'Only worth it for stays over 3-4 weeks'
  },
  {
    provider: 'Home carrier roaming',
    price: '$5-15/day typical',
    pros: 'Zero setup; roaming traffic bypasses the Firewall on most carriers',
    cons: 'Expensive for trips over a few days',
    verdict: 'Good for 2-3 day trips; check if your carrier routes via home country'
  }
]

const vpnTips = [
  'Install and test your VPN before boarding — VPN app stores and websites are blocked inside China',
  'Download offline maps (Google Maps offline areas or Maps.me) — Maps works poorly even with VPN',
  'Enable your VPN\'s "obfuscated" or "stealth" protocol — standard protocols get detected and throttled',
  'Have two VPNs installed — when one gets blocked during sensitive periods, the other usually works',
  'iMessage and FaceTime work without VPN — tell family to use those instead of WhatsApp'
]

export default function ChinaEsimVpnGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Wifi className="w-8 h-8 mr-3 text-blue-200" />
              <span className="text-blue-200 font-semibold text-lg">Updated September 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              China eSIM & VPN
              <span className="block text-blue-200">2026 Tourist Guide</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Google, WhatsApp, and Instagram are blocked. Here is exactly how to stay connected — set up before you fly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#options" className="btn-primary bg-white text-blue-600 hover:bg-blue-50">
                Compare Options
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="#blocked" className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors border-2 border-yellow-400">
                What Is Blocked
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Warning */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Do This Before You Board</h3>
                  <p className="text-gray-700">
                    VPN apps cannot be downloaded inside China — the App Store and Play Store remove them, and VPN websites are blocked. Whatever you need must be installed, configured, and tested before departure. This is the single most common connectivity mistake tourists make.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Blocked */}
      <section id="blocked" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Is Blocked in China
              </h2>
              <p className="text-xl text-gray-600">
                The Great Firewall affects more than social media
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {blockedServices.map((item, index) => (
                <div key={index} className={`p-6 ${index !== blockedServices.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div className="font-bold text-gray-900">{item.service}</div>
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${item.status === 'Blocked' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="text-gray-600 text-sm">{item.workaround}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connection Options */}
      <section id="options" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your 4 Connection Options
              </h2>
              <p className="text-xl text-gray-600">
                Ranked by convenience for a typical 1-2 week trip
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {esimOptions.map((option, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{option.provider}</h3>
                  <p className="text-blue-600 font-mono font-bold mb-4">{option.price}</p>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{option.pros}</p>
                    </div>
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{option.cons}</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-blue-800 bg-white/70 p-3 rounded-lg">{option.verdict}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VPN Tips */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                VPN Survival Rules
              </h2>
            </div>
            <div className="space-y-4">
              {vpnTips.map((tip, index) => (
                <div key={index} className="flex items-start bg-white rounded-xl p-5 shadow-sm">
                  <Lock className="w-5 h-5 text-blue-600 mr-4 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <div className="flex items-start">
                <Signal className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">The Easiest 2026 Setup</h3>
                  <p className="text-gray-700">
                    Buy a travel eSIM that routes through Hong Kong or Singapore (several providers offer "China-friendly" eSIMs with this built in). Your phone treats it as foreign traffic — Google, WhatsApp, and Instagram work with zero VPN configuration. Install it at home, activate on landing, done.
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
              Connected? Now Book the Fun Part
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Top-rated tours and experiences across China
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <GetYourGuideWidget
                locationId="189"
                widgetType="activities"
                title="China Tours & Experiences"
                description="Book skip-the-line tickets and guided tours"
                className="w-full"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/attractions/great-wall-china" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2"><Link href="/attractions/great-wall-china" className="text-primary-600 font-semibold hover:underline">Great Wall</Link> Tours</h3>
                <p className="text-sm text-blue-100">Skip-the-line access</p>
              </Link>
              <Link href="/blog/china-payment-apps-guide-2026" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <Smartphone className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2">Payment Guide</h3>
                <p className="text-sm text-blue-100">Alipay & WeChat setup</p>
              </Link>
              <Link href="/cities/shanghai" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <Globe className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2"><Link href="/cities/shanghai" className="text-primary-600 font-semibold hover:underline">Shanghai</Link> Guide</h3>
                <p className="text-sm text-blue-100">Where East meets West</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup for SEO */}
      <SchemaMarkup
        type="article"
        data={{
          title: "China eSIM & VPN Guide 2026: Internet Access for Tourists",
          description: "How to get internet in China in 2026: best eSIMs with built-in VPN, which VPNs still work, what is blocked, and the setup to do before you fly.",
          image: "/china-esim-vpn-og.jpg",
          author: "China Travel Team",
          authorTitle: "China Travel Specialists",
          datePublished: "2026-09-22",
          dateModified: "2026-09-22",
          url: "/blog/china-esim-vpn-guide-2026",
          category: "Essential Guides",
          keywords: ["China eSIM", "China VPN 2026", "internet in China", "best VPN for China"],
          wordCount: 2000,
          readTime: "PT11M"
        }}
      />
      <SchemaMarkup
        type="breadcrumb"
        data={{
          breadcrumbs: [
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "China eSIM & VPN Guide 2026", url: "/blog/china-esim-vpn-guide-2026" }
          ]
        }}
      />
    </div>
  )
}
