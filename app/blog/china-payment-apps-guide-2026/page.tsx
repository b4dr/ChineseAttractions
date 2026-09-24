import Link from 'next/link'
import { Smartphone, CreditCard, CheckCircle, AlertCircle, ArrowRight, MapPin, Shield, Wallet, QrCode, Globe } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'
import SchemaMarkup from '@/components/SchemaMarkup'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'China Payment Apps Guide 2026: Alipay & WeChat Pay for Tourists | Chinese Attractions',
  description: 'How to pay in China as a tourist in 2026: set up Alipay and WeChat Pay with foreign cards, where cash still works, and the payment mistakes to avoid.',
  keywords: [
    'China payment apps',
    'Alipay for tourists',
    'WeChat Pay foreigners',
    'paying in China',
    'China cashless payment',
    'Alipay foreign card',
    'WeChat Pay tourist setup',
    'China travel money',
    'does China accept credit cards',
    'China payment guide 2026'
  ],
  openGraph: {
    title: 'China Payment Apps Guide 2026: Alipay & WeChat Pay for Tourists',
    description: 'Set up Alipay and WeChat Pay with your foreign card before you land. The complete tourist payment guide for China.',
    images: ['/china-payment-apps-og.jpg'],
    url: '/blog/china-payment-apps-guide-2026',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'China Payment Apps Guide 2026: Alipay & WeChat Pay for Tourists',
    description: 'Set up Alipay and WeChat Pay with your foreign card before you land.',
    images: ['/china-payment-apps-og.jpg']
  },
  alternates: {
    canonical: '/blog/china-payment-apps-guide-2026'
  }
}

const paymentApps = [
  {
    app: 'Alipay (支付宝)',
    difficulty: 'Easiest for tourists',
    foreignCards: 'Visa, Mastercard, Amex, JCB',
    verification: 'Passport scan + phone number',
    limits: '¥50,000/year without full verification',
    bestFor: 'Everything: restaurants, metro, taxis, shops, attractions',
    tips: 'Download the international version — it has English UI and a built-in TourCard mini-app for backup payments'
  },
  {
    app: 'WeChat Pay (微信支付)',
    difficulty: 'Moderate',
    foreignCards: 'Visa, Mastercard, JCB',
    verification: 'Passport + real-name verification',
    limits: 'Varies; full verification raises limits',
    bestFor: 'WeChat ecosystem: mini-programs, restaurant ordering, transfers',
    tips: 'Many restaurant menus and queue systems live inside WeChat mini-programs — having it unlocks more than payments'
  },
  {
    app: 'Cash (RMB)',
    difficulty: 'Declining acceptance',
    foreignCards: 'N/A',
    verification: 'None',
    limits: 'ATMs widely available in cities',
    bestFor: 'Backup, rural areas, small vendors, tipping-free transactions',
    tips: 'Legally all merchants must accept cash, but many small vendors struggle to make change — carry small bills'
  }
]

const setupSteps = [
  {
    step: 1,
    title: 'Download Before You Fly',
    description: 'Install Alipay (international version) and WeChat from your home app store. Registration requires SMS verification — much easier on your home number before departure.',
    icon: Smartphone
  },
  {
    step: 2,
    title: 'Verify Your Identity',
    description: 'Both apps require passport verification for foreign users. Scan your passport photo page and take a selfie. Approval is usually instant to 24 hours.',
    icon: Shield
  },
  {
    step: 3,
    title: 'Link Your Foreign Card',
    description: 'Add your Visa or Mastercard in the app\'s card section. Alipay accepts the widest range including Amex. Enable international transactions with your bank first.',
    icon: CreditCard
  },
  {
    step: 4,
    title: 'Test a Small Payment',
    description: 'Before your trip, test the card link. In China, your first scan should be small — a ¥10 coffee — to confirm everything works before relying on it.',
    icon: CheckCircle
  },
  {
    step: 5,
    title: 'Learn the Two Scan Modes',
    description: 'You scan their QR code (common at small vendors) or they scan your payment code (common at stores and metro). Know both — the app shows your code on the home screen.',
    icon: QrCode
  }
]

const scenarios = [
  { scenario: 'Restaurants & street food', method: 'Scan vendor QR or show payment code', note: 'Many restaurants use table QR codes for ordering + payment in one' },
  { scenario: 'Metro & public transit', method: 'Alipay transport mini-app or QR', note: 'Most cities have a transit QR inside Alipay — no physical card needed' },
  { scenario: 'Taxis & Didi (ride-hail)', method: 'In-app payment via Didi mini-program', note: 'Didi works inside Alipay/WeChat with English interface' },
  { scenario: 'Attractions & tickets', method: 'Online booking or gate QR', note: 'Major attractions require advance online booking — pay in-app' },
  { scenario: 'Hotels', method: 'Card or app payment', note: 'International hotels take foreign cards; local chains prefer apps' },
  { scenario: 'Rural areas & small towns', method: 'Cash backup essential', note: 'App coverage is near-universal but signal and vendor familiarity vary' }
]

export default function ChinaPaymentAppsGuide() {
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
              China Payment Apps
              <span className="block text-blue-200">2026 Tourist Guide</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              China runs on QR codes, not cards. Set up Alipay and WeChat Pay before you land — here is exactly how.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#setup" className="btn-primary bg-white text-blue-600 hover:bg-blue-50">
                Setup Steps
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="#apps" className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors border-2 border-yellow-400">
                Compare Apps
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">The #1 Tourist Mistake in China</h3>
                  <p className="text-gray-700">
                    Arriving without a payment app set up. China is nearly cashless — your Visa card works at international hotels and almost nowhere else. Tourists who skip this step spend their first day hunting ATMs instead of sightseeing. Set up both apps before departure; it takes 20 minutes at home and is nearly impossible to figure out at a Beijing street food stall.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Since 2023, both Alipay and WeChat Pay officially support foreign bank cards — a game-changer that ended the cash-only era for tourists. But the setup has quirks: verification requirements, transaction limits, and two different scan modes. This guide walks you through everything, tested and current for 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Apps Comparison */}
      <section id="apps" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Three Ways to Pay in China
              </h2>
              <p className="text-xl text-gray-600">
                You need at least one app — ideally both, plus a cash backup
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {paymentApps.map((app, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{app.app}</h3>
                    <p className="text-blue-600 font-medium">{app.difficulty}</p>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Foreign cards:</span>
                      <span className="font-medium text-gray-900 text-right">{app.foreignCards}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Verification:</span>
                      <span className="font-medium text-gray-900 text-right">{app.verification}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Limits:</span>
                      <span className="font-medium text-gray-900 text-right">{app.limits}</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600 mb-3"><strong>Best for:</strong> {app.bestFor}</p>
                    <p className="text-sm text-blue-700 bg-blue-50 p-3 rounded-lg">{app.tips}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section id="setup" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Setup in 5 Steps (Do This at Home)
              </h2>
              <p className="text-xl text-gray-600">
                20 minutes before departure saves your first day in China
              </p>
            </div>

            <div className="space-y-6">
              {setupSteps.map((item) => {
                const IconComponent = item.icon
                return (
                  <div key={item.step} className="flex items-start bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-6">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-5 flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <IconComponent className="w-5 h-5 text-blue-600 mr-2" />
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How to Pay in Every Situation
              </h2>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {scenarios.map((item, index) => (
                <div key={index} className={`p-6 ${index !== scenarios.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-blue-50/50 transition-colors`}>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="font-bold text-gray-900">{item.scenario}</div>
                    <div className="text-blue-600 font-medium">{item.method}</div>
                    <div className="text-gray-600 text-sm">{item.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Payment Pro Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-6">
                <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Tell Your Bank First</h3>
                <p className="text-gray-700 text-sm">Foreign transactions through Chinese apps trigger fraud blocks. Notify your bank of travel dates and enable international transactions before linking your card.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-6">
                <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Carry ¥500-1000 Cash Backup</h3>
                <p className="text-gray-700 text-sm">For dead phone batteries, rural vendors, and the rare merchant who cannot make change. ATMs at Bank of China and ICBC reliably accept foreign cards.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-6">
                <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Screenshot Your Payment Code</h3>
                <p className="text-gray-700 text-sm">Payment codes work offline once generated. Screenshot yours before heading underground on the metro or into areas with weak signal.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-6">
                <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Watch the ¥200 Fee Threshold</h3>
                <p className="text-gray-700 text-sm">Alipay charges ~3% on foreign-card transactions over ¥200. Split large purchases or use cash for big-ticket items to avoid the fee stacking up.</p>
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
              Payment Sorted? Book Your Experiences
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Skip-the-line tickets and guided tours — bookable in advance with your home card
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <GetYourGuideWidget
                locationId="189"
                widgetType="activities"
                title="Beijing Tours & Experiences"
                description="Book top-rated tours and activities across China"
                className="w-full"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/attractions/great-wall-china" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2"><Link href="/attractions/great-wall-china" className="text-primary-600 font-semibold hover:underline">Great Wall</Link> Tours</h3>
                <p className="text-sm text-blue-100">Skip-the-line access</p>
              </Link>
              <Link href="/attractions/forbidden-city" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <Globe className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2"><Link href="/attractions/forbidden-city" className="text-primary-600 font-semibold hover:underline">Forbidden City</Link></h3>
                <p className="text-sm text-blue-100">Timed entry tickets</p>
              </Link>
              <Link href="/blog/china-esim-vpn-guide-2026" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <Smartphone className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2">Internet Guide</h3>
                <p className="text-sm text-blue-100">eSIM & VPN setup</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup for SEO */}
      <SchemaMarkup
        type="article"
        data={{
          title: "China Payment Apps Guide 2026: Alipay & WeChat Pay for Tourists",
          description: "How to pay in China as a tourist in 2026: set up Alipay and WeChat Pay with foreign cards, where cash still works, and the payment mistakes to avoid.",
          image: "/china-payment-apps-og.jpg",
          author: "China Travel Team",
          authorTitle: "China Travel Specialists",
          datePublished: "2026-09-22",
          dateModified: "2026-09-22",
          url: "/blog/china-payment-apps-guide-2026",
          category: "Essential Guides",
          keywords: ["China payment apps", "Alipay for tourists", "WeChat Pay foreigners", "paying in China"],
          wordCount: 2200,
          readTime: "PT12M"
        }}
      />
      <SchemaMarkup
        type="breadcrumb"
        data={{
          breadcrumbs: [
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "China Payment Apps Guide 2026", url: "/blog/china-payment-apps-guide-2026" }
          ]
        }}
      />
    </div>
  )
}
