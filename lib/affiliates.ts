// Centralized Affiliate Links Configuration
// All affiliate partner links in one place for easy management

export const AFFILIATE_LINKS = {
  // GetYourGuide - Tours & Activities
  getYourGuide: {
    name: 'GetYourGuide',
    partnerId: 'UENNPLZ',
    baseUrl: 'https://www.getyourguide.com',
    chinaSearch: 'https://www.getyourguide.com/s/?et=783639&psrc=widget&partner_id=UENNPLZ&utm_medium=online_publisher&currency=EUR&q=china&queryMatch=all&widget=activities',
    beijingTours: 'https://www.getyourguide.com/beijing-l189/?partner_id=UENNPLZ',
    shanghaiTours: 'https://www.getyourguide.com/shanghai-l194/?partner_id=UENNPLZ',
    xianTours: 'https://www.getyourguide.com/xian-l303/?partner_id=UENNPLZ',
    greatWallTours: 'https://www.getyourguide.com/great-wall-of-china-l2787/?partner_id=UENNPLZ',
    category: 'tours',
    description: 'Book tours, activities & experiences',
    cta: 'Book Tours',
    icon: '🎫',
  },
  
  // Trip.com - Flights, Hotels & Travel Packages
  tripCom: {
    name: 'Trip.com',
    affiliateUrl: 'https://www.dpbolvw.net/click-101430101-15735051',
    category: 'flights',
    description: 'Book flights, hotels & travel packages',
    cta: 'Book Flights',
    icon: '✈️',
    features: [
      'Best flight prices to China',
      'Hotel deals in major cities',
      'Complete travel packages',
      'Train tickets & transfers',
    ],
  },
  
  // AXA Travel Insurance
  axaInsurance: {
    name: 'AXA Travel Insurance',
    affiliateUrl: 'https://www.tkqlhce.com/click-101430101-17141602',
    category: 'insurance',
    description: 'Protect your trip with travel insurance',
    cta: 'Get Insured',
    icon: '🛡️',
    features: [
      'Medical coverage worldwide',
      'Trip cancellation protection',
      'Baggage loss coverage',
      '24/7 emergency assistance',
    ],
  },
} as const

// Affiliate tracking helper
export const trackAffiliateClick = (partner: keyof typeof AFFILIATE_LINKS, location: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'affiliate_click', {
      event_category: 'Affiliate',
      event_label: `${partner} - ${location}`,
      partner_name: AFFILIATE_LINKS[partner].name,
      click_location: location,
      value: 1,
    })
  }
  
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'affiliate_click',
      partner: partner,
      partner_name: AFFILIATE_LINKS[partner].name,
      click_location: location,
    })
  }
}

// Get all affiliate partners as array
export const getAllPartners = () => Object.values(AFFILIATE_LINKS)

// Get partner by category
export const getPartnersByCategory = (category: 'tours' | 'flights' | 'insurance') => {
  return Object.values(AFFILIATE_LINKS).filter(partner => partner.category === category)
}
