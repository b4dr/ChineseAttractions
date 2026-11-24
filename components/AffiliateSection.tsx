'use client'

import { Plane, Shield, MapPin, ArrowRight, CheckCircle, Smartphone } from 'lucide-react'
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
      <div className={`bg-ink-900 rounded-2xl p-6 ${className}`}>
        <h3 className="text-paper-50 font-serif font-semibold text-lg mb-4 text-center">
          Book your {attractionName} trip
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {showTours && (
            <a
              href={AFFILIATE_LINKS.getYourGuide.chinaSearch}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={() => trackAffiliateClick('getYourGuide', 'affiliate_section_compact')}
              className="bg-jade-600 hover:bg-jade-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <MapPin className="w-4 h-4" />
              <span>Book tours</span>
            </a>
          )}
          {showFlights && (
            <a
              href={AFFILIATE_LINKS.tripCom.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={() => trackAffiliateClick('tripCom', 'affiliate_section_compact')}
              className="bg-paper-50 hover:bg-white text-ink-900 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Plane className="w-4 h-4" />
              <span>Book flights</span>
            </a>
          )}
          {showInsurance && (
            <a
              href={AFFILIATE_LINKS.axaInsurance.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={() => trackAffiliateClick('axaInsurance', 'affiliate_section_compact')}
              className="border border-paper-50/30 hover:border-paper-50/60 text-paper-50 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Shield className="w-4 h-4" />
              <span>Get insured</span>
            </a>
          )}
        </div>
      </div>
    )
  }

  const cards = [
    {
      show: showTours,
      icon: MapPin,
      title: 'Tours & Activities',
      partner: 'GetYourGuide',
      bullets: ['Skip-the-line tickets', 'Expert local guides', 'Free cancellation'],
      url: AFFILIATE_LINKS.getYourGuide.chinaSearch,
      key: 'getYourGuide' as const,
      cta: 'Browse tours',
    },
    {
      show: showFlights,
      icon: Plane,
      title: 'Flights & Hotels',
      partner: 'Trip.com',
      bullets: ['Flights from €399', 'Compare 500+ airlines', 'Best price guarantee'],
      url: AFFILIATE_LINKS.tripCom.affiliateUrl,
      key: 'tripCom' as const,
      cta: 'Search flights',
    },
    {
      show: showInsurance,
      icon: Shield,
      title: 'Travel Insurance',
      partner: 'AXA',
      bullets: ['From €2/day', 'Medical coverage €500K+', '24/7 assistance'],
      url: AFFILIATE_LINKS.axaInsurance.affiliateUrl,
      key: 'axaInsurance' as const,
      cta: 'Get insured',
    },
  ]

  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink-900 mb-2">
              Complete your {attractionName} trip
            </h2>
            <p className="text-ink-500">
              Book everything you need with our trusted partners
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {cards.filter(c => c.show).map((card) => (
              <div key={card.title} className="bg-white rounded-2xl border border-paper-200 overflow-hidden hover:border-jade-300 hover:shadow-lg transition-all">
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-11 h-11 bg-jade-50 rounded-xl flex items-center justify-center">
                        <card.icon className="w-5 h-5 text-jade-700" />
                      </div>
                      <span className="font-serif font-semibold text-lg text-ink-900">{card.title}</span>
                    </div>
                    <span className="bg-paper-100 text-ink-500 px-2 py-1 rounded text-xs font-medium">{card.partner}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-center text-sm text-ink-600">
                        <CheckCircle className="w-4 h-4 mr-2 text-jade-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    onClick={() => trackAffiliateClick(card.key, 'affiliate_section_cards')}
                    className="block w-full bg-jade-600 hover:bg-jade-700 text-white font-semibold py-3 rounded-lg text-center transition-colors"
                  >
                    {card.cta}
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* eSIM strip - stay connected in China */}
          <div className="mt-6 bg-ink-900 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-paper-50">
              <Smartphone className="w-7 h-7 text-jade-400" />
              <div>
                <p className="font-semibold">Stay connected in China</p>
                <p className="text-sm text-paper-300">Instant eSIM data — works the moment you land, no SIM swap</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href={AFFILIATE_LINKS.saily.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={() => trackAffiliateClick('saily', 'affiliate_section_esim_strip')}
                className="bg-jade-600 hover:bg-jade-500 text-white font-semibold py-2.5 px-5 rounded-lg text-center transition-colors"
              >
                Saily — from $3.99
              </a>
              <a
                href={AFFILIATE_LINKS.esimx.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={() => trackAffiliateClick('esimx', 'affiliate_section_esim_strip')}
                className="border border-paper-50/30 text-paper-50 font-semibold py-2.5 px-5 rounded-lg text-center hover:bg-white/10 transition-colors"
              >
                Compare eSIMX plans
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-ink-400">
              Trusted partners · Best prices guaranteed · 24/7 support
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
