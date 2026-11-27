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
  
  // Kiwi.com - Flight Search (MaxBounty 8338 — 3.9% CPS)
  kiWi: {
    name: 'Kiwi.com',
    affiliateUrl: 'https://afflat3e3.com/trk/lnk/0080372A-FAAC-44D9-83A2-88C8188A88D8/?o=8338&a=782595&l=7050',
    category: 'flights',
    description: 'Search cheap flights & virtual interlining',
    cta: 'Search Flights',
    icon: '✈️',
    features: [
      'Virtual interlining finds cheaper routes',
      'Price alerts & flexible dates',
      'Covers 800+ airlines',
    ],
  },

  // ZenHotels - Hotel Booking (MaxBounty 31398 — 6% CPA)
  zenHotels: {
    name: 'ZenHotels',
    affiliateUrl: 'https://afflat3e3.com/trk/lnk/0080372A-FAAC-44D9-83A2-88C8188A88D8/?o=31398&a=782595&l=36610',
    category: 'hotels',
    description: 'Hotel deals in Beijing, Shanghai & across China',
    cta: 'Find Hotels',
    icon: '🏨',
    features: [
      'Discounted hotel rates in China',
      'Free cancellation on most rates',
      'No booking fees',
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

  // Saily eSIM (Impact #25536) - 10% per purchase
  saily: {
    name: 'Saily eSIM',
    affiliateUrl: 'https://saily.sjv.io/c/5414213/2044403/25536',
    category: 'esim',
    description: 'Instant travel eSIM data for China',
    cta: 'Get eSIM Data',
    icon: '📱',
    features: [
      'Works in China (built-in roaming)',
      'Instant activation, no SIM swap',
      'From $3.99 for 1GB',
      'Keep your WhatsApp number',
    ],
  },

  // eSIMX (Impact #27320) - 15% per sale
  esimx: {
    name: 'eSIMX',
    affiliateUrl: 'https://skylarkconnectllc.pxf.io/c/5414213/2147759/27320',
    category: 'esim',
    description: 'Regional eSIM data plans for Asia',
    cta: 'Compare eSIMs',
    icon: '📶',
    features: [
      'China + Asia regional plans',
      'Instant QR code delivery',
      'Data-only, keep your number',
      'Budget-friendly packs',
    ],
  },

  // Hilton Honors via Points.com (Impact #4823) - 2.5% per sale
  hilton: {
    name: 'Hilton Honors',
    affiliateUrl: 'https://hilton.ijrn.net/c/5414213/314255/4823',
    category: 'hotels',
    description: 'Buy Hilton Honors points for hotel stays',
    cta: 'Get Hilton Points',
    icon: '🏨',
    features: [
      'Conrad, Waldorf Astoria in China',
      'Points often cheaper than cash rates',
      'Instant points purchase',
      'Free night redemptions',
    ],
  },

  // Southwest Rapid Rewards via Points.com (Impact #4705) - 2.5% per sale
  southwest: {
    name: 'Southwest Rapid Rewards',
    affiliateUrl: 'https://swa.eyjo.net/c/5414213/302888/4705',
    category: 'flights',
    description: 'Buy Southwest Rapid Rewards points',
    cta: 'Get SW Points',
    icon: '✈️',
    features: [
      'Domestic US positioning flights',
      'Points never expire',
      'No blackout dates',
      'Companion pass qualifying',
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
export const getPartnersByCategory = (category: 'tours' | 'flights' | 'insurance' | 'esim' | 'hotels') => {
  return Object.values(AFFILIATE_LINKS).filter(partner => partner.category === category)
}
