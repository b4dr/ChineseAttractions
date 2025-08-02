import Link from 'next/link'
import { MapPin, Star, Users, Clock, ArrowRight, Sparkles } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chinese Attractions | Discover Amazing Places in China',
  description: 'Explore the most spectacular tourist attractions in China. From the Great Wall to the Forbidden City, discover and book unforgettable experiences with our comprehensive travel guide.',
  keywords: [
    'China attractions',
    'Chinese tourism',
    'Great Wall tours',
    'Forbidden City tickets',
    'Beijing attractions',
    'Shanghai tours',
    'China travel guide',
    'Chinese landmarks',
    'China sightseeing',
    'China vacation packages'
  ],
  openGraph: {
    title: 'Chinese Attractions | Discover Amazing Places in China',
    description: 'Explore the most spectacular tourist attractions in China. From the Great Wall to the Forbidden City, discover and book unforgettable experiences.',
    images: ['/og-home.jpg'],
  },
}

// Featured attractions data
const featuredAttractions = [
  {
    id: 'great-wall',
    name: 'Great Wall of China',
    city: 'Beijing',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=600&fit=crop',
    rating: 4.8,
    reviews: 12543,
    price: 'From $45',
    duration: '8 hours',
    highlights: ['UNESCO World Heritage', 'Ancient Wonder', 'Breathtaking Views'],
    locationId: '189', // Beijing location ID for GetYourGuide
    slug: 'great-wall'
  },
  {
    id: 'forbidden-city',
    name: 'Forbidden City',
    city: 'Beijing',
    image: 'https://images.unsplash.com/photo-1537819191377-d3305ffddce4?w=800&h=600&fit=crop',
    rating: 4.7,
    reviews: 8932,
    price: 'From $35',
    duration: '4 hours',
    highlights: ['Imperial Palace', 'Ming Dynasty', 'Cultural Heritage'],
    locationId: '189',
    slug: 'forbidden-city'
  },
  {
    id: 'terracotta-army',
    name: 'Terracotta Army',
    city: 'Xi\'an',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop',
    rating: 4.9,
    reviews: 6754,
    price: 'From $55',
    duration: '6 hours',
    highlights: ['Archaeological Wonder', 'Qin Dynasty', '8,000 Warriors'],
    locationId: '303', // Xi'an location ID
    slug: 'terracotta-army'
  },
  {
    id: 'li-river',
    name: 'Li River Cruise',
    city: 'Guilin',
    image: 'https://images.unsplash.com/photo-1519640760746-95d1211ebed6?w=800&h=600&fit=crop',
    rating: 4.6,
    reviews: 4321,
    price: 'From $65',
    duration: '5 hours',
    highlights: ['Scenic Cruise', 'Karst Mountains', 'Natural Beauty'],
    locationId: '224', // Guilin location ID
    slug: 'li-river'
  }
]

const topDestinations = [
  { name: 'Beijing', chineseName: '北京', attractions: 22, gradient: 'from-red-500 via-orange-500 to-yellow-500', slug: 'beijing' },
  { name: 'Shanghai', chineseName: '上海', attractions: 18, gradient: 'from-blue-500 via-purple-500 to-pink-500', slug: 'shanghai' },
  { name: 'Xi\'an', chineseName: '西安', attractions: 15, gradient: 'from-orange-500 via-red-500 to-pink-500', slug: 'xian' },
  { name: 'Guilin', chineseName: '桂林', attractions: 12, gradient: 'from-green-500 via-teal-500 to-blue-500', slug: 'guilin' },
  { name: 'Chengdu', chineseName: '成都', attractions: 14, gradient: 'from-purple-500 via-pink-500 to-red-500', slug: 'chengdu' },
  { name: 'Hangzhou', chineseName: '杭州', attractions: 16, gradient: 'from-teal-500 via-green-500 to-emerald-500', slug: 'hangzhou' },
  { name: 'Suzhou', chineseName: '苏州', attractions: 11, gradient: 'from-indigo-500 via-blue-500 to-cyan-500', slug: 'suzhou' },
  { name: 'Nanjing', chineseName: '南京', attractions: 13, gradient: 'from-rose-500 via-pink-500 to-purple-500', slug: 'nanjing' }
]

export default function HomePage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="hero-mobile relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-chinese-900 via-chinese-800 to-chinese-700">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-3 sm:px-4 text-center z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-xl text-white mb-6 animate-fade-in-up">
              Discover
              <span className="block text-gradient bg-gradient-to-r from-gold-400 to-yellow-300 bg-clip-text text-transparent">
                China's Wonders
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed px-2">
              Explore ancient temples, majestic palaces, and breathtaking landscapes.
              <span className="block mt-2 text-gold-300 font-medium">
                Your ultimate guide to China's most spectacular attractions.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
              <Link href="/attractions" className="btn-mobile-optimized bg-gradient-to-r from-gold-500 to-yellow-500 hover:from-gold-600 hover:to-yellow-600 text-chinese-900 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center w-full sm:w-auto">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Explore Attractions
              </Link>
              <Link href="/cities" className="btn-mobile-optimized bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-bold rounded-lg transition-all duration-300 inline-flex items-center justify-center w-full sm:w-auto">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Browse Cities
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-12 text-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">500+</div>
                <div className="text-sm">Attractions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">50+</div>
                <div className="text-sm">Cities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">1M+</div>
                <div className="text-sm">Happy Travelers</div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* GetYourGuide Widget Section - Revenue Driver */}
      <section className="section-mobile bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="heading-mobile-lg text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Book Your China Adventure
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Discover and book amazing experiences across China with our trusted travel partner
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* High-Converting GetYourGuide Widget */}
            <div className="getyourguide-widget-mobile shadow-xl rounded-xl overflow-hidden bg-white">
              <div className="p-4 sm:p-6 bg-gradient-to-r from-chinese-500 to-gold-500 text-white text-center">
                <h3 className="text-lg sm:text-2xl font-bold mb-2">Book Amazing China Experiences</h3>
                <p className="text-sm sm:text-base text-primary-100">Discover and book the best tours, activities, and attractions across China</p>
              </div>
              <div 
                data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
                data-gyg-locale-code="en-US" 
                data-gyg-widget="activities" 
                data-gyg-number-of-items="8" 
                data-gyg-partner-id="UENNPLZ" 
                data-gyg-q="china"
                className="min-h-[400px] sm:min-h-[600px] bg-gray-50 flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-3 border-primary-500 mx-auto mb-6"></div>
                  <p className="text-gray-600 text-lg">Loading amazing China experiences...</p>
                  <p className="text-gray-500 text-sm mt-2">Discover tours, activities, and attractions</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 text-center">
                <span className="text-sm text-gray-500">
                  Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/china-l186/" className="text-primary-600 hover:underline font-medium">GetYourGuide</a> | 
                  <span className="text-emerald-600 font-medium">Free Cancellation</span> | 
                  <span className="text-blue-600 font-medium">Instant Confirmation</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="section-mobile bg-white">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="heading-mobile-lg text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Explore Top Destinations
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              From bustling metropolises to ancient cities, discover China's most captivating destinations
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {topDestinations.map((destination, index) => (
              <Link 
                key={destination.name}
                href={`/cities/${destination.slug}`}
                className="group block animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`card-mobile relative overflow-hidden rounded-xl aspect-square bg-gradient-to-br ${destination.gradient} flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1 sm:top-2 left-1 sm:left-2 w-2 h-2 sm:w-4 sm:h-4 border border-white/30 rounded-full"></div>
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-2 h-2 sm:w-3 sm:h-3 border border-white/20 rounded-full"></div>
                    <div className="absolute bottom-1 sm:bottom-2 left-2 sm:left-3 w-1 h-1 sm:w-2 sm:h-2 border border-white/25 rounded-full"></div>
                    <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 w-3 h-3 sm:w-5 sm:h-5 border border-white/15 rounded-full"></div>
                  </div>
                  
                  {/* City Names */}
                  <div className="text-center z-10 px-1 sm:px-2">
                    <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 font-serif tracking-wide">
                      {destination.chineseName}
                    </h3>
                    <p className="text-xs sm:text-sm text-white font-light tracking-widest opacity-90">
                      {destination.name.toUpperCase()}
                    </p>
                    <p className="text-xs text-white/80 mt-1">{destination.attractions} attractions</p>
                  </div>
                  
                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/cities" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center">
              Explore All Cities
              <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-chinese-50 to-gold-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              Why Choose Chinese Attractions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted guide to exploring the wonders of China
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Comprehensive Coverage
              </h3>
              <p className="text-gray-600">
                500+ attractions across 50+ cities with detailed information and insider tips
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Trusted by Millions
              </h3>
              <p className="text-gray-600">
                Over 1 million travelers have used our guides to explore China's amazing attractions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Best Experiences
              </h3>
              <p className="text-gray-600">
                Curated selection of the highest-rated tours and activities from trusted partners
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
