import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Plane, CheckCircle, Clock, ArrowRight, Star, DollarSign, Calendar, MapPin, ExternalLink, TrendingDown, Globe, Users, Award, Sparkles, Hotel, Train, Percent, AlertCircle, Lightbulb } from 'lucide-react';
import { AFFILIATE_LINKS } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'Cheap Flights to China 2025: Best Deals & Booking Tips | Chinese Attractions',
  description: 'Find the cheapest flights to China in 2025! Compare airlines, discover the best booking times, and get exclusive deals on Trip.com. Flights from €399 round trip.',
  keywords: 'cheap flights china 2025, flights to beijing, flights to shanghai, trip.com china, best time book china flights, china airline deals, budget travel china',
  openGraph: {
    title: 'Cheap Flights to China 2025: Ultimate Booking Guide',
    description: 'Find flights to China from €399! Best airlines, booking tips, and exclusive deals.',
    type: 'article',
    images: ['/images/blog/cheap-flights-china-2025.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cheap Flights to China 2025',
    description: 'Flights from €399 - Best deals and booking secrets',
  },
  alternates: {
    canonical: 'https://chineseattractions.com/blog/cheap-flights-china-2025',
  },
};

// Major airports in China
const chinaAirports = [
  { city: 'Beijing', code: 'PEK/PKX', name: 'Capital & Daxing International', hub: true, avgPrice: '€450' },
  { city: 'Shanghai', code: 'PVG/SHA', name: 'Pudong & Hongqiao', hub: true, avgPrice: '€420' },
  { city: 'Guangzhou', code: 'CAN', name: 'Baiyun International', hub: true, avgPrice: '€480' },
  { city: 'Chengdu', code: 'CTU/TFU', name: 'Shuangliu & Tianfu', hub: false, avgPrice: '€520' },
  { city: 'Xi\'an', code: 'XIY', name: 'Xianyang International', hub: false, avgPrice: '€550' },
  { city: 'Hangzhou', code: 'HGH', name: 'Xiaoshan International', hub: false, avgPrice: '€490' },
];

// Best airlines for China
const topAirlines = [
  { name: 'Air China', rating: 4.2, directRoutes: true, price: '€€€', pros: 'National carrier, extensive network', cons: 'Service can vary' },
  { name: 'China Eastern', rating: 4.0, directRoutes: true, price: '€€', pros: 'Good prices, Shanghai hub', cons: 'Older aircraft on some routes' },
  { name: 'China Southern', rating: 4.1, directRoutes: true, price: '€€', pros: 'Largest fleet, Guangzhou hub', cons: 'Connections can be long' },
  { name: 'Cathay Pacific', rating: 4.6, directRoutes: false, price: '€€€€', pros: 'Premium service, Hong Kong hub', cons: 'Higher prices' },
  { name: 'Emirates', rating: 4.7, directRoutes: false, price: '€€€€', pros: 'Luxury experience, Dubai hub', cons: 'Long layovers' },
  { name: 'Turkish Airlines', rating: 4.4, directRoutes: false, price: '€€€', pros: 'Great value, Istanbul hub', cons: 'Connection required' },
];

// Best months to book
const bestMonths = [
  { month: 'January', price: 'LOW', reason: 'Post-holiday season, except CNY week', savings: '20-30%' },
  { month: 'February', price: 'HIGH', reason: 'Chinese New Year - avoid!', savings: '-50% more expensive' },
  { month: 'March', price: 'LOW', reason: 'Shoulder season begins', savings: '25-35%' },
  { month: 'April', price: 'MEDIUM', reason: 'Spring travel picks up', savings: '10-15%' },
  { month: 'May', price: 'HIGH', reason: 'Labor Day holiday week', savings: '0%' },
  { month: 'June', price: 'MEDIUM', reason: 'Early summer', savings: '10-20%' },
  { month: 'July-August', price: 'HIGH', reason: 'Peak summer season', savings: '-20% more expensive' },
  { month: 'September', price: 'MEDIUM', reason: 'Shoulder season', savings: '15-25%' },
  { month: 'October', price: 'HIGH', reason: 'Golden Week (Oct 1-7)', savings: '-30% more expensive' },
  { month: 'November', price: 'LOW', reason: 'Best deals of the year!', savings: '30-40%' },
  { month: 'December', price: 'MEDIUM', reason: 'Holiday travel begins', savings: '5-15%' },
];

// Booking tips
const bookingTips = [
  {
    icon: Calendar,
    title: 'Book 8-12 Weeks Ahead',
    description: 'The sweet spot for the best prices. Too early or too late and you\'ll pay more.',
  },
  {
    icon: TrendingDown,
    title: 'Fly Mid-Week',
    description: 'Tuesday and Wednesday flights are typically 15-25% cheaper than weekends.',
  },
  {
    icon: Globe,
    title: 'Consider Nearby Airports',
    description: 'Flying into Shanghai instead of Beijing (or vice versa) can save hundreds.',
  },
  {
    icon: Sparkles,
    title: 'Use Trip.com Deals',
    description: 'Exclusive discounts and package deals not available on other platforms.',
  },
  {
    icon: AlertCircle,
    title: 'Avoid Chinese Holidays',
    description: 'CNY, Golden Week, and Labor Day see prices spike 50-100%.',
  },
  {
    icon: Lightbulb,
    title: 'Set Price Alerts',
    description: 'Track prices and book when they drop. Prices fluctuate daily!',
  },
];

// Sample flight deals
const sampleDeals = [
  { from: 'Paris', to: 'Beijing', price: '€399', airline: 'China Eastern', stops: '1 stop', duration: '12h 30m' },
  { from: 'London', to: 'Shanghai', price: '€429', airline: 'China Southern', stops: '1 stop', duration: '13h 15m' },
  { from: 'Frankfurt', to: 'Beijing', price: '€449', airline: 'Air China', stops: 'Direct', duration: '9h 45m' },
  { from: 'Amsterdam', to: 'Shanghai', price: '€419', airline: 'KLM/China Eastern', stops: '1 stop', duration: '12h 00m' },
  { from: 'Madrid', to: 'Beijing', price: '€479', airline: 'Air China', stops: '1 stop', duration: '14h 20m' },
  { from: 'Rome', to: 'Shanghai', price: '€459', airline: 'China Eastern', stops: '1 stop', duration: '13h 45m' },
];

export default function CheapFlightsChinaGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/pattern-chinese.svg')] opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="bg-yellow-400 text-orange-900 px-4 py-2 rounded-full text-sm font-bold flex items-center">
                <Plane className="w-4 h-4 mr-2" />
                2025 FLIGHT DEALS
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cheap Flights to China 2025
            </h1>
            
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Your complete guide to finding the best flight deals to China. 
              Save hundreds with our insider tips and exclusive Trip.com deals!
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <div className="text-5xl font-bold text-yellow-300 mb-2">From €399</div>
              <div className="text-orange-100">Round trip flights to Beijing & Shanghai</div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={AFFILIATE_LINKS.tripCom.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-yellow-400 hover:bg-yellow-300 text-orange-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Plane className="w-5 h-5 mr-2" />
                Search Flights on Trip.com
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <Link
                href="#booking-tips"
                className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center border border-white/30"
              >
                Read Booking Tips
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-orange-100">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>500+ Airlines</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>Best Price Guarantee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>Free Cancellation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Deals Banner */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 text-white">
            <Sparkles className="w-6 h-6 animate-pulse" />
            <span className="font-bold">🔥 HOT DEALS: Flights to Beijing from €399 | Shanghai from €419 | Limited Time!</span>
            <a
              href={AFFILIATE_LINKS.tripCom.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-white text-green-600 px-4 py-1 rounded-full font-bold text-sm hover:bg-green-50 transition-colors"
            >
              Book Now →
            </a>
          </div>
        </div>
      </section>

      {/* Article Meta */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>By <strong>Travel Deals Team</strong></span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Updated: January 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>12 min read</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500 flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </span>
              <span className="text-sm text-gray-600">4.8/5 (1.8K reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Deals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ✈️ Current Flight Deals to China
              </h2>
              <p className="text-xl text-gray-600">
                Real prices found on Trip.com - Updated daily!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {sampleDeals.map((deal, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-orange-600" />
                      <span className="font-semibold text-gray-900">{deal.from}</span>
                    </div>
                    <Plane className="w-5 h-5 text-orange-500" />
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-red-600" />
                      <span className="font-semibold text-gray-900">{deal.to}</span>
                    </div>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-orange-600">{deal.price}</div>
                    <div className="text-sm text-gray-500">Round trip</div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Airline:</span>
                      <span className="font-medium">{deal.airline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Stops:</span>
                      <span className="font-medium">{deal.stops}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">{deal.duration}</span>
                    </div>
                  </div>
                  
                  <a
                    href={AFFILIATE_LINKS.tripCom.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="mt-4 block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg text-center transition-colors"
                  >
                    Book This Deal
                  </a>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <a
                href={AFFILIATE_LINKS.tripCom.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Plane className="w-5 h-5 mr-2" />
                Search All Flights on Trip.com
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Tips */}
      <section id="booking-tips" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                💡 Pro Tips: How to Find the Cheapest Flights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Follow these insider tips to save hundreds on your China flights
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookingTips.map((tip, index) => {
                const IconComponent = tip.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600">{tip.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Book */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                📅 Best Time to Book Flights to China
              </h2>
              <p className="text-xl text-gray-600">
                Timing is everything! Here's when to book for the best prices
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-orange-500 text-white p-4">
                <div className="grid grid-cols-4 text-center font-bold">
                  <span>Month</span>
                  <span>Price Level</span>
                  <span>Why</span>
                  <span>Savings</span>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {bestMonths.map((item, index) => {
                  const priceColors = {
                    LOW: 'bg-green-100 text-green-700',
                    MEDIUM: 'bg-yellow-100 text-yellow-700',
                    HIGH: 'bg-red-100 text-red-700',
                  };
                  return (
                    <div key={index} className="grid grid-cols-4 p-4 text-center items-center hover:bg-gray-50 transition-colors">
                      <span className="font-semibold text-gray-900">{item.month}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${priceColors[item.price as keyof typeof priceColors]}`}>
                        {item.price}
                      </span>
                      <span className="text-sm text-gray-600">{item.reason}</span>
                      <span className={`font-bold ${item.savings.includes('-') ? 'text-red-600' : 'text-green-600'}`}>
                        {item.savings}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-green-800 text-lg mb-2">🏆 Best Month to Book: November</h3>
                  <p className="text-green-700">
                    November offers the best flight deals of the year with savings of 30-40%! 
                    The weather is pleasant, crowds are smaller, and you'll find amazing prices on Trip.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Airports */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🛫 Major Airports in China
              </h2>
              <p className="text-xl text-gray-600">
                Know your destination airports for the best deals
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chinaAirports.map((airport, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 border-2 ${airport.hub ? 'border-orange-300' : 'border-gray-200'} hover:shadow-lg transition-all`}>
                  {airport.hub && (
                    <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full mb-3 inline-block">
                      MAJOR HUB
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{airport.city}</h3>
                  <p className="text-orange-600 font-mono font-bold mb-2">{airport.code}</p>
                  <p className="text-gray-600 text-sm mb-4">{airport.name}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500">Avg. Price:</span>
                    <span className="font-bold text-lg text-orange-600">{airport.avgPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trip.com Recommendation */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="flex items-center space-x-2 mb-4">
                    <Award className="w-8 h-8 text-orange-500" />
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-bold">
                      OUR TOP RECOMMENDATION
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Book with Trip.com
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    Trip.com is Asia's leading travel platform, offering the best prices on flights, 
                    hotels, and complete travel packages to China.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {AFFILIATE_LINKS.tripCom.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                      24/7 customer support in English
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                      Price match guarantee
                    </li>
                  </ul>
                  
                  <a
                    href={AFFILIATE_LINKS.tripCom.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg w-full justify-center"
                  >
                    <Plane className="w-5 h-5 mr-2" />
                    Search Flights Now
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 md:p-12 text-white flex flex-col justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2">€399</div>
                    <div className="text-xl text-orange-200 mb-6">Round trip from Europe</div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-center space-x-2">
                          <Plane className="w-5 h-5" />
                          <span className="text-xl font-bold">500+</span>
                        </div>
                        <div className="text-orange-200 text-sm">Airlines Compared</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-center space-x-2">
                          <Hotel className="w-5 h-5" />
                          <span className="text-xl font-bold">€25</span>
                        </div>
                        <div className="text-orange-200 text-sm">Hotels from per night</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-center space-x-2">
                          <Percent className="w-5 h-5" />
                          <span className="text-xl font-bold">30%</span>
                        </div>
                        <div className="text-orange-200 text-sm">Average Savings</div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-center">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-orange-200 text-sm mt-2">Rated 4.7/5 by 10M+ travelers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Airlines Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ✈️ Best Airlines for Flying to China
              </h2>
              <p className="text-xl text-gray-600">
                Compare the top airlines for your China journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topAirlines.map((airline, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{airline.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-bold">{airline.rating}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Direct Routes:</span>
                      <span className={`font-medium ${airline.directRoutes ? 'text-green-600' : 'text-orange-600'}`}>
                        {airline.directRoutes ? 'Yes' : 'Via Hub'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Price Range:</span>
                      <span className="font-medium text-gray-900">{airline.price}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200 space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{airline.pros}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{airline.cons}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Plane className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Book Your China Adventure?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Find the best flight deals on Trip.com and start planning your 
              unforgettable journey to China today!
            </p>
            <a
              href={AFFILIATE_LINKS.tripCom.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-orange-900 font-bold px-10 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              <Plane className="w-6 h-6 mr-3" />
              Search Flights from €399
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
            <p className="mt-6 text-orange-200 text-sm">
              ✓ Compare 500+ airlines • ✓ Best price guarantee • ✓ Free cancellation options
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Continue Planning Your China Trip
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/china-travel-insurance-guide-2025" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Travel Insurance Guide 2025</h3>
                <p className="text-gray-600 text-sm mt-2">Protect your trip from €2/day</p>
              </Link>
              <Link href="/blog/china-visa-requirements-2025" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">China Visa Requirements 2025</h3>
                <p className="text-gray-600 text-sm mt-2">Complete application guide</p>
              </Link>
              <Link href="/attractions" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">🏯</div>
                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Top China Attractions</h3>
                <p className="text-gray-600 text-sm mt-2">Must-see destinations</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
