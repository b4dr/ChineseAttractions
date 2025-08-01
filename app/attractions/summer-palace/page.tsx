import Link from 'next/link'
import { MapPin, Star, Clock, Users, Camera, Waves, TreePine, Calendar, ArrowRight, Sparkles } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Summer Palace - Complete Travel Guide 2024 | Chinese Attractions',
  description: 'Explore the Summer Palace with our comprehensive guide. Book tours, discover imperial gardens, and visit Beijing\'s most beautiful royal retreat.',
  keywords: [
    'Summer Palace',
    'Summer Palace Beijing',
    'Imperial gardens',
    'Kunming Lake',
    'Chinese gardens',
    'Summer Palace tours',
    'Beijing attractions',
    'China travel guide',
    'UNESCO World Heritage',
    'Royal palace'
  ],
  openGraph: {
    title: 'Summer Palace - Complete Travel Guide 2024',
    description: 'Explore the Summer Palace with our comprehensive guide. Book tours and discover imperial gardens.',
    images: ['/summer-palace-og.jpg'],
    url: '/attractions/summer-palace',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Summer Palace - Complete Travel Guide 2024',
    description: 'Explore the Summer Palace with our comprehensive guide.',
    images: ['/summer-palace-og.jpg']
  },
  alternates: {
    canonical: '/attractions/summer-palace'
  }
}

const attractionData = {
  name: 'Summer Palace',
  chineseName: '颐和园',
  location: 'Beijing, China',
  rating: 4.6,
  reviews: 68000,
  duration: '4-6 hours',
  category: 'UNESCO World Heritage Site',
  established: '1750 (Qing Dynasty)',
  bestTimeToVisit: 'April-May, September-October',
  difficulty: 'Easy',
  highlights: [
    'UNESCO World Heritage Site since 1998',
    'Largest imperial garden in China',
    'Beautiful Kunming Lake and Longevity Hill',
    'Marble Boat and Long Corridor',
    'Traditional Chinese garden design',
    'Former royal summer retreat'
  ],
  tourIds: ['165345'], // Using Beijing tour ID as placeholder
  locationId: '189' // Beijing location ID
}

const sections = [
  {
    icon: Waves,
    title: 'Kunming Lake',
    description: 'Enjoy boat rides on the serene lake that covers three-quarters of the palace grounds.'
  },
  {
    icon: TreePine,
    title: 'Imperial Gardens',
    description: 'Stroll through meticulously designed gardens showcasing Chinese landscape artistry.'
  },
  {
    icon: Camera,
    title: 'Scenic Photography',
    description: 'Capture stunning views of pavilions, bridges, and traditional architecture.'
  },
  {
    icon: Users,
    title: 'Royal History',
    description: 'Learn about the Qing Dynasty and Empress Dowager Cixi\'s summer residence.'
  }
]

const practicalInfo = [
  {
    icon: Clock,
    title: 'Opening Hours',
    details: [
      'Apr-Oct: 6:30 AM - 6:00 PM',
      'Nov-Mar: 7:00 AM - 5:00 PM',
      'Park closes 1 hour after ticket sales',
      'Open daily (no closing days)'
    ]
  },
  {
    icon: MapPin,
    title: 'Getting There',
    details: [
      'Subway: Line 4 to Beigongmen Station',
      'Bus: Routes 330, 331, 332, 346',
      'Taxi: Ask for "Yiheyuan" (颐和园)',
      'Distance: 15km from Beijing center'
    ]
  },
  {
    icon: Calendar,
    title: 'Best Time to Visit',
    details: [
      'Spring: Beautiful blooming flowers',
      'Summer: Lush greenery and boat rides',
      'Autumn: Stunning fall colors',
      'Early morning: Peaceful atmosphere'
    ]
  }
]

export default function SummerPalacePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-chinese-500 to-gold-500 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-gold-200 mr-3" />
              <span className="text-gold-200 font-medium text-lg">Imperial Garden Paradise</span>
            </div>
            
            <h1 className="heading-xl text-white mb-8 animate-fade-in-up">
              {attractionData.name}
              <span className="block text-gradient bg-gradient-to-r from-gold-200 to-yellow-200 bg-clip-text text-transparent text-2xl mt-2">
                {attractionData.chineseName}
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Escape to the Summer Palace, China's largest and most beautiful imperial garden. This UNESCO World Heritage 
              Site combines stunning natural landscapes with exquisite architecture in perfect harmony.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Summer Palace</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Summer Palace, known in Chinese as Yiheyuan (颐和园), represents the pinnacle of Chinese garden 
                      design and imperial luxury. Covering 290 hectares with Kunming Lake occupying three-quarters of the 
                      area, this UNESCO World Heritage Site served as the summer retreat for the Qing Dynasty royal family.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Originally built in 1750 during Emperor Qianlong's reign, the palace was later reconstructed by 
                      Empress Dowager Cixi, who used it as her primary residence. The complex masterfully combines natural 
                      landscapes with architectural elements, creating a harmonious blend that exemplifies traditional 
                      Chinese aesthetic principles.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Garden Highlights</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Long Corridor, stretching 728 meters along the lake shore, is decorated with over 14,000 paintings 
                      depicting Chinese history and mythology. The Marble Boat, an ornate stone structure, symbolizes the 
                      stability of the Qing Dynasty and offers stunning lake views.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Must-See Features</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                      <li>Kunming Lake - Take a boat ride on the serene waters</li>
                      <li>Longevity Hill - Climb for panoramic views of the palace</li>
                      <li>Long Corridor - World's longest painted gallery</li>
                      <li>Marble Boat - Empress Cixi's favorite pavilion</li>
                      <li>Seventeen-Arch Bridge - Iconic stone bridge with beautiful reflections</li>
                      <li>Tower of Buddhist Incense - The palace's tallest structure</li>
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
                    title="Summer Palace Tours"
                    description="Discover amazing tours and activities for the Summer Palace"
                    className="w-full"
                    tourIds={attractionData.tourIds}
                  />
                  
                  <div className="mt-6 p-4 bg-gradient-to-br from-chinese-50 to-gold-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Why Book with GetYourGuide?</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Skip-the-line entrance tickets</li>
                      <li>✓ Expert garden guide</li>
                      <li>✓ Boat ride included options</li>
                      <li>✓ Free cancellation available</li>
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
              <Link href="/attractions/temple-of-heaven" className="btn-secondary">
                Temple of Heaven
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
