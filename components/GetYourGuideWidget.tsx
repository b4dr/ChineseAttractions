'use client'

import { useEffect, useRef } from 'react'

interface GetYourGuideWidgetProps {
  locationId: string
  widgetType?: 'city' | 'activities' | 'search'
  locale?: string
  className?: string
  title?: string
  description?: string
  tourIds?: string // Specific tour IDs for targeted experiences (e.g., "165345,123456")
}

export default function GetYourGuideWidget({ 
  locationId, 
  widgetType = 'city',
  locale = 'en-US',
  className = '',
  title,
  description,
  tourIds
}: GetYourGuideWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null)
  const partnerId = 'UENNPLZ' // Your GetYourGuide partner ID

  useEffect(() => {
    // Load GetYourGuide widget script
    const script = document.createElement('script')
    script.src = 'https://widget.getyourguide.com/dist/pa.umd.production.min.js'
    script.async = true
    
    script.onload = () => {
      // Initialize widget after script loads
      if (window.gyg && widgetRef.current) {
        window.gyg.Widget.init()
      }
    }

    document.head.appendChild(script)

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  // Track widget clicks for analytics
  const handleWidgetClick = () => {
    // Google Analytics event tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'GetYourGuide Widget',
        event_label: `Location: ${locationId}, Type: ${widgetType}`,
        value: 1
      })
    }

    // Custom analytics tracking
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'getyourguide_widget_click',
        widget_location_id: locationId,
        widget_type: widgetType,
        partner_id: partnerId
      })
    }
  }

  return (
    <div className={`gyg-widget-container ${className}`}>
      {title && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          {description && (
            <p className="text-gray-600 text-sm">{description}</p>
          )}
        </div>
      )}
      
      <div 
        ref={widgetRef}
        onClick={handleWidgetClick}
        data-gyg-href={tourIds ? "https://widget.getyourguide.com/default/activities.frame" : "https://widget.getyourguide.com/default/city.frame"}
        data-gyg-locale-code={locale}
        data-gyg-widget={tourIds ? "activities" : "city"}
        {...(tourIds ? { 'data-gyg-tour-ids': tourIds, 'data-gyg-number-of-items': '1' } : { 'data-gyg-location-id': locationId })}
        data-gyg-partner-id={partnerId}
        className="min-h-[400px] bg-gray-100 rounded-lg flex items-center justify-center"
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading experiences...</p>
        </div>
      </div>
      
      {/* SEO-friendly fallback content */}
      <noscript>
        <div className="p-6 bg-gray-50 rounded-lg border">
          <h4 className="font-semibold text-gray-900 mb-2">
            Discover Amazing Experiences
          </h4>
          <p className="text-gray-600 mb-4">
            Book tours and activities for this destination with GetYourGuide.
          </p>
          <a 
            href={`https://www.getyourguide.com/?partner_id=${partnerId}&location_id=${locationId}`}
            className="btn-primary inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Activities
          </a>
        </div>
      </noscript>
    </div>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gyg: any
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}
