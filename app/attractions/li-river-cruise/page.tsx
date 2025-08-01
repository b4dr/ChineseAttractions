import Link from 'next/link'
import { MapPin, Star, Clock, Users, Camera, Waves, Mountain, Calendar, ArrowRight, Sparkles } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Li River Cruise - Complete Travel Guide 2024 | Chinese Attractions',
  description: 'Experience the Li River Cruise with our comprehensive guide. Book tours, discover karst landscapes, and enjoy China\'s most scenic river journey.',
  keywords: [
    'Li River Cruise',
    'Li River Guilin',
    'Guilin attractions',
    'Yangshuo cruise',
    'China river cruise',
    'Karst mountains',
    'Li River tours',
    'Guilin travel guide',
    'China scenic cruise',
    'Bamboo rafting'
  ],
  openGraph: {
    title: 'Li River Cruise - Complete Travel Guide 2024',
    description: 'Experience the Li River Cruise with our comprehensive guide. Book tours and discover karst landscapes.',
    images: ['/li-river-og.jpg'],
    url: '/attractions/li-river-cruise',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Li River Cruise - Complete Travel Guide 2024',
    description: 'Experience the Li River Cruise with our comprehensive guide.',
    images: ['/li-river-og.jpg']
  },
  alternates: {
    canonical: '/attractions/li-river-cruise'
  }
}

const attractionData = {
  name: 'Li River Cruise',
  chineseName: '漓江',
  location: 'Guilin to Yangshuo, Guangxi',
  rating: 4.8,
  reviews: 92000,
  duration: '4-5 hours',
  category: 'Natural Wonder',
  established: 'Natural Formation',
  bestTimeToVisit: 'April-October',
  difficulty: 'Easy',
  highlights: [
    'UNESCO World Heritage landscape',
    'Iconic karst mountain scenery',
    'Traditional bamboo rafting',
    'Featured on 20 Yuan banknote',
    'Crystal clear river waters',
    'Ancient fishing villages'
  ],
  tourIds: ['165345'], // Using placeholder tour ID
  locationId: '1142' // Guilin location ID
}

const sections = [
  {
    icon: Mountain,
    title: 'Karst Landscapes',
    description: 'Marvel at the unique limestone peaks that inspired countless Chinese paintings and poems.'
  },
  {
    icon: Waves,
    title: 'Scenic River Journey',
    description: 'Enjoy a peaceful cruise through some of China\'s most breathtaking natural scenery.'
  },
  {
    icon: Camera,
    title: 'Photography Paradise',
    description: 'Capture the iconic landscapes featured on Chinese currency and traditional art.'
  },
  {
    icon: Users,
    title: 'Cultural Experience',
    description: 'Meet local fishermen and experience traditional river life in ancient villages.'
  }
]

const practicalInfo = [
  {
    icon: Clock,
    title: 'Cruise Schedule',
    details: [
      'Daily departures: 9:00 AM - 9:30 AM',
      'Duration: 4-5 hours (Guilin to Yangshuo)',
      'Bamboo rafting: 2-3 hours (shorter sections)',
      'Best lighting: Morning departures'
    ]
  },
  {
    icon: MapPin,
    title: 'Getting There',
    details: [
      'Start: Guilin Zhujiang Pier',
      'End: Yangshuo West Street',
      'Return: Bus or private transfer to Guilin',
      'Airport: 1 hour from Guilin Liangjiang Airport'
    ]
  },
  {
    icon: Calendar,
    title: 'Best Time to Visit',
    details: [
      'Spring (Apr-May): Perfect weather, blooming flowers',
      'Summer (Jun-Aug): Lush greenery, occasional rain',
      'Autumn (Sep-Oct): Clear skies, comfortable temperatures',
      'Avoid: Winter low water levels'
    ]
  }
]

export default function LiRiverCruisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-chinese-500 to-gold-500 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-gold-200 mr-3" />
              <span className="text-gold-200 font-medium text-lg">China's Most Scenic River</span>
            </div>
            
            <h1 className="heading-xl text-white mb-8 animate-fade-in-up">
              {attractionData.name}
              <span className="block text-gradient bg-gradient-to-r from-gold-200 to-yellow-200 bg-clip-text text-transparent text-2xl mt-2">
                {attractionData.chineseName}
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Journey through China's most iconic landscape on the Li River. This UNESCO World Heritage site features 
              stunning karst mountains, crystal-clear waters, and scenery so beautiful it's featured on Chinese currency.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Li River Cruise</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Li River, known in Chinese as Lijiang (漓江), flows through one of the world's most spectacular 
                      karst landscapes. This 83-kilometer stretch from Guilin to Yangshuo has inspired Chinese artists and 
                      poets for over 1,000 years and is considered the crown jewel of China's natural attractions.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The river winds through a dreamlike landscape of towering limestone peaks, each with its own poetic 
                      name like "Elephant Trunk Hill" and "Nine Horses Fresco Hill." The scenery is so iconic that it's 
                      featured on the back of China's 20 Yuan banknote, making it one of the most recognizable landscapes 
                      in the world.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">The Cruise Experience</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The traditional cruise takes 4-5 hours aboard comfortable boats with panoramic windows and outdoor 
                      decks. As you drift downstream, you'll pass through a constantly changing gallery of natural art, 
                      with each bend in the river revealing new vistas of emerald waters and ancient peaks.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Highlights Along the Way</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                      <li>Elephant Trunk Hill - Guilin's most famous landmark</li>
                      <li>Crown Cave - Stunning underground limestone formations</li>
                      <li>Xingping Ancient Town - Traditional fishing village</li>
                      <li>Nine Horses Fresco Hill - Natural rock formations</li>
                      <li>Yellow Cloth Shoal - Mirror-like water reflections</li>
                      <li>Yangshuo West Street - Charming destination town</li>
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
                    title="Li River Cruise Tours"
                    description="Discover amazing Li River cruise and bamboo rafting experiences"
                    className="w-full"
                    tourIds={attractionData.tourIds}
                  />
                  
                  <div className="mt-6 p-4 bg-gradient-to-br from-chinese-50 to-gold-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Why Book with GetYourGuide?</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Guaranteed cruise tickets</li>
                      <li>✓ Hotel pickup included</li>
                      <li>✓ Professional photography service</li>
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
                      <span className="text-gray-600">Formation:</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More Guilin Attractions</h2>
            <p className="text-gray-600 mb-8">Discover other incredible destinations in Guilin</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/cities/guilin" className="btn-secondary">
                Elephant Trunk Hill
              </Link>
              <Link href="/cities/guilin" className="btn-secondary">
                Reed Flute Cave
              </Link>
              <Link href="/cities/guilin" className="btn-secondary">
                Yangshuo West Street
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
