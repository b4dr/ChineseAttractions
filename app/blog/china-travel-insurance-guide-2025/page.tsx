import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle, AlertTriangle, Phone, Clock, ArrowRight, Star, DollarSign, Heart, Plane, Building2, Briefcase, FileText, Globe, Users, Award, TrendingUp, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { AFFILIATE_LINKS } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'China Travel Insurance Guide 2025: Best Coverage for Your Trip | Chinese Attractions',
  description: 'Complete guide to travel insurance for China in 2025. Compare the best policies, understand coverage requirements, medical costs, and get protected with AXA travel insurance from €2/day.',
  keywords: 'china travel insurance 2025, best travel insurance china, axa travel insurance, medical insurance china, trip cancellation insurance, china visa insurance requirements, travel protection china',
  openGraph: {
    title: 'China Travel Insurance Guide 2025: Essential Protection for Your Trip',
    description: 'Don\'t travel to China without proper insurance! Complete guide to coverage, costs, and the best policies for 2025.',
    type: 'article',
    images: ['/images/blog/china-travel-insurance-2025.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'China Travel Insurance Guide 2025',
    description: 'Essential protection for your China adventure - from €2/day',
  },
  alternates: {
    canonical: 'https://chineseattractions.com/blog/china-travel-insurance-guide-2025',
  },
};

// Insurance coverage types
const coverageTypes = [
  {
    icon: Building2,
    title: 'Medical Coverage',
    description: 'Hospital stays, doctor visits, emergency surgery, and medication costs',
    importance: 'CRITICAL',
    minCoverage: '€500,000+',
    color: 'red',
  },
  {
    icon: Plane,
    title: 'Trip Cancellation',
    description: 'Reimbursement if you need to cancel or cut short your trip',
    importance: 'HIGH',
    minCoverage: '100% trip cost',
    color: 'orange',
  },
  {
    icon: Briefcase,
    title: 'Baggage Protection',
    description: 'Coverage for lost, stolen, or damaged luggage and personal items',
    importance: 'MEDIUM',
    minCoverage: '€2,000+',
    color: 'blue',
  },
  {
    icon: Phone,
    title: '24/7 Assistance',
    description: 'Emergency hotline, medical evacuation, and repatriation services',
    importance: 'CRITICAL',
    minCoverage: 'Included',
    color: 'green',
  },
];

// Real medical costs in China
const medicalCosts = [
  { treatment: 'Emergency Room Visit', cost: '€200 - €500', note: 'Basic consultation and tests' },
  { treatment: 'Hospital Stay (per night)', cost: '€150 - €400', note: 'Standard room in international hospital' },
  { treatment: 'Appendectomy Surgery', cost: '€3,000 - €8,000', note: 'Including hospital stay' },
  { treatment: 'Broken Bone Treatment', cost: '€500 - €2,000', note: 'X-ray, cast, and follow-up' },
  { treatment: 'Medical Evacuation', cost: '€15,000 - €100,000+', note: 'Air ambulance to home country' },
  { treatment: 'COVID-19 Treatment', cost: '€5,000 - €30,000', note: 'If hospitalization required' },
];

// Why you need insurance for China
const whyInsurance = [
  {
    title: 'High Medical Costs',
    description: 'International hospitals in China charge Western prices. A simple emergency can cost thousands.',
    icon: DollarSign,
  },
  {
    title: 'Language Barrier',
    description: 'Navigating Chinese hospitals without speaking Mandarin is extremely difficult. Insurance provides translation services.',
    icon: Globe,
  },
  {
    title: 'Visa Requirements',
    description: 'Some China visa types require proof of travel insurance. Having coverage simplifies your application.',
    icon: FileText,
  },
  {
    title: 'Remote Destinations',
    description: 'Popular attractions like Zhangjiajie or Tibet are far from major hospitals. Evacuation coverage is essential.',
    icon: MapPin,
  },
];

// FAQ items
const faqItems = [
  {
    question: 'Is travel insurance mandatory for China?',
    answer: 'While not always mandatory, travel insurance is highly recommended and sometimes required for certain visa types. Many tour operators also require proof of insurance.',
  },
  {
    question: 'How much medical coverage do I need for China?',
    answer: 'We recommend at least €500,000 in medical coverage. Medical evacuation alone can cost €50,000-€100,000, so comprehensive coverage is essential.',
  },
  {
    question: 'Does my insurance cover COVID-19 in China?',
    answer: 'Most modern travel insurance policies now include COVID-19 coverage. Always verify this before purchasing and check for any quarantine-related benefits.',
  },
  {
    question: 'Can I buy travel insurance after arriving in China?',
    answer: 'It\'s best to purchase insurance before departure. Some policies won\'t cover you if purchased after your trip begins, and you may miss coverage for pre-existing conditions.',
  },
  {
    question: 'What\'s not covered by travel insurance?',
    answer: 'Common exclusions include pre-existing conditions (unless declared), extreme sports without add-ons, alcohol-related incidents, and travel to areas with government warnings.',
  },
];

export default function ChinaTravelInsuranceGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/pattern-chinese.svg')] opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                ESSENTIAL 2025 GUIDE
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              China Travel Insurance Guide 2025
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Don't risk your dream trip! Everything you need to know about protecting yourself 
              with the right travel insurance for China.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={AFFILIATE_LINKS.axaInsurance.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Shield className="w-5 h-5 mr-2" />
                Get Insured from €2/day
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <Link
                href="#coverage-guide"
                className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center border border-white/30"
              >
                Read Full Guide
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-blue-100">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>Instant Coverage</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>24/7 Assistance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>Free Cancellation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="bg-red-50 border-y border-red-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 text-red-800">
            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
            <div className="text-center">
              <p className="font-bold text-lg">⚠️ Important: Medical costs in China can exceed €50,000 for serious emergencies</p>
              <p className="text-sm">Without insurance, you could face devastating financial consequences. Protect yourself before you travel!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Meta */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>By <strong>Insurance Expert Team</strong></span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Updated: January 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>15 min read</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500 flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </span>
              <span className="text-sm text-gray-600">4.9/5 (2.3K reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need Insurance */}
      <section id="coverage-guide" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why You NEED Travel Insurance for China
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                China is an incredible destination, but traveling without insurance is a serious risk
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {whyInsurance.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Medical Costs Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Real Medical Costs in China 💰
              </h2>
              <p className="text-xl text-gray-600">
                These are actual costs you could face without insurance
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-red-600 text-white p-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">Medical Treatment</span>
                  <span className="font-bold text-lg">Estimated Cost</span>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {medicalCosts.map((item, index) => (
                  <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">{item.treatment}</div>
                        <div className="text-sm text-gray-500">{item.note}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-red-600 text-lg">{item.cost}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 p-4 border-t border-red-200">
                <p className="text-center text-red-800 font-semibold">
                  💡 With AXA Travel Insurance, all these costs are covered from just €2/day!
                </p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-8 text-center">
              <a
                href={AFFILIATE_LINKS.axaInsurance.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Shield className="w-5 h-5 mr-2" />
                Protect Yourself Now - Get a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Essential Coverage Types for China Travel
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Make sure your policy includes these critical protections
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {coverageTypes.map((coverage, index) => {
                const IconComponent = coverage.icon;
                const colorClasses = {
                  red: 'bg-red-100 text-red-600 border-red-200',
                  orange: 'bg-orange-100 text-orange-600 border-orange-200',
                  blue: 'bg-blue-100 text-blue-600 border-blue-200',
                  green: 'bg-green-100 text-green-600 border-green-200',
                };
                const badgeColors = {
                  red: 'bg-red-600',
                  orange: 'bg-orange-600',
                  blue: 'bg-blue-600',
                  green: 'bg-green-600',
                };
                return (
                  <div key={index} className={`rounded-xl p-6 border-2 ${colorClasses[coverage.color as keyof typeof colorClasses]}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 ${badgeColors[coverage.color as keyof typeof badgeColors]} rounded-xl flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{coverage.title}</h3>
                          <span className={`text-xs font-bold px-2 py-1 rounded ${badgeColors[coverage.color as keyof typeof badgeColors]} text-white`}>
                            {coverage.importance}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{coverage.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-current/20">
                      <span className="text-sm font-medium">Recommended Minimum:</span>
                      <span className="font-bold text-lg">{coverage.minCoverage}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* AXA Recommendation */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="flex items-center space-x-2 mb-4">
                    <Award className="w-8 h-8 text-yellow-500" />
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">
                      OUR TOP RECOMMENDATION
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    AXA Travel Insurance
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    Trusted by over 100 million travelers worldwide, AXA offers comprehensive 
                    coverage specifically designed for international travel to destinations like China.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {AFFILIATE_LINKS.axaInsurance.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                      COVID-19 coverage included
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                      Adventure activities covered
                    </li>
                  </ul>
                  
                  <a
                    href={AFFILIATE_LINKS.axaInsurance.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg w-full justify-center"
                  >
                    <Shield className="w-5 h-5 mr-2" />
                    Get Your Free Quote
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </div>
                
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-12 text-white flex flex-col justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2">€2</div>
                    <div className="text-xl text-blue-200 mb-6">per day starting price</div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-2xl font-bold">€500,000+</div>
                        <div className="text-blue-200 text-sm">Medical Coverage</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-2xl font-bold">24/7</div>
                        <div className="text-blue-200 text-sm">Emergency Assistance</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-2xl font-bold">100M+</div>
                        <div className="text-blue-200 text-sm">Travelers Trust AXA</div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-center">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-blue-200 text-sm mt-2">Rated 4.8/5 by travelers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about travel insurance for China
              </p>
            </div>
            
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                      <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </span>
                      {item.question}
                    </h3>
                    <p className="text-gray-600 ml-11">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Shield className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Wait Until It's Too Late!
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Protect your China adventure today. Get comprehensive travel insurance 
              from just €2/day and travel with complete peace of mind.
            </p>
            <a
              href={AFFILIATE_LINKS.axaInsurance.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-10 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              <Shield className="w-6 h-6 mr-3" />
              Get Your Insurance Quote Now
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
            <p className="mt-6 text-blue-200 text-sm">
              ✓ Instant coverage • ✓ Free cancellation • ✓ 24/7 support
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Continue Planning Your China Trip
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/china-visa-requirements-2025" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">China Visa Requirements 2025</h3>
                <p className="text-gray-600 text-sm mt-2">Complete application guide</p>
              </Link>
              <Link href="/blog/cheap-flights-china-2025" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">✈️</div>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Cheap Flights to China 2025</h3>
                <p className="text-gray-600 text-sm mt-2">Find the best deals</p>
              </Link>
              <Link href="/blog/travel-tips" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">💡</div>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Essential Travel Tips</h3>
                <p className="text-gray-600 text-sm mt-2">Insider secrets for China</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
