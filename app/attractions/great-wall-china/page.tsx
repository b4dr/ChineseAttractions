import Link from 'next/link'
import { MapPin, Star, Clock, Users, Camera, Shield, Mountain, Calendar, ArrowRight, Sparkles } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Great Wall of China - Complete Travel Guide 2024 | Chinese Attractions',
  description: 'Discover the Great Wall of China with our comprehensive guide. Book tours, learn history, get insider tips, and explore the world\'s most iconic fortification.',
  keywords: [
    'Great Wall of China',
    'Great Wall tours',
    'Mutianyu Great Wall',
    'Beijing attractions',
    'China UNESCO sites',
    'Great Wall tickets',
    'Great Wall history',
    'China travel guide',
    'Great Wall cable car',
    'Ming Dynasty wall'
  ],
  openGraph: {
    title: 'Great Wall of China - Complete Travel Guide 2024',
    description: 'Discover the Great Wall of China with our comprehensive guide. Book tours, learn history, and get insider tips.',
    images: ['/great-wall-og.jpg'],
    url: '/attractions/great-wall-china',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Great Wall of China - Complete Travel Guide 2024',
    description: 'Discover the Great Wall of China with our comprehensive guide.',
    images: ['/great-wall-og.jpg']
  },
  alternates: {
    canonical: '/attractions/great-wall-china'
  }
}

const attractionData = {
  name: 'The Great Wall of China',
  chineseName: '万里长城',
  location: 'Beijing & Northern China',
  rating: 4.9,
  reviews: 125000,
  duration: 'Full Day',
  category: 'UNESCO World Heritage Site',
  established: '7th Century BC - 1644 AD',
  bestTimeToVisit: 'April-May, September-October',
  difficulty: 'Moderate',
  highlights: [
    'UNESCO World Heritage Site since 1987',
    'Mutianyu section with cable car access',
    'Breathtaking mountain panoramas',
    'Ming Dynasty architecture and watchtowers',
    'Over 13,000 miles of fortification',
    'Ancient military defense system'
  ],
  tourIds: ['165345'], // Real GetYourGuide tour ID for Great Wall Mutianyu
  locationId: '189' // Beijing location ID
}

const sections = [
  {
    icon: Mountain,
    title: 'Epic Mountain Views',
    description: 'Experience breathtaking panoramic views of the Chinese countryside from ancient watchtowers.'
  },
  {
    icon: Camera,
    title: 'Photography Paradise',
    description: 'Capture stunning photos at one of the world\'s most photogenic landmarks.'
  },
  {
    icon: Shield,
    title: 'Ancient History',
    description: 'Walk through 2,000+ years of Chinese history and military engineering.'
  },
  {
    icon: Users,
    title: 'Cultural Experience',
    description: 'Learn about Chinese culture and the millions who built this wonder.'
  }
]

const practicalInfo = [
  {
    icon: Clock,
    title: 'Opening Hours',
    details: [
      'Summer (Apr-Oct): 8:00 AM - 5:30 PM',
      'Winter (Nov-Mar): 8:30 AM - 4:30 PM',
      'Last entry: 1 hour before closing'
    ]
  },
  {
    icon: MapPin,
    title: 'Getting There',
    details: [
      'Mutianyu: 1.5 hours from Beijing center',
      'Tour bus: Most convenient option',
      'Private car: Flexible timing',
      'Public transport: Bus 916 + local bus'
    ]
  },
  {
    icon: Calendar,
    title: 'Best Time to Visit',
    details: [
      'Spring (Apr-May): Perfect weather, blooming flowers',
      'Autumn (Sep-Oct): Clear skies, comfortable temperatures',
      'Avoid: Chinese holidays and summer crowds',
      'Early morning: Best for photos and fewer crowds'
    ]
  }
]

export default function GreatWallPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-chinese-500 to-gold-500 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-gold-200 mr-3" />
              <span className="text-gold-200 font-medium text-lg">UNESCO World Heritage Site</span>
            </div>
            
            <h1 className="heading-xl text-white mb-8 animate-fade-in-up">
              {attractionData.name}
              <span className="block text-gradient bg-gradient-to-r from-gold-200 to-yellow-200 bg-clip-text text-transparent text-2xl mt-2">
                {attractionData.chineseName}
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Walk along the most iconic fortification in human history. The Great Wall of China stretches over 13,000 miles 
              and represents 2,000+ years of Chinese engineering mastery and cultural heritage.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center text-gold-200">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{attractionData.location}</span>
              </div>
              <div className="flex items-center text-gold-200">
                <Star className="w-4 h-4 mr-2 fill-current" />
                <span className="font-semibold">{attractionData.rating}</span>
                <span className="text-gray-200 ml-1">({attractionData.reviews.toLocaleString()} reviews)</span>
              </div>
              <div className="flex items-center text-gold-200">
                <Clock className="w-4 h-4 mr-2" />
                <span>{attractionData.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {sections.map((section, index) => {
                const IconComponent = section.icon
                return (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-chinese-50 to-gold-50 rounded-xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-chinese-500 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{section.title}</h3>
                    <p className="text-gray-600 text-sm">{section.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Content Column */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Great Wall</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Great Wall of China stands as humanity's most ambitious architectural achievement, stretching over 13,000 miles 
                      across northern China. Built over more than 2,000 years by various dynasties, this UNESCO World Heritage Site 
                      represents the pinnacle of ancient Chinese military engineering and cultural determination.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The most popular and well-preserved section for visitors is Mutianyu, located about 70 kilometers northeast of Beijing. 
                      This section offers stunning mountain scenery, restored watchtowers, and modern amenities including cable cars and 
                      toboggan rides, making it accessible for visitors of all ages and fitness levels.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Historical Significance</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Construction began in the 7th century BC during the Warring States period, with major expansions during the Ming Dynasty 
                      (1368-1644). The wall served as a formidable defense system against northern invasions while facilitating trade along 
                      the Silk Road. Today, it stands as a symbol of Chinese resilience and ingenuity.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">What to Expect</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                      <li>Spectacular mountain and countryside views</li>
                      <li>Well-preserved Ming Dynasty architecture</li>
                      <li>Multiple watchtowers to explore</li>
                      <li>Cable car access to reduce hiking</li>
                      <li>Professional photography opportunities</li>
                      <li>Cultural exhibitions and museums</li>
                    </ul>
                  </div>
                </div>

                {/* Practical Information */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Practical Information</h2>
                  
                  <div className="grid md:grid-cols-1 gap-8">
                    {practicalInfo.map((info, index) => {
                      const IconComponent = info.icon
                      return (
                        <div key={index} className="flex items-start">
                          <div className="w-12 h-12 bg-gradient-to-br from-chinese-500 to-gold-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                            <ul className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <li key={idx} className="text-gray-600">{detail}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Booking Widget */}
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 sticky top-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Experience</h3>
                  
                  <GetYourGuideWidget 
                    locationId={attractionData.locationId}
                    widgetType="activities"
                    title="Great Wall of China Tours"
                    description="Discover amazing tours and activities for the Great Wall"
                    className="w-full"
                    tourIds={attractionData.tourIds}
                  />
                  
                  <div className="mt-6 p-4 bg-gradient-to-br from-chinese-50 to-gold-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Why Book with GetYourGuide?</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Free cancellation up to 24 hours</li>
                      <li>✓ Instant confirmation</li>
                      <li>✓ Skip-the-line access</li>
                      <li>✓ Expert local guides</li>
                      <li>✓ Small group experiences</li>
                    </ul>
                  </div>
                </div>

                {/* Quick Facts */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium text-gray-900">{attractionData.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Established:</span>
                      <span className="font-medium text-gray-900">{attractionData.established}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Best Time:</span>
                      <span className="font-medium text-gray-900">{attractionData.bestTimeToVisit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Difficulty:</span>
                      <span className="font-medium text-gray-900">{attractionData.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Attractions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More Beijing Attractions</h2>
            <p className="text-gray-600 mb-8">Discover other incredible destinations in Beijing</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/attractions/forbidden-city" className="btn-secondary">
                Forbidden City
              </Link>
              <Link href="/attractions/temple-of-heaven" className="btn-secondary">
                Temple of Heaven
              </Link>
              <Link href="/attractions/summer-palace" className="btn-secondary">
                Summer Palace
              </Link>
              <Link href="/attractions" className="btn-primary">
                View All Attractions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
