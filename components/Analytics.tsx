'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Google Analytics 4 setup
    const GA_MEASUREMENT_ID = 'G-Z8WER8SBSZ' // User's Google Analytics measurement ID
    
    // Load Google Analytics script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    `
    document.head.appendChild(script2)

    // GetYourGuide Analytics Integration
    const gygScript = document.createElement('script')
    gygScript.async = true
    gygScript.defer = true
    gygScript.src = 'https://widget.getyourguide.com/dist/pa.umd.production.min.js'
    gygScript.setAttribute('data-gyg-partner-id', 'UENNPLZ')
    document.head.appendChild(gygScript)

    // Make gtag available globally
    window.gtag = function() {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push(arguments)
    }

    // Configure Google Analytics with the correct ID
    window.gtag('config', 'G-Z8WER8SBSZ')

    return () => {
      // Cleanup scripts on unmount
      if (document.head.contains(script1)) {
        document.head.removeChild(script1)
      }
      if (document.head.contains(script2)) {
        document.head.removeChild(script2)
      }
      if (document.head.contains(gygScript)) {
        document.head.removeChild(gygScript)
      }
    }
  }, [])

  useEffect(() => {
    // Track page views on route changes
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-Z8WER8SBSZ', {
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [pathname])

  return null
}

// Custom event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export const trackAttractionView = (attractionName: string, city: string) => {
  trackEvent('view_attraction', {
    attraction_name: attractionName,
    city: city,
    event_category: 'Attraction',
    event_label: `${attractionName} - ${city}`
  })
}

export const trackGetYourGuideClick = (locationId: string, widgetType: string) => {
  trackEvent('getyourguide_click', {
    location_id: locationId,
    widget_type: widgetType,
    event_category: 'Affiliate',
    event_label: `GetYourGuide - ${locationId}`,
    value: 1
  })
}

export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount,
    event_category: 'Search',
    event_label: searchTerm
  })
}

export const trackBlogRead = (blogTitle: string, readTime: number) => {
  trackEvent('blog_read', {
    blog_title: blogTitle,
    read_time: readTime,
    event_category: 'Content',
    event_label: blogTitle
  })
}

// Declare global gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}
