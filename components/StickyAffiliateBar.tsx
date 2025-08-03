'use client'

import { useState, useEffect } from 'react'
import { X, Sparkles, MapPin, ArrowRight, Gift } from 'lucide-react'
import Link from 'next/link'

interface StickyAffiliateBarProps {
  show?: boolean
  delay?: number
}

export default function StickyAffiliateBar({ show = true, delay = 3000 }: StickyAffiliateBarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    if (!show || isDismissed) return

    const timer = setTimeout(() => {
      setIsVisible(true)
      setTimeout(() => setIsAnimating(true), 100)
    }, delay)

    return () => clearTimeout(timer)
  }, [show, delay, isDismissed])

  const handleDismiss = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsVisible(false)
      setIsDismissed(true)
    }, 300)
  }

  const handleClick = () => {
    // Track affiliate click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'affiliate',
        event_label: 'sticky_bar_getyourguide',
        value: 1
      })
    }
  }

  if (!isVisible || isDismissed) return null

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      {/* Background with gradient and blur effect */}
      <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 shadow-2xl border-t-4 border-yellow-400">
        <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-2 sm:gap-0">
            
            {/* Left side - Attractive message */}
            <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
              <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                <div className="relative">
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-300 animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-300 rounded-full animate-ping"></div>
                </div>
                <Gift className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-300 animate-bounce" />
              </div>
              
              <div className="text-white min-w-0 flex-1">
                <div className="font-bold text-sm sm:text-lg flex items-center flex-wrap">
                  <span className="mr-2">🎯 Discover China with GetYourGuide!</span>
                  <span className="px-2 py-1 bg-yellow-400 text-red-900 text-xs rounded-full font-bold animate-pulse whitespace-nowrap">
                    SPECIAL OFFER
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-yellow-100 hidden sm:block">
                  Exclusive tours • Expert guides • Free cancellation • Best prices
                </div>
              </div>
            </div>

            {/* Center - Call to action */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              <Link 
                href="https://www.getyourguide.com/beijing-l189/?partner_id=UENNPLZ&utm_source=affiliate&utm_medium=sticky_bar&utm_campaign=china_attractions"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className="bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold px-3 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-1 sm:space-x-2 group text-sm sm:text-base"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">View Beijing Tours</span>
                <span className="sm:hidden">Beijing</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="https://www.getyourguide.com/shanghai-l18/?partner_id=UENNPLZ&utm_source=affiliate&utm_medium=sticky_bar&utm_campaign=china_attractions"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className="bg-white/20 hover:bg-white/30 text-white font-bold px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-300 border border-white/30 hidden lg:flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base"
              >
                <span>Shanghai</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>

            {/* Right side - Close button */}
            <button
              onClick={handleDismiss}
              className="ml-2 sm:ml-4 text-white/70 hover:text-white transition-colors p-1 sm:p-2 hover:bg-white/10 rounded-full flex-shrink-0"
              aria-label="Close"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
        
        {/* Animated border */}
        <div className="h-1 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 animate-pulse"></div>
      </div>
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
              href={`https://www.getyourguide.com/s/?q=${encodeURIComponent(attractionName)}&partner_id=UENNPLZ&utm_source=affiliate&utm_medium=sticky_bar&utm_campaign=${attractionName.toLowerCase().replace(/\s+/g, '_')}`}
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
