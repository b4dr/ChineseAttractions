import Link from 'next/link'
import { MapPin, Mail, Globe, Heart } from 'lucide-react'

const footerLinks = {
  destinations: [
    { name: 'Beijing Attractions', href: '/cities/beijing' },
    { name: 'Shanghai Tours', href: '/cities/shanghai' },
    { name: 'Xi\'an Experiences', href: '/cities/xian' },
    { name: 'Guilin Adventures', href: '/cities/guilin' },
    { name: 'Chengdu Highlights', href: '/cities/chengdu' },
  ],
  attractions: [
    { name: 'Great Wall of China', href: '/attractions/great-wall' },
    { name: 'Forbidden City', href: '/attractions/forbidden-city' },
    { name: 'Terracotta Army', href: '/attractions/terracotta-army' },
    { name: 'Li River Cruise', href: '/attractions/li-river' },
    { name: 'Zhangjiajie National Park', href: '/attractions/zhangjiajie' },
  ],
  resources: [
    { name: 'Travel Blog', href: '/blog' },
    { name: 'Travel Tips', href: '/blog/travel-tips' },
    { name: 'Best Time to Visit', href: '/blog/best-time-to-visit' },
    { name: 'Cultural Guide', href: '/blog/cultural-guide' },
    { name: 'Food & Dining', href: '/blog/food-dining' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
  ]
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">中</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Chinese Attractions
                </h3>
                <p className="text-gray-400 text-sm">
                  Discover Amazing China
                </p>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Your ultimate guide to discovering the most amazing tourist attractions in China. 
              From ancient wonders to modern marvels, we help you explore the best of Chinese culture and heritage.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Globe className="w-4 h-4" />
                <span className="text-sm">chineseattractions.com</span>
              </div>
            </div>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-primary-400" />
              Top Destinations
            </h4>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Famous Attractions */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Famous Attractions
            </h4>
            <ul className="space-y-2">
              {footerLinks.attractions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Travel Resources
            </h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="font-semibold text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <p>
                © {currentYear} Chinese Attractions. All rights reserved.
              </p>
              <p className="hidden md:block">
                Affiliate partnerships with GetYourGuide, Trip.com & AXA
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary-500" />
              <span>for travelers exploring China</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
