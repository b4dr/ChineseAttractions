import Link from 'next/link'
import { MapPin, Star, Clock, Users, Camera, Crown, Building, Calendar, ArrowRight, Sparkles } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forbidden City - Complete Travel Guide 2024 | Chinese Attractions',
  description: 'Explore the Forbidden City with our comprehensive guide. Book tours, discover imperial history, and visit the world\'s largest palace complex.',
  keywords: [
    'Forbidden City',
    'Forbidden City tours',
    'Palace Museum Beijing',
    'Beijing attractions',
    'China imperial palace',
    'Forbidden City tickets',
    'Ming Dynasty palace',
    'China travel guide',
    'Beijing museums',
    'Chinese imperial history'
  ],
  openGraph: {
    title: 'Forbidden City - Complete Travel Guide 2024',
    description: 'Explore the Forbidden City with our comprehensive guide. Book tours and discover imperial history.',
    images: ['/forbidden-city-og.jpg'],
    url: '/attractions/forbidden-city',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forbidden City - Complete Travel Guide 2024',
    description: 'Explore the Forbidden City with our comprehensive guide.',
    images: ['/forbidden-city-og.jpg']
  },
  alternates: {
    canonical: '/attractions/forbidden-city'
  }
}

const attractionData = {
  name: 'The Forbidden City',
  chineseName: '紫禁城',
  location: 'Beijing, China',
  rating: 4.8,
  reviews: 98000,
  duration: '4-6 hours',
  category: 'UNESCO World Heritage Site',
  established: '1406-1420 AD',
  bestTimeToVisit: 'April-May, September-October',
  difficulty: 'Easy',
  highlights: [
    'UNESCO World Heritage Site since 1987',
    'World\'s largest palace complex',
    'Over 9,000 rooms and chambers',
    'Ming and Qing Dynasty artifacts',
    'Imperial throne rooms and gardens',
    'Ancient Chinese architecture masterpiece'
  ],
  tourIds: ['165345'], // Using same Beijing tour ID - can be updated with specific Forbidden City tour
  locationId: '189' // Beijing location ID
}

const sections = [
  {
    icon: Crown,
    title: 'Imperial Heritage',
    description: 'Walk through the home of 24 emperors from Ming and Qing dynasties spanning 500+ years.'
  },
  {
    icon: Building,
    title: 'Architectural Marvel',
    description: 'Admire traditional Chinese palatial architecture with intricate details and symbolism.'
  },
  {
    icon: Camera,
    title: 'Photography Paradise',
    description: 'Capture stunning photos of courtyards, halls, and imperial gardens.'
  },
  {
    icon: Users,
    title: 'Cultural Immersion',
    description: 'Learn about Chinese imperial culture, traditions, and court life.'
  }
]

const practicalInfo = [
  {
    icon: Clock,
    title: 'Opening Hours',
    details: [
      'Apr-Oct: 8:30 AM - 5:00 PM',
      'Nov-Mar: 8:30 AM - 4:30 PM',
      'Closed on Mondays',
      'Last entry: 1 hour before closing'
    ]
  },
  {
    icon: MapPin,
    title: 'Getting There',
    details: [
      'Subway: Line 1 to Tiananmen East/West',
      'Bus: Multiple routes to Tiananmen Square',
      'Taxi: Ask for "Gugong" (故宫)',
      'Walking: From Tiananmen Square (5 minutes)'
    ]
  },
  {
    icon: Calendar,
    title: 'Best Time to Visit',
    details: [
      'Early morning: Fewer crowds, better photos',
      'Spring/Autumn: Perfect weather conditions',
      'Avoid: Chinese holidays and weekends',
      'Winter: Beautiful snow scenes, fewer tourists'
    ]
  }
]

export default function ForbiddenCityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-chinese-500 to-gold-500 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-gold-200 mr-3" />
              <span className="text-gold-200 font-medium text-lg">Imperial Palace Complex</span>
            </div>
            
            <h1 className="heading-xl text-white mb-8 animate-fade-in-up">
              {attractionData.name}
              <span className="block text-gradient bg-gradient-to-r from-gold-200 to-yellow-200 bg-clip-text text-transparent text-2xl mt-2">
                {attractionData.chineseName}
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Step into the heart of imperial China at the world's largest palace complex. The Forbidden City served as the 
              home of emperors for nearly 500 years and houses the world's most extensive collection of ancient Chinese artifacts.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Forbidden City</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Forbidden City, known in Chinese as Zijincheng (紫禁城), stands as the world's largest palace complex 
                      and one of the most significant architectural achievements in human history. Built between 1406 and 1420 
                      during the Ming Dynasty, this UNESCO World Heritage Site served as the imperial palace for 24 emperors 
                      across nearly 500 years.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Covering 180 acres with over 9,000 rooms, the Forbidden City represents the pinnacle of traditional Chinese 
                      palatial architecture. Every detail, from the golden roof tiles to the intricate dragon carvings, was designed 
                      to reflect the emperor's divine authority and the cosmic order of ancient Chinese philosophy.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Imperial History</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      For centuries, this was the exclusive domain of the emperor, his family, and thousands of court officials and 
                      servants. Common people were forbidden from entering, hence the name "Forbidden City." Today, it houses the 
                      Palace Museum with over 1.8 million artifacts, making it one of the world's most important cultural institutions.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Must-See Highlights</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                      <li>Hall of Supreme Harmony - The largest wooden structure in China</li>
                      <li>Imperial Garden - Beautiful traditional Chinese landscaping</li>
                      <li>Hall of Mental Cultivation - Where emperors conducted daily affairs</li>
                      <li>Palace of Heavenly Purity - The emperor's residential quarters</li>
                      <li>Treasure Gallery - Priceless imperial artifacts and jewelry</li>
                      <li>Clock and Watch Gallery - Exquisite timepieces from around the world</li>
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
                    title="Forbidden City Tours"
                    description="Discover amazing tours and activities for the Forbidden City"
                    className="w-full"
                    tourIds={attractionData.tourIds}
                  />
                  
                  <div className="mt-6 p-4 bg-gradient-to-br from-chinese-50 to-gold-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Why Book with GetYourGuide?</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Skip-the-line entrance tickets</li>
                      <li>✓ Expert guide commentary</li>
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
