import Link from 'next/link'
import { MapPin, Star, Clock, Users, Camera, Shield, Sword, Calendar, ArrowRight, Sparkles } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terracotta Army - Complete Travel Guide 2024 | Chinese Attractions',
  description: 'Discover the Terracotta Army with our comprehensive guide. Book tours, explore ancient history, and witness one of the world\'s greatest archaeological discoveries.',
  keywords: [
    'Terracotta Army',
    'Terracotta Warriors',
    'Xi\'an attractions',
    'China archaeology',
    'Qin Shi Huang',
    'Terracotta Army tours',
    'Xi\'an museums',
    'China travel guide',
    'Ancient China history',
    'UNESCO World Heritage'
  ],
  openGraph: {
    title: 'Terracotta Army - Complete Travel Guide 2024',
    description: 'Discover the Terracotta Army with our comprehensive guide. Book tours and explore ancient history.',
    images: ['/terracotta-army-og.jpg'],
    url: '/attractions/terracotta-army',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terracotta Army - Complete Travel Guide 2024',
    description: 'Discover the Terracotta Army with our comprehensive guide.',
    images: ['/terracotta-army-og.jpg']
  },
  alternates: {
    canonical: '/attractions/terracotta-army'
  }
}

const attractionData = {
  name: 'The Terracotta Army',
  chineseName: '兵马俑',
  location: 'Xi\'an, Shaanxi Province',
  rating: 4.8,
  reviews: 87000,
  duration: '4-5 hours',
  category: 'UNESCO World Heritage Site',
  established: '210-209 BC',
  bestTimeToVisit: 'April-May, September-October',
  difficulty: 'Easy',
  highlights: [
    'UNESCO World Heritage Site since 1987',
    'Over 8,000 life-sized warrior statues',
    'Each warrior has unique facial features',
    'Qin Shi Huang\'s eternal army',
    'Bronze weapons and horse chariots',
    'One of the greatest archaeological discoveries'
  ],
  tourIds: ['165345'], // Using Beijing tour ID as placeholder - should be updated with Xi'an specific tour
  locationId: '297' // Xi'an location ID
}

const sections = [
  {
    icon: Sword,
    title: 'Ancient Warriors',
    description: 'Marvel at over 8,000 life-sized terracotta soldiers, each with unique features and expressions.'
  },
  {
    icon: Shield,
    title: 'Imperial Legacy',
    description: 'Discover the tomb complex of China\'s first emperor, Qin Shi Huang, and his eternal army.'
  },
  {
    icon: Camera,
    title: 'Archaeological Wonder',
    description: 'Witness one of the 20th century\'s most significant archaeological discoveries.'
  },
  {
    icon: Users,
    title: 'Historical Immersion',
    description: 'Learn about ancient Chinese military culture and imperial burial traditions.'
  }
]

const practicalInfo = [
  {
    icon: Clock,
    title: 'Opening Hours',
    details: [
      'Mar-Nov: 8:30 AM - 6:00 PM',
      'Dec-Feb: 8:30 AM - 5:30 PM',
      'Open daily (no closing days)',
      'Last entry: 1.5 hours before closing'
    ]
  },
  {
    icon: MapPin,
    title: 'Getting There',
    details: [
      'From Xi\'an: 1 hour by car/bus',
      'Tourist Bus: Line 5 from Xi\'an Railway Station',
      'Private tour: Most convenient option',
      'Airport: 1.5 hours from Xi\'an Xianyang Airport'
    ]
  },
  {
    icon: Calendar,
    title: 'Best Time to Visit',
    details: [
      'Spring (Apr-May): Perfect weather, fewer crowds',
      'Autumn (Sep-Oct): Comfortable temperatures',
      'Early morning: Best lighting for photos',
      'Avoid: Chinese holidays and summer heat'
    ]
  }
]

export default function TerracottaArmyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-chinese-500 to-gold-500 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-gold-200 mr-3" />
              <span className="text-gold-200 font-medium text-lg">Archaeological Marvel</span>
            </div>
            
            <h1 className="heading-xl text-white mb-8 animate-fade-in-up">
              {attractionData.name}
              <span className="block text-gradient bg-gradient-to-r from-gold-200 to-yellow-200 bg-clip-text text-transparent text-2xl mt-2">
                {attractionData.chineseName}
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Witness one of the world's greatest archaeological discoveries. The Terracotta Army consists of over 8,000 
              life-sized warriors, each uniquely crafted to guard China's first emperor in the afterlife.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Terracotta Army</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Terracotta Army, discovered in 1974 by local farmers, represents one of the most significant 
                      archaeological finds of the 20th century. This vast collection of terracotta sculptures depicts the 
                      armies of Qin Shi Huang, the first Emperor of China, created to accompany him in the afterlife and 
                      protect his eternal reign.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Located near Xi'an in Shaanxi Province, the site contains over 8,000 soldiers, 130 chariots with 520 horses, 
                      and 150 cavalry horses. What makes this discovery truly remarkable is that each warrior was individually 
                      crafted with unique facial features, expressions, and details, showcasing the incredible artistry and 
                      dedication of ancient Chinese craftsmen.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Historical Significance</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Built between 210-209 BC, the Terracotta Army was part of a much larger necropolis designed for Emperor 
                      Qin Shi Huang, who unified China and built much of what would become the Great Wall. The emperor believed 
                      that this terracotta army would serve him in the afterlife, just as his real army served him in life.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">What You'll See</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                      <li>Pit 1: The largest pit with over 6,000 warriors in battle formation</li>
                      <li>Pit 2: Military units including cavalry, infantry, and archers</li>
                      <li>Pit 3: The command headquarters with high-ranking officers</li>
                      <li>Bronze Chariot Hall: Exquisite bronze horses and chariots</li>
                      <li>Museum exhibitions with artifacts and historical context</li>
                      <li>Ongoing archaeological excavation work</li>
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
                    title="Terracotta Army Tours"
                    description="Discover amazing tours and activities for the Terracotta Army"
                    className="w-full"
                    tourIds={attractionData.tourIds}
                  />
                  
                  <div className="mt-6 p-4 bg-gradient-to-br from-chinese-50 to-gold-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Why Book with GetYourGuide?</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Skip-the-line entrance tickets</li>
                      <li>✓ Expert archaeological guide</li>
                      <li>✓ Transportation from Xi'an included</li>
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
                      <span className="text-gray-600">Created:</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More Xi'an Attractions</h2>
            <p className="text-gray-600 mb-8">Discover other incredible destinations in Xi'an</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/cities/xian" className="btn-secondary">
                Xi'an City Wall
              </Link>
              <Link href="/cities/xian" className="btn-secondary">
                Big Wild Goose Pagoda
              </Link>
              <Link href="/cities/xian" className="btn-secondary">
                Muslim Quarter
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
