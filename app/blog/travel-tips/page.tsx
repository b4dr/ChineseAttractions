import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Lightbulb, Shield, Wallet, Smartphone, MapPin, Clock, Users, Star, ExternalLink, CheckCircle, AlertTriangle, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'China Travel Tips 2024 | Expert Advice & Essential Guide | Chinese Attractions',
  description: 'Essential China travel tips from experts. Money-saving advice, safety tips, cultural etiquette, visa requirements, and insider secrets for your perfect China trip.',
  keywords: 'china travel tips, china travel advice, china travel guide, beijing travel tips, shanghai travel guide, china visa, china safety, china culture, china money tips, china itinerary planning',
  openGraph: {
    title: 'China Travel Tips 2024 | Expert Advice & Essential Guide',
    description: 'Your complete guide to traveling in China with expert tips and insider advice',
    type: 'website',
  },
  alternates: {
    canonical: 'https://chineseattractions.com/travel-tips',
  },
};

const tipCategories = [
  {
    id: 'planning',
    title: 'Trip Planning',
    icon: MapPin,
    color: 'bg-primary-500',
    tips: [
      {
        title: 'Best Time to Visit China',
        description: 'Spring (April-May) and autumn (September-November) offer the best weather and fewer crowds.',
        priority: 'high',
      },
      {
        title: 'Visa Requirements',
        description: 'Most visitors need a visa. Apply 1-3 months in advance. Some cities offer visa-free transit.',
        priority: 'high',
      },
      {
        title: 'Book Popular Attractions Early',
        description: 'Forbidden City, Great Wall tours, and panda experiences sell out quickly during peak season.',
        priority: 'medium',
        affiliate: true,
      },
    ]
  },
  {
    id: 'money',
    title: 'Money & Budget',
    icon: Wallet,
    color: 'bg-gold-500',
    tips: [
      {
        title: 'Use Mobile Payments',
        description: 'WeChat Pay and Alipay are essential. Many places don\'t accept cash or cards.',
        priority: 'high',
      },
      {
        title: 'Budget Breakdown',
        description: <>
          Budget travelers: $30-50/day. Mid-range: $80-150/day. Luxury: $200+/day. If you own a home and are still paying a loan, consider reading this{' '}
          <a href="https://mortgage-info.com" target="_blank" rel="noopener noreferrer">
            guide to optimizing your mortgage and home loan costs
          </a>{' '}
          before planning a long trip to China.
        </>,
        priority: 'medium',
      },
      {
        title: 'Currency Exchange',
        description: 'Exchange money at banks or use ATMs. Avoid street exchangers and hotels.',
        priority: 'medium',
      },
    ]
  },
  {
    id: 'safety',
    title: 'Safety & Health',
    icon: Shield,
    color: 'bg-emerald-500',
    tips: [
      {
        title: 'China is Very Safe',
        description: 'Crime rates are low, but watch for pickpockets in tourist areas and crowded transport.',
        priority: 'high',
      },
      {
        title: 'Drink Bottled Water',
        description: 'Tap water isn\'t safe to drink. Buy bottled water or use a good filter.',
        priority: 'high',
      },
      {
        title: 'Air Quality Apps',
        description: 'Download air quality apps for Beijing and other northern cities. Bring masks.',
        priority: 'medium',
      },
    ]
  },
  {
    id: 'culture',
    title: 'Culture & Etiquette',
    icon: Users,
    color: 'bg-purple-500',
    tips: [
      {
        title: 'Learn Basic Mandarin',
        description: 'Hello (Nǐ hǎo), Thank you (Xiè xiè), Excuse me (Duì bù qǐ) go a long way.',
        priority: 'medium',
      },
      {
        title: 'Business Card Etiquette',
        description: 'Receive cards with both hands and read them before putting away.',
        priority: 'low',
      },
      {
        title: 'Tipping Not Expected',
        description: 'Tipping isn\'t customary in China. It can even be considered rude in some situations.',
        priority: 'medium',
      },
    ]
  },
  {
    id: 'technology',
    title: 'Technology & Apps',
    icon: Smartphone,
    color: 'bg-blue-500',
    tips: [
      {
        title: 'VPN is Essential',
        description: 'Install a reliable VPN before arriving. Google, Facebook, and many sites are blocked.',
        priority: 'high',
      },
      {
        title: 'Download Offline Maps',
        description: 'Google Maps doesn\'t work well. Use Baidu Maps or download offline maps.',
        priority: 'high',
      },
      {
        title: 'Translation Apps',
        description: 'Pleco (dictionary) and Google Translate (with camera) are invaluable tools.',
        priority: 'medium',
      },
    ]
  },
  {
    id: 'transport',
    title: 'Transportation',
    icon: Clock,
    color: 'bg-red-500',
    tips: [
      {
        title: 'High-Speed Rail is Amazing',
        description: 'Book tickets online or at stations. It\'s faster and more comfortable than flying for many routes.',
        priority: 'high',
      },
      {
        title: 'Metro Cards Save Time',
        description: 'Buy metro cards in major cities. They work across buses and subways.',
        priority: 'medium',
      },
      {
        title: 'Didi for Taxis',
        description: 'Didi (Chinese Uber) is more reliable than street taxis and shows the fare upfront.',
        priority: 'medium',
      },
    ]
  },
];

const quickTips = [
  { text: 'Download translation apps before you go', icon: Smartphone },
  { text: 'Carry tissues - public restrooms often don\'t provide them', icon: Info },
  { text: 'Bargaining is expected at markets, not in stores', icon: Wallet },
  { text: 'Pointing with one finger is rude - use an open hand', icon: Users },
  { text: 'Bring a power adapter - China uses Type A, C, and I plugs', icon: Lightbulb },
  { text: 'Keep your passport with you at all times', icon: Shield },
];

export default function TravelTipsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-chinese-50 to-gold-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">
              China <span className="text-gradient">Travel Tips</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Essential advice from China travel experts. Save money, stay safe, and make the most of your journey 
              with our comprehensive guide to traveling in China.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-gold-500" />
                Expert-Verified Tips
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-emerald-500" />
                Updated for 2024
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1 text-primary-500" />
                Trusted by 100K+ Travelers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Quick Essential Tips</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most important things every China traveler should know
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickTips.map((tip, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <tip.icon className="w-5 h-5 text-primary-600" />
                </div>
                <p className="text-gray-700 font-medium">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Tips by Category */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Complete Travel Guide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth advice organized by category for easy reference
            </p>
          </div>
          
          <div className="space-y-12">
            {tipCategories.map(category => (
              <div key={category.id} className="bg-white rounded-2xl shadow-sm p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {category.tips.map((tip, index) => (
                    <div key={index} className="relative">
                      <div className={`p-6 rounded-xl border-l-4 ${
                        tip.priority === 'high' ? 'border-red-500 bg-red-50' :
                        tip.priority === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                        'border-green-500 bg-green-50'
                      }`}>
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">{tip.title}</h4>
                          <div className="flex items-center">
                            {tip.priority === 'high' && (
                              <AlertTriangle className="w-4 h-4 text-red-500" />
                            )}
                            {tip.affiliate && (
                              <Star className="w-4 h-4 text-gold-500 ml-1" />
                            )}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                        
                        {tip.affiliate && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <a 
                              href="https://www.getyourguide.com/activity/beijing-l189/beijing-private-custom-tour-with-a-local-guide-t469001/?partner_id=UENNPLZ&utm_medium=online_publisher&utm_source=chineseattractions&placement=content-middle&cmp=tips"
                              target="_blank"
                              rel="noopener noreferrer sponsored"
                              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                            >
                              Book Beijing Private Tour
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packing Checklist */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">China Travel Packing Checklist</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't forget these essential items for your China adventure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-primary-600" />
                Documents & Safety
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />Passport (6+ months validity)</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />China visa</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />Travel insurance</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />Copies of documents</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />Emergency contacts</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Smartphone className="w-5 h-5 mr-2 text-blue-600" />
                Technology
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />VPN (install before arrival)</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />Power adapter (Type A/C/I)</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />Portable charger</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />Translation apps</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />Offline maps</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-gold-600" />
                Health & Comfort
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />Prescription medications</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />Face masks (air quality)</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />Hand sanitizer</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />Tissues (essential!)</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />Comfortable walking shoes</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Wallet className="w-5 h-5 mr-2 text-emerald-600" />
                Money & Cards
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />Credit cards (Visa/Mastercard)</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />Some cash (USD/EUR)</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />Backup payment method</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />Money belt/hidden wallet</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" />Bank contact info</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Affiliate */}
      <section className="section-padding bg-gradient-to-br from-chinese-500 to-gold-500">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Plan Your China Adventure?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Use our expert tips and book your experiences with confidence. Get instant confirmation and free cancellation on most activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/attractions" 
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Explore Top Attractions
              </Link>
              <a 
                href="https://www.getyourguide.com/activity/shanghai-l178/shanghai-3-hour-authentic-downtown-local-food-tasting-t68420/?partner_id=UENNPLZ&utm_medium=online_publisher&utm_source=chineseattractions&placement=content-end&cmp=tips-cta"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Book Food Tours Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
            <p className="text-sm mt-4 opacity-75">
              ✓ Free Cancellation ✓ Instant Confirmation ✓ Best Price Guarantee
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
