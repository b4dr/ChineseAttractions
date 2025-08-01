import Link from 'next/link'
import { MapPin, Star, Clock, Users, Camera, TreePine, Building2, Calendar, ArrowRight, Sparkles } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Temple of Heaven - Complete Travel Guide 2024 | Chinese Attractions',
  description: 'Explore the Temple of Heaven with our comprehensive guide. Book tours, discover imperial architecture, and visit Beijing\'s most sacred temple complex.',
  keywords: [
    'Temple of Heaven',
    'Temple of Heaven Beijing',
    'Beijing temples',
    'Chinese architecture',
    'Imperial temples',
    'Temple of Heaven tours',
    'Beijing attractions',
    'China travel guide',
    'UNESCO World Heritage',
    'Chinese culture'
  ],
  openGraph: {
    title: 'Temple of Heaven - Complete Travel Guide 2024',
    description: 'Explore the Temple of Heaven with our comprehensive guide. Book tours and discover imperial architecture.',
    images: ['/temple-heaven-og.jpg'],
    url: '/attractions/temple-of-heaven',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Temple of Heaven - Complete Travel Guide 2024',
    description: 'Explore the Temple of Heaven with our comprehensive guide.',
    images: ['/temple-heaven-og.jpg']
  },
  alternates: {
    canonical: '/attractions/temple-of-heaven'
  }
}

const attractionData = {
  name: 'Temple of Heaven',
  chineseName: '天坛',
  location: 'Beijing, China',
  rating: 4.7,
  reviews: 76000,
  duration: '3-4 hours',
  category: 'UNESCO World Heritage Site',
  established: '1406-1420 AD',
  bestTimeToVisit: 'April-May, September-October',
  difficulty: 'Easy',
  highlights: [
    'UNESCO World Heritage Site since 1998',
    'Masterpiece of Chinese architecture',
    'Hall of Prayer for Good Harvests',
    'Echo Wall acoustic phenomenon',
    'Imperial Vault of Heaven',
    'Beautiful temple park and gardens'
  ],
  tourIds: ['165345'], // Using Beijing tour ID as placeholder
  locationId: '189' // Beijing location ID
}

const sections = [
  {
    icon: Building2,
    title: 'Sacred Architecture',
    description: 'Marvel at the perfect harmony of imperial Chinese architecture and cosmic symbolism.'
  },
  {
    icon: TreePine,
    title: 'Temple Gardens',
    description: 'Stroll through beautiful parklands where locals practice tai chi and traditional activities.'
  },
  {
    icon: Camera,
    title: 'Iconic Photography',
    description: 'Capture the stunning Hall of Prayer with its triple-tiered circular roof.'
  },
  {
    icon: Users,
    title: 'Cultural Experience',
    description: 'Learn about ancient Chinese religious practices and imperial ceremonies.'
  }
]

const practicalInfo = [
  {
    icon: Clock,
    title: 'Opening Hours',
    details: [
      'Apr-Oct: 6:00 AM - 10:00 PM',
      'Nov-Mar: 6:30 AM - 10:00 PM',
      'Buildings: 8:00 AM - 5:30 PM',
      'Open daily (no closing days)'
    ]
  },
  {
    icon: MapPin,
    title: 'Getting There',
    details: [
      'Subway: Line 5 to Tiantan Dongmen',
      'Bus: Routes 6, 34, 35, 36, 39',
      'Taxi: Ask for "Tiantan" (天坛)',
      'Walking: 15 minutes from Qianmen'
    ]
  },
  {
    icon: Calendar,
    title: 'Best Time to Visit',
    details: [
      'Early morning: Watch locals doing tai chi',
      'Spring: Beautiful blooming flowers',
      'Autumn: Perfect weather and colors',
      'Avoid: Weekends and Chinese holidays'
    ]
  }
]

export default function TempleOfHeavenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-chinese-500 to-gold-500 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-gold-200 mr-3" />
              <span className="text-gold-200 font-medium text-lg">Sacred Imperial Temple</span>
            </div>
            
            <h1 className="heading-xl text-white mb-8 animate-fade-in-up">
              {attractionData.name}
              <span className="block text-gradient bg-gradient-to-r from-gold-200 to-yellow-200 bg-clip-text text-transparent text-2xl mt-2">
                {attractionData.chineseName}
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Experience the spiritual heart of imperial Beijing at the Temple of Heaven. This masterpiece of Chinese 
              architecture served as the sacred site where emperors prayed for good harvests and divine favor.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Temple of Heaven</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Temple of Heaven, known in Chinese as Tiantan (天坛), stands as one of Beijing's most iconic 
                      landmarks and a masterpiece of Chinese religious architecture. Built during the Ming Dynasty 
                      (1406-1420), this UNESCO World Heritage Site served as the sacred venue where emperors of the 
                      Ming and Qing dynasties performed annual ceremonies to pray for good harvests.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The temple complex covers 267 hectares and represents the ancient Chinese belief that heaven is 
                      round and earth is square. Every architectural detail reflects this cosmic philosophy, from the 
                      circular buildings to the symbolic use of numbers and colors throughout the complex.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Architectural Highlights</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Hall of Prayer for Good Harvests is the temple's most famous structure, featuring a magnificent 
                      triple-tiered circular roof supported entirely by wooden pillars without a single nail. The building's 
                      design incorporates deep symbolic meaning, with 28 pillars representing constellations and seasons.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Must-See Features</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                      <li>Hall of Prayer for Good Harvests - The iconic triple-tiered building</li>
                      <li>Echo Wall - Experience the amazing acoustic phenomenon</li>
                      <li>Imperial Vault of Heaven - Circular building with perfect acoustics</li>
                      <li>Circular Mound Altar - Where emperors communicated with heaven</li>
                      <li>Seven Star Stones - Ancient stones with mystical significance</li>
                      <li>Temple Park - Beautiful gardens perfect for morning tai chi</li>
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
                    title="Temple of Heaven Tours"
                    description="Discover amazing tours and activities for the Temple of Heaven"
                    className="w-full"
                    tourIds={attractionData.tourIds}
                  />
                  
                  <div className="mt-6 p-4 bg-gradient-to-br from-chinese-50 to-gold-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Why Book with GetYourGuide?</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Skip-the-line entrance tickets</li>
                      <li>✓ Expert cultural guide</li>
                      <li>✓ Small group experiences</li>
                      <li>✓ Free cancellation available</li>
                      <li>✓ Instant confirmation</li>
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
                      <span className="text-gray-600">Built:</span>
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
              <Link href="/attractions/great-wall-china" className="btn-secondary">
                Great Wall of China
              </Link>
              <Link href="/attractions/forbidden-city" className="btn-secondary">
                Forbidden City
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
