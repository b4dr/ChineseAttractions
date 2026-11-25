'use client'

import { useState, useEffect } from 'react'
import { X, Wifi, Check, ArrowRight } from 'lucide-react'
import { AFFILIATE_LINKS, trackAffiliateClick } from '@/lib/affiliates'

const SESSION_KEY = 'ca-exit-popup-shown'

/**
 * Exit-intent popup — last-chance eSIM offer. Fires once per session on
 * desktop exit intent, 15s timer (desktop only), or 45% scroll depth.
 * Mobile renders as a bottom sheet (Google-safe pattern).
 */
export default function ExitIntentPopup() {
  const [show, setShow] = useState(false)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) {
        setShown(true)
        return
      }
    } catch {
      /* private mode */
    }
    if (shown) return

    const fire = () => {
      if (shown) return
      setShow(true)
      setShown(true)
      try {
        sessionStorage.setItem(SESSION_KEY, '1')
      } catch {
        /* private mode */
      }
    }

    const isDesktop =
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches &&
      window.innerWidth >= 1024

    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) fire()
    }

    const timer = isDesktop ? setTimeout(fire, 15000) : undefined

    let armed = false
    const arm = setTimeout(() => {
      armed = true
    }, 12000)

    const onScroll = () => {
      if (!armed) return
      const d = document.documentElement
      if ((window.scrollY + window.innerHeight) / d.scrollHeight >= 0.45) fire()
    }

    document.addEventListener('mouseleave', onLeave)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      document.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('scroll', onScroll)
      if (timer) clearTimeout(timer)
      clearTimeout(arm)
    }
  }, [shown])

  if (!show) return null

  const href = AFFILIATE_LINKS.esimx.affiliateUrl
  const track = (pos: string) => {
    trackAffiliateClick('esimx', pos)
    setShow(false)
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-ink-950/60 px-0 pb-0 backdrop-blur-sm lg:items-center lg:px-4">
      <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-ink-200 bg-paper-50 shadow-2xl max-lg:rounded-b-none max-lg:border-x-0 max-lg:border-b-0 max-lg:pb-10">
        <div className="bg-ink-950 px-8 py-3.5 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-jade-300">
            Last thing before you fly
          </p>
        </div>
        <button
          onClick={() => setShow(false)}
          className="absolute right-4 top-4 rounded-full p-1.5 text-paper-50/70 transition-colors hover:bg-ink-800 hover:text-paper-50"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8 pt-6 text-center">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-jade-600/30 bg-jade-600/10 px-3 py-1 text-xs font-semibold text-jade-700">
            <Wifi className="h-3.5 w-3.5" />
            Works the second you land
          </p>

          <h3 className="mt-4 font-playfair text-2xl font-semibold text-ink-950">
            Don&apos;t land in China without data
          </h3>
          <p className="mt-3 text-sm text-ink-600">
            Google, Maps and WhatsApp are all blocked or throttled. A travel
            eSIM activates instantly — no SIM swap, no roaming bill.
          </p>

          <div className="mx-auto mt-5 max-w-xs space-y-2.5 text-left">
            {[
              'Instant QR activation — set up before takeoff',
              'China + Asia plans from a few dollars',
              'Keep your number on WhatsApp & iMessage',
            ].map((line) => (
              <div key={line} className="flex items-start gap-2.5 text-sm text-ink-700">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-jade-600" />
                {line}
              </div>
            ))}
          </div>

          <a
            href={href}
            target="_blank"
            rel="noopener sponsored nofollow"
            onClick={() => track('exit-popup')}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-jade-600 px-8 py-4 text-base font-bold text-paper-50 shadow-lg transition-colors hover:bg-jade-500"
          >
            Get my travel eSIM
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href={AFFILIATE_LINKS.saily.affiliateUrl}
            target="_blank"
            rel="noopener sponsored nofollow"
            onClick={() => track('exit-popup-alt')}
            className="mt-2.5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-8 py-3 text-sm font-semibold text-ink-700 transition-colors hover:border-jade-600/40 hover:text-jade-700"
          >
            Compare with Saily plans
          </a>

          <button
            onClick={() => setShow(false)}
            className="mt-3 text-xs font-medium text-ink-400 transition-colors hover:text-ink-600"
          >
            No thanks, I&apos;m sorted
          </button>
        </div>
      </div>
    </div>
  )
}
