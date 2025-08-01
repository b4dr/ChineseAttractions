import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Star, Clock, Users, ArrowRight, Building, Calendar, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Historical Sites & Ancient Attractions in China | Book Tours | ChineseAttractions.com',
  description: 'Explore China\'s most magnificent historical sites and ancient attractions. From the Great Wall to the Forbidden City, discover UNESCO World Heritage sites with expert guides.',
  keywords: 'China historical sites, ancient China attractions, UNESCO World Heritage China, Great Wall tours, Forbidden City, Terracotta Army, Chinese temples, historical tours China',
  openGraph: {
    title: 'Historical Sites & Ancient Attractions in China | Book Tours',
    description: 'Explore China\'s most magnificent historical sites and ancient attractions. From the Great Wall to the Forbidden City, discover UNESCO World Heritage sites.',
    type: 'website',
    url: 'https://chineseattractions.com/attractions/category/historical',
  },
  alternates: {
    canonical: 'https://chineseattractions.com/attractions/category/historical',
  },
}

const categoryInfo = {
  name: 'Historical Sites',
  chineseName: '历史古迹',
  count: 150,
  gradient: 'from-amber-600 via-orange-600 to-red-600',
  description: 'Discover China\'s incredible historical heritage through ancient temples, imperial palaces, and UNESCO World Heritage sites that tell the story of 5,000 years of civilization.',
  longDescription: `China's historical sites represent one of the world's most remarkable collections of ancient architecture, art, and cultural heritage. From the iconic Great Wall that stretches across northern China to the magnificent Forbidden City in Beijing, these attractions offer visitors a chance to step back in time and experience the grandeur of Chinese civilization.

Our carefully curated selection of historical sites includes UNESCO World Heritage locations, ancient temples that have stood for centuries, imperial palaces that housed emperors, and archaeological wonders like the Terracotta Army. Each site tells a unique story of China's rich past, from the Qin Dynasty's ambitious construction projects to the Ming and Qing dynasties' architectural masterpieces.

Whether you're fascinated by ancient military fortifications, religious architecture, or imperial grandeur, China's historical sites offer something for every history enthusiast. Our expert guides bring these ancient stones to life with fascinating stories, historical context, and cultural insights that you won't find in guidebooks.`
}

const historicalSites = [
  {
    id: 1,
    name: 'Great Wall of China - Mutianyu',
    chineseName: '慕田峪长城',
    city: 'Beijing',
    rating: 4.9,
    reviews: 15420,
    duration: '8 hours',
    price: 'From $45',
    gradient: 'from-red-500 via-orange-500 to-yellow-500',
    highlights: ['UNESCO World Heritage', 'Cable Car Included', 'English Guide', 'Small Groups'],
    description: 'Experience the most spectacular and well-preserved section of the Great Wall with breathtaking mountain views.',
    slug: 'great-wall-mutianyu',
    period: 'Ming Dynasty (1368-1644)',
    significance: 'Ancient military fortification'
  },
  {
    id: 2,
    name: 'Forbidden City (Palace Museum)',
    chineseName: '紫禁城',
    city: 'Beijing',
    rating: 4.8,
    reviews: 18750,
    duration: '4 hours',
    price: 'From $38',
    gradient: 'from-purple-600 via-red-600 to-pink-600',
    highlights: ['Imperial Palace', 'UNESCO Site', 'Audio Guide', 'Skip-the-Line'],
    description: 'Explore the world\'s largest palace complex and former home of Chinese emperors for nearly 500 years.',
    slug: 'forbidden-city',
    period: 'Ming & Qing Dynasties (1420-1912)',
    significance: 'Imperial palace complex'
  },
  {
    id: 3,
    name: 'Terracotta Army Museum',
    chineseName: '兵马俑博物馆',
    city: "Xi'an",
    rating: 4.8,
    reviews: 12350,
    duration: '4 hours',
    price: 'From $35',
    gradient: 'from-amber-600 via-orange-600 to-red-600',
    highlights: ['UNESCO World Heritage', 'Expert Guide', 'Skip-the-Line', 'Audio Guide'],
    description: 'Discover the incredible army of life-sized terracotta soldiers guarding Emperor Qin Shi Huang.',
    slug: 'terracotta-army',
    period: 'Qin Dynasty (210-209 BC)',
    significance: 'Funerary art masterpiece'
  },
  {
    id: 4,
    name: 'Temple of Heaven',
    chineseName: '天坛',
    city: 'Beijing',
    rating: 4.7,
    reviews: 9840,
    duration: '3 hours',
    price: 'From $28',
    gradient: 'from-blue-600 via-indigo-600 to-purple-600',
    highlights: ['UNESCO Site', 'Imperial Temple', 'Traditional Architecture', 'Cultural Experience'],
    description: 'Visit the magnificent temple complex where emperors prayed for good harvests and divine favor.',
    slug: 'temple-of-heaven',
    period: 'Ming Dynasty (1420)',
    significance: 'Imperial sacrificial complex'
  },
  {
    id: 5,
    name: 'Summer Palace',
    chineseName: '颐和园',
    city: 'Beijing',
    rating: 4.6,
    reviews: 8920,
    duration: '4 hours',
    price: 'From $32',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    highlights: ['UNESCO Site', 'Imperial Garden', 'Kunming Lake', 'Boat Cruise'],
    description: 'Explore the stunning imperial garden and summer retreat of the Qing Dynasty emperors.',
    slug: 'summer-palace',
    period: 'Qing Dynasty (1750)',
    significance: 'Imperial garden masterpiece'
  },
  {
    id: 6,
    name: 'Potala Palace',
    chineseName: '布达拉宫',
    city: 'Lhasa',
    rating: 4.9,
    reviews: 6750,
    duration: '3 hours',
    price: 'From $55',
    gradient: 'from-red-600 via-orange-600 to-yellow-600',
    highlights: ['UNESCO Site', 'Tibetan Architecture', 'Sacred Site', 'Mountain Views'],
    description: 'Visit the iconic palace and spiritual center of Tibetan Buddhism, perched high above Lhasa.',
    slug: 'potala-palace',
    period: '7th-17th Century',
    significance: 'Tibetan Buddhist palace'
  },
  {
    id: 7,
    name: 'Longmen Grottoes',
    chineseName: '龙门石窟',
    city: 'Luoyang',
    rating: 4.7,
    reviews: 5420,
    duration: '3 hours',
    price: 'From $30',
    gradient: 'from-stone-600 via-gray-600 to-slate-600',
    highlights: ['UNESCO Site', 'Buddhist Art', 'Ancient Carvings', 'Cultural Heritage'],
    description: 'Marvel at thousands of Buddhist statues and carvings in these ancient limestone caves.',
    slug: 'longmen-grottoes',
    period: 'Northern Wei to Tang Dynasty (493-1127)',
    significance: 'Buddhist cave art treasure'
  },
  {
    id: 8,
    name: 'Ming Tombs',
    chineseName: '明十三陵',
    city: 'Beijing',
    rating: 4.5,
    reviews: 4680,
    duration: '4 hours',
    price: 'From $40',
    gradient: 'from-gray-700 via-slate-700 to-zinc-700',
    highlights: ['UNESCO Site', 'Imperial Tombs', 'Sacred Way', 'Underground Palace'],
    description: 'Explore the magnificent burial complex of 13 Ming Dynasty emperors in a sacred valley.',
    slug: 'ming-tombs',
    period: 'Ming Dynasty (1409-1644)',
    significance: 'Imperial burial complex'
  },
  {
    id: 9,
    name: 'Shaolin Temple',
    chineseName: '少林寺',
    city: 'Dengfeng',
    rating: 4.6,
    reviews: 7230,
    duration: '5 hours',
    price: 'From $42',
    gradient: 'from-orange-600 via-red-600 to-pink-600',
    highlights: ['Kung Fu Origin', 'Buddhist Temple', 'Martial Arts Show', 'Cultural Experience'],
    description: 'Visit the birthplace of Kung Fu and Zen Buddhism at this legendary mountain temple.',
    slug: 'shaolin-temple',
    period: 'Northern Wei Dynasty (495 AD)',
    significance: 'Birthplace of Kung Fu'
  }
]

export default function HistoricalSitesPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${categoryInfo.gradient} text-white overflow-hidden`}>
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-sm text-white/80 mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/attractions" className="hover:text-white">Attractions</Link>
              <span>/</span>
              <span className="text-white">Historical Sites</span>
            </nav>
            
            <div className="flex items-center justify-center mb-6">
              <Building className="w-8 h-8 text-gold-400 mr-3" />
              <span className="text-gold-400 font-medium text-lg">{categoryInfo.count} Historical Attractions</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6 animate-fade-in-up">
              China's Most Magnificent
              <span className="block text-gradient bg-gradient-to-r from-gold-400 to-yellow-300 bg-clip-text text-transparent">
                Historical Sites
              </span>
            </h1>
            
            <p className="text-2xl text-white/90 font-serif mb-6">
              {categoryInfo.chineseName}
            </p>
            
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              {categoryInfo.description}
            </p>
            
            <div className="flex items-center justify-center space-x-8 mt-12 text-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">15+</div>
                <div className="text-sm">UNESCO Sites</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">5000+</div>
                <div className="text-sm">Years History</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">150+</div>
                <div className="text-sm">Historical Sites</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-12">Discover China's Ancient Heritage</h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {categoryInfo.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Historical Sites Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              Featured Historical Sites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore China's most significant historical attractions with expert guides and skip-the-line access
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {historicalSites.map((site, index) => (
              <article 
                key={site.id} 
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative">
                  <div className={`h-48 bg-gradient-to-br ${site.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-3 left-3 w-6 h-6 border-2 border-white/30 rounded-full"></div>
                      <div className="absolute top-4 right-4 w-4 h-4 border-2 border-white/20 rounded-full"></div>
                      <div className="absolute bottom-3 left-4 w-3 h-3 border-2 border-white/25 rounded-full"></div>
                      <div className="absolute bottom-4 right-3 w-8 h-8 border-2 border-white/15 rounded-full"></div>
                    </div>
                    
                    {/* Site Names */}
                    <div className="text-center z-10 px-4">
                      <h3 className="text-2xl font-bold text-white mb-1 font-serif">
                        {site.chineseName}
                      </h3>
                      <p className="text-sm text-white/90 font-light tracking-wide">
                        {site.name}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                    {site.city}
                  </div>
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white px-2 py-1 rounded text-sm font-medium">
                    {site.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="font-medium">{site.rating}</span>
                      <span className="ml-1">({site.reviews.toLocaleString()})</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{site.duration}</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-xs text-gray-500 mb-1">Historical Period</div>
                    <div className="text-sm font-medium text-gray-700">{site.period}</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-1">Significance</div>
                    <div className="text-sm text-gray-700">{site.significance}</div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {site.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {site.highlights.slice(0, 3).map((highlight) => (
                      <span 
                        key={highlight}
                        className="text-xs bg-primary-50 text-primary-600 px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/attractions/${site.slug}`}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    View Details & Book
                    <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/attractions/category/historical/all" className="btn-outline inline-flex items-center justify-center">
              View All {categoryInfo.count} Historical Sites
              <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* GetYourGuide Widget Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              Book Historical Site Tours
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover China's ancient heritage with expert guides and skip-the-line access
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="gyg-widget-container shadow-xl rounded-xl overflow-hidden bg-white">
              <div className={`p-6 bg-gradient-to-r ${categoryInfo.gradient} text-white text-center`}>
                <h3 className="text-2xl font-bold mb-2">China Historical Sites & Ancient Attractions</h3>
                <p className="text-orange-100">Book guided tours to UNESCO World Heritage sites and ancient wonders</p>
              </div>
              <div 
                data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
                data-gyg-locale-code="en-US" 
                data-gyg-widget="activities" 
                data-gyg-number-of-items="8" 
                data-gyg-partner-id="UENNPLZ"
                data-gyg-q="China historical sites temples palaces"
                data-gyg-currency="USD"
                className="min-h-[600px]"
              ></div>
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

      {/* Other Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Explore Other Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/attractions/category/natural" className="group">
              <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl p-6 h-32 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold font-serif mb-1">自然奇观</h3>
                  <p className="text-sm">Natural Wonders</p>
                </div>
              </div>
            </Link>
            
            <Link href="/attractions/category/cultural" className="group">
              <div className="bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500 rounded-2xl p-6 h-32 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold font-serif mb-1">文化体验</h3>
                  <p className="text-sm">Cultural Experiences</p>
                </div>
              </div>
            </Link>
            
            <Link href="/attractions/category/modern" className="group">
              <div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-2xl p-6 h-32 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold font-serif mb-1">现代景点</h3>
                  <p className="text-sm">Modern Attractions</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
