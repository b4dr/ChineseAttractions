import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Star, Users, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Top Chinese Cities to Visit | Complete Travel Guide to China\'s Best Destinations',
  description: 'Explore China\'s most amazing cities and destinations. From Beijing to Shanghai, discover the best attractions, tours, and experiences in China\'s top travel destinations.',
  keywords: [
    'Chinese cities',
    'China destinations',
    'China travel guide',
    'Beijing attractions',
    'Shanghai tours',
    'Chinese tourism',
    'China vacation',
    'Chinese landmarks',
    'China sightseeing',
    'China city guide'
  ],
  openGraph: {
    title: 'Top Chinese Cities to Visit | Complete Travel Guide',
    description: 'Explore China\'s most amazing cities and destinations. From Beijing to Shanghai, discover the best attractions and experiences.',
    images: ['/cities-og.jpg'],
    url: '/cities',
  },
}

const cities = [
  {
    name: 'Beijing',
    chineseName: '北京',
    slug: 'beijing',
    description: 'China\'s capital city featuring the Great Wall, Forbidden City, and rich imperial history',
    gradient: 'from-red-500 via-orange-500 to-yellow-500',
    textColor: 'text-white',
    attractions: 45,
    rating: 4.8,
    visitors: '21M+',
    highlights: ['Great Wall of China', 'Forbidden City', 'Temple of Heaven', 'Summer Palace'],
    bestFor: ['History Lovers', 'Culture Enthusiasts', 'First-time Visitors'],
    region: 'Northern China'
  },
  {
    name: 'Shanghai',
    chineseName: '上海',
    slug: 'shanghai',
    description: 'Modern metropolis with stunning skyline, historic Bund, and vibrant culture',
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    textColor: 'text-white',
    attractions: 38,
    rating: 4.7,
    visitors: '18M+',
    highlights: ['The Bund', 'Oriental Pearl Tower', 'Yu Garden', 'French Concession'],
    bestFor: ['Architecture Fans', 'Shopping Lovers', 'Modern Culture'],
    region: 'Eastern China'
  },
  {
    name: 'Xi\'an',
    chineseName: '西安',
    slug: 'xian',
    description: 'Ancient capital home to the famous Terracotta Army and Silk Road history',
    gradient: 'from-amber-600 via-orange-600 to-red-600',
    textColor: 'text-white',
    attractions: 22,
    rating: 4.9,
    visitors: '8M+',
    highlights: ['Terracotta Army', 'Ancient City Wall', 'Big Wild Goose Pagoda', 'Muslim Quarter'],
    bestFor: ['History Buffs', 'Archaeological Enthusiasts', 'Cultural Explorers'],
    region: 'Northwestern China'
  },
  {
    name: 'Guilin',
    chineseName: '桂林',
    slug: 'guilin',
    description: 'Breathtaking karst landscapes, Li River cruises, and natural beauty',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    textColor: 'text-white',
    attractions: 18,
    rating: 4.6,
    visitors: '5M+',
    highlights: ['Li River Cruise', 'Reed Flute Cave', 'Elephant Trunk Hill', 'Yangshuo'],
    bestFor: ['Nature Lovers', 'Photographers', 'Adventure Seekers'],
    region: 'Southern China'
  },
  {
    name: 'Chengdu',
    chineseName: '成都',
    slug: 'chengdu',
    description: 'Panda capital of the world with spicy cuisine and laid-back lifestyle',
    gradient: 'from-green-500 via-lime-500 to-yellow-500',
    textColor: 'text-white',
    attractions: 25,
    rating: 4.5,
    visitors: '12M+',
    highlights: ['Giant Panda Base', 'Jinli Ancient Street', 'Wuhou Shrine', 'Sichuan Cuisine'],
    bestFor: ['Animal Lovers', 'Food Enthusiasts', 'Relaxed Travel'],
    region: 'Southwestern China'
  },
  {
    name: 'Hangzhou',
    chineseName: '杭州',
    slug: 'hangzhou',
    description: 'Paradise on earth with West Lake, tea culture, and classical gardens',
    gradient: 'from-indigo-500 via-blue-500 to-cyan-500',
    textColor: 'text-white',
    attractions: 16,
    rating: 4.4,
    visitors: '7M+',
    highlights: ['West Lake', 'Lingyin Temple', 'Tea Plantations', 'Six Harmonies Pagoda'],
    bestFor: ['Romantic Getaways', 'Tea Lovers', 'Peaceful Retreats'],
    region: 'Eastern China'
  },
  {
    name: 'Suzhou',
    chineseName: '苏州',
    slug: 'suzhou',
    description: 'Venice of the East with UNESCO classical gardens and ancient canals',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    textColor: 'text-white',
    attractions: 20,
    rating: 4.6,
    visitors: '15M+',
    highlights: ['Humble Administrator Garden', 'Tiger Hill', 'Pingjiang Road', 'Silk Museums'],
    bestFor: ['Garden Enthusiasts', 'Cultural Travelers', 'Photography Lovers'],
    region: 'Eastern China'
  },
  {
    name: 'Nanjing',
    chineseName: '南京',
    slug: 'nanjing',
    description: 'Ancient capital with Ming tombs, historical monuments, and rich heritage',
    gradient: 'from-slate-600 via-gray-600 to-zinc-600',
    textColor: 'text-white',
    attractions: 24,
    rating: 4.5,
    visitors: '8M+',
    highlights: ['Ming Xiaoling Mausoleum', 'Sun Yat-sen Mausoleum', 'Confucius Temple', 'Purple Mountain'],
    bestFor: ['History Enthusiasts', 'Memorial Tourism', 'Educational Travel'],
    region: 'Eastern China'
  }
]

export default function CitiesPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6 animate-fade-in-up">
              Explore China's
              <span className="block text-gradient bg-gradient-to-r from-gold-400 to-yellow-300 bg-clip-text text-transparent">
                Most Amazing Cities
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              From ancient capitals steeped in history to modern metropolises reaching for the sky, 
              discover China's diverse cities and their unique attractions, culture, and experiences.
            </p>
            
            <div className="flex items-center justify-center space-x-8 mt-12 text-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">50+</div>
                <div className="text-sm">Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">500+</div>
                <div className="text-sm">Total Attractions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">5,000+</div>
                <div className="text-sm">Years of History</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              Top Chinese Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover China's most captivating cities, each offering unique experiences and unforgettable attractions
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <article 
                key={city.slug} 
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group h-full flex flex-col"
              >
                <div className={`relative overflow-hidden bg-gradient-to-br ${city.gradient} h-48 sm:h-56 md:h-64 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
                    <div className="absolute top-8 right-8 w-6 h-6 border-2 border-white/20 rounded-full"></div>
                    <div className="absolute bottom-6 left-8 w-4 h-4 border-2 border-white/25 rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-white/15 rounded-full"></div>
                  </div>
                  
                  {/* City Names */}
                  <div className="text-center z-10">
                    <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${city.textColor} mb-2 font-serif tracking-wide`}>
                      {city.chineseName}
                    </h2>
                    <p className={`text-lg sm:text-xl md:text-2xl ${city.textColor} font-light tracking-widest opacity-90`}>
                      {city.name.toUpperCase()}
                    </p>
                  </div>
                  
                  {/* Region Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium border border-white/30">
                      {city.region}
                    </span>
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1 border border-white/30">
                      <Star className="w-3 h-3 text-yellow-300" />
                      <span className="text-xs font-medium text-white">{city.rating}</span>
                    </div>
                  </div>
                  
                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {city.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base flex-1">
                    {city.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span>{city.attractions} attractions</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span>{city.visitors} visitors/year</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">Top Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {city.highlights.slice(0, 3).map((highlight) => (
                        <span 
                          key={highlight}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">Perfect For:</h4>
                    <div className="flex flex-wrap gap-1">
                      {city.bestFor.map((type) => (
                        <span 
                          key={type}
                          className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/cities/${city.slug}`}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base mt-auto"
                  >
                    Explore {city.name}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Guide */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              Explore China by Region
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each region of China offers distinct landscapes, cultures, and experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
            <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Northern China</h3>
              <p className="text-gray-600 text-sm mb-4">Imperial history, ancient architecture, and cultural heritage</p>
              <div className="text-sm text-primary-600">Beijing, Tianjin, Harbin</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Eastern China</h3>
              <p className="text-gray-600 text-sm mb-4">Modern cities, classical gardens, and economic powerhouses</p>
              <div className="text-sm text-primary-600">Shanghai, Hangzhou, Nanjing, Suzhou</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Southern China</h3>
              <p className="text-gray-600 text-sm mb-4">Stunning landscapes, karst formations, and natural wonders</p>
              <div className="text-sm text-primary-600">Guilin, Guangzhou, Shenzhen</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Northwestern China</h3>
              <p className="text-gray-600 text-sm mb-4">Ancient Silk Road, diverse cultures, and historical treasures</p>
              <div className="text-sm text-primary-600">Xi'an</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Southwestern China</h3>
              <p className="text-gray-600 text-sm mb-4">Panda habitats, spicy cuisine, and laid-back lifestyle</p>
              <div className="text-sm text-primary-600">Chengdu</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-6">
            Start Your China Adventure
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Ready to explore China's incredible cities? Discover detailed guides, book tours, 
            and plan your perfect Chinese adventure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/attractions" className="btn-secondary bg-white text-primary-600 hover:bg-gray-50 text-lg px-8 py-4">
              Browse All Attractions
            </Link>
            <Link href="/blog" className="btn-outline border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              Read Travel Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
