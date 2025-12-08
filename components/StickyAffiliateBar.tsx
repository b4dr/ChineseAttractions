'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, MapPin, Sparkles, Gift, ArrowRight, Plane, Shield } from 'lucide-react'
import { AFFILIATE_LINKS, trackAffiliateClick } from '@/lib/affiliates'

interface StickyAffiliateBarProps {
  show?: boolean
  delay?: number
}

export default function StickyAffiliateBar({ show = true, delay = 3000 }: StickyAffiliateBarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [activeTab, setActiveTab] = useState<'tours' | 'flights' | 'insurance'>('tours')

  useEffect(() => {
    if (!show || isDismissed) return

    const timer = setTimeout(() => {
      setIsVisible(true)
      setTimeout(() => setIsAnimating(true), 100)
    }, delay)

    return () => clearTimeout(timer)
  }, [show, delay, isDismissed])

  // Rotate through tabs every 5 seconds
  useEffect(() => {
    if (!isVisible) return
    const tabs: ('tours' | 'flights' | 'insurance')[] = ['tours', 'flights', 'insurance']
    let currentIndex = 0
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % tabs.length
      setActiveTab(tabs[currentIndex])
    }, 5000)

    return () => clearInterval(interval)
  }, [isVisible])

  const handleDismiss = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsVisible(false)
      setIsDismissed(true)
    }, 300)
  }

  const handleClick = (partner: 'getYourGuide' | 'tripCom' | 'axaInsurance') => {
    trackAffiliateClick(partner, 'sticky_bar')
  }

  if (!isVisible || isDismissed) return null

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      {/* Tab Selector */}
      <div className="bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex justify-center space-x-1 py-1">
            <button
              onClick={() => setActiveTab('tours')}
              className={`px-3 py-1 rounded-t-lg text-xs font-semibold transition-colors ${
                activeTab === 'tours' 
                  ? 'bg-gradient-to-r from-red-600 to-yellow-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              🎫 Tours
            </button>
            <button
              onClick={() => setActiveTab('flights')}
              className={`px-3 py-1 rounded-t-lg text-xs font-semibold transition-colors ${
                activeTab === 'flights' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              ✈️ Flights
            </button>
            <button
              onClick={() => setActiveTab('insurance')}
              className={`px-3 py-1 rounded-t-lg text-xs font-semibold transition-colors ${
                activeTab === 'insurance' 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              🛡️ Insurance
            </button>
          </div>
        </div>
      </div>

      {/* Tours Tab - GetYourGuide */}
      {activeTab === 'tours' && (
        <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 shadow-2xl">
          <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
            <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-2 sm:gap-0">
              <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
                <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-300 animate-pulse" />
                  <Gift className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-300 animate-bounce" />
                </div>
                <div className="text-white min-w-0 flex-1">
                  <div className="font-bold text-sm sm:text-lg flex items-center flex-wrap">
                    <span className="mr-2">🎯 Book Amazing China Tours!</span>
                    <span className="px-2 py-1 bg-yellow-400 text-red-900 text-xs rounded-full font-bold animate-pulse whitespace-nowrap">
                      FREE CANCELLATION
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-yellow-100 hidden sm:block">
                    Expert guides • Skip-the-line tickets • Best prices guaranteed
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                <Link 
                  href={AFFILIATE_LINKS.getYourGuide.chinaSearch}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  onClick={() => handleClick('getYourGuide')}
                  className="bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold px-3 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-1 sm:space-x-2 group text-sm sm:text-base"
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Book Tours</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <button onClick={handleDismiss} className="ml-2 sm:ml-4 text-white/70 hover:text-white transition-colors p-1 sm:p-2 hover:bg-white/10 rounded-full flex-shrink-0" aria-label="Close">
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Flights Tab - Trip.com */}
      {activeTab === 'flights' && (
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-2xl">
          <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
            <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-2 sm:gap-0">
              <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
                <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                  <Plane className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-300 animate-bounce" />
                </div>
                <div className="text-white min-w-0 flex-1">
                  <div className="font-bold text-sm sm:text-lg flex items-center flex-wrap">
                    <span className="mr-2">✈️ Flights to China from €399!</span>
                    <span className="px-2 py-1 bg-yellow-400 text-orange-900 text-xs rounded-full font-bold animate-pulse whitespace-nowrap">
                      BEST PRICES
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-orange-100 hidden sm:block">
                    Compare 500+ airlines • Hotels from €25/night • Complete packages
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                <a 
                  href={AFFILIATE_LINKS.tripCom.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  onClick={() => handleClick('tripCom')}
                  className="bg-yellow-400 hover:bg-yellow-300 text-orange-900 font-bold px-3 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-1 sm:space-x-2 group text-sm sm:text-base"
                >
                  <Plane className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Search Flights</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <button onClick={handleDismiss} className="ml-2 sm:ml-4 text-white/70 hover:text-white transition-colors p-1 sm:p-2 hover:bg-white/10 rounded-full flex-shrink-0" aria-label="Close">
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Insurance Tab - AXA */}
      {activeTab === 'insurance' && (
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-2xl">
          <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
            <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-2 sm:gap-0">
              <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
                <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                  <Shield className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-300 animate-pulse" />
                </div>
                <div className="text-white min-w-0 flex-1">
                  <div className="font-bold text-sm sm:text-lg flex items-center flex-wrap">
                    <span className="mr-2">🛡️ Travel Insurance from €2/day!</span>
                    <span className="px-2 py-1 bg-yellow-400 text-blue-900 text-xs rounded-full font-bold animate-pulse whitespace-nowrap">
                      ESSENTIAL
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-blue-100 hidden sm:block">
                    Medical coverage • Trip cancellation • 24/7 assistance • AXA trusted
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                <a 
                  href={AFFILIATE_LINKS.axaInsurance.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  onClick={() => handleClick('axaInsurance')}
                  className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-3 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-1 sm:space-x-2 group text-sm sm:text-base"
                >
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Get Insured</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <button onClick={handleDismiss} className="ml-2 sm:ml-4 text-white/70 hover:text-white transition-colors p-1 sm:p-2 hover:bg-white/10 rounded-full flex-shrink-0" aria-label="Close">
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animated border */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 animate-pulse"></div>
    </div>
  )
}

// Variant for specific pages
export function StickyAffiliateBarAttraction({ attractionName, locationId }: { attractionName: string, locationId: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    if (isDismissed) return

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000) // Show after 5 seconds on attraction pages

    return () => clearTimeout(timer)
  }, [isDismissed])

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'affiliate',
        event_label: `sticky_bar_${attractionName.toLowerCase().replace(/\s+/g, '_')}`,
        value: 1
      })
    }
  }

  if (!isVisible || isDismissed) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-chinese-600 via-gold-500 to-chinese-600 shadow-2xl">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1">
              <Sparkles className="w-5 h-5 text-gold-300 animate-spin" />
              <div className="text-white">
                <div className="font-bold">
                  🎫 Book your {attractionName} visit!
                </div>
                <div className="text-xs text-gold-200">
                  Skip the lines • Expert guide included
                </div>
              </div>
            </div>
            
            <Link 
              href="https://www.getyourguide.com/s/?et=783639&psrc=widget&partner_id=UENNPLZ&utm_medium=online_publisher&currency=EUR&q=china&queryMatch=all&widget=activities&wid=ab1660d8-9b99-54a5-aca0-795d5c8f4cf9&page_id=0b370c63-1a14-540c-b2c3-b717ab0de411&visitor_id=42XXGCZ2JPC706732CS99U7Q8BXUFZZ7"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className="bg-gold-400 hover:bg-gold-300 text-chinese-900 font-bold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <button
              onClick={() => setIsDismissed(true)}
              className="ml-3 text-white/70 hover:text-white transition-colors p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
