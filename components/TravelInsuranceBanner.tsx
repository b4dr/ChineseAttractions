'use client'

import { Shield, CheckCircle, Phone, Clock, ArrowRight, X } from 'lucide-react'
import { useState } from 'react'
import { AFFILIATE_LINKS, trackAffiliateClick } from '@/lib/affiliates'

interface TravelInsuranceBannerProps {
  variant?: 'full' | 'compact' | 'sidebar'
  className?: string
}

export default function TravelInsuranceBanner({ variant = 'full', className = '' }: TravelInsuranceBannerProps) {
  const [isDismissed, setIsDismissed] = useState(false)
  
  const handleClick = () => {
    trackAffiliateClick('axaInsurance', `banner_${variant}`)
  }

  if (isDismissed) return null

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Protect Your China Trip</p>
              <p className="text-blue-100 text-xs">AXA Travel Insurance from €2/day</p>
            </div>
          </div>
          <a
            href={AFFILIATE_LINKS.axaInsurance.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            onClick={handleClick}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors flex items-center"
          >
            Get Quote
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    )
  }

  if (variant === 'sidebar') {
    return (
      <div className={`bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-5 text-white ${className}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6" />
            <span className="font-bold">AXA Insurance</span>
          </div>
          <button onClick={() => setIsDismissed(true)} className="text-white/60 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <h3 className="text-lg font-bold mb-3">Travel with Peace of Mind</h3>
        
        <ul className="space-y-2 mb-4">
          {AFFILIATE_LINKS.axaInsurance.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-blue-100">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        <a
          href={AFFILIATE_LINKS.axaInsurance.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          onClick={handleClick}
          className="block w-full bg-white text-blue-600 py-3 rounded-lg font-bold text-center hover:bg-blue-50 transition-colors"
        >
          🛡️ Get Insured Now
        </a>
        
        <p className="text-xs text-blue-200 text-center mt-3">
          Trusted by 100M+ travelers worldwide
        </p>
      </div>
    )
  }

  // Full variant
  return (
    <section className={`bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-8 h-8 text-yellow-400" />
                <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                  RECOMMENDED
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Don't Travel to China Without Insurance
              </h2>
              
              <p className="text-lg text-blue-100 mb-6">
                Protect yourself with comprehensive travel insurance from AXA. 
                Medical emergencies in China can cost thousands - be prepared!
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {AFFILIATE_LINKS.axaInsurance.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={AFFILIATE_LINKS.axaInsurance.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  onClick={handleClick}
                  className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Get Your Quote Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
            
            {/* Right Content - Trust Signals */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-white mb-2">€2</div>
                <div className="text-blue-200">per day starting price</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Instant Coverage</div>
                    <div className="text-sm text-blue-200">Get covered in minutes</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <div className="font-semibold">24/7 Assistance</div>
                    <div className="text-sm text-blue-200">Help whenever you need it</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <div className="font-semibold">Free Cancellation</div>
                    <div className="text-sm text-blue-200">Cancel anytime before trip</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/20 text-center">
                <p className="text-sm text-blue-200">
                  Trusted by <span className="text-white font-bold">100M+</span> travelers
                </p>
                <div className="flex justify-center mt-2">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                  <span className="text-white ml-2 text-sm">4.8/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
