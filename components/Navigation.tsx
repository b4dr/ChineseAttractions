'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, MapPin, BookOpen, Home } from 'lucide-react'

const navigationItems = [
  { name: 'Home', href: '/', icon: Home },
  { 
    name: 'Attractions', 
    href: '/attractions', 
    icon: MapPin,
    dropdown: [
      { name: 'Great Wall of China', href: '/attractions#attraction-1' },
      { name: 'Forbidden City', href: '/attractions#attraction-2' },
      { name: 'Terracotta Army', href: '/attractions#attraction-3' },
      { name: 'Temple of Heaven', href: '/attractions#attraction-4' },
      { name: 'Summer Palace', href: '/attractions#attraction-5' },
      { name: 'Li River Cruise', href: '/attractions#attraction-6' },
      { name: 'Zhangjiajie National Park', href: '/attractions#attraction-7' },
      { name: 'Giant Panda Base', href: '/attractions#attraction-8' },
      { name: 'All Attractions', href: '/attractions', divider: true }
    ]
  },
  { 
    name: 'Cities', 
    href: '/cities', 
    icon: MapPin,
    dropdown: [
      { name: 'Beijing', href: '/cities/beijing' },
      { name: 'Shanghai', href: '/cities/shanghai' },
      { name: 'Xi\'an', href: '/cities/xian' },
      { name: 'Guilin', href: '/cities/guilin' },
      { name: 'Chengdu', href: '/cities/chengdu' },
      { name: 'Hangzhou', href: '/cities/hangzhou' },
      { name: 'Suzhou', href: '/cities/suzhou' },
      { name: 'Nanjing', href: '/cities/nanjing' },
      { name: 'All Cities', href: '/cities', divider: true }
    ]
  },
  { name: 'Blog', href: '/blog', icon: BookOpen },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
            onClick={closeMenu}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary-500 to-gold-500 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-lg md:text-xl">中</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-gradient">
                Chinese Attractions
              </h1>
              <p className="text-xs text-gray-600 -mt-1">
                Discover Amazing China
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname.startsWith(item.href))
              
              // Handle dropdown items
              if (item.dropdown) {
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem, index) => (
                          <div key={dropdownItem.name}>
                            {dropdownItem.divider && index > 0 && (
                              <div className="border-t border-gray-200 my-2"></div>
                            )}
                            <Link
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                            >
                              {dropdownItem.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Book Tours CTA and Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* Book Tours CTA Button */}
            <a
              href="https://www.getyourguide.com/s/?et=783639&psrc=widget&partner_id=UENNPLZ&utm_medium=online_publisher&currency=EUR&q=china&queryMatch=all&widget=activities&wid=ab1660d8-9b99-54a5-aca0-795d5c8f4cf9&page_id=0b370c63-1a14-540c-b2c3-b717ab0de411&visitor_id=42XXGCZ2JPC706732CS99U7Q8BXUFZZ7"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-2 bg-gradient-to-r from-gold-500 to-yellow-500 hover:from-gold-600 hover:to-yellow-600 text-chinese-900 font-bold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
              onClick={() => {
                // Track affiliate click
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'click', {
                    event_category: 'affiliate',
                    event_label: 'header_book_tours',
                    value: 1
                  });
                }
              }}
            >
              <span>🎫</span>
              <span>Book Tours</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-4 space-y-2 border-t border-gray-200">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname.startsWith(item.href))
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}

          </div>
        </div>
      </div>
    </nav>
  )
}
