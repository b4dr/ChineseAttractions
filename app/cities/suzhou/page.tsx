import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Star, Clock, Users, Camera, Calendar, ArrowRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Suzhou Attractions & Tours | Complete Travel Guide to China\'s Garden City',
  description: 'Discover the best Suzhou attractions, tours, and experiences. From classical gardens to ancient canals, explore China\'s Venice with our comprehensive travel guide. Book top-rated tours and activities.',
  keywords: [
    'Suzhou attractions',
    'Suzhou tours',
    'Suzhou travel guide',
    'Suzhou classical gardens',
    'Humble Administrator Garden',
    'Suzhou sightseeing',
    'Suzhou activities',
    'Suzhou experiences',
    'China garden tours',
    'Suzhou vacation',
    'Suzhou tourism',
    'Suzhou landmarks',
    'Suzhou cultural sites',
    'Suzhou day trips',
    'Suzhou travel tips',
    'Suzhou itinerary',
    'Suzhou booking',
    'Suzhou tickets',
    'Suzhou guided tours',
    'Suzhou private tours',
    'Tiger Hill Suzhou',
    'Pingjiang Road Suzhou',
    'Suzhou silk',
    'Suzhou water towns'
  ],
  openGraph: {
    title: 'Suzhou Attractions & Tours | Complete Travel Guide to China\'s Garden City',
    description: 'Discover the best Suzhou attractions, tours, and experiences. From classical gardens to ancient canals, explore China\'s Venice.',
    images: ['/suzhou-og.jpg'],
    url: '/cities/suzhou',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suzhou Attractions & Tours | Complete Travel Guide',
    description: 'Discover the best Suzhou attractions, tours, and experiences. From classical gardens to ancient canals, explore China\'s Venice.',
    images: ['/suzhou-og.jpg'],
  },
  alternates: {
    canonical: '/cities/suzhou',
  },
}

const travelTips = [
  {
    title: 'Best Time to Visit Suzhou',
    content: 'Spring (March-May) and autumn (September-November) offer the most pleasant weather for garden visits. Spring brings blooming flowers while autumn provides comfortable temperatures.',
    icon: Calendar
  },
  {
    title: 'Getting Around Suzhou',
    content: 'Suzhou Metro connects major attractions efficiently. Traditional boats offer scenic canal tours. Walking is ideal for exploring historic districts and gardens.',
    icon: MapPin
  },
  {
    title: 'Language & Local Culture',
    content: 'Suzhou dialect is unique but Mandarin is widely spoken. The city is known for refined culture and traditional crafts. English is common in tourist areas.',
    icon: Users
  },
  {
    title: 'Garden Photography Tips',
    content: 'Early morning and late afternoon provide the best lighting for garden photography. Each season offers different beauty - spring flowers, summer greenery, autumn colors.',
    icon: Camera
  }
]

export default function SuzhouPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Suzhou",
    "description": "China's garden city famous for classical gardens, ancient canals, and traditional silk culture",
    "url": "https://chineseattractions.com/cities/suzhou",
    "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=630&fit=crop",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "31.2989",
      "longitude": "120.5853"
    },
    "touristType": ["Cultural Tourism", "Garden Tourism", "Historical Tourism", "Water Tourism"],
    "hasMap": "https://maps.google.com/?q=Suzhou,China"
  }

  return (
    <div className="pt-16 md:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-gold-400 mr-3" />
              <span className="text-gold-400 font-medium text-lg">China's Garden City</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6 animate-fade-in-up">
              Discover Suzhou's
              <span className="block text-gradient bg-gradient-to-r from-gold-400 to-yellow-300 bg-clip-text text-transparent">
                Classical Garden Masterpieces
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Experience China's most elegant destination, where UNESCO World Heritage classical gardens showcase 2,500 years of landscape artistry. 
              From the Humble Administrator's Garden to ancient canals and silk workshops, Suzhou offers a perfect blend of refined culture, traditional crafts, and timeless beauty that has earned it the title "Venice of the East."
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <a href="#tours" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center">
                Explore Suzhou Attractions
                <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0" />
              </a>
              <Link href="/cities" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4">
                Discover More Cities
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-12 text-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">9</div>
                <div className="text-sm">UNESCO Gardens</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">2,500+</div>
                <div className="text-sm">Years of History</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">15M+</div>
                <div className="text-sm">Annual Visitors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-8">
              Why Visit Suzhou? The Ultimate Guide to China's Garden City
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Suzhou, the jewel of Jiangsu Province, stands as China's most refined cultural destination, earning the poetic designation <strong>"Paradise on Earth"</strong> alongside Hangzhou for its extraordinary collection of classical gardens and sophisticated urban planning. This elegant city of 12 million people represents the pinnacle of Chinese garden artistry, with nine UNESCO World Heritage classical gardens that showcase 2,500 years of landscape design evolution. Marco Polo famously called Suzhou the <strong>"Venice of the East"</strong> for its intricate network of canals, bridges, and waterways that have shaped the city's character since ancient times.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">UNESCO Classical Gardens: Masterpieces of Landscape Art</h3>
              <p className="mb-6">
                The <strong>Humble Administrator's Garden (Zhuozheng Yuan)</strong>, covering 5.2 hectares, represents the largest and most celebrated of Suzhou's classical gardens, demonstrating the sophisticated principles of Chinese garden design that have influenced landscape architecture worldwide. Created in 1509 during the Ming Dynasty, this masterpiece integrates water features, pavilions, bridges, and carefully selected plants to create a harmonious composition that changes with each season and viewing angle. The garden's three sections - eastern, central, and western - each offer distinct aesthetic experiences while maintaining overall unity through masterful use of borrowed scenery and spatial relationships.
              </p>
              
              <p className="mb-6">
                <strong>Lingering Garden (Liu Yuan)</strong> showcases the art of miniaturization and symbolic representation that characterizes Chinese garden philosophy, where every element carries cultural meaning and aesthetic purpose. The garden's famous <strong>Crown of Clouds Peak</strong>, a 6.5-meter-tall limestone sculpture, demonstrates the Chinese appreciation for natural forms enhanced by artistic intervention. The garden's covered walkways, featuring over 300 calligraphy inscriptions, create protected viewing corridors that frame garden scenes like living paintings while providing cultural education through classical Chinese poetry and philosophy.
              </p>
              
              <p className="mb-6">
                <strong>Master of Nets Garden (Wangshi Yuan)</strong>, though the smallest of the major gardens at just 0.6 hectares, achieves remarkable spatial complexity through ingenious design that creates the illusion of vast landscapes within intimate confines. This garden's influence extends far beyond China, with a complete replica installed at the Metropolitan Museum of Art in New York, introducing Western audiences to Chinese garden aesthetics. The garden's evening cultural performances, featuring traditional music, opera, and tea ceremonies in authentic historical settings, provide immersive experiences of classical Chinese culture.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Ancient Canals and Water Town Culture</h3>
              <p className="mb-6">
                Suzhou's extensive canal system, with over 300 bridges spanning waterways that total more than 35 kilometers in length, creates a unique urban environment where traditional water transportation continues alongside modern infrastructure. <strong>Pingjiang Road</strong>, a 1,600-meter historic street running parallel to the Pingjiang River, preserves the authentic atmosphere of ancient Suzhou with traditional architecture, artisan workshops, and tea houses that have operated continuously for centuries. This UNESCO-protected historic district demonstrates how traditional Chinese urban planning integrated residential, commercial, and cultural functions along waterways.
              </p>
              
              <p className="mb-6">
                Traditional boat tours through Suzhou's canal network provide unique perspectives on the city's architectural heritage and daily life, passing under ancient stone bridges and alongside traditional courtyard houses that showcase regional architectural styles developed over 2,000 years. The <strong>Grand Canal</strong>, which passes through Suzhou on its 1,776-kilometer journey from Beijing to Hangzhou, represents one of humanity's greatest engineering achievements and continues to play important roles in transportation, irrigation, and cultural identity throughout the Yangtze River Delta region.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Silk Culture and Traditional Crafts</h3>
              <p className="mb-6">
                Suzhou's silk industry, with over 4,000 years of continuous development, represents the world's most sophisticated silk production center and the birthplace of many techniques that define Chinese textile artistry. The <strong>Suzhou Silk Museum</strong> houses comprehensive collections demonstrating the evolution of silk production from ancient sericulture to contemporary industrial processes, including live silkworm demonstrations and traditional weaving workshops where visitors can observe master craftsmen creating intricate patterns using techniques passed down through generations.
              </p>
              
              <p className="mb-6">
                <strong>Suzhou embroidery</strong>, recognized as one of China's four great embroidery traditions, achieves extraordinary artistic effects through techniques that require decades to master. The city's embroidery workshops produce works of art that rival paintings in their detail and emotional expression, with master embroiderers capable of creating double-sided pieces featuring different images on each side using silk threads finer than human hair. These workshops offer visitors opportunities to observe the creation process and purchase authentic pieces that represent some of the world's finest textile artistry.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Tiger Hill and Historical Landmarks</h3>
              <p className="mb-6">
                <strong>Tiger Hill (Huqiu)</strong>, rising 36 meters above the surrounding landscape, combines natural beauty with over 2,500 years of historical significance, earning the designation as <strong>"the most famous place in Wuzhong"</strong> from ancient Chinese scholars. The hill's <strong>Yunyan Pagoda</strong>, built in 961 CE and leaning 3.59 degrees from vertical, predates Italy's Leaning Tower of Pisa by 200 years and demonstrates the sophisticated engineering capabilities of Song Dynasty architects. The pagoda's seven stories and octagonal design create an iconic silhouette that has symbolized Suzhou for over 1,000 years.
              </p>
              
              <p className="mb-6">
                The hill's legendary associations with King Helü of Wu, who ruled from 514-496 BCE, include the famous <strong>Sword Pool</strong> where the king's legendary swords are said to be buried, and various stone inscriptions that document over 2,000 years of Chinese history and literature. The site's integration of natural landscapes with cultural monuments demonstrates the Chinese philosophical approach to harmonizing human achievement with natural beauty, creating spaces that inspire contemplation and cultural appreciation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GetYourGuide Activities Widget */}
      <section id="tours" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              Top Suzhou Tours & Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book the best Suzhou experiences with our trusted travel partner. Discover classical gardens and ancient canals.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="gyg-widget-container shadow-xl rounded-xl overflow-hidden bg-white">
              <div className="p-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Explore Suzhou's Garden Masterpieces</h3>
                <p className="text-green-100">From UNESCO gardens to silk workshops - experience China's most refined city</p>
              </div>
              <div 
                data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
                data-gyg-locale-code="en-US" 
                data-gyg-widget="activities" 
                data-gyg-number-of-items="6" 
                data-gyg-partner-id="UENNPLZ" 
                data-gyg-q="suzhou"
                className="min-h-[500px] bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading Suzhou experiences...</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 text-center">
                <span className="text-sm text-gray-500">
                  Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/suzhou-l2633/" className="text-primary-600 hover:underline font-medium">GetYourGuide</a> | 
                  <span className="text-emerald-600 font-medium">Free Cancellation</span> | 
                  <span className="text-blue-600 font-medium">Instant Confirmation</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-gold-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              Essential Suzhou Travel Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make the most of your Suzhou adventure with these insider tips and practical advice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelTips.map((tip, index) => {
              const Icon = tip.icon
              return (
                <div 
                  key={tip.title}
                  className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tip.content}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-12">
              Frequently Asked Questions About Suzhou
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How many gardens can I visit in one day?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We recommend visiting 2-3 gardens per day to fully appreciate their beauty and cultural significance. 
                  The Humble Administrator's Garden requires 2-3 hours, while smaller gardens like Master of Nets can be explored in 1-2 hours. 
                  Rushing through multiple gardens diminishes the contemplative experience that makes Suzhou gardens special.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What is the best time to visit Suzhou gardens?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Early morning (8:00-9:00 AM) offers the most peaceful experience with better lighting for photography. 
                  Spring (March-May) brings blooming flowers, while autumn (September-November) provides comfortable temperatures and beautiful foliage. 
                  Each season offers different garden beauty, so any time can be rewarding with proper planning.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How do I get from Shanghai to Suzhou?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  High-speed trains connect Shanghai to Suzhou in just 25-30 minutes, with frequent departures throughout the day. 
                  Regular trains take about 1 hour and cost less. Buses are also available but take longer. 
                  Suzhou makes an excellent day trip from Shanghai, though staying overnight allows for more relaxed garden exploration.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Are English guides available for garden tours?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Professional English-speaking guides are available through GetYourGuide and major gardens. 
                  Audio guides in multiple languages are offered at most UNESCO gardens. 
                  Guided tours provide valuable cultural context about garden symbolism, history, and design principles that enhance the visit experience significantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-green-600 to-emerald-800 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-6">
            Ready to Explore Suzhou?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Start planning your unforgettable Suzhou adventure today. Book top-rated tours and activities 
            to experience the best of China's garden city and classical masterpieces.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#tours" className="btn-secondary bg-white text-green-600 hover:bg-gray-50 text-lg px-8 py-4">
              Book Suzhou Tours Now
            </a>
            <Link href="/cities" className="btn-outline border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              Explore More Cities
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
