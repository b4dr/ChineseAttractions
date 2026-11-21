'use client'

import { Wifi, CheckCircle, ArrowRight, X } from 'lucide-react'
import { useState } from 'react'
import { AFFILIATE_LINKS, trackAffiliateClick } from '@/lib/affiliates'

interface EsimBannerProps {
  variant?: 'full' | 'compact'
  className?: string
}

export default function EsimBanner({ variant = 'full', className = '' }: EsimBannerProps) {
  const [isDismissed, setIsDismissed] = useState(false)
  if (isDismissed) return null

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-4 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Wifi className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Internet in China, instantly</p>
              <p className="text-teal-100 text-xs">eSIM data from $3.99 - no SIM swap</p>
            </div>
          </div>
          <a
            href={AFFILIATE_LINKS.saily.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            onClick={() => trackAffiliateClick('saily', 'esim_banner_compact')}
            className="bg-white text-teal-700 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-teal-50 transition-colors flex items-center"
          >
            Get eSIM
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    )
  }

  return (
    <section className={`relative bg-gradient-to-r from-teal-700 via-cyan-600 to-teal-600 py-10 ${className}`}>
      <button
        onClick={() => setIsDismissed(true)}
        className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        aria-label="Dismiss"
      >
        <X className="w-5 h-5" />
      </button>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              📱 Get Internet in China - Instantly
            </h2>
            <p className="text-teal-100">
              eSIM data works the moment you land. No SIM swap, no roaming bill shock.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-xl text-gray-900">Saily eSIM</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold">FROM $3.99</span>
              </div>
              <ul className="space-y-2 mb-5">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 mr-2 text-teal-600" />
                  Works in mainland China
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 mr-2 text-teal-600" />
                  Activate before you fly
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 mr-2 text-teal-600" />
                  Keep your WhatsApp number
                </li>
              </ul>
              <a
                href={AFFILIATE_LINKS.saily.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={() => trackAffiliateClick('saily', 'esim_banner_full')}
                className="block w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-3 rounded-lg text-center transition-all"
              >
                Get Saily eSIM
                <ArrowRight className="w-4 h-4 inline ml-2" />
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl border border-white/20 p-6 flex flex-col justify-between">
              <div>
                <p className="font-bold text-lg text-white mb-2">Prefer to compare?</p>
                <p className="text-sm text-teal-100 mb-4">
                  eSIMX has regional China + Asia plans with instant QR delivery.
                </p>
              </div>
              <div>
                <a
                  href={AFFILIATE_LINKS.esimx.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  onClick={() => trackAffiliateClick('esimx', 'esim_banner_full')}
                  className="block w-full bg-white/20 border border-white/40 hover:bg-white/30 text-white font-bold py-3 rounded-lg text-center transition-all mb-4"
                >
                  Compare eSIMX Plans
                </a>
                <p className="text-xs text-teal-100/80 text-center">
                  💎 Traveling soon?{' '}
                  <a
                    href={AFFILIATE_LINKS.hilton.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    onClick={() => trackAffiliateClick('hilton', 'esim_banner_full')}
                    className="underline hover:text-white"
                  >
                    Buy Hilton points
                  </a>
                  {' '}·{' '}
                  <a
                    href={AFFILIATE_LINKS.southwest.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    onClick={() => trackAffiliateClick('southwest', 'esim_banner_full')}
                    className="underline hover:text-white"
                  >
                    Southwest points
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
