import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Sun, Cloud, Snowflake, Umbrella, Thermometer, Users, Calendar, Star, ExternalLink, TrendingUp, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Time to Visit China 2024 | Weather Guide & Travel Seasons | Chinese Attractions',
  description: 'Discover the best time to visit China with our comprehensive weather guide. Find ideal seasons for Beijing, Shanghai, Xi\'an, Guilin, and more. Expert travel timing advice.',
  keywords: 'best time visit china, china weather, china seasons, beijing weather, shanghai climate, china travel months, china spring autumn, china winter summer, when visit china',
  openGraph: {
    title: 'Best Time to Visit China 2024 | Weather Guide & Travel Seasons',
    description: 'Complete guide to China\'s seasons and weather patterns for perfect trip planning',
    type: 'website',
  },
  alternates: {
    canonical: 'https://chineseattractions.com/best-time-to-visit',
  },
};

const seasons = [
  {
    name: 'Spring',
    months: 'March - May',
    icon: Sun,
    color: 'bg-green-500',
    rating: 5,
    temperature: '15-25°C (59-77°F)',
    pros: [
      'Perfect weather with mild temperatures',
      'Beautiful cherry blossoms and flowers',
      'Less crowded than summer',
      'Great for outdoor activities',
      'Clear skies for photography'
    ],
    cons: [
      'Higher prices during peak season',
      'Some attractions may be busy',
      'Occasional spring rain'
    ],
    bestFor: ['First-time visitors', 'Photography', 'Outdoor activities', 'City exploration'],
    cities: {
      beijing: { temp: '10-20°C', condition: 'Excellent' },
      shanghai: { temp: '15-22°C', condition: 'Perfect' },
      xian: { temp: '12-24°C', condition: 'Ideal' },
      guilin: { temp: '18-26°C', condition: 'Great' }
    }
  },
  {
    name: 'Summer',
    months: 'June - August',
    icon: Thermometer,
    color: 'bg-red-500',
    rating: 3,
    temperature: '25-35°C (77-95°F)',
    pros: [
      'Longest daylight hours',
      'All attractions open',
      'Vibrant green landscapes',
      'Festival season',
      'Great for northern regions'
    ],
    cons: [
      'Very hot and humid',
      'Peak tourist season',
      'Highest prices',
      'Frequent thunderstorms',
      'Air quality issues in some cities'
    ],
    bestFor: ['Northern China', 'Tibet', 'Xinjiang', 'Festival experiences'],
    cities: {
      beijing: { temp: '26-31°C', condition: 'Hot & Humid' },
      shanghai: { temp: '28-33°C', condition: 'Very Hot' },
      xian: { temp: '24-32°C', condition: 'Hot' },
      guilin: { temp: '26-32°C', condition: 'Hot & Rainy' }
    }
  },
  {
    name: 'Autumn',
    months: 'September - November',
    icon: Cloud,
    color: 'bg-orange-500',
    rating: 5,
    temperature: '15-25°C (59-77°F)',
    pros: [
      'Perfect weather conditions',
      'Stunning fall foliage',
      'Clear, crisp air',
      'Comfortable temperatures',
      'Fewer crowds than spring'
    ],
    cons: [
      'Can be windy in northern areas',
      'Shorter daylight hours',
      'Some regions may be dry'
    ],
    bestFor: ['Photography', 'Hiking', 'Cultural sites', 'Food tours'],
    cities: {
      beijing: { temp: '10-22°C', condition: 'Perfect' },
      shanghai: { temp: '18-25°C', condition: 'Excellent' },
      xian: { temp: '12-23°C', condition: 'Ideal' },
      guilin: { temp: '20-28°C', condition: 'Great' }
    }
  },
  {
    name: 'Winter',
    months: 'December - February',
    icon: Snowflake,
    color: 'bg-blue-500',
    rating: 2,
    temperature: '-5-10°C (23-50°F)',
    pros: [
      'Lowest prices and crowds',
      'Winter festivals and activities',
      'Clear skies (less pollution)',
      'Unique winter landscapes',
      'Great for southern China'
    ],
    cons: [
      'Very cold in northern regions',
      'Some attractions may close',
      'Shorter daylight hours',
      'Heating may be inadequate',
      'Limited outdoor activities'
    ],
    bestFor: ['Budget travelers', 'Southern China', 'Winter sports', 'Cultural experiences'],
    cities: {
      beijing: { temp: '-4-4°C', condition: 'Very Cold' },
      shanghai: { temp: '4-10°C', condition: 'Cool' },
      xian: { temp: '-2-8°C', condition: 'Cold' },
      guilin: { temp: '8-16°C', condition: 'Mild' }
    }
  }
];

const monthlyData = [
  { month: 'Jan', temp: 2, rain: 10, crowds: 20, price: 60 },
  { month: 'Feb', temp: 8, rain: 15, crowds: 25, price: 65 },
  { month: 'Mar', temp: 15, rain: 25, crowds: 60, price: 80 },
  { month: 'Apr', temp: 22, rain: 30, crowds: 80, price: 90 },
  { month: 'May', temp: 28, rain: 35, crowds: 85, price: 95 },
  { month: 'Jun', temp: 32, rain: 60, crowds: 90, price: 100 },
  { month: 'Jul', temp: 35, rain: 80, crowds: 95, price: 100 },
  { month: 'Aug', temp: 34, rain: 75, crowds: 90, price: 95 },
  { month: 'Sep', temp: 28, rain: 40, crowds: 70, price: 85 },
  { month: 'Oct', temp: 22, rain: 25, crowds: 75, price: 90 },
  { month: 'Nov', temp: 15, rain: 20, crowds: 50, price: 75 },
  { month: 'Dec', temp: 8, rain: 15, crowds: 30, price: 65 }
];

const regionalGuide = [
  {
    region: 'Northern China',
    cities: ['Beijing', 'Xi\'an', 'Harbin'],
    bestMonths: 'April-May, September-October',
    climate: 'Continental - hot summers, cold winters',
    highlights: ['Great Wall', 'Forbidden City', 'Terracotta Army'],
    tips: 'Avoid summer heat and winter cold. Spring and autumn are perfect.',
  },
  {
    region: 'Eastern China',
    cities: ['Shanghai', 'Hangzhou', 'Suzhou'],
    bestMonths: 'March-May, September-November',
    climate: 'Subtropical - humid summers, mild winters',
    highlights: ['The Bund', 'West Lake', 'Classical Gardens'],
    tips: 'Avoid humid summer. Spring cherry blossoms are spectacular.',
  },
  {
    region: 'Southern China',
    cities: ['Guilin', 'Yangshuo', 'Guangzhou'],
    bestMonths: 'October-April',
    climate: 'Subtropical - hot humid summers, mild winters',
    highlights: ['Li River', 'Karst Mountains', 'Rice Terraces'],
    tips: 'Winter is actually pleasant. Avoid rainy summer season.',
  },
  {
    region: 'Western China',
    cities: ['Chengdu', 'Lhasa', 'Urumqi'],
    bestMonths: 'May-October',
    climate: 'Varied - from subtropical to alpine',
    highlights: ['Giant Pandas', 'Potala Palace', 'Silk Road'],
    tips: 'High altitude areas need summer visits. Check altitude sickness.',
  }
];

export default function BestTimeToVisitPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-chinese-50 to-gold-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">
              Best Time to Visit <span className="text-gradient">China</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Plan your perfect China adventure with our comprehensive weather guide. Discover the ideal seasons, 
              avoid crowds, and save money with expert timing advice for every region.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1 text-primary-500" />
                Year-Round Planning
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-gold-500" />
                All Major Destinations
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-1 text-emerald-500" />
                Price & Crowd Insights
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-chinese-500 to-gold-500 rounded-2xl p-8 text-white text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              🌟 Quick Answer: Spring (April-May) & Autumn (September-October)
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              These are the absolute best times to visit China with perfect weather, comfortable temperatures, 
              and stunning natural beauty. Avoid the summer heat and winter cold!
            </p>
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Complete Seasonal Guide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed breakdown of each season with pros, cons, and city-specific conditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {seasons.map(season => (
              <div key={season.name} className="bg-white rounded-2xl shadow-sm p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${season.color} rounded-xl flex items-center justify-center mr-4`}>
                      <season.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{season.name}</h3>
                      <p className="text-gray-600">{season.months}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < season.rating ? 'text-gold-500 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Thermometer className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="font-medium">Average Temperature: {season.temperature}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3">✅ Pros</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {season.pros.map((pro, index) => (
                        <li key={index}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-3">❌ Cons</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {season.cons.map((con, index) => (
                        <li key={index}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Best For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {season.bestFor.map((item, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">City Conditions:</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between">
                      <span>Beijing:</span>
                      <span className="font-medium">{season.cities.beijing.condition}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shanghai:</span>
                      <span className="font-medium">{season.cities.shanghai.condition}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Xi'an:</span>
                      <span className="font-medium">{season.cities.xian.condition}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Guilin:</span>
                      <span className="font-medium">{season.cities.guilin.condition}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Guide */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Regional Weather Guide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              China is huge! Different regions have completely different climates and best visiting times
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regionalGuide.map((region, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{region.region}</h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Cities: </span>
                    <span className="text-gray-600">{region.cities.join(', ')}</span>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-700">Best Months: </span>
                    <span className="text-primary-600 font-medium">{region.bestMonths}</span>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-700">Climate: </span>
                    <span className="text-gray-600">{region.climate}</span>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-700">Top Attractions: </span>
                    <span className="text-gray-600">{region.highlights.join(', ')}</span>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg mt-4">
                    <span className="font-medium text-blue-800">💡 Pro Tip: </span>
                    <span className="text-blue-700">{region.tips}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Chart */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Month-by-Month Breakdown</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visual guide to temperature, rainfall, crowds, and prices throughout the year
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="grid grid-cols-12 gap-4 mb-8">
              {monthlyData.map((data, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm font-medium text-gray-700 mb-2">{data.month}</div>
                  
                  {/* Temperature */}
                  <div className="mb-3">
                    <div className="text-xs text-gray-500 mb-1">Temp</div>
                    <div className={`h-16 w-full rounded-t ${
                      data.temp > 30 ? 'bg-red-500' :
                      data.temp > 20 ? 'bg-orange-400' :
                      data.temp > 10 ? 'bg-yellow-400' :
                      'bg-blue-400'
                    } flex items-end justify-center`}>
                      <span className="text-xs text-white font-medium pb-1">{data.temp}°</span>
                    </div>
                  </div>
                  
                  {/* Crowds */}
                  <div className="mb-2">
                    <div className="text-xs text-gray-500 mb-1">Crowds</div>
                    <div className={`h-8 w-full rounded ${
                      data.crowds > 80 ? 'bg-red-400' :
                      data.crowds > 60 ? 'bg-yellow-400' :
                      'bg-green-400'
                    } flex items-center justify-center`}>
                      <span className="text-xs text-white font-medium">{data.crowds}%</span>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Price</div>
                    <div className={`h-6 w-full rounded ${
                      data.price > 90 ? 'bg-red-300' :
                      data.price > 70 ? 'bg-yellow-300' :
                      'bg-green-300'
                    } flex items-center justify-center`}>
                      <span className="text-xs font-medium">{data.price}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded mr-2"></div>
                <span>Best Value</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-400 rounded mr-2"></div>
                <span>Moderate</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-400 rounded mr-2"></div>
                <span>Peak/Expensive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-chinese-500 to-gold-500">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Found Your Perfect Travel Time?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Now it's time to book your China adventure! Get the best deals on attractions and tours with our trusted partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/attractions" 
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Browse Top Attractions
              </Link>
              <a 
                href="https://www.getyourguide.com/activity/beijing-l189/beijing-lama-temple-entry-ticket-and-optional-guided-tour-t798721/?partner_id=UENNPLZ&utm_medium=online_publisher&utm_source=chineseattractions&placement=content-end&cmp=best-time"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Book Temple Tours
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
            <p className="text-sm mt-4 opacity-75">
              ✓ Best Price Guarantee ✓ Free Cancellation ✓ Instant Confirmation
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
