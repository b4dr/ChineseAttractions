import Link from 'next/link'
import { Calendar, MapPin, Star, Users, Camera, Gift, Sparkles, ArrowRight, Clock, Heart } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'
import SchemaMarkup from '@/components/SchemaMarkup'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chinese New Year 2025 Travel Guide - Best Destinations & Celebrations | Chinese Attractions',
  description: 'Experience Chinese New Year 2025 in China! Discover the best destinations, traditional celebrations, temple fairs, and exclusive tours. Book your Spring Festival adventure now!',
  keywords: [
    'Chinese New Year 2025',
    'Spring Festival China',
    'Chinese New Year celebrations',
    'China travel February 2025',
    'Temple fairs Beijing',
    'Chinese New Year tours',
    'Spring Festival travel',
    'China lunar new year',
    'Beijing Chinese New Year',
    'Shanghai Spring Festival',
    'Chinese New Year traditions',
    'China holiday travel 2025'
  ],
  openGraph: {
    title: 'Chinese New Year 2025 Travel Guide - Best Destinations & Celebrations',
    description: 'Experience Chinese New Year 2025 in China! Discover the best destinations, traditional celebrations, temple fairs, and exclusive tours.',
    images: ['/chinese-new-year-2025-og.jpg'],
    url: '/blog/chinese-new-year-2025-travel-guide',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chinese New Year 2025 Travel Guide - Best Destinations & Celebrations',
    description: 'Experience Chinese New Year 2025 in China! Discover the best destinations, traditional celebrations, temple fairs, and exclusive tours.',
    images: ['/chinese-new-year-2025-og.jpg']
  },
  alternates: {
    canonical: '/blog/chinese-new-year-2025-travel-guide'
  }
}

const destinations = [
  {
    name: 'Beijing',
    highlight: 'Temple of Heaven & Forbidden City Celebrations',
    description: 'Experience the grandest Chinese New Year celebrations at iconic temples and palaces.',
    activities: ['Temple Fair at Ditan Park', 'Forbidden City Special Exhibitions', 'Traditional Dragon Dance Shows'],
    tourIds: ['189'], // Beijing tours
    image: '/beijing-cny.jpg'
  },
  {
    name: 'Shanghai',
    highlight: 'Yu Garden Lantern Festival',
    description: 'Marvel at thousands of traditional lanterns and modern light displays.',
    activities: ['Yu Garden Lantern Festival', 'Bund Fireworks Display', 'Traditional Tea Ceremonies'],
    tourIds: ['216'], // Shanghai tours
    image: '/shanghai-cny.jpg'
  },
  {
    name: 'Xi\'an',
    highlight: 'Tang Dynasty Cultural Performances',
    description: 'Step back in time with authentic Tang Dynasty New Year celebrations.',
    activities: ['Tang Paradise Light Show', 'Ancient City Wall Celebrations', 'Traditional Dumpling Making'],
    tourIds: ['224'], // Xi'an tours
    image: '/xian-cny.jpg'
  }
]

const traditions = [
  {
    icon: Gift,
    title: 'Red Envelopes (Hongbao)',
    description: 'Learn about the tradition of giving red envelopes filled with money for good luck.',
    significance: 'Symbolizes good fortune and prosperity for the new year'
  },
  {
    icon: Sparkles,
    title: 'Dragon & Lion Dances',
    description: 'Witness spectacular dragon and lion dance performances throughout the cities.',
    significance: 'Believed to bring good luck and chase away evil spirits'
  },
  {
    icon: Heart,
    title: 'Family Reunions',
    description: 'Experience the warmth of Chinese family traditions during the most important holiday.',
    significance: 'The most important aspect of Chinese New Year celebrations'
  },
  {
    icon: Calendar,
    title: 'Temple Visits',
    description: 'Join locals in visiting temples to pray for good fortune in the new year.',
    significance: 'Seeking blessings and making wishes for the coming year'
  }
]

const travelTips = [
  {
    icon: Clock,
    title: 'Book Early',
    details: [
      'Hotels fill up quickly during Spring Festival',
      'Train tickets sell out weeks in advance',
      'Tours have limited availability',
      'Prices increase significantly closer to the date'
    ]
  },
  {
    icon: MapPin,
    title: 'Best Locations',
    details: [
      'Beijing: Traditional temple fairs and imperial celebrations',
      'Shanghai: Modern celebrations with traditional elements',
      'Xi\'an: Ancient cultural performances and historic sites',
      'Guangzhou: Flower markets and Cantonese traditions'
    ]
  },
  {
    icon: Users,
    title: 'What to Expect',
    details: [
      'Massive crowds at popular attractions',
      'Many shops and restaurants closed on New Year\'s Day',
      'Incredible festive atmosphere everywhere',
      'Unique cultural experiences not available other times'
    ]
  }
]

export default function ChineseNewYear2025Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-yellow-500 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 mr-3 text-yellow-300" />
              <span className="text-yellow-300 font-semibold text-lg">Spring Festival 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Chinese New Year 2025
              <span className="block text-yellow-300">Travel Guide</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Experience the magic of Spring Festival in China • February 10-17, 2025
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#destinations" className="btn-primary bg-white text-red-600 hover:bg-red-50">
                Explore Destinations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="#book-tours" className="bg-yellow-500 text-red-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors border-2 border-yellow-400">
                Book Tours Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Welcome the Year of the Snake 🐍
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Chinese New Year 2025 falls on <strong>February 10th</strong>, marking the beginning of the Year of the Snake. 
                This is the most important holiday in Chinese culture, offering travelers a unique opportunity to witness 
                centuries-old traditions, spectacular celebrations, and authentic cultural experiences that happen nowhere else in the world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-red-50 to-yellow-50 p-8 rounded-2xl">
                <Calendar className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Dates 2025</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>February 10:</strong> Chinese New Year's Day</li>
                  <li><strong>February 10-17:</strong> Spring Festival Holiday</li>
                  <li><strong>February 24:</strong> Lantern Festival</li>
                  <li><strong>February 8-9:</strong> New Year's Eve celebrations</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-red-50 p-8 rounded-2xl">
                <Star className="w-12 h-12 text-yellow-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Year of the Snake</h3>
                <p className="text-gray-700">
                  2025 is the Year of the Wood Snake, symbolizing wisdom, transformation, and renewal. 
                  People born in Snake years are considered intelligent, graceful, and intuitive. 
                  This year promises growth, healing, and positive changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Destinations */}
      <section id="destinations" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Best Destinations for Chinese New Year 2025
              </h2>
              <p className="text-xl text-gray-600">
                Discover where to experience the most authentic and spectacular Spring Festival celebrations
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {destinations.map((destination, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-red-400 to-yellow-400 relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{destination.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-red-600 mb-2">{destination.highlight}</h4>
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-2">Must-See Activities:</h5>
                      <ul className="space-y-1">
                        {destination.activities.map((activity, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <Sparkles className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <GetYourGuideWidget 
                      locationId={destination.name === 'Beijing' ? '189' : destination.name === 'Shanghai' ? '18' : '297'}
                      widgetType="activities"
                      title={`${destination.name} Chinese New Year Tours`}
                      description={`Book exclusive Chinese New Year experiences in ${destination.name}`}
                      className="w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Traditions & Culture */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Chinese New Year Traditions
              </h2>
              <p className="text-xl text-gray-600">
                Understand the rich cultural significance behind Spring Festival celebrations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {traditions.map((tradition, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tradition.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tradition.title}</h3>
                  <p className="text-gray-600 mb-3">{tradition.description}</p>
                  <p className="text-sm text-red-600 font-medium">{tradition.significance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Essential Travel Tips
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know for a successful Chinese New Year trip
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {travelTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg flex items-center justify-center mr-4">
                      <tip.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{tip.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {tip.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book-tours" className="py-16 bg-gradient-to-br from-red-600 to-yellow-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book Your Chinese New Year Adventure
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Don't miss out on this once-in-a-lifetime cultural experience. Tours fill up fast during Spring Festival!
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <GetYourGuideWidget 
                locationId="189"
                widgetType="activities"
                title="Chinese New Year Tours & Experiences"
                description="Book exclusive Chinese New Year tours and cultural experiences in Beijing"
                className="w-full"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Calendar className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                <h3 className="font-bold mb-2">Free Cancellation</h3>
                <p className="text-sm text-red-100">Cancel up to 24 hours before</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Users className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                <h3 className="font-bold mb-2">Expert Guides</h3>
                <p className="text-sm text-red-100">Local cultural specialists</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Star className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                <h3 className="font-bold mb-2">Skip the Lines</h3>
                <p className="text-sm text-red-100">Priority access to attractions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Travel Guides</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Link href="/blog/best-time-to-visit" className="bg-gradient-to-br from-red-50 to-yellow-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <Calendar className="w-8 h-8 text-red-600 mb-3 mx-auto" />
                <h3 className="font-bold text-gray-900 mb-2">Best Time to Visit China</h3>
                <p className="text-gray-600 text-sm">Complete seasonal travel guide</p>
              </Link>
              
              <Link href="/blog/cultural-guide" className="bg-gradient-to-br from-yellow-50 to-red-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <Heart className="w-8 h-8 text-yellow-600 mb-3 mx-auto" />
                <h3 className="font-bold text-gray-900 mb-2">Chinese Culture Guide</h3>
                <p className="text-gray-600 text-sm">Traditions, customs, and etiquette</p>
              </Link>
              
              <Link href="/attractions" className="bg-gradient-to-br from-red-50 to-yellow-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <MapPin className="w-8 h-8 text-red-600 mb-3 mx-auto" />
                <h3 className="font-bold text-gray-900 mb-2">Top Attractions</h3>
                <p className="text-gray-600 text-sm">Must-visit destinations in China</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup for SEO */}
      <SchemaMarkup 
        type="article"
        data={{
          title: "Chinese New Year 2025 Travel Guide - Best Destinations & Celebrations",
          description: "Experience Chinese New Year 2025 in China! Discover the best destinations, traditional celebrations, temple fairs, and exclusive tours. Book your Spring Festival adventure now!",
          image: "/chinese-new-year-2025-og.jpg",
          author: "China Travel Expert Team",
          authorTitle: "Cultural Travel Specialists",
          datePublished: "2025-01-20",
          dateModified: "2025-01-20",
          url: "/blog/chinese-new-year-2025-travel-guide",
          category: "Travel Guide",
          keywords: ["Chinese New Year 2025", "Spring Festival China", "Chinese New Year celebrations", "China travel February 2025", "Temple fairs Beijing", "Chinese New Year tours"],
          wordCount: 3500,
          readTime: "PT18M"
        }}
      />
      
      <SchemaMarkup 
        type="breadcrumb"
        data={{
          breadcrumbs: [
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "Chinese New Year 2025 Travel Guide", url: "/blog/chinese-new-year-2025-travel-guide" }
          ]
        }}
      />
    </div>
  )
}
