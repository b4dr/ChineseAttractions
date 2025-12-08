'use client'

import { Plane, Hotel, Train, CheckCircle, ArrowRight, X, Percent, Calendar } from 'lucide-react'
import { useState } from 'react'
import { AFFILIATE_LINKS, trackAffiliateClick } from '@/lib/affiliates'

interface TripComBannerProps {
  variant?: 'full' | 'compact' | 'sidebar' | 'hero'
  className?: string
}

export default function TripComBanner({ variant = 'full', className = '' }: TripComBannerProps) {
  const [isDismissed, setIsDismissed] = useState(false)
  
  const handleClick = () => {
    trackAffiliateClick('tripCom', `banner_${variant}`)
  }

  if (isDismissed) return null

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Fly to China from €399</p>
              <p className="text-orange-100 text-xs">Best prices on Trip.com</p>
            </div>
          </div>
          <a
            href={AFFILIATE_LINKS.tripCom.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            onClick={handleClick}
            className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-orange-50 transition-colors flex items-center"
          >
            Book Now
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    )
  }

  if (variant === 'sidebar') {
    return (
      <div className={`bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-5 text-white ${className}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Plane className="w-6 h-6" />
            <span className="font-bold">Trip.com</span>
          </div>
          <button onClick={() => setIsDismissed(true)} className="text-white/60 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <h3 className="text-lg font-bold mb-3">Book Your China Trip</h3>
        
        <ul className="space-y-2 mb-4">
          {AFFILIATE_LINKS.tripCom.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-orange-100">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        <a
          href={AFFILIATE_LINKS.tripCom.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          onClick={handleClick}
          className="block w-full bg-white text-orange-600 py-3 rounded-lg font-bold text-center hover:bg-orange-50 transition-colors"
        >
          ✈️ Search Flights
        </a>
        
        <p className="text-xs text-orange-200 text-center mt-3">
          Compare 500+ airlines instantly
        </p>
      </div>
    )
  }

  if (variant === 'hero') {
    return (
      <div className={`bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl p-6 md:p-8 ${className}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
              <Plane className="w-8 h-8" />
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                EXCLUSIVE DEAL
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Flights to China from €399
            </h3>
            <p className="text-orange-100">
              Book flights, hotels & complete packages on Trip.com
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={AFFILIATE_LINKS.tripCom.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={handleClick}
              className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-50 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <Plane className="w-5 h-5 mr-2" />
              Search Flights
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    )
  }

  // Full variant
  return (
    <section className={`bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="w-8 h-8 text-yellow-300" />
                <span className="bg-yellow-400 text-orange-900 px-3 py-1 rounded-full text-sm font-bold">
                  BEST PRICES
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Book Your China Adventure with Trip.com
              </h2>
              
              <p className="text-lg text-orange-100 mb-6">
                Find the best deals on flights, hotels, and travel packages to China. 
                Compare prices from 500+ airlines and thousands of hotels!
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Plane className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm text-orange-100">Flights from €399</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Hotel className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm text-orange-100">Hotels from €25/night</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Train className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm text-orange-100">Train tickets included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Percent className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm text-orange-100">Exclusive discounts</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={AFFILIATE_LINKS.tripCom.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  onClick={handleClick}
                  className="bg-yellow-400 hover:bg-yellow-300 text-orange-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <Plane className="w-5 h-5 mr-2" />
                  Search Flights & Hotels
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
            
            {/* Right Content - Deal Cards */}
            <div className="space-y-4">
              {/* Flight Deal Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Plane className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Flights to Beijing</div>
                      <div className="text-orange-200 text-sm">Direct flights available</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-yellow-300">€399</div>
                    <div className="text-orange-200 text-xs">round trip</div>
                  </div>
                </div>
              </div>
              
              {/* Hotel Deal Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Hotel className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold">5-Star Hotels</div>
                      <div className="text-orange-200 text-sm">Shanghai, Beijing, Xi'an</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-yellow-300">€45</div>
                    <div className="text-orange-200 text-xs">per night</div>
                  </div>
                </div>
              </div>
              
              {/* Package Deal Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold">7-Day Package</div>
                      <div className="text-orange-200 text-sm">Flight + Hotel + Tours</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-yellow-300">€899</div>
                    <div className="text-orange-200 text-xs">all inclusive</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-orange-200">
                  ⭐ Rated 4.7/5 by 10M+ travelers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
