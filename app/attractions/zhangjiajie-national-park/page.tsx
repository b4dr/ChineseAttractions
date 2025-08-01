import Link from 'next/link'
import { MapPin, Star, Clock, Users, Camera, Mountain, TreePine, Calendar, ArrowRight, Sparkles } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zhangjiajie National Park - Complete Travel Guide 2024 | Chinese Attractions',
  description: 'Explore Zhangjiajie National Park with our comprehensive guide. Book tours, discover Avatar mountains, and experience China\'s most spectacular natural wonder.',
  keywords: [
    'Zhangjiajie National Park',
    'Avatar mountains',
    'Zhangjiajie tours',
    'Hunan attractions',
    'China national parks',
    'Glass bridge Zhangjiajie',
    'Tianmen Mountain',
    'China travel guide',
    'UNESCO World Heritage',
    'Sandstone pillars'
  ],
  openGraph: {
    title: 'Zhangjiajie National Park - Complete Travel Guide 2024',
    description: 'Explore Zhangjiajie National Park with our comprehensive guide. Book tours and discover Avatar mountains.',
    images: ['/zhangjiajie-og.jpg'],
    url: '/attractions/zhangjiajie-national-park',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zhangjiajie National Park - Complete Travel Guide 2024',
    description: 'Explore Zhangjiajie National Park with our comprehensive guide.',
    images: ['/zhangjiajie-og.jpg']
  },
  alternates: {
    canonical: '/attractions/zhangjiajie-national-park'
  }
}

const attractionData = {
  name: 'Zhangjiajie National Park',
  chineseName: '张家界国家森林公园',
  location: 'Hunan Province, China',
  rating: 4.9,
  reviews: 115000,
  duration: '2-3 days',
  category: 'UNESCO World Heritage Site',
  established: '1982 (First National Park in China)',
  bestTimeToVisit: 'April-June, September-November',
  difficulty: 'Moderate',
  highlights: [
    'UNESCO World Heritage Site since 1992',
    'Inspiration for Avatar\'s Pandora',
    'World\'s longest glass bridge',
    'Over 3,000 sandstone pillars',
    'Tianmen Mountain cable car',
    'Unique quartzite formations'
  ],
  tourIds: ['165345'], // Using placeholder tour ID
  locationId: '1142' // Using Guilin location ID as placeholder for Hunan
}

const sections = [
  {
    icon: Mountain,
    title: 'Avatar Mountains',
    description: 'Marvel at the towering sandstone pillars that inspired the floating mountains in Avatar.'
  },
  {
    icon: TreePine,
    title: 'Pristine Nature',
    description: 'Explore ancient forests with rare plants and wildlife in China\'s first national park.'
  },
  {
    icon: Camera,
    title: 'Spectacular Views',
    description: 'Capture breathtaking panoramas from glass bridges and mountain peaks.'
  },
  {
    icon: Users,
    title: 'Adventure Activities',
    description: 'Experience thrilling cable cars, glass walkways, and mountain hiking trails.'
  }
]

const practicalInfo = [
  {
    icon: Clock,
    title: 'Opening Hours',
    details: [
      'Park: 7:00 AM - 6:00 PM (daily)',
      'Cable cars: 7:30 AM - 5:30 PM',
      'Glass bridge: 8:00 AM - 5:00 PM',
      'Recommended: 2-3 days for full experience'
    ]
  },
  {
    icon: MapPin,
    title: 'Getting There',
    details: [
      'Fly: Zhangjiajie Hehua Airport (40 minutes)',
      'Train: Zhangjiajie Railway Station',
      'Bus: From major cities in Hunan',
      'Location: Northwestern Hunan Province'
    ]
  },
  {
    icon: Calendar,
    title: 'Best Time to Visit',
    details: [
      'Spring (Apr-Jun): Mild weather, blooming flowers',
      'Autumn (Sep-Nov): Clear skies, comfortable hiking',
      'Avoid: Summer crowds and winter fog',
      'Early morning: Best visibility and photos'
    ]
  }
]

export default function ZhangjiajieNationalParkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-chinese-500 to-gold-500 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-gold-200 mr-3" />
              <span className="text-gold-200 font-medium text-lg">Avatar's Real-Life Pandora</span>
            </div>
            
            <h1 className="heading-xl text-white mb-8 animate-fade-in-up">
              {attractionData.name}
              <span className="block text-gradient bg-gradient-to-r from-gold-200 to-yellow-200 bg-clip-text text-transparent text-xl mt-2">
                {attractionData.chineseName}
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Step into the otherworldly landscape that inspired Avatar's Pandora. Zhangjiajie National Park features over 
              3,000 towering sandstone pillars, ancient forests, and the world's longest glass bridge.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">About Zhangjiajie National Park</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Zhangjiajie National Forest Park, established in 1982 as China's first national park, is a geological 
                      wonderland that seems to defy gravity. Located in northwestern Hunan Province, this UNESCO World Heritage 
                      Site is famous for its towering quartzite sandstone pillars that rise dramatically from the forest floor, 
                      creating an otherworldly landscape that inspired the floating mountains in James Cameron's Avatar.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The park covers 4,810 hectares and contains over 3,000 sandstone pillars, some reaching heights of over 
                      200 meters. These unique formations were created over 380 million years through water erosion and weathering, 
                      resulting in the spectacular landscape we see today. The area is also home to rare plants and wildlife, 
                      including the endangered Chinese giant salamander.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Avatar Connection</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The park gained international fame when director James Cameron used its landscapes as inspiration for the 
                      floating Hallelujah Mountains in Avatar. In 2010, one of the park's most famous pillars was officially 
                      renamed "Avatar Hallelujah Mountain" to honor this connection, making it a pilgrimage site for movie fans 
                      from around the world.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Must-See Attractions</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                      <li>Avatar Hallelujah Mountain - The famous pillar from the movie</li>
                      <li>Zhangjiajie Glass Bridge - World's longest glass-bottom bridge</li>
                      <li>Tianmen Mountain - "Heaven's Gate" natural arch</li>
                      <li>Golden Whip Stream - Scenic valley hiking trail</li>
                      <li>Bailong Elevator - World's tallest outdoor elevator</li>
                      <li>Tianzi Mountain - Panoramic viewing platform</li>
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
                    title="Zhangjiajie National Park Tours"
                    description="Discover amazing tours and activities for Zhangjiajie National Park"
                    className="w-full"
                    tourIds={attractionData.tourIds}
                  />
                  
                  <div className="mt-6 p-4 bg-gradient-to-br from-chinese-50 to-gold-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Why Book with GetYourGuide?</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Multi-day tour packages</li>
                      <li>✓ Glass bridge tickets included</li>
                      <li>✓ Professional nature guide</li>
                      <li>✓ Hotel and transport included</li>
                      <li>✓ Small group adventures</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More Natural Wonders</h2>
            <p className="text-gray-600 mb-8">Discover other incredible natural attractions in China</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/attractions/li-river-cruise" className="btn-secondary">
                Li River Cruise
              </Link>
              <Link href="/attractions/giant-panda-base" className="btn-secondary">
                Giant Panda Base
              </Link>
              <Link href="/cities/guilin" className="btn-secondary">
                Guilin Karst Landscapes
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
