import Link from 'next/link'
import { MapPin, Star, Clock, Users, Camera, Heart, TreePine, Calendar, ArrowRight, Sparkles } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Giant Panda Base - Complete Travel Guide 2024 | Chinese Attractions',
  description: 'Visit the Giant Panda Base with our comprehensive guide. Book tours, meet adorable pandas, and support conservation efforts in Chengdu.',
  keywords: [
    'Giant Panda Base',
    'Chengdu Panda Base',
    'Giant pandas China',
    'Panda conservation',
    'Chengdu attractions',
    'Panda tours',
    'China wildlife',
    'Sichuan pandas',
    'China travel guide',
    'Panda breeding center'
  ],
  openGraph: {
    title: 'Giant Panda Base - Complete Travel Guide 2024',
    description: 'Visit the Giant Panda Base with our comprehensive guide. Book tours and meet adorable pandas.',
    images: ['/panda-base-og.jpg'],
    url: '/attractions/giant-panda-base',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giant Panda Base - Complete Travel Guide 2024',
    description: 'Visit the Giant Panda Base with our comprehensive guide.',
    images: ['/panda-base-og.jpg']
  },
  alternates: {
    canonical: '/attractions/giant-panda-base'
  }
}

const attractionData = {
  name: 'Giant Panda Base',
  chineseName: '成都大熊猫繁育研究基地',
  location: 'Chengdu, Sichuan Province',
  rating: 4.8,
  reviews: 156000,
  duration: '3-4 hours',
  category: 'Wildlife Conservation Center',
  established: '1987',
  bestTimeToVisit: 'March-May, September-November',
  difficulty: 'Easy',
  highlights: [
    'Home to over 200 giant pandas',
    'World-leading panda conservation',
    'Adorable panda cubs and nursery',
    'Beautiful bamboo forest setting',
    'Educational conservation programs',
    'China\'s national treasure experience'
  ],
  tourIds: ['165345'], // Using placeholder tour ID
  locationId: '297' // Using Xi'an location ID as placeholder for Chengdu
}

const sections = [
  {
    icon: Heart,
    title: 'Adorable Pandas',
    description: 'Meet over 200 giant pandas including playful cubs in naturalistic habitats.'
  },
  {
    icon: TreePine,
    title: 'Natural Environment',
    description: 'Explore beautiful bamboo forests designed to mimic pandas\' natural habitat.'
  },
  {
    icon: Camera,
    title: 'Perfect Photos',
    description: 'Capture unforgettable moments with the world\'s most beloved endangered species.'
  },
  {
    icon: Users,
    title: 'Conservation Education',
    description: 'Learn about panda conservation efforts and breeding programs.'
  }
]

const practicalInfo = [
  {
    icon: Clock,
    title: 'Opening Hours',
    details: [
      'Daily: 7:30 AM - 6:00 PM',
      'Best viewing: 8:00 AM - 10:00 AM',
      'Feeding time: 9:00 AM - 11:00 AM',
      'Pandas most active in morning'
    ]
  },
  {
    icon: MapPin,
    title: 'Getting There',
    details: [
      'Metro: Line 3 to Panda Avenue Station',
      'Bus: Routes 87, 198A, 198, 867',
      'Taxi: 30 minutes from city center',
      'Distance: 10km from Chengdu center'
    ]
  },
  {
    icon: Calendar,
    title: 'Best Time to Visit',
    details: [
      'Early morning: Most active pandas',
      'Spring/Autumn: Perfect weather',
      'Weekdays: Fewer crowds',
      'Avoid: Hot summer afternoons'
    ]
  }
]

export default function GiantPandaBasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-chinese-500 to-gold-500 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-gold-200 mr-3" />
              <span className="text-gold-200 font-medium text-lg">China's National Treasure</span>
            </div>
            
            <h1 className="heading-xl text-white mb-8 animate-fade-in-up">
              {attractionData.name}
              <span className="block text-gradient bg-gradient-to-r from-gold-200 to-yellow-200 bg-clip-text text-transparent text-xl mt-2">
                {attractionData.chineseName}
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Meet China's beloved giant pandas at the world's leading conservation center. Home to over 200 pandas, 
              this research base offers an unforgettable experience with these adorable endangered animals.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Giant Panda Base</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Chengdu Research Base of Giant Panda Breeding, established in 1987, stands as the world's 
                      premier giant panda conservation center. Located just 10 kilometers from Chengdu city center, 
                      this 247-acre facility is home to over 200 giant pandas and serves as a crucial sanctuary for 
                      China's most beloved endangered species.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      What began with just 6 rescued pandas has grown into a world-renowned research and breeding facility 
                      that has successfully bred over 200 pandas. The base combines cutting-edge conservation science with 
                      public education, allowing visitors to observe these magnificent creatures in naturalistic habitats 
                      while supporting vital conservation efforts.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Conservation Success</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The base has achieved remarkable success in panda breeding and conservation. Thanks to their efforts 
                      and similar programs worldwide, the giant panda's conservation status was upgraded from "Endangered" 
                      to "Vulnerable" in 2016. The facility continues to lead research in panda reproduction, nutrition, 
                      and habitat preservation.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">What You'll Experience</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                      <li>Adult Panda Enclosures - Watch pandas eating, playing, and sleeping</li>
                      <li>Panda Nursery - See adorable cubs with their mothers</li>
                      <li>Panda Museum - Learn about panda biology and conservation</li>
                      <li>Bamboo Forest Paths - Stroll through beautiful natural settings</li>
                      <li>Red Panda Area - Meet the giant panda's smaller cousin</li>
                      <li>Conservation Education Center - Interactive exhibits and films</li>
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
                    title="Giant Panda Base Tours"
                    description="Discover amazing tours and activities for the Giant Panda Base"
                    className="w-full"
                    tourIds={attractionData.tourIds}
                  />
                  
                  <div className="mt-6 p-4 bg-gradient-to-br from-chinese-50 to-gold-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Why Book with GetYourGuide?</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Skip-the-line entrance tickets</li>
                      <li>✓ Expert wildlife guide</li>
                      <li>✓ Hotel pickup included</li>
                      <li>✓ Support panda conservation</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More Chengdu Attractions</h2>
            <p className="text-gray-600 mb-8">Discover other incredible destinations in Chengdu</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/cities/chengdu" className="btn-secondary">
                Jinli Ancient Street
              </Link>
              <Link href="/cities/chengdu" className="btn-secondary">
                Wuhou Shrine
              </Link>
              <Link href="/cities/chengdu" className="btn-secondary">
                Sichuan Cuisine
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
