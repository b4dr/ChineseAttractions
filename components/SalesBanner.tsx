'use client'

import { useState } from 'react'
import { X, Mail, Check } from 'lucide-react'

export default function SalesBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [showCopied, setShowCopied] = useState(false)

  if (!isVisible) return null

  const handleContact = async () => {
    try {
      await navigator.clipboard.writeText('badrtarrik@gmail.com')
      setShowCopied(true)
      setTimeout(() => setShowCopied(false), 3000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] bg-paper-200/95 backdrop-blur border-b border-paper-300 text-ink-800">
        <div className="container-custom">
          <div className="flex items-center justify-between py-2 px-4 gap-4">
            {/* Message */}
            <div className="flex-1 flex items-center justify-center gap-3 text-sm md:text-base">
              <span className="seal">售</span>
              <p className="text-center">
                <span className="font-semibold tracking-wide">This website is for sale</span>
                <span className="hidden md:inline mx-2">|</span>
                <span className="block md:inline text-xs md:text-sm opacity-90">
                  本网站可能出售
                </span>
              </p>
            </div>

            {/* Contact Button */}
            <button
              onClick={handleContact}
              className={`flex items-center gap-2 font-bold px-4 py-1.5 rounded-full transition-all duration-300 transform hover:scale-105 text-sm whitespace-nowrap ${
                showCopied 
                  ? 'bg-jade-600 text-paper-50' 
                  : 'bg-jade-600 text-paper-50 hover:bg-jade-700'
              }`}
            >
              {showCopied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Email Copied! 📧</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  <span>Contact Us</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-paper-300 rounded-full transition-all duration-200"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Copied Message */}
      {showCopied && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-[70] bg-jade-700 text-paper-50 px-6 py-3 rounded-md shadow-lg text-center font-semibold">
          <p className="text-base">✅ Email Copied!</p>
          <p className="text-sm opacity-90">邮箱已复制</p>
        </div>
      )}
    </>
  )
}
