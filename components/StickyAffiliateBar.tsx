'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, MapPin, ArrowRight, Plane, Shield } from 'lucide-react'
import { AFFILIATE_LINKS, trackAffiliateClick } from '@/lib/affiliates'

interface StickyAffiliateBarProps {
  show?: boolean
  delay?: number
}

const TABS = {
  tours: {
    label: 'Tours',
    icon: MapPin,
    headline: 'Book top-rated China tours',
    sub: 'Expert guides · Skip-the-line tickets · Free cancellation',
    cta: 'Book tours',
    href: () => AFFILIATE_LINKS.getYourGuide.chinaSearch,
    partner: 'getYourGuide' as const,
  },
  flights: {
    label: 'Flights',
    icon: Plane,
    headline: 'Flights to China from €399',
    sub: 'Compare airlines · Hotels from €25/night',
    cta: 'Search flights',
    href: () => AFFILIATE_LINKS.tripCom.affiliateUrl,
    partner: 'tripCom' as const,
  },
  insurance: {
    label: 'Insurance',
    icon: Shield,
    headline: 'Travel insurance from €2/day',
    sub: 'Medical cover · Cancellation · 24/7 assistance',
    cta: 'Get insured',
    href: () => AFFILIATE_LINKS.axaInsurance.affiliateUrl,
    partner: 'axaInsurance' as const,
  },
}

type TabKey = keyof typeof TABS

export default function StickyAffiliateBar({ show = true, delay = 3000 }: StickyAffiliateBarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [activeTab, setActiveTab] = useState<TabKey>('tours')

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

  if (!isVisible || isDismissed) return null

  const tab = TABS[activeTab]
  const TabIcon = tab.icon

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      {/* Tab selector */}
      <div className="bg-ink-950">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex justify-center space-x-1 pt-1.5">
            {(Object.keys(TABS) as TabKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-1.5 rounded-t-md text-xs font-medium transition-colors ${
                  activeTab === key
                    ? 'bg-ink-800 text-paper-50'
                    : 'text-ink-400 hover:text-paper-200'
                }`}
              >
                {TABS[key].label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active tab band — ink ground, jade action */}
      <div className="bg-ink-800 border-t border-ink-700">
        <div className="container mx-auto px-3 sm:px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <TabIcon className="w-5 h-5 text-jade-300 flex-shrink-0 hidden sm:block" />
              <div className="min-w-0">
                <p className="text-paper-50 font-semibold text-sm sm:text-base truncate">{tab.headline}</p>
                <p className="text-xs text-ink-300 hidden sm:block">{tab.sub}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Link
                href={tab.href()}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={() => trackAffiliateClick(tab.partner, 'sticky_bar')}
                className="bg-jade-600 hover:bg-jade-500 text-paper-50 font-medium px-4 sm:px-5 py-2 rounded-md transition-colors flex items-center gap-1.5 text-sm whitespace-nowrap"
              >
                <span>{tab.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={handleDismiss}
                className="text-ink-400 hover:text-paper-50 transition-colors p-1.5 rounded-md"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
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
      <div className="bg-ink-800 border-t border-ink-700">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <MapPin className="w-5 h-5 text-jade-300 flex-shrink-0 hidden sm:block" />
              <div className="min-w-0">
                <p className="text-paper-50 font-semibold text-sm sm:text-base truncate">
                  Book your {attractionName} visit
                </p>
                <p className="text-xs text-ink-300 hidden sm:block">Skip the lines · Expert guide included</p>
              </div>
            </div>

            <Link
              href="https://www.getyourguide.com/s/?et=783639&psrc=widget&partner_id=UENNPLZ&utm_medium=online_publisher&currency=EUR&q=china&queryMatch=all&widget=activities&wid=ab1660d8-9b99-54a5-aca0-795d5c8f4cf9&page_id=0b370c63-1a14-540c-b2c3-b717ab0de411&visitor_id=42XXGCZ2JPC706732CS99U7Q8BXUFZZ7"
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={handleClick}
              className="bg-jade-600 hover:bg-jade-500 text-paper-50 font-medium px-4 sm:px-6 py-2 rounded-md transition-colors flex items-center gap-1.5 text-sm whitespace-nowrap"
            >
              <span>Book now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setIsDismissed(true)}
              className="text-ink-400 hover:text-paper-50 transition-colors p-1.5 rounded-md flex-shrink-0"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
