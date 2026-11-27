'use client'

import { ArrowRight, BadgeCheck } from 'lucide-react'
import { AFFILIATE_LINKS, trackAffiliateClick } from '@/lib/affiliates'

type Partner = 'gyg' | 'tripcom' | 'axa' | 'saily' | 'kiWi' | 'zenHotels'

const PARTNERS: Record<Partner, { url: string; key: keyof typeof AFFILIATE_LINKS }> = {
  gyg: { url: AFFILIATE_LINKS.getYourGuide.chinaSearch, key: 'getYourGuide' },
  tripcom: { url: AFFILIATE_LINKS.tripCom.affiliateUrl, key: 'tripCom' },
  axa: { url: AFFILIATE_LINKS.axaInsurance.affiliateUrl, key: 'axaInsurance' },
  saily: { url: AFFILIATE_LINKS.saily.affiliateUrl, key: 'saily' },
  kiWi: { url: AFFILIATE_LINKS.kiWi.affiliateUrl, key: 'kiWi' },
  zenHotels: { url: AFFILIATE_LINKS.zenHotels.affiliateUrl, key: 'zenHotels' },
}

interface InlineBookCTAProps {
  partner?: Partner
  url?: string
  heading: string
  sub?: string
  cta: string
}

export default function InlineBookCTA({ partner = 'gyg', url, heading, sub, cta }: InlineBookCTAProps) {
  const p = PARTNERS[partner]
  return (
    <section className="px-4 -mt-10 relative z-20">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-ink-900 rounded-2xl shadow-2xl px-6 py-6 sm:px-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
          <div className="flex-1 text-center sm:text-left">
            <p className="font-serif text-xl sm:text-2xl font-semibold text-paper-50 leading-snug">
              {heading}
            </p>
            {sub && (
              <p className="mt-1.5 text-sm text-paper-300 flex items-center justify-center sm:justify-start gap-1.5">
                <BadgeCheck className="w-4 h-4 text-jade-400 shrink-0" />
                {sub}
              </p>
            )}
          </div>
          <a
            href={url || p.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            onClick={() => trackAffiliateClick(p.key, 'inline_book_cta')}
            className="shrink-0 inline-flex items-center gap-2 bg-jade-600 hover:bg-jade-500 text-white font-semibold px-7 py-3.5 rounded-lg text-base transition-colors"
          >
            {cta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
