'use client'

import { Plane, Shield, MapPin, ArrowRight, CheckCircle, Star } from 'lucide-react'
import { AFFILIATE_LINKS, trackAffiliateClick } from '@/lib/affiliates'

interface AffiliateSectionProps {
  variant?: 'full' | 'compact' | 'cards'
  showTours?: boolean
  showFlights?: boolean
  showInsurance?: boolean
  className?: string
  attractionName?: string
}

export default function AffiliateSection({ 
  variant = 'cards',
  showTours = true,
  showFlights = true,
  showInsurance = true,
  className = '',
  attractionName = 'China'
}: AffiliateSectionProps) {
  
  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 ${className}`}>
        <h3 className="text-white font-bold text-lg mb-4 text-center">
          📌 Book Your {attractionName} Trip
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {showTours && (
            <a
              href={AFFILIATE_LINKS.getYourGuide.chinaSearch}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={() => trackAffiliateClick('getYourGuide', 'affiliate_section_compact')}
              className="bg-gradient-to-r from-gold-500 to-yellow-500 hover:from-gold-600 hover:to-yellow-600 text-gray-900 font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2"
            >
              <MapPin className="w-4 h-4" />
              <span>Book Tours</span>
            </a>
          )}
          {showFlights && (
            <a
              href={AFFILIATE_LINKS.tripCom.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={() => trackAffiliateClick('tripCom', 'affiliate_section_compact')}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2"
            >
              <Plane className="w-4 h-4" />
              <span>Book Flights</span>
            </a>
          )}
          {showInsurance && (
            <a
              href={AFFILIATE_LINKS.axaInsurance.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={() => trackAffiliateClick('axaInsurance', 'affiliate_section_compact')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2"
            >
              <Shield className="w-4 h-4" />
              <span>Get Insurance</span>
            </a>
          )}
        </div>
      </div>
    )
  }

  // Cards variant (default)
  return (
    <section className={`py-12 bg-gradient-to-br from-gray-50 to-gray-100 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Complete Your {attractionName} Trip
            </h2>
            <p className="text-gray-600">
              Book everything you need with our trusted partners
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Tours Card */}
            {showTours && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                <div className="bg-gradient-to-r from-gold-500 to-yellow-500 p-4">
                  <div className="flex items-center justify-between text-gray-900">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-6 h-6" />
                      <span className="font-bold text-lg">Tours & Activities</span>
                    </div>
                    <span className="bg-white/30 px-2 py-1 rounded text-xs font-bold">GetYourGuide</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Skip-the-line tickets
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Expert local guides
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Free cancellation
                    </li>
                  </ul>
                  <a
                    href={AFFILIATE_LINKS.getYourGuide.chinaSearch}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    onClick={() => trackAffiliateClick('getYourGuide', 'affiliate_section_cards')}
                    className="block w-full bg-gradient-to-r from-gold-500 to-yellow-500 hover:from-gold-600 hover:to-yellow-600 text-gray-900 font-bold py-3 rounded-lg text-center transition-all group-hover:scale-105"
                  >
                    Browse Tours
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </a>
                </div>
              </div>
            )}

            {/* Flights Card */}
            {showFlights && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-2">
                      <Plane className="w-6 h-6" />
                      <span className="font-bold text-lg">Flights & Hotels</span>
                    </div>
                    <span className="bg-white/30 px-2 py-1 rounded text-xs font-bold">Trip.com</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Flights from €399
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Compare 500+ airlines
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Best price guarantee
                    </li>
                  </ul>
                  <a
                    href={AFFILIATE_LINKS.tripCom.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    onClick={() => trackAffiliateClick('tripCom', 'affiliate_section_cards')}
                    className="block w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 rounded-lg text-center transition-all group-hover:scale-105"
                  >
                    Search Flights
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </a>
                </div>
              </div>
            )}

            {/* Insurance Card */}
            {showInsurance && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-6 h-6" />
                      <span className="font-bold text-lg">Travel Insurance</span>
                    </div>
                    <span className="bg-white/30 px-2 py-1 rounded text-xs font-bold">AXA</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      From €2/day
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Medical coverage €500K+
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      24/7 assistance
                    </li>
                  </ul>
                  <a
                    href={AFFILIATE_LINKS.axaInsurance.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    onClick={() => trackAffiliateClick('axaInsurance', 'affiliate_section_cards')}
                    className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-lg text-center transition-all group-hover:scale-105"
                  >
                    Get Insured
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </a>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              ⭐ Trusted by millions of travelers • Best prices guaranteed • 24/7 support
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
