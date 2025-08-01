import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Star, Clock, Users, Camera, Calendar, ArrowRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nanjing Attractions & Tours | Complete Travel Guide to China\'s Ancient Capital',
  description: 'Discover the best Nanjing attractions, tours, and experiences. From Ming Tombs to Confucius Temple, explore China\'s historic capital with our comprehensive travel guide. Book top-rated tours and activities.',
  keywords: [
    'Nanjing attractions',
    'Nanjing tours',
    'Nanjing travel guide',
    'Ming Xiaoling Mausoleum',
    'Sun Yat-sen Mausoleum',
    'Nanjing sightseeing',
    'Nanjing activities',
    'Nanjing experiences',
    'China historical tours',
    'Nanjing vacation',
    'Nanjing tourism',
    'Nanjing landmarks',
    'Nanjing cultural sites',
    'Nanjing day trips',
    'Nanjing travel tips',
    'Nanjing itinerary',
    'Nanjing booking',
    'Nanjing tickets',
    'Nanjing guided tours',
    'Nanjing private tours',
    'Confucius Temple Nanjing',
    'Purple Mountain Nanjing',
    'Nanjing City Wall',
    'Qinhuai River Nanjing'
  ],
  openGraph: {
    title: 'Nanjing Attractions & Tours | Complete Travel Guide to China\'s Ancient Capital',
    description: 'Discover the best Nanjing attractions, tours, and experiences. From Ming Tombs to Confucius Temple, explore China\'s historic capital.',
    images: ['/nanjing-og.jpg'],
    url: '/cities/nanjing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nanjing Attractions & Tours | Complete Travel Guide',
    description: 'Discover the best Nanjing attractions, tours, and experiences. From Ming Tombs to Confucius Temple, explore China\'s historic capital.',
    images: ['/nanjing-og.jpg'],
  },
  alternates: {
    canonical: '/cities/nanjing',
  },
}

const travelTips = [
  {
    title: 'Best Time to Visit Nanjing',
    content: 'Spring (March-May) and autumn (September-November) offer the most comfortable weather. Spring brings beautiful cherry blossoms while autumn provides clear skies for sightseeing.',
    icon: Calendar
  },
  {
    title: 'Getting Around Nanjing',
    content: 'Nanjing Metro efficiently connects major attractions. Buses serve areas not covered by metro. Taxis and ride-sharing apps are convenient for direct routes.',
    icon: MapPin
  },
  {
    title: 'Language & Local Culture',
    content: 'Nanjing locals speak Mandarin with a distinctive accent. The city has deep historical significance in Chinese culture. English is available in major tourist areas.',
    icon: Users
  },
  {
    title: 'Historical Site Photography',
    content: 'Early morning and late afternoon provide the best lighting for historical monuments. Respect photography restrictions at sensitive memorial sites.',
    icon: Camera
  }
]

export default function NanjingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Nanjing",
    "description": "China's ancient capital famous for Ming Dynasty tombs, historical monuments, and rich cultural heritage",
    "url": "https://chineseattractions.com/cities/nanjing",
    "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=630&fit=crop",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.0603",
      "longitude": "118.7969"
    },
    "touristType": ["Historical Tourism", "Cultural Tourism", "Memorial Tourism", "Educational Tourism"],
    "hasMap": "https://maps.google.com/?q=Nanjing,China"
  }

  return (
    <div className="pt-16 md:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-gold-400 mr-3" />
              <span className="text-gold-400 font-medium text-lg">China's Ancient Capital</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6 animate-fade-in-up">
              Discover Nanjing's
              <span className="block text-gradient bg-gradient-to-r from-gold-400 to-yellow-300 bg-clip-text text-transparent">
                Imperial Heritage & History
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Experience China's most historically significant city, where six dynasties established their capitals and shaped the nation's destiny. 
              From the magnificent Ming Xiaoling Mausoleum to the solemn Sun Yat-sen Memorial, Nanjing offers profound insights into Chinese civilization, revolutionary history, and cultural evolution spanning over 2,500 years.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <a href="#tours" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center">
                Explore Nanjing Attractions
                <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0" />
              </a>
              <Link href="/cities" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4">
                Discover More Cities
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-12 text-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">6</div>
                <div className="text-sm">Ancient Dynasties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">2,500+</div>
                <div className="text-sm">Years of History</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">8M+</div>
                <div className="text-sm">Population</div>
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
              Why Visit Nanjing? The Ultimate Guide to China's Ancient Capital
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Nanjing, the distinguished capital of Jiangsu Province, stands as China's most historically significant city, having served as the capital for six major dynasties and the Republic of China. This remarkable metropolis of 8 million people preserves over 2,500 years of Chinese civilization, from ancient kingdoms through imperial dynasties to modern revolutionary movements that shaped contemporary China. Known as the <strong>"Ancient Capital of Six Dynasties"</strong> and the <strong>"Capital of Ten Dynasties,"</strong> Nanjing offers unparalleled insights into Chinese political, cultural, and social evolution through its extraordinary collection of historical monuments, museums, and cultural sites.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Ming Xiaoling Mausoleum: Imperial Grandeur and Sacred Architecture</h3>
              <p className="mb-6">
                The <strong>Ming Xiaoling Mausoleum</strong>, designated as a UNESCO World Heritage Site, represents the tomb of the Hongwu Emperor, founder of the Ming Dynasty, and stands as one of China's most magnificent imperial burial complexes. Constructed over 30 years beginning in 1381, this massive complex covers 170 hectares and established the architectural template for all subsequent Ming and Qing imperial tombs, including Beijing's famous Ming Tombs. The mausoleum's <strong>Sacred Way</strong>, lined with stone sculptures of animals and officials, creates a processional route that demonstrates the sophisticated artistic and engineering capabilities of 14th-century Chinese craftsmen.
              </p>
              
              <p className="mb-6">
                The complex's integration with Purple Mountain's natural landscape exemplifies Chinese geomantic principles that seek harmony between human construction and natural environment. The tomb's location, selected according to feng shui principles, creates a sacred space where architectural grandeur enhances rather than dominates the mountain's natural beauty. The site's extensive stone carvings, including the famous <strong>Elephant and Lion sculptures</strong>, represent masterpieces of Ming Dynasty art that have influenced Chinese sculptural traditions for over 600 years.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Sun Yat-sen Mausoleum: Modern China's Founding Father</h3>
              <p className="mb-6">
                The <strong>Sun Yat-sen Mausoleum</strong>, completed in 1929, honors the founder of the Republic of China and represents one of modern China's most important memorial sites. This magnificent structure, built into the southern slope of Purple Mountain, features 392 granite steps leading to the main hall, symbolizing the challenging path toward Chinese democracy and modernization that Sun Yat-sen advocated throughout his revolutionary career. The mausoleum's architectural design combines traditional Chinese elements with modern construction techniques, creating a monument that bridges China's imperial past with its republican future.
              </p>
              
              <p className="mb-6">
                The memorial hall houses Sun Yat-sen's marble sarcophagus and provides comprehensive exhibits about his life, political philosophy, and lasting influence on Chinese political development. The site's peaceful atmosphere and spectacular views of Nanjing create an environment for reflection on China's modern transformation and the complex challenges of political reform. The mausoleum attracts millions of visitors annually, serving as both a tourist destination and a pilgrimage site for those interested in Chinese political history and democratic ideals.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Confucius Temple and Qinhuai River Cultural District</h3>
              <p className="mb-6">
                The <strong>Confucius Temple (Fuzimiao)</strong> area represents Nanjing's most vibrant cultural and commercial district, combining historical significance with contemporary entertainment along the scenic Qinhuai River. Originally built in 1034 and reconstructed multiple times, the temple complex serves as both a center for Confucian education and a showcase for traditional Chinese architecture. The surrounding area features traditional shops, restaurants, and cultural performances that provide immersive experiences of classical Chinese urban life.
              </p>
              
              <p className="mb-6">
                The <strong>Qinhuai River</strong>, known as Nanjing's "mother river," has been the city's cultural and commercial heart for over 1,800 years. Evening boat cruises along the river offer magical experiences as traditional architecture is illuminated by colorful lights that reflect on the water's surface. The riverfront's <strong>traditional architecture</strong>, including historic bridges, pavilions, and merchant houses, creates an authentic atmosphere that has inspired Chinese poets and artists for centuries. The area's integration of historical preservation with modern tourism demonstrates successful approaches to cultural heritage management in contemporary China.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Nanjing City Wall: Medieval Engineering Marvel</h3>
              <p className="mb-6">
                The <strong>Nanjing City Wall</strong>, built during the early Ming Dynasty (1366-1386), represents the world's longest city wall and one of the most impressive examples of medieval military architecture. Stretching over 35 kilometers in its original form, with 25 kilometers still intact today, this massive fortification demonstrates the engineering capabilities and strategic thinking of 14th-century Chinese military planners. The wall's construction required over 200,000 workers and incorporated innovative features including multiple defensive layers, strategic gates, and integrated drainage systems.
              </p>
              
              <p className="mb-6">
                Walking or cycling along the wall's restored sections provides unique perspectives on Nanjing's urban development and the relationship between historical preservation and modern city planning. The wall's <strong>Zhonghua Gate</strong>, the largest and most complex gate in the system, features multiple courtyards and defensive mechanisms that demonstrate sophisticated military engineering. The structure's preservation allows visitors to experience medieval Chinese urban defense systems while enjoying panoramic views of contemporary Nanjing's skyline and surrounding landscape.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Memorial Sites and Modern History</h3>
              <p className="mb-6">
                The <strong>Nanjing Massacre Memorial Hall</strong> provides sobering education about one of the most tragic events in modern Chinese history, when Japanese forces occupied Nanjing in 1937. This important memorial site combines historical documentation, survivor testimonies, and archaeological evidence to create comprehensive understanding of wartime atrocities and their lasting impact on Chinese society. The memorial's thoughtful design creates spaces for reflection and education while honoring the memory of victims and promoting peace and reconciliation.
              </p>
              
              <p className="mb-6">
                The <strong>Presidential Palace</strong>, which served as the seat of government for the Republic of China, preserves important artifacts and exhibits related to modern Chinese political history. The complex includes the offices of Sun Yat-sen and Chiang Kai-shek, providing insights into the Republican period and the complex political developments that shaped 20th-century China. These sites offer valuable perspectives on China's transition from imperial rule to republican government and the ongoing influence of this historical period on contemporary Chinese politics and society.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Purple Mountain Scenic Area</h3>
              <p className="mb-6">
                <strong>Purple Mountain (Zijin Shan)</strong> serves as Nanjing's natural and cultural heart, combining scenic beauty with numerous historical sites in a comprehensive mountain park that covers 31 square kilometers. The mountain's name derives from the purple-colored rocks that create distinctive coloration during sunrise and sunset. Beyond the major mausolea, the mountain features temples, observatories, and hiking trails that provide peaceful escapes from urban life while offering spectacular views of Nanjing and the Yangtze River.
              </p>
              
              <p className="mb-6">
                The <strong>Purple Mountain Observatory</strong>, established in 1934, represents China's first modern astronomical research facility and continues to play important roles in Chinese space science and astronomy education. The mountain's extensive trail system accommodates hikers of all abilities, with options ranging from gentle walks to challenging climbs that reward visitors with panoramic views and opportunities to experience the natural environment that has provided spiritual inspiration for Chinese scholars and artists for over 1,000 years.
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
              Top Nanjing Tours & Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book the best Nanjing experiences with our trusted travel partner. Discover ancient capitals and imperial heritage.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="gyg-widget-container shadow-xl rounded-xl overflow-hidden bg-white">
              <div className="p-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Explore Nanjing's Imperial Legacy</h3>
                <p className="text-purple-100">From Ming tombs to revolutionary sites - experience China's ancient capital</p>
              </div>
              <div 
                data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
                data-gyg-locale-code="en-US" 
                data-gyg-widget="activities" 
                data-gyg-number-of-items="6" 
                data-gyg-partner-id="UENNPLZ" 
                data-gyg-q="nanjing"
                className="min-h-[500px] bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading Nanjing experiences...</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 text-center">
                <span className="text-sm text-gray-500">
                  Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/nanjing-l2634/" className="text-primary-600 hover:underline font-medium">GetYourGuide</a> | 
                  <span className="text-emerald-600 font-medium">Free Cancellation</span> | 
                  <span className="text-blue-600 font-medium">Instant Confirmation</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="section-padding bg-gradient-to-br from-chinese-50 to-gold-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              Essential Nanjing Travel Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make the most of your Nanjing adventure with these insider tips and practical advice.
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
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
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
              Frequently Asked Questions About Nanjing
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How many days do you need to see Nanjing?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We recommend 2-3 days to experience Nanjing's main historical attractions comfortably. This includes a full day for Purple Mountain sites 
                  (Ming Xiaoling Mausoleum, Sun Yat-sen Mausoleum), one day for city center attractions (Confucius Temple, City Wall, Presidential Palace), 
                  and optional time for memorial sites and museums. History enthusiasts may prefer 4-5 days for comprehensive exploration.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What is the best way to visit Purple Mountain attractions?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Take Metro Line 2 to Muxuyuan Station, then use the scenic area shuttle buses or walk between sites. 
                  The mountain has well-marked trails connecting major attractions. Allow a full day for comprehensive exploration. 
                  Early morning visits offer cooler temperatures and better photo opportunities, especially during spring and autumn.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Is the Nanjing Massacre Memorial suitable for all visitors?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The memorial contains graphic historical content and may not be suitable for young children. 
                  The exhibits are educational and respectfully presented, but deal with serious historical tragedy. 
                  Audio guides in multiple languages provide important context. Allow 2-3 hours for a comprehensive visit and reflection.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How do I get from Shanghai to Nanjing?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  High-speed trains connect Shanghai to Nanjing in 1-1.5 hours, with frequent departures throughout the day. 
                  Regular trains take about 2-3 hours and cost less. The train station is well-connected to Nanjing's metro system. 
                  Advance booking is recommended during peak travel periods and holidays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-purple-600 to-indigo-800 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-6">
            Ready to Explore Nanjing?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Start planning your unforgettable Nanjing adventure today. Book top-rated tours and activities 
            to experience the best of China's ancient capital and imperial heritage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#tours" className="btn-secondary bg-white text-purple-600 hover:bg-gray-50 text-lg px-8 py-4">
              Book Nanjing Tours Now
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
